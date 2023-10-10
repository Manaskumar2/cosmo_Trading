import{u as p,d as v,A as N,a as n,r as g,j as s,L as w}from"./index-a5997d89.js";import{b as u}from"./back-button 1-53e9bab3.js";import{e as f}from"./earphone-d19d035b.js";import{p as y,c as W}from"./prime-6680e2a5.js";import{w as b,r as k,a as C}from"./reload 1-451f7926.js";import{N as D}from"./Nav-735f7ab6.js";import{U as A}from"./UserDetails-4e9fb90b.js";import{a as d}from"./axios-4a70c6fc.js";import{n as m}from"./next-1bd5c184.js";import{W as R}from"./WithdrawHistory-38f4363a.js";/* empty css            */const U="/assets/wallet-2 1-a7b9c802.svg",I="/assets/wallet-3 1-db6d324b.svg";function P(){const t=p(),r=v(N),[l,h]=n(A),[i,x]=n(R),o=async()=>{try{let a=r.authToken,c=r.UID;const e=await d.get(`https://cosmotrade.live/api/getUserProfile/${c}`,{headers:{Authorization:`Bearer ${a}`}});if(e.status===200)return h(e),e}catch(a){a.response?a.response.data.message:a.message}},j=async()=>{try{let a=r.authToken,c=r._id;const e=await d.get(`https://cosmotrade.live/api/getWithdrawalHistory/${c}`,{headers:{Authorization:`Bearer ${a}`}});if(e.status===200)return x(e),e}catch(a){a.response?a.response.data.message:a.message}};return g.useEffect(()=>{j(),o()},[]),s.jsxs("div",{className:"WalletContainer",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(w,{to:"/",className:"col-2",children:s.jsx("img",{src:u,alt:""})}),s.jsx("div",{className:"col-8",children:"Wallet"}),s.jsx("div",{className:"col-2",style:{textAlign:"right"},onClick:()=>{t("/customerCare")},children:s.jsx("img",{src:f,alt:"",className:"header_headphone"})})]})}),s.jsxs("div",{className:"wallet-card",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row wallet-pro-row",children:[s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"img-cover-wallet",children:[s.jsx("img",{src:y,alt:""}),l&&l.data.data.userDetails.isPremiumUser===!0&&s.jsx("img",{src:W,alt:"",className:"prime-crown"})]})}),s.jsx("div",{className:"col-8",children:s.jsxs("div",{className:"userData",children:[s.jsxs("p",{children:["Name : ",l&&l.data.data.userDetails.name]}),s.jsxs("p",{children:["ID : ",r.UID]}),s.jsxs("p",{children:["Mobile : ",r.phoneNumber]})]})})]})}),s.jsxs("div",{className:"wallet",children:[s.jsxs("div",{className:"container winWallet",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[s.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),s.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),s.jsx("div",{className:"col-4",style:{textAlign:"right"},children:s.jsx("img",{src:b,alt:""})}),s.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[s.jsx("img",{src:k,alt:""}),l&&l.data.data.userDetails.walletAmount.toFixed(2)," ",s.jsx("img",{src:C,alt:"",style:{marginLeft:10},onClick:o})]})]}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row history-row",children:[s.jsxs("div",{className:"col-6",children:[s.jsx("h6",{children:"Total Withdraw"}),i&&s.jsxs("p",{children:["₹ ",i.data.totalWithdrawAmount]})]}),s.jsxs("div",{className:"col-6",children:[s.jsx("h6",{children:"Today's Withdraw"}),i&&s.jsxs("p",{children:["₹ ",i.data.todayTotalWithdrawAmount]})]})]})})]}),s.jsx("div",{className:"container ",children:s.jsxs("div",{className:"row wr-btns",style:{borderTop:"0"},children:[s.jsx("div",{className:"col-6 ",children:s.jsx("button",{className:"withdraw",onClick:()=>{t("/withdraw")},children:"Withdraw"})}),s.jsx("div",{className:"col-6 ",children:s.jsx("button",{className:"recharge",onClick:()=>{t("/recharge")},children:"Recharge"})})]})}),s.jsxs("div",{className:"container chart",style:{marginBottom:"8rem"},children:[s.jsxs("div",{className:"row",onClick:()=>{t("/rechargeRecord")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:U,alt:""})})}),s.jsx("div",{className:"col-8 lvlContainer",children:"Recharge Record "}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:m,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{t("/withdrawRecord")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:I,alt:""})})}),s.jsx("div",{className:"col-8 lvlContainer",children:"Withdraw Record"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:m,alt:""})})]})]})]})]}),s.jsx(D,{})]})}export{P as default};
