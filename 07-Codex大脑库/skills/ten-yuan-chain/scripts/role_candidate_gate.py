"""AG-11 A/B role-candidate evidence gate (standard library only).

This checks a researcher's candidate dossier, not whether a Ten-Yuan classification
is semantically correct. The Ten-Yuan canon is a contextual feeling model.
A candidate is an AI hypothesis, not a person's essential/intrinsic objective class.
"""

TEN = ('X', 'Z', 'N', 'ZN', 'NZ', 'XN', 'NX', 'ZX', 'XZ', 'X并Z')


def validate_role_candidate_packet(packet):
    errors = set()
    if not isinstance(packet, dict):
        return ['SCHEMA']
    events = {x.get('event_id'): x for x in packet.get('events', []) if isinstance(x, dict)}
    dossiers = packet.get('characters', [])
    if not isinstance(dossiers, list) or not dossiers:
        return ['ROLE_DOSSIER_MISSING']
    for role in dossiers:
        if not isinstance(role, dict):
            errors.add('ROLE_SCHEMA')
            continue
        if not role.get('character_id') or not role.get('context_id'):
            errors.add('ROLE_CONTEXT_MISSING')
        state = role.get('status')
        if state not in {'CANDIDATE_H', 'WAIT_EVIDENCE'}:
            errors.add('ROLE_STATUS_INVALID')
        if role.get('role_is_objective_tenyuan_class') is True:
            errors.add('OBJECTIVE_CLASS_ASSERTION')
        if role.get('f3_human_rating') is not None and not role.get('human_evidence_ref'):
            errors.add('F3_UNGROUNDED')
        observations = role.get('evidence', [])
        eids = []
        stages = set()
        for o in observations:
            if not isinstance(o, dict):
                errors.add('ROLE_EVIDENCE_SCHEMA')
                continue
            eid = o.get('event_id')
            if eid not in events:
                errors.add('ROLE_EVENT_UNKNOWN')
            else:
                stages.add(events[eid].get('stage'))
            eids.append(eid)
            if not all(o.get(k) for k in ('choice', 'cost', 'source_ref')):
                errors.add('ROLE_CHOICE_COST_MISSING')
            if o.get('evidence_kind') not in {'OBSERVED_CHOICE', 'SOURCE_REPORTED'}:
                errors.add('ROLE_EVIDENCE_KIND_MISSING')
        if len(eids) != len(set(eids)):
            errors.add('ROLE_DUPLICATE_EVENT')
        sufficient = len(set(eids)) >= 3 and len(stages) >= 2
        if state == 'CANDIDATE_H':
            if not sufficient:
                errors.add('CANDIDATE_INSUFFICIENT_CROSS_STAGE_EVIDENCE')
            core = role.get('core_candidate')
            rival = role.get('rival_candidate')
            if core not in TEN or rival not in TEN or core == rival:
                errors.add('CANDIDATE_RIVAL_INVALID')
            if not role.get('core_reason') or not role.get('rival_reason'):
                errors.add('CANDIDATE_CONTRAST_MISSING')
            if not role.get('negative_case') or not role.get('soul_ablation'):
                errors.add('ROLE_ABLATION_MISSING')
            support = role.get('core_evidence_ids', [])
            if not support or not set(support).issubset(set(eids)):
                errors.add('ROLE_SUPPORT_REFERENCE_INVALID')
            if role.get('layer_origin') in {'THEME_FORMULA', 'SINGLE_ACTION', 'VISUAL_APPEARANCE'}:
                errors.add('ROLE_LAYER_CONFLATION')
            if role.get('author_confirmed') is True and not role.get('author_receipt'):
                errors.add('ROLE_AUTHOR_LOCK_UNVERIFIED')
        if state == 'WAIT_EVIDENCE':
            if not role.get('missing_evidence'):
                errors.add('ABSTENTION_MUST_NAME_MISSING_EVIDENCE')
            # If sufficient choices exist, the role should at least return a ranked
            # hypothesis unless independent counterevidence prevents differentiation.
            if sufficient and not role.get('why_candidates_indistinguishable'):
                errors.add('UNEXPLAINED_NULL_WITH_SUFFICIENT_ACTIONS')
    return sorted(errors)


def main():
    import json, argparse
    from pathlib import Path
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('packet',type=Path)
    a=p.parse_args()
    d=json.loads(a.packet.read_text(encoding='utf-8'))
    problems=validate_role_candidate_packet(d)
    print(json.dumps({'status':'PASS_ROLE_CANDIDATE_CONTRACT' if not problems else 'FAIL_ROLE_CANDIDATE_CONTRACT',
                      'scope':'EVIDENCE_STRUCTURE_ONLY_NOT_LABEL_ACCURACY',
                      'errors':problems},ensure_ascii=False,indent=2))
    return 0 if not problems else 2


if __name__ == '__main__':
    raise SystemExit(main())
