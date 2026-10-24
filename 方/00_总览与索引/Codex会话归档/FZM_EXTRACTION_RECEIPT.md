# FZM Codex Archive Extraction Receipt

## Batch B1 — Initial source census

- Batch ID: `FZM-674-314-B1-20261023`
- Result: `PARTIAL`; Linear 674-314 remains In Progress.
- Local sessions: 629 compressed + 12 parseable JSONL; one 0-byte legacy JSONL is `BLOCKED / EMPTY_SOURCE`.
- Archived sessions: 78 compressed.
- Unique session IDs in the fresh snapshot: 718. One session_id has two different compressed files (38,850,879 B and 243,552 B); they are retained as separate source segments, not deleted as duplicate copies.
- Migration mirror: 642/642 relative paths and file lengths align with C; all 642 SHA-256 comparisons matched with zero mismatches. 640 pairs were stable; 2 live JSONL pairs changed during hashing and are marked `LIVE_UNSTABLE_MATCH_SNAPSHOT`.
- Session index: 622 rows; 19 unique FZM-specific title hits, all mapped to a local compressed source. Title hits are candidates only.
- Candidate raw pass: all 19 title-index candidates were streamed via 7-Zip; 30,867 raw lines, 2,497 message records (623 user / 1,760 assistant / 114 other roles), 632 short alias/card-token evidence records, zero decompression errors.
- Full alias scan: 719 source files / 718 unique session_id values / 851,051 lines scanned; 267 sessions hit explicit FZM aliases; 3,455 message-level evidence rows produced. Two anomalous records were investigated without modifying raw sources: line 445 of session `01a05c0d-aa2a-7f12-9daf-c456c5eeaa3a` is 4,194,305 bytes, containing 4,194,304 NUL bytes and no project aliases, so it is not a parseable JSON message; line 2683 of `01a07750-31f2-7941-b8f3-3d8eaa5ac1ae` is 2,097,153 bytes and contains an unescaped control/invalid escape inside a long JSON string. The latter includes FZM and other-project aliases; it remains excluded from normalized evidence pending a lossless parser/repair method. Parent sessions stay partial. All source streams were readable; these two records remain content-level exceptions.
- Tool pass: all 267 alias-hit sessions were scanned for function_call/function_call_output; 9,437 tool-call/output candidate rows, zero read errors.
- Merged R2 staging packet has 13,178 rows across 267 sessions: USER 1,028; ASSISTANT 2,713; CODEX_ASSISTANT tool-call 4,537; TOOL output 4,900. Sensitive-command context was redacted in 76 excerpts; final credential scan must remain zero-hit. Tool calls are not execution; tool outputs are receipts only after review.
- Sanitized L1/L2/L3-candidate receipts are attached to Linear 674-314. Linear's free-plan 10 MB/file cap required splitting the 18,541,511-byte R2 JSONL into 3 record-aligned attachments; `FZM_R2_PARTS_MANIFEST.md` provides sizes, record counts, per-part hashes, concatenation order and canonical SHA256.
- Existing archive search: no prior L1–L4 ledger/evidence/context package found. Existing FZM execution indices and Canvas are preserved and not treated as this archive.
- Archive root created: `C:\Users\19308\Documents\Obsidian\ten-yuan-vault\方\00_总览与索引\Codex会话归档\`.
- Raw JSONL/ZST files: not moved, modified, or uploaded. `state_*.sqlite`: not opened. No Git push.

## Next batch / remaining work

`B2` continues by semantically classifying USER decisions and validating explicit choices against TOOL/EXECUTION_RECEIPT evidence. `B3` must compile decision/version conflicts and split mixed project sessions by source interval; `B4` creates the current-context recovery pack, index/map, verifies the outputs, and attaches sanitized derivatives to Linear. Do not mark the issue Done until those phases are actually complete.

## B2 update — anomaly triage and USER alias counts

- Direct USER alias scan of the 13,178-row sanitized packet: 203 of 267 alias-hit sessions contain at least one USER row with a FZM alias; only 5 of those also contain a USER row with a Lililong/黎黎龙 alias and are cross-project segment candidates, not final classifications; 64 alias-hit sessions have no direct USER FZM alias. `十元` belongs to the FZM project's theory line and is not counted as a cross-project alias. A prior count of 72 mixed candidates incorrectly included `十元` and is superseded by this corrected count.
- Rechecked the two source exceptions using a binary streaming read through 7-Zip: the first is a NUL-filled non-JSON payload record; the second has malformed control/escape syntax and explicit aliases for both projects. No in-place repair or guessed excerpt was made.
- The updated `FZM_SESSION_ADJUDICATION.md` and supporting conflict/handoff files are attached to the issue. L1/R2 remains `PARTIAL`; per-session segmentation and a lossless recovery path for the malformed record remain open.

## B3/B4 partial continuation — 2026-10-24

- Re-read the latest Linear B2 correction. Current cross-project USER-alias candidate count is 5 (not the superseded 72); 203 USER FZM-alias sessions, 64 alias-hit sessions without direct USER FZM alias, and 451 explicit-alias misses remain as previously recorded.
- Added `FZM_CURRENT_CONTEXT.md`, `FZM_CONTEXT_INDEX.md`, `FZM_MISSING_SOURCES.md`, `FZM_SHOT_CARD_HISTORY.md`, and `FZM_CONTEXT_MAP.canvas` as a clearly marked provisional recovery/navigation package. The shot/card history is a locator-backed sample, not an exhaustive card ledger.
- Canvas validation: 11 nodes, 10 edges, 21 unique IDs, 0 dangling edges; all file targets exist.
- Recomputed canonical R2 packet SHA256: `31ccfe369add85a57861d2a9a914ce411270e8e106f1f8db69ed194e84042ab4`, matching `FZM_R2_PARTS_MANIFEST.md`.
- Created the Linear Document `方志敏全会话恢复上下文（L4 暂行包）` as an external readable handoff. It preserves `PARTIAL` status and states the remaining gates.
- L1–L3 are not complete: 267 alias-hit sessions still lack exhaustive segment adjudication; 451 ambiguous sessions lack second-layer recall; two malformed source records lack lossless recovery; full card/role/style/version chains and all-source-root coverage are unverified. Issue must remain `In Progress`.
