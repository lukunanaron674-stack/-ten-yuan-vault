// Synthetic smoke tests: the mocked authors/raters do not make a genuine blind evaluation.
import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,writeFileSync,mkdtempSync} from "node:fs";
import {tmpdir} from "node:os";
import {resolve} from "node:path";
import {spawnSync} from "node:child_process";
import {fileURLToPath} from "node:url";
const root=resolve(fileURLToPath(new URL("../",import.meta.url)));
const fx=resolve(root,"01-十元系统/05-十元语义空间");
const predictor=resolve(root,"tools/r5_b3_predictor.mjs");
const evaluator=resolve(root,"tools/r5_b3_evaluator.mjs");
const j=(p,v)=>writeFileSync(p,JSON.stringify(v,null,2)+"\n");
const run=(file,args)=>spawnSync(process.execPath,[file,...args],{encoding:"utf8"});
function fixture(caseId){
 const tmp=mkdtempSync(resolve(tmpdir(),"r5-b3-smoke-"));
 const input=JSON.parse(readFileSync(resolve(fx,"B2_R5示例输入_20260920.json"),"utf8"));
 const pred=JSON.parse(readFileSync(resolve(fx,"B2_R5示例预测_20260920.json"),"utf8"));
 input.case_id=pred.case_id=caseId;
 const inputPath=resolve(tmp,"INPUT.json"),predPath=resolve(tmp,"PRED.json");
 const goldPath=resolve(tmp,"GOLD-MOCK.json"),vault=resolve(tmp,"vault"),exchange=resolve(tmp,"exchange");
 j(inputPath,input);j(predPath,pred);
 j(goldPath,{case_id:caseId,source_type:"original_independently_authored",authorship_attested:true,
 gold_preexisting:true,predictor_has_no_gold_access:true,author_id:"MOCK_AUTHOR",reference_continuation:"Synthetic smoke fixture only.",
 world_constraints:["Only paper and pencil"],core_variables:["handover_log","handover_rule"],
 causal_edges:[{from:"a1",to:"a2"}],valid_alternatives:[],forbidden_shortcuts:[]});
 return {tmp,inputPath,predPath,goldPath,vault,exchange,caseId};
}
test("synthetic pipeline freezes and seals without overwrite and produces PILOT_ONLY report",()=>{
 const f=fixture("R5-PILOT-001");
 let r=run(evaluator,["seal",f.inputPath,f.goldPath,f.vault]);assert.equal(r.status,0,r.stderr);
 assert.notEqual(run(evaluator,["seal",f.inputPath,f.goldPath,f.vault]).status,0);
 r=run(predictor,["freeze",f.inputPath,f.predPath,f.exchange,"MOCK_PREDICTOR"]);assert.equal(r.status,0,r.stderr);
 assert.notEqual(run(predictor,["freeze",f.inputPath,f.predPath,f.exchange,"MOCK_PREDICTOR"]).status,0);
 const score={case_id:f.caseId,independent:true,
 six_fields:{carrier:2,target:2,actions:2,mediators:2,state_change:2,visual_frame:2},
 causal:{correct:1,predicted:1,gold:1},variables:{correct:2,predicted:2,gold:2},
 abstract:{residual_clauses:0,total_clauses:2},visual:{result:"PASS"},notes:"Smoke fixture only"};
 const r1=resolve(f.tmp,"r1.json"),r2=resolve(f.tmp,"r2.json");
 j(r1,{...score,rater_id:"MOCK_RATER_A"});j(r2,{...score,rater_id:"MOCK_RATER_B"});
 r=run(evaluator,["score",f.caseId,f.vault,f.exchange,r1,r2]);assert.equal(r.status,0,r.stderr);
 const report=JSON.parse(r.stdout);assert.equal(report.counts_toward_formal_100,false);
 assert.equal(report.pool,"PILOT_ONLY");assert.equal(report.six_field_average,12);
 assert.equal(report.causal_edge_f1[0],1);assert.equal(report.adjudication_required,false);
 assert.notEqual(run(evaluator,["score",f.caseId,f.vault,f.exchange,r1,r2]).status,0);
});
test("changed prediction is detected before scoring",()=>{
 const f=fixture("R5-PILOT-002");
 assert.equal(run(evaluator,["seal",f.inputPath,f.goldPath,f.vault]).status,0);
 assert.equal(run(predictor,["freeze",f.inputPath,f.predPath,f.exchange,"MOCK_PREDICTOR"]).status,0);
 const lockPath=resolve(f.exchange,f.caseId,"prediction.lock.json");
 const lock=JSON.parse(readFileSync(lockPath,"utf8"));lock.prediction.target="forged after freeze";j(lockPath,lock);
 const score={case_id:f.caseId,independent:true,
 six_fields:{carrier:1,target:1,actions:1,mediators:1,state_change:1,visual_frame:1},
 causal:{correct:1,predicted:1,gold:1},variables:{correct:1,predicted:1,gold:1},
 abstract:{residual_clauses:0,total_clauses:1},visual:{result:"AMBIGUOUS"},notes:"mock"};
 const r1=resolve(f.tmp,"r1.json"),r2=resolve(f.tmp,"r2.json");
 j(r1,{...score,rater_id:"RATER_A"});j(r2,{...score,rater_id:"RATER_B"});
 const result=run(evaluator,["score",f.caseId,f.vault,f.exchange,r1,r2]);
 assert.notEqual(result.status,0);assert.match(result.stderr,/PRED_HASH_MISMATCH/);
});
