import copy,unittest
from contrast_probe import check

def fixture():
    return {'case_id':'R10-CENWEI','character_id':'Cenwei','shared_visible_action':'actively seek a path despite resistance',
    'source_scope':'ORIGINAL_DESIGN','source_evidence_ids':['D-E1','D-E2','D-E3'],
    'candidates':['XN','ZX'],'diagnostic_situation':'The proposed route fails the safety test, while residents plead for immediate opening.',
    'predictions':[{'tenyuan':'XN','choice':'keep route closed until verified or seek alternate rescue','cost':'risk losing residents approval','changed_variable':'approval_status','counterevidence':'if she opens without tests, this core hypothesis weakens'},
                   {'tenyuan':'ZX','choice':'open the unverified route despite failed checks','cost':'risk failure and disciplinary action','changed_variable':'approval_status','counterevidence':'if she consistently refuses risky opening, this rival weakens'}],
    'failure_condition':'If both hypotheses imply the same action, mark no diagnostic value.'}

class Tests(unittest.TestCase):
    def test_good_design(self):self.assertEqual(check(fixture()),[])
    def test_same_choices_no_discrimination(self):
        p=fixture();p['predictions'][1]['choice']=p['predictions'][0]['choice']
        self.assertIn('NO_DIAGNOSTIC_DIVERGENCE',check(p))
    def test_no_source(self):
        p=fixture();p['source_evidence_ids']=[]
        self.assertIn('NO_SOURCE_EVIDENCE',check(p))
    def test_answer_leaked(self):
        p=fixture();p['ground_truth_label']='XN'
        self.assertIn('ANSWER_LEAK_IN_PRELOCK',check(p))
    def test_missing_cost(self):
        p=fixture();p['predictions'][0]['cost']=''
        self.assertIn('DIAGNOSTIC_PREDICTION_INCOMPLETE',check(p))
    def test_unknown_candidate(self):
        p=fixture();p['candidates']=['XN','FAKE']
        self.assertIn('PAIR_MUST_BE_DISTINCT_TENYUAN',check(p))
    def test_fake_blind(self):
        p=fixture();p['source_scope']='BLIND_CANDIDATE'
        self.assertIn('BLIND_ISOLATION_NOT_DEMONSTRATED',check(p))
    def test_false_independent_claim(self):
        p=fixture();p['claim_independent_pass']=True
        self.assertIn('NO_SELF_CERTIFIED_INDEPENDENCE',check(p))
    def test_pair_mismatch(self):
        p=fixture();p['predictions'][0]['tenyuan']='NZ'
        self.assertIn('PREDICTION_PAIR_MISMATCH',check(p))

if __name__=='__main__': unittest.main()
