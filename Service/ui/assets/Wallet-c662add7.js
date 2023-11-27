import{u as p,b as g,A as v,R as d,r as N,j as s,L as w}from"./index-7972bc9e.js";import{b as u}from"./back-button 1-53e9bab3.js";import{e as f}from"./earphone-d19d035b.js";import{p as y,c as W}from"./prime-6680e2a5.js";import{w as k,r as b,a as C}from"./reload 1-451f7926.js";import{N as I}from"./Nav-4bedcb46.js";import{U as D}from"./UserDetails-1b622fd3.js";import{a as m}from"./axios-4a70c6fc.js";import{n as o}from"./next-1bd5c184.js";import{W as R}from"./WithdrawHistory-2cf31ad5.js";import"./Auth-d7e9c41d.js";const T="/assets/transfer-334a90e1.svg";const U="/assets/wallet-2 1-a7b9c802.svg",A="/assets/wallet-3 1-db6d324b.svg";function q(){const a=p(),l=g(v),[t,h]=d(D),[i,x]=d(R),n=async()=>{try{let e=l.authToken,c=l.UID;const r=await m.get(`https://cosmotrade.live/api/getUserProfile/${c}`,{headers:{Authorization:`Bearer ${e}`}});if(r.status===200)return h(r),r}catch(e){if(e.response.status||e.status===403)return localStorage.removeItem("authUserToken"),a("/signIn"),response;e.response?e.response.data.message:e.message}},j=async()=>{try{let e=l.authToken,c=l._id;const r=await m.get(`https://cosmotrade.live/api/getWithdrawalHistory/${c}`,{headers:{Authorization:`Bearer ${e}`}});if(r.status===200)return x(r),r}catch(e){if(e.response.status===403)return a("/signIn"),response;e.response?e.response.data.message:e.message}};return N.useEffect(()=>{j(),n()},[]),s.jsxs("div",{className:"WalletContainer",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(w,{to:"/",className:"col-2",children:s.jsx("img",{src:u,alt:""})}),s.jsx("div",{className:"col-8",children:"Wallet"}),s.jsx("div",{className:"col-2",style:{textAlign:"right"},onClick:()=>{a("/customerCare")},children:s.jsx("img",{src:f,alt:"",className:"header_headphone"})})]})}),s.jsxs("div",{className:"wallet-card",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row wallet-pro-row",children:[s.jsx("div",{className:"col-4",children:s.jsxs("div",{className:"img-cover-wallet",children:[s.jsx("img",{src:y,alt:""}),t&&t.data.data.userDetails.isPremiumUser===!0&&s.jsx("img",{src:W,alt:"",className:"prime-crown"})]})}),s.jsx("div",{className:"col-8",children:s.jsxs("div",{className:"userData",children:[s.jsxs("p",{children:["Name : ",t&&t.data.data.userDetails.name]}),s.jsxs("p",{children:["ID : ",l.UID]}),s.jsxs("p",{children:["Mobile : ",l.phoneNumber]})]})})]})}),s.jsxs("div",{className:"wallet",children:[s.jsxs("div",{className:"container winWallet",children:[s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[s.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),s.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),s.jsx("div",{className:"col-4",style:{textAlign:"right"},children:s.jsx("img",{src:k,alt:""})}),s.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[s.jsx("img",{src:b,alt:""}),t&&t.data.data.userDetails.walletAmount.toFixed(2)," ",s.jsx("img",{src:C,alt:"",style:{marginLeft:10},onClick:n})]})]}),s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row history-row ",children:[s.jsxs("div",{className:"col-6",style:{padding:"0"},children:[s.jsx("h6",{children:"Total Withdraw"}),i&&s.jsxs("p",{children:["₹ ",i.data.totalWithdrawAmount]})]}),s.jsxs("div",{className:"col-6",style:{padding:"0"},children:[s.jsx("h6",{children:"Today's Withdraw"}),i&&s.jsxs("p",{children:["₹ ",i.data.todayTotalWithdrawAmount]})]})]})})]}),s.jsx("div",{className:"container ",children:s.jsxs("div",{className:"row wr-btns",style:{borderTop:"0"},children:[s.jsx("div",{className:"col-6 ",children:s.jsx("button",{className:"withdraw",onClick:()=>{a("/withdraw")},children:"Withdraw"})}),s.jsx("div",{className:"col-6 ",children:s.jsx("button",{className:"recharge",onClick:()=>{a("/recharge")},children:"Recharge"})})]})}),s.jsxs("div",{className:"container chart",style:{marginBottom:"8rem"},children:[s.jsxs("div",{className:"row",onClick:()=>{a("/rechargeRecord")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:U,alt:""})})}),s.jsx("div",{className:"col-8 lvlContainer",children:"Recharge Record "}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:o,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/withdrawRecord")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:A,alt:""})})}),s.jsx("div",{className:"col-8 lvlContainer",children:"Withdraw Record"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:o,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/walletTransfer")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:T,alt:""})})}),s.jsx("div",{className:"col-8 lvlContainer",children:"Wallet to Wallet Transfer"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:o,alt:""})})]})]})]})]}),s.jsx(I,{})]})}export{q as default};
