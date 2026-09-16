# Inspiration Wall v1.0 — Round 2 Benchmark Report

## Scope

This is a text-level structural unit test for the workflow, not an empirical image-model accuracy claim.

### Positive structural tests
- 6 object domains
- 5 Five-Axis operational slots
- 30 total cases
- 30/30 preserve the intended structural operation in the curated test set

Domains:
- character
- room
- architecture
- city
- machine
- plant group

### Negative anti-cheat probes
3/3 correctly rejected:
1. blue/river → water shortcut
2. red/flame → fire shortcut
3. noun swap without relation change

### Ten-Yuan eventization probes
6 probes were tested on relations already well-established in the active project context:
- ZX × city / machine
- NX × character / room
- XZ × architecture / plant group

All 6 contain a before-state, trigger, relation change, observable consequence, and new state, so J7 passes.

## Important boundary

The Skill intentionally imports the project's canonical Ten-Yuan cards instead of redefining all ten semantics here.
That prevents this module from silently drifting away from the user's canonical theory.

A full ten-relation × image benchmark should be run only when the canonical definition cards and the image auditor are available to the runtime.

## Round-2 verdict

The architecture is ready to freeze as `inspiration-wall v1.0`.

The next work is usage, not another theory round.
