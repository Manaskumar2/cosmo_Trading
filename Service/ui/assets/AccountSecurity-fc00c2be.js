import{d,A as u,r as n,j as s,L as m}from"./index-15b3edb6.js";import{b as p}from"./back-button 1-53e9bab3.js";import{I as h,_ as x}from"./index-4f506fee.js";import{a as f}from"./axios-4a70c6fc.js";const j={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function P(){const i=d(u),[a,o]=n.useState(""),[r,c]=n.useState(""),l=async()=>{try{let e=i.authToken;const t=await f.patch("https://cosmotrade.live/api/changePassword",{password:a,confirmPassword:r},{headers:{Authorization:`Bearer ${e}`}});if(t.status===201)return x.success("Password Changed Successfully",{...j}),o(""),c(""),console.log(t),t}catch(e){e.response?e.response.data.message:e.message}};return s.jsxs("div",{className:"security",children:[s.jsx(h,{}),s.jsx("div",{className:"container-fluid PromoNav",children:s.jsxs("div",{className:"row",children:[s.jsx(m,{to:"/profile",className:"col-2",children:s.jsx("img",{src:p,alt:""})}),s.jsx("div",{className:"col-8",children:"Security"}),s.jsx("div",{className:"col-2"})]})}),s.jsx("div",{className:"sucurity-body",children:s.jsxs("div",{className:"security-form",children:[s.jsx("p",{children:"Password"}),s.jsx("input",{type:"text",placeholder:"Enter Password",value:a,onChange:e=>{o(e.target.value)}}),s.jsx("p",{children:"Confirm Password"}),s.jsx("input",{type:"text",placeholder:"Confirm Password",value:r,onChange:e=>{c(e.target.value)}}),s.jsx("button",{onClick:l,children:"Submit"})]})})]})}export{P as default,j as toastProps};
