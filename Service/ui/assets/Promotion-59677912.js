import{r as o,d as U,A as I,j as e,a as A,R as S,L as F}from"./index-0d5ab529.js";import{a as y}from"./axios-4a70c6fc.js";import{U as E}from"./UserDetails-58239ac6.js";import{W as $}from"./GameHistory-4df833d3.js";import{U as O,a as q,A as B,B as T,r as L,l as G}from"./Second-1f7d093e.js";import{N as J}from"./Nav-5a73e26b.js";import{I as K,_}from"./index-060a0471.js";import{B as Q}from"./BeginnerTutorial-ea800ffd.js";import{b as V}from"./back-button 1-53e9bab3.js";/* empty css            */const X="/assets/calendar 1-3e913340.svg";function Y(){const[p,t]=o.useState(""),b=U(E),c=U(I),[N,v]=o.useState([]),[j,d]=o.useState(2),u=new Date().toISOString().slice(0,10),w=N.filter(n=>String(n.UID).includes(p)),[m,a]=o.useState(u),[g,h]=o.useState(null),[k,D]=o.useState(!1),[f,s]=o.useState(null),l=n=>{d(n.target.value)},x=async()=>{try{let n=c._id,i=c.authToken;const r=await y.get(`https://cosmotrade.live/api//getDownlinerDetails/${n}?level=${j}`,{headers:{Authorization:`Bearer ${i}`}});if(r.status===200)return console.log(r.data.downlineDetails),v(r.data.downlineDetails),r}catch(n){const i=n.response?n.response.data.message:n.message;console.log(i)}},P=async n=>{try{let i=c.authToken;const r=await y.get(`https://cosmotrade.live/api//getCommissionDetails/${n}`,{headers:{Authorization:`Bearer ${i}`}});if(r.status===200)return h(r),r}catch(i){const r=i.response?i.response.data.message:i.message;console.log(r)}},W=async n=>{try{let i=c.authToken;const r=await y.get(`https://cosmotrade.live/api//getUserProfile/${n}`,{headers:{Authorization:`Bearer ${i}`}});if(r.status===200)return s(r.data),console.log(r.data),D(!0),r}catch(i){const r=i.response?i.response.data.message:i.message;console.log(r)}};return o.useEffect(()=>{x()},[j]),o.useEffect(()=>{P(m)},[m]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[b&&e.jsxs("div",{className:"col-7",children:["Direct Team ",b.data.data.userDetails.downline.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:X,alt:"",onClick:()=>{P()}}),e.jsx("input",{type:"date",className:"calender",value:m,onChange:n=>{a(n.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:p,onChange:n=>t(n.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:j,onChange:l,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Operate"})]})}),e.jsx("tbody",{className:"tableBodyRow",children:w.map((n,i)=>{const r=n.phoneNumber,z=r.substring(0,2)+"****"+r.substring(6);return e.jsxs("tr",{children:[e.jsx("td",{children:n.UID}),e.jsx("td",{children:n.name}),e.jsx("td",{style:{paddingLeft:0},children:z}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>W(n.UID),children:"Details"})})]},i)})})]})}),k&&e.jsx("div",{className:"popup",children:e.jsxs("div",{className:"popup-content",children:[e.jsx("button",{className:"close-popup",onClick:()=>D(!1),children:"Close"}),f&&e.jsxs("div",{className:"down-details",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["UID: ",f.data.userDetails.UID]}),e.jsxs("p",{children:["User Name: ",f.data.userDetails.name]}),e.jsxs("p",{children:["commissionAmount: ",f.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["winningAmount: ",f.data.userDetails.winningAmount]})]})]})})]})}const R="/assets/Gamma-c10f75d7.svg",M={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Z(){const[p,t]=o.useState(null),b=s=>{t(p===s?null:s)},c=[B,T,R],[N,v]=o.useState(1),j=U(I),[d,C]=A(O),[u,w]=A(q),[m,a]=o.useState(1),[g,h]=o.useState(1),k=async()=>{try{let s=j._id,l=j.authToken;console.log(l);const x=await y.get(`https://cosmotrade.live/api//get2ndgameUserHistory/${s}`,{params:{page:g},headers:{Authorization:`Bearer ${l}`}});if(x.status===200)return console.log(x),w(x),console.log(d),x}catch(s){const l=s.response?s.response.data.message:s.message;_.error(l||"Something went wrong",{...M})}},D=async()=>{try{let s=j._id,l=j.authToken;console.log(l);const x=await y.get(`https://cosmotrade.live/api//bettingHistory/${s}`,{params:{page:m},headers:{Authorization:`Bearer ${l}`}});if(x.status===200)return console.log(x),C(x),console.log(d),x}catch(s){const l=s.response?s.response.data.message:s.message;_.error(l||"Something went wrong",{...M})}};o.useEffect(()=>{D(),k()},[m,g]);const f=s=>{v(s)};return e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(K,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:N===1?"activeTab record-btn":" record-btn",onClick:()=>{f(1)},children:e.jsx("p",{children:"Grow Up"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:N===2?"activeTab record-btn":"record-btn ",onClick:()=>{f(2)},children:e.jsx("p",{children:"Rise Up"})})})]})}),N===1&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:d&&d.data&&d.data.history.map((s,l)=>e.jsxs(S.Fragment,{children:[e.jsxs("tr",{onClick:()=>b(l),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:$,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:s.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.group==="small"?B:T,alt:"Alpha or Beta"})})]})})]}),p===l&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},l))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{a(Math.max(m-1,1))},children:e.jsx("img",{src:L,alt:""})}),d&&e.jsxs("div",{className:"page-count",children:["  ",m,"/",d.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{a(Math.min(m+1,d.data.totalPages))},children:e.jsx("img",{src:G,alt:""})})]})})]})}),N===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:u&&u.data&&u.data.history.map((s,l)=>e.jsxs(S.Fragment,{children:[e.jsxs("tr",{onClick:()=>b(l),children:[e.jsx("td",{children:s.gameUID}),e.jsxs("td",{style:{textAlign:"center"},children:[" ",s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"]}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:$,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:s.group==="A"?e.jsx("img",{src:B,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.group==="B"?e.jsx("img",{src:T,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.group==="C"?e.jsx("img",{src:R,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):e.jsx("img",{src:c[Math.floor(Math.random()*c.length)],alt:"Random Icon"})})]})})]}),p===l&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="A"?"Alpha":s.group==="B"?"Beta":s.group==="C"?"Gama":"Unknown"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{style:{textAlign:"left"},children:s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},l))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{a(Math.max(m-1,1))},children:e.jsx("img",{src:L,alt:""})}),u&&e.jsxs("div",{className:"page-count",children:["  ",m,"/",u.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{a(Math.min(m+1,u.data.totalPages))},children:e.jsx("img",{src:G,alt:""})})]})})]})})]})})}const ee="/assets/gift-box 1-c25d3103.svg",H="/assets/papers 1-b18f1b73.svg";function se(){const p=U(I),[t,b]=A(E),[c,N]=o.useState(1);o.useState(()=>{var a,g,h;return(h=(g=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:g.userDetails)!=null&&h.referralCode?`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`:null});const[v,j]=o.useState(null);console.log(t);const d=a=>{N(a)},C=async()=>{try{let a=p.authToken,g=p.UID;const h=await y.get(`https://cosmotrade.live/api//getUserProfile/${g}`,{headers:{Authorization:`Bearer ${a}`}});if(h.status===200)return console.log(h),b(h),h}catch(a){a.response?a.response.data.message:a.message}},u=async()=>{try{let a=t.data.data.userDetails.referralCode,g=p.authToken;const h=await y.get(`https://cosmotrade.live/api//getReferralStats/${a}`,{headers:{Authorization:`Bearer ${g}`}});if(h.status===200)return console.log(h),console.log(v),j(h),h}catch(a){a.response?a.response.data.message:a.message}};o.useEffect(()=>{u(),C()},[]);const w=()=>{const a=document.createElement("textarea");a.innerText=t.data.data.userDetails.referralCode,document.body.appendChild(a),a.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(a)},m=()=>{const a=document.createElement("textarea");a.innerText=`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`,document.body.appendChild(a),a.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(a)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(F,{to:"/",className:"col-2",children:e.jsx("img",{src:V,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:c===1?"active-Tab col-3":"tab col-3",onClick:()=>{d(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:c===2?"active-Tab col-3":"tab col-3",onClick:()=>{d(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:c===3?"active-Tab col-3":"tab col-3",onClick:()=>{d(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:c===4?"active-Tab col-3":"tab col-3",onClick:()=>{d(4)},children:e.jsx("p",{children:"Tutorial"})})]}),c===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:ee,alt:""}),e.jsx("p",{children:"My Reward"})]}),e.jsxs("div",{className:"container commission",children:[t&&e.jsx("h2",{className:"text-center",children:t.data.data.userDetails.commissionAmount.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row commission-row",children:[e.jsx("div",{className:"col-10",children:"Direct Commission"}),t&&e.jsx("div",{className:"col-2",children:t.data.data.userDetails.commissionAmount.toFixed(2)})]})})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:v?v.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:v?v.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:t.data.data.userDetails.referralCode}),e.jsx("button",{onClick:w,className:"col-2",children:e.jsx("img",{src:H,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"8rem"},children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:m,className:"col-2",children:e.jsx("img",{src:H,alt:""})})]})})]})]}),c==2&&e.jsx(Y,{}),c==3&&e.jsx(Z,{}),c==4&&e.jsx(Q,{}),e.jsx(J,{style:{marginTop:"2rem"}})]})}const me=S.memo(se);export{me as default};