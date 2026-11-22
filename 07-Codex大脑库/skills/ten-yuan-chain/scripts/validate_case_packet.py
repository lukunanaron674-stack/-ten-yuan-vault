#!/usr/bin/env python3
"""AG-13 event/knowledge gate. Standard library only.
Usage: python validate_case_packet.py --self-test
       python validate_case_packet.py case_packet.json
Structural checks do NOT establish film truth, L2 rules or F3 feelings.
"""
import argparse
import copy
import json
import sys
from pathlib import Path
from causal_gate import validate_causal_edges

def validate(p):
    e = []
    def fail(code):
        e.append(code)
    if not isinstance(p, dict):
        return ["SCHEMA"]
    for k in ("case_id", "source_scope", "evidence_level"):
        if not p.get(k):
            fail("META_MISSING")
    for field in ("stages", "events", "source_required_event_ids", "knowledge_ledger",
                  "disclosure_ledger", "causal_edges", "relation_edges", "claims"):
        if field not in p:
            fail("REQUIRED_FIELD_MISSING")
    if p.get("information_sensitive") is True and not p.get("knowledge_ledger"):
        fail("KNOWLEDGE_TIMELINE_MISSING")
    if p.get("multi_actor_causality") is True and not p.get("causal_edges"):
        fail("CAUSAL_CHAIN_MISSING")
    stages = p.get("stages", [])
    if not isinstance(stages, list) or not stages or len(stages) != len(set(stages)):
        fail("STAGES")
        stages = []
    stage_ids = set(stages)
    events = p.get("events", [])
    if not isinstance(events, list):
        return e + ["EVENTS_SCHEMA"]
    ids = set()
    for x in events:
        if not isinstance(x, dict):
            fail("EVENT_SCHEMA")
            continue
        eid = x.get("event_id")
        if not eid or eid in ids:
            fail("EVENT_ID")
        ids.add(eid)
        if x.get("stage") not in stage_ids:
            fail("EVENT_STAGE")
        if not all(x.get(k) for k in ("actor", "action", "evidence_ref")):
            fail("EVENT_EVIDENCE")
    for x in p.get("knowledge_ledger", []):
        if x.get("stage") not in stage_ids or not all(x.get(k) for k in ("fact_id", "character_id")):
            fail("KNOWLEDGE_SCHEMA")
        state = x.get("knowledge")
        if state not in {"KNOWN", "NOT_KNOWN", "UNKNOWN", "UNVERIFIED"}:
            fail("KNOWLEDGE_VALUE")
        if state in {"KNOWN", "NOT_KNOWN"}:
            if x.get("basis") != "DIRECT_SOURCE" or not x.get("evidence_ref"):
                fail("KNOWLEDGE_UNGROUNDED")
        elif x.get("basis") == "INFERRED_FROM_DISCLOSURE":
            fail("DISCLOSURE_KNOWLEDGE_CONFLATED")
    for x in p.get("disclosure_ledger", []):
        if x.get("stage") not in stage_ids or x.get("disclosure") not in {"SAID", "WITHHELD", "UNKNOWN"}:
            fail("DISCLOSURE_SCHEMA")
        if not all(x.get(k) for k in ("speaker", "recipient", "fact_id", "evidence_ref")):
            fail("DISCLOSURE_EVIDENCE")
    for x in p.get("causal_edges", []):
        if x.get("from_event") not in ids or x.get("to_event") not in ids:
            fail("CAUSAL_DANGLING")
        if not x.get("mechanism") or not x.get("evidence_ref"):
            fail("CAUSAL_EVIDENCE")
    e.extend(validate_causal_edges(p))
    supports = []
    effects = {}
    for x in p.get("relation_edges", []):
        a, b = x.get("source"), x.get("target")
        if not a or not b or a == b or x.get("event_id") not in ids:
            fail("RELATION_ENDPOINT")
        if not x.get("changed_variable") or not x.get("evidence_ref"):
            fail("RELATION_EVIDENCE")
        effect = x.get("effect")
        if effect not in {"SUPPORT", "CONTROL", "COERCION", "HARM", "TRADEOFF", "NEUTRAL"}:
            fail("RELATION_EFFECT")
        if effect == "SUPPORT":
            supports.append(x)
        effects.setdefault(frozenset((a, b)), set()).add(effect)
        if x.get("strict_l2_relation") in {"SUPPLEMENT", "GENERATE", "RESTRAIN"}:
            fail("L2_UNAUTHORIZED")
    claims = p.get("claims", {})
    dual = claims.get("dual_support", "UNKNOWN")
    if isinstance(dual, dict) and dual.get("status") == "DUAL_SUPPORT_H":
        a, b = dual.get("a"), dual.get("b")
        ab = [x for x in supports if x.get("source") == a and x.get("target") == b]
        ba = [x for x in supports if x.get("source") == b and x.get("target") == a]
        if not ab or not ba or not any(x.get("event_id") != y.get("event_id") for x in ab for y in ba):
            fail("DUAL_SUPPORT_UNPROVEN")
    if claims.get("mixed_effects") is True and not any(
        "SUPPORT" in z and bool(z & {"CONTROL", "COERCION", "HARM", "TRADEOFF"})
        for z in effects.values()
    ):
        fail("MIXED_EFFECT_UNSUPPORTED")
    missing = set(p.get("source_required_event_ids", [])) - ids
    if missing:
        fail("MISSING_TRIGGER")
    return sorted(set(e))

