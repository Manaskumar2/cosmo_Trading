import{d as o,A as n,a as h,r as x,j as s,L as m}from"./index-607e5c7b.js";import{b as j}from"./back-button 1-53e9bab3.js";import{e as v}from"./earphone-d19d035b.js";import{W as p}from"./WithdrawHistory-274e7ce8.js";import{a as w}from"./axios-4a70c6fc.js";function H(){const i=o(n),[t,c]=h(p),d=e=>e==="pending"?"orange":e==="confirmed"?"green":"red",l=async()=>{try{let e=i.authToken,a=i._id;const r=await w.get(`https://cosmotrade.live/api/getWithdrawalHistory/${a}`,{headers:{Authorization:`Bearer ${e}`}});if(r.status===200)return c(r),r}catch(e){e.response?e.response.data.message:e.message}};return x.useEffect(()=>{l()},[]),s.jsxs("div",{className:"withdrawHistoryPage",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(m,{to:"/wallet",className:"col-2",children:s.jsx("img",{src:j,alt:""})}),s.jsx("div",{className:"col-8",children:"Withdraw History"}),s.jsx("div",{className:"col-2",children:s.jsx("img",{src:v,alt:"",className:"header_headphone"})})]})}),s.jsx("div",{className:"withdrawalHistory-body",children:t&&t.data.withdrawalHistory.map((e,a)=>s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-4",children:s.jsx("div",{children:"Order Id:"})}),s.jsx("div",{className:"col-8",children:e._id}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:"Amount: "})}),s.jsx("div",{className:"col-8",children:e.withdrawAmount}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Status:"})})}),s.jsx("div",{className:"col-8",style:{color:d(e.status)},children:e.status}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Type:"})})}),s.jsx("div",{className:"col-8",children:s.jsx("p",{children:" Bank Card"})}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Time:"})})}),s.jsx("div",{className:"col-8",children:s.jsx("p",{children:new Date(e.createdAt).toLocaleString()})})]})},a))})]})}export{H as default};
