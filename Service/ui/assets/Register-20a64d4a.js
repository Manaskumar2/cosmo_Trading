import{R as P,a as S,r,u as k,b as B,j as e,L as I}from"./index-77c1dd01.js";import{l as L}from"./Cosmo Logo-1a4c0b51.js";import{I as U,_ as d}from"./index-4ba6a497.js";import{a as A}from"./axios-4a70c6fc.js";import{U as _}from"./Uid-ad7e1950.js";const v="/assets/computer-650931f8.svg",m={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function E(){const[$,f]=S(_),[n,h]=r.useState(""),[N,x]=r.useState(""),[o,i]=r.useState(""),[c,u]=r.useState(""),[l,b]=r.useState(!1),[t,p]=r.useState(!1),g=k(),j=B();r.useEffect(()=>{const s=new URLSearchParams(j.search).get("referral");console.log("Referral Code from URL:",s),s&&i(s)},[j.search]);const R=()=>{g("/signIn")},y=async a=>{if(a.preventDefault(),!n||!c||!o||!t){d.error("Phone Number, Password, Referral Code, and Agreement are required",{...m});return}try{const s=await A.post("https://cosmotrade.live/api//SignUp",{phoneNumber:n,password:c,referralCode:o});if(console.log(s),s.status===201)return d.success("Registration Successful",{...m}),f(s),h(""),u(""),i(""),x(""),p(!1),setTimeout(()=>{g("/registered")},1500),console.log(s),s}catch(s){const C=s.response?s.response.data.message:s.message;d.error(C||"Something went wrong",{...m})}},w=()=>{p(!t)};return e.jsx("div",{className:"desktop",children:e.jsx("div",{className:"register",children:e.jsxs("div",{className:"wrapper",children:[e.jsx("div",{className:"logo-container",children:e.jsx("img",{src:L,alt:"",className:"logo"})}),e.jsxs("div",{className:"signup-container",children:[e.jsx("h3",{className:"title",children:"Register"}),e.jsx(U,{}),e.jsxs("form",{onSubmit:y,className:"container-fluid",children:[e.jsx("div",{className:"inputBox",children:e.jsxs("div",{className:"inputBoxInner",children:[e.jsx("div",{className:"front",children:e.jsx("img",{src:v,alt:""})}),e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Name",onChange:a=>x(a.target.value),value:N})})]})}),e.jsxs("div",{className:"inputBox",children:[e.jsxs("div",{className:"inputBoxInner",children:[e.jsx("div",{className:"front",children:"+91"}),e.jsx("div",{children:e.jsx("input",{type:"number",placeholder:"Phone Number",onChange:a=>h(a.target.value),value:n})})]}),e.jsx("div",{className:"back-icon",children:e.jsx("i",{className:"icon-mobile"})})]}),e.jsxs("div",{className:"inputBox",children:[e.jsxs("div",{className:"inputBoxInner",children:[e.jsx("div",{className:"front",children:e.jsx("i",{className:"icon-lock"})}),e.jsx("div",{children:e.jsx("input",{type:l?"text":"password",placeholder:"Password",onChange:a=>u(a.target.value),value:c})})]}),e.jsx("div",{className:"back-icon",onClick:()=>b(!l),children:e.jsx("i",{className:"icon-eye"})})]}),e.jsx("div",{className:"inputBox",children:e.jsxs("div",{className:"inputBoxInner",children:[e.jsx("div",{className:"front",children:e.jsx("img",{src:v,alt:""})}),e.jsx("div",{children:e.jsx("input",{type:"text",placeholder:"Referral Code",onChange:a=>i(a.target.value),value:o})})]})}),e.jsx("div",{className:"policy",children:e.jsxs("label",{children:[e.jsx("input",{type:"checkbox",checked:t,onChange:w})," ","I Agree ",e.jsx(I,{to:"/terms&condition",children:"Privacy Policy"})]})}),e.jsxs("div",{className:"btn-container",children:[e.jsx("button",{className:"top-btn",type:"submit",disabled:!t,children:"Register"}),e.jsx("button",{className:"bot-btn",onClick:R,children:"Already have an account, Log in"})]})]})]})]})})})}const M=P.memo(E);export{M as default,m as toastProps};