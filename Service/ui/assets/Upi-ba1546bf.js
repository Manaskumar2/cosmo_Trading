import{u as P,b as j,A as U,R as w,r as o,j as e,L as S}from"./index-fb6f3282.js";import{b as T}from"./back-button 1-53e9bab3.js";import{a as g}from"./axios-4a70c6fc.js";import{I as A,_ as i}from"./index-0b1ff91c.js";import{R as D,a as E}from"./RechargeAmount-789c1b3e.js";const N="/assets/info 1-30aa90c1.svg",q="/assets/PhonePay 1-a94d93dd.jpg",_="/assets/PhonePay 2-b12572af.jpg",l={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function F(){const d=P(),f=j(D),m=j(U),[r,v]=w(E),[t,y]=o.useState(null),[p,h]=o.useState(""),[n,I]=o.useState(0),b=()=>{const s=document.createElement("textarea");s.innerText=r,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),alert("Amount copied to clipboard!")},C=async()=>{try{let s=m.authToken;(await g.post("https://cosmotrade.live/api/submit-payment",{upiId:t[n].upiId,upiReferenceNo:p,amount:r,qrCode:t[n].qrCode},{headers:{Authorization:`Bearer ${s}`}})).status===201&&(i.success("Recharge request successfully Sent!",{...l}),h(""),v(null),setTimeout(()=>{d("/recharge")},2e3))}catch(s){const a=s.response?s.response.data.message:s.message;i.error(a||"Something went wrong",{...l})}};o.useEffect(()=>{(async()=>{try{let a=m.authToken;const c=await g.get("https://cosmotrade.live/api/getAllImageURLs",{headers:{Authorization:`Bearer ${a}`}});if(c.status===200){const u=c.data,x=u.reverse().findIndex(k=>k.options===f);x!==-1&&(I(x),y(u))}}catch(a){if(a.response.status===403)return d("/signIn"),response;const c=a.response?a.response.data.message:a.message;i.error(c||"Something went wrong",{...l})}})()},[]);const R=()=>{if(t&&t[n]&&t[n].upiId){const s=t[n].upiId,a=document.createElement("textarea");a.value=s,document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),alert("UPI ID copied to clipboard!")}};return e.jsxs("div",{className:"upi",children:[e.jsx(A,{}),e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(S,{to:"/recharge",className:"col-2",children:e.jsx("img",{src:T,alt:""})}),e.jsx("div",{className:"col-8",children:"Recharge"}),e.jsx("div",{className:"col-2"})]})}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step1"}),e.jsx("div",{className:"step-data",children:"Copy UPI Information"})]}),e.jsxs("div",{className:"upiId-container container",children:[t&&e.jsx("img",{src:t[n].qrCode,alt:"",className:"qr-img"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-9",children:[e.jsx("h6",{children:"Amount"}),e.jsx("p",{children:r})]}),e.jsx("div",{className:"col-3",children:e.jsx("button",{onClick:b,children:"Copy"})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-9",children:[e.jsx("h6",{children:"UPI Account"}),t&&e.jsxs("p",{children:[t[n].upiId," "]})]}),e.jsx("div",{className:"col-3",children:e.jsx("button",{onClick:R,children:"Copy"})})]})]}),e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step2"}),e.jsx("div",{className:"step-data",children:"Open online banking or wallet, transfer to the UPI account"})]}),e.jsxs("div",{className:"upiId-container",children:[e.jsx("p",{children:"Transfer the money to the UPI account"}),e.jsxs("p",{style:{marginTop:"1rem"},children:[e.jsx("img",{src:N,alt:"",style:{marginRight:"1rem"}}),"The UPI account may be changed at any time, please do not save The UPI account."]})]}),e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step3"}),e.jsx("div",{className:"step-data",children:"After successful make a transfer Please fill 12 digit of Ref No"})]}),e.jsxs("div",{className:"upiId-container",children:[e.jsx("p",{children:"See the Ref No. example at the bottom"}),e.jsxs("p",{style:{marginTop:"1rem"},children:[e.jsx("img",{src:N,alt:"",style:{marginRight:"1rem",color:"#FBB040"}}),"Please enter Ref No. To complete the recharge"]}),e.jsx("div",{className:"ref-container",children:e.jsx("input",{type:"text",className:"ref",placeholder:"Enter Transaction ID",value:p,onChange:s=>{h(s.target.value)}})})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row upi-btn-row",children:[e.jsx("button",{className:"col-6",style:{background:"linear-gradient(143deg, #B92E34 0%, #DC4C53 100%)"},children:"Cancel"}),e.jsx("button",{className:"col-6",style:{background:"linear-gradient(143deg, #118029 0%, #40CA77 100%)"},onClick:C,children:"Submit"})]})}),e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"ref-txt",children:"Ref No. Example"}),e.jsxs("div",{className:"row ref-imges",children:[e.jsx("img",{src:q,className:"col-6"}),e.jsx("img",{src:_,className:"col-6"})]})]})]})]})}export{F as default,l as toastProps};
