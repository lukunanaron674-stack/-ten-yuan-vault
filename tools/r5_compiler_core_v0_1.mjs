function isString(v){return typeof v==="string" && v.trim().length>0}

function hasKey(o,k){return Object.prototype.hasOwnProperty.call(o,k)}

function relationById(book,id){return book.entries.find(e=>e.id===id)}

function validateCase(c,book,mode){
  const errors=[],warnings=[];
  if(!c||typeof c!=="object"||Array.isArray(c))return {ok:false,errors:["CASE_NOT_OBJECT"],warnings};
  for(const k of ["case_id","relation_id","scene","goal"])if(!isString(c[k]))errors.push("CASE_REQUIRED:"+k);
  if(!Array.isArray(c.actors)||!c.actors.length)errors.push("CASE_ACTORS_MISSING");
  const actors=new Set();
  for(const a of c.actors||[]){if(!isString(a.id)||!isString(a.name))errors.push("CASE_ACTOR_INVALID");else if(actors.has(a.id))errors.push("CASE_DUP_ACTOR:"+a.id);else actors.add(a.id)}
  if(!c.focus||!actors.has(c.focus.source_actor)||!actors.has(c.focus.target_actor))errors.push("CASE_FOCUS_INVALID");
  if(!Array.isArray(c.world_rules)||!c.world_rules.length||!c.world_rules.every(isString))errors.push("CASE_WORLD_RULES_INVALID");
  if(!Array.isArray(c.initial_state)||!c.initial_state.length)errors.push("CASE_INITIAL_STATE_MISSING");
  const stateKeys=new Set();
  for(const s of c.initial_state||[]){
    if(!s||!isString(s.entity)||!isString(s.variable)||!isString(s.value))errors.push("CASE_STATE_INVALID");
    else {const k=s.entity+"/"+s.variable;if(stateKeys.has(k))errors.push("CASE_DUP_STATE:"+k);stateKeys.add(k)}
  }
  if(!Array.isArray(c.known_facts))errors.push("CASE_KNOWN_FACTS_MISSING");
  const facts=new Set();
  for(const f of c.known_facts||[]){
    if(!f||!isString(f.id)||!isString(f.text)||!Array.isArray(f.visible_to)||!f.visible_to.every(v=>actors.has(v)))errors.push("CASE_FACT_INVALID");
    else if(facts.has(f.id))errors.push("CASE_DUP_FACT:"+f.id);else facts.add(f.id);
  }
  if(!c.endpoint_evidence||!Array.isArray(c.endpoint_evidence.source)||!Array.isArray(c.endpoint_evidence.target)||!c.endpoint_evidence.source.length||!c.endpoint_evidence.target.length||![...c.endpoint_evidence.source,...c.endpoint_evidence.target].every(isString))errors.push("CASE_ENDPOINT_EVIDENCE_MISSING");
  const edge=relationById(book,c.relation_id);
  if(!edge)errors.push("RELATION_NOT_IN_B1:"+String(c.relation_id));
  else{
    if(!edge.position_valid)errors.push("RELATION_POSITION_INVALID");
    if(edge.mechanism_status!=="legacy_mechanism_documented"){
      if(mode==="strict")errors.push("RELATION_CANDIDATE_ONLY:"+edge.mechanism_status);
      else warnings.push("CANDIDATE_RESEARCH_ONLY:NO_CANONICAL_CLAIM_NO_BLIND_CREDIT:"+edge.mechanism_status);
    }else warnings.push("LEGACY_DOCUMENTED_NOT_EXTERNAL_VALIDATED:CASE_AND_SEMANTIC_REVIEW_REQUIRED");
  }
  if(mode!=="strict"&&mode!=="research")errors.push("MODE_INVALID");
  return {ok:errors.length===0,errors,warnings,relation:edge||null};
}

