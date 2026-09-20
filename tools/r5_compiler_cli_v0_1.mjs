#!/usr/bin/env node
// R5-v0.9 B2 structural compiler. Never loads GOLD; structural checks are NOT semantic or blind-test scores.
import {readFileSync,writeFileSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {dirname,resolve} from "node:path";
import {validateCase,validatePrediction,compilePrompt} from "./r5_compiler_core_v0_1.mjs";
const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const bookPath=resolve(root,"01-十元系统/05-十元语义空间/B1_R5关系输入审计_20260920.json");
function readJSON(p){return JSON.parse(readFileSync(resolve(p),"utf8"))}
function usage(){throw Error("Usage: node tools/r5_compiler_cli_v0_1.mjs prepare|validate-case|validate-prediction --case path [--pred path] [--mode strict|research] [--out path]")}
try{
 const [command,...args]=process.argv.slice(2);if(!["prepare","validate-case","validate-prediction"].includes(command))usage();
 const options={mode:"strict"};for(let i=0;i<args.length;i+=2){if(!args[i]?.startsWith("--")||args[i+1]===undefined)usage();options[args[i].slice(2)]=args[i+1]}
 if(!options.case)usage();if(command==="validate-prediction"&&!options.pred)usage();
 const book=readJSON(bookPath),c=readJSON(options.case);
 const output=command==="prepare"?compilePrompt(c,book,options.mode):command==="validate-case"?validateCase(c,book,options.mode):validatePrediction(c,readJSON(options.pred),book,options.mode);
 const rendered=command==="prepare"&&output.ok?output.prompt+"\n":JSON.stringify(output,null,2)+"\n";
 if(options.out)writeFileSync(resolve(options.out),rendered,"utf8");else process.stdout.write(rendered);
 if(!output.ok)process.exitCode=2;
}catch(error){process.stderr.write(String(error)+"\n");process.exitCode=2}
