import{a as t,j as s,L as o}from"./index-77c1dd01.js";import{b as d}from"./back-button 1-53e9bab3.js";import{e as l}from"./earphone-d19d035b.js";import{W as c}from"./WithdrawHistory-68afdbe1.js";function j(){const[r,n]=t(c),e=a=>a==="pending"?"orange":a==="confirmed"?"green":"red";return s.jsxs("div",{className:"withdrawHistoryPage",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(o,{to:"/wallet",className:"col-2",children:s.jsx("img",{src:d,alt:""})}),s.jsx("div",{className:"col-8",children:"Withdraw History"}),s.jsx("div",{className:"col-2",children:s.jsx("img",{src:l,alt:"",className:"header_headphone"})})]})}),s.jsx("div",{className:"withdrawalHistory-body",children:r&&r.data.withdrawalHistory.map((a,i)=>s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-8",children:[a._id,s.jsxs("div",{children:["Amount: ",a.withdrawAmount]})]}),s.jsxs("div",{className:"col-4",style:{color:e(a.status)},children:[s.jsx("p",{children:"Status:"}),a.status]})]})},i))})]})}export{j as default};
