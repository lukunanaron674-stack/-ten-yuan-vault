# Ten Yuan Brain Map

## Quick Start

1. Open `editor.html` in browser (Chrome/Edge recommended)
2. Grant file write permission when prompted
3. Build your knowledge graph

## File Structure

```
_brain-map/
  editor.html     - React Flow node editor
  graph.json      - Node & edge data
  events.jsonl    - Change event log (Codex reads this)
  watcher.ps1     - File change watcher
  README.md       - This file

nodes/
  ...            - Markdown files per node
```

## Features

- Drag & drop nodes on canvas
- Double-click to enter subflow
- Breadcrumb navigation
- Image embedding per node
- Save graph to graph.json
- Event logging to events.jsonl

## For Codex

When waking up, read in order:
1. `_brain-map/events.jsonl` - recent changes
2. `_brain-map/graph.json` - current graph state
3. Changed `.md` nodes
