# FZM R2 JSONL Parts Manifest

Linear free-plan attachment limit is 10 MB, so the canonical local file was split on JSONL record boundaries. To reconstruct, concatenate the three files below in listed order; do not include line separators between files because each record already ends with LF.

Canonical source: `FZM_R2_EVIDENCE_PACKET.jsonl`  
Size: 18,541,511 bytes  
Records: 13,178  
SHA256: `31ccfe369add85a57861d2a9a914ce411270e8e106f1f8db69ed194e84042ab4`

| Order | Part | Bytes | Records | SHA256 |
|---:|---|---:|---:|---|
| 1 | `FZM_R2_EVIDENCE_PACKET.part01.jsonl` | 7,998,757 | 5,935 | `013f5c62fb9f39bcad1cdd3eb3c333c29bbf6e4552f14003930335299d8eae38` |
| 2 | `FZM_R2_EVIDENCE_PACKET.part02.jsonl` | 7,999,296 | 5,418 | `f23aa59ce91cc029a7739d0386a3308358a3db6598ffc9946eda82146525cf8f` |
| 3 | `FZM_R2_EVIDENCE_PACKET.part03.jsonl` | 2,543,458 | 1,825 | `e7792bd47f5a1a8de0ec22f9215bb9d3827bacf8cc4eb3371866c063883f20d8` |

These are sanitized derived excerpts and tool locators, not raw Codex session archives.
