import{r,d as v,A as N,j as e,L as y}from"./index-a5997d89.js";import{M as D}from"./index-ae0efb9f.js";/* empty css                        */import{b}from"./back-button 1-53e9bab3.js";import{a as h}from"./axios-4a70c6fc.js";import{I as S,_ as o}from"./index-d54c6c30.js";import"./index-0f266f4f.js";import"./react-lifecycles-compat.es-22c986ff.js";const n={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function W(){const[a,x]=r.useState(null),d=v(N),[i,u]=r.useState(""),[l,m]=r.useState(""),[j,c]=r.useState(!1),f=async()=>{try{let s=d.authToken;(await h.post("https://cosmotrade.live/api/walletToWallet",{amount:l,receiverUID:i},{headers:{Authorization:`Bearer ${s}`}})).status===200&&(o.success("Amount successfully Sent!",{...n}),m(""),u(""),c(!1))}catch(s){if(s.response&&s.response.status===400){const t="You cannot send money until remaining bet amount 0";o.error(t,{...n})}else{const t=s.response?s.response.data.message:s.message;o.error(t||"Something went wrong",{...n})}}},p=()=>{c(!1)},g=async()=>{try{let s=d.authToken;const t=await h.get(`https://cosmotrade.live/api/getUserProfile/${i} `,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return x(t.data),c(!0),t}catch(s){const t=s.response?s.response.data.message:s.message;o.error(t||"Something went wrong",{...n})}};return e.jsxs("div",{className:"security",children:[e.jsx(S,{}),e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(y,{to:"/profile",className:"col-2",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"col-8",children:"Wallet To Wallet"}),e.jsx("div",{className:"col-2"})]})}),e.jsx("div",{className:"sucurity-body",children:e.jsxs("div",{className:"security-form",children:[e.jsx("p",{children:"UID"}),e.jsx("input",{type:"text",placeholder:"Enter UID",value:i,onChange:s=>{u(s.target.value)}}),e.jsx("p",{children:"Amount"}),e.jsx("input",{type:"text",placeholder:"Enter Amount",value:l,onChange:s=>{m(s.target.value)}}),e.jsx("button",{onClick:()=>{g()},children:"SUBMIT"})]})}),e.jsx(D,{isOpen:j,onRequestClose:p,children:e.jsxs("div",{className:"modal-body-w2w",children:[e.jsx("div",{children:a&&e.jsxs("div",{className:"userDetaisW2W",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["Name: ",a.data.userDetails.name]}),e.jsxs("p",{children:["UID: ",a.data.userDetails.UID]}),e.jsxs("p",{children:["Phone no: ",a.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Amount: ",l]})]})}),e.jsx("button",{className:"confirm",onClick:f,children:"Confirm Submit"}),e.jsx("button",{className:"close",onClick:p,children:"Close"})]})})]})}export{W as default,n as toastProps};