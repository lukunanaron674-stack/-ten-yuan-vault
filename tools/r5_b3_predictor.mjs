#!/usr/bin/env node
// B3 predictor-side freeze. Run under an identity with NO access to independent GOLD vault.
import {readFileSync,writeFileSync,mkdirSync,openSync,closeSync} from "node:fs";
import {createHash} from "node:crypto";
import {dirname,resolve} from "node:path";
import {fileURLToPath} from "node:url";
import {validateCase,validatePrediction} from "./r5_compiler_core_v0_1.mjs";
const project=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const relationFile=resolve(project,"01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.json");
const sha=x=>createHash("sha256").update(x).digest("hex");
const readJSON=p=>JSON.parse(readFileSync(resolve(p),"utf8"));
function fail(s){throw Error(s)}
function writeNew(file,data){
 mkdirSync(dirname(file),{recursive:true});
 const handle=openSync(file,"wx",0o600);
 try{writeFileSync(handle,JSON.stringify(data,null,2)+"\n","utf8")}finally{closeSync(handle)}
}
try{
 const [command,inputPath,predPath,outDir,predictorId]=process.argv.slice(2);
 if(command!=="freeze"||!inputPath||!predPath||!outDir||!predictorId)fail("Usage: node tools/r5_b3_predictor.mjs freeze INPUT.json PRED.json EXCHANGE_DIR PREDICTOR_ID");
 const book=readJSON(relationFile),inputRaw=readFileSync(resolve(inputPath),"utf8"),input=JSON.parse(inputRaw);
 const predRaw=readFileSync(resolve(predPath),"utf8"),pred=JSON.parse(predRaw);
 const gate=validateCase(input,book,"strict");
 if(!gate.ok)fail("INPUT_REJECTED: "+gate.errors.join(";"));
 const structural=validatePrediction(input,pred,book,"strict");
 if(!structural.ok)fail("PRED_REJECTED: "+structural.errors.join(";"));
 if(!/^R5-PILOT-\d{3}$|^R5-C-\d{4}$/.test(input.case_id))fail("CASE_ID_NOT_PILOT_OR_FORMAL");
 const target=resolve(outDir,input.case_id);
 mkdirSync(target,{recursive:true});
 const record={schema:"R5-B3-PRED-LOCK-v0.1",case_id:input.case_id,
   predictor_id:predictorId,locked_at:new Date().toISOString(),
   relation_id:input.relation_id,
   input_sha256:sha(JSON.stringify(input,null,2)+"\n"),prediction_sha256:sha(JSON.stringify(pred,null,2)+"\n"),
   structural_check_only:true,semantic_or_blind_score:false,
   input:input,prediction:pred};
 // One atomic create of the lock artifact, no mutable copy of prediction in exchange.
 writeNew(resolve(target,"prediction.lock.json"),record);
 process.stdout.write(JSON.stringify({case_id:input.case_id,locked_at:record.locked_at,prediction_sha256:record.prediction_sha256,input_sha256:record.input_sha256,notice:"Locked; no GOLD read and no score given. Requires external vault/access control."})+"\n");
}catch(e){process.stderr.write(String(e)+"\n");process.exitCode=2}
