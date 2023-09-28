import{d as k,A as R,r as o,j as e}from"./index-5558fa30.js";import{A as S,S as b}from"./Side-3233b3ca.js";import{a as c}from"./axios-4a70c6fc.js";import{A as d}from"./Accordion-6edc81e6.js";import{I as U,_ as g}from"./index-98c2b582.js";import"./TransitionWrapper-e516f814.js";const j={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Q(){const n=k(R),[i,f]=o.useState(null),[l,u]=o.useState(""),[h,p]=o.useState(""),[m,y]=o.useState(null),v=async s=>{s.preventDefault();try{let t=n._id,a=n.authToken;const r=await c.post(`https://cosmotrade.live/api//admin/uploadQrcode/${t}`,{upiId:l,qrCode:h},{headers:{Authorization:`Bearer ${a}`}});if(r.status===201)return g.success("Qr code uploaded!",{...j}),u(""),p(""),console.log(r),r}catch(t){t.response?t.response.data.message:t.message}},I=async s=>{try{let t=n.authToken;const a=await c.get(`https://cosmotrade.live/api//admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),f(a),a}catch(t){t.response?t.response.data.message:t.message}},A=async()=>{try{let s=n.authToken;const t=await c.get("https://cosmotrade.live/api//admin/payment-request",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t),y(t.data),t}catch(s){s.response?s.response.data.message:s.message}},x=async(s,t)=>{try{let a=n.authToken;const r=await c.patch(`https://cosmotrade.live/api//admin/confirm-payment/${s}`,{status:t},{headers:{Authorization:`Bearer ${a}`}});if(r.status===200)return g.success("Recharge request confirmed",{...j}),console.log(r),r}catch(a){a.response?a.response.data.message:a.message}};return o.useEffect(()=>{A()},[]),e.jsxs("div",{children:[e.jsx(S,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(b,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(U,{}),e.jsxs("form",{onSubmit:v,className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Qr Code"}),e.jsx("label",{children:"Enter Qr Code Link"}),e.jsx("input",{type:"text",value:h,placeholder:"Enter QR code",onChange:s=>{p(s.target.value)}}),e.jsx("label",{children:"Enter UPI Id"}),e.jsx("input",{type:"text",value:l,placeholder:"Enter UPI Id",onChange:s=>{u(s.target.value)}}),e.jsx("button",{type:"submit",children:"Submit"})]}),m&&m.map((s,t)=>e.jsx(d,{children:e.jsxs(d.Item,{eventKey:t,children:[e.jsxs(d.Header,{onClick:()=>{I(s.userId)},children:[e.jsxs("p",{style:{marginRight:"1.3rem"},children:["User Id: ",s.userId]}),e.jsxs("p",{style:{marginRight:"1.3rem"},children:["Amount: ",s.amount]}),e.jsxs("p",{style:{marginRight:"1.3rem"},children:["Status: ",s.status]})]}),e.jsxs(d.Body,{children:[e.jsxs("p",{children:["UID: ",i&&i.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",i&&i.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Upi ReferenceNo: ",s.upiReferenceNo]}),e.jsxs("p",{children:["Upi Id: ",s.upiId]}),e.jsx("button",{onClick:()=>{x(s._id,"confirm")},children:"Approve"}),e.jsx("button",{onClick:()=>{x(s._id,"cancel")},children:"Reject"})]})]})},t))]})]})]})}export{Q as default,j as toastProps};
