import{u as w,r,d as I,A as S,j as e,L as b}from"./index-43c64abb.js";import{M as U}from"./index-8b13d963.js";/* empty css                        */import{b as k}from"./back-button 1-53e9bab3.js";import{a as u}from"./axios-4a70c6fc.js";import{I as A,_ as n}from"./index-9d96b1fb.js";import"./index-5cca5b3a.js";import"./react-lifecycles-compat.es-22c986ff.js";const T="/assets/receive-bb5ee324.svg",M="/assets/send-989cf09b.svg",o={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function L(){const g=w(),[m,j]=r.useState(null),[l,v]=r.useState(null),a=I(S),[c,h]=r.useState(0),[i,p]=r.useState(""),[y,d]=r.useState(!1),N=async()=>{try{let s=a.authToken;(await u.post("https://cosmotrade.live/api/walletToWallet",{amount:i,receiverUID:c},{headers:{Authorization:`Bearer ${s}`}})).status===200&&(n.success("Amount successfully Sent!",{...o}),p(""),h(0),d(!1),f())}catch(s){if(s.response&&s.response.status===400){const t="You cannot send money until remaining bet amount 0";n.error(t,{...o})}else{const t=s.response?s.response.data.message:s.message;n.error(t||"Something went wrong",{...o})}}},x=()=>{d(!1)},D=async()=>{try{let s=a.authToken;const t=await u.get(`https://cosmotrade.live/api/getUserProfile/${c} `,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return v(t.data),d(!0),t}catch(s){const t=s.response?s.response.data.message:s.message;n.error(t||"Something went wrong",{...o})}},f=async()=>{try{let s=a.authToken;const t=await u.get("https://cosmotrade.live/api/getwalletToWallet ",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return j(t.data),t}catch(s){if(s.response.status===403)return g("/signIn"),response;const t=s.response?s.response.data.message:s.message;n.error(t||"Something went wrong",{...o})}};return r.useEffect(()=>{f()},[]),e.jsxs("div",{className:"security",children:[e.jsx(A,{}),e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(b,{to:"/profile",className:"col-2",children:e.jsx("img",{src:k,alt:""})}),e.jsx("div",{className:"col-8",children:"Wallet To Wallet"}),e.jsx("div",{className:"col-2"})]})}),e.jsxs("div",{className:"sucurity-body ",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsxs("div",{className:"security-form ",children:[e.jsx("p",{style:{color:"#fff",marginTop:"1rem"},children:"UID"}),e.jsx("input",{type:"text",placeholder:"Enter UID",value:c,onChange:s=>{h(s.target.value)}}),e.jsx("p",{style:{color:"#fff",marginTop:"1rem"},children:"Amount"}),e.jsx("input",{type:"text",placeholder:"Enter Amount",value:i,onChange:s=>{p(s.target.value)}}),e.jsx("button",{onClick:()=>{D()},children:"SUBMIT"})]}),e.jsx("div",{className:"container",style:{margin:"2.5rem 0"},children:m&&m.data.map((s,t)=>e.jsxs("div",{className:"row transaction-data",children:[e.jsx("div",{className:"col-3",children:a.UID===s.sender?e.jsx("img",{src:M,alt:""}):e.jsx("img",{src:T,alt:""})}),e.jsxs("div",{className:"col-6",children:["  ",e.jsx("p",{style:{textAlign:"left"},children:a.UID===s.sender?s.receiver:s.sender}),e.jsx("p",{style:{fontSize:".8rem",textAlign:"left"},children:new Date(s.createdAt).toLocaleString()})]}),e.jsx("div",{className:`col-3 ${a.UID===s.sender?"text-red":"text-green"}`,children:a.UID===s.sender?e.jsxs("span",{children:["- ₹",s.amount]}):e.jsxs("span",{className:"text-green",children:["+ ₹",s.amount]})})]},t))})]}),e.jsx(U,{isOpen:y,onRequestClose:x,children:e.jsxs("div",{className:"modal-body-w2w",children:[e.jsx("div",{children:l&&e.jsxs("div",{className:"userDetaisW2W",children:[e.jsx("h2",{children:"User Details"}),e.jsxs("p",{children:["Name: ",l.data.userDetails.name]}),e.jsxs("p",{children:["UID: ",l.data.userDetails.UID]}),e.jsxs("p",{children:["Phone no: ",l.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Amount: ",i]})]})}),e.jsx("button",{className:"confirm",onClick:N,children:"Confirm Submit"}),e.jsx("button",{className:"close",onClick:x,children:"Close"})]})})]})}export{L as default,o as toastProps};
