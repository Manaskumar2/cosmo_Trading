import{R as g,h as x,u as l,r as c,j as e,L as r}from"./index-2588f213.js";import{a as d}from"./axios-4a70c6fc.js";import{I as f,_ as a}from"./index-87c62b3c.js";const o={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function y(){const[n,m]=g(x),i=l();c.useEffect(()=>{sessionStorage.getItem("authToken")||i("/admin")},[]);const h=()=>{sessionStorage.removeItem("authToken"),m(null),i("/admin")},p=async()=>{try{let s=n.authToken;const t=await d.delete("https://cosmotrade.live/api/admin/delete",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return a.success("GrowUp history deleted",{...o}),t}catch(s){const t=s.response?s.response.data.message:s.message;a.error(t||"Something went wrong",{...o})}},u=async()=>{try{let s=n.authToken;const t=await d.delete("https://cosmotrade.live/api/admin/deleteRiseUpGameHistory",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return a.success("RiseUp history deleted",{...o}),t}catch(s){const t=s.response?s.response.data.message:s.message;a.error(t||"Something went wrong",{...o})}};return e.jsx("div",{style:{overFlow:"hidden"},children:e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsxs("nav",{class:"navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3",children:[e.jsx("div",{class:"flex-row d-flex",children:e.jsx("p",{class:"navbar-brand",title:"Free Bootstrap 4 Admin Template",style:{marginLeft:"2rem"},children:"Admin Dash Board"})}),e.jsxs("div",{children:[e.jsx("button",{type:"button",class:"btn btn-primary",onClick:p,style:{margin:"0 1rem"},children:"Clear GrowUp History"}),e.jsx("button",{type:"button",class:"btn btn-primary",onClick:u,style:{margin:"0 1rem"},children:"Clear RiseUp History"}),e.jsx("button",{type:"button",class:"btn btn-danger",onClick:h,style:{margin:"0 1rem"},children:"Logout"})]})]})]})})}function w(){const n=l();return c.useEffect(()=>{sessionStorage.getItem("authToken")===null&&n("/admin")},[]),e.jsx("div",{children:e.jsx("div",{class:"col-md-3 col-lg-2 sidebar-offcanvas pl-0",id:"sidebar",role:"navigation",style:{backgroundColor:"#e9ecef"},children:e.jsxs("ul",{class:"nav flex sticky-top pl-0 pt-5 p-3 mt-3 ",children:[e.jsx(r,{to:"/admin/home",children:" Home"}),e.jsx(r,{to:"/admin/user",children:"Users"}),e.jsx(r,{to:"/admin/recharge",children:" Recharge Requests"}),e.jsx(r,{to:"/admin/withdraw",children:" Withdraw Requests"}),e.jsx(r,{to:"/admin/prime",children:" Prime Membership"}),e.jsx(r,{to:"/admin/premiumUsers",children:" Prime Commission"}),e.jsx(r,{to:"/admin/uploadNewsAndImage",children:"Update Ui"}),e.jsx(r,{to:"/admin/createGiftCard",children:"Gift Card"}),e.jsx(r,{to:"/admin/adminResetPassword",children:"Reset Password"})]})})})}export{y as A,w as S};
