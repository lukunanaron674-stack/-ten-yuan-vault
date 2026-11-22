import copy,unittest
from evaluate_holdout import score

def data():
    p={'split':'CALIBRATION','generator_id':'AG13','prelock_ref':'local-known-demo',
       'rows':[{'film_id':'F1','case_id':'X1','character_id':'A','top1':'NX','top3':['NX','ZX']},
               {'film_id':'F2','case_id':'X2','character_id':'B','top1':'XN','top3':['XN','Z']},
               {'film_id':'F3','case_id':'X3','character_id':'C','top1':None,'top3':[],'abstained':True}]}
    g={'reviewer_id':'USER','rows':[{'case_id':'X1','character_id':'A','label':'NX','label_source_ref':'L1'},
                                  {'case_id':'X2','character_id':'B','label':'Z','label_source_ref':'L2'},
                                  {'case_id':'X3','character_id':'C','label':'ZN','label_source_ref':'L3'}]}
    return p,g,{'exposure_case_ids':['X1','X2','X3']}

class Tests(unittest.TestCase):
    def test_calibration_metrics(self):
        p,g,m=data();r=score(p,g,m)
        self.assertEqual(r['status'],'CALIBRATION_METRICS_ONLY')
        self.assertEqual(r['top1_all'],0.3333)
        self.assertEqual(r['top3_all'],0.6667)
        self.assertEqual(r['abstention_rate'],0.3333)
        self.assertFalse(r['independent_accepted'])
    def test_cannot_relabel_known_cases_holdout(self):
        p,g,m=data();p['split']='HOLDOUT';m['isolation_receipt']='fake';g['external_author_receipt']='fake'
        self.assertIn('KNOWN_ANSWER_CONTAMINATION',score(p,g,m)['errors'])
    def test_self_review_block(self):
        p,g,m=data();g['reviewer_id']='AG13'
        self.assertIn('SELF_REVIEW',score(p,g,m)['errors'])
    def test_missing_gold_block(self):
        p,g,m=data();g['rows'][0]['label_source_ref']=''
        self.assertIn('GOLD_LABEL_INVALID',score(p,g,m)['errors'])
    def test_missing_prelock(self):
        p,g,m=data();p['prelock_ref']=''
        self.assertIn('NO_PRELOCK_REF',score(p,g,m)['errors'])
    def test_duplicate_case(self):
        p,g,m=data();p['rows'].append(copy.deepcopy(p['rows'][0]))
        self.assertIn('DUPLICATE_ID',score(p,g,m)['errors'])
    def test_holdout_candidate_not_auto_pass(self):
        p,g,m=data();p['split']='HOLDOUT';m['exposure_case_ids']=[];m['isolation_receipt']='reviewed-external';g['external_author_receipt']='reviewed-external'
        r=score(p,g,m)
        self.assertEqual(r['status'],'METRICS_COMPUTED_EXTERNAL_AUDIT_PENDING')
        self.assertFalse(r['independent_accepted'])
    def test_top3_invalid(self):
        p,g,m=data();p['rows'][0]['top3']=['NX','NX']
        self.assertIn('TOP3_INVALID',score(p,g,m)['errors'])

if __name__=='__main__': unittest.main()
