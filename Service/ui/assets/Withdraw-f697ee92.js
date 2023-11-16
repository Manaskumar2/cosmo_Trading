import{r as c,b as W,A as D,u as R,j as s,L as I}from"./index-fd44721e.js";import"./UserDetails-6a89ff79.js";import{b as M}from"./back-button 1-53e9bab3.js";import{w as U,r as N,a as F}from"./reload 1-451f7926.js";import{a as h}from"./axios-4a70c6fc.js";import{I as P,_ as x}from"./index-3c233412.js";import{M as $}from"./index-e6096ad0.js";/* empty css                        */import"./index-39c48739.js";import"./warning-77c69b98.js";import"./react-lifecycles-compat.es-22c986ff.js";const E="/assets/money-4 1-73b73fe4.svg",T="/assets/Icon-ac243959.svg",z="/assets/withdraw 1-12e60fee.svg",_="/assets/wallet 2-83b45c74.svg",L="/assets/notification-2 1-2540409e.svg",g="/assets/coins 1-8a437b37.svg",O="/assets/add-7fdb3bfd.svg",v={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function as(){const[f,j]=c.useState(!1),[a,w]=c.useState(null),[n,b]=c.useState(null),l=W(D),[r,o]=c.useState(0),[d,q]=c.useState(100),[k,C]=c.useState(!0),m=()=>{j(!1)},y=async()=>{try{let e=l.authToken,i=l._id;const t=await h.get(`https://cosmotrade.live/api/getBankCard/${i}`,{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return w(t.data.data),t}catch(e){e.response?e.response.data.message:e.message}},u=async()=>{try{let e=l.authToken,i=l.UID;const t=await h.get(`https://cosmotrade.live/api/getUserProfile/${i}`,{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return b(t),t}catch(e){e.response?e.response.data.message:e.message}};c.useEffect(()=>{r>0&&r<5&&o(5),y(),u()},[r]);const A=()=>{r<1e3&&o(e=>e+1)},B=()=>{r>5&&o(e=>e-1)},p=R(),S=async()=>{const e=r*d;if(e<1e5)try{let i=l.authToken;const t=await h.post("https://cosmotrade.live/api/createWithdrawalRequest",{withdrawAmount:e},{headers:{Authorization:`Bearer ${i}`}});if(t.status===200)return x.success("Withdraw Request Sent",{...v}),m(),setTimeout(()=>{p("/wallet")},1200),o(5),t}catch(i){const t=i.response?i.response.data.message:i.message;x.error(t||"Something went wrong",{...v})}else x.error("Please Enter Amount Less Than 100000")};return s.jsxs("div",{className:"recharge",children:[s.jsx("div",{className:"container-fluid PromoNav",children:s.jsxs("div",{className:"row",children:[s.jsx(I,{to:"/wallet",className:"col-2",children:s.jsx("img",{src:M,alt:""})}),s.jsx("div",{className:"col-8",children:"Withdraw"}),s.jsx("div",{className:"col-2"})]})}),s.jsxs("div",{className:"wallet",children:[s.jsx(P,{}),s.jsx("div",{className:"container winWallet",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[s.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),s.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),s.jsx("div",{className:"col-4",style:{textAlign:"right"},children:s.jsx("img",{src:U,alt:""})}),s.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[s.jsx("img",{src:N,alt:""})," ",n&&n.data.data.userDetails.walletAmount.toFixed(2)," ",s.jsx("img",{src:F,alt:"",style:{marginLeft:10},onClick:u})]})]})})]}),s.jsx("div",{className:"text-center payment-heading",children:"Payment Method"}),s.jsx("div",{className:"container recharge-btn",children:s.jsx("div",{className:"row",children:s.jsxs("button",{className:"col-10 transaction",style:{borderRight:"1px solid #024672",borderBottom:"1px solid #024672",borderRadius:"10px "},onClick:()=>C(!k),children:[s.jsx("img",{src:T,alt:""}),s.jsx("p",{children:"Bank Card"})]})})}),s.jsxs("div",{className:"container-fluid recharge-bottom",children:[a?s.jsx("div",{className:"container",children:s.jsx("div",{className:"bankCardBox",children:s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"Your bank Card"}),s.jsxs("p",{children:["User Name: ",a.accountHolderName," "]}),s.jsxs("p",{children:["Bank Name: ",a.bankName," "]}),s.jsxs("p",{children:["Account Number: ",String(a.bankAccountNo).slice(0,4)+"X".repeat(String(a.bankAccountNo).length-6)+String(a.bankAccountNo).slice(-4)]}),s.jsxs("p",{children:["IFSC Code: ",a.ifscCode," "]})]})})}):s.jsx("div",{className:"container",children:s.jsx("div",{className:"bankCardBox",children:s.jsxs(s.Fragment,{children:[s.jsx("h4",{children:"You have not added your Bank Card."}),s.jsx("h4",{children:"Please add Bank Card first."})]})})}),s.jsx("div",{className:"container",style:{display:"flex",justifyContent:"center"},children:s.jsxs("div",{className:"row inputRow",children:[s.jsx("div",{className:"col-2",children:s.jsx("img",{src:N,alt:""})}),s.jsxs("div",{className:"col-10",children:[s.jsx("input",{value:r*d,type:"number",readOnly:!0}),s.jsxs("div",{className:"withdraw-inc-dec",children:[s.jsx("button",{onClick:B,children:"-"}),s.jsx("input",{type:"number",value:r,onChange:e=>{o(e.target.value)}}),s.jsx("button",{onClick:A,children:"+"})]})]})]})}),s.jsx("p",{className:"payment-heading text-center",children:"Payout"}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"row AddCard-Button",children:s.jsxs("button",{className:"col-11",onClick:()=>p("/bankCard"),children:[s.jsx("img",{src:O,alt:""})," Add Bank Card"]})})}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"row recharge-Button",children:s.jsx("button",{className:"col-12",onClick:()=>{j(!0)},children:"Withdraw"})})}),s.jsxs("div",{className:"container withdraw-chart",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:E,alt:""})})}),s.jsx("div",{className:"col-10",children:"1. Rate 0%"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:_,alt:""})})}),s.jsxs("div",{className:"col-10",children:["2. Remaining Bet Amount ₹ ",n&&n.data.data.userDetails.rechargeAmount]})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:z,alt:""})})}),s.jsx("div",{className:"col-10",children:"3.Withdraw Time 00:00-23:59"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:L,alt:""})})}),s.jsx("div",{className:"col-10",children:"4.Daily Withdrawal Times 3"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:g,alt:""})})}),s.jsx("div",{className:"col-10",children:"5. Withdrawal Amount Range 500-10000000"})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:g,alt:""})})}),s.jsx("div",{className:"col-10",children:"6. Withdrawal multiple of ₹100"})]})]})]}),s.jsx($,{isOpen:f,onRequestClose:m,children:s.jsxs("div",{className:"modal-body-w2w",children:[s.jsxs("div",{children:[n&&s.jsxs("div",{className:"userDetaisW2W",children:[s.jsx("h2",{children:"User Details"}),s.jsxs("p",{children:["Name: ",n.data.data.userDetails.name]}),s.jsxs("p",{children:["UID: ",n.data.data.userDetails.UID]}),s.jsxs("p",{children:["Phone no: ",n.data.data.userDetails.phoneNumber]})]}),a&&s.jsx("div",{className:"container",children:s.jsx("div",{className:"bankCardBox",children:s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"Your bank Card"}),s.jsxs("p",{children:["User Name: ",a.accountHolderName," "]}),s.jsxs("p",{children:["Bank Name: ",a.bankName," "]}),s.jsxs("p",{children:["Account Number: ",String(a.bankAccountNo).slice(0,4)+"X".repeat(String(a.bankAccountNo).length-6)+String(a.bankAccountNo).slice(-4)]}),s.jsxs("p",{children:["IFSC Code: ",a.ifscCode," "]}),s.jsxs("p",{children:["Amount: ",r*d]})]})})})]}),s.jsx("button",{className:"confirm",onClick:S,children:"Confirm Submit"}),s.jsx("button",{className:"close",onClick:m,children:"Close"})]})})]})}export{as as default,v as toastProps};