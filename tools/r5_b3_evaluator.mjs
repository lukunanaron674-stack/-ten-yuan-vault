#!/usr/bin/env node
// B3 evaluator-side sealing and score aggregation. Run under independent evaluator identity.
// GOLD MUST be in a predictor-inaccessible vault, never inside a shared GitHub worktree.
import {readFileSync,writeFileSync,mkdirSync,openSync,closeSync,existsSync} from "node:fs";
import {createHash} from "node:crypto";
import {dirname,resolve} from "node:path";
const sha=x=>createHash("sha256").update(x).digest("hex");
const readJSON=p=>JSON.parse(readFileSync(resolve(p),"utf8"));
function fail(s){throw Error(s)}
function saveExclusive(file,obj){mkdirSync(dirname(file),{recursive:true});const f=openSync(file,"wx",0o600);try{writeFileSync(f,JSON.stringify(obj,null,2)+"\n","utf8")}finally{closeSync(f)}}
const requireString=(x,k)=>{if(typeof x!=="string"||!x.trim())fail("REQUIRED:"+k)};
const sameKeys=["carrier","target","actions","mediators","state_change","visual_frame"];
function checkGold(input,gold){
 if(!gold||gold.case_id!==input.case_id)fail("GOLD_CASE_MISMATCH");
 if(gold.source_type!=="original_independently_authored"||gold.authorship_attested!==true||gold.gold_preexisting!==true||gold.predictor_has_no_gold_access!==true)fail("INDEPENDENCE_ATTESTATION_MISSING");
 requireString(gold.author_id,"author_id");requireString(gold.reference_continuation,"reference_continuation");
 for(const k of ["world_constraints","core_variables","causal_edges","valid_alternatives","forbidden_shortcuts"])if(!Array.isArray(gold[k]))fail("GOLD_REQUIRED_ARRAY:"+k);
 if(gold.core_variables.length===0||gold.causal_edges.length===0||gold.world_constraints.length===0)fail("GOLD_INSUFFICIENT_DETAIL");
}
function checkRating(r,caseId,predictorId,goldAuthor){
 if(!r||r.case_id!==caseId||r.independent!==true)fail("RATING_NOT_INDEPENDENT");
 requireString(r.rater_id,"rater_id");if(r.rater_id===predictorId||r.rater_id===goldAuthor)fail("RATING_CONFLICT_OF_INTEREST");
 for(const k of sameKeys)if(!Number.isInteger(r.six_fields?.[k])||r.six_fields[k]<0||r.six_fields[k]>2)fail("RATING_SIX_FIELD_INVALID:"+k);
 for(const key of ["causal","variables"]){
   const a=r[key];if(!a||!Number.isInteger(a.correct)||!Number.isInteger(a.predicted)||!Number.isInteger(a.gold)||a.predicted<1||a.gold<1||a.correct<0||a.correct>Math.min(a.predicted,a.gold))fail("RATING_COUNT_INVALID:"+key);
 }
 const ar=r.abstract;
 if(!ar||!Number.isInteger(ar.residual_clauses)||!Number.isInteger(ar.total_clauses)||ar.total_clauses<1||ar.residual_clauses<0||ar.residual_clauses>ar.total_clauses)fail("RATING_ABSTRACT_INVALID");
 if(!["PASS","FAIL","AMBIGUOUS"].includes(r.visual?.result))fail("RATING_VISUAL_INVALID");
 requireString(r.notes,"notes");
}
function f1(x){const p=x.correct/x.predicted,r=x.correct/x.gold;return p+r===0?0:2*p*r/(p+r)}
try{
 const [cmd,a,b,c,d,e]=process.argv.slice(2);
 if(cmd==="seal"){
   if(!a||!b||!c)fail("Usage: node tools/r5_b3_evaluator.mjs seal INPUT.json INDEPENDENT_GOLD.json PRIVATE_VAULT");
   const inputRaw=readFileSync(resolve(a),"utf8"),goldRaw=readFileSync(resolve(b),"utf8");
   const input=JSON.parse(inputRaw),gold=JSON.parse(goldRaw);checkGold(input,gold);
   const record={schema:"R5-B3-GOLD-SEAL-v0.1",case_id:input.case_id,author_id:gold.author_id,
     sealed_at:new Date().toISOString(),input_sha256:sha(inputRaw),gold_sha256:sha(goldRaw),
     gold:gold,access_control:"MUST_BE_ENFORCED_BY_INDEPENDENT_OS_OR_SERVICE"};
   saveExclusive(resolve(c,input.case_id,"gold.sealed.json"),record);
   process.stdout.write(JSON.stringify({case_id:input.case_id,sealed_at:record.sealed_at,input_sha256:record.input_sha256,gold_sha256:record.gold_sha256,warning:"Store vault outside predictor reach; hash alone is not access control."})+"\n");
 }else if(cmd==="score"){
   if(!a||!b||!c||!d||!e)fail("Usage: node tools/r5_b3_evaluator.mjs score CASE_ID PRIVATE_VAULT EXCHANGE_DIR RATER1.json RATER2.json");
   const caseId=a;
   const gold=readJSON(resolve(b,caseId,"gold.sealed.json"));
   const lock=readJSON(resolve(c,caseId,"prediction.lock.json"));
   if(gold.case_id!==caseId||lock.case_id!==caseId)fail("CASE_ID_MISMATCH");
   if(!(Date.parse(gold.sealed_at)<Date.parse(lock.locked_at)))fail("GOLD_NOT_SEALED_BEFORE_PREDICTION");
   if(gold.input_sha256!==lock.input_sha256)fail("INPUT_HASH_MISMATCH");
   if(gold.gold_sha256!==sha(JSON.stringify(gold.gold,null,2)+"\n"))fail("GOLD_HASH_MISMATCH_OR_NONCANONICAL_GOLD");
   if(lock.prediction_sha256!==sha(JSON.stringify(lock.prediction,null,2)+"\n"))fail("PRED_HASH_MISMATCH_OR_NONCANONICAL_PRED");
   if(gold.author_id===lock.predictor_id)fail("GOLD_AUTHOR_PREDICTOR_COLLISION");
   const ratings=[readJSON(d),readJSON(e)];
   for(const rating of ratings)checkRating(rating,caseId,lock.predictor_id,gold.author_id);
   if(ratings[0].rater_id===ratings[1].rater_id)fail("RATERS_NOT_DISTINCT");
   const disagreements=sameKeys.filter(k=>Math.abs(ratings[0].six_fields[k]-ratings[1].six_fields[k])>1);
   const totals=ratings.map(r=>sameKeys.reduce((n,k)=>n+r.six_fields[k],0));
   const report={schema:"R5-B3-PILOT-SCORE-v0.1",case_id:caseId,pool:"PILOT_ONLY",counts_toward_formal_100:false,
     gold_sealed_at:gold.sealed_at,prediction_locked_at:lock.locked_at,
     predictor_id:lock.predictor_id,independent_raters:ratings.map(x=>x.rater_id),
     six_field_rater_totals:totals,
     six_field_average:Math.round(((totals[0]+totals[1])/2)*100)/100,
     per_field:Object.fromEntries(sameKeys.map(k=>[k,(ratings[0].six_fields[k]+ratings[1].six_fields[k])/2])),
     causal_edge_f1:ratings.map(r=>f1(r.causal)),
     variable_f1:ratings.map(r=>f1(r.variables)),
     abstract_residual_rate:ratings.map(r=>r.abstract.residual_clauses/r.abstract.total_clauses),
     visual_votes:ratings.map(r=>r.visual.result),
     major_disagreements:disagreements,
     adjudication_required:disagreements.length>0||ratings[0].visual.result!==ratings[1].visual.result,
     notes:"Pilot results must not be reused for formal 100 after tuning. Ratifier independence and GOLD inaccessibility require external audit."};
   saveExclusive(resolve(b,caseId,"score.report.json"),report);
   process.stdout.write(JSON.stringify(report,null,2)+"\n");
 }else fail("Command must be seal or score");
}catch(error){process.stderr.write(String(error)+"\n");process.exitCode=2}
