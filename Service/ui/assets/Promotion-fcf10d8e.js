import{r as n,b as D,A as w,j as e,e as I,u as E,R as P,L as B}from"./index-fd44721e.js";import{A as H}from"./Auth-38706de3.js";import{a as b}from"./axios-4a70c6fc.js";import{U}from"./UserDetails-6a89ff79.js";import"./GameHistory-4ab681c4.js";import"./Second-a5dc0811.js";import{N as F}from"./Nav-aca39359.js";import{I as M,_}from"./index-3c233412.js";import{r as O,l as z}from"./RightArr-753548b2.js";import{b as G}from"./back-button 1-53e9bab3.js";import"./TotalTeam-7374f7b1.js";const q="/assets/calendar 1-3e913340.svg";function J(){const[a,p]=n.useState(null),[x,j]=n.useState("");D(U);const c=D(w),[l,v]=n.useState([]),[t,N]=n.useState(2),C=new Date().toISOString().slice(0,10),[y,A]=n.useState({}),f=i=>{A(r=>{const m={...r};for(const g in m)m[g]=!1;return m[i]=!r[i],m}),$(i)},[T,S]=n.useState(C);n.useState(null);const[L,k]=n.useState(!1),[h,s]=n.useState(null),u=i=>{N(i.target.value)},o=async i=>{try{let r=c._id,m=c.authToken;const g=await b.get(`https://cosmotrade.live/api/getDownlinerDetails/${r}?UID=${i}&level=${t}`,{headers:{Authorization:`Bearer ${m}`}});return g.status===201&&(console.log(g.data.data),p(g.data.data),j("")),g.status===200&&(v(g.data.downlineDetails),p(null)),g}catch(r){r.response?r.response.data.message:r.message}},$=async i=>{try{let r=c.authToken;const m=await b.get(`https://cosmotrade.live/api/getUserProfile/${i}`,{headers:{Authorization:`Bearer ${r}`}});if(m.status===200)return s(m.data),k(!0),m}catch(r){r.response?r.response.data.message:r.message}};return n.useEffect(()=>{o(),p(null)},[]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[l&&e.jsxs("div",{className:"col-7",children:["Level ",t-1," Team : ",l.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:q,alt:""}),e.jsx("input",{type:"date",className:"calender",value:T,onChange:i=>{S(i.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:x,onChange:i=>j(i.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:t,onChange:u,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{onClick:()=>{o(x)},children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",style:{marginBottom:"5rem"},children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Turn Over"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Operate"})]})}),a?e.jsxs("tbody",{className:"tableBodyRow",children:[e.jsxs("tr",{children:[e.jsx("td",{children:a.UID}),e.jsx("td",{children:a.name}),e.jsx("td",{style:{paddingLeft:0},children:a.bettingAmount===null?"0":a.bettingAmount}),e.jsx("td",{style:{paddingLeft:0},children:a.isDeleted===!1?"Enable":"Disable"}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>f(a.UID),children:"Details"})})]}),y[a.UID]&&e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsx("div",{className:"accordion-content",children:h&&e.jsxs("div",{className:"down-details",children:[e.jsxs("p",{children:["Total Betting Amount: ",h.data.userDetails.bettingAmount.toFixed(2)]}),e.jsxs("p",{children:["Registration Time: ",new Date(h.data.userDetails.createdAt).toLocaleString()," "]}),e.jsxs("p",{children:["Number of Subordinates: ",h.data.userDetails.downline.length]}),e.jsxs("p",{children:["Last Recharge Amount: ",h.data.userDetails.lastRechargeAmount]})]})})})})]}):e.jsx("tbody",{className:"tableBodyRow",children:l&&l.map((i,r)=>{const m=i.phoneNumber;return m.substring(0,2)+""+m.substring(6),e.jsxs(I.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{children:i.UID}),e.jsx("td",{children:i.name}),e.jsx("td",{style:{paddingLeft:0},children:i.bettingAmount===null?"0":i.bettingAmount}),e.jsx("td",{style:{paddingLeft:0},children:i.isDeleted===!1?"Enable":"Disable"}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>f(i.UID),children:"Details"})})]}),y[i.UID]&&e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsx("div",{className:"accordion-content",children:h&&e.jsxs("div",{className:"down-details",children:[e.jsxs("p",{children:["Total Betting Amount: ",h.data.userDetails.bettingAmount.toFixed(2)]}),e.jsxs("p",{children:["Registration Time: ",new Date(h.data.userDetails.createdAt).toLocaleString()," "]}),e.jsxs("p",{children:["Number of Subordinates: ",h.data.userDetails.downline.length]}),e.jsxs("p",{children:["Last Recharge Amount: ",h.data.userDetails.lastRechargeAmount]})]})})})})]},r)})})]})})]})}function W(){const[a,p]=n.useState(null),x=D(w),[j,c]=n.useState(null),[l,v]=n.useState(1);return n.useEffect(()=>{const t=localStorage.getItem("commission");if(t){const N=JSON.parse(t);p(N)}},[]),n.useEffect(()=>{(async N=>{try{let d=x.authToken;const C=await b.get("https://cosmotrade.live/api/commissionHistory",{params:{page:N},headers:{Authorization:`Bearer ${d}`}});C.status===200&&c(C.data.data)}catch(d){d.response?d.response.data.message:d.message}})(l)},[l]),e.jsx("div",{className:"CommissionHistory",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row salary-commission-data",children:[a&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",a.totalCommissions.RECHARGE?a.totalCommissions.RECHARGE.toFixed(2):"0"]}),e.jsx("div",{children:"Recharge Commission"})]}),a&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",a.totalCommissions.PREMIUM?a.totalCommissions.PREMIUM.toFixed(2):"0"]}),e.jsx("div",{children:"Premium Commission"})]}),a&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",a.totalCommissions.AGENT?a.totalCommissions.AGENT.toFixed(2):"0"]}),e.jsx("div",{children:"Agent Commission"})]})]}),e.jsxs("div",{className:"row headingCommission",children:[e.jsx("div",{className:"col-5",style:{textAlign:"left"},children:"Date & UID"}),e.jsx("div",{className:"col-3",style:{textAlign:"center"},children:"Amount"}),e.jsx("div",{className:"col-4",style:{textAlign:"center"},children:"Type"})]}),j&&j.commissionDetails.map((t,N)=>e.jsxs("div",{className:"row commissionHistoryRow",children:[e.jsxs("div",{className:"col-5",children:[t.senderUID&&e.jsxs("p",{children:["UID: ",t.senderUID," "]}),new Date(t.createdAt).toLocaleString()]}),e.jsxs("div",{className:"col-3",style:{textAlign:"center"},children:["Rs: ",t.amount.toFixed(2)]}),e.jsx("div",{className:"col-4",style:{color:t.commissionType==="AGENT"?"#00F2DE":t.commissionType==="PREMIUM"?"golden":"white",textAlign:"center"},children:t.commissionType})]},N)),e.jsx("div",{className:"pagination-buttons-container",style:{margin:"2rem 0 5rem 0"},children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{v(Math.max(l-1,1))},children:e.jsx("img",{src:O,alt:""})}),j&&e.jsxs("div",{className:"page-count",children:[l,"/",Math.min(j.totalPages,50)]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{v(Math.min(l+1,50))},children:e.jsx("img",{src:z,alt:""})})]})})]})})}const V={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function K(){const[a,p]=n.useState(null),x=D(w);n.useState(1),n.useState(1);const j=async()=>{try{let c=x.authToken;const l=await b.get("https://cosmotrade.live/api/dateWiseCommission",{headers:{Authorization:`Bearer ${c}`}});if(l.status===200)return p(l.data.datewiseTotal),l}catch(c){const l=c.response?c.response.data.message:c.message;_.error(l||"Something went wrong",{...V})}};return n.useEffect(()=>{j()},[]),e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(M,{}),e.jsx("div",{children:e.jsx("div",{className:"period-heading",style:{marginTop:"2rem"},children:e.jsx("div",{className:"table-responsive game_history_table ",children:e.jsxs("table",{class:"table table-striped box-shadow",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Pickup Date"}),e.jsx("th",{style:{textAlign:"right"},children:"Receiving Amount"})]})}),e.jsx("tbody",{children:a&&Object.keys(a).map((c,l)=>e.jsx(I.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{style:{paddingLeft:"2rem"},children:c}),e.jsx("td",{style:{textAlign:"right",paddingRight:"5rem"},children:a[c].toFixed(2)})]})},l))})]})})})})]})})}const Q="/assets/myCommission-40fba16b.svg",R="/assets/papers 1-b18f1b73.svg";function X(){const[a,p]=n.useState(0),[x,j]=n.useState(0),c=E(),l=()=>{c(-1)},v=D(w),[t,N]=P(U),[d,C]=n.useState(1);n.useState(()=>{var s,u,o;return(o=(u=(s=t==null?void 0:t.data)==null?void 0:s.data)==null?void 0:u.userDetails)!=null&&o.referralCode?`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`:null});const[y,A]=n.useState(null),f=s=>{C(s)},T=async()=>{try{let s=v.authToken,u=v._id;const o=await b.get(`https://cosmotrade.live/api/commissionAmount/${u}`,{headers:{Authorization:`Bearer ${s}`}});if(o.status===200)return localStorage.setItem("commission",JSON.stringify(o.data)),j(o.data),o}catch(s){if(s.response.status===403)return c("/signIn"),response;s.response?s.response.data.message:s.message}},S=async()=>{try{let s=v.authToken,u=v.UID;const o=await b.get(`https://cosmotrade.live/api/getUserProfile/${u}`,{headers:{Authorization:`Bearer ${s}`}});if(o.status===200)return N(o),o}catch(s){if(s.response.status===403)return c("/signIn"),response;s.response?s.response.data.message:s.message}},L=async()=>{try{let s=t.data.data.userDetails.referralCode,u=v.authToken;const o=await b.get(`https://cosmotrade.live/api/getReferralStats/${s}`,{headers:{Authorization:`Bearer ${u}`}});if(o.status===200)return A(o),o}catch(s){s.response?s.response.data.message:s.message}};n.useEffect(()=>{T(),L(),S(),p(localStorage.getItem("total"))},[]);const k=()=>{const s=document.createElement("textarea");s.innerText=t.data.data.userDetails.referralCode,document.body.appendChild(s),s.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(s)},h=()=>{const s=document.createElement("textarea");s.innerText=`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`,document.body.appendChild(s),s.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(s)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(B,{className:"col-2",onClick:l,children:e.jsx("img",{src:G,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:d===1?"active-Tab col-3":"tab col-3",onClick:()=>{f(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:d===2?"active-Tab col-3":"tab col-3",onClick:()=>{f(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:d===3?"active-Tab col-3":"tab col-3",onClick:()=>{f(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:d===4?"active-Tab col-3":"tab col-3",onClick:()=>{f(4)},children:e.jsx("p",{children:"Salary History"})})]}),d===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:Q,alt:"",className:"my-commision-img"}),e.jsx("p",{children:"My Commission Table"})]}),e.jsxs("div",{className:"container commission",style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[e.jsxs("div",{children:[x&&e.jsx("h2",{className:"text-center",children:x.overallTotalCommission.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"})]}),e.jsxs("div",{children:[x&&e.jsx("h2",{className:"text-center",children:x.totalTodayCommission.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Today's Commission"})]})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),a&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Invite Team "}),e.jsx("div",{className:"col-2",children:a})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:y?y.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:y?y.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:t.data.data.userDetails.referralCode}),e.jsx("button",{onClick:k,className:"col-2",children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"2rem"},children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:h,className:"col-2",children:e.jsx("img",{src:R,alt:""})})]})})]}),e.jsxs("div",{className:"container commission chart",style:{marginBottom:"6rem"},children:[e.jsx("div",{className:"promotion-heading-box text-center",children:e.jsx("h2",{style:{color:"#fff"},className:"text-center",children:"Level Income"})}),e.jsx("h4",{style:{color:"#fff",padding:".5rem"},className:"text-center",children:"Distribution Commission of ₹100k"}),e.jsx("h6",{style:{color:"#d4af37"},className:"text-center",children:"Commission Calculation Method(Grow Up & Rise Up)"}),e.jsxs("div",{className:"row chat-head",children:[e.jsx("div",{className:"col-4 text-center",children:"Agent Level"}),e.jsx("div",{className:"col-4 text-center",children:"Commission"}),e.jsx("div",{className:"col-4 text-center",children:"Value"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-1"}),e.jsx("div",{className:"col-4 text-center",children:"0.7%"}),e.jsx("div",{className:"col-4 text-center",children:"₹700"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-2"}),e.jsx("div",{className:"col-4 text-center",children:"0.5%"}),e.jsx("div",{className:"col-4 text-center",children:"₹500"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-3"}),e.jsx("div",{className:"col-4 text-center",children:"0.3%"}),e.jsx("div",{className:"col-4 text-center",children:"₹300"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-4"}),e.jsx("div",{className:"col-4 text-center",children:"0.2%"}),e.jsx("div",{className:"col-4 text-center",children:"₹200"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-5"}),e.jsx("div",{className:"col-4 text-center",children:"0.15%"}),e.jsx("div",{className:"col-4 text-center",children:"₹150"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-6"}),e.jsx("div",{className:"col-4 text-center",children:"0.1%"}),e.jsx("div",{className:"col-4 text-center",children:"₹100"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-7"}),e.jsx("div",{className:"col-4 text-center",children:"0.08%"}),e.jsx("div",{className:"col-4 text-center",children:"₹80"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-8"}),e.jsx("div",{className:"col-4 text-center",children:"0.06%"}),e.jsx("div",{className:"col-4 text-center",children:"₹60"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-9"}),e.jsx("div",{className:"col-4 text-center",children:"0.05%"}),e.jsx("div",{className:"col-4 text-center",children:"₹50"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-10"}),e.jsx("div",{className:"col-4 text-center",children:"0.04%"}),e.jsx("div",{className:"col-4 text-center",children:"₹40"})]})]})]}),d==2&&e.jsx(J,{}),d==3&&e.jsx(K,{}),d==4&&e.jsx(W,{}),e.jsx(F,{style:{marginTop:"2rem"}}),e.jsx(H,{})]})}const re=I.memo(X);export{re as default};