def fixture():
    events = [
        ("E1","S1","Mona","collision"),
        ("E2","S1","Mona","calls Akram"),
        ("E3","S1","Akram","shoots Santino"),
        ("E4","S2","Mona","hires Julia"),
        ("E5","S3","Mona","supports education"),
        ("E6","S3","Julia","supports singing"),
        ("E7","S4","Julia","discovers truth"),
        ("E8","S3","Mona","separates utensils")
    ]
    return {
      "case_id":"GJ-REGRESSION-ONLY","source_scope":"F1-posthoc","evidence_level":"F1",
      "stages":["S1","S2","S3","S4"],
      "events":[{"event_id":i,"stage":s,"actor":a,"action":v,"evidence_ref":"F1-POST"} for i,s,a,v in events],
      "source_required_event_ids":[i for i,_,_,_ in events],
      "knowledge_ledger":[
        {"fact_id":"DEATH","character_id":"Julia","stage":"S2","knowledge":"UNVERIFIED","basis":"UNKNOWN"},
        {"fact_id":"DEATH","character_id":"Julia","stage":"S4","knowledge":"KNOWN","basis":"DIRECT_SOURCE","evidence_ref":"F1-POST"}],
      "disclosure_ledger":[
        {"fact_id":"DEATH","speaker":"Mona","recipient":"Julia","stage":"S2","disclosure":"WITHHELD","evidence_ref":"F1-POST"}],
      "source_evidence":[
        {"evidence_id":"W-GJ-01","source_ref":"F1-POST","evidence_span":"Mona reports a feared pursuit to Akram"},
        {"evidence_id":"W-GJ-02","source_ref":"F1-POST","evidence_span":"Akram reacts to the perceived threat"}],
      "causal_edges":[
        {"from_event":"E1","to_event":"E2","relation_type":"CAUSE_CANDIDATE","mechanism":"fear prompts phone report","evidence_ref":"F1-POST","evidence_id":"W-GJ-01","changed_variable":"Akram_information","causal_explanation":"Mona reacts to incident by calling","source_linked_observation":"The report follows the incident in the F1 account","counterfactual":"Without the incident the fear report may not arise","rival_explanation":"Other perceived threats could prompt the call"},
        {"from_event":"E2","to_event":"E3","relation_type":"CAUSE_CANDIDATE","mechanism":"reported threat prompts reaction","evidence_ref":"F1-POST","evidence_id":"W-GJ-02","changed_variable":"Akram_intervention","causal_explanation":"Akram acts after receiving the report","source_linked_observation":"F1 accounts explicitly connect the call to reaction","counterfactual":"Without the report other intervention might still occur","rival_explanation":"Akram might intervene independently"}],
      "relation_edges":[
        {"source":"Mona","target":"Julia","event_id":"E5","effect":"SUPPORT","changed_variable":"education_access","evidence_ref":"F1-POST"},
        {"source":"Julia","target":"Mona","event_id":"E6","effect":"SUPPORT","changed_variable":"singing","evidence_ref":"F1-POST"},
        {"source":"Mona","target":"Julia","event_id":"E8","effect":"CONTROL","changed_variable":"equal_treatment","evidence_ref":"F1-POST"}],
      "claims":{"dual_support":{"a":"Mona","b":"Julia","status":"DUAL_SUPPORT_H"},"mixed_effects":True}
    }

