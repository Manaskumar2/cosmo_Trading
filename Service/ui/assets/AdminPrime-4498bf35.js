import{r as p,d as P,A as S,a as A,j as e}from"./index-0e8bc24c.js";import{A as k,S as N}from"./Side-9326bd8f.js";import{a as u}from"./axios-4a70c6fc.js";import{P as I}from"./Premium-80171104.js";/* empty css                   */import{A as c}from"./Accordion-69369367.js";import{I as y,_ as h}from"./index-d5da4738.js";import"./TransitionWrapper-b80d433f.js";import"./react-lifecycles-compat.es-22c986ff.js";const j={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function q(){const[r,d]=p.useState("approved"),[i,v]=p.useState(null),l=P(S),[m,b]=A(I),x=async()=>{try{let s=l.authToken;const t=await u.get(`https://cosmotrade.live/api/admin/getPremiumRequest?status=${r}`,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t),b(t.data),t}catch(s){s.response?s.response.data.message:s.message}},f=async s=>{try{let t=l.authToken;const a=await u.get(`https://cosmotrade.live/api/admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),v(a),a}catch(t){const a=t.response?t.response.data.message:t.message;h.error(a||"Something went wrong",{...j})}},g=async(s,t,a)=>{try{let o=l.authToken;const n=await u.put(`https://cosmotrade.live/api/admin/updatePremiumRequest/${s}`,{adminStatus:t,premiumId:a},{headers:{Authorization:`Bearer ${o}`}});if(n.status===200)return h.success("Premium Updated !",{...j}),console.log(n),x(),n}catch(o){const n=o.response?o.response.data.message:o.message;h.error(n||"Something went wrong",{...j})}};return p.useEffect(()=>{x()},[r]),e.jsxs("div",{children:[e.jsx(k,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(N,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:r==="approved"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{d("approved")},children:"Approved List"}),e.jsx("button",{className:r==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{d("pending")},children:"Pending List"}),e.jsx("button",{className:r==="rejected"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{d("rejected")},children:"Reject List"})]}),e.jsx(y,{}),m&&m.data&&m.data.map((s,t)=>e.jsx(c,{children:e.jsxs(c.Item,{eventKey:"0",children:[e.jsxs(c.Header,{onClick:()=>{f(s.userId)},className:"admin-prime-head",children:[e.jsxs("div",{children:["user Id: ",s.userId]}),e.jsxs("div",{children:["Amount: ",s.amount]}),e.jsxs("div",{children:["Status: ",s.status]})]}),e.jsxs(c.Body,{children:[e.jsxs("p",{children:["UID: ",i&&i.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",i&&i.data.data.userDetails.phoneNumber]}),r!=="approved"&&r!=="rejected"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"prime-approve-btn",onClick:()=>{g(s.userId,"approved",s._id)},children:"Approve"}),e.jsx("button",{className:"prime-reject-btn",onClick:()=>{g(s.userId,"rejected",s._id)},children:"Reject"})]})]})]})},t))]})]})]})}export{q as default,j as toastProps};