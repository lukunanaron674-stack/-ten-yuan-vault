import unicodedata,re

def norm(s):
    return re.sub(r'[^\w]','',unicodedata.normalize('NFKC',s).casefold()).replace('_','')

def aliases(r):
    return {v for s in r.get('aliases',[]) if s for v in [norm(s)] if v}

def classify(candidate,records,archive_complete=False):
    a=aliases(candidate)
    if not a: return 'BLOCKED_EMPTY_IDENTITY'
    matches=[r for r in records if a & aliases(r) or (candidate.get('external_id') and candidate['external_id']==r.get('external_id'))]
    if any(r.get('conflict') for r in matches): return 'BLOCKED_LEGACY_IDENTITY_CONFLICT'
    if any(any(candidate.get(k) and r.get(k) and candidate[k]!=r[k] for k in ('year','medium','edition','external_id')) for r in matches): return 'BLOCKED_VERSION_CONFLICT'
    if any(r.get('body_verified') and r.get('prior_analysis') for r in matches): return 'EXCLUDED_PREVIOUSLY_ANALYZED'
    return 'DEDUP_PASS' if archive_complete and not matches else 'ARCHIVE_PENDING'

def selftest():
    c={'aliases':['Perfect Days'],'year':2023}; v=dict(c,body_verified=True,prior_analysis=True); b=dict(c,conflict=True)
    assert classify(c,[v])=='EXCLUDED_PREVIOUSLY_ANALYZED'
    assert classify(c,[v,b])==classify(c,[b,v])=='BLOCKED_LEGACY_IDENTITY_CONFLICT'
    assert classify(c,[dict(c,year=2024)])=='BLOCKED_VERSION_CONFLICT'
    assert classify(c,[])=='ARCHIVE_PENDING'
    assert classify(c,[],True)=='DEDUP_PASS'
    assert classify({'aliases':['!!!']},[],True)=='BLOCKED_EMPTY_IDENTITY'
    assert classify(dict(c,external_id='id1'),[dict(v,aliases=['別名'],external_id='id1')])=='EXCLUDED_PREVIOUSLY_ANALYZED'
    assert classify(c,[dict(c)])=='ARCHIVE_PENDING'
    print('8 regression assertions passed')
if __name__=='__main__': selftest()
