import{d as u,A as I,r as o,j as e,L as C}from"./index-607e5c7b.js";import{b}from"./back-button 1-53e9bab3.js";import{a as x}from"./axios-4a70c6fc.js";import{I as R,_ as l}from"./index-300575e3.js";import{R as k}from"./RechargeAmount-57a0163f.js";const j="/assets/info 1-30aa90c1.svg",P="/assets/PhonePay 1-a94d93dd.jpg",U="/assets/PhonePay 2-b12572af.jpg",d={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function E(){const m=u(I),i=u(k),[a,g]=o.useState(null),[p,h]=o.useState(""),[n,N]=o.useState(0),f=()=>{const s=document.createElement("textarea");s.innerText=i,document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),alert("Amount copied to clipboard!")},v=async()=>{try{let s=m.authToken;(await x.post("https://cosmotrade.live/api/submit-payment",{upiId:a[n].upiId,upiReferenceNo:p,amount:i,qrCode:a[n].qrCode},{headers:{Authorization:`Bearer ${s}`}})).status===201&&(l.success("Recharge request successfully Sent!",{...d}),h(""))}catch(s){const t=s.response?s.response.data.message:s.message;l.error(t||"Something went wrong",{...d})}};o.useEffect(()=>{(async()=>{try{let c=m.authToken;const r=await x.get("https://cosmotrade.live/api/getAllImageURLs",{headers:{Authorization:`Bearer ${c}`}});r.status===200&&g(r.data)}catch(c){const r=c.response?c.response.data.message:c.message;l.error(r||"Something went wrong",{...d})}})();const t=setInterval(()=>{a.length>0&&N(c=>(c+1)%a.length)},60*1e3);return()=>{clearInterval(t)}},[]);const y=()=>{if(a&&a[n]&&a[n].upiId){const s=a[n].upiId,t=document.createElement("textarea");t.value=s,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("UPI ID copied to clipboard!")}};return e.jsxs("div",{className:"upi",children:[e.jsx(R,{}),e.jsx("div",{className:"container-fluid PromoNav",children:e.jsxs("div",{className:"row",children:[e.jsx(C,{to:"/recharge",className:"col-2",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"col-8",children:"Recharge"}),e.jsx("div",{className:"col-2"})]})}),e.jsxs("div",{className:"body",children:[e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step1"}),e.jsx("div",{className:"step-data",children:"Copy UPI Information"})]}),e.jsxs("div",{className:"upiId-container container",children:[a&&e.jsx("img",{src:a[a.length-1].qrCode,alt:"",className:"qr-img"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-9",children:[e.jsx("h6",{children:"Amount"}),e.jsx("p",{children:i})]}),e.jsx("div",{className:"col-3",children:e.jsx("button",{onClick:f,children:"Copy"})})]}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-9",children:[e.jsx("h6",{children:"UPI Account"}),a&&e.jsxs("p",{children:[a[n].upiId," "]})]}),e.jsx("div",{className:"col-3",children:e.jsx("button",{onClick:y,children:"Copy"})})]})]}),e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step2"}),e.jsx("div",{className:"step-data",children:"Open online banking or wallet, transfer to the UPI account"})]}),e.jsxs("div",{className:"upiId-container",children:[e.jsx("p",{children:"Transfer the money to the UPI account"}),e.jsxs("p",{style:{marginTop:"1rem"},children:[e.jsx("img",{src:j,alt:"",style:{marginRight:"1rem"}}),"The UPI account may be changed at any time, please do not save The UPI account."]})]}),e.jsxs("div",{className:"step-container",children:[e.jsx("div",{className:"steps",children:"Step3"}),e.jsx("div",{className:"step-data",children:"After successful make a transfer Please fill 12 digit of Ref No"})]}),e.jsxs("div",{className:"upiId-container",children:[e.jsx("p",{children:"See the Ref No. example at the bottom"}),e.jsxs("p",{style:{marginTop:"1rem"},children:[e.jsx("img",{src:j,alt:"",style:{marginRight:"1rem",color:"#FBB040"}}),"Please enter Ref No. To complete the recharge"]}),e.jsx("div",{className:"ref-container",children:e.jsx("input",{type:"text",className:"ref",placeholder:"Enter Transaction ID",value:p,onChange:s=>{h(s.target.value)}})})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row upi-btn-row",children:[e.jsx("button",{className:"col-6",style:{background:"linear-gradient(143deg, #B92E34 0%, #DC4C53 100%)"},children:"Cancel"}),e.jsx("button",{className:"col-6",style:{background:"linear-gradient(143deg, #118029 0%, #40CA77 100%)"},onClick:v,children:"Submit"})]})}),e.jsxs("div",{className:"container",children:[e.jsx("p",{className:"ref-txt",children:"Ref No. Example"}),e.jsxs("div",{className:"row ref-imges",children:[e.jsx("img",{src:P,className:"col-6"}),e.jsx("img",{src:U,className:"col-6"})]})]})]})]})}export{E as default,d as toastProps};