function validatePrediction(c,p,book,mode){
  const base=validateCase(c,book,mode),errors=[...base.errors],warnings=[...base.warnings];
  if(!p||typeof p!=="object"||Array.isArray(p))return {ok:false,errors:[...errors,"PRED_NOT_OBJECT"],warnings};
  if(p.case_id!==c.case_id)errors.push("PRED_CASE_MISMATCH");
  for(const k of ["carrier","target"])if(!isString(p[k]))errors.push("PRED_REQUIRED:"+k);
  if(!Array.isArray(p.mediators)||!p.mediators.length||!p.mediators.every(isString))errors.push("PRED_MEDIATORS_INVALID");
  if(!Array.isArray(p.variables)||!p.variables.length||!p.variables.every(isString))errors.push("PRED_VARIABLES_INVALID");
  if(!Array.isArray(p.actions)||p.actions.length<2)errors.push("PRED_NEEDS_TWO_ACTIONS");
  const actors=new Set((c.actors||[]).map(a=>a.id));
  const states=new Map((c.initial_state||[]).map(s=>[s.entity+"/"+s.variable,s.value]));
  const actions=new Map(), observable=new Map();
  for(const a of p.actions||[]){
    if(!a||!isString(a.id)||!actors.has(a.actor)||!isString(a.verb)||!isString(a.object)||!isString(a.tool))errors.push("PRED_ACTION_INVALID");
    else if(actions.has(a.id))errors.push("PRED_DUP_ACTION:"+a.id);else actions.set(a.id,a);
    if(a&&/^(突破|激活|承载|控制|推进|改变|促进|解决|影响)$/.test(String(a.verb).trim()))errors.push("PRED_ABSTRACT_ONLY_VERB:"+a.id);
    if(!Array.isArray(a?.preconditions)||!a.preconditions.length||!Array.isArray(a?.effects)||!a.effects.length)errors.push("PRED_ACTION_CONDITIONS_EFFECTS:"+String(a?.id));
    for(const item of a?.preconditions||[])if(!item||!isString(item.entity)||!isString(item.variable)||!isString(item.value))errors.push("PRED_PRECONDITION_INVALID:"+a.id);
    for(const e of a?.effects||[]){
      if(!e||!isString(e.entity)||!isString(e.variable)||!isString(e.before)||!isString(e.after)||e.before===e.after)errors.push("PRED_EFFECT_INVALID:"+String(a?.id));
    }
    if(!Array.isArray(a?.observable_fact_ids)||!a.observable_fact_ids.every(isString))errors.push("PRED_OBSERVABLE_FACTS_INVALID:"+String(a?.id));
    for(const f of a?.observable_fact_ids||[]){if(observable.has(f))errors.push("PRED_DUP_OBSERVABLE:"+f);else observable.set(f,a?.id)}
  }
  const ids=[...actions.keys()],indegree=new Map(ids.map(id=>[id,0])),children=new Map(ids.map(id=>[id,[]])),parents=new Map(ids.map(id=>[id,[]]));
  if(!Array.isArray(p.causal_chain)||p.causal_chain.length<Math.max(1,ids.length-1))errors.push("PRED_CAUSAL_CHAIN_TOO_SHORT");
  const seen=new Set();
  for(const e of p.causal_chain||[]){
    if(!e||!actions.has(e.from)||!actions.has(e.to)||e.from===e.to)errors.push("PRED_EDGE_INVALID");
    else if(seen.has(e.from+">"+e.to))errors.push("PRED_DUP_EDGE:"+e.from+">"+e.to);
    else {seen.add(e.from+">"+e.to);indegree.set(e.to,indegree.get(e.to)+1);children.get(e.from).push(e.to);parents.get(e.to).push(e.from)}
  }
  const q=ids.filter(id=>indegree.get(id)===0),order=[];
  while(q.length){const id=q.shift();order.push(id);for(const target of children.get(id)){indegree.set(target,indegree.get(target)-1);if(indegree.get(target)===0)q.push(target)}}
  if(order.length!==ids.length)errors.push("PRED_CAUSAL_CYCLE");
  if(ids.length>1)for(const id of ids)if((children.get(id).length+parents.get(id).length)===0)errors.push("PRED_ORPHAN_ACTION:"+id);
  function ancestors(id){const visited=new Set(),stack=[id];while(stack.length){const x=stack.pop();if(visited.has(x))continue;visited.add(x);for(const parent of parents.get(x)||[])stack.push(parent)}return visited}
  for(const id of order){
    const a=actions.get(id),before=ancestors(id);before.delete(id);
    for(const condition of a.preconditions||[]){
      const key=condition.entity+"/"+condition.variable;
      const matched=states.get(key)===condition.value||[...before].some(pr=>((actions.get(pr)?.effects)||[]).some(e=>e.entity===condition.entity&&e.variable===condition.variable&&e.after===condition.value));
      if(!matched)errors.push("PRED_PRECONDITION_UNSUPPORTED:"+id+":"+key+"="+condition.value);
    }
    for(const effect of a.effects||[]){
      const key=effect.entity+"/"+effect.variable;
      const matched=states.get(key)===effect.before||[...before].some(pr=>((actions.get(pr)?.effects)||[]).some(e=>e.entity===effect.entity&&e.variable===effect.variable&&e.after===effect.before));
      if(!matched)warnings.push("EFFECT_BEFORE_UNSUPPORTED:"+id+":"+key+"="+effect.before);
    }
  }
  const change=p.state_change;
  if(!change||!isString(change.entity)||!isString(change.variable)||!isString(change.before)||!isString(change.after)||change.before===change.after)errors.push("PRED_STATE_CHANGE_INVALID");
  else{
    const key=change.entity+"/"+change.variable;
    if(states.has(key)&&states.get(key)!==change.before)errors.push("PRED_INITIAL_STATE_MISMATCH:"+key);
    if(![...actions.values()].some(a=>(a.effects||[]).some(e=>e.entity===change.entity&&e.variable===change.variable&&e.after===change.after)))errors.push("PRED_FINAL_STATE_NOT_PRODUCED:"+key);
  }
  if(!p.variable_binding||p.variable_binding.relation_variable!==base.relation?.changed_variable||!isString(p.variable_binding.scene_variable)||!isString(p.variable_binding.mechanism_evidence))errors.push("PRED_VARIABLE_BINDING_MISSING_OR_WRONG");
  else if(change&&p.variable_binding.scene_variable!==change.variable)warnings.push("BINDING_DIFFERENT_FROM_PRIMARY_STATE_CHANGE:REVIEW");
  const frame=p.visual_frame;
  if(!frame||!actions.has(frame.moment_id)||!actors.has(frame.viewpoint_actor)||!Array.isArray(frame.actor_positions)||!frame.actor_positions.length||!frame.actor_positions.every(isString)||!isString(frame.visible_action)||!Array.isArray(frame.visible_objects)||!frame.visible_objects.length||!frame.visible_objects.every(isString)||!isString(frame.spatial_relation)||!Array.isArray(frame.visible_fact_ids))errors.push("PRED_FRAME_INVALID");
  else{
    const permitted=ancestors(frame.moment_id),factMap=new Map((c.known_facts||[]).map(f=>[f.id,f]));
    for(const fid of frame.visible_fact_ids){
      const existing=factMap.get(fid),producer=observable.get(fid);
      if(!existing&&!producer)errors.push("FRAME_UNSUPPORTED_FACT:"+fid);
      else if(existing&&!existing.visible_to.includes(frame.viewpoint_actor))errors.push("FRAME_OBSERVER_LEAK:"+fid);
      else if(producer&&!permitted.has(producer))errors.push("FRAME_FUTURE_LEAK:"+fid);
    }
  }
  warnings.push("STRUCTURE_ONLY:SEMANTIC_CAUSAL_FEASIBILITY_AND_IMAGE_TRUTH_REQUIRE_INDEPENDENT_REVIEW");
  return {ok:errors.length===0,errors:[...new Set(errors)],warnings:[...new Set(warnings)],relation_status:base.relation?.mechanism_status||"unknown",eligible_for_blind_credit:false};
}

