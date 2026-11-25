// Sandbox-only deterministic dispatch gate, not a model or tool executor.
// Pure functions: host verifies authorization and artifact evidence; never trust model-supplied host flags.
function createPlan(registry, request) {
  const {project_id,job_id,route,profile,mode="SANDBOX"}=request;
  if(mode!=="SANDBOX") throw Error("sandbox only");
  for(const v of [project_id,job_id]) if(typeof v!=="string"||!v.trim()) throw Error("missing identity");
  if(!Object.hasOwn(registry.routes,route)||!Object.hasOwn(registry.model_profiles,profile)) throw Error("unknown route/profile");
  const roles=new Map(registry.roles.map(r=>[r.id,r]));
  if(roles.size!==registry.roles.length) throw Error("duplicate role");
  const stages=registry.routes[route].map((id,i)=>{
    const r=roles.get(id); if(!r) throw Error("unknown role");
    return {stage_id:`S${String(i+1).padStart(2,"0")}`,agent:id,adapter:r.adapter,result_type:r.result_type,max_retries:Math.min(2,r.max_retries),status:"PENDING",attempt:0};
  });
  return {schema_version:"0.1",project_id,job_id,route,profile,mode,version:0,index:0,status:"READY",stages,receipt_ids:[],events:[]};
}

function nextAction(state, host={}) {
  if(state.status!=="READY") return {action:state.status};
  const s=state.stages[state.index]; if(!s) return {action:"DONE"};
  if(["image_job","render_job","vision","video_read","gm_sandbox","code_sandbox","asset_read","source_read"].includes(s.adapter)&&host.authorized!==true) return {action:"BLOCKED",reason:"HOST_AUTH_REQUIRED",stage:s.stage_id};
  if(s.adapter==="image_job"&&host.confirmed_missing!==true) return {action:"BLOCKED",reason:"ASSET_GAP_REQUIRED",stage:s.stage_id};
  if(s.adapter==="render_job"&&!(host.preflight_pass===true&&host.asset_ready===true&&host.gpu_available===true)) return {action:"BLOCKED",reason:"RENDER_GATE_REQUIRED",stage:s.stage_id};
  if(["image_job","vision","video_read","gm_sandbox"].includes(s.adapter)&&host.gpu_available!==true) return {action:"WAIT_GPU",stage:s.stage_id};
  return {action:"DISPATCH",project_id:state.project_id,job_id:state.job_id,profile:state.profile,base_state_version:state.version,stage_id:s.stage_id,agent:s.agent,result_type:s.result_type,attempt:s.attempt,adapter:s.adapter,idempotency_key:JSON.stringify([state.project_id,state.job_id,s.stage_id,s.attempt])};
}

function applyReceipt(state, receipt, host={}) {
  if(typeof receipt.receipt_id!=="string"||!receipt.receipt_id) throw Error("receipt id required");
  if(state.receipt_ids.includes(receipt.receipt_id)) return {verdict:"DUPLICATE_NO_OP",state};
  if(!["READY","WAIT_EXTERNAL"].includes(state.status)) return {verdict:"TERMINAL_NO_OP",state};
  const s=state.stages[state.index];
  if(receipt.project_id!==state.project_id||receipt.job_id!==state.job_id||receipt.base_state_version!==state.version||receipt.stage_id!==s.stage_id||receipt.agent!==s.agent||receipt.result_type!==s.result_type||receipt.attempt!==s.attempt) return {verdict:"STALE_OR_WRONG_RECEIPT",state};
  if(!["PASS","RETRY","REPLAN","BLOCKED","WAIT_EXTERNAL","BYPASS"].includes(receipt.status)) throw Error("unknown verdict");
  if(receipt.status==="BYPASS"&&(!["AG-05","AG-06","AG-10"].includes(s.agent)||host.bypass_authorized!==true||!receipt.reason)) return {verdict:"BYPASS_DENIED",state};
  if(state.status==="WAIT_EXTERNAL"&&receipt.status==="WAIT_EXTERNAL") return {verdict:"WAIT_NO_OP",state};
  if(state.status==="READY"&&receipt.status!=="BYPASS"&&nextAction(state,host).action!=="DISPATCH") return {verdict:"DISPATCH_GATE_DENIED",state};
  if(["PASS","WAIT_EXTERNAL"].includes(receipt.status)&&!receipt.payload_ref) return {verdict:"MISSING_PAYLOAD_REF",state};
  const external=["image_job","render_job","vision","video_read","gm_sandbox","code_sandbox","asset_read","source_read"].includes(s.adapter);
  if(external&&["PASS","WAIT_EXTERNAL"].includes(receipt.status)&&(host.verified_receipt!==true||!receipt.evidence_ref)) return {verdict:"EXTERNAL_PROOF_REQUIRED",state};
  const n=JSON.parse(JSON.stringify(state)); const t=n.stages[n.index];
  n.receipt_ids.push(receipt.receipt_id);n.version++;
  n.events.push({stage_id:t.stage_id,agent:t.agent,attempt:t.attempt,receipt_id:receipt.receipt_id,status:receipt.status,reason:receipt.reason??null,payload_ref:receipt.payload_ref??null,evidence_ref:receipt.evidence_ref??null});
  if(receipt.status==="PASS"||receipt.status==="BYPASS"){t.status=receipt.status;n.index++;n.status=n.index===n.stages.length?"DONE":"READY";}
  else if(receipt.status==="RETRY"){if(t.attempt>=t.max_retries){t.status="BLOCKED";n.status="BLOCKED";}else{t.attempt++;t.status="PENDING";n.status="READY";}}
  else{t.status=receipt.status;n.status=receipt.status;}
  return {verdict:n.status,state:n};
}

