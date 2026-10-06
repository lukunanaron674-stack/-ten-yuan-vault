import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {validateRelationTuple} from "../tools/r5_relation_tuple_gate_v0_1.mjs";
const root=new URL("../",import.meta.url);
const book=JSON.parse(readFileSync(new URL("01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.json",root),"utf8"));

const positive=validateRelationTuple({relation_id:"补_n_x并z",relation:"补",source_yuan:"n",target_yuan:"x并z"},book);
assert.equal(positive.ok,true);
assert.equal(positive.status,"REGISTERED_TUPLE");

const wrongTarget=validateRelationTuple({relation_id:"补_n_x并z",relation:"补",source_yuan:"n",target_yuan:"zn"},book);
assert.equal(wrongTarget.ok,false);
assert.equal(wrongTarget.status,"FAIL_CLOSED");
assert.ok(wrongTarget.errors.includes("RELATION_TUPLE_MISMATCH:target_yuan"));

const invented=validateRelationTuple({relation_id:"补_n_zn",relation:"补",source_yuan:"n",target_yuan:"zn"},book);
assert.equal(invented.ok,false);
assert.equal(invented.status,"FAIL_CLOSED");
assert.ok(invented.errors.includes("RELATION_NOT_REGISTERED:补_n_zn"));

console.log("Q-REL-001.3 tuple gate regression passed: 3/3 (registered positive + mismatch negative + invented-id negative)");
