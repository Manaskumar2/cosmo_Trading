import{b as d,A as u,r as i,j as s,L as m}from"./index-f056ec52.js";/* empty css                        */import{b as f}from"./back-button 1-53e9bab3.js";import{I as p,_ as h}from"./index-0cd8b721.js";import{a as x}from"./axios-4a70c6fc.js";const j={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function N(){const n=d(u),[t,a]=i.useState(""),[o,r]=i.useState(""),l=async()=>{try{let e=n.authToken;const c=await x.patch("https://cosmotrade.live/api/changePassword",{password:t,confirmPassword:o},{headers:{Authorization:`Bearer ${e}`}});if(c.status===201)return h.success("Password Changed Successfully",{...j}),a(""),r(""),c}catch(e){e.response?e.response.data.message:e.message}};return s.jsxs("div",{className:"security",children:[s.jsx(p,{}),s.jsx("div",{className:"container-fluid PromoNav",children:s.jsxs("div",{className:"row",children:[s.jsx(m,{to:"/profile",className:"col-2",children:s.jsx("img",{src:f,alt:""})}),s.jsx("div",{className:"col-8",style:{color:"#fff"},children:"Security"}),s.jsx("div",{className:"col-2"})]})}),s.jsx("div",{className:"sucurity-body",children:s.jsxs("div",{className:"security-form",children:[s.jsx("p",{style:{color:"#fff"},children:"Password"}),s.jsx("input",{type:"text",placeholder:"Enter Password",value:t,onChange:e=>{a(e.target.value)}}),s.jsx("p",{style:{color:"#fff"},children:"Confirm Password"}),s.jsx("input",{type:"text",placeholder:"Confirm Password",value:o,onChange:e=>{r(e.target.value)}}),s.jsx("button",{onClick:l,children:"Submit"})]})})]})}export{N as default,j as toastProps};