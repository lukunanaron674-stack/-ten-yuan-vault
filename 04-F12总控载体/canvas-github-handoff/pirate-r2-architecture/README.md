# Pirate R2 Architecture Handoff

This folder is the direct GitHub handoff for ChatGPT-generated Canvas assets.

Stable route:

1. ChatGPT generates one board at a time.
2. Ten Yuan F12 Local Bridge exports the latest original image.
3. Codex validates dimensions, size, and SHA-256.
4. Only the board image and `pipeline-state.json` are committed.
5. The next phase starts only after GitHub readback succeeds.

Current checkpoint: Board A is complete; P2 / Board B is ready.
