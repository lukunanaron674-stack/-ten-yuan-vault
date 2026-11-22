"""R11 split-safe role scorecard; computes numbers, never self-certifies blind truth."""
TEN={'X','Z','N','ZN','NZ','XN','NX','ZX','XZ','X并Z'}


def score(pred,gold,manifest):
    errors=[]
    def flag(x):errors.append(x)
    split=pred.get('split')
    if split not in ('CALIBRATION','HOLDOUT'):flag('INVALID_SPLIT')
    if pred.get('generator_id')==gold.get('reviewer_id'):flag('SELF_REVIEW')
    if not pred.get('prelock_ref'):flag('NO_PRELOCK_REF')
    if split=='HOLDOUT' and not manifest.get('isolation_receipt'):flag('NO_ISOLATION_RECEIPT')
    if split=='HOLDOUT' and not gold.get('external_author_receipt'):flag('NO_EXTERNAL_AUTHOR_LABELS')
    leak=set(manifest.get('exposure_case_ids',[]))
    inputs=pred.get('rows',[])
    labels=gold.get('rows',[])
    ps={(r.get('case_id'),r.get('character_id')):r for r in inputs}
    gs={(r.get('case_id'),r.get('character_id')):r for r in labels}
    if len(ps)!=len(inputs) or len(gs)!=len(labels):flag('DUPLICATE_ID')
    if not ps or not gs:flag('NO_EVALUATION_ROWS')
    if set(ps)!=set(gs):flag('ROW_IDS_MISMATCH')
    if split=='HOLDOUT' and any(k[0] in leak for k in ps):flag('KNOWN_ANSWER_CONTAMINATION')
    if split=='HOLDOUT' and any(k[0] in pred.get('training_case_ids',[]) for k in ps):flag('TRAIN_TEST_OVERLAP')
    if any(g.get('label') not in TEN or not g.get('label_source_ref') for g in labels):flag('GOLD_LABEL_INVALID')
    if any(not r.get('film_id') for r in inputs):flag('FILM_ID_MISSING')
    if any(r.get('top1') not in TEN and r.get('top1') is not None for r in inputs):flag('PREDICTION_OUT_OF_DOMAIN')
    if any(len(r.get('top3',[]))!=len(set(r.get('top3',[]))) or len(r.get('top3',[]))>3 or any(t not in TEN for t in r.get('top3',[])) for r in inputs):flag('TOP3_INVALID')
    if any(r.get('top1') is None and not r.get('abstained',False) for r in inputs):flag('ABSTENTION_UNDECLARED')
    if errors:return {'status':'BLOCKED_VALIDATION','errors':sorted(set(errors)),'C_film_grade':None,'F3_validated':False}
    n=len(ps)
    attempted=[k for k,v in ps.items() if not v.get('abstained',False)]
    top1=sum(ps[k]['top1']==gs[k]['label'] for k in ps)
    top3=sum(gs[k]['label'] in ps[k].get('top3',[]) for k in ps)
    kinds=set(ps[k]['film_id'] for k in ps)
    return {'status':'CALIBRATION_METRICS_ONLY' if split=='CALIBRATION' else 'METRICS_COMPUTED_EXTERNAL_AUDIT_PENDING',
      'n_labeled':n,'film_count':len(kinds),'attempted':len(attempted),
      'coverage':round(len(attempted)/n,4),
      'top1_all':round(top1/n,4),'top3_all':round(top3/n,4),
      'top1_attempted':round(sum(ps[k]['top1']==gs[k]['label'] for k in attempted)/len(attempted),4) if attempted else None,
      'abstention_rate':round((n-len(attempted))/n,4),
      'key_score_80_threshold_met':top1/n>=.8 and len(kinds)>=5,
      'C_film_grade':None,'F3_validated':False,'independent_accepted':False,
      'notes':'Label provenance, prelock timing, absence of leakage and all FZ1..FZ8 require external review.'}


def main():
    import argparse,json
    from pathlib import Path
    p=argparse.ArgumentParser(description=__doc__)
    for a in ('predictions','labels','manifest'):p.add_argument('--'+a,required=True,type=Path)
    a=p.parse_args()
    result=score(json.loads(a.predictions.read_text(encoding='utf-8')),
                 json.loads(a.labels.read_text(encoding='utf-8')),
                 json.loads(a.manifest.read_text(encoding='utf-8')))
    print(json.dumps(result,ensure_ascii=False,indent=2))
    return 2 if result['status']=='BLOCKED_VALIDATION' else 0

if __name__=='__main__':raise SystemExit(main())
