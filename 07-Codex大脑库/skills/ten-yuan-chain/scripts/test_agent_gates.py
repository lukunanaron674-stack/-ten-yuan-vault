"""Executable R4/R5/R6 gate regression (not a human/film accuracy benchmark)."""
import unittest
from causal_gate import validate_causal_edges
from source_gate import audit_source_coverage
from tenyuan_profile_gate import TEN, validate_feeling_contract


def film():
    return {'case_id':'C1','generator_id':'AG13','stages':['A','B'],
            'events':[{'event_id':'E1','stage':'A'}, {'event_id':'E2','stage':'B'}],
            'source_required_event_ids':['E1','E2'],
            'source_evidence':[{'evidence_id':'W1','source_ref':'F1-source','evidence_span':'cause and consequence'}],
            'causal_edges':[{'from_event':'E1','to_event':'E2','relation_type':'CAUSE_CANDIDATE',
                             'mechanism':'observable decision','causal_explanation':'B changes after A acts',
                             'changed_variable':'B_choice','evidence_id':'W1','source_linked_observation':'source links acts',
                             'counterfactual':'without A, B could differ','rival_explanation':'a third actor'}]}


def manifest():
    return {'case_id':'C1','manifest_id':'MAN-1','reviewer_id':'reviewer2',
            'source_scope':'F1 limited','source_references':['source:paragraph'],
            'review_status':'ASSISTED_SOURCE_AUDIT','required_event_ids':['E1','E2'],
            'source_event_evidence':{'E1':'source:p1','E2':'source:p2'}}


def feeling():
    return {'case_id':'C1','stimulus_id':'I1','context_id':'CTX','generator_id':'AG13',
            'audience_feeling_predictions':[{'stage':'A','stimulus_event_ids':['E1'],
                                             'status':'AI_HYPOTHESIS','profile':{k:None for k in TEN}}],
            'human_feeling_observations':None,'role_candidates':[],'theme_candidates':[],'strict_l2_relations':[]}


class ThreeGateRegression(unittest.TestCase):
    def test_r4_valid_candidate(self):
        self.assertEqual(validate_causal_edges(film()),[])
    def test_r4_timeline_is_not_cause(self):
        p=film();p['causal_edges'][0]['mechanism']='sequence only; no proven mechanism'
        self.assertIn('TEMPORAL_ONLY_AS_CAUSAL',validate_causal_edges(p))
    def test_r4_missing_witness(self):
        p=film();p['causal_edges'][0]['evidence_id']='missing'
        self.assertIn('CAUSAL_EVIDENCE_NOT_IN_CATALOG',validate_causal_edges(p))
    def test_r4_no_counterfactual(self):
        p=film();p['causal_edges'][0]['counterfactual']=''
        self.assertIn('CAUSAL_COUNTERFACTUAL_MISSING',validate_causal_edges(p))
    def test_r5_valid_manifest(self):
        self.assertEqual(audit_source_coverage(film(),manifest()),[])
    def test_r5_manifest_requires_missing_scene(self):
        p=film();p['events'].pop()
        self.assertIn('SOURCE_EVENT_COVERAGE_MISSING',audit_source_coverage(p,manifest()))
    def test_r5_self_review_forbidden(self):
        m=manifest();m['reviewer_id']='AG13'
        self.assertIn('SOURCE_SELF_REVIEW',audit_source_coverage(film(),m))
    def test_r5_source_scope_must_match(self):
        p=film();p['source_required_event_ids']=['E1']
        self.assertIn('SOURCE_EVENT_SCOPE_MISMATCH',audit_source_coverage(p,manifest()))
    def test_r6_valid_candidate(self):
        self.assertEqual(validate_feeling_contract(feeling()),[])
    def test_r6_ontology_not_object_essence(self):
        p=feeling();p['ontology_claim']='OBJECT_ESSENCE'
        self.assertIn('TENYUAN_OBJECT_ESSENCE_FORBIDDEN',validate_feeling_contract(p))
    def test_r6_ai_not_human_f3(self):
        p=feeling();p['human_feeling_observations']=[{'rater_id':'AG13','stimulus_event_id':'E1','source_ref':'none','rating_method':'estimate'}]
        self.assertIn('AI_CANNOT_BE_HUMAN_RATER',validate_feeling_contract(p))
    def test_r6_role_cannot_derive_from_theme_formula(self):
        p=feeling();p['role_candidates']=[{'basis':'THEME_FORMULA_ONLY','status':'CANDIDATE_H'}]
        self.assertIn('THEME_TO_ROLE_ILLEGAL_SHORTCUT',validate_feeling_contract(p))


if __name__=='__main__': unittest.main()
