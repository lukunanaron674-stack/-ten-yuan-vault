#!/usr/bin/env node

// QSFE source/identity/feelings/relationship evidence safety gate. Structural only.

// Usage: node qsfe_review_gate.mjs [path/to/suite.json] (default same-dir suite filename)

import fs from 'node:fs';

import path from 'node:path';

import {fileURLToPath} from 'node:url';


// R12 optional stricter contract for prelocked source episodes. The source manifest
// must be produced from a separately scoped text extraction; schema checks cannot
// certify the truth of any quote or the independence of its author.
export function validateWindowedEvidence(c, manifest, add) {
  if (c?.validation_contract !== "QSFE_R12_EVENT_WINDOW_V1") return;
  if (!manifest || !Array.isArray(manifest.required_event_units) || !Array.isArray(manifest.reader_cues)) {
    add("SOURCE_MANIFEST_REQUIRED");
    return;
  }
  if (!manifest.source_scope || !manifest.reviewer_id || !["ASSISTED","INDEPENDENT"].includes(manifest.review_mode)) add("SOURCE_MANIFEST_SCOPE_MISSING");
  if (manifest.review_mode === "INDEPENDENT" &&
      (!manifest.review_receipt_ref || manifest.reviewer_id === c.generator_id)) add("SOURCE_SELF_REVIEW");
  const events = Array.isArray(c.events) ? c.events : [];
  // A complete source coverage ledger cannot be inferred from a possibly
  // self-edited manifest. This extra gate only protects record chronology.
  let previousPosition = null;
  for (const e of events) {
    if (!Number.isInteger(e.chapter) || !Number.isInteger(e.unit) || e.unit < 0) {
      add("EVENT_POSITION_MISSING");
      continue;
    }
    const position=e.chapter*1000000 + e.unit;
    if (previousPosition!==null && position<=previousPosition) add("EVENT_SEQUENCE_NONMONOTONIC");
    previousPosition=position;
  }
  if (manifest.review_mode==="INDEPENDENT") {
    // There is no external attestation tool here. A string receipt supplied
    // in JSON must NEVER be accepted as proof of an independent reviewer.
    add("INDEPENDENCE_NOT_EXTERNALLY_VERIFIED");
  }
  const expected = new Map();
  const allowedRoles = new Set(["TRIGGER","MEDIATOR","RESPONSE","OUTCOME","CONTEXT"]);
  for (const req of manifest.required_event_units) {
    if (!req?.id || expected.has(req.id) || !req.source_ref || !req.source_span ||
        !req.actor || !req.target || !allowedRoles.has(req.event_role)) {
      add("SOURCE_MANIFEST_UNGROUNDED");
      continue;
    }
    expected.set(req.id,req);
    const actual=events.find(e=>e.id===req.id);
    if (!actual) {
      add(req.event_role==="MEDIATOR" ? "INTERMEDIATE_EVENT_MISSING" : "REQUIRED_EVENT_MISSING");
      continue;
    }
    if (actual.actor!==req.actor || actual.target!==req.target) add("EVENT_ACTOR_TARGET_MISMATCH");
    if (actual.event_role!==req.event_role) add("EVENT_ROLE_MISMATCH");
    if (actual.chapter!==req.chapter || actual.unit!==req.unit) add("EVENT_ORDER_MISMATCH");
    if (actual.epistemic!==req.epistemic) add("EVENT_EPISTEMIC_MISMATCH");
  }
  for (const e of events) if (!expected.has(e.id)) add("EVENT_OUTSIDE_SOURCE_MANIFEST");
  const win=c.reader_window||{};
  const ten=c.tenyuan||{};
  const allowedScopes=new Set(["LOCAL_BEAT","CHAPTER_TO_DATE"]);
  if (!allowedScopes.has(win.analysis_scope) || !["FULL_READER_HISTORY","ISOLATED_EXCERPT"].includes(win.context_mode) ||
      !Number.isInteger(win.cutoff_chapter) || !Number.isInteger(win.cutoff_unit) || win.cutoff_unit<0) add("READER_WINDOW_UNSPECIFIED");
  if (ten.scope!==win.analysis_scope) add("READER_SCOPE_COLLAPSE");
  if (ten.scope==="CHAPTER_TO_DATE" && win.context_mode!=="FULL_READER_HISTORY") add("READER_CONTEXT_NOT_FULL");
  const cutoff=(ch,unit)=>ch<win.cutoff_chapter||(ch===win.cutoff_chapter&&unit<=win.cutoff_unit);
  for (const e of events) if (Number.isInteger(e.chapter)&&Number.isInteger(e.unit)&&!cutoff(e.chapter,e.unit)) add("READER_FUTURE_LEAK");
  const cues = new Map();
  for (const r of manifest.reader_cues) {
    if (!r?.id || cues.has(r.id) || !r.source_ref || !r.source_span ||
        !Number.isInteger(r.chapter) || !Number.isInteger(r.unit)) add("SOURCE_CUE_UNGROUNDED");
    else cues.set(r.id,r);
  }
  if (!Array.isArray(win.visible_cue_ids) || !win.visible_cue_ids.length) {
    add("READER_VISIBLE_CUES_MISSING");
    return;
  }
  const visible=new Set(win.visible_cue_ids);
  for (const cid of visible) {
    const cue=cues.get(cid);
    if (!cue) {add("READER_CUE_UNGROUNDED");continue;}
    if (!cutoff(cue.chapter,cue.unit)) add("READER_FUTURE_LEAK");
  }
  // A real reader of the ongoing novel has all earlier cues; a deliberately
  // isolated extract may hide them, but must not claim whole-chapter perception.
  if (win.context_mode==="FULL_READER_HISTORY") {
    for (const cue of cues.values()) {
      if (cutoff(cue.chapter,cue.unit) && !visible.has(cue.id)) add("READER_PRIOR_CUE_MISSING");
    }
  }
  if (!Array.isArray(win.anchor_cue_ids) || !win.anchor_cue_ids.length ||
      win.anchor_cue_ids.some(cid=>!visible.has(cid))) add("READER_ANCHOR_MISSING");
}

