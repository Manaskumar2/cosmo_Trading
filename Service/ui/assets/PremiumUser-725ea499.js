import{u as P,r as i,b as C,h as U,j as e}from"./index-fb6f3282.js";import{A as k,S as T}from"./Side-85a48bda.js";import{a as m}from"./axios-4a70c6fc.js";/* empty css             */import"./Premium-2ea8363d.js";/* empty css                   */import{I as B,_ as a}from"./index-0b1ff91c.js";import{M as d}from"./Modal-0bcf0240.js";import"./setPrototypeOf-b034ded9.js";import"./TransitionWrapper-28910251.js";import"./createWithBsPrefix-b677ce73.js";import"./index-d73fc5c1.js";const l={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function W(){const b=P(),[c,h]=i.useState(""),[o,S]=i.useState(1),[f,u]=i.useState(!1),p=()=>u(!1),A=()=>u(!0),x=s=>{S(s)},j=C(U),[t,w]=i.useState(null),g=async()=>{try{let s=j.authToken;const n=await m.get(`https://cosmotrade.live/api/admin/getPremiumUsers?&page=${o}`,{headers:{Authorization:`Bearer ${s}`}});if(n.status===200)return w(n.data),n}catch(s){const n=s.response?s.response.data.message:s.message;a.error(n||"Something went wrong",{...l})}},y=async()=>{try{let s=j.authToken;const n=await m.post("https://cosmotrade.live/api/admin/franchisecommissions",{amount:c},{headers:{Authorization:`Bearer ${s}`}});if(n.status===200)return g(),a.success("Commission Successfully Distributed!",{...l}),p(),h(""),n}catch(s){const n=s.response?s.response.data.message:s.message;a.error(n||"Something went wrong",{...l})}};i.useEffect(()=>{g()},[o]);const N=async(s,n)=>{try{const r=await m.post("https://cosmotrade.live/api/signIn",{phoneNumber:s,password:n});if(r.status===200)return a.success("Welcome to our Gaming Zone",{...l}),sessionStorage.setItem("authUserToken",JSON.stringify(r.data.data)),b("/"),window.location.reload(),r}catch(r){const v=r.response?r.response.data.message:r.message;a.error(v||"Something went wrong",{...l})}};return e.jsxs("div",{children:[e.jsx(k,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(T,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("div",{className:"Amount-distribution-box",children:[e.jsx("h5",{children:"Enter Premium Member Distribution Amount"}),e.jsx("div",{children:e.jsx("input",{type:"number",value:c,onChange:s=>{h(s.target.value)},placeholder:"Enter Amount"})}),e.jsx("button",{onClick:A,children:"SEND COMMISSION"})]}),e.jsx(B,{}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row table-heading-admin",children:[e.jsx("th",{children:"Serial No."}),e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Total Betting Amount"}),e.jsx("th",{children:"Today Betting Amount"}),e.jsx("th",{children:"Commission Amount"}),e.jsx("th",{children:"Wallet Amount"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:t&&t.response&&t.response.getUsers&&t.response.getUsers.map((s,n)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:(o-1)*20+n+1}),e.jsx("td",{children:s.UID}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.phoneNumber}),s.bettingAmount?e.jsx("td",{children:s.bettingAmount.toFixed(2)}):e.jsx("td",{children:"0"}),s.dailyTotalBettingAmount?e.jsx("td",{children:s.dailyTotalBettingAmount.toFixed(2)}):e.jsx("td",{children:"0"}),e.jsx("td",{children:s.commissionAmount.toFixed(2)}),e.jsx("td",{children:s.walletAmount.toFixed(2)}),e.jsx("td",{children:e.jsx("button",{onClick:()=>{N(s.phoneNumber,s.password)},className:"login-user",children:"Login"})})]},n))})]}),t&&t.response&&t.response.totalPages&&e.jsxs("div",{className:"pagination-prime",children:[e.jsx("button",{onClick:()=>x(o-1),disabled:o===1,children:"-"}),e.jsxs("span",{children:[o," / ",t&&t.response&&t.response.getUsers&&t.response.totalPages]}),e.jsx("button",{onClick:()=>x(o+1),disabled:o===t.response.totalPages,children:"+"})]}),e.jsxs(d,{show:f,onHide:p,centered:!0,children:[e.jsx(d.Header,{closeButton:!0,children:e.jsx(d.Title,{children:"Premium Commission Details"})}),e.jsx(d.Body,{className:"userModalBody",children:t&&t.response&&t.response.getUsers&&e.jsxs("div",{children:[e.jsxs("p",{children:["Total Prime User : ",t&&t.response&&t.response.getUsers&&t.response.totalpremiumUsers]}),e.jsxs("p",{children:["Total Amount : ",c]}),e.jsxs("p",{children:["Distribution Amount : ",(c/t.response.totalpremiumUsers).toFixed(2)]})]})}),e.jsx(d.Footer,{children:e.jsx("button",{type:"button",class:"btn btn-primary",onClick:y,children:"Confirm Submit"})})]})]})]})]})}export{W as default,l as toastProps};
