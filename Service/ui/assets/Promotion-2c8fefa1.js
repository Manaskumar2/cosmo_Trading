import{r,d as U,A as I,j as e,a as A,R as T,L as F}from"./index-f906ecb4.js";import{a as y}from"./axios-4a70c6fc.js";import{U as E}from"./UserDetails-4debc936.js";import{W as $}from"./GameHistory-7f8aaaf8.js";import{U as O,a as q,A as S,B,r as L,l as G}from"./Second-3486c01b.js";import{N as J}from"./Nav-165fb62c.js";import{I as K,_}from"./index-b14a3f42.js";import{b as Q}from"./back-button 1-53e9bab3.js";/* empty css            */const V="/assets/calendar 1-3e913340.svg";function X(){const[x,t]=r.useState(""),b=U(E),l=U(I),[g,N]=r.useState([]),[p,h]=r.useState(2),j=new Date().toISOString().slice(0,10),w=g.filter(n=>String(n.UID).includes(x)),[c,a]=r.useState(j),[u,m]=r.useState(null),[k,D]=r.useState(!1),[f,s]=r.useState(null),i=n=>{h(n.target.value)},v=async()=>{try{let n=l._id,o=l.authToken;const d=await y.get(`https://cosmotrade.live/api//getDownlinerDetails/${n}?level=${p}`,{headers:{Authorization:`Bearer ${o}`}});if(d.status===200)return N(d.data.downlineDetails),d}catch(n){n.response?n.response.data.message:n.message}},P=async n=>{try{let o=l.authToken;const d=await y.get(`https://cosmotrade.live/api//getCommissionDetails/${n}`,{headers:{Authorization:`Bearer ${o}`}});if(d.status===200)return m(d),d}catch(o){o.response?o.response.data.message:o.message}},W=async n=>{try{let o=l.authToken;const d=await y.get(`https://cosmotrade.live/api//getUserProfile/${n}`,{headers:{Authorization:`Bearer ${o}`}});if(d.status===200)return s(d.data),D(!0),d}catch(o){o.response?o.response.data.message:o.message}};return r.useEffect(()=>{v()},[p]),r.useEffect(()=>{P(c)},[c]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[b&&e.jsxs("div",{className:"col-7",children:["Direct Team ",b.data.data.userDetails.downline.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:V,alt:"",onClick:()=>{P()}}),e.jsx("input",{type:"date",className:"calender",value:c,onChange:n=>{a(n.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:x,onChange:n=>t(n.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:p,onChange:i,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Operate"})]})}),e.jsx("tbody",{className:"tableBodyRow",children:w.map((n,o)=>{const d=n.phoneNumber,z=d.substring(0,2)+"****"+d.substring(6);return e.jsxs("tr",{children:[e.jsx("td",{children:n.UID}),e.jsx("td",{children:n.name}),e.jsx("td",{style:{paddingLeft:0},children:z}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>W(n.UID),children:"Details"})})]},o)})})]})}),k&&e.jsx("div",{className:"popup",children:e.jsxs("div",{className:"popup-content",children:[e.jsx("button",{className:"close-popup",onClick:()=>D(!1),children:"Close"}),f&&e.jsxs("div",{className:"down-details",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["UID: ",f.data.userDetails.UID]}),e.jsxs("p",{children:["User Name: ",f.data.userDetails.name]}),e.jsxs("p",{children:["commissionAmount: ",f.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["winningAmount: ",f.data.userDetails.winningAmount]})]})]})})]})}function Y(){return e.jsx("div",{className:"CommissionHistory",children:e.jsx("div",{children:"Coming Soon!"})})}const R="/assets/Gamma-c10f75d7.svg",H={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Z(){const[x,t]=r.useState(null),b=s=>{t(x===s?null:s)},l=[S,B,R],[g,N]=r.useState(1),p=U(I),[h,C]=A(O),[j,w]=A(q),[c,a]=r.useState(1),[u,m]=r.useState(1),k=async()=>{try{let s=p._id,i=p.authToken;const v=await y.get(`https://cosmotrade.live/api//get2ndgameUserHistory/${s}`,{params:{page:u},headers:{Authorization:`Bearer ${i}`}});if(v.status===200)return w(v),v}catch(s){const i=s.response?s.response.data.message:s.message;_.error(i||"Something went wrong",{...H})}},D=async()=>{try{let s=p._id,i=p.authToken;const v=await y.get(`https://cosmotrade.live/api//bettingHistory/${s}`,{params:{page:c},headers:{Authorization:`Bearer ${i}`}});if(v.status===200)return C(v),v}catch(s){const i=s.response?s.response.data.message:s.message;_.error(i||"Something went wrong",{...H})}};r.useEffect(()=>{D(),k()},[c,u]);const f=s=>{N(s)};return e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(K,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:g===1?"activeTab record-btn":" record-btn",onClick:()=>{f(1)},children:e.jsx("p",{children:"Grow Up"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:g===2?"activeTab record-btn":"record-btn ",onClick:()=>{f(2)},children:e.jsx("p",{children:"Rise Up"})})})]})}),g===1&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:h&&h.data&&h.data.history.map((s,i)=>e.jsxs(T.Fragment,{children:[e.jsxs("tr",{onClick:()=>b(i),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:$,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:s.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.group==="small"?S:B,alt:"Alpha or Beta"})})]})})]}),x===i&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},i))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{a(Math.max(c-1,1))},children:e.jsx("img",{src:L,alt:""})}),h&&e.jsxs("div",{className:"page-count",children:["  ",c,"/",h.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{a(Math.min(c+1,h.data.totalPages))},children:e.jsx("img",{src:G,alt:""})})]})})]})}),g===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:j&&j.data&&j.data.history.map((s,i)=>e.jsxs(T.Fragment,{children:[e.jsxs("tr",{onClick:()=>b(i),children:[e.jsx("td",{children:s.gameUID}),e.jsxs("td",{style:{textAlign:"center"},children:[" ",s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"]}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:$,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:s.group==="A"?e.jsx("img",{src:S,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.group==="B"?e.jsx("img",{src:B,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.group==="C"?e.jsx("img",{src:R,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):e.jsx("img",{src:l[Math.floor(Math.random()*l.length)],alt:"Random Icon"})})]})})]}),x===i&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="A"?"Alpha":s.group==="B"?"Beta":s.group==="C"?"Gama":"Unknown"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{style:{textAlign:"left"},children:s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},i))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{a(Math.max(c-1,1))},children:e.jsx("img",{src:L,alt:""})}),j&&e.jsxs("div",{className:"page-count",children:["  ",c,"/",j.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{a(Math.min(c+1,j.data.totalPages))},children:e.jsx("img",{src:G,alt:""})})]})})]})})]})})}const ee="/assets/gift-box 1-c25d3103.svg",M="/assets/papers 1-b18f1b73.svg";function se(){const x=U(I),[t,b]=A(E),[l,g]=r.useState(1);r.useState(()=>{var a,u,m;return(m=(u=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:u.userDetails)!=null&&m.referralCode?`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`:null});const[N,p]=r.useState(null),h=a=>{g(a)},C=async()=>{try{let a=x.authToken,u=x.UID;const m=await y.get(`https://cosmotrade.live/api//getUserProfile/${u}`,{headers:{Authorization:`Bearer ${a}`}});if(m.status===200)return b(m),m}catch(a){a.response?a.response.data.message:a.message}},j=async()=>{try{let a=t.data.data.userDetails.referralCode,u=x.authToken;const m=await y.get(`https://cosmotrade.live/api//getReferralStats/${a}`,{headers:{Authorization:`Bearer ${u}`}});if(m.status===200)return p(m),m}catch(a){a.response?a.response.data.message:a.message}};r.useEffect(()=>{j(),C()},[]);const w=()=>{const a=document.createElement("textarea");a.innerText=t.data.data.userDetails.referralCode,document.body.appendChild(a),a.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(a)},c=()=>{const a=document.createElement("textarea");a.innerText=`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`,document.body.appendChild(a),a.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(a)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(F,{to:"/",className:"col-2",children:e.jsx("img",{src:Q,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:l===1?"active-Tab col-3":"tab col-3",onClick:()=>{h(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:l===2?"active-Tab col-3":"tab col-3",onClick:()=>{h(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:l===3?"active-Tab col-3":"tab col-3",onClick:()=>{h(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:l===4?"active-Tab col-3":"tab col-3",onClick:()=>{h(4)},children:e.jsx("p",{children:"Salary History"})})]}),l===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:ee,alt:""}),e.jsx("p",{children:"My Reward"})]}),e.jsxs("div",{className:"container commission",children:[t&&e.jsx("h2",{className:"text-center",children:t.data.data.userDetails.commissionAmount.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row commission-row",children:[e.jsx("div",{className:"col-10",children:"Direct Commission"}),t&&e.jsx("div",{className:"col-2",children:t.data.data.userDetails.commissionAmount.toFixed(2)})]})})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Invite "}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:N?N.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:N?N.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:t.data.data.userDetails.referralCode}),e.jsx("button",{onClick:w,className:"col-2",children:e.jsx("img",{src:M,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"8rem"},children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:c,className:"col-2",children:e.jsx("img",{src:M,alt:""})})]})})]})]}),l==2&&e.jsx(X,{}),l==3&&e.jsx(Z,{}),l==4&&e.jsx(Y,{}),e.jsx(J,{style:{marginTop:"2rem"}})]})}const he=T.memo(se);export{he as default};
