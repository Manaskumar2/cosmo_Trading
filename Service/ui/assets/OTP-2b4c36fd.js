import{u as i,r as l,j as s}from"./index-70e3bcd7.js";import{h as d}from"./headset-d678c6e4.js";import{b as m}from"./back-button 1-53e9bab3.js";import{I as p,_ as x}from"./index-4ecd74d8.js";import{a as h}from"./axios-4a70c6fc.js";const j="/assets/resend-56d38e33.svg",u={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function P(){const a=i(),[t,o]=l.useState(""),n=async r=>{r.preventDefault();try{const e=await h.post("https://cosmotrade.live/api/verifyOtp",{otp:t});if(console.log(e),e.status===200)return o(""),a("/resetPassword"),console.log(e),e}catch(e){const c=e.response?e.response.data.message:e.message;x.error(c||"Something went wrong",{...u});return}};return s.jsx("div",{className:"desktop",children:s.jsx("div",{className:"forgotPage",children:s.jsxs("div",{className:"wrapper",children:[s.jsx("div",{className:"top",children:s.jsxs("div",{className:"row",children:[s.jsx(p,{}),s.jsx("div",{className:"col-2 ",children:s.jsx("button",{className:"back-btn back",onClick:()=>{a("/forgotPassword")},children:s.jsx("img",{src:m,alt:""})})}),s.jsx("div",{className:"col-8",children:"Forgot Password"}),s.jsx("div",{className:"col-2",children:s.jsx("img",{src:d,alt:"",className:"head"})})]})}),s.jsxs("form",{onSubmit:n,className:"container-fluid",children:[s.jsxs("div",{className:"inputBox",children:[s.jsxs("div",{className:"inputBoxInner",children:[s.jsx("div",{className:"front",children:"OTP"}),s.jsx("div",{children:s.jsx("input",{type:"number",placeholder:"Enter OTP",value:t,onChange:r=>o(r.target.value)})})]}),s.jsx("div",{className:"back-icon",children:s.jsx("i",{className:"icon-mobile"})})]}),s.jsx("div",{className:"otp",children:s.jsx("p",{children:"Enter your OTP, which sent by SMS to mobile number XXXXXX4444"})}),s.jsx("div",{className:"resend",children:s.jsxs("button",{children:[s.jsx("img",{src:j,alt:""}),"Resend OTP"]})}),s.jsxs("div",{className:"passwordChange-btn",children:[s.jsx("button",{className:"top-btn",type:"submit",children:"Verify"}),s.jsx("button",{className:"bot-btn",onClick:()=>{a("/forgotPassword")},children:"Back"})]})]})]})})})}export{P as default,u as toastProps};