import{r as c,d as D,A as U,j as e,a as T,R as I,u as M,L as E}from"./index-b42162b1.js";import{a as g}from"./axios-4a70c6fc.js";import{U as _}from"./UserDetails-70d8f706.js";import"./GameHistory-c2ad23dd.js";import{r as B,l as S,U as F,a as z,W as L,A as k,B as A}from"./Second-eebd7390.js";import{N as W}from"./Nav-b256850e.js";import{I as O,_ as P}from"./index-1de4ebbe.js";import{b as q}from"./back-button 1-53e9bab3.js";/* empty css            */const V="/assets/calendar 1-3e913340.svg";function J(){const[m,N]=c.useState("");D(_);const x=D(U),[j,p]=c.useState([]),[l,i]=c.useState(2),r=new Date().toISOString().slice(0,10),o=j.filter(s=>String(s.UID).includes(m)),[d,h]=c.useState(r);c.useState(null);const[v,f]=c.useState(!1),[y,w]=c.useState(null),C=s=>{i(s.target.value)},b=async()=>{try{let s=x._id,n=x.authToken;const a=await g.get(`https://cosmotrade.live/api/getDownlinerDetails/${s}?level=${l}`,{headers:{Authorization:`Bearer ${n}`}});if(a.status===200)return p(a.data.downlineDetails),a}catch(s){s.response?s.response.data.message:s.message}},t=async s=>{try{let n=x.authToken;const a=await g.get(`https://cosmotrade.live/api/getUserProfile/${s}`,{headers:{Authorization:`Bearer ${n}`}});if(a.status===200)return w(a.data),f(!0),a}catch(n){n.response?n.response.data.message:n.message}};return c.useEffect(()=>{b()},[l]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[o&&e.jsxs("div",{className:"col-7",children:["Level ",l-1," Team : ",o.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:V,alt:""}),e.jsx("input",{type:"date",className:"calender",value:d,onChange:s=>{h(s.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:m,onChange:s=>N(s.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:l,onChange:C,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Operate"})]})}),e.jsx("tbody",{className:"tableBodyRow",children:o.map((s,n)=>{const a=s.phoneNumber,H=a.substring(0,2)+"****"+a.substring(6);return e.jsxs("tr",{children:[e.jsx("td",{children:s.UID}),e.jsx("td",{children:s.name}),e.jsx("td",{style:{paddingLeft:0},children:H}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>t(s.UID),children:"Details"})})]},n)})})]})}),v&&e.jsx("div",{className:"popup",children:e.jsxs("div",{className:"popup-content",children:[e.jsx("button",{className:"close-popup",onClick:()=>f(!1),children:"Close"}),y&&e.jsxs("div",{className:"down-details",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["UID: ",y.data.userDetails.UID]}),e.jsxs("p",{children:["User Name: ",y.data.userDetails.name]}),e.jsxs("p",{children:["commissionAmount: ",y.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["winningAmount: ",y.data.userDetails.winningAmount]})]})]})})]})}function K(){const[m,N]=c.useState(null),x=D(U),[j,p]=c.useState(null),[l,i]=c.useState(1),u=async()=>{try{let r=x.authToken,o=x._id;const d=await g.get(`https://cosmotrade.live/api/commissionAmount/${o}`,{headers:{Authorization:`Bearer ${r}`}});if(d.status===200)return N(d.data),d}catch(r){r.response?r.response.data.message:r.message}};return c.useEffect(()=>{(async o=>{try{let d=x.authToken;const h=await g.get("https://cosmotrade.live/api/commissionHistory",{params:{page:o},headers:{Authorization:`Bearer ${d}`}});h.status===200&&p(h.data.data)}catch(d){d.response?d.response.data.message:d.message}})(l),u()},[l]),e.jsx("div",{className:"CommissionHistory",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row salary-commission-data",children:[m&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",m.totalRechargeCommission.toFixed(2)]}),e.jsx("div",{children:"Recharge Commission"})]}),m&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",m.totalPremiumCommission.toFixed(2)]}),e.jsx("div",{children:"Premium Commission"})]}),m&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",m.totalAgentCommission.toFixed(2)]}),e.jsx("div",{children:"Agent Commission"})]})]}),e.jsxs("div",{className:"row headingCommission",children:[e.jsx("div",{className:"col-5",style:{textAlign:"left"},children:"Date & UID"}),e.jsx("div",{className:"col-3",style:{textAlign:"center"},children:"Amount"}),e.jsx("div",{className:"col-4",style:{textAlign:"center"},children:"Type"})]}),j&&j.commissionDetails.map((r,o)=>e.jsxs("div",{className:"row commissionHistoryRow",children:[e.jsxs("div",{className:"col-5",children:[r.senderUID&&e.jsxs("p",{children:["UID: ",r.senderUID," "]}),new Date(r.createdAt).toLocaleString()]}),e.jsxs("div",{className:"col-3",style:{textAlign:"center"},children:["Rs: ",r.amount]}),e.jsx("div",{className:"col-4",style:{color:r.commissionType==="AGENT"?"#00F2DE":r.commissionType==="PREMIUM"?"golden":"white",textAlign:"center"},children:r.commissionType})]},o)),e.jsx("div",{className:"pagination-buttons-container",style:{margin:"2rem 0 5rem 0"},children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{i(Math.max(l-1,1))},children:e.jsx("img",{src:B,alt:""})}),j&&e.jsxs("div",{className:"page-count",children:["  ",l,"/",j.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{i(Math.min(l+1,j.totalPages))},children:e.jsx("img",{src:S,alt:""})})]})})]})})}const $="/assets/Gamma-c10f75d7.svg",R={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Q(){const[m,N]=c.useState(null),x=t=>{N(m===t?null:t)},j=[k,A,$],[p,l]=c.useState(1),i=D(U),[u,r]=T(F),[o,d]=T(z),[h,v]=c.useState(1),[f,y]=c.useState(1),w=async()=>{try{let t=i._id,s=i.authToken;const n=await g.get(`https://cosmotrade.live/api/get2ndgameUserHistory/${t}`,{params:{page:f},headers:{Authorization:`Bearer ${s}`}});if(n.status===200)return d(n),n}catch(t){const s=t.response?t.response.data.message:t.message;P.error(s||"Something went wrong",{...R})}},C=async()=>{try{let t=i._id,s=i.authToken;const n=await g.get(`https://cosmotrade.live/api/bettingHistory/${t}`,{params:{page:h},headers:{Authorization:`Bearer ${s}`}});if(n.status===200)return r(n),n}catch(t){const s=t.response?t.response.data.message:t.message;P.error(s||"Something went wrong",{...R})}};c.useEffect(()=>{C(),w()},[h,f]);const b=t=>{l(t)};return e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(O,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:p===1?"activeTab record-btn":" record-btn",onClick:()=>{b(1)},children:e.jsx("p",{children:"Grow Up"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:p===2?"activeTab record-btn":"record-btn ",onClick:()=>{b(2)},children:e.jsx("p",{children:"Rise Up"})})})]})}),p===1&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:u&&u.data&&u.data.history.map((t,s)=>e.jsxs(I.Fragment,{children:[e.jsxs("tr",{onClick:()=>x(s),children:[e.jsx("td",{children:t.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:t.isCompleted?t.winnerGroup===t.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:L,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:t.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:t.group==="small"?k:A,alt:"Alpha or Beta"})})]})})]}),m===s&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",t.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",t.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",t.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:t.isCompleted?t.winnerGroup===t.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(t.startTime).toLocaleString()})]})]})})})]},s))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{v(Math.max(h-1,1))},children:e.jsx("img",{src:B,alt:""})}),u&&e.jsxs("div",{className:"page-count",children:["  ",h,"/",u.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{v(Math.min(h+1,u.data.totalPages))},children:e.jsx("img",{src:S,alt:""})})]})})]})}),p===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:o&&o.data&&o.data.history.map((t,s)=>e.jsxs(I.Fragment,{children:[e.jsxs("tr",{onClick:()=>x(s),children:[e.jsx("td",{children:t.gameUID}),e.jsxs("td",{style:{textAlign:"center"},children:[" ",t.isCompleted?t.group===t.winnerGroup?"Win":t.group===t.loserGroup?"Lose":t.group===t.runnerUpGroup?"Runner Up":"Pending":"Pending"]}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:L,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:t.group==="A"?e.jsx("img",{src:k,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):t.group==="B"?e.jsx("img",{src:A,alt:"Beta",style:{height:"2rem",width:"2rem"}}):t.group==="C"?e.jsx("img",{src:$,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):e.jsx("img",{src:j[Math.floor(Math.random()*j.length)],alt:"Random Icon"})})]})})]}),m===s&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",t.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",t.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",t.group==="A"?"Alpha":t.group==="B"?"Beta":t.group==="C"?"Gama":"Unknown"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{style:{textAlign:"left"},children:t.isCompleted?t.group===t.winnerGroup?"Win":t.group===t.loserGroup?"Lose":t.group===t.runnerUpGroup?"Runner Up":"Pending":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(t.startTime).toLocaleString()})]})]})})})]},s))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{v(Math.max(h-1,1))},children:e.jsx("img",{src:B,alt:""})}),o&&e.jsxs("div",{className:"page-count",children:["  ",h,"/",o.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{v(Math.min(h+1,o.data.totalPages))},children:e.jsx("img",{src:S,alt:""})})]})})]})})]})})}const X="/assets/gift-box 1-c25d3103.svg",G="/assets/papers 1-b18f1b73.svg";function Y(){const[m,N]=c.useState(0),[x,j]=c.useState(0),p=M(),l=D(U),[i,u]=T(_),[r,o]=c.useState(1);c.useState(()=>{var s,n,a;return(a=(n=(s=i==null?void 0:i.data)==null?void 0:s.data)==null?void 0:n.userDetails)!=null&&a.referralCode?`https://cosmotrade.live/#/signUp?referral=${i.data.data.userDetails.referralCode}`:null});const[d,h]=c.useState(null),v=s=>{o(s)},f=async()=>{try{let s=l.authToken,n=l._id;const a=await g.get(`https://cosmotrade.live/api/commissionAmount/${n}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return j(a.data.todayTotalCommission),a}catch(s){if(s.response.status===403)return p("/signIn"),response;s.response?s.response.data.message:s.message}},y=async()=>{try{let s=l.authToken,n=l._id;const a=await g.get(`https://cosmotrade.live/api/getTotalTeam/${n}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return N(a.data.totalUsersIn10Levels),a}catch(s){if(s.response.status===403)return p("/signIn"),response;s.response?s.response.data.message:s.message}},w=async()=>{try{let s=l.authToken,n=l.UID;const a=await g.get(`https://cosmotrade.live/api/getUserProfile/${n}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return u(a),a}catch(s){if(s.response.status===403)return p("/signIn"),response;s.response?s.response.data.message:s.message}},C=async()=>{try{let s=i.data.data.userDetails.referralCode,n=l.authToken;const a=await g.get(`https://cosmotrade.live/api/getReferralStats/${s}`,{headers:{Authorization:`Bearer ${n}`}});if(a.status===200)return h(a),a}catch(s){s.response?s.response.data.message:s.message}};c.useEffect(()=>{f(),C(),w(),y()},[]);const b=()=>{const s=document.createElement("textarea");s.innerText=i.data.data.userDetails.referralCode,document.body.appendChild(s),s.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(s)},t=()=>{const s=document.createElement("textarea");s.innerText=`https://cosmotrade.live/#/signUp?referral=${i.data.data.userDetails.referralCode}`,document.body.appendChild(s),s.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(s)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(E,{to:"/",className:"col-2",children:e.jsx("img",{src:q,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:r===1?"active-Tab col-3":"tab col-3",onClick:()=>{v(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:r===2?"active-Tab col-3":"tab col-3",onClick:()=>{v(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:r===3?"active-Tab col-3":"tab col-3",onClick:()=>{v(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:r===4?"active-Tab col-3":"tab col-3",onClick:()=>{v(4)},children:e.jsx("p",{children:"Salary History"})})]}),r===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:X,alt:""}),e.jsx("p",{children:"My Reward"})]}),e.jsxs("div",{className:"container commission",style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[e.jsxs("div",{children:[i&&e.jsx("h2",{className:"text-center",children:i.data.data.userDetails.commissionAmount.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-center",children:x.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Today's Commission"})]})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[i&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:i.data.data.userDetails.downline.length})]}),m&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Invite Team "}),e.jsx("div",{className:"col-2",children:m})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:d?d.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:d?d.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[i&&e.jsx("div",{className:"col-10",children:i.data.data.userDetails.referralCode}),e.jsx("button",{onClick:b,className:"col-2",children:e.jsx("img",{src:G,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"2rem"},children:e.jsxs("div",{className:"row invitation-row",children:[i&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:t,className:"col-2",children:e.jsx("img",{src:G,alt:""})})]})})]}),e.jsxs("div",{className:"container commission chart",style:{marginBottom:"6rem"},children:[e.jsx("div",{className:"promotion-heading-box text-center",children:e.jsx("h2",{style:{color:"#fff"},className:"text-center",children:"Level Income"})}),e.jsx("h4",{style:{color:"#fff",padding:".5rem"},className:"text-center",children:"Distribution Commission of ₹100k"}),e.jsx("h6",{style:{color:"#d4af37"},className:"text-center",children:"Commission Calculation Method(Grow Up & Rise Up)"}),e.jsxs("div",{className:"row chat-head",children:[e.jsx("div",{className:"col-4 text-center",children:"Agent Level"}),e.jsx("div",{className:"col-4 text-center",children:"Commission"}),e.jsx("div",{className:"col-4 text-center",children:"Value"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-1"}),e.jsx("div",{className:"col-4 text-center",children:"0.7%"}),e.jsx("div",{className:"col-4 text-center",children:"₹700"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-2"}),e.jsx("div",{className:"col-4 text-center",children:"0.5%"}),e.jsx("div",{className:"col-4 text-center",children:"₹500"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-3"}),e.jsx("div",{className:"col-4 text-center",children:"0.3%"}),e.jsx("div",{className:"col-4 text-center",children:"₹300"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-4"}),e.jsx("div",{className:"col-4 text-center",children:"0.2%"}),e.jsx("div",{className:"col-4 text-center",children:"₹200"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-5"}),e.jsx("div",{className:"col-4 text-center",children:"0.15%"}),e.jsx("div",{className:"col-4 text-center",children:"₹150"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-6"}),e.jsx("div",{className:"col-4 text-center",children:"0.1%"}),e.jsx("div",{className:"col-4 text-center",children:"₹100"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-7"}),e.jsx("div",{className:"col-4 text-center",children:"0.08%"}),e.jsx("div",{className:"col-4 text-center",children:"₹80"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-8"}),e.jsx("div",{className:"col-4 text-center",children:"0.06%"}),e.jsx("div",{className:"col-4 text-center",children:"₹60"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-9"}),e.jsx("div",{className:"col-4 text-center",children:"0.05%"}),e.jsx("div",{className:"col-4 text-center",children:"₹50"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-10"}),e.jsx("div",{className:"col-4 text-center",children:"0.04%"}),e.jsx("div",{className:"col-4 text-center",children:"₹40"})]})]})]}),r==2&&e.jsx(J,{}),r==3&&e.jsx(Q,{}),r==4&&e.jsx(K,{}),e.jsx(W,{style:{marginTop:"2rem"}})]})}const le=I.memo(Y);export{le as default};
