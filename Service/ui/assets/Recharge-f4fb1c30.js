import{r,a as j,u,d as g,j as e,L as N}from"./index-03b010d5.js";import{U as v}from"./UserDetails-795ad31e.js";import{b as p}from"./back-button 1-53e9bab3.js";import{w as b,r as o,a as y}from"./reload 1-451f7926.js";import{R as f}from"./RechargeAmount-07c55532.js";const R="/assets/qr-code-scan 1-c00cc06d.svg",w="/assets/money-3 1-b2d35f30.svg",C="/assets/Icon-ac243959.svg",k="/assets/balance 1-ce0ce728.svg";function A(){const[a,i]=r.useState(null),[c,d]=r.useState(null),[m,s]=j(f),t=l=>{i(l)},x=l=>{d(l)},h=u(),n=g(v);return e.jsxs("div",{className:"recharge",children:[e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(N,{to:"/wallet",className:"col-2",children:e.jsx("img",{src:p,alt:""})}),e.jsx("div",{className:"col-8",children:"Recharge"}),e.jsx("div",{className:"col-2"})]})}),e.jsx("div",{className:"wallet",children:e.jsx("div",{className:"container winWallet",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:b,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:o,alt:""})," ",n&&n.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:y,alt:"",style:{marginLeft:10}})]})]})})}),e.jsx("div",{className:"text-center payment-heading",children:"Payment Method"}),e.jsx("div",{className:"container recharge-btn",children:e.jsxs("div",{className:"row",children:[e.jsxs("button",{className:`col-6 ${c===10?"transaction":""}`,style:{borderRight:"1px solid #024672",borderBottom:"1px solid #024672",borderRadius:"10px 0 0 0"},onClick:()=>x(10),children:[e.jsx("img",{src:C,alt:""}),e.jsx("p",{children:"Normal UPI"})]}),e.jsxs("button",{className:`col-6 ${c===11?"transaction":""}`,style:{borderBottom:"1px solid #024672",borderRadius:"0 10px 0 0"},children:[e.jsx("img",{src:R,alt:""}),e.jsx("p",{children:"Fast UPI"})]})]})}),e.jsx("div",{className:"container recharge-btn",children:e.jsxs("div",{className:"row",children:[e.jsxs("button",{className:`col-6 ${c===12?"transaction":""}`,style:{borderRight:"1px solid #024672",borderRadius:"0 0 0 10px "},children:[e.jsx("img",{src:k,alt:""}),e.jsx("p",{style:{color:"blue"},children:"Bank Transfer"})]}),e.jsxs("button",{className:`col-6 ${c===13?"transaction":""}`,style:{borderRight:"1px solid #024672",borderRadius:"0 0 10px 0 "},children:[e.jsx("img",{src:w,alt:""}),e.jsx("p",{children:"USDT"})]})]})}),e.jsxs("div",{className:"container-fluid recharge-bottom",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row money-btn-row",children:[e.jsx("button",{className:`col-3 ${a===0?"selected":""}`,onClick:()=>{t(0),s(500)},children:"₹ 500"}),e.jsx("button",{className:`col-3 ${a===1?"selected":""}`,onClick:()=>{t(1),s(1e3)},children:"₹ 1000"}),e.jsx("button",{className:`col-3 ${a===2?"selected":""}`,onClick:()=>{t(2),s(5e3)},children:"₹ 5K"})]})}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row money-btn-row",children:[e.jsx("button",{className:`col-3 ${a===3?"selected":""}`,onClick:()=>{t(3),s(1e4)},children:"₹ 10K"}),e.jsx("button",{className:`col-3 ${a===4?"selected":""}`,onClick:()=>{t(4),s(5e4)},children:"₹ 50K"}),e.jsx("button",{className:`col-3 ${a===5?"selected":""}`,onClick:()=>{t(5),s(1e5)},children:"₹ 100K"})]})}),e.jsx("div",{className:"container",style:{display:"flex",justifyContent:"center"},children:e.jsxs("div",{className:"row input-row",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:o,alt:""})}),e.jsx("div",{className:"col-10",children:e.jsx("input",{value:m,type:"number",onChange:l=>{s(l.target.value)},placeholder:"Enter the amount"})})]})}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"row recharge-Button",children:e.jsx("button",{className:"col-12",onClick:()=>{h("/upi")},children:"Recharge Now"})})})]})]})}export{A as default};