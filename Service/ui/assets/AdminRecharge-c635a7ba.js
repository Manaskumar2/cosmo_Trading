import{d as A,A as I,r as o,j as e}from"./index-ca1722cc.js";import{A as k,S as R}from"./Side-b99dabed.js";import{a as c}from"./axios-4a70c6fc.js";import{A as d}from"./Accordion-5cda3ef1.js";import"./TransitionWrapper-4c62e7df.js";function D(){const n=A(I),[i,g]=o.useState(null),[l,h]=o.useState(""),[u,p]=o.useState(""),[m,j]=o.useState(null),y=async s=>{s.preventDefault();try{let t=n._id,a=n.authToken;const r=await c.post(`https://cosmotrade.live/api/admin/uploadQrcode/${t}`,{upiId:l,qrCode:u},{headers:{Authorization:`Bearer ${a}`}});if(r.status===201)return h(""),p(""),console.log(r),r}catch(t){t.response?t.response.data.message:t.message}},f=async s=>{try{let t=n.authToken;const a=await c.get(`https://cosmotrade.live/api/admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return console.log(a),g(a),a}catch(t){t.response?t.response.data.message:t.message}},v=async()=>{try{let s=n.authToken;const t=await c.get("https://cosmotrade.live/api/admin/payment-request",{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return console.log(t),j(t.data),t}catch(s){s.response?s.response.data.message:s.message}},x=async(s,t)=>{try{let a=n.authToken;const r=await c.patch(`https://cosmotrade.live/api/admin/confirm-payment/${s}`,{status:t},{headers:{Authorization:`Bearer ${a}`}});if(r.status===200)return console.log(r),r}catch(a){a.response?a.response.data.message:a.message}};return o.useEffect(()=>{v()},[]),e.jsxs("div",{children:[e.jsx(k,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(R,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("form",{onSubmit:y,className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Qr Code"}),e.jsx("label",{children:"Enter Qr Code Link"}),e.jsx("input",{type:"text",value:u,placeholder:"Enter QR code",onChange:s=>{p(s.target.value)}}),e.jsx("label",{children:"Enter UPI Id"}),e.jsx("input",{type:"text",value:l,placeholder:"Enter UPI Id",onChange:s=>{h(s.target.value)}}),e.jsx("button",{type:"submit",children:"Submit"})]}),m&&m.map((s,t)=>e.jsx(d,{children:e.jsxs(d.Item,{eventKey:t,children:[e.jsxs(d.Header,{onClick:()=>{f(s.userId)},children:[e.jsxs("p",{style:{marginRight:"1.3rem"},children:["User Id: ",s.userId]}),e.jsxs("p",{style:{marginRight:"1.3rem"},children:["Amount: ",s.amount]}),e.jsxs("p",{style:{marginRight:"1.3rem"},children:["Status: ",s.status]})]}),e.jsxs(d.Body,{children:[e.jsxs("p",{children:["UID: ",i&&i.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",i&&i.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Upi ReferenceNo: ",s.upiReferenceNo]}),e.jsxs("p",{children:["Upi Id: ",s.upiId]}),e.jsx("button",{onClick:()=>{x(s._id,"confirm")},children:"Approve"}),e.jsx("button",{onClick:()=>{x(s._id,"cancel")},children:"Reject"})]})]})},t))]})]})]})}export{D as default};