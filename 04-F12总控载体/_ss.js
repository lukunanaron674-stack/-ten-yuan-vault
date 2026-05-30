const f = require("fs");
const path = require("path");

async function main() {
  const tabs = await (await fetch("http://127.0.0.1:9222/json")).json();
  const sp = tabs.find(t => t.url && t.url.includes("sidepanel"));
  if (!sp) { console.log("no sidepanel"); return; }
  console.log("found:", sp.title);
  const ws = new WebSocket(sp.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  const send = (m, p = {}) => {
    const id = Math.random().toString(36).slice(2);
    ws.send(JSON.stringify({ id, method: m, params: p }));
    return new Promise(r => {
      const h = e => {
        const msg = JSON.parse(e.data);
        if (msg.id === id) { ws.removeEventListener("message", h); r(msg.result); }
      };
      ws.addEventListener("message", h);
    });
  };
  await send("Page.enable");
  const d = await send("Page.captureScreenshot", { format: "png" });
  const out = path.join(__dirname, "_sidepanel.png");
  f.writeFileSync(out, Buffer.from(d.data, "base64"));
  ws.close();
  console.log("screenshot saved:", out);
}
main().catch(e => console.error(e.message));
