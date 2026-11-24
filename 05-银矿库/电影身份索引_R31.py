"""R31 conservative identity gate. No network, no writes, no theory changes."""
import unicodedata
import re

def norm(s):
    return re.sub(r"[^\w]", "", unicodedata.normalize("NFKC", s).casefold()).replace("_","")

def classify(candidate, records, archive_complete=False):
    aliases = {norm(x) for x in candidate["aliases"] if x}
    for r in records:
        if not aliases.intersection(norm(x) for x in r["aliases"] if x):
            continue
        if r.get("conflict"):
            return "BLOCKED_LEGACY_IDENTITY_CONFLICT"
        if any(candidate.get(k) and r.get(k) and candidate[k] != r[k]
               for k in ("year", "medium", "edition")):
            return "BLOCKED_VERSION_CONFLICT"
        if r.get("body_verified") and r.get("prior_analysis"):
            return "EXCLUDED_PREVIOUSLY_ANALYZED"
        return "ARCHIVE_PENDING"
    return "DEDUP_PASS" if archive_complete else "ARCHIVE_PENDING"

def selftest():
    # Regression fixtures derived from ledger entries 2026-11-12 to 22.
    cases = [
        ("Perfect Days", 2023, True, False, "EXCLUDED_PREVIOUSLY_ANALYZED"),
        ("Banshees of Inisherin", 2022, False, True, "BLOCKED_LEGACY_IDENTITY_CONFLICT"),
        ("Anatomy of a Fall", 2023, False, True, "BLOCKED_LEGACY_IDENTITY_CONFLICT"),
        ("After Life", 1998, True, False, "EXCLUDED_PREVIOUSLY_ANALYZED"),
    ]
    for title, year, verified, conflict, expected in cases:
        c = dict(aliases=[title], year=year, medium="FEATURE_FILM")
        r = dict(c, body_verified=verified, prior_analysis=verified, conflict=conflict)
        assert classify(c, [r]) == expected, title
    assert classify(dict(aliases=["unknown"]), []) == "ARCHIVE_PENDING"
    assert classify(dict(aliases=["unknown"]), [], True) == "DEDUP_PASS"
    print("6 regression fixtures passed")

if __name__ == "__main__":
    selftest()
