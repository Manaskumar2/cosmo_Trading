import{f,d as U,A as b,r as l,a as k,j as e}from"./index-03b010d5.js";import{A as N,S as D}from"./Side-1c5e7fa4.js";import{a as d}from"./axios-4a70c6fc.js";const S=f({key:"AllUserData",default:null});function C(){const o=U(b),[n,h]=l.useState(1),[i,x]=l.useState(""),[u,w]=l.useState([]),[r,j]=k(S),g=async()=>{try{let s=o.authToken;const t=await d.get("https://cosmotrade.live/api//admin/getAllUsers",{headers:{Authorization:`Bearer ${s}`},params:{queryPageIndex:n,queryPageFilter:i}});if(t.status===200)return console.log(t),j(t),console.log(r),t}catch(s){s.response?s.response.data.message:s.message}},p=async s=>{try{let t=o.authToken;console.log(t);const a=await d.patch(`https://cosmotrade.live/api//admin/activateUser/${s}`,{},{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),a}catch(t){const a=t.response?t.response.data.message:t.message;console.error(a)}},v=async s=>{try{let t=o.authToken;console.log(t);let a=o._id;console.log(a);const c=await d.patch(`https://cosmotrade.live/api//admin/deactivateUser/${s}`,{},{headers:{Authorization:`Bearer ${t}`}});if(c.status===200)return console.log(c),c}catch(t){const a=t.response?t.response.data.message:t.message;console.error(a)}};l.useEffect(()=>{g()},[n,i,u]);const m=r&&r.data.response.totalPages,A=()=>{n>1&&h(n-1)},y=()=>{n<m&&h(n+1)};return e.jsxs("div",{children:[e.jsx(N,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(D,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx("input",{type:"number",className:"user-input",value:i,onChange:s=>{x(s.target.value)},placeholder:"Search Number"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Total Downline"}),e.jsx("th",{children:"Total Commission Earned"}),e.jsx("th",{children:"Level"}),e.jsx("th",{children:"Wallet Amount"}),e.jsx("th",{children:"Winning Amount"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:r&&r.data.response.getUsers.map((s,t)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:s.UID}),e.jsx("td",{children:s.phoneNumber}),e.jsx("td",{children:s.downline.length}),e.jsx("td",{children:s.commissionAmount}),e.jsx("td",{children:s.level}),e.jsx("td",{children:s.walletAmount}),e.jsx("td",{children:s.winningAmount}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>p(s._id),className:"activate",children:"Activate"}),e.jsx("button",{onClick:()=>v(s._id),className:"deactivate",children:"Deactivate"})]})]},t))})]}),e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:A,children:"-"}),e.jsxs("div",{children:[n,"/",m]}),e.jsx("button",{onClick:y,children:"+"})]})]})]})]})}export{C as default};