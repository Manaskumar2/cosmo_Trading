import{u as d,b as p,A as h,R as u,r as x,j as s,L as j}from"./index-fd44721e.js";import{b}from"./back-button 1-53e9bab3.js";import{a as v}from"./axios-4a70c6fc.js";import{P as N}from"./Premium-f3e0c4c5.js";const P="/assets/prime-0781d305.svg";function A(){const a=d(),o=p(h),[e,l]=u(N),c=async()=>{try{let i=o.authToken;const r=await v.get("https://cosmotrade.live/api/getPremiumUser",{headers:{Authorization:`Bearer ${i}`}});if(r.status===200)return l(r.data),console.log(r),r}catch(i){i.response?i.response.data.message:i.message}};x.useEffect(()=>{c()},[]);const t=e&&e&&e.response&&e.response.totalpremiumUsers<50,m=e&&e.response.totalpremiumUsers>=50&&e.response.totalpremiumUsers<100,n=e&&e.response.totalpremiumUsers>=100&&e.response.totalpremiumUsers<=150;return s.jsxs("div",{className:"premium",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(j,{to:"/profile",className:"col-2",children:s.jsx("img",{src:b,alt:""})}),s.jsx("div",{className:"col-8",children:"Prime Membership"})]})}),s.jsxs("div",{className:"Premium-Body",children:[s.jsxs("div",{className:"join",children:[s.jsx("img",{src:P,alt:""}),s.jsx("h5",{children:"Join Prime Membership &"}),s.jsx("p",{children:"Get 0.5% of total trading commission"})]}),s.jsxs("div",{className:"premium-box",style:{opacity:t?1:.2},children:[s.jsxs("div",{className:"prime-data",children:[s.jsx("h5",{children:"0 TO 50"}),t&&s.jsxs("h5",{children:["Remaining seats ",50-e.response.totalpremiumUsers]}),s.jsx("h4",{children:"₹ 10,000"})]}),s.jsx("div",{className:"join-btn",children:s.jsx("button",{onClick:()=>a("/premiumApply"),disabled:!t,children:"Join Prime Membership"})})]}),s.jsxs("div",{className:"premium-box",style:{opacity:m?1:.2},children:[s.jsxs("div",{className:"prime-data",children:[s.jsx("h5",{children:"50 TO 100"}),m&&s.jsxs("h5",{children:["Remaining seats ",100-e.response.totalpremiumUsers]}),s.jsx("h4",{children:"₹ 20,000"})]}),s.jsx("div",{className:"join-btn",children:s.jsx("button",{onClick:()=>a("/premiumApply"),disabled:!m,children:"Join Prime Membership"})})]}),s.jsxs("div",{className:"premium-box",style:{opacity:n?1:.2},children:[s.jsxs("div",{className:"prime-data",children:[s.jsx("h5",{children:"100 TO 150"}),n&&s.jsxs("h5",{children:["Remaining seats ",150-e.response.totalpremiumUsers]}),s.jsx("h4",{children:"₹ 30,000"})]}),s.jsx("div",{className:"join-btn",children:s.jsx("button",{onClick:()=>a("/premiumApply"),disabled:!n,children:"Join Prime Membership"})})]})]})]})}export{A as default};
