import copy, unittest
from role_candidate_gate import validate_role_candidate_packet as check

def fixture():
    return {'events':[
        {'event_id':'E04','stage':'S3'}, {'event_id':'E07','stage':'S5'},
        {'event_id':'E09','stage':'S7'}, {'event_id':'E10','stage':'S7'}],
        'characters':[{'character_id':'Tom','context_id':'Leave No Trace 2018',
          'status':'CANDIDATE_H','core_candidate':'ZN','rival_candidate':'NZ',
          'core_reason':'She recognizes both paths without denying her father his choice.',
          'rival_reason':'She also preserves a particular connection after physical separation.',
          'negative_case':'Concern for her father alone also fits NZ; desire to stay is not sufficient to lock ZN.',
          'soul_ablation':'If preserving legitimacy of both ways were removed, separate living without abandonment becomes less explanatory.',
          'core_evidence_ids':['E07','E09','E10'],'layer_origin':'CROSS_STAGE_CHOICE',
          'evidence':[{'event_id':v,'choice':c,'cost':cost,'source_ref':'F1-FILM-SUMMARY','evidence_kind':'SOURCE_REPORTED'}
                      for v,c,cost in [('E04','forms social ties','changes father-daughter routine'),
                                       ('E07','helps injured father','risk and dependence'),
                                       ('E09','decides to remain','separation from father'),
                                       ('E10','keeps bond despite separation','living apart')]]}]}

class Tests(unittest.TestCase):
    def test_valid_hypothesis(self): self.assertEqual(check(fixture()),[])
    def test_no_evidence_null_allowed(self):
        d=fixture();d['characters'][0].update(status='WAIT_EVIDENCE',missing_evidence=['Need more contexts'],why_candidates_indistinguishable='ZN/NZ are both possible')
        self.assertEqual(check(d),[])
    def test_unexplained_null(self):
        d=fixture();d['characters'][0].update(status='WAIT_EVIDENCE',missing_evidence=['Need more contexts'])
        self.assertIn('UNEXPLAINED_NULL_WITH_SUFFICIENT_ACTIONS',check(d))
    def test_no_rival(self):
        d=fixture();d['characters'][0]['rival_candidate']=None
        self.assertIn('CANDIDATE_RIVAL_INVALID',check(d))
    def test_lacks_counterexample(self):
        d=fixture();d['characters'][0]['negative_case']=''
        self.assertIn('ROLE_ABLATION_MISSING',check(d))
    def test_single_event_not_stable(self):
        d=fixture();d['characters'][0]['evidence']=d['characters'][0]['evidence'][:1]
        self.assertIn('CANDIDATE_INSUFFICIENT_CROSS_STAGE_EVIDENCE',check(d))
    def test_unverified_author_claim(self):
        d=fixture();d['characters'][0]['author_confirmed']=True
        self.assertIn('ROLE_AUTHOR_LOCK_UNVERIFIED',check(d))
    def test_objective_essence_forbidden(self):
        d=fixture();d['characters'][0]['role_is_objective_tenyuan_class']=True
        self.assertIn('OBJECTIVE_CLASS_ASSERTION',check(d))
    def test_theme_to_role_forbidden(self):
        d=fixture();d['characters'][0]['layer_origin']='THEME_FORMULA'
        self.assertIn('ROLE_LAYER_CONFLATION',check(d))
    def test_unknown_event(self):
        d=fixture();d['characters'][0]['evidence'][0]['event_id']='UNKNOWN'
        self.assertIn('ROLE_EVENT_UNKNOWN',check(d))
    def test_no_cost(self):
        d=fixture();d['characters'][0]['evidence'][0]['cost']=''
        self.assertIn('ROLE_CHOICE_COST_MISSING',check(d))
    def test_duplicate_evidence(self):
        d=fixture();d['characters'][0]['evidence'].append(copy.deepcopy(d['characters'][0]['evidence'][0]))
        self.assertIn('ROLE_DUPLICATE_EVENT',check(d))

if __name__=='__main__': unittest.main()
