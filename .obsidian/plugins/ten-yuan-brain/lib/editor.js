
(function(){
var h = React.createElement;
var useState = React.useState, useCallback = React.useCallback, useEffect = React.useEffect, useRef = React.useRef;
var Fragment = React.Fragment;

var RF = window.ReactFlow;
if (!RF) { document.getElementById('root').innerHTML = '<div style="padding:40px;text-align:center;color:#e74c3c">ReactFlow 加载失败</div>'; return; }

var ReactFlowC = RF.default || RF.ReactFlow;
var Handle = RF.Handle, Position = RF.Position, useNodesState = RF.useNodesState, useEdgesState = RF.useEdgesState;
var addEdge = RF.addEdge, Controls = RF.Controls, Background = RF.Background, MiniMap = RF.MiniMap, NodeResizer = RF.NodeResizer, Marker类型 = RF.Marker类型;

var TYPE_COLORS = {tenyuan:'#e8a87c',theme:'#95e1d3',muxing:'#f38181',material:'#aa96da',task:'#f4d03f',image:'#5dade2',custom:'#7ec8e3'};
var TYPE_LABELS = {tenyuan:'\u5341\u5143\u8bed\u4e49',theme:'\u4e94\u5927\u4e3b\u9898',muxing:'\u52a8\u6001\u94fe\u6bcd\u578b',material:'F12\u7d20\u6750',task:'\u4efb\u52a1',image:'\u56fe\u7247',custom:'\u81ea\u5b9a\u4e49'};

var DEFAULT_GRAPH = [
  {id:'1',type:'tenyuan',label:'\u5341\u5143\u8bed\u4e49\u5165\u53e3',color:'#e8a87c',x:350,y:80,w:200,h:200,image:'',desc:'zn/x/n/xn/nx',children:[]},
  {id:'2',type:'theme',label:'\u4e94\u5927\u4e3b\u9898',color:'#95e1d3',x:350,y:330,w:200,h:200,image:'',desc:'\u65f6\u95f4/\u672c\u4f53/\u7a7a\u95f4/\u56e0\u679c/\u547d\u8fd0',children:[]},
  {id:'3',type:'muxing',label:'\u52a8\u6001\u94fe\u6bcd\u578b',color:'#f38181',x:620,y:200,w:200,h:200,image:'',desc:'\u56de\u6536/\u5d29\u574f/\u626d\u66f2/\u6865\u63a5/\u6c61\u67d3\u6865',children:[]},
  {id:'4',type:'material',label:'F12\u5f52\u6863\u7d20\u6750',color:'#aa96da',x:80,y:200,w:200,h:200,image:'',desc:'\u8bad\u7ec3\u7d20\u6750\u4e0e\u6848\u4f8b',children:[]},
  {id:'5',type:'task',label:'\u5f85\u5220\u51cf',color:'#f4d03f',x:620,y:450,w:180,h:160,image:'',desc:'\u5f85\u5904\u7406\u6761\u76ee',children:[]}
];

var initEdges = [
  {id:'e1-4',source:'1',target:'4'},
  {id:'e2-3',source:'2',target:'3'},
  {id:'e4-5',source:'4',target:'5'},
  {id:'e3-5',source:'3',target:'5'}
];

function showToast(msg,type){var t=document.createElement('div');t.className='toast toast-'+(type||'ok');t.textContent=msg;document.body.appendChild(t);setTimeout(function(){t.remove()},2000)}

function downloadJSON(data,name){var b=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;a.click();showToast('已下载: '+name)}

// Node components
function BrainNode(props){var d=props.data,c=d.color||'#7ec8e3';return h('div',{className:'node-card',style:{border颜色:c+'66'}},h('div',{className:'node-type',style:{color:c}},TYPE_LABELS[d.type]||d.type),h('div',{className:'node-label'},d.label),d.desc&&h('div',{className:'node-desc'},d.desc),d.image&&h('img',{src:d.image,alt:''}),h(NodeResizer,{color:c,isVisible:true,min宽度:80,min高度:40}),h(Handle,{type:'target',position:Position.Top,style:{background:c}}),h(Handle,{type:'source',position:Position.Bottom,style:{background:c}}))}

function 图片Node(props){var d=props.data;return h('div',{className:'image-node',style:{width:d.w||200,height:d.h||200}},h('img',{src:d.image||'',alt:d.label,style:{width:'100%',height:'100%',objectFit:'cover'},draggable:false}),h('div',{className:'img-label'},d.label),h(NodeResizer,{color:'#5dade2',isVisible:true,min宽度:60,min高度:60}),h(Handle,{type:'target',position:Position.Top,style:{background:'#5dade2'}}),h(Handle,{type:'source',position:Position.Bottom,style:{background:'#5dade2'}}))}

var node类型s={brainNode:BrainNode,imageNode:图片Node};

function graphToNode(g){var t=g.type==='image'?'imageNode':'brainNode';var w=g.w||(g.type==='image'?200:180),h2=g.h||(g.type==='image'?200:'auto');return{id:g.id,type:t,position:{x:g.x||Math.random()*400+100,y:g.y||Math.random()*300+100},width:w,height:h2,data:{label:g.label,type:g.type,color:g.color,desc:g.desc||'',image:g.image||'',w:w,h:h2},style:g.type==='image'?{width:w,height:h2}:{}}}

function edgeFromGraph(e){return{id:e.id||('e-'+e.source+'-'+e.target),source:e.source,target:e.target,type:'smoothstep',animated:false,style:{stroke:'#888'},markerEnd:{type:Marker类型.ArrowClosed,color:'#888'}}}

function App(){
  var rootStack=useRef([]);
  var ns=useNodesState(DEFAULT_GRAPH.map(graphToNode));
  var nodes=ns[0],setNodes=ns[1],onNodesChange=ns[2];
  var es=useEdgesState(initEdges.map(edgeFromGraph));
  var edges=es[0],setEdges=es[1],onEdgesChange=es[2];
  var sel=useState(null);var selNode=sel[0],setSelNode=sel[1];
  var graphStack=useState([{label:'根',data:DEFAULT_GRAPH,edges:initEdges}]);
  var stack=graphStack[0],setStack=graphStack[1];
  var rf=useRef(null);
  var dropActive=useState(false);var dropping=dropActive[0],setDropping=dropActive[1];

  function rebuildFromData(gData,gEdges){setNodes(gData.map(graphToNode));setEdges((gEdges||[]).map(edgeFromGraph))}

  var onConnect=useCallback(function(p){setEdges(function(eds){return addEdge({...p,type:'smoothstep',style:{stroke:'#888'},markerEnd:{type:Marker类型.ArrowClosed,color:'#888'}},eds)})},[setEdges]);

  useEffect(function(){
    parent.postMessage({plugin:"ten-yuan-brain",action:"load"},"*");
    function handler(e){
      if(!e.data||e.data.plugin!=="ten-yuan-brain")return;
      if(e.data.action==="loaded"){
        try{var g=JSON.parse(e.data.graph);if(g.nodes){DEFAULT_GRAPH=g.nodes;initEdges=g.edges||[];rebuildFromData(DEFAULT_GRAPH,initEdges)}}catch(ex){}
      }
      if(e.data.action==="saved"){showToast("已保存到仓库")}
      if(e.data.action==="error"){showToast("错误: "+e.data.msg,"er")}
    }
    window.addEventListener("message",handler);
    return function(){window.removeEventListener("message",handler)}
  },[]);

  function onNodeClick(e,node){setSelNode(node)}

  function onNodeDoubleClick(e,node){
    var cur=stack[stack.length-1];
    var g=cur.data.find(function(n){return n.id===node.id});
    if(g&&g.children&&g.children.length>0){
      setStack(function(s){return s.concat([{label:g.label,data:g.children,edges:g.childEdges||[]}])});
      rebuildFromData(g.children,g.childEdges||[]);
      setSelNode(null);
    }
  }

  function navBreadcrumb(index){
    if(index>=stack.length-1)return;
    var ns=stack.slice(0,index+1);setStack(ns);
    rebuildFromData(ns[index].data,ns[index].edges);setSelNode(null);
  }

  function updateField(field,value){if(!selNode)return;
    setNodes(function(nds){return nds.map(function(n){if(n.id!==selNode.id)return n;var nd={...n,data:{...n.data,[field]:value}};if(field==='w')nd.style={...nd.style,width:value};if(field==='h')nd.style={...nd.style,height:value};return nd})})
  }

  function addNode(type){var id=String(Date.now());var nn={id:id,type:type||'custom',label:type==='image'?'New 图片':'新节点',color:TYPE_COLORS[type]||'#7ec8e3',x:300+Math.random()*300,y:200+Math.random()*200,w:200,h:200,image:'',desc:'',children:[]};setNodes(function(nds){return nds.concat([graphToNode(nn)])});showToast('+ 节点')}

  function deleteNode(){if(!selNode)return;var id=selNode.id;setNodes(function(nds){return nds.filter(function(n){return n.id!==id})});setEdges(function(eds){return eds.filter(function(e){return e.source!==id&&e.target!==id})});setSelNode(null);showToast('已删除')}

  function addSubCanvas(){if(!selNode)return showToast('请先选中一个节点','err');var id=String(Date.now());var subNode={id:id,type:'tenyuan',label:'子-'+selNode.data.label,color:TYPE_COLORS.tenyuan,x:300,y:200,w:180,h:180,image:'',desc:'',children:[]};
    var cur=stack[stack.length-1];var gData=cur.data;var gNode=gData.find(function(n){return n.id===selNode.id});
    if(!gNode.children)gNode.children=[];gNode.children.push(subNode);gNode.childEdges=gNode.childEdges||[];
    showToast('子节点已添加。双击父节点进入')
  }

  function handle图片Upload(e){var file=e.target.files[0];if(!file)return;var reader=new FileReader();reader.onload=function(ev){updateField('image',ev.target.result)};reader.readAsDataURL(file)}

  // Drag & drop image from desktop onto canvas
  function onDragOver(e){e.preventDefault();e.stopPropagation();setDropping(true)}
  function onDragLeave(e){e.preventDefault();setDropping(false)}
  function onDrop(e){e.preventDefault();setDropping(false);var files=e.dataTransfer.files;if(!files.length)return;
    var bounds=document.querySelector('.react-flow__renderer')||document.querySelector('.react-flow__viewport')||document.querySelector('.canvas-wrap');
    var rect=bounds?bounds.getBoundingClientRect():{left:0,top:0};
    var x=e.clientX-rect.left,y=e.clientY-rect.top;
    Array.from(files).forEach(function(file){
      if(!file.type.match(/image\//))return;
      var reader=new FileReader();
      reader.onload=function(ev){
        var img=new Image();
        img.onload=function(){
          var id=String(Date.now())+'_'+Math.random().toString(36).substr(2,5);
          var w=Math.min(300,img.naturalWidth);var h2=w*(img.naturalHeight/img.naturalWidth);
          var nn={id:id,type:'image',label:file.name,color:'#5dade2',x:x-10,y:y-10,w:w,h:h2,image:ev.target.result,desc:'',children:[]};
          setNodes(function(nds){return nds.concat([graphToNode(nn)])});
          showToast('图片 dropped: '+file.name)
        };img.src=ev.target.result
      };reader.readAsDataURL(file)
    })
  }

  // Save current graph state
  function handleSave(){
    var curStack=stack[stack.length-1];
    var currentNodes=[];
    nodes.forEach(function(n){
      currentNodes.push({id:n.id,type:n.data.type,label:n.data.label,color:n.data.color,x:n.position.x,y:n.position.y,w:n.width||n.data.w||180,h:n.height||n.data.h||180,image:n.data.image||'',desc:n.data.desc||'',children:[]})
    });
    var currentEdges=edges.map(function(e){return{id:e.id,source:e.source,target:e.target}});
    parent.postMessage({plugin:"ten-yuan-brain",action:"save",graph:JSON.stringify({nodes:currentNodes,edges:currentEdges})},"*"); showToast("已保存到仓库")
  }

  function handleFullSave(){
    var root=stack[0];
    var allData={root:{data:root.data,edges:root.edges}};
    downloadJSON(allData,'brain-map-full.json');
    showToast('全图已导出')
  }

  // Render
  return h(Fragment,null,
    h('div',{className:'topbar'},
      h('h1',null,'\u5341\u5143\u77e5\u8bc6\u84dd\u56fe \u2014 PureRef + Mind Map'),
      h('div',{className:'breadcrumb'},stack.map(function(s,i){return h(Fragment,{key:i},i>0&&h('span',{className:'sep'},' \u25b8 '),h('span',{onClick:function(){navBreadcrumb(i)},style:{fontWeight:i===stack.length-1?'bold':'normal',color:i===stack.length-1?'var(--accent)':'#7ec8e3',cursor:i===stack.length-1?'default':'pointer'}},s.label))})),
      h('div',{className:'actions'},
        h('button',{className:'btn btn-add',onClick:function(){addNode('custom')}},'+ 节点'),
        h('button',{className:'btn btn-add',onClick:function(){addNode('image')},style:{background:'#5dade2'}},'+ 图片节点'),
        selNode&&h('button',{className:'btn btn-sub',onClick:addSubCanvas},'+ 子节点'),
        h('button',{className:'btn btn-save',onClick:handleSave},'保存 JSON'),
        h('button',{className:'btn btn-save',onClick:handleFullSave,style:{background:'#3498db'}},'全部导出')
      )
    ),
    h('div',{className:'main-area'},
      h('div',{className:'canvas-wrap',onDragOver:onDragOver,onDragLeave:onDragLeave,onDrop:onDrop},
        h('div',{className:'drop-zone'+(dropping?' active':'')},'将图片拖到这里'),
        h(ReactFlowC,{
          nodes:nodes,edges:edges,
          onNodesChange:onNodesChange,onEdgesChange:onEdgesChange,
          onConnect:onConnect,
          onNodeClick:onNodeClick,onNodeDoubleClick:onNodeDoubleClick,
          node类型s:node类型s,
          onInit:function(inst){rf.current=inst},
          fitView:true,
          defaultEdgeOptions:{type:'smoothstep'},
          style:{background:'#0f0f23'}
        },
          h(Background,{color:'#2a2a4a',gap:20}),
          h(Controls,{style:{background:'var(--panel-bg)',border:'1px solid var(--border)',borderRadius:6}}),
          h(MiniMap,{style:{background:'#0f0f23',border:'1px solid var(--border)'},node颜色:function(n){return n.data.color||'#555'},mask颜色:'rgba(0,0,0,0.7)'})
        )
      ),
      h('div',{className:'sidebar'},
        selNode?h(Fragment,null,
          h('h3',null,'节点编辑'),
          h('label',null,'名称',h('input',{value:selNode.data.label||'',onChange:function(e){updateField('label',e.target.value)}})),
          h('label',null,'类型',h('select',{value:selNode.data.type||'custom',onChange:function(e){updateField('type',e.target.value)}},Object.keys(TYPE_LABELS).map(function(k){return h('option',{key:k,value:k},TYPE_LABELS[k])}))),
          h('label',null,'颜色',h('input',{type:'color',value:selNode.data.color||'#7ec8e3',onChange:function(e){updateField('color',e.target.value)}})),
          h('label',null,'宽度',h('input',{type:'number',value:selNode.width||selNode.data.w||180,onChange:function(e){updateField('w',parseInt(e.target.value)||180)}})),h('label',null,'高度',h('input',{type:'number',value:selNode.height||selNode.data.h||180,onChange:function(e){updateField('h',parseInt(e.target.value)||180)}})),h('label',null,'描述',h('textarea',{value:selNode.data.desc||'',onChange:function(e){updateField('desc',e.target.value)}})),
          h('label',null,'图片',h('input',{type:'file',accept:'image/*',onChange:handle图片Upload}),selNode.data.image&&h('img',{className:'image-preview',src:selNode.data.image,alt:''})),
          h('button',{className:'btn btn-del',onClick:deleteNode,style:{marginTop:6}},'删除节点')
        ):h('div',{className:'no-select'},
          '点选节点进行编辑',h('br'),h('br'),
          '从桌面拖图片到画布',h('br'),
          '双击节点进入子画布'
        )
      )
    )
  )
}

var root=document.getElementById('root');
ReactDOM.createRoot(root).render(h(App));

})();
