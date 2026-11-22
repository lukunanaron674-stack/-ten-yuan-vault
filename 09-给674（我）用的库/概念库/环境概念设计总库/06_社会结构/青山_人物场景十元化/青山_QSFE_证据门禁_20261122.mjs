#!/usr/bin/env node

// QSFE source/identity/feelings/relationship evidence safety gate. Structural only.

// Usage: node qsfe_review_gate.mjs [path/to/suite.json] (default same-dir suite filename)

import fs from 'node:fs';

import path from 'node:path';

import {fileURLToPath} from 'node:url';

export function validateCase(c) {
  const err=[];
  const add=(code)=>{if(!err.includes(code))err.push(code)};
  const src=c?.source||{};
  const events=Array.isArray(c?.events)?c.events:[];
  const win=c?.reader_window||{};
  const ten=c?.tenyuan||{};
  const allowed=new Set(["FACT","OBSERVATION","INSTRUCTION","PROPOSAL","TESTIMONY","ACCUSATION","INFERENCE","PLAN","DECISION"]);
  if(!c||!c.case_id||!src.evidence_ref||!src.quality||!Number.isInteger(win.cutoff_chapter))add("SOURCE_SCOPE_MISSING");
  if(!events.length||!Array.isArray(c.events))add("EVENTS_MISSING");
  const ids=new Set();
  for(const e of events){
    if(!e.id||ids.has(e.id)||!e.action||!e.actor||!e.evidence_ref)add("EVENT_EVIDENCE_MISSING");
    ids.add(e.id);
    if(!allowed.has(e.epistemic))add("EPISTEMIC_TYPE_INVALID");
    if(Number.isInteger(win.cutoff_chapter)&&e.chapter>win.cutoff_chapter)add("FUTURE_KNOWLEDGE_LEAK");
    if(["INSTRUCTION","PROPOSAL","PLAN"].includes(e.epistemic)&&e.downstream_result==="DONE")add("COMMAND_AS_RESULT");
    if(["ACCUSATION","INFERENCE","TESTIMONY"].includes(e.epistemic)&&e.asserted_as_fact===true)add("CLAIM_AS_FACT");
    if(e.attempt_only===true&&e.death_confirmed===true)add("ATTEMPT_AS_DEATH");
  }
  for(const ref of (c.entity_refs||[])){
    if(!ref.id||!ref.kind)add("ENTITY_REF_MISSING");
    if(ref.kind==="COLLECTIVE"&&ref.independent_scoreable===true)add("COLLECTIVE_AS_ORG");
  }
  for(const state of (c.knowledge_ledger||[])){
    if(state.knowledge==="KNOWN"&&state.basis!=="DIRECT_SOURCE")add("KNOWLEDGE_CONFLATED");
    if(state.knowledge==="NOT_KNOWN"&&state.basis!=="DIRECT_SOURCE")add("KNOWLEDGE_CONFLATED");
  }
  if(ten.subject!=="READER"||!["AI_H","UNTESTED","HUMAN_F3"].includes(ten.status))add("TENUYAN_SUBJECT_INVALID");
  if(ten.locked===true&&(ten.status!=="HUMAN_F3"||!c.human_feeling||!c.human_feeling.source))add("UNVERIFIED_TOP_LOCK");
  if(ten.scores!==null&&ten.scores!==undefined&&(!["UNVALIDATED","HUMAN_F3"].includes(ten.calibration)||(ten.calibration==="UNVALIDATED"&&!ten.scoring_rationale)))add("FALSE_PRECISION");
  if((c.character_stable_locks||[]).length>0&&c.AG11_authorized!==true)add("AG11_OVERREACH");
  for(const edge of (c.relation_claims||[])){
    if(edge.strict_l2===true&&edge.approved_l2_record!==true)add("L2_UNAUTHORIZED");
    if(edge.event_id&&!ids.has(edge.event_id))add("RELATION_EVENT_MISSING");
  }
  if(!c.counterfactual||!c.counterfactual.change||!c.counterfactual.expected_difference)add("NO_COUNTERFACTUAL");
  return err.sort();
}

export function runSuite(suite) {
  const tests=[];
  for(const c of (suite.accept_cases||[])){
    const errors=validateCase(c);
    tests.push({id:c.case_id,kind:"positive",pass:errors.length===0,errors});
  }
  for(const m of (suite.mutant_cases||[])){
    const original=(suite.accept_cases||[]).find(x=>x.case_id===m.from);
    if(!original){tests.push({id:m.id,kind:"negative",pass:false,errors:["MISSING_BASE_CASE"]});continue;}
    const copy=JSON.parse(JSON.stringify(original));
    const target=m.change||{};
    const path=target.path||[];
    let node=copy;
    for(const key of path.slice(0,-1))node=node[key];
    node[path[path.length-1]]=target.value;
    const errors=validateCase(copy);
    tests.push({id:m.id,kind:"negative",pass:errors.includes(m.expect),expected:m.expect,errors});
  }
  return {test_count:tests.length,pass:tests.filter(x=>x.pass).length,failed:tests.filter(x=>!x.pass).map(x=>x.id),tests,
    epistemic_note:"PASS means only deterministic error gates passed, NOT ten-yuan accuracy, independent agent performance, or source truth."};
}

const here=path.dirname(fileURLToPath(import.meta.url));

const input=process.argv[2]||path.join(here,'青山_QSFE_R05-R08_门禁测试集_20261122.json');

const suite=JSON.parse(fs.readFileSync(input,'utf-8'));

const result=runSuite(suite);

console.log(JSON.stringify({input, ...result},null,2));

if(result.pass!==result.test_count)process.exitCode=2;
