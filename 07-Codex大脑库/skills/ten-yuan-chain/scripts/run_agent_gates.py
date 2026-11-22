"""Run AG-13 R4/R5/R6 gates together; record provenance and failure status.

This is a deterministic assistant-workflow gate, not an LLM or a Codex process.
It never upgrades a run to independent holdout or empirically valid Ten-Yuan.
"""
import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from causal_gate import validate_causal_edges
from source_gate import audit_source_coverage
from tenyuan_profile_gate import validate_feeling_contract


def run(packet, manifest, feeling):
    errors = {}
    if not isinstance(packet, dict) or not isinstance(manifest, dict) or not isinstance(feeling, dict):
        return {'status': 'FAIL_SCHEMA', 'errors': {'input':['SCHEMA']}}
    if len({packet.get('case_id'), manifest.get('case_id'), feeling.get('case_id')}) != 1:
        errors['case_binding'] = ['CROSS_PACKET_CASE_MISMATCH']
    required = ('case_id','events','stages','source_evidence','causal_edges','source_required_event_ids',
                'knowledge_ledger','disclosure_ledger','relation_edges','claims')
    missing = [k for k in required if k not in packet]
    if missing:
        errors['input'] = ['REQUIRED_FIELDS_MISSING:' + ','.join(missing)]
    errors['causal'] = validate_causal_edges(packet)
    errors['source'] = audit_source_coverage(packet, manifest)
    errors['feeling'] = validate_feeling_contract(feeling)
    valid = not any(errors.values())
    human = feeling.get('human_feeling_observations')
    return {
      'status': 'PASS_ASSISTED_STRUCTURE_ONLY' if valid else 'REPLAN_STRUCTURAL',
      'case_id': packet.get('case_id'),
      'errors': {k:v for k,v in errors.items() if v},
      'scope': {
        'causal_gate':'SCHEMA_AND_CITED_CANDIDATE_ONLY',
        'source_gate':manifest.get('review_status','UNKNOWN'),
        'tenyuan':'CANDIDATE_PROFILE_ONLY',
        'human_F3_present':bool(human),
        'independent_holdout':False,
        'local_codex_executed':False,
        'empirical_validity':False
      }
    }


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--packet',type=Path,required=True)
    parser.add_argument('--manifest',type=Path,required=True)
    parser.add_argument('--feeling',type=Path,required=True)
    parser.add_argument('--receipt',type=Path)
    args=parser.parse_args()
    paths={'packet':args.packet,'manifest':args.manifest,'feeling':args.feeling}
    data={k:json.loads(v.read_text(encoding='utf-8')) for k,v in paths.items()}
    result=run(data['packet'],data['manifest'],data['feeling'])
    result['run_at_utc']=datetime.now(timezone.utc).isoformat()
    result['input_sha256']={k:hashlib.sha256(v.read_bytes()).hexdigest() for k,v in paths.items()}
    out=json.dumps(result,ensure_ascii=False,indent=2)
    print(out)
    if args.receipt:
        args.receipt.write_text(out+'\n',encoding='utf-8')
    return 0 if result['status']=='PASS_ASSISTED_STRUCTURE_ONLY' else 2

if __name__=='__main__':
    raise SystemExit(main())
