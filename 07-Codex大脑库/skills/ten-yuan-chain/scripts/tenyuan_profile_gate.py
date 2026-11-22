"""R6 Ten-Yuan feeling-layer contract, not a detector of actual human feeling."""
TEN = ('X','Z','N','ZN','NZ','XN','NX','ZX','XZ','X并Z')


def validate_feeling_contract(packet):
    issues=[]
    def err(s): issues.append(s)
    if not isinstance(packet,dict): return ['SCHEMA']
    for key in ('case_id','stimulus_id','context_id'):
        if not packet.get(key): err('CONTEXT_MISSING')
    if packet.get('ontology_claim') in {'OBJECT_ESSENCE','PERSON_IMMUTABLE_CLASS'}:
        err('TENYUAN_OBJECT_ESSENCE_FORBIDDEN')
    predictions=packet.get('audience_feeling_predictions',[])
    if not isinstance(predictions,list) or not predictions:
        err('FEELING_PREDICTION_MISSING')
        predictions=[]
    for x in predictions:
        if not isinstance(x,dict): err('PREDICTION_SCHEMA'); continue
        if not x.get('stage') or not x.get('stimulus_event_ids'):
            err('PREDICTION_CONTEXT_MISSING')
        profile=x.get('profile',{})
        if set(profile)!=set(TEN): err('TENYUAN_TEN_SLOTS_INCOMPLETE')
        for v in profile.values():
            if v is not None and (isinstance(v,bool) or not isinstance(v,(int,float)) or not 1<=v<=10):
                err('PROFILE_VALUE_INVALID')
        if x.get('status') not in {'AI_HYPOTHESIS','AUTHOR_ESTIMATE','UNSCORED'}:
            err('PREDICTION_STATUS_INVALID')
        if x.get('status')=='AI_HYPOTHESIS' and x.get('as_human_measured'):
            err('PREDICTION_AS_HUMAN_F3')
    human=packet.get('human_feeling_observations')
    if human is not None:
        if not isinstance(human,list):err('HUMAN_F3_SCHEMA')
        else:
            for x in human:
                if not all(x.get(y) for y in ('rater_id','stimulus_event_id','source_ref','rating_method')):
                    err('HUMAN_F3_UNGROUNDED')
                if x.get('rater_id')==packet.get('generator_id'):
                    err('AI_CANNOT_BE_HUMAN_RATER')
    for x in packet.get('role_candidates',[]):
        if x.get('status')=='LOCKED' and (x.get('authority')!='AUTHOR_INPUT' or not x.get('author_receipt')):
            err('CHARACTER_LOCK_UNAUTHORIZED')
        if x.get('basis')=='THEME_FORMULA_ONLY':
            err('THEME_TO_ROLE_ILLEGAL_SHORTCUT')
    for x in packet.get('theme_candidates',[]):
        if x.get('status')=='CONFIRMED' and not x.get('author_receipt'):
            err('THEME_LOCK_UNAUTHORIZED')
        if x.get('basis')=='TENYUAN_ROLE_FORMULA_ONLY':
            err('ROLE_TO_THEME_ILLEGAL_SHORTCUT')
    for x in packet.get('strict_l2_relations',[]):
        if x.get('status') in {'VERIFIED','CANONICAL'}:
            err('L2_VERIFICATION_NOT_INFERABLE_FROM_FILM')
        if (x.get('source_tenyuan') in {'Z','ZN'} or x.get('target_tenyuan') in {'Z','ZN'}) and x.get('status')!='FROZEN_H':
            err('Z_ZN_RELATION_FREEZE')
    return sorted(set(issues))


def main():
    import argparse
    import json
    from pathlib import Path
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('packet',type=Path)
    args=parser.parse_args()
    case=json.loads(args.packet.read_text(encoding='utf-8'))
    issues=validate_feeling_contract(case)
    print(json.dumps({'status':'PASS_FEELING_CONTRACT' if not issues else 'FAIL_FEELING_CONTRACT',
                      'validation_scope':'SCHEMA_ONLY_NOT_F3', 'errors':issues},ensure_ascii=False,indent=2))
    return 0 if not issues else 2


if __name__=='__main__':
    raise SystemExit(main())
