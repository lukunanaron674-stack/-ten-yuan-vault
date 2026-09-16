# Eventize Workflow

For each accepted Five-Axis node:

1. Read canonical Ten-Yuan cards.
2. Parse the node into the Ten-Yuan IR.
3. Produce 3 relation candidates.
4. Reject any candidate that changes only mood/aesthetics.
5. For each surviving relation, write:
   - before
   - trigger
   - action/change
   - consequence
   - end state
6. Run Judge J7/J8.
7. Keep 2–4 strongest events.

## Concrete-event template

`[Actor/System] changes [relation/variable] toward/against [Object/System], causing [visible consequence], leaving [new state].`

Do not output the template literally. Produce natural-language events.
