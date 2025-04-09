import{u as e,r as t,j as s,B as a,m as r,T as n,s as i,A as o,a as l,t as c,v as d,w as u,x as h,y as x,b as f,F as m,S as p,M as g,z as j,E as y,D as v,e as b,f as C,i as w,o as k,C as _,G as E}from"./vendor-2GbSnZma.js";import{u as S,a as M,S as T,C as I,b as R,A,T as D,U as P,c as N,d as O,e as z,f as W,P as B,D as F,L,F as $,g as U,M as G,E as H,h as Y,i as V,j as X,k as Z,l as q,m as J,n as K,B as Q,o as ee}from"./auth-7CLlJA2Z.js";var te=(e=>(e.STUDENT="student",e.TEACHER="teacher",e.ADMIN="admin",e))(te||{}),se=(e=>(e.TODO="todo",e.DONE="done",e))(se||{}),ae=(e=>(e.NOT_STARTED="not_started",e.IN_PROGRESS="in_progress",e.COMPLETED="completed",e))(ae||{}),re=(e=>(e.PENDING="pending",e.AGREED="agreed",e.REJECTED="rejected",e.ARCHIVED="archived",e))(re||{});class ne extends Error{constructor(e,t,s){super(e),this.status=t,this.data=s,this.name="ApiError"}}const ie=e=>(e=>"Failed to fetch"===e.message||!navigator.onLine||"NetworkError"===e.name)(e)?"Network error: Please check your internet connection":e instanceof ne?e.message:e.message||"An unexpected error occurred",oe=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{user:u}=S(),h=e(),{showErrorToast:x}=M(),[f,m]=t.useState(!0),[p,g]=t.useState(null),[j,y]=t.useState(0),[v,b]=t.useState({contracts:0,works:0,tasks:0,tags:0,users:0}),C=(null==u?void 0:u.role)===te.ADMIN,w=(null==u?void 0:u.role)===te.TEACHER||C;null==u||u.role,te.STUDENT,t.useEffect((()=>{(async()=>{m(!0),g(null);try{const e=await N.dashboard.getCount();b(e),g(null)}catch(e){const t=ie(e);g(t),x(t)}finally{m(!1)}})()}),[j]);const k=t.useCallback((()=>{y((e=>e+1))}),[]),_=({title:e,value:t,icon:i,action:o,color:l})=>s.jsx(c,{sx:{height:"100%",cursor:"pointer","&:hover":{boxShadow:6}},onClick:o,children:s.jsx(d,{sx:{p:3},children:s.jsxs(a,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:2},children:[s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2,justifyContent:"center"},children:[s.jsx(r,{sx:{width:48,height:48,bgcolor:`${l}15`,color:l},children:i}),s.jsx(n,{variant:"h2",sx:{color:{color:l},minWidth:"50px"},children:t})]}),s.jsx(n,{variant:"subtitle1",color:"text.secondary",children:e})]})})});return s.jsxs(a,{sx:{p:3,width:"100%",maxWidth:"800px",mx:"auto"},children:[s.jsxs(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:1,mt:1},children:[s.jsx(r,{sx:{width:42,height:42,bgcolor:"secondary.main",mr:1},src:(null==u?void 0:u.photo_url)||void 0,children:(null==u?void 0:u.first_name)?u.first_name.charAt(0).toUpperCase():"?"}),s.jsxs(n,{variant:"h5",children:["Welcome, ",null==u?void 0:u.first_name,"!"]})]}),s.jsx(a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mb:3,mt:1},children:s.jsx(i,{label:(null==u?void 0:u.role)||"User",color:(null==u?void 0:u.role)===te.ADMIN?"error":(null==u?void 0:u.role)===te.TEACHER?"primary":"success",size:"small",sx:{mt:1}})}),s.jsx(T,{spacing:3}),p&&s.jsx(o,{severity:"error",sx:{mb:2},action:s.jsx(l,{color:"inherit",size:"small",onClick:k,disabled:f,children:f?"Retrying...":"Retry"}),children:p}),s.jsxs(a,{sx:{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(2, 2fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:2,position:"relative"},children:[s.jsx(_,{title:"Contracts",value:v.contracts,icon:s.jsx(I,{}),action:()=>h("/contracts"),color:"#ed6c02"}),s.jsx(_,{title:"Works",value:v.works,icon:s.jsx(R,{}),action:()=>h("/works"),color:"#2e7d32"}),w&&s.jsxs(s.Fragment,{children:[s.jsx(_,{title:"Tasks",value:v.tasks,icon:s.jsx(A,{}),action:()=>h("/tasks"),color:"#1976d2"}),s.jsx(_,{title:"Tags",value:v.tags,icon:s.jsx(D,{}),action:()=>h("/tags"),color:"#9c27b0"})]}),C&&s.jsx(_,{title:"Users",value:v.users,icon:s.jsx(P,{}),action:()=>h("/users"),color:"#d32f2f"})]})]})}},Symbol.toStringTag,{value:"Module"})),le=({work:e,isStudent:t,students:l,teachers:c,error:d,onTaskClick:x,hideButtons:f=!1,onStartWork:m})=>{var p,g,j,y,v,b;return(e=>{if(!e.task_states.length)return 0;e.task_states.filter((e=>e.status===se.DONE)).length,e.task_states.length})(e),s.jsxs(a,{children:[d&&s.jsx(o,{severity:"error",sx:{mb:2},children:d}),c.length>0||l.length>0?s.jsx(a,{sx:{mb:0},children:s.jsx(a,{sx:{my:2},children:s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[s.jsx(r,{src:t?(null==(p=c.find((t=>t.id===e.teacher_id)))?void 0:p.photo_url)||void 0:(null==(g=l.find((t=>t.id===e.student_id)))?void 0:g.photo_url)||void 0,sx:{width:56,height:56},children:t?((null==(y=null==(j=c.find((t=>t.id===e.teacher_id)))?void 0:j.first_name)?void 0:y[0])||"?").toUpperCase():((null==(b=null==(v=l.find((t=>t.id===e.student_id)))?void 0:v.first_name)?void 0:b[0])||"?").toUpperCase()}),s.jsxs(a,{children:[s.jsx(n,{variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:t?"Created by teacher":"Created for student"}),s.jsx(n,{variant:"body1",children:t?(e=>{const t=c.find((t=>t.id===e));return t?`${t.first_name||""} ${t.last_name||""}`.trim()||t.id:e})(e.teacher_id):(e=>{const t=l.find((t=>t.id===e));return t?`${t.first_name||""} ${t.last_name||""}`.trim()||t.id:e})(e.student_id)})]})]})})}):s.jsx(a,{sx:{mb:2},children:s.jsx(n,{variant:"h4",children:"List of tasks"})}),s.jsx(u,{dense:!0,disablePadding:!0,sx:{borderTop:"1px solid",borderColor:"divider"},children:[...e.task_states].sort(((e,t)=>(e.order??Number.MAX_SAFE_INTEGER)-(t.order??Number.MAX_SAFE_INTEGER))).map((e=>s.jsx(h,{onClick:()=>x&&x(e.order??0),sx:{display:"flex",flexDirection:"row",alignItems:"center",borderBottom:"1px solid",borderColor:"divider",p:0,py:1,cursor:x?"pointer":"default"},children:s.jsxs(a,{sx:{display:"flex",alignItems:"center",width:"100%",gap:1},children:[s.jsx(i,{variant:"outlined",label:e.order?e.order+1:"1",color:e.status===se.DONE?"success":"default",icon:e.status===se.DONE?s.jsx(O,{}):s.jsx(z,{})},e.task_id),s.jsxs(a,{sx:{flex:1},children:[s.jsx(n,{variant:"body1",children:e.task.title}),e.note&&s.jsx(n,{variant:"body2",color:"text.secondary",children:e.note})]}),e.attachment_url&&s.jsx(a,{onClick:e=>e.stopPropagation(),children:s.jsx(W,{value:e.attachment_url,onChange:()=>{},compact:!0,taskTitle:e.task.title})})]})},e.task_id)))})]})},ce=[{status:"all",label:"All",color:"default",icon:s.jsx($,{})},{status:ae.NOT_STARTED,label:"Not Started",color:"error"},{status:ae.IN_PROGRESS,label:"In Progress",color:"warning"},{status:ae.COMPLETED,label:"Completed",color:"success"}],de=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{user:u}=S(),h=e(),E=x(),{showErrorToast:T}=M(),[I,D]=t.useState([]),[P,O]=t.useState([]),[z,W]=t.useState([]),[X,Z]=t.useState([]),[q,J]=t.useState(!0),[K,Q]=t.useState(!0),[ee,re]=t.useState(null),[ne,oe]=t.useState(null),[de,ue]=t.useState(null),[he,xe]=t.useState("all"),[fe,me]=t.useState(""),[pe,ge]=t.useState(!1),[je,ye]=t.useState(!1),[ve,be]=t.useState(!1),[Ce,we]=t.useState(null),ke=Boolean(Ce),[_e,Ee]=t.useState(!1),[Se,Me]=t.useState(0),Te=(null==u?void 0:u.role)===te.ADMIN,Ie=(null==u?void 0:u.role)===te.TEACHER||Te,Re=(null==u?void 0:u.role)===te.STUDENT,Ae=new URLSearchParams(E.search).get("student");t.useEffect((()=>{(async()=>{if(!_e){Q(!0),re(null);try{const e=await N.contracts.getAll(0,100);if(O(e),Ie){const t=new Map;e.forEach((e=>{e.student&&!t.has(e.student_id)&&t.set(e.student_id,e.student)}));const s=Array.from(t.values()).sort(((e,t)=>{const s=`${e.first_name||""} ${e.last_name||""}`.trim().toLowerCase(),a=`${t.first_name||""} ${t.last_name||""}`.trim().toLowerCase();return s.localeCompare(a)}));W(s)}if(Re||Te){const t=new Map;e.forEach((e=>{e.teacher&&!t.has(e.teacher_id)&&t.set(e.teacher_id,e.teacher)}));const s=Array.from(t.values()).sort(((e,t)=>{const s=`${e.first_name||""} ${e.last_name||""}`.trim().toLowerCase(),a=`${t.first_name||""} ${t.last_name||""}`.trim().toLowerCase();return s.localeCompare(a)}));Z(s)}}catch(e){const t=ie(e);re(t),Ee(!0),T(t)}finally{Q(!1)}}})()}),[Ie,Re]),t.useEffect((()=>{(async()=>{J(!0),re(null);try{const e=[...await N.works.getAll(0,100,he,fe)].sort(((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime()));D(e),re(null)}catch(e){const t=ie(e);re(t),T(t)}finally{J(!1)}})()}),[he,fe,Se]),t.useEffect((()=>{Ae&&me(Ae)}),[Ae]);const De=e=>{h(`/works/${e}`)},Pe=e=>{if(!e.task_states.length)return 0;return e.task_states.filter((e=>e.status===se.DONE)).length/e.task_states.length*100},Ne=e=>0===e?"Not Started":100===e?"Completed":"In Progress",Oe=e=>0===e?"error":100===e?"success":"warning",ze=e=>{const t=z.find((t=>t.id===e));return t?`${t.first_name||""} ${t.last_name||""}`.trim()||t.id:e},We=e=>{const t=X.find((t=>t.id===e));return t?`${t.first_name||""} ${t.last_name||""}`.trim()||t.id:e},Be=()=>{be(!1),ue(null),oe(null),ye(!1)},Fe=()=>{we(null)},Le=t.useCallback((()=>{Me((e=>e+1))}),[]);return s.jsxs(a,{children:[s.jsx(B,{title:"Works",actionButton:Ie?{label:"Assign Work",icon:s.jsx(A,{}),onClick:()=>h("/works/assign")}:void 0}),ee&&s.jsx(o,{severity:"error",sx:{mb:2},action:s.jsx(l,{color:"inherit",size:"small",onClick:Le,disabled:q,children:q?"Retrying...":"Retry"}),children:ee}),s.jsx(f,{sx:{p:2,mb:2},children:s.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:2},children:[s.jsx(a,{children:s.jsx(a,{sx:{display:"flex",gap:1,flexWrap:"nowrap"},children:ce.map((e=>s.jsx(i,{label:e.label,color:he===e.status?e.color:"default",onClick:()=>{return t=e.status,void xe(t);var t},variant:he===e.status?"filled":"outlined",size:"small",icon:e.icon,sx:{"&:hover":{opacity:.9},fontWeight:he===e.status?500:400}},e.status)))})}),Ie&&s.jsx(a,{sx:{display:"flex",gap:2,alignItems:"flex-start"},children:s.jsx(m,{fullWidth:!0,size:"small",sx:{"& .MuiOutlinedInput-root":{borderRadius:2}},children:s.jsxs(p,{value:fe,onChange:e=>me(e.target.value),displayEmpty:!0,children:[s.jsx(g,{value:"",children:s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(R,{fontSize:"small",color:"action"}),s.jsx(n,{children:"All Works"})]})}),u&&s.jsx(g,{value:u.id,children:s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(F,{fontSize:"small",color:"primary"}),s.jsx(n,{children:"My Templates"})]})}),z.map((e=>{var t;return s.jsx(g,{value:e.id,children:s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(r,{src:e.photo_url||void 0,sx:{width:24,height:24},children:((null==(t=e.first_name)?void 0:t[0])||"?").toUpperCase()}),s.jsx(n,{children:`${e.first_name||""} ${e.last_name||""}`.trim()||e.id})]})},e.id)}))]})})})]})}),q?s.jsx(L,{message:q?"Retrying...":"Loading works..."}):s.jsxs(s.Fragment,{children:[0!==I.length||ee?s.jsx(a,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:2},children:I.map((e=>{var t,o,h,x,f,m,p;const g=Pe(e),v=(e=>0===e?ae.NOT_STARTED:100===e?ae.COMPLETED:ae.IN_PROGRESS)(g),b=e.student_id===e.teacher_id;return s.jsxs(c,{sx:{height:"100%",cursor:"pointer","&:hover":{boxShadow:6}},onClick:()=>(e=>{ue(e),be(!0)})(e),children:[s.jsxs(d,{children:[s.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:2},children:[s.jsxs(a,{children:[s.jsx(n,{variant:"body2",color:"text.secondary",sx:{display:"flex",alignItems:"center",gap:.5,mb:.5},children:Re?"Created by teacher":b?"Template by":"Created for student"}),Ie&&s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(r,{src:b?(null==u?void 0:u.photo_url)||void 0:(null==(t=z.find((t=>t.id===e.student_id)))?void 0:t.photo_url)||void 0,sx:{width:24,height:24},children:b?((null==(o=null==u?void 0:u.first_name)?void 0:o[0])||"?").toUpperCase():((null==(x=null==(h=z.find((t=>t.id===e.student_id)))?void 0:h.first_name)?void 0:x[0])||"?").toUpperCase()}),s.jsx(n,{variant:"body2",color:"text.secondary",children:b?s.jsx(a,{sx:{display:"flex",alignItems:"center",gap:.5},children:(null==u?void 0:u.first_name)||(null==u?void 0:u.username)||"Teacher"}):ze(e.student_id)})]}),Re&&s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:1},children:[s.jsx(r,{src:(null==(f=X.find((t=>t.id===e.teacher_id)))?void 0:f.photo_url)||void 0,sx:{width:24,height:24},children:((null==(p=null==(m=X.find((t=>t.id===e.teacher_id)))?void 0:m.first_name)?void 0:p[0])||"?").toUpperCase()}),s.jsx(n,{variant:"body2",color:"text.secondary",children:We(e.teacher_id)})]})]}),s.jsx(i,{size:"small",label:Ne(g),variant:"outlined",color:Oe(g)})]}),s.jsx(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:s.jsx(n,{variant:"h6",sx:{fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",lineHeight:1.2,minHeight:"2.4em"},children:e.name})}),v===ae.IN_PROGRESS&&s.jsxs(a,{sx:{mb:1},children:[s.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",mb:.5,alignItems:"center"},children:[s.jsx(n,{variant:"body2",children:"Progress"}),s.jsxs(n,{children:[e.task_states.filter((e=>e.status===se.DONE)).length," of ",e.task_states.length," complete"]})]}),s.jsx(j,{variant:"determinate",value:g,sx:{height:8,borderRadius:4,backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[200]:e.palette.grey[700],"& .MuiLinearProgress-bar":{backgroundColor:Oe(g),borderRadius:4}}})]})]}),Re&&(v===ae.IN_PROGRESS||v===ae.NOT_STARTED)&&s.jsx(y,{sx:{justifyContent:"flex-end",px:2,pb:2,pt:0},children:s.jsx(l,{startIcon:s.jsx(U,{}),color:v===ae.IN_PROGRESS?"primary":"success",size:"small",variant:"contained",onClick:t=>{t.stopPropagation(),De(e.id)},sx:{borderRadius:2,textTransform:"none",fontWeight:500,minWidth:"auto",px:1.5},children:v===ae.IN_PROGRESS?"Continue":"Start Work"})})]},e.id)}))}):s.jsxs(a,{sx:{textAlign:"center",py:4},children:[s.jsx(n,{variant:"h6",color:"text.secondary",sx:{mb:1},children:fe||"all"!==he?"No works match your filter criteria":Ie?"You haven't assigned any works yet":"You don't have any assigned works"}),s.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:3},children:fe||"all"!==he?"Try adjusting your filters to find what you're looking for":Ie?"Start by assigning work to your students":"Your teacher will assign work to you"}),Ie&&0===I.length&&!fe&&"all"===he&&s.jsx(l,{variant:"outlined",startIcon:s.jsx(A,{}),onClick:()=>h("/works/assign"),sx:{borderRadius:2,textTransform:"none",fontWeight:500},children:"Assign your first work"}),0===I.length&&(fe||"all"!==he)&&s.jsx(l,{variant:"outlined",startIcon:s.jsx($,{}),onClick:()=>{me(""),xe("all")},sx:{borderRadius:2,textTransform:"none"},children:"Clear filters"})]}),s.jsxs(v,{open:ve,onClose:Be,maxWidth:"sm",fullWidth:!0,PaperProps:{sx:{borderRadius:2}},children:[s.jsx(b,{children:s.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsx(n,{variant:"h6",children:null==de?void 0:de.name}),de&&s.jsx(i,{label:Ne(Pe(de)),color:Oe(Pe(de)),size:"small"})]})}),s.jsxs(C,{children:[ne&&s.jsx(o,{severity:"error",sx:{mb:2},children:ne}),de&&s.jsx(le,{work:de,isStudent:Re,students:z,teachers:X,error:ne,onTaskClick:e=>{de&&h(`/works/${de.id}?task_number=${e}`)}})]}),s.jsxs(w,{sx:{display:"flex",justifyContent:"space-between",px:2,pb:2},children:[s.jsxs(a,{sx:{display:"flex",gap:1},children:[Ie&&s.jsxs(s.Fragment,{children:[s.jsx(l,{color:"primary",onClick:e=>{e.stopPropagation(),we(e.currentTarget)},"aria-label":"actions","aria-controls":ke?"actions-menu":void 0,"aria-haspopup":"true","aria-expanded":ke?"true":void 0,startIcon:s.jsx(G,{}),children:"Actions"}),s.jsxs(k,{id:"actions-menu",anchorEl:Ce,open:ke,onClose:Fe,MenuListProps:{"aria-labelledby":"actions-button"},children:[s.jsxs(g,{onClick:()=>{var e;Fe(),Be(),e=de.id,h(`/works/assign/?work_id=${e}&edit=true`)},children:[s.jsx(H,{fontSize:"small",sx:{mr:1}}),"Edit"]}),s.jsxs(g,{onClick:()=>{var e;Fe(),Be(),e=de.id,h(`/works/assign/?work_id=${e}&copy=true`)},children:[s.jsx(Y,{fontSize:"small",sx:{mr:1}}),"Copy"]}),s.jsxs(g,{onClick:()=>{Fe(),ye(!0)},disabled:pe,sx:{color:"error.main"},children:[pe?s.jsx(_,{size:20,sx:{mr:1}}):s.jsx(V,{fontSize:"small",sx:{mr:1}}),"Delete"]})]})]}),s.jsx(l,{color:"primary",onClick:()=>{Be(),De(de.id)},startIcon:s.jsx(U,{}),children:"Open"})]}),s.jsx(a,{children:s.jsx(l,{onClick:Be,children:"Close"})})]})]}),s.jsxs(v,{open:je,onClose:()=>ye(!1),maxWidth:"xs",fullWidth:!0,children:[s.jsx(b,{children:"Delete Work"}),s.jsx(C,{children:s.jsx(n,{children:"Are you sure you want to delete this work? This action cannot be undone."})}),s.jsxs(w,{children:[s.jsx(l,{onClick:()=>ye(!1),disabled:pe,children:"Cancel"}),s.jsx(l,{onClick:async()=>{if(de){ge(!0),oe(null);try{await N.works.delete(de.id),D((e=>e.filter((e=>e.id!==de.id)))),Be()}catch(e){const t=e instanceof Error?e.message:"Failed to delete work. Please try again.";T(t)}finally{ge(!1),ye(!1)}}},color:"error",variant:"contained",disabled:pe,startIcon:pe?s.jsx(_,{size:20}):s.jsx(V,{}),children:pe?"Deleting...":"Delete"})]})]})]})]})}},Symbol.toStringTag,{value:"Module"}));var ue={};!function e(t,s,a,r){var n=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),i="function"==typeof Path2D&&"function"==typeof DOMMatrix;function o(){}function l(e){var a=s.exports.Promise,r=void 0!==a?a:t.Promise;return"function"==typeof r?new r(e):(e(o,o),null)}var c,d,u,h,x,f,m=function(e,t){return{transform:function(s){if(e)return s;if(t.has(s))return t.get(s);var a=new OffscreenCanvas(s.width,s.height);return a.getContext("2d").drawImage(s,0,0),t.set(s,a),a},clear:function(){t.clear()}}}(function(){if(!t.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),s=e.getContext("2d");s.fillRect(0,0,1,1);var a=e.transferToImageBitmap();try{s.createPattern(a,"no-repeat")}catch(r){return!1}return!0}(),new Map),p=(u=Math.floor(1e3/60),h={},x=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(e){var t=Math.random();return h[t]=requestAnimationFrame((function s(a){x===a||x+u-1<a?(x=a,delete h[t],e()):h[t]=requestAnimationFrame(s)})),t},d=function(e){h[e]&&cancelAnimationFrame(h[e])}):(c=function(e){return setTimeout(e,u)},d=function(e){return clearTimeout(e)}),{frame:c,cancel:d}),g=function(){var t,s,r={};return function(){if(t)return t;if(!a&&n){var i=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch(o){return void 0!==typeof console&&console.warn,null}!function(e){function t(t,s){e.postMessage({options:t||{},callback:s})}e.init=function(t){var s=t.transferControlToOffscreen();e.postMessage({canvas:s},[s])},e.fire=function(a,n,i){if(s)return t(a,null),s;var o=Math.random().toString(36).slice(2);return s=l((function(n){function l(t){t.data.callback===o&&(delete r[o],e.removeEventListener("message",l),s=null,m.clear(),i(),n())}e.addEventListener("message",l),t(a,o),r[o]=l.bind(null,{data:{callback:o}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),r)r[t](),delete r[t]}}(t)}return t}}(),j={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,s){return function(e,t){return t?t(e):e}(e&&null!=e[t]?e[t]:j[t],s)}function v(e){return e<0?0:Math.floor(e)}function b(e){return parseInt(e,16)}function C(e){return e.map(w)}function w(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:b(t.substring(0,2)),g:b(t.substring(2,4)),b:b(t.substring(4,6))}}function k(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function _(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function E(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var s=t.tick++/t.totalTicks,a=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,n=t.wobbleX+t.random*t.tiltCos,o=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-s)+")",e.beginPath(),i&&"path"===t.shape.type&&"string"==typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,s,a,r,n,i){var o=new Path2D(e),l=new Path2D;l.addPath(o,new DOMMatrix(t));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(i)*r,Math.sin(i)*r,-Math.sin(i)*n,Math.cos(i)*n,s,a])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(n-a),.1*Math.abs(o-r),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var l=Math.PI/10*t.wobble,c=.1*Math.abs(n-a),d=.1*Math.abs(o-r),u=t.shape.bitmap.width*t.scalar,h=t.shape.bitmap.height*t.scalar,x=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*d,Math.cos(l)*d,t.x,t.y]);x.multiplySelf(new DOMMatrix(t.shape.matrix));var f=e.createPattern(m.transform(t.shape.bitmap),"no-repeat");f.setTransform(x),e.globalAlpha=1-s,e.fillStyle=f,e.fillRect(t.x-u/2,t.y-h/2,u,h),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(n-a)*t.ovalScalar,Math.abs(o-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,s,a,r,n,i,o,l){e.save(),e.translate(t,s),e.rotate(n),e.scale(a,r),e.arc(0,0,1,i,o,l),e.restore()}(e,t.x,t.y,Math.abs(n-a)*t.ovalScalar,Math.abs(o-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var p=Math.PI/2*3,g=4*t.scalar,j=8*t.scalar,y=t.x,v=t.y,b=5,C=Math.PI/b;b--;)y=t.x+Math.cos(p)*j,v=t.y+Math.sin(p)*j,e.lineTo(y,v),p+=C,y=t.x+Math.cos(p)*g,v=t.y+Math.sin(p)*g,e.lineTo(y,v),p+=C;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(n),Math.floor(o)),e.lineTo(Math.floor(a),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function S(e,s){var i,o=!e,c=!!y(s||{},"resize"),d=!1,u=y(s,"disableForReducedMotion",Boolean),h=n&&!!y(s||{},"useWorker")?g():null,x=o?k:_,f=!(!e||!h)&&!!e.__confetti_initialized,j="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function b(t,s,n){for(var o,c,d,u,h,f=y(t,"particleCount",v),g=y(t,"angle",Number),j=y(t,"spread",Number),b=y(t,"startVelocity",Number),w=y(t,"decay",Number),k=y(t,"gravity",Number),_=y(t,"drift",Number),S=y(t,"colors",C),M=y(t,"ticks",Number),T=y(t,"shapes"),I=y(t,"scalar"),R=!!y(t,"flat"),A=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),D=f,P=[],N=e.width*A.x,O=e.height*A.y;D--;)P.push((o={x:N,y:O,angle:g,spread:j,startVelocity:b,color:S[D%S.length],shape:T[(u=0,h=T.length,Math.floor(Math.random()*(h-u))+u)],ticks:M,decay:w,gravity:k,drift:_,scalar:I,flat:R},c=void 0,d=void 0,c=o.angle*(Math.PI/180),d=o.spread*(Math.PI/180),{x:o.x,y:o.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*o.startVelocity+Math.random()*o.startVelocity,angle2D:-c+(.5*d-Math.random()*d),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*o.gravity,ovalScalar:.6,scalar:o.scalar,flat:o.flat}));return i?i.addFettis(P):(i=function(e,t,s,n,i){var o,c,d=t.slice(),u=e.getContext("2d"),h=l((function(t){function l(){o=c=null,u.clearRect(0,0,n.width,n.height),m.clear(),i(),t()}o=p.frame((function t(){!a||n.width===r.width&&n.height===r.height||(n.width=e.width=r.width,n.height=e.height=r.height),n.width||n.height||(s(e),n.width=e.width,n.height=e.height),u.clearRect(0,0,n.width,n.height),(d=d.filter((function(e){return E(u,e)}))).length?o=p.frame(t):l()})),c=l}));return{addFettis:function(e){return d=d.concat(e),h},canvas:e,promise:h,reset:function(){o&&p.cancel(o),c&&c()}}}(e,P,x,s,n),i.promise)}function w(s){var a=u||y(s,"disableForReducedMotion",Boolean),r=y(s,"zIndex",Number);if(a&&j)return l((function(e){e()}));o&&i?e=i.canvas:o&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(r),document.body.appendChild(e)),c&&!f&&x(e);var n={width:e.width,height:e.height};function m(){if(h){var t={getBoundingClientRect:function(){if(!o)return e.getBoundingClientRect()}};return x(t),void h.postMessage({resize:{width:t.width,height:t.height}})}n.width=n.height=null}function p(){i=null,c&&(d=!1,t.removeEventListener("resize",m)),o&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,f=!1)}return h&&!f&&h.init(e),f=!0,h&&(e.__confetti_initialized=!0),c&&!d&&(d=!0,t.addEventListener("resize",m,!1)),h?h.fire(s,n,p):b(s,n,p)}return w.reset=function(){h&&h.reset(),i&&i.reset()},w}function M(){return f||(f=S(null,{useWorker:!0,resize:!0})),f}s.exports=function(){return M().apply(this,arguments)},s.exports.reset=function(){M().reset()},s.exports.create=S,s.exports.shapeFromPath=function(e){if(!i)throw new Error("path confetti are not supported in this browser");var t,s;"string"==typeof e?t=e:(t=e.path,s=e.matrix);var a=new Path2D(t),r=document.createElement("canvas").getContext("2d");if(!s){for(var n,o,l=1e3,c=l,d=l,u=0,h=0,x=0;x<l;x+=2)for(var f=0;f<l;f+=2)r.isPointInPath(a,x,f,"nonzero")&&(c=Math.min(c,x),d=Math.min(d,f),u=Math.max(u,x),h=Math.max(h,f));n=u-c,o=h-d;var m=Math.min(10/n,10/o);s=[m,0,0,m,-Math.round(n/2+c)*m,-Math.round(o/2+d)*m]}return{type:"path",path:t,matrix:s}},s.exports.shapeFromText=function(e){var t,s=1,a="#000000",r='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"==typeof e?t=e:(t=e.text,s="scalar"in e?e.scalar:s,r="fontFamily"in e?e.fontFamily:r,a="color"in e?e.color:a);var n=10*s,i=n+"px "+r,o=new OffscreenCanvas(n,n),l=o.getContext("2d");l.font=i;var c=l.measureText(t),d=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),u=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),h=c.actualBoundingBoxLeft+2,x=c.actualBoundingBoxAscent+2;d+=4,u+=4,(l=(o=new OffscreenCanvas(d,u)).getContext("2d")).font=i,l.fillStyle=a,l.fillText(t,h,x);var f=1/s;return{type:"bitmap",bitmap:o.transferToImageBitmap(),matrix:[f,0,0,f,-d*f/2,-u*f/2]}}}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),ue,!1);const he=ue.exports;ue.exports.create;const xe=[{status:"",label:"All",color:"default",icon:s.jsx($,{})},{status:re.PENDING,label:"Pending",color:"warning"},{status:re.AGREED,label:"Agreed",color:"success"},{status:re.REJECTED,label:"Reject",color:"error"},{status:re.ARCHIVED,label:"Archive",color:"default"}],fe=()=>{var u,h,x,m,p,g;const{user:j}=S(),y=e(),[k,_]=t.useState([]),[T,I]=t.useState([]),[R,A]=t.useState(!0),[D,P]=t.useState(null),[O,z]=t.useState(!1),[W,U]=t.useState(null),[G,Y]=t.useState(0),[V,se]=t.useState(""),ae=(null==j?void 0:j.role)===te.ADMIN,ne=(null==j?void 0:j.role)===te.TEACHER||ae,oe=(null==j?void 0:j.role)===te.STUDENT,{showErrorToast:le}=M(),[ce,de]=t.useState(!1),[ue,fe]=t.useState(null),[me,pe]=t.useState(!1),[ge,je]=t.useState(null);t.useEffect((()=>{(async()=>{A(!0),P(null);try{const e=await N.contracts.getAll(0,100,V);_(e),I(e)}catch(e){const t=ie(e);P(t),le(t)}finally{A(!1)}})()}),[G,V]);const ye=t.useCallback((()=>{Y((e=>e+1))}),[]),ve=e=>oe?e.teacher?`${e.teacher.first_name||""} ${e.teacher.last_name||""}`.trim():e.teacher_id:e.student?`${e.student.first_name||""} ${e.student.last_name||""}`.trim():e.student_id,be=()=>{z(!1),U(null)},Ce=e=>{var t;return(null==(t=xe.find((t=>t.status===e)))?void 0:t.label)||e},we=e=>{var t;return(null==(t=xe.find((t=>t.status===e)))?void 0:t.color)||"default"},ke=async(e,t)=>{try{const s=await N.contracts.updateStatus(e,{status:t}),a=t=>t.map((t=>t.id===e?{...t,status:s.status}:t));_(a),I(a),t===re.AGREED&&he({particleCount:100,spread:70,origin:{y:.6}})}catch(s){const e=s instanceof Error?s.message:"Failed to update contract status";le(e)}},_e=()=>{de(!1),fe(null)},Ee=()=>{pe(!1),je(null)};return s.jsxs(a,{children:[s.jsx(B,{title:"Contracts",actionButton:ne?{label:"Create Contract",icon:s.jsx(X,{}),onClick:()=>y("/contracts/new")}:void 0}),s.jsx(f,{sx:{p:2,mb:2},children:s.jsx(E,{direction:"row",spacing:1,alignItems:"center",children:xe.map((e=>s.jsx(i,{label:e.label,color:e.status===V?e.color:"default",onClick:()=>{return t=e.status,void se(t===V?"":t);var t},variant:e.status===V?"filled":"outlined",size:"small",icon:e.icon},e.status)))})}),D&&s.jsx(o,{severity:"error",sx:{mb:2},action:s.jsx(l,{color:"inherit",size:"small",onClick:ye,disabled:R,children:R?"Retrying...":"Retry"}),children:D}),R?s.jsx(L,{message:R?"Retrying...":"Loading contracts..."}):!D&&s.jsx(s.Fragment,{children:0===T.length?s.jsxs(a,{sx:{textAlign:"center",py:4},children:[s.jsx(n,{variant:"h6",color:"text.secondary",sx:{mb:1},children:V?"No contracts match your filter criteria":ne?"You haven't created any contracts yet":"You don't have any contracts"}),s.jsx(n,{variant:"body2",color:"text.secondary",sx:{mb:3},children:V?"Try adjusting your filters to find what you're looking for":ne?"Start by creating a contract with your students":"Your teacher will create a contract with you"}),ne&&!V&&0===k.length&&s.jsx(l,{variant:"outlined",startIcon:s.jsx(X,{}),onClick:()=>y("/contracts/new"),sx:{borderRadius:2,textTransform:"none",fontWeight:500},children:"Create your first contract"}),V&&s.jsx(l,{variant:"outlined",startIcon:s.jsx($,{}),onClick:()=>{se("")},sx:{borderRadius:2,textTransform:"none"},children:"Clear filters"})]}):s.jsx(a,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:2},children:T.map((e=>{var t,o,u,h,x,f;return s.jsx(c,{sx:{height:"100%",cursor:"pointer","&:hover":{boxShadow:6}},onClick:()=>(e=>{P(null),U(e),z(!0)})(e),children:s.jsxs(d,{children:[s.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[s.jsxs(a,{sx:{display:"flex",alignItems:"flex-start",gap:2},children:[s.jsx(r,{src:oe?(null==(t=e.teacher)?void 0:t.photo_url)||void 0:(null==(o=e.student)?void 0:o.photo_url)||void 0,sx:{width:48,height:48},children:oe?((null==(h=null==(u=e.teacher)?void 0:u.first_name)?void 0:h[0])||"?").toUpperCase():((null==(f=null==(x=e.student)?void 0:x.first_name)?void 0:f[0])||"?").toUpperCase()}),s.jsxs(a,{sx:{flex:1},children:[s.jsx(n,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:oe?"With Teacher":"With Student"}),s.jsx(n,{variant:"h6",component:"div",gutterBottom:!0,children:ve(e)}),s.jsxs(n,{variant:"body1",color:"text.secondary",children:["Price per lesson: ",e.price]}),s.jsxs(n,{variant:"body1",color:"text.secondary",children:["Paid lessons: ",e.balance]})]})]}),s.jsx(a,{sx:{display:"flex",gap:1},children:s.jsx(i,{size:"small",label:Ce(e.status),color:we(e.status),variant:"outlined"})})]}),s.jsxs(a,{children:[s.jsx(a,{children:oe&&e.status===re.PENDING&&s.jsxs(a,{sx:{display:"flex",gap:2,width:"100%",justifyContent:"space-between"},children:[s.jsx(l,{startIcon:s.jsx(Z,{}),color:"error",onClick:t=>{t.stopPropagation(),(e=>{je(e),pe(!0)})(e)},size:"small",children:"Reject"}),s.jsx(l,{startIcon:s.jsx(q,{}),color:"primary",onClick:t=>{t.stopPropagation(),ke(e.id,re.AGREED),he({particleCount:100,spread:70,origin:{y:.6}})},size:"large",variant:"contained",children:"Agree"})]})}),ne&&e.status===re.AGREED&&s.jsx(a,{sx:{display:"flex",justifyContent:"flex-end",mt:2},children:s.jsx(l,{startIcon:s.jsx(J,{}),onClick:t=>{var s;t.stopPropagation(),s=e.student_id,y(`/works/assign?studentId=${s}`)},size:"small",children:"Assign Work"})})]})]})},e.id)}))})}),s.jsx(v,{open:O,onClose:be,maxWidth:"sm",fullWidth:!0,children:W&&s.jsxs(s.Fragment,{children:[s.jsx(b,{children:s.jsxs(a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[s.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[s.jsx(r,{src:oe?(null==(u=W.teacher)?void 0:u.photo_url)||void 0:(null==(h=W.student)?void 0:h.photo_url)||void 0,sx:{width:48,height:48},children:oe?((null==(m=null==(x=W.teacher)?void 0:x.first_name)?void 0:m[0])||"?").toUpperCase():((null==(g=null==(p=W.student)?void 0:p.first_name)?void 0:g[0])||"?").toUpperCase()}),s.jsxs(a,{children:[s.jsx(n,{variant:"h6",children:"Contract Details"}),s.jsx(n,{variant:"subtitle1",color:"text.secondary",children:ve(W)})]})]}),s.jsx(i,{label:Ce(W.status),color:we(W.status),size:"small"})]})}),s.jsx(C,{children:s.jsx(a,{sx:{mt:2},children:s.jsxs(E,{spacing:2,children:[s.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[s.jsx(K,{sx:{mr:1,color:"text.secondary"}}),s.jsxs(n,{children:["Price per lesson: ",W.price]})]}),s.jsxs(a,{sx:{display:"flex",alignItems:"center"},children:[s.jsx(Q,{sx:{mr:1,color:"text.secondary"}}),s.jsxs(n,{children:["Paid lessons: ",W.balance]})]}),W.description&&s.jsxs(a,{sx:{display:"flex",alignItems:"flex-start"},children:[s.jsx(F,{sx:{mr:1,color:"text.secondary"}}),s.jsx(n,{children:W.description})]}),s.jsxs(a,{sx:{display:"flex",flexDirection:"column",gap:1,mt:2},children:[s.jsxs(n,{variant:"body2",color:"text.secondary",children:["Created: ",new Date(W.created_at).toLocaleString()]}),W.updated_at!==W.created_at&&s.jsxs(n,{variant:"body2",color:"text.secondary",children:["Last updated: ",new Date(W.updated_at).toLocaleString()]})]})]})})}),s.jsxs(w,{children:[ne&&W.status!==re.ARCHIVED&&s.jsxs(s.Fragment,{children:[s.jsx(l,{onClick:()=>(fe(W),void de(!0)),color:"warning",startIcon:s.jsx(ee,{}),children:"Archive"}),s.jsx(l,{onClick:()=>{be(),y(`/contracts/${W.id}/edit`)},color:"primary",startIcon:s.jsx(H,{}),children:"Edit"})]}),s.jsx(a,{sx:{flex:1}}),s.jsx(l,{onClick:be,children:"Close"})]})]})}),s.jsxs(v,{open:ce,onClose:_e,maxWidth:"xs",fullWidth:!0,children:[s.jsx(b,{children:"Archive Contract"}),s.jsx(C,{children:s.jsx(n,{children:"Are you sure you want to archive this contract? This action cannot be undone."})}),s.jsxs(w,{children:[s.jsx(l,{onClick:_e,children:"Cancel"}),s.jsx(l,{onClick:()=>{ue&&(ke(ue.id,re.ARCHIVED),be(),de(!1),fe(null))},color:"error",variant:"contained",startIcon:s.jsx(ee,{}),children:"Archive"})]})]}),s.jsxs(v,{open:me,onClose:Ee,maxWidth:"xs",fullWidth:!0,children:[s.jsx(b,{children:"Reject Contract"}),s.jsx(C,{children:s.jsx(n,{children:"Are you sure you want to reject this contract? This action cannot be undone."})}),s.jsxs(w,{children:[s.jsx(l,{onClick:Ee,children:"Cancel"}),s.jsx(l,{onClick:()=>{ge&&(ke(ge.id,re.REJECTED),pe(!1),je(null))},color:"error",variant:"contained",startIcon:s.jsx(Z,{}),children:"Reject"})]})]})]})},me=Object.freeze(Object.defineProperty({__proto__:null,ContractsPage:fe,default:fe},Symbol.toStringTag,{value:"Module"}));export{re as C,oe as H,se as T,te as U,le as W,de as a,me as b,he as c,ie as g};
