import{d,A as l,r as i,j as e,L as h}from"./index-a5997d89.js";import{b as x}from"./back-button 1-53e9bab3.js";import{e as j}from"./earphone-d19d035b.js";import{a as m}from"./axios-4a70c6fc.js";function N(){const t=d(l),[a,c]=i.useState(null),n=s=>s==="pending"?"orange":s==="confirmed"?"green":"red",o=async()=>{try{let s=t.authToken;const r=await m.get("https://cosmotrade.live/api/rechargeHistory",{headers:{Authorization:`Bearer ${s}`}});if(r.status===200)return c(r),r}catch(s){s.response?s.response.data.message:s.message}};return i.useEffect(()=>{o()},[]),e.jsxs("div",{className:"withdrawHistoryPage",children:[e.jsx("div",{className:"container ProNav",children:e.jsxs("div",{className:"row",children:[e.jsx(h,{to:"/wallet",className:"col-2",children:e.jsx("img",{src:x,alt:""})}),e.jsx("div",{className:"col-8",children:"Recharge History"}),e.jsx("div",{className:"col-2",children:e.jsx("img",{src:j,alt:"",className:"header_headphone"})})]})}),e.jsx("div",{className:"rechargeHistory-body",children:a&&a.data.data.map((s,r)=>e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-5",children:[e.jsx("div",{children:"Transaction Id"}),e.jsx("div",{children:"Amount:"}),e.jsx("div",{children:"Upi Id:"}),e.jsx("div",{children:"Status"}),e.jsx("div",{children:" Time:"})]}),e.jsxs("div",{className:"col-7",children:[e.jsx("div",{children:s.upiReferenceNo}),e.jsx("div",{children:s.amount}),e.jsx("div",{children:s.upiId}),e.jsx("div",{style:{color:n(s.status)},children:s.status}),e.jsx("div",{children:e.jsx("p",{children:new Date(s.createdAt).toLocaleString()})})]})]})},r))})]})}export{N as default};