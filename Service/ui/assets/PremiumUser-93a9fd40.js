import{u as f,r as h,d as S,h as b,a as A,j as e}from"./index-be84e0db.js";import{A as N,S as v}from"./Side-68c2372f.js";import{a as i}from"./axios-4a70c6fc.js";/* empty css             */import{P as w}from"./Premium-e2d22d9c.js";/* empty css                   */import{I as y,_ as n}from"./index-fa9b3787.js";const r={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function _(){const u=f(),[c,m]=h.useState(""),d=S(b),[a,p]=A(w),l=async()=>{try{let s=d.authToken;const t=await i.get("https://cosmotrade.live/api/admin/getPremiumUsers",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t.data),p(t.data),t}catch(s){s.response?s.response.data.message:s.message}},x=async()=>{try{let s=d.authToken;const t=await i.post("https://cosmotrade.live/api/admin/franchisecommissions",{amount:c},{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return l(),n.success("Commission Successfully Distributed!",{...r}),m(""),t}catch(s){const t=s.response?s.response.data.message:s.message;n.error(t||"Something went wrong",{...r})}};h.useEffect(()=>{l()},[]);const j=async(s,t)=>{try{const o=await i.post("https://cosmotrade.live/api//signIn",{phoneNumber:s,password:t});if(o.status===200)return n.success("Welcome to our Gaming Zone",{...r}),sessionStorage.setItem("authUserToken",JSON.stringify(o.data.data)),console.log(o),u("/"),window.location.reload(),o}catch(o){const g=o.response?o.response.data.message:o.message;n.error(g||"Something went wrong",{...r})}};return e.jsxs("div",{children:[e.jsx(N,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(v,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("div",{className:"Amount-distribution-box",children:[e.jsx("h5",{children:"Enter Premium Member Distribution Amount"}),e.jsx("div",{children:e.jsx("input",{type:"number",value:c,onChange:s=>{m(s.target.value)},placeholder:"Enter Amount"})}),e.jsx("button",{onClick:x,children:"SEND COMMISSION"})]}),e.jsx(y,{}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Phone No"}),e.jsx("th",{children:"Commission Amount"}),e.jsx("th",{children:"Wallet Amount"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:a&&a.response&&a.response.getUsers.map((s,t)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:s.UID}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.phoneNumber}),e.jsx("td",{children:s.commissionAmount.toFixed(2)}),e.jsx("td",{children:s.walletAmount.toFixed(2)}),e.jsx("td",{children:e.jsx("button",{onClick:()=>{j(s.phoneNumber,s.password)},className:"login-user",children:"Login"})})]},t))})]})]})]})]})}export{_ as default,r as toastProps};
