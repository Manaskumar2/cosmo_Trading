import{u as b,r as o,b as m,A as x,j as e,L as A}from"./index-3900eb01.js";import{M as D}from"./index-de5cdfbb.js";import{b as k}from"./back-button 1-53e9bab3.js";import{I as S,_ as d}from"./index-4ff9357e.js";import{a as f}from"./axios-4a70c6fc.js";import{P as U}from"./Premium-5c52e19e.js";/* empty css                        */import"./index-3edee245.js";import"./warning-47ccff0b.js";import"./react-lifecycles-compat.es-22c986ff.js";const u={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function E(){const j=b(),[r,g]=o.useState(null),p=m(x),[P,n]=o.useState(!1),N=m(x),a=m(U),[i,l]=o.useState(null);o.useEffect(()=>{if(a&&a.data&&a.data.data){const s=a.data.data.length;s<50?l(1e4):s>=50&&s<100?l(2e4):l(3e4)}},[a]);const v=async()=>{try{let s=p.UID,t=p.authToken;const c=await f.get(`https://cosmotrade.live/api/getUserProfile/${s} `,{headers:{Authorization:`Bearer ${t}`}});if(c.status===200)return g(c.data),n(!0),c}catch(s){if(s.response.status===403)return j("/signIn"),response;const t=s.response?s.response.data.message:s.message;d.error(t||"Something went wrong",{...u})}},y=async()=>{try{let s=N.authToken;const t=await f.post("https://cosmotrade.live/api/applyPremium",{amount:i},{headers:{Authorization:`Bearer ${s}`}});if(t.status===201)return d.success("Application sent for Premium User",{...u}),n(!1),t}catch(s){const t=s.response?s.response.data.message:s.message;d.error(t||"Something went wrong",{...u})}},h=()=>{n(!1)};return e.jsxs("div",{className:"PremiumApply",children:[e.jsxs("div",{className:"container ProNav",children:[e.jsxs("div",{className:"row",children:[e.jsx(A,{to:"/profile",className:"col-2",children:e.jsx("img",{src:k,alt:""})}),e.jsx("div",{className:"col-8",children:"Prime Membership"})]}),e.jsx(S,{})]}),e.jsxs("div",{className:"Premium-Body",children:[e.jsx("p",{children:"Transaction Amount"}),e.jsx("input",{type:"text",value:i,disabled:!0}),e.jsx("button",{onClick:()=>{v()},className:"premiumApply-Submit",children:"Submit"})]}),e.jsx(D,{isOpen:P,onRequestClose:h,children:e.jsxs("div",{className:"modal-body-w2w",children:[e.jsx("div",{children:r&&e.jsxs("div",{className:"userDetaisW2W",children:[e.jsx("h4",{children:"I Want To Upgrade As A Premium User"}),e.jsxs("p",{children:["Name: ",r.data.userDetails.name]}),e.jsxs("p",{children:["UID: ",r.data.userDetails.UID]}),e.jsxs("p",{children:["Phone no: ",r.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Amount: ",i]})]})}),e.jsx("button",{className:"confirm",onClick:y,children:"Go To Premium"}),e.jsx("button",{className:"close",onClick:h,children:"Close"})]})})]})}export{E as default,u as toastProps};
