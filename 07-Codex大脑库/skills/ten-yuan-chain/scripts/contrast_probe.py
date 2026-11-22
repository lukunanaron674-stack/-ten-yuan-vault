"""R10 contrastive Ten-Yuan hypothesis probe, not a truth or human-feeling judge."""
TEN = {'X','Z','N','ZN','NZ','XN','NX','ZX','XZ','X并Z'}


def check(p):
    e = []
    if not isinstance(p, dict):
        return ['SCHEMA']
    for f in ('case_id','character_id','shared_visible_action','source_scope','candidates','diagnostic_situation','predictions','failure_condition'):
        if not p.get(f): e.append('REQUIRED_FIELD_MISSING:' + f)
    candidates = p.get('candidates', [])
    if len(candidates)!=2 or len(set(candidates))!=2 or any(v not in TEN for v in candidates):
        e.append('PAIR_MUST_BE_DISTINCT_TENYUAN')
    predictions = p.get('predictions', [])
    if len(predictions)!=2 or {x.get('tenyuan') for x in predictions if isinstance(x,dict)}!=set(candidates):
        e.append('PREDICTION_PAIR_MISMATCH')
    else:
        if any(not all(x.get(k) for k in ('choice','cost','changed_variable','counterevidence')) for x in predictions):
            e.append('DIAGNOSTIC_PREDICTION_INCOMPLETE')
        if predictions[0].get('choice')==predictions[1].get('choice'):
            e.append('NO_DIAGNOSTIC_DIVERGENCE')
    if 'answer' in p or 'observed_choice' in p or 'ground_truth_label' in p:
        e.append('ANSWER_LEAK_IN_PRELOCK')
    if p.get('source_scope') not in ('AUTHOR_KNOWN_CALIBRATION','ORIGINAL_DESIGN','ASSISTED_FILM_ANALYSIS','BLIND_CANDIDATE'):
        e.append('SOURCE_SCOPE_INVALID')
    if p.get('source_scope')=='BLIND_CANDIDATE' and not p.get('isolation_receipt'):
        e.append('BLIND_ISOLATION_NOT_DEMONSTRATED')
    if not p.get('source_evidence_ids'):
        e.append('NO_SOURCE_EVIDENCE')
    if p.get('claim_independent_pass'):
        e.append('NO_SELF_CERTIFIED_INDEPENDENCE')
    return sorted(set(e))


def main():
    import argparse,json
    from pathlib import Path
    a=argparse.ArgumentParser(description=__doc__)
    a.add_argument('input',type=Path)
    ns=a.parse_args()
    p=json.loads(ns.input.read_text(encoding='utf-8'))
    errors=check(p)
    print(json.dumps({'status':'PASS_DIAGNOSTIC_DESIGN_ONLY' if not errors else 'REPLAN_DIAGNOSTIC_DESIGN',
                      'error_codes':errors,'semantic_truth_verified':False,'human_F3_verified':False},ensure_ascii=False,indent=2))
    return 0 if not errors else 2

if __name__=='__main__':
    raise SystemExit(main())
