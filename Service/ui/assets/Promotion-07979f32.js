import{r as a,b as C,A as w,j as e,e as $,u as F,R as H,L as z}from"./index-fb6f3282.js";import{A as _}from"./Auth-58e81192.js";import{a as p}from"./axios-4a70c6fc.js";import{U as B}from"./UserDetails-55e70b25.js";import"./GameHistory-0c470f4e.js";import"./Second-17ecdbdb.js";import{N as O}from"./Nav-2006de6a.js";import{I as G,_ as q}from"./index-0b1ff91c.js";import{r as E,l as P}from"./RightArr-753548b2.js";import{b as J}from"./back-button 1-53e9bab3.js";const W="/assets/calendar 1-3e913340.svg";function V(){const[n,u]=a.useState(null),[j,h]=a.useState("");C(B);const o=C(w),[i,N]=a.useState([]),[c,r]=a.useState(1),[l,y]=a.useState(1),D=new Date().toISOString().slice(0,10),[g,T]=a.useState({}),f=s=>{T(d=>{const x={...d};for(const M in x)x[M]=!1;return x[s]=!d[s],x}),m(s)},[A,k]=a.useState(D);a.useState(null);const[U,S]=a.useState(!1),[b,L]=a.useState(null),I=s=>{y(s.target.value),r(1)},t=async()=>{try{let s=o.authToken;const d=await p.get(`https://cosmotrade.live/api/getAllUsersAtLevel?levelNumber=${l}&page=${c}&uid=${j}`,{headers:{Authorization:`Bearer ${s}`}});return d.status===200&&(h(""),d.data.users&&(u(null),N(d.data)),d.data.userDetails&&u(d.data.userDetails),console.log(d.data)),d}catch(s){s.response?s.response.data.message:s.message}},m=async s=>{try{let d=o.authToken;const x=await p.get(`https://cosmotrade.live/api/getUserProfile/${s}`,{headers:{Authorization:`Bearer ${d}`}});if(x.status===200)return L(x.data),S(!0),x}catch(d){d.response?d.response.data.message:d.message}};return a.useEffect(()=>{u(null)},[]),a.useEffect(()=>{t()},[l,c]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[i&&e.jsxs("div",{className:"col-7",children:["Level ",l," Team : ",i.totalUsers," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:W,alt:""}),e.jsx("input",{type:"date",className:"calender",value:A,onChange:s=>{k(s.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:j,onChange:s=>h(s.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:l,onChange:I,className:"options ",children:[e.jsx("option",{value:1,children:"Level 1"}),e.jsx("option",{value:2,children:"Level 2"}),e.jsx("option",{value:3,children:"Level 3"}),e.jsx("option",{value:4,children:"Level 4"}),e.jsx("option",{value:5,children:"Level 5"}),e.jsx("option",{value:6,children:"Level 6"}),e.jsx("option",{value:7,children:"Level 7"}),e.jsx("option",{value:8,children:"Level 8"}),e.jsx("option",{value:9,children:"Level 9"}),e.jsx("option",{value:10,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{onClick:()=>{t()},children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",style:{marginBottom:"5rem"},children:e.jsxs(e.Fragment,{children:[e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{className:"b-font",children:"UID"}),e.jsx("th",{className:"b-font",children:"Nick Name"}),e.jsx("th",{className:"b-font",children:"Turn Over"}),e.jsx("th",{className:"b-font",children:"Status"}),e.jsx("th",{className:"b-font",children:"Operate"})]})}),n?e.jsxs("tbody",{className:"tableBodyRow",children:[e.jsxs("tr",{children:[e.jsx("td",{children:n.UID}),e.jsx("td",{children:n.name}),e.jsx("td",{style:{paddingLeft:0},children:n.bettingAmount===null?"0":n.bettingAmount}),e.jsx("td",{style:{paddingLeft:0},children:n.isDeleted===!1?"Enable":"Disable"}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",onClick:()=>f(n.UID),children:"Details"})})]}),g[n.UID]&&e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsx("div",{className:"accordion-content",children:b&&e.jsxs("div",{className:"down-details",children:[e.jsxs("p",{children:["Total Betting Amount: ",b.data.userDetails.bettingAmount.toFixed(2)]}),e.jsxs("p",{children:["Registration Time: ",new Date(b.data.userDetails.createdAt).toLocaleString()," "]}),e.jsxs("p",{children:["Today Recharge Amount: ",b.data.userDetails.lastRechargeAmount]})]})})})})]}):e.jsx("tbody",{className:"tableBodyRow",children:i&&i.users&&i.users.map((s,d)=>{const x=s.phoneNumber;return x.substring(0,2)+""+x.substring(6),e.jsxs($.Fragment,{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"sm-font",children:s.UID}),e.jsx("td",{className:"sm-font",children:s.name}),e.jsx("td",{style:{paddingLeft:0},children:s.bettingAmount===null?"0":s.bettingAmount}),e.jsx("td",{style:{paddingLeft:0},className:"sm-font",children:s.isDeleted===!1?"Enable":"Disable"}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"sm-font",children:e.jsx("button",{className:"details-btn",onClick:()=>f(s.UID),children:"Details"})})]}),g[s.UID]&&e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsx("div",{className:"accordion-content",children:e.jsxs("div",{className:"down-details",children:[e.jsxs("p",{children:["Total Betting Amount: ",s.bettingAmount.toFixed(2)]}),e.jsxs("p",{children:["Registration Time: ",new Date(s.createdAt).toLocaleString()," "]}),e.jsxs("p",{children:["Today Recharge Amount: ",s.lastRechargeAmount]})]})})})})]},d)})})]}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{r(Math.max(c-1,1))},children:e.jsx("img",{src:E,alt:""})}),i&&e.jsxs("div",{className:"page-count",children:[c,"/",i.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{r(Math.min(c+1,i.totalPages))},children:e.jsx("img",{src:P,alt:""})})]})})]})})]})}function K(){const[n,u]=a.useState(null),j=C(w),[h,o]=a.useState(null),[i,N]=a.useState(1);return a.useEffect(()=>{const c=localStorage.getItem("commission");if(c){const r=JSON.parse(c);u(r)}},[]),a.useEffect(()=>{(async r=>{try{let l=j.authToken;const y=await p.get("https://cosmotrade.live/api/commissionHistory",{params:{page:r},headers:{Authorization:`Bearer ${l}`}});y.status===200&&o(y.data.data)}catch(l){l.response?l.response.data.message:l.message}})(i)},[i]),e.jsx("div",{className:"CommissionHistory",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"row salary-commission-data",children:[n&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",n.totalCommissions.RECHARGE?n.totalCommissions.RECHARGE.toFixed(2):"0"]}),e.jsx("div",{children:"Recharge Commission"})]}),n&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",n.totalCommissions.PREMIUM?n.totalCommissions.PREMIUM.toFixed(2):"0"]}),e.jsx("div",{children:"Premium Commission"})]}),n&&e.jsxs("div",{className:"col-4",children:[e.jsxs("div",{children:["Rs:",n.totalCommissions.AGENT?n.totalCommissions.AGENT.toFixed(2):"0"]}),e.jsx("div",{children:"Agent Commission"})]})]}),e.jsxs("div",{className:"row headingCommission",children:[e.jsx("div",{className:"col-5",style:{textAlign:"left"},children:"Date & UID"}),e.jsx("div",{className:"col-3",style:{textAlign:"center"},children:"Amount"}),e.jsx("div",{className:"col-4",style:{textAlign:"center"},children:"Type"})]}),h&&h.commissionDetails.map((c,r)=>e.jsxs("div",{className:"row commissionHistoryRow",children:[e.jsxs("div",{className:"col-5",children:[c.senderUID&&e.jsxs("p",{children:["UID: ",c.senderUID," "]}),new Date(c.createdAt).toLocaleString()]}),e.jsxs("div",{className:"col-3",style:{textAlign:"center"},children:["Rs: ",c.amount.toFixed(2)]}),e.jsx("div",{className:"col-4",style:{color:c.commissionType==="AGENT"?"#00F2DE":c.commissionType==="PREMIUM"?"golden":"white",textAlign:"center"},children:c.commissionType})]},r)),e.jsx("div",{className:"pagination-buttons-container",style:{margin:"2rem 0 5rem 0"},children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{N(Math.max(i-1,1))},children:e.jsx("img",{src:E,alt:""})}),h&&e.jsxs("div",{className:"page-count",children:[i,"/",Math.min(h.totalPages,50)]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{N(Math.min(i+1,50))},children:e.jsx("img",{src:P,alt:""})})]})})]})})}const Q={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function X(){const[n,u]=a.useState(null),j=C(w);a.useState(1),a.useState(1);const h=async()=>{try{let o=j.authToken;const i=await p.get("https://cosmotrade.live/api/dateWiseCommission",{headers:{Authorization:`Bearer ${o}`}});if(i.status===200)return u(i.data.datewiseTotal),i}catch(o){const i=o.response?o.response.data.message:o.message;q.error(i||"Something went wrong",{...Q})}};return a.useEffect(()=>{h()},[]),e.jsx("div",{style:{minHeight:"100vh"},children:e.jsxs("div",{className:"gameHistory",children:[e.jsx(G,{}),e.jsx("div",{children:e.jsx("div",{className:"period-heading",style:{margin:"2rem 0 5rem 0"},children:e.jsx("div",{className:"table-responsive game_history_table ",children:e.jsxs("table",{class:"table table-striped box-shadow",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Pickup Date"}),e.jsx("th",{style:{textAlign:"right"},children:"Receiving Amount"})]})}),e.jsx("tbody",{children:n&&Object.keys(n).map((o,i)=>e.jsx($.Fragment,{children:e.jsxs("tr",{children:[e.jsx("td",{style:{paddingLeft:"2rem"},children:o}),e.jsx("td",{style:{textAlign:"right",paddingRight:"5rem"},children:n[o].toFixed(2)})]})},i))})]})})})})]})})}const Y="/assets/myCommission-40fba16b.svg",R="/assets/papers 1-b18f1b73.svg";function Z(){const[n,u]=a.useState(null);a.useState(0);const[j,h]=a.useState(null),[o,i]=a.useState(0),N=F(),c=()=>{N(-1)},r=C(w),[l,y]=H(B),[v,D]=a.useState(1);a.useState(()=>{var t,m,s;return(s=(m=(t=l==null?void 0:l.data)==null?void 0:t.data)==null?void 0:m.userDetails)!=null&&s.referralCode?`https://cosmotrade.live/#/signUp?referral=${l.data.data.userDetails.referralCode}`:null});const[g,T]=a.useState(null),f=t=>{D(t)},A=async()=>{try{let t=r.authToken,m=r._id;const s=await p.get(`https://cosmotrade.live/api/commissionAmount/${m}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return localStorage.setItem("commission",JSON.stringify(s.data)),i(s.data),s}catch(t){if(t.response.status===403)return N("/signIn"),response;t.response?t.response.data.message:t.message}},k=async()=>{try{let t=r.authToken;const m=await p.get("https://cosmotrade.live/api/getAllUsersAtLevel?levelNumber=1",{headers:{Authorization:`Bearer ${t}`}});return m.status===200&&u(m.data),m}catch(t){t.response?t.response.data.message:t.message}},U=async()=>{try{let t=r.authToken,m=r.UID;const s=await p.get(`https://cosmotrade.live/api/getUserProfile/${m}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return y(s),s}catch(t){if(t.response.status===403)return N("/signIn"),response;t.response?t.response.data.message:t.message}},S=async()=>{try{let t=l.data.data.userDetails.referralCode,m=r.authToken;const s=await p.get(`https://cosmotrade.live/api/getReferralStats/${t}`,{headers:{Authorization:`Bearer ${m}`}});if(s.status===200)return T(s),s}catch(t){t.response?t.response.data.message:t.message}},b=async()=>{try{let t=r.authToken,m=r._id;const s=await p.get(`https://cosmotrade.live/api/getTotalTeams/${m}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return console.log(s.data),h(s.data),s}catch(t){t.response?t.response.data.message:t.message}};a.useEffect(()=>{k(),A(),S(),U(),b()},[]);const L=()=>{const t=document.createElement("textarea");t.innerText=l.data.data.userDetails.referralCode,document.body.appendChild(t),t.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(t)},I=()=>{const t=document.createElement("textarea");t.innerText=`https://cosmotrade.live/#/signUp?referral=${l.data.data.userDetails.referralCode}`,document.body.appendChild(t),t.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(t)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(z,{className:"col-2",onClick:c,children:e.jsx("img",{src:J,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:v===1?"active-Tab col-3":"tab col-3",onClick:()=>{f(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:v===2?"active-Tab col-3":"tab col-3",onClick:()=>{f(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:v===3?"active-Tab col-3":"tab col-3",onClick:()=>{f(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:v===4?"active-Tab col-3":"tab col-3",onClick:()=>{f(4)},children:e.jsx("p",{children:"Salary History"})})]}),v===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:Y,alt:"",className:"my-commision-img"}),e.jsx("p",{children:"My Commission Table"})]}),e.jsxs("div",{className:"container commission",style:{display:"flex",justifyContent:"space-evenly",alignItems:"center"},children:[e.jsxs("div",{children:[o&&e.jsx("h2",{className:"text-center",children:o.overallTotalCommission.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Commission"})]}),e.jsxs("div",{children:[o&&e.jsx("h2",{className:"text-center",children:o.totalTodayCommission.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Today's Commission"})]})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[n&&n.totalUsers&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:n.totalUsers})]}),j&&j.totalTeam&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Invite Team "}),e.jsx("div",{className:"col-2",children:j.totalTeam})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),e.jsx("div",{className:"col-2",children:g?g.data.data.todayCount:0})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),e.jsx("div",{className:"col-2",children:g?g.data.data.weeklyCount:0})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[l&&e.jsx("div",{className:"col-10",children:l.data.data.userDetails.referralCode}),e.jsx("button",{onClick:L,className:"col-2",children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"2rem"},children:e.jsxs("div",{className:"row invitation-row",children:[l&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:I,className:"col-2",children:e.jsx("img",{src:R,alt:""})})]})})]}),e.jsxs("div",{className:"container commission chart",style:{marginBottom:"6rem"},children:[e.jsx("div",{className:"promotion-heading-box text-center",children:e.jsx("h2",{style:{color:"#fff"},className:"text-center",children:"Level Income"})}),e.jsx("h4",{style:{color:"#fff",padding:".5rem"},className:"text-center",children:"Distribution Commission of ₹100k"}),e.jsx("h6",{style:{color:"#d4af37"},className:"text-center",children:"Commission Calculation Method(Grow Up & Rise Up)"}),e.jsxs("div",{className:"row chat-head",children:[e.jsx("div",{className:"col-4 text-center",children:"Agent Level"}),e.jsx("div",{className:"col-4 text-center",children:"Commission"}),e.jsx("div",{className:"col-4 text-center",children:"Value"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-1"}),e.jsx("div",{className:"col-4 text-center",children:"0.7%"}),e.jsx("div",{className:"col-4 text-center",children:"₹700"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-2"}),e.jsx("div",{className:"col-4 text-center",children:"0.5%"}),e.jsx("div",{className:"col-4 text-center",children:"₹500"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-3"}),e.jsx("div",{className:"col-4 text-center",children:"0.3%"}),e.jsx("div",{className:"col-4 text-center",children:"₹300"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-4"}),e.jsx("div",{className:"col-4 text-center",children:"0.2%"}),e.jsx("div",{className:"col-4 text-center",children:"₹200"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-5"}),e.jsx("div",{className:"col-4 text-center",children:"0.15%"}),e.jsx("div",{className:"col-4 text-center",children:"₹150"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-6"}),e.jsx("div",{className:"col-4 text-center",children:"0.1%"}),e.jsx("div",{className:"col-4 text-center",children:"₹100"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-7"}),e.jsx("div",{className:"col-4 text-center",children:"0.08%"}),e.jsx("div",{className:"col-4 text-center",children:"₹80"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-8"}),e.jsx("div",{className:"col-4 text-center",children:"0.06%"}),e.jsx("div",{className:"col-4 text-center",children:"₹60"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-9"}),e.jsx("div",{className:"col-4 text-center",children:"0.05%"}),e.jsx("div",{className:"col-4 text-center",children:"₹50"})]}),e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-4 text-center",children:"Level-10"}),e.jsx("div",{className:"col-4 text-center",children:"0.04%"}),e.jsx("div",{className:"col-4 text-center",children:"₹40"})]})]})]}),v==2&&e.jsx(V,{}),v==3&&e.jsx(X,{}),v==4&&e.jsx(K,{}),e.jsx(O,{style:{marginTop:"2rem"}}),e.jsx(_,{})]})}const de=$.memo(Z);export{de as default};
