import{u as y,r as s,d as f,A,j as e,L as B}from"./index-ca1722cc.js";import{b as S}from"./back-button 1-53e9bab3.js";import{a as w}from"./axios-4a70c6fc.js";const I="/assets/bank-account 1-fc84b11f.svg";function $(){y();const[n,h]=s.useState(""),[r,x]=s.useState(""),[c,m]=s.useState(0),[i,b]=s.useState(""),[o,j]=s.useState(""),[d,v]=s.useState(""),[N,p]=s.useState(0),[u,k]=s.useState(""),g=f(A),C=async a=>{a.preventDefault();try{let t=g.authToken;const l=await w.post("https://cosmotrade.live/api/createbankAccount",{bankName:n,accountHolderName:r,bankAccountNo:c,city:i,ifscCode:o,email:d,bankBranchAddress:u},{headers:{Authorization:`Bearer ${t}`}});if(l.status===201)return console.log(l),l}catch(t){const l=t.response?t.response.data.message:t.message;console.log(l)}};return e.jsxs("div",{className:"bankCard",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(B,{to:"/withdraw",className:"col-2",children:e.jsx("img",{src:S,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"bankCardbody",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row bank-card-head",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:I,alt:""})}),e.jsx("div",{className:"col-10",children:"Add Bank Account"})]})}),e.jsx("div",{className:"form-container",children:e.jsxs("form",{onSubmit:C,children:[e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Name"}),e.jsx("input",{type:"text",placeholder:"It is required",value:n,onChange:a=>{h(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Your Full"}),e.jsx("input",{type:"text",placeholder:"It is required",value:r,onChange:a=>{x(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Account Number"}),e.jsx("input",{type:"number",placeholder:"It is required",value:c,onChange:a=>{m(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"City"}),e.jsx("input",{type:"text",placeholder:"It is required",value:i,onChange:a=>{b(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"IFSC Code"}),e.jsx("input",{type:"text",placeholder:"It is required",value:o,onChange:a=>{j(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Email Address"}),e.jsx("input",{type:"email",placeholder:"It is required",value:d,onChange:a=>{v(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Phone Number"}),e.jsx("input",{type:"text",placeholder:"It is required",value:N,onChange:a=>{p(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Branch Address"}),e.jsx("input",{type:"text",placeholder:"It is required",value:u,onChange:a=>{k(a.target.value)}})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row withdraw-Button",children:e.jsx("button",{className:"col-12",type:"submit",children:"Withdraw"})})})]})})]})]})}export{$ as default};