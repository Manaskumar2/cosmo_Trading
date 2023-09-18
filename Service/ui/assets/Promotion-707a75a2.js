import{r as o,e as b,A as w,j as e,R as U,a as A,L as P}from"./index-900d37c5.js";import{a as p}from"./axios-4a70c6fc.js";import{U as T}from"./UserDetails-d5fa0447.js";import"./CountDown-41661791.js";import"./GameHistory-be795e9e.js";import{N as R}from"./Nav-bae5de4a.js";import"./index-7e29e3a7.js";import{b as B}from"./back-button 1-53e9bab3.js";/* empty css            */const E="/assets/calendar 1-3e913340.svg";function F(){const[m,t]=o.useState(""),j=b(T),i=b(w),[N,c]=o.useState([]),[x,h]=o.useState(2),g=new Date().toISOString().slice(0,10),f=N.filter(a=>String(a.UID).includes(m)),[u,s]=o.useState(g),[d,n]=o.useState(null),[k,I]=o.useState(!1),[v,W]=o.useState(null),S=a=>{h(a.target.value)},$=async()=>{try{let a=i._id,r=i.authToken;const l=await p.get(`https://cosmotrade.live/api/getDownlinerDetails/${a}?level=${x}`,{headers:{Authorization:`Bearer ${r}`}});if(l.status===200)return c(l.data.downlineDetails),l}catch(a){const r=a.response?a.response.data.message:a.message;console.log(r)}},D=async a=>{try{let r=i.authToken;const l=await p.get(`https://cosmotrade.live/api/getCommissionDetails/${a}`,{headers:{Authorization:`Bearer ${r}`}});if(l.status===200)return n(l),l}catch(r){const l=r.response?r.response.data.message:r.message;console.log(l)}};return o.useEffect(()=>{$()},[x]),o.useEffect(()=>{D(u)},[u]),e.jsxs("div",{className:"myTeam",style:{minHeight:"100vh"},children:[e.jsx("div",{className:"container blue",children:e.jsxs("div",{className:"row team-top-row",children:[j&&e.jsxs("div",{className:"col-7",children:["Direct Team ",j.data.data.userDetails.downline.length," People "]}),e.jsxs("div",{className:"col-5",children:[e.jsx("img",{src:E,alt:"",onClick:()=>{D()}}),e.jsx("input",{type:"date",className:"calender",value:u,onChange:a=>{s(a.target.value)}})]})]})}),e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row inquries",children:[e.jsx("div",{className:"col-4",children:e.jsx("input",{type:"text",style:{color:"#fff",fontFamily:"Montserrat"},placeholder:"UID",value:m,onChange:a=>t(a.target.value)})}),e.jsx("div",{className:"col-4",children:e.jsxs("select",{value:x,onChange:S,className:"options ",children:[e.jsx("option",{value:2,children:"Level 1"}),e.jsx("option",{value:3,children:"Level 2"}),e.jsx("option",{value:4,children:"Level 3"}),e.jsx("option",{value:5,children:"Level 4"}),e.jsx("option",{value:6,children:"Level 5"}),e.jsx("option",{value:7,children:"Level 6"}),e.jsx("option",{value:8,children:"Level 7"}),e.jsx("option",{value:9,children:"Level 8"}),e.jsx("option",{value:10,children:"Level 9"}),e.jsx("option",{value:11,children:"Level 10"})]})}),e.jsx("div",{className:"col-4",children:e.jsx("button",{children:"Inquiries"})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"greenBg",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Nick Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Operate"})]})}),e.jsx("tbody",{className:"tableBodyRow",children:f.map((a,r)=>{const l=a.phoneNumber,L=l.substring(0,2)+"****"+l.substring(6);return e.jsxs("tr",{children:[e.jsx("td",{children:a.UID}),e.jsx("td",{children:a.name}),e.jsx("td",{style:{paddingLeft:0},children:L}),e.jsx("td",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx("button",{className:"details-btn",children:"Details"})})]},r)})})]})}),k&&e.jsx("div",{className:"popup",children:e.jsxs("div",{className:"popup-content",children:[e.jsx("button",{className:"close-popup",onClick:()=>I(!1),children:"Close"}),v&&e.jsxs("div",{className:"down-details",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["UID: ",v.data.userDetails.UID]}),e.jsxs("p",{children:["commissionAmount: ",v.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["winningAmount: ",v.data.userDetails.winningAmount]})]})]})})]})}const H="/assets/Line 28-120c29ff.svg";function M(){return e.jsx("div",{children:e.jsxs("div",{className:"table-heading",style:{marginTop:"1.5rem",minHeight:"100vh"},children:[e.jsx("h5",{className:"text-center heading-amount",children:"Coming Soon"}),e.jsx("img",{src:H,alt:"line",className:"line"})]})})}function _(){return e.jsx("div",{style:{minHeight:"100vh"},children:e.jsx("h2",{className:"comingSoon",children:"Coming Soon"})})}const z="/assets/gift-box 1-c25d3103.svg",C="/assets/papers 1-b18f1b73.svg";function O(){const m=b(w),[t,j]=A(T),[i,N]=o.useState(1);o.useState(()=>{var s,d,n;return(n=(d=(s=t==null?void 0:t.data)==null?void 0:s.data)==null?void 0:d.userDetails)!=null&&n.referralCode?`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`:null});const[c,x]=o.useState(null);console.log(t);const h=s=>{N(s)},y=async()=>{try{let s=m.authToken,d=m.UID;const n=await p.get(`https://cosmotrade.live/api/getUserProfile/${d}`,{headers:{Authorization:`Bearer ${s}`}});if(n.status===200)return console.log(n),j(n),n}catch(s){s.response?s.response.data.message:s.message}},g=async()=>{try{let s=t.data.data.userDetails.referralCode,d=m.authToken;const n=await p.get(`https://cosmotrade.live/api/getReferralStats/${s}`,{headers:{Authorization:`Bearer ${d}`}});if(n.status===200)return console.log(n),console.log(c),x(n),n}catch(s){s.response?s.response.data.message:s.message}};o.useEffect(()=>{y(),setTimeout(()=>{g()},1500)},[]);const f=()=>{const s=document.createElement("textarea");s.innerText=t.data.data.userDetails.referralCode,document.body.appendChild(s),s.select(),alert("Invitation Code Copied!"),document.execCommand("copy"),document.body.removeChild(s)},u=()=>{const s=document.createElement("textarea");s.innerText=`https://cosmotrade.live/#/signUp?referral=${t.data.data.userDetails.referralCode}`,document.body.appendChild(s),s.select(),alert("Invitation Link Copied!"),document.execCommand("copy"),document.body.removeChild(s)};return e.jsxs("div",{className:"promotionContainer",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(P,{to:"/",className:"col-2",children:e.jsx("img",{src:B,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"tab-btn-container row",children:[e.jsx("button",{className:i===1?"active-Tab col-3":"tab col-3",onClick:()=>{h(1)},children:e.jsx("p",{children:"Data"})}),e.jsx("button",{className:i===2?"active-Tab col-3":"tab col-3",onClick:()=>{h(2)},children:e.jsx("p",{children:"My Team"})}),e.jsx("button",{className:i===3?"active-Tab col-3":"tab col-3",onClick:()=>{h(3)},children:e.jsx("p",{children:"History"})}),e.jsx("button",{className:i===4?"active-Tab col-3":"tab col-3",onClick:()=>{h(4)},children:e.jsx("p",{children:"Tutorial"})})]}),i===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"gift",children:[e.jsx("img",{src:z,alt:""}),e.jsx("p",{children:"My Reward"})]}),e.jsxs("div",{className:"container commission",children:[t&&e.jsx("h2",{className:"text-center",children:t.data.data.userDetails.winningAmount.toFixed(2)}),e.jsx("p",{className:"text-center",children:"Total Winning"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row commission-row",children:[e.jsx("div",{className:"col-10",children:"Direct Commission"}),t&&e.jsx("div",{className:"col-2",children:t.data.data.userDetails.commissionAmount.toFixed(2)})]})})]}),e.jsx("div",{className:"container commission",children:e.jsxs("div",{className:"container",children:[t&&e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Number Of Direct Subordinates"}),e.jsx("div",{className:"col-2",children:t.data.data.userDetails.downline.length})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Today’s Invite"}),c&&e.jsx("div",{className:"col-2",children:c.data.data.todayCount})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Weekly Invite"}),c&&e.jsx("div",{className:"col-2",children:c.data.data.weeklyCount})]}),e.jsxs("div",{className:"row commission-bot-row",children:[e.jsx("div",{className:"col-10",children:"Total Commission For The Week"}),e.jsx("div",{className:"col-2",children:"0"})]}),t&&e.jsxs("div",{className:"row total-commission",children:[e.jsx("div",{className:"col-10",children:"Total Commission "}),e.jsx("div",{className:"col-2 text-center",children:t.data.data.userDetails.commissionAmount})]})]})}),e.jsxs("div",{className:"container commission",children:[e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Code"}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:t.data.data.userDetails.referralCode}),e.jsx("button",{onClick:f,className:"col-2",children:e.jsx("img",{src:C,alt:""})})]})}),e.jsx("h4",{style:{color:"#fff"},className:"text-center",children:"Invitation Link"}),e.jsx("div",{className:"container",style:{paddingBottom:"8rem"},children:e.jsxs("div",{className:"row invitation-row",children:[t&&e.jsx("div",{className:"col-10",children:"Copy Invitation Link"}),e.jsx("button",{onClick:u,className:"col-2",children:e.jsx("img",{src:C,alt:""})})]})})]})]}),i==2&&e.jsx(F,{}),i==3&&e.jsx(_,{}),i==4&&e.jsx(M,{}),e.jsx(R,{style:{marginTop:"2rem"}})]})}const ee=U.memo(O);export{ee as default};
