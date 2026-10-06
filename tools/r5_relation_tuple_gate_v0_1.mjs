// Q-REL-001.3 fail-closed tuple gate. B1 is a noncanonical audit overlay; this gate does not redefine relations.
function relationById(book,id){return book?.entries?.find(e=>e.id===id)??null}

function validateRelationTuple(input,book){
  const required=["relation_id","relation","source_yuan","target_yuan"];
  const missing=required.filter(k=>typeof input?.[k]!=="string"||!input[k].trim());
  if(missing.length)return {ok:false,status:"FAIL_CLOSED",errors:missing.map(k=>"RELATION_TUPLE_REQUIRED:"+k)};
  const edge=relationById(book,input.relation_id);
  if(!edge)return {ok:false,status:"FAIL_CLOSED",errors:["RELATION_NOT_REGISTERED:"+input.relation_id]};
  const mismatches=[];
  for(const k of ["relation","source_yuan","target_yuan"])if(input[k]!==edge[k])mismatches.push(k);
  if(mismatches.length)return {ok:false,status:"FAIL_CLOSED",errors:mismatches.map(k=>"RELATION_TUPLE_MISMATCH:"+k),registered:{relation_id:edge.id,relation:edge.relation,source_yuan:edge.source_yuan,target_yuan:edge.target_yuan}};
  if(!edge.position_valid)return {ok:false,status:"FAIL_CLOSED",errors:["RELATION_POSITION_INVALID"]};
  return {ok:true,status:"REGISTERED_TUPLE",relation:{relation_id:edge.id,relation:edge.relation,source_yuan:edge.source_yuan,target_yuan:edge.target_yuan,mechanism_status:edge.mechanism_status,r5_use:edge.r5_use}};
}

export {validateRelationTuple,relationById};
