import copy
import hashlib
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

import c_manifest_audit
import h3_gpu_observer
import shadow_decision_check


GPU = {
    "ok": True, "index": 1, "name": "NVIDIA GeForce RTX 4080",
    "total_mib": 32760, "used_mib": 1024, "free_mib": 31736,
}
IDLE_QUEUE = {"ok": True, "running_count": 0, "pending_count": 0}


class ObserverTests(unittest.TestCase):
    def test_idle_snapshot_is_advisory_only(self):
        result = h3_gpu_observer.evaluate(GPU, IDLE_QUEUE, 4096)
        self.assertEqual(result["advisory"], "IDLE_SNAPSHOT_ONLY")
        self.assertTrue(result["advisory_only_no_render_permission"])

    def test_busy_or_unknown_queue_never_reports_idle(self):
        for queue in (
            {"ok": True, "running_count": 1, "pending_count": 0},
            {"ok": False, "error": "COMFYUI_QUEUE_UNKNOWN"},
        ):
            with self.subTest(queue=queue):
                self.assertEqual(h3_gpu_observer.evaluate(GPU, queue, 4096)["advisory"], "WAIT")

    def test_rejects_wrong_gpu_and_malformed_counts(self):
        wrong_gpu = dict(GPU, name="NVIDIA GeForce RTX 4090")
        bad_queue = {"ok": True, "running_count": "0", "pending_count": 0}
        self.assertIn("GPU_UNVERIFIED", h3_gpu_observer.evaluate(wrong_gpu, IDLE_QUEUE, 0)["blockers"])
        self.assertIn("QUEUE_UNVERIFIED", h3_gpu_observer.evaluate(GPU, bad_queue, 0)["blockers"])

    @patch.object(h3_gpu_observer.subprocess, "run")
    def test_live_gpu_probe_checks_model_identity(self, run):
        run.return_value = SimpleNamespace(stdout="0, NVIDIA GeForce RTX 4090, 24564, 100, 24464\n")
        self.assertEqual(h3_gpu_observer.inspect_gpu(0)["error"], "GPU_IDENTITY_MISMATCH")
        run.assert_called_once()

    @patch.object(h3_gpu_observer, "build_opener")
    def test_comfy_probe_rejects_non_loopback_and_credentials(self, build_opener_mock):
        self.assertEqual(h3_gpu_observer.inspect_comfy("http://example.com")["error"], "ONLY_LOOPBACK_HTTP_ALLOWED")
        self.assertEqual(h3_gpu_observer.inspect_comfy("http://user:pass@127.0.0.1:8188")["error"], "ONLY_LOOPBACK_HTTP_ALLOWED")
        build_opener_mock.assert_not_called()

    def test_fixture_cli_handles_idle_busy_and_malformed_inputs(self):
        script = ROOT / "h3_gpu_observer.py"
        cases = [
            ({"gpu": GPU, "comfyui_queue": IDLE_QUEUE}, 0, "IDLE_SNAPSHOT_ONLY"),
            ({"gpu": GPU, "comfyui_queue": dict(IDLE_QUEUE, pending_count=1)}, 2, '"advisory": "WAIT"'),
            ({"gpu": GPU}, 2, "FIXTURE_INVALID"),
        ]
        with tempfile.TemporaryDirectory() as directory:
            for index, (fixture, expected_code, expected_text) in enumerate(cases):
                path = Path(directory) / f"fixture-{index}.json"
                path.write_text(json.dumps(fixture), encoding="utf-8")
                proc = subprocess.run(
                    [sys.executable, str(script), "--fixture", str(path)],
                    capture_output=True, text=True, check=False,
                )
                with self.subTest(index=index):
                    self.assertEqual(proc.returncode, expected_code, proc.stderr)
                    self.assertIn(expected_text, proc.stdout)

    def test_live_cli_requires_an_explicit_confirmed_gpu_index(self):
        proc = subprocess.run(
            [sys.executable, str(ROOT / "h3_gpu_observer.py")],
            capture_output=True, text=True, check=False,
        )
        self.assertEqual(proc.returncode, 2)
        self.assertIn("--gpu-index is required", proc.stderr)


class ManifestAuditTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.path = Path(self.temp.name) / "asset.bin"
        self.path.write_bytes(b"safe fixture")
        self.sha = hashlib.sha256(self.path.read_bytes()).hexdigest()

    def row(self, **overrides):
        row = {
            "asset_id": "asset-1", "path": str(self.path), "sha256": self.sha,
            "version": "v1", "review_scope": "P3_ONLY", "source_issue": "674-293",
            "parent_asset_id": None,
        }
        row.update(overrides)
        return row

    def test_hash_pass_does_not_claim_user_review(self):
        result = c_manifest_audit.audit([self.row()])
        asset = result["assets"][0]
        self.assertEqual(asset["sha_status"], "PASS_SHA")
        self.assertTrue(asset["review_metadata_declared"])
        self.assertFalse(asset["review_is_user_verified"])
        self.assertTrue(result["no_move_no_copy_no_delete"])

    def test_bad_sha_duplicate_and_invalid_metadata_are_distinguished(self):
        result = c_manifest_audit.audit([
            self.row(sha256="0" * 64),
            self.row(),
            self.row(asset_id="asset-3", review_scope=17),
        ])
        self.assertEqual([a["sha_status"] for a in result["assets"]], ["SHA_MISMATCH", "BAD_MANIFEST", "PASS_SHA"])
        self.assertEqual(result["counts"]["MISSING_REVIEW_METADATA"], 1)

    def test_non_object_row_is_reported_without_crashing(self):
        result = c_manifest_audit.audit([None, ["bad"]])
        self.assertEqual(result["counts"]["BAD_MANIFEST"], 2)


class ShadowPacketTests(unittest.TestCase):
    def setUp(self):
        self.packet = json.loads((ROOT / "EXAMPLE_SHADOW_PACKET_DEMO.json").read_text(encoding="utf-8"))
        self.schema = json.loads((ROOT / "QWEN_SHADOW_PACKET_SCHEMA.json").read_text(encoding="utf-8"))

    def test_demo_matches_full_json_schema_and_invariants(self):
        import jsonschema
        jsonschema.Draft202012Validator.check_schema(self.schema)
        jsonschema.validate(self.packet, self.schema)
        self.assertEqual(shadow_decision_check.validate(self.packet), [])

    def test_rejects_non_string_source_reference(self):
        packet = copy.deepcopy(self.packet)
        packet["source_refs"] = ["674-216", 216]
        self.assertIn("SOURCE_REF_WRONG_TYPE", shadow_decision_check.validate(packet))

    def test_rejects_authority_drift_and_extra_fields(self):
        import jsonschema
        packet = copy.deepcopy(self.packet)
        packet["authority"] = "GPU_OPERATOR"
        packet["render_now"] = True
        errors = shadow_decision_check.validate(packet)
        self.assertIn("UNRECOGNIZED_FIELDS:render_now", errors)
        self.assertIn("INVARIANT_FAILED:authority", errors)
        with self.assertRaises(jsonschema.ValidationError):
            jsonschema.validate(packet, self.schema)


if __name__ == "__main__":
    unittest.main(verbosity=2)
