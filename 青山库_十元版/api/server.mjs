import http from "node:http";
import {runTask} from "./core.mjs";
const port=Number(process.env.QS_AI_PORT||8871);
const base=(process.env.QS_AI_BASE_URL||"http://127.0.0.1:11434/v1").replace(/\/+$/,"");
const model=process.env.QS_AI_MODEL||"";
const key=process.env.QS_AI_API_KEY||"";
const localToken=process.env.QS_AI_LOCAL_TOKEN||"";
if(!localToken) throw new Error("Set QS_AI_LOCAL_TOKEN before starting");
let busy=false;
async function provider(messages){
  if(!model)throw new Error("MODEL_NOT_CONFIGURED");
  const headers={"Content-Type":"application/json"};
  if(key)headers.Authorization="Bearer "+key;
  const response=await fetch(base+"/chat/completions",{method:"POST",headers,body:JSON.stringify({model,messages,temperature:0.2,stream:false}),signal:AbortSignal.timeout(120000)});
  if(!response.ok)throw new Error("UPSTREAM_HTTP_"+response.status);
  const data=await response.json();
  const content=data.choices?.[0]?.message?.content;
  if(typeof content!=="string")throw new Error("UPSTREAM_INVALID_RESPONSE");
  return content;
}
const srv=http.createServer(async(req,res)=>{
  const send=(status,body)=>{res.writeHead(status,{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"});res.end(JSON.stringify(body));};
  if(req.headers.authorization!=="Bearer "+localToken)return send(401,{error:"UNAUTHORIZED"});
  if(req.method==="GET"&&req.url==="/health")return send(200,{service:"QS-TY-AI",version:"0.1.0",model_configured:!!model,busy,provider_reachable:"NOT_PROBED"});
  if(req.method!=="POST"||req.url!=="/v1/ai/run")return send(404,{error:"NOT_FOUND"});
  if(busy)return send(429,{error:"BUSY",retryable:true});
  busy=true;
  try{
    let body="",size=0;
    for await(const chunk of req){size+=chunk.length;if(size>512000){send(413,{error:"BODY_TOO_LARGE"});return;}body+=chunk.toString("utf8");}
    let obj;try{obj=JSON.parse(body)}catch{return send(400,{error:"INVALID_JSON"});}
    const result=await runTask(obj,provider);send(200,result);
  }catch(e){
    const msg=String(e.message||"");
    const known=/^(INVALID_|SOURCE_IDS_REQUIRED|RELATION_RULES_REQUIRED|CONTEXT_TOO_LARGE)/.test(msg);
    const safe=/^(MODEL_|UPSTREAM_)/.test(msg)&&/^[A-Z0-9_]+$/.test(msg);
    send(known?400:502,{error:known||safe?msg:"AI_CALL_FAILED",commit_allowed:false});
  }finally{busy=false;}
});
srv.listen(port,"127.0.0.1",()=>console.log("QS-TY AI listening on loopback port "+port));
