import{R as j,r as o,u as N,j as s,L as v}from"./index-1b62f91a.js";import{l as f}from"./Cosmo Logo-1a4c0b51.js";import{a as b}from"./axios-4a70c6fc.js";import{I as w,_ as x}from"./index-474ab58a.js";const u={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function S(){const[i,n]=o.useState(!1),[r,c]=o.useState(""),[l,d]=o.useState(""),[t,h]=o.useState(!1),m=N(),p=async a=>{if(!i){a.preventDefault(),n(!0);try{const e=await b.post("https://cosmotrade.live/api/signIn",{phoneNumber:r,password:l});if(e.status===200)return x.success("Welcome to our Gaming Zone",{...u}),sessionStorage.setItem("authToken",JSON.stringify(e.data.data)),c(""),d(""),n(!1),console.log(e),m("/"),window.location.reload(),e}catch(e){const g=e.response?e.response.data.message:e.message;x.error(g||"Something went wrong",{...u}),n(!1)}}};return s.jsx("div",{className:"desktop",children:s.jsx("div",{className:"login",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("div",{className:"logo-container",children:s.jsx("img",{src:f,alt:"",className:"logo"})}),s.jsxs("div",{className:"login-container",children:[s.jsx("h3",{className:"title",children:"Log In"}),s.jsx(w,{}),s.jsxs("form",{onSubmit:p,className:"container-fluid",children:[s.jsxs("div",{className:"inputBox",children:[s.jsxs("div",{className:"inputBoxInner",children:[s.jsx("div",{className:"front",children:"+91"}),s.jsx("div",{children:s.jsx("input",{type:"number",placeholder:"Phone Number",onChange:a=>c(a.target.value),value:r})})]}),s.jsx("div",{className:"back-icon",children:s.jsx("i",{className:"icon-mobile"})})]}),s.jsxs("div",{className:"inputBox",children:[s.jsxs("div",{className:"inputBoxInner",children:[s.jsx("div",{className:"front",children:s.jsx("i",{className:"icon-lock"})}),s.jsx("div",{children:s.jsx("input",{type:t?"text":"password",placeholder:"Password",onChange:a=>d(a.target.value),value:l})})]}),s.jsx("div",{className:"back-icon",onClick:()=>h(!t),children:s.jsx("i",{className:"icon-eye"})})]}),s.jsx("div",{className:"forget",children:s.jsx(v,{to:"/forgotPassword",children:"Forgot Password?"})}),s.jsxs("div",{className:"btn-container",children:[s.jsx("button",{className:"top-btn",type:"submit",children:i?s.jsx("div",{className:"loader"}):"LogIn"}),s.jsx("button",{className:"bot-btn",onClick:()=>m("/signUp"),children:"Register"})]})]})]})]})})})}const L=j.memo(S);export{L as default,u as toastProps};
