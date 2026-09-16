---
name: inspiration-wall
version: "1.0"
description: >
  A structured inspiration-wall workflow for turning raw visual/story seeds into
  transferable structures, five-axis variations, ten-yuan events, and judged
  inspiration cards. Use for visual development, worldbuilding, character/scene
  ideation, concept art research, and story-seed expansion.
---

# Inspiration Wall Skill

## Goal

Do not build a scrapbook. Build a generative graph.

The workflow must convert:

raw seed
→ observable structure
→ transferable structure
→ five-axis variations
→ ten-yuan eventization
→ judge
→ accepted inspiration cards

The skill is successful only when the output produces genuinely new, drawable /
writable ideas while preserving a traceable structural ancestry.

## External Definitions

This skill MUST NOT redefine the user's Five-Axis or Ten-Yuan theory.

Load the project's canonical definition cards first.

Expected configurable locations:

- Five-Axis definitions: `../five-axis/`
- Ten-Yuan definitions: `../ten-yuan/`
- Optional image auditor: `../image-auditor/`

If those paths differ, resolve them from the current project index.

## Inputs

Accepted seed types:

- image
- character
- scene
- object
- architecture
- worldbuilding sentence
- story sentence
- composition
- visual reference cluster

## Phase 1 — Normalize the seed

Extract only observable facts first.

Do not interpret the seed through Five-Axis or Ten-Yuan yet.

Required fields:

- objects
- actions_or_states
- spatial_relations
- constraints
- unusual_point

## Phase 2 — Remove surface cheating

Temporarily strip:

- color
- genre
- character profession
- gender
- obvious symbols
- named aesthetic labels
- direct Five-Axis/Ten-Yuan vocabulary

Write one `transferable_structure` sentence.

A valid sentence should still make sense when all proper nouns and style words are replaced.

## Phase 3 — Five-Axis divergence

Five-Axis is an operation layer, NOT a classification layer.

For each canonical axis, generate three kinds of variation:

1. `direct`: same object/domain, change only the structural operation.
2. `transfer`: preserve the operation, move it into another object domain.
3. `inversion`: preserve the axis logic but reverse the initial presentation.

Minimum output:
- 5 axes × 3 variants = 15 candidates per seed.

Do not force all 15 into the wall. They are candidates only.

## Phase 4 — Ten-Yuan eventization

Five-Axis changes HOW the structure is organized.
Ten-Yuan changes WHAT HAPPENS BETWEEN ACTORS/OBJECTS.

For each accepted Five-Axis candidate:

1. Parse the candidate into the project's Ten-Yuan intermediate representation.
2. Use canonical Ten-Yuan definition cards to select plausible relation operators.
3. Generate events by changing at least one of:
   - actor
   - object
   - changed_variable
   - relation_shape
   - direction
   - path_set
   - decision_right
   - reentry_right
   - condition
   - stage
4. Write the result as a concrete event, not an abstract explanation.

Every event must contain:
- an actor/object pair or an explicit system/object relation
- a change
- a direction
- a visible/experiential consequence
- an end state or unresolved new condition

Do not hardcode Ten-Yuan meanings in this skill. The canonical cards are the source of truth.

## Phase 5 — Score

Use scoring only to rank candidates.

10-point score:

- structural clarity: 0–3
- survives surface removal: 0–2
- cross-domain transferability: 0–2
- drawable/writable concreteness: 0–2
- new information: 0–1

## Phase 6 — Judge

Judge is the gate. Score is not the gate.

Reject if ANY critical test fails:

- J1: removing color leaves the idea intact
- J2: removing genre leaves the idea intact
- J3: removing character identity leaves the idea intact
- J4: structure can be described without Five-Axis/Ten-Yuan words
- J5: at least two concrete visual/narrative evidence points exist
- J6: the candidate changes structure rather than reskinning it
- J7: eventization creates a real change, not a renamed state
- J8: cross-domain version still preserves the same underlying relation

Critical failures:
- J4 fail → reject
- J6 fail → reject
- J7 fail → reject

## Phase 7 — Export

Accepted cards go into a graph-shaped wall:

- center: seed
- ring 1: five-axis variations
- ring 2: ten-yuan events
- ring 3: concrete references / characters / scenes / props / story sentences

Every node stores its parent ID.

Never export a flat gallery as the primary representation.

## Output targets

Per seed:
- 15 Five-Axis candidates
- 5–10 accepted structural variations
- 2–4 Ten-Yuan eventizations per accepted variation
- final accepted wall: typically 12–30 nodes

Quality is preferred over filling quotas.

## Anti-patterns

Reject these behaviors:

- "water = blue / river"
- "fire = red / flame"
- "metal = silver / sword"
- "wood = green / plant"
- "earth = brown / rock"
- Ten-Yuan represented only by costume, color, expression, occupation, or genre trope
- collecting references without stating why they are structurally useful
- generating dozens of near-synonyms
- classifying a seed without changing it
- changing every variable at once so ancestry becomes untraceable

## Verification

Before declaring a run successful:

1. Test at least 6 object domains.
2. Check that the same structural rule survives domain transfer.
3. Check that at least 70% of accepted ideas are not surface reskins.
4. Check duplicate rate among accepted ideas is below 20%.
5. Check every accepted node can point to a parent and a changed variable.
6. Run the project's image auditor when visual outputs exist.

If any verification fails, revise the offending rule rather than adding more examples.
