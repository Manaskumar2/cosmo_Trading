import{r,d as U,A,j as e,a as B,R as S,u as F,L as O}from"./index-43c64abb.js";import{a as C}from"./axios-4a70c6fc.js";import{U as E}from"./UserDetails-112e067b.js";import"./GameHistory-7363c811.js";import{r as P,l as $,U as q,a as J,W as G,A as T,B as I}from"./Second-709179c6.js";import{N as K}from"./Nav-1618c158.js";import{I as Q,_ as R}from"./index-9d96b1fb.js";import{b as V}from"./back-button 1-53e9bab3.js";/* empty css            */const X="/assets/calendar 1-3e913340.svg";function Y(){const[g,m]=r.useState(""),t=U(E),d=U(A),[i,x]=r.useState([]),[l,c]=r.useState(2),N=new Date().toISOString().slice(0,10),D=i.filter(n=>String(n.UID).includes(g)),[p,b]=r.useState(N),[a,y]=r.useState(null),[j,k]=r.useState(!1),[w,s]=r.useState(null),o=n=>{c(n.target.value)},f=async()=>{try{let n=d._id,h=d.authToken;const u=await C.get(`https://cosmotrade.live/api/getDownlinerDetails/${n}?level=${l}`,{headers:{Authorization:`Bearer ${h}`}});if(u.status===200)return x(u.data.downlineDetails),u}catch(n){n.response?n.response.data.message:n.message}},L=async n=>{try{let h=d.authToken;const u=await C.get(`https://cosmotrade.live/api/getCommissionDetails/${n}`,{headers:{Authorization:`Bearer ${h}`}});if(u.status===200)return y(u),u}catch(h){h.response?h.response.data.message:h.message}},z=async n=>{try{let h=d.authToken;const u=await C.get(`https://cosmotrade.live/api/getUserProfile/${n}`,{headers:{Authorization:`Bearer ${h}`}});if(u.status===200)return s(u.data),k(!0),u}catch(h){h.response?h.response.data.message:h.message}};return r.useEffect(()=>{f()},[l]),r.useEffect(()=>{L(p)},[p]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[t&&e.jsxs("div",{className:"col-7",children:["Direct Team ",t.data.data.userDetails.downline.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:X,alt:"",onClick:()=>{L()}}),e.jsx("input",{type:"date",className:"calender",value:p,onChange:n=>{b(n.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:g,onChange:n=>m(n.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:l,onChange:o,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Operate"})]})}),e.jsx("tbody",{className:"tableBodyRow",children:D.map((n,h)=>{const u=n.phoneNumber,W=u.substring(0,2)+"****"+u.substring(6);return e.jsxs("tr",{children:[e.jsx("td",{children:n.UID}),e.jsx("td",{children:n.name}),e.jsx("td",{style:{paddingLeft:0},children:W}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>z(n.UID),children:"Details"})})]},h)})})]})}),j&&e.jsx("div",{className:"popup",children:e.jsxs("div",{className:"popup-content",children:[e.jsx("button",{className:"close-popup",onClick:()=>k(!1),children:"Close"}),w&&e.jsxs("div",{className:"down-details",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["UID: ",w.data.userDetails.UID]}),e.jsxs("p",{children:["User Name: ",w.data.userDetails.name]}),e.jsxs("p",{children:["commissionAmount: ",w.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["winningAmount: ",w.data.userDetails.winningAmount]})]})]})})]})}function Z(){const g=U(A),[m,t]=r.useState(null),[d,i]=r.useState(1);return r.useEffect(()=>{(async l=>{try{let c=g.authToken;const v=await C.get("https://cosmotrade.live/api/commissionHistory",{params:{page:l},headers:{Authorization:`Bearer ${c}`}});v.status===200&&t(v.data.data)}catch(c){c.response?c.response.data.message:c.message}})(d)},[d]),e.jsx("div",{className:"CommissionHistory",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row headingCommission",children:[e.jsx("div",{className:"col-5",style:{textAlign:"left"},children:"Date & UID"}),e.jsx("div",{className:"col-3",style:{textAlign:"center"},children:"Amount"}),e.jsx("div",{className:"col-4",style:{textAlign:"center"},children:"Type"})]}),m&&m.commissionDetails.map((x,l)=>e.jsxs("div",{className:"row commissionHistoryRow",children:[e.jsxs("div",{className:"col-5",children:[x.senderUID&&e.jsxs("p",{children:["UID: ",x.senderUID," "]}),new Date(x.createdAt).toLocaleString()]}),e.jsxs("div",{className:"col-3",style:{textAlign:"center"},children:["Rs: ",x.amount]}),e.jsx("div",{className:"col-4",style:{color:x.commissionType==="AGENT"?"#00F2DE":x.commissionType==="PREMIUM"?"golden":"white",textAlign:"center"},children:x.commissionType})]},l)),e.jsx("div",{className:"pagination-buttons-container",style:{margin:"2rem 0 5rem 0"},children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{i(Math.max(d-1,1))},children:e.jsx("img",{src:P,alt:""})}),m&&e.jsxs("div",{className:"page-count",children:["  ",d,"/",m.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{i(Math.min(d+1,m.totalPages))},children:e.jsx("img",{src:$,alt:""})})]})})]})})}const H="/assets/Gamma-c10f75d7.svg",_={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function ee(){const[g,m]=r.useState(null),t=s=>{m(g===s?null:s)},d=[T,I,H],[i,x]=r.useState(1),l=U(A),[c,v]=B(q),[N,D]=B(J),[p,b]=r.useState(1),[a,y]=r.useState(1),j=async()=>{try{let s=l._id,o=l.authToken;const f=await C.get(`https://cosmotrade.live/api/get2ndgameUserHistory/${s}`,{params:{page:a},headers:{Authorization:`Bearer ${o}`}});if(f.status===200)return D(f),f}catch(s){const o=s.response?s.response.data.message:s.message;R.error(o||"Something went wrong",{..._})}},k=async()=>{try{let s=l._id,o=l.authToken;const f=await C.get(`https://cosmotrade.live/api/bettingHistory/${s}`,{params:{page:p},headers:{Authorization:`Bearer ${o}`}});if(f.status===200)return v(f),f}catch(s){const o=s.response?s.response.data.message:s.message;R.error(o||"Something went wrong",{..._})}};r.useEffect(()=>{k(),j()},[p,a]);const w=s=>{x(s)};return e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(Q,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:i===1?"activeTab record-btn":" record-btn",onClick:()=>{w(1)},children:e.jsx("p",{children:"Grow Up"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:i===2?"activeTab record-btn":"record-btn ",onClick:()=>{w(2)},children:e.jsx("p",{children:"Rise Up"})})})]})}),i===1&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:c&&c.data&&c.data.history.map((s,o)=>e.jsxs(S.Fragment,{children:[e.jsxs("tr",{onClick:()=>t(o),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:G,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:s.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.group==="small"?T:I,alt:"Alpha or Beta"})})]})})]}),g===o&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},o))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{b(Math.max(p-1,1))},children:e.jsx("img",{src:P,alt:""})}),c&&e.jsxs("div",{className:"page-count",children:["  ",p,"/",c.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{b(Math.min(p+1,c.data.totalPages))},children:e.jsx("img",{src:$,alt:""})})]})})]})}),i===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:N&&N.data&&N.data.history.map((s,o)=>e.jsxs(S.Fragment,{children:[e.jsxs("tr",{onClick:()=>t(o),children:[e.jsx("td",{children:s.gameUID}),e.jsxs("td",{style:{textAlign:"center"},children:[" ",s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"]}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:G,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:s.group==="A"?e.jsx("img",{src:T,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.group==="B"?e.jsx("img",{src:I,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.group==="C"?e.jsx("img",{src:H,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):e.jsx("img",{src:d[Math.floor(Math.random()*d.length)],alt:"Random Icon"})})]})})]}),g===o&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="A"?"Alpha":s.group==="B"?"Beta":s.group==="C"?"Gama":"Unknown"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{style:{textAlign:"left"},children:s.isCompleted?s.group===s.winnerGroup?"Win":s.group===s.loserGroup?"Lose":s.group===s.runnerUpGroup?"Runner Up":"Pending":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},o))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{b(Math.max(p-1,1))},children:e.jsx("img",{src:P,alt:""})}),N&&e.jsxs("div",{className:"page-count",children:["  ",p,"/",N.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{b(Math.min(p+1,N.data.totalPages))},children:e.jsx("img",{src:$,alt:""})})]})})]})})]})})}const se="/assets/gift-box 1-c25d3103.svg",M="/assets/papers 1-b18f1b73.svg";function ae(){const g=F(),m=U(A),[t,d]=B(E),[i,x]=r.useState(1);r.useState(()=>{var a,y,j;return(j=(y=(a=t==null?void 0:t.data)==null?void 0:a.data)==null?void 0:y.userDetails)!=null&&j.referralCode?`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`:null});const[l,c]=r.useState(null),v=a=>{x(a)},N=async()=>{try{let a=m.authToken,y=m.UID;const j=await C.get(`https://cosmotrade.live/api/getUserProfile/${y}`,{headers:{Authorization:`Bearer ${a}`}});if(j.status===200)return d(j),j}catch(a){if(a.response.status===403)return g("/signIn"),response;a.response?a.response.data.message:a.message}},D=async()=>{try{let a=t.data.data.userDetails.referralCode,y=m.authToken;const j=await C.get(`https://cosmotrade.live/api/getReferralStats/${a}`,{headers:{Authorization:`Bearer ${y}`}});if(j.status===200)return c(j),j}catch(a){a.response?a.response.data.message:a.message}};r.useEffect(()=>{D(),N()},[]);const p=()=>{const a=document.createElement("textarea");a.innerText=t.data.data.userDetails.referralCode,document.body.appendChild(a),a.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(a)},b=()=>{const a=document.createElement("textarea");a.innerText=`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`,document.body.appendChild(a),a.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(a)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(O,{to:"/",className:"col-2",children:e.jsx("img",{src:V,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:i===1?"active-Tab col-3":"tab col-3",onClick:()=>{v(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:i===2?"active-Tab col-3":"tab col-3",onClick:()=>{v(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:i===3?"active-Tab col-3":"tab col-3",onClick:()=>{v(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:i===4?"active-Tab col-3":"tab col-3",onClick:()=>{v(4)},children:e.jsx("p",{children:"Salary History"})})]}),i===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:se,alt:""}),e.jsx("p",{children:"My Reward"})]}),e.jsxs("div",{className:"container commission",children:[t&&e.jsx("h2",{className:"text-center",children:t.data.data.userDetails.commissionAmount.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Invite "}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:l?l.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:l?l.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:t.data.data.userDetails.referralCode}),e.jsx("button",{onClick:p,className:"col-2",children:e.jsx("img",{src:M,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"8rem"},children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:b,className:"col-2",children:e.jsx("img",{src:M,alt:""})})]})})]})]}),i==2&&e.jsx(Y,{}),i==3&&e.jsx(ee,{}),i==4&&e.jsx(Z,{}),e.jsx(K,{style:{marginTop:"2rem"}})]})}const me=S.memo(ae);export{me as default};
