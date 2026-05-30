async function main() {
  const resp = await fetch("http://127.0.0.1:9222/json");
  const tabs = await resp.json();
  console.log("Total targets:", tabs.length);
  tabs.forEach(t => console.log(t.type + " | " + (t.title||"").substring(0,60) + " | " + (t.url||"").substring(0,80)));
}
main().catch(e => console.error(e.message));
