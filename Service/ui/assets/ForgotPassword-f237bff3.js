import{r as d,u as m,j as s}from"./index-f906ecb4.js";import{h}from"./headset-d678c6e4.js";import{b as p}from"./back-button 1-53e9bab3.js";import{I as u,_ as n}from"./index-b14a3f42.js";import{a as x}from"./axios-4a70c6fc.js";const i={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function f(){const[o,t]=d.useState(""),a=m(),c=async r=>{r.preventDefault();try{const e=await x.post("https://cosmotrade.live/api//forgotPassword",{phoneNumber:o});if(e.status===200)return n.success("Welcome to our Gaming Zone",{...i}),t(""),a("/verifyOtp"),e}catch(e){const l=e.response?e.response.data.message:e.message;n.error(l||"Something went wrong",{...i});return}};return s.jsx("div",{className:"desktop",children:s.jsx("div",{className:"forgotPage",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("div",{className:"top ",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2 ",children:s.jsx("button",{className:"back-btn back",onClick:()=>{a("/signIn")},children:s.jsx("img",{src:p,alt:""})})}),s.jsx("div",{className:"col-8",children:"Forgot Password"}),s.jsx("div",{className:"col-2",children:s.jsx("img",{src:h,alt:"",className:"head"})})]})}),s.jsxs("div",{className:"container-fluid",children:[s.jsx(u,{}),s.jsxs("form",{onSubmit:c,children:[s.jsxs("div",{className:"inputBox",children:[s.jsxs("div",{className:"inputBoxInner",children:[s.jsx("div",{className:"front",children:"+91"}),s.jsx("div",{children:s.jsx("input",{type:"number",placeholder:"Phone Number",value:o,onChange:r=>t(r.target.value)})})]}),s.jsx("div",{className:"back-icon",children:s.jsx("i",{className:"icon-mobile"})})]}),s.jsx("div",{className:"otp",children:s.jsx("p",{children:"Enter your register mobile number to get OTP"})}),s.jsxs("div",{className:"passwordChange-btn",children:[s.jsx("button",{className:"top-btn",type:"submit",children:"Get OTP"}),s.jsx("button",{className:"bot-btn",onClick:()=>{a("/signIn")},children:"Back"})]})]})]})]})})})}export{f as default,i as toastProps};