function selfTest(registry) {
  const checks=[];const check=(name,ok)=>{if(!ok)throw Error("test failed: "+name);checks.push(name);};
  const input={project_id:"sandbox-p",job_id:"sandbox-j",route:"code_pilot",profile:"Q4"};
  const p=createPlan(registry,input);
  const make=(st,over={})=>{let s=st.stages[st.index];return {receipt_id:`r${st.version}`,project_id:st.project_id,job_id:st.job_id,base_state_version:st.version,stage_id:s.stage_id,agent:s.agent,result_type:s.result_type,attempt:s.attempt,status:"PASS",payload_ref:"mock.json",...over};};
  check("20 slots/18 canon",registry.roles.length===20&&registry.roles.filter(x=>x.kind==="canonical_role").length===18);
  check("all routes resolve",Object.keys(registry.routes).every(route=>createPlan(registry,{...input,route}).stages.length>0));
  check("director first",nextAction(p).agent==="AG-00");
  check("stale blocked",applyReceipt(p,make(p,{base_state_version:9})).verdict==="STALE_OR_WRONG_RECEIPT");
  check("wrong role blocked",applyReceipt(p,make(p,{agent:"AG-01"})).verdict==="STALE_OR_WRONG_RECEIPT");
  let p1=applyReceipt(p,make(p)).state;
  check("immutable transition",p.version===0&&p1.version===1&&p1.index===1);
  check("duplicate no-op",applyReceipt(p1,make(p)).verdict==="DUPLICATE_NO_OP");
  check("tool consent",nextAction(p1).reason==="HOST_AUTH_REQUIRED");
  check("unauthorized receipt denied",applyReceipt(p1,make(p1)).verdict==="DISPATCH_GATE_DENIED");
  check("proof gate",applyReceipt(p1,make(p1),{authorized:true}).verdict==="EXTERNAL_PROOF_REQUIRED");
  let w=applyReceipt(p1,make(p1,{status:"WAIT_EXTERNAL",evidence_ref:"mock-ticket"}),{authorized:true,verified_receipt:true}).state;
  check("wait not redispatch",nextAction(w).action==="WAIT_EXTERNAL");
  let p2=applyReceipt(w,make(w,{evidence_ref:"mock-verified-artifact"}),{verified_receipt:true}).state;
  check("resume after receipt",p2.index===2&&p2.status==="READY");
  check("done",applyReceipt(p2,make(p2)).state.status==="DONE");
  let x=p;for(let i=0;i<3;i++)x=applyReceipt(x,make(x,{status:"RETRY"})).state;
  check("bounded retry",x.status==="BLOCKED"&&x.stages[0].attempt===2);
  check("no unjustified bypass",applyReceipt(p,make(p,{status:"BYPASS",reason:"skip"}),{bypass_authorized:true}).verdict==="BYPASS_DENIED");
  let productionDenied=false;try{createPlan(registry,{...input,mode:"PRODUCTION"});}catch{productionDenied=true;}
  check("sandbox only",productionDenied);
  const render=createPlan(registry,{...input,route:"video_pilot"});
  render.index=render.stages.findIndex(s=>s.agent==="AG-07");
  check("render preflight",nextAction(render,{authorized:true}).reason==="RENDER_GATE_REQUIRED");
  check("render gate opens only with host checks",nextAction(render,{authorized:true,preflight_pass:true,asset_ready:true,gpu_available:true}).action==="DISPATCH");
  const img=createPlan(registry,{...input,route:"image_pilot"});img.index=img.stages.findIndex(s=>s.agent==="AG-05");
  check("image gap gate",nextAction(img,{authorized:true,gpu_available:true}).reason==="ASSET_GAP_REQUIRED");
  return checks;
}
export {createPlan,nextAction,applyReceipt,selfTest};
