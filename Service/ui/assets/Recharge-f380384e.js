import{b as $,A as B,R as N,r as o,u as S,j as e,L as U}from"./index-555ca70e.js";import{R as A,a as I}from"./RechargeAmount-e94b3cce.js";import"./UserDetails-7050be10.js";import{b as E}from"./back-button 1-53e9bab3.js";import{w as F,r as v,a as P}from"./reload 1-451f7926.js";import{a as _}from"./axios-4a70c6fc.js";import{I as T,_ as D}from"./index-697d60b7.js";const K="/assets/qr-code-scan 1-c00cc06d.svg",M="/assets/money-3 1-b2d35f30.svg",W="/assets/Icon-ac243959.svg",z="/assets/balance 1-ce0ce728.svg",L={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function X(){var u,j,p,g;const i=$(B),[f,d]=N(A),[a,y]=o.useState(null),[l,b]=o.useState(null),[R,t]=N(I),c=s=>{y(s)},m=s=>{b(s)},h=S(),[n,k]=o.useState(null),x=async()=>{try{let s=i.authToken,C=i.UID;const r=await _.get(`https://cosmotrade.live/api/getUserProfile/${C}`,{headers:{Authorization:`Bearer ${s}`}});if(r.status===200)return k(r),r}catch(s){if(s.response.status||s.status===403)return localStorage.removeItem("authUserToken"),h("/signIn"),response;s.response?s.response.data.message:s.message}};o.useEffect(()=>{x()},[]);const w=()=>{f!==""?h("/upi"):D.error("Please select a recharge option.",{...L})};return e.jsxs("div",{className:"recharge",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(U,{to:"/wallet",className:"col-2",children:e.jsx("img",{src:E,alt:""})}),e.jsx("div",{className:"col-8",children:"Recharge"}),e.jsx("div",{className:"col-2"})]})}),e.jsx(T,{}),e.jsx("div",{className:"wallet",children:e.jsx("div",{className:"container winWallet",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:F,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:v,alt:""})," ",((g=(p=(j=(u=n==null?void 0:n.data)==null?void 0:u.data)==null?void 0:j.userDetails)==null?void 0:p.walletAmount)==null?void 0:g.toFixed(2))??0,e.jsx("img",{src:P,alt:"",style:{marginLeft:10},onClick:x})]})]})})}),e.jsx("div",{className:"text-center payment-heading",children:"Payment Method"}),e.jsx("div",{className:"container recharge-btn",children:e.jsxs("div",{className:"row",children:[e.jsxs("button",{className:`col-6 ${l===10?"transaction":""}`,style:{borderRight:"1px solid #024672",borderBottom:"1px solid #024672",borderRadius:"10px 0 0 0"},onClick:()=>{m(10),d("Normal")},children:[e.jsx("img",{src:W,alt:""}),e.jsx("p",{children:"Normal UPI"})]}),e.jsxs("button",{className:`col-6 ${l===11?"transaction":""}`,style:{borderBottom:"1px solid #024672",borderRadius:"0 10px 0 0"},onClick:()=>{m(11),d("Fast")},children:[e.jsx("img",{src:K,alt:""}),e.jsx("p",{children:"Fast UPI"})]})]})}),e.jsx("div",{className:"container recharge-btn",children:e.jsxs("div",{className:"row",children:[e.jsxs("button",{className:`col-6 ${l===12?"transaction":""}`,style:{borderRight:"1px solid #024672",borderRadius:"0 0 0 10px "},children:[e.jsx("img",{src:z,alt:"",style:{opacity:"0.2"}}),e.jsx("p",{style:{opacity:"0.2"},children:"Bank Transfer"})]}),e.jsxs("button",{className:`col-6 ${l===13?"transaction":""}`,style:{borderRight:"1px solid #024672",borderRadius:"0 0 10px 0 "},children:[e.jsx("img",{src:M,alt:"",style:{opacity:"0.2"}}),e.jsx("p",{style:{opacity:"0.2"},children:"USDT"})]})]})}),e.jsxs("div",{className:"container-fluid recharge-bottom",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row money-btn-row",children:[e.jsx("button",{className:`col-3 ${a===0?"selected":""}`,onClick:()=>{c(0),t(500)},children:"₹ 500"}),e.jsx("button",{className:`col-3 ${a===1?"selected":""}`,onClick:()=>{c(1),t(1e3)},children:"₹ 1000"}),e.jsx("button",{className:`col-3 ${a===2?"selected":""}`,onClick:()=>{c(2),t(5e3)},children:"₹ 5K"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row money-btn-row",children:[e.jsx("button",{className:`col-3 ${a===3?"selected":""}`,onClick:()=>{c(3),t(1e4)},children:"₹ 10K"}),e.jsx("button",{className:`col-3 ${a===4?"selected":""}`,onClick:()=>{c(4),t(5e4)},children:"₹ 50K"}),e.jsx("button",{className:`col-3 ${a===5?"selected":""}`,onClick:()=>{c(5),t(1e5)},children:"₹ 100K"})]})}),e.jsx("div",{className:"container",style:{display:"flex",justifyContent:"center"},children:e.jsxs("div",{className:"row input-row",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:v,alt:""})}),e.jsx("div",{className:"col-10",children:e.jsx("input",{value:R,type:"number",onChange:s=>{t(s.target.value)},placeholder:"Enter the amount"})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row recharge-Button",children:e.jsx("button",{className:"col-12",onClick:()=>{w()},children:"Recharge Now"})})})]})]})}export{X as default,L as toastProps};