import{a as c,j as s,L as d}from"./index-405d8246.js";import{b as l}from"./back-button 1-53e9bab3.js";import{e as n}from"./earphone-d19d035b.js";import{W as o}from"./WithdrawHistory-98762725.js";function v(){const[a,t]=c(o),r=e=>e==="pending"?"orange":e==="confirmed"?"green":"red";return s.jsxs("div",{className:"withdrawHistoryPage",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(d,{to:"/wallet",className:"col-2",children:s.jsx("img",{src:l,alt:""})}),s.jsx("div",{className:"col-8",children:"Withdraw History"}),s.jsx("div",{className:"col-2",children:s.jsx("img",{src:n,alt:"",className:"header_headphone"})})]})}),s.jsx("div",{className:"withdrawalHistory-body",children:a&&a.data.withdrawalHistory.map((e,i)=>s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-4",children:s.jsx("div",{children:"Order Id:"})}),s.jsx("div",{className:"col-8",children:e._id}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:"Amount: "})}),s.jsx("div",{className:"col-8",children:e.withdrawAmount}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Status:"})})}),s.jsx("div",{className:"col-8",style:{color:r(e.status)},children:e.status}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Type:"})})}),s.jsx("div",{className:"col-8",children:s.jsx("p",{children:" Bank Card"})}),s.jsx("div",{className:"col-4",children:s.jsx("div",{children:s.jsx("p",{children:"Time:"})})}),s.jsx("div",{className:"col-8",children:s.jsx("p",{children:new Date(e.createdAt).toLocaleString()})})]})},i))})]})}export{v as default};
