import{r as n,d as f,A as g,a as A,j as e}from"./index-77c1dd01.js";import{A as I,S}from"./Side-7f5e0621.js";import{a as m}from"./axios-4a70c6fc.js";import{P}from"./Premium-e8827c7c.js";import{A as o}from"./Accordion-3c7fa23f.js";import{I as k,_ as y}from"./index-4ba6a497.js";import"./TransitionWrapper-450aa3d4.js";const $={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function z(){const[r,h]=n.useState(null),[u,l]=n.useState("");n.useState("");const i=f(g),[d,x]=A(P),j=async()=>{try{let s=i.authToken;const t=await m.get("https://cosmotrade.live/api//admin/getPremiumRequest",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t),x(t.data),t}catch(s){s.response?s.response.data.message:s.message}},v=async s=>{try{let t=i.authToken;const a=await m.get(`https://cosmotrade.live/api//admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),h(a),a}catch(t){t.response?t.response.data.message:t.message}},p=async(s,t)=>{try{let a=i.authToken;const c=await m.put(`https://cosmotrade.live/api//admin/updatePremiumRequest/${s}`,{transactionId:u,adminStatus:t},{headers:{Authorization:`Bearer ${a}`}});if(c.status===200)return y.success("Premium Activated !",{...$}),console.log(c),l(""),c}catch(a){a.response?a.response.data.message:a.message}};return n.useEffect(()=>{j()},[]),e.jsxs("div",{children:[e.jsx(I,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(S,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(k,{}),d&&d.data&&d.data.map((s,t)=>e.jsx(o,{children:e.jsxs(o.Item,{eventKey:"0",children:[e.jsxs(o.Header,{onClick:()=>{v(s.userId)},className:"admin-prime-head",children:[e.jsxs("div",{children:["user Id: ",s.userId]}),e.jsxs("div",{children:["Amount: ",s.amount]}),e.jsxs("div",{children:["Transaction Id: ",s.transactionId]}),e.jsxs("div",{children:["Status: ",s.status]})]}),e.jsxs(o.Body,{children:[e.jsxs("p",{children:["UID: ",r&&r.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",r&&r.data.data.userDetails.phoneNumber]}),e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Enter Transaction Id",value:u,onChange:a=>{l(a.target.value)}})}),e.jsx("button",{className:"prime-approve-btn",onClick:()=>{p(s.userId,"approved")},children:"Approve"}),e.jsx("button",{className:"prime-reject-btn",onClick:()=>{p(s.userId,"rejected")},children:"Reject"})]})]})},t))]})]})]})}export{z as default,$ as toastProps};
