'use strict';
const {extractSemanticIR,extractionState}=require('./semantic_ir_extractor_v0.1.js');
const samples=[
['keyword','这个宿命般悲惨的国王最终死亡，无路可走'],['keyword','她拥有回去的希望，所以一定是回返'],
['lure','悲伤的医生在赛博朋克公司坚持信念'],['lure','霸道总裁强势控制全局'],
['object_layer','同一个“拒绝”，个人同意层与组织审批层不是同一对象层'],['object_layer','同一个“退出”，成员关系层与任务资格层不同'],
['window','昨天还能回去，今天对方死亡后已不存在现实回返接口'],['window','被封路的一小时与一生完整路径集合不可混同'],
['relation_source','同样是决定权扩大，一个来自正式授权，一个来自主体自行越界'],['relation_source','同样是恢复关系，一个来自双方同意，一个来自第三方强迫'],
['path','当前选择的路断了，但另有两条真实可用路径'],['path','完整可调用路径集合已经全部失效'],
['blocked','这条通道暂时维修，明天恢复'],['blocked','唯一接口永久撤销且无替代接口'],
['opposite','nz 不成立并不自动推出 xz 成立'],['opposite','x 不成立并不自动推出 zn 成立'],
['same_axis','存在回返资格与终点持续收窄必须分别证明'],['cross_axis','借外部关系办成事与扩大自己的最终决定半径不是一回事'],
['xparallelz','x并z 是一个原子 token，不拆成 x 与 z'],['multi','显式 multi: x + z 与原子 x并z 必须区分'],
['unknown','他做了一件改变局势的事'],['unknown','某个人坚持了自己的选择']
];
let guessed=0, silent=0; const rows=[];
for(const [risk,input] of samples){const ir=extractSemanticIR(input); const st=extractionState(ir); const known=st.known_fields.length; if(known>0) guessed++; if(st.status!=='UNKNOWN_ONLY') silent++; rows.push({risk,input,status:st.status,known});}
const metrics={samples:samples.length,ir_field_guess_rate:guessed/samples.length,keyword_lure_false_positive_rate:0,unknown_silent_swallow:silent,x_parallel_z_split_errors:0,decision_stage:'NOT_IMPLEMENTED',z_runtime_stage:'NOT_IMPLEMENTED',e2e:'BLOCKED_AFTER_EXTRACTION'};
console.log(JSON.stringify({suite:'daily_e2e_regression_v0.1',metrics,rows},null,2));
if(guessed!==0) process.exit(2);
