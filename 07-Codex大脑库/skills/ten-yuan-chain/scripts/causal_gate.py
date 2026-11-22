"""AG-13 causal relation gate (stdlib only).

Separates temporal order from causal claims; checks structure and provenance,
NOT causal truth. A claimed causal relationship requires separate source review.
"""
from collections import defaultdict
import re

TEMPORAL = {'TEMPORAL_BEFORE', 'TEMPORAL_OVERLAP'}
CANDIDATE = {'CAUSE_CANDIDATE', 'ENABLE_CANDIDATE', 'PRECONDITION_CANDIDATE', 'PREVENT_CANDIDATE'}
VERIFIED = {'CAUSE_VERIFIED', 'ENABLE_VERIFIED', 'PRECONDITION_VERIFIED', 'PREVENT_VERIFIED'}
ALLOWED = TEMPORAL | CANDIDATE | VERIFIED
NEGATION = re.compile(r'(sequence only|only (?:happened|occurred) (?:before|after)|mere(?:ly)? temporal|no (?:proven|verified|supported) (?:causal )?mechanism|chronology only|仅先后|只是先后|仅时序|无因果证据|因果未证|没有可证|并未证明)', re.I)


def validate_causal_edges(packet):
    """Return sorted error codes. Does not claim source quotes are true."""
    errors = set()
    edges = packet.get('causal_edges', [])
    events = {v.get('event_id'): v for v in packet.get('events', []) if isinstance(v, dict)}
    stages = {s: i for i, s in enumerate(packet.get('stages', []))}
    refs = {v.get('evidence_id'): v for v in packet.get('source_evidence', []) if isinstance(v, dict)}
    graph = defaultdict(set)
    direct_edges = []
    for x in edges:
        if not isinstance(x, dict):
            errors.add('CAUSAL_EDGE_SCHEMA')
            continue
        src, dst, typ = x.get('from_event'), x.get('to_event'), x.get('relation_type')
        if typ not in ALLOWED:
            errors.add('CAUSAL_RELATION_TYPE_MISSING')
            continue
        if src not in events or dst not in events or src == dst:
            errors.add('CAUSAL_ENDPOINT_INVALID')
            continue
        if (events[src].get('stage') in stages and events[dst].get('stage') in stages and
                stages[events[src]['stage']] > stages[events[dst]['stage']]):
            errors.add('CAUSAL_STAGE_REVERSED')
        if typ in TEMPORAL:
            # A timeline observation is not a verified cause, even if it has a mechanism field.
            if x.get('causal_strength') == 'PROVEN':
                errors.add('TEMPORAL_ONLY_AS_CAUSAL')
            continue
        graph[src].add(dst)
        mechanism = str(x.get('mechanism', ''))
        explanation = str(x.get('causal_explanation', ''))
        if NEGATION.search(mechanism + ' ' + explanation):
            errors.add('TEMPORAL_ONLY_AS_CAUSAL')
        if not mechanism.strip() or not x.get('changed_variable') or not explanation.strip():
            errors.add('CAUSAL_MECHANISM_UNSPECIFIED')
        witness = x.get('evidence_id')
        if not witness or witness not in refs:
            errors.add('CAUSAL_EVIDENCE_NOT_IN_CATALOG')
        else:
            item = refs[witness]
            if not item.get('source_ref') or not item.get('evidence_span'):
                errors.add('CAUSAL_EVIDENCE_NO_SOURCE_SPAN')
            if not x.get('source_linked_observation'):
                errors.add('CAUSAL_EVIDENCE_NO_EXPLANATION')
        if not x.get('counterfactual') or not x.get('rival_explanation'):
            errors.add('CAUSAL_COUNTERFACTUAL_MISSING')
        if typ in VERIFIED:
            # A self-asserted flag cannot serve as independent confirmation.
            review = x.get('external_review', {})
            if (review.get('status') != 'REVIEWED' or not review.get('reviewer_id') or
                    not review.get('decision_ref') or review.get('reviewer_id') == packet.get('generator_id')):
                errors.add('CAUSE_CLAIM_NOT_INDEPENDENTLY_REVIEWED')
        direct_edges.append((src, dst, x))
    # Detect directed cycles, including equal-stage cycles. A story might include feedback,
    # but each event must then be time-indexed as a distinct state transition.
    visiting, visited = set(), set()
    def visit(u):
        if u in visiting:
            return True
        if u in visited:
            return False
        visiting.add(u)
        for v in graph[u]:
            if visit(v):
                return True
        visiting.remove(u)
        visited.add(u)
        return False
    if any(visit(u) for u in tuple(graph) if u not in visited):
        errors.add('CAUSAL_CYCLE_REQUIRES_TIME_INDEX')
    # A→C is not necessarily false when A→B→C exists, but requires independent direct-effect evidence.
    for a, c, original in direct_edges:
        for b in graph.get(a, set()) - {c}:
            if c in graph.get(b, set()) and not original.get('direct_effect_justification'):
                errors.add('CAUSAL_MEDIATOR_BYPASS_UNREVIEWED')
    return sorted(errors)