function compilePrompt(c,book,mode){
  const check=validateCase(c,book,mode);
  if(!check.ok)return {ok:false,errors:check.errors,warnings:check.warnings};
  const e=check.relation;
  const lines=[
    "R5-v0.9 B2｜仅预测，不读取GOLD；不得把自己生成的答案当真实后续。",
    "模式："+mode+"；关系状态："+e.mechanism_status+"；仅位置："+e.position_valid,
    "题目："+c.case_id+"；关系："+e.id+"（"+e.source_axis+"→"+e.target_axis+"）",
    "现行机制条件："+e.gate,
    "必须改变的关系变量："+e.changed_variable,
    "最近邻误判："+e.nearest_miss,
    "若是候选关系，所有推导标注candidate，不声称已经通过正式关系审核。",
    "前情："+c.scene,
    "目标："+c.goal,
    "角色："+JSON.stringify(c.actors),
    "端点前提："+JSON.stringify(c.endpoint_evidence),
    "世界规则："+JSON.stringify(c.world_rules),
    "当前状态："+JSON.stringify(c.initial_state),
    "已知事实及各观察者范围："+JSON.stringify(c.known_facts),
    "只输出JSON字段 case_id,carrier,target,mediators,variables,variable_binding,actions,causal_chain,state_change,visual_frame。",
    "actions每项：id,actor(角色ID),verb(具体动词),object,tool,preconditions[{entity,variable,value}],effects[{entity,variable,before,after}],observable_fact_ids。",
    "causal_chain每项：{from,to}，只写必要因果边，可分支；禁止无前置条件的神奇动作。",
    "state_change：{entity,variable,before,after}，必须对应最初状态及至少一条动作效果。",
    "variable_binding：{relation_variable:必须原样使用关系变量,scene_variable:本题可观察状态变量,mechanism_evidence:具体动作与中介如何影响它}。",
    "visual_frame：{moment_id,viewpoint_actor,actor_positions,visible_action,visible_objects,spatial_relation,visible_fact_ids}，只画一个瞬间，不泄漏未知或未来事实。",
    "检查：动作是否取得权限、是否漏工具接口、当前状态是否只是中间目标、受保护人是否实际获得新状态。",
    "禁止输出得分、因果成功率、盲测通过等结论；结构检查仅检查字段和部分逻辑，语义仍待独立审核。"
  ];
  return {ok:true,prompt:lines.join("\n"),relation_status:e.mechanism_status,warnings:check.warnings};
}

export {validateCase,validatePrediction,compilePrompt,relationById};
