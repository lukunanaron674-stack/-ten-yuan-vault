"""Independent source event coverage gate (stdlib only).
Do not let the generator choose its own 'complete' event checklist.
"""
import argparse
import hashlib
import json
from pathlib import Path


def audit_source_coverage(case, manifest):
    errors = set()
    if not isinstance(case, dict) or not isinstance(manifest, dict):
        return ['SCHEMA']
    if manifest.get('case_id') != case.get('case_id'):
        errors.add('SOURCE_CASE_ID_MISMATCH')
    if not manifest.get('source_scope') or not manifest.get('source_references'):
        errors.add('SOURCE_SCOPE_UNDEFINED')
    if not manifest.get('manifest_id') or not manifest.get('reviewer_id'):
        errors.add('SOURCE_MANIFEST_UNATTRIBUTED')
    if manifest.get('reviewer_id') == case.get('generator_id'):
        errors.add('SOURCE_SELF_REVIEW')
    if manifest.get('review_status') not in {'ASSISTED_SOURCE_AUDIT', 'REVIEWED_INDEPENDENT'}:
        errors.add('SOURCE_REVIEW_PENDING')
    expected = set(manifest.get('required_event_ids', []))
    observed = {e.get('event_id') for e in case.get('events', []) if isinstance(e, dict)}
    if not expected:
        errors.add('SOURCE_EVENT_MANIFEST_EMPTY')
    if expected - observed:
        errors.add('SOURCE_EVENT_COVERAGE_MISSING')
    if set(case.get('source_required_event_ids', [])) != expected:
        errors.add('SOURCE_EVENT_SCOPE_MISMATCH')
    evidence = manifest.get('source_event_evidence', {})
    if any(not evidence.get(eid) for eid in expected):
        errors.add('SOURCE_REQUIRED_EVENT_UNGROUNDED')
    # A model's asserted completeness is not a verified coverage result.
    if (manifest.get('review_status') == 'REVIEWED_INDEPENDENT' and
            not manifest.get('review_receipt_ref')):
        errors.add('SOURCE_INDEPENDENT_RECEIPT_MISSING')
    return sorted(errors)


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('packet',type=Path)
    parser.add_argument('--manifest',type=Path,required=True)
    args=parser.parse_args()
    case=json.loads(args.packet.read_text(encoding='utf-8'))
    manifest_bytes=args.manifest.read_bytes()
    manifest=json.loads(manifest_bytes)
    issues=audit_source_coverage(case,manifest)
    out={'status':'PASS_SOURCE_SCOPE' if not issues else 'FAIL_SOURCE_SCOPE',
         'review_level':manifest.get('review_status','UNKNOWN'),
         'holdout_eligible':not issues and manifest.get('review_status')=='REVIEWED_INDEPENDENT',
         'manifest_sha256':hashlib.sha256(manifest_bytes).hexdigest(),
         'errors':issues}
    print(json.dumps(out,ensure_ascii=False,indent=2))
    return 0 if not issues else 2


if __name__=='__main__':
    raise SystemExit(main())
