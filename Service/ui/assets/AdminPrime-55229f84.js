import{r as c,d as j,A as f,a as v,j as e}from"./index-0d5ab529.js";import{A as g,S as A}from"./Side-1cecf607.js";import{a as m}from"./axios-4a70c6fc.js";import{P}from"./Premium-b5d9d531.js";import{A as o}from"./Accordion-b7586505.js";import{I as S,_ as I}from"./index-060a0471.js";import"./TransitionWrapper-fb7d5353.js";import"./react-lifecycles-compat.es-22c986ff.js";const k={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function z(){const[r,l]=c.useState(null);c.useState("");const n=j(f),[i,p]=v(P),h=async()=>{try{let s=n.authToken;const t=await m.get("https://cosmotrade.live/api/admin/getPremiumRequest",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t),p(t.data),t}catch(s){s.response?s.response.data.message:s.message}},x=async s=>{try{let t=n.authToken;const a=await m.get(`https://cosmotrade.live/api/admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),l(a),a}catch(t){t.response?t.response.data.message:t.message}},u=async(s,t)=>{try{let a=n.authToken;const d=await m.put(`https://cosmotrade.live/api//admin/updatePremiumRequest/${s}`,{adminStatus:t},{headers:{Authorization:`Bearer ${a}`}});if(d.status===200)return I.success("Premium Activated !",{...k}),console.log(d),setTransactionId(""),d}catch(a){a.response?a.response.data.message:a.message}};return c.useEffect(()=>{h()},[]),e.jsxs("div",{children:[e.jsx(g,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(A,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(S,{}),i&&i.data&&i.data.map((s,t)=>e.jsx(o,{children:e.jsxs(o.Item,{eventKey:"0",children:[e.jsxs(o.Header,{onClick:()=>{x(s.userId)},className:"admin-prime-head",children:[e.jsxs("div",{children:["user Id: ",s.userId]}),e.jsxs("div",{children:["Amount: ",s.amount]}),e.jsxs("div",{children:["Status: ",s.status]})]}),e.jsxs(o.Body,{children:[e.jsxs("p",{children:["UID: ",r&&r.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",r&&r.data.data.userDetails.phoneNumber]}),e.jsx("button",{className:"prime-approve-btn",onClick:()=>{u(s.userId,"approved")},children:"Approve"}),e.jsx("button",{className:"prime-reject-btn",onClick:()=>{u(s.userId,"rejected")},children:"Reject"})]})]})},t))]})]})]})}export{z as default,k as toastProps};