export function validateCase(c,registry={},sourceManifests={}) {
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
    if(ref.id?.startsWith("QSP-")&&Array.isArray(registry.person_ids)&&!registry.person_ids.includes(ref.id))add("UNKNOWN_PERSON_ID");
    if(ref.id?.startsWith("QS21-")&&Array.isArray(registry.world_object_ids)&&!registry.world_object_ids.includes(ref.id))add("UNKNOWN_WORLD_OBJECT_ID");
    if(ref.id&&registry.world_object_kinds?.[ref.id]&&ref.kind!==registry.world_object_kinds[ref.id])add("WORLD_KIND_MISMATCH");
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
  validateWindowedEvidence(c,sourceManifests[c?.case_id],add);
  return err.sort();
}

export function runSuite(suite) {
  const tests=[];
  for(const c of (suite.accept_cases||[])){
    const errors=validateCase(c,suite.reference_registry||{},suite.source_manifests||{});
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
    const manifests=JSON.parse(JSON.stringify(suite.source_manifests||{}));
    if(m.manifest_change){
      const mdata=manifests[m.from];
      if(!mdata){tests.push({id:m.id,kind:"negative",pass:false,errors:["MISSING_BASE_MANIFEST"]});continue;}
      const keys=m.manifest_change.path||[];
      let entry=mdata;
      for(const key of keys.slice(0,-1)) entry=entry?.[key];
      if(!entry){tests.push({id:m.id,kind:"negative",pass:false,errors:["INVALID_MANIFEST_MUTATION"]});continue;}
      entry[keys[keys.length-1]]=m.manifest_change.value;
    }
    const errors=validateCase(copy,suite.reference_registry||{},manifests);
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
