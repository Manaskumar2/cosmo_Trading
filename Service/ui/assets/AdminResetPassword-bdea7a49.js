import{d as l,h as u,r as i,j as s}from"./index-799dec72.js";import{A as m,S as h}from"./Side-03b897cd.js";import{I as p,_ as x}from"./index-2409d4c2.js";import{a as f}from"./axios-4a70c6fc.js";const j={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function g(){const d=l(u),[t,a]=i.useState(""),[r,o]=i.useState(""),c=async()=>{try{let e=d.authToken;const n=await f.patch("https://cosmotrade.live/api//changePassword",{password:t,confirmPassword:r},{headers:{Authorization:`Bearer ${e}`}});if(n.status===201)return x.success("Password Changed Successfully",{...j}),a(""),o(""),n}catch(e){e.response?e.response.data.message:e.message}};return s.jsxs("div",{children:[s.jsx(m,{}),s.jsxs("div",{children:[s.jsx(h,{}),s.jsx("div",{children:s.jsxs("div",{className:"security",children:[s.jsx(p,{}),s.jsx("div",{className:"sucurity-body",children:s.jsxs("div",{className:"security-form",children:[s.jsx("p",{children:"Password"}),s.jsx("input",{type:"text",placeholder:"Enter Password",value:t,onChange:e=>{a(e.target.value)}}),s.jsx("p",{children:"Confirm Password"}),s.jsx("input",{type:"text",placeholder:"Confirm Password",value:r,onChange:e=>{o(e.target.value)}}),s.jsx("button",{onClick:c,children:"Submit"})]})})]})})]})]})}export{g as default,j as toastProps};