def self_test():
    good = fixture()
    cases = [("valid_bidirectional_and_temporal", good, None)]
    bad = copy.deepcopy(good)
    bad["knowledge_ledger"][0].update({"knowledge":"NOT_KNOWN","basis":"INFERRED_FROM_DISCLOSURE"})
    cases.append(("withheld_not_equal_ignorant",bad,"KNOWLEDGE_UNGROUNDED"))
    bad = copy.deepcopy(good)
    bad["events"] = [x for x in bad["events"] if x["event_id"] != "E2"]
    cases.append(("missing_intermediate_actor",bad,"MISSING_TRIGGER"))
    bad = copy.deepcopy(good)
    bad["relation_edges"] = [x for x in bad["relation_edges"] if x["source"] != "Julia"]
    cases.append(("false_dual_support",bad,"DUAL_SUPPORT_UNPROVEN"))
    bad = copy.deepcopy(good)
    bad["relation_edges"] = [x for x in bad["relation_edges"] if x["effect"] != "CONTROL"]
    cases.append(("power_cost_erasure",bad,"MIXED_EFFECT_UNSUPPORTED"))
    bad = copy.deepcopy(good)
    bad["relation_edges"][0]["strict_l2_relation"] = "SUPPLEMENT"
    cases.append(("premature_l2_supplement",bad,"L2_UNAUTHORIZED"))
    bad = copy.deepcopy(good)
    bad["knowledge_ledger"][1].pop("evidence_ref")
    cases.append(("ungrounded_final_knowledge",bad,"KNOWLEDGE_UNGROUNDED"))
    bad = copy.deepcopy(good)
    bad["causal_edges"][0]["mechanism"] = "sequence only; no proven mechanism"
    cases.append(("sequence_only_false_cause",bad,"TEMPORAL_ONLY_AS_CAUSAL"))
    bad = copy.deepcopy(good)
    bad["causal_edges"][0].pop("relation_type")
    cases.append(("causal_type_missing",bad,"CAUSAL_RELATION_TYPE_MISSING"))
    bad = copy.deepcopy(good)
    bad["causal_edges"][0]["evidence_id"] = "UNKNOWN-WITNESS"
    cases.append(("causal_witness_missing",bad,"CAUSAL_EVIDENCE_NOT_IN_CATALOG"))
    passed = 0
    for name,case,expected in cases:
        observed = validate(case)
        ok = not observed if expected is None else expected in observed
        passed += int(ok)
        print(("PASS" if ok else "FAIL") + " " + name + " " + ",".join(observed))
    print("SELF_TEST %d/%d" % (passed, len(cases)))
    return 0 if passed == len(cases) else 1

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--self-test", action="store_true")
    parser.add_argument("path", nargs="?", type=Path)
    args = parser.parse_args()
    if args.self_test:
        return self_test()
    if not args.path:
        parser.error("provide path or --self-test")
    p = json.loads(args.path.read_text(encoding="utf-8"))
    problem_codes = validate(p)
    print(json.dumps({"case_id":p.get("case_id"),"status":"PASS_STRUCTURAL" if not problem_codes else "REPLAN_STRUCTURAL",
                      "error_codes":problem_codes},ensure_ascii=False,indent=2))
    return 0 if not problem_codes else 2

if __name__ == "__main__":
    sys.exit(main())
