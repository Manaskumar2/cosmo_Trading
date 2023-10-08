import{u as A,r as s,d as y,A as S,j as e,L as w}from"./index-f906ecb4.js";import{b as I}from"./back-button 1-53e9bab3.js";import{a as q}from"./axios-4a70c6fc.js";import{I as P,_ as l}from"./index-b14a3f42.js";const _="/assets/bank-account 1-fc84b11f.svg";const o={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function F(){A();const[i,d]=s.useState(""),[u,h]=s.useState(""),[r,m]=s.useState(""),[x,b]=s.useState(""),[N,p]=s.useState(""),[c,j]=s.useState(""),[C,g]=s.useState(""),[v,k]=s.useState(""),f=y(S),B=async a=>{if(a.preventDefault(),r!==c){l.error("Bank Account Number and Confirm Bank Account No do not match",{...o});return}try{let t=f.authToken;const n=await q.post("https://cosmotrade.live/api//createbankAccount",{bankName:i,accountHolderName:u,bankAccountNo:r,city:x,ifscCode:N,confirmBankAccountNo:c,bankBranchAddress:v},{headers:{Authorization:`Bearer ${t}`}});if(n.status===201)return d(""),h(""),m(""),b(""),p(""),j(""),k(""),l.success("Bank Card Created Successfully!",{...o}),n}catch(t){const n=t.response?t.response.data.message:t.message;l.error(n||"Something went wrong",{...o})}};return e.jsxs("div",{className:"bankCard",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(w,{to:"/withdraw",className:"col-2",children:e.jsx("img",{src:I,alt:""})}),e.jsx("div",{className:"col-8",children:"Promotion"})]})}),e.jsxs("div",{className:"bankCardbody",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row bank-card-head",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:_,alt:""})}),e.jsx("div",{className:"col-10",children:"Add Bank Account"})]})}),e.jsx(P,{}),e.jsx("div",{className:"form-container",children:e.jsxs("form",{onSubmit:B,children:[e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Name"}),e.jsx("input",{type:"text",placeholder:"It is required",value:i,onChange:a=>{d(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Your Full"}),e.jsx("input",{type:"text",placeholder:"It is required",value:u,onChange:a=>{h(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Account Number"}),e.jsx("input",{type:"text",placeholder:"It is required",value:r,onChange:a=>{m(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Confirm Bank AccountNo"}),e.jsx("input",{type:"password",placeholder:"It is required",value:c,onChange:a=>{j(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"City"}),e.jsx("input",{type:"text",placeholder:"It is required",value:x,onChange:a=>{b(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"IFSC Code"}),e.jsx("input",{type:"text",placeholder:"It is required",value:N,onChange:a=>{p(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Phone Number"}),e.jsx("input",{type:"text",placeholder:"It is required",value:C,onChange:a=>{g(a.target.value)}})]}),e.jsxs("div",{className:"bank-Card-box",children:[e.jsx("label",{className:"label",children:"Bank Branch Address"}),e.jsx("input",{type:"text",placeholder:"It is required",value:v,onChange:a=>{k(a.target.value)}})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row withdraw-Button",children:e.jsx("button",{className:"col-12",type:"submit",children:"Add Bank Card"})})})]})})]})]})}export{F as default,o as toastProps};
