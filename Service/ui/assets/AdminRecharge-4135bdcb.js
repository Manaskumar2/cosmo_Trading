import{r as n,d as I,h as N,j as e}from"./index-be84e0db.js";import{A as R,S as w}from"./Side-68c2372f.js";import{a as d}from"./axios-4a70c6fc.js";/* empty css                  */import{A as l}from"./Accordion-91bcf2aa.js";import{I as C,_ as u}from"./index-fa9b3787.js";import"./TransitionWrapper-9fa5c6cb.js";import"./react-lifecycles-compat.es-22c986ff.js";const p={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function z(){const[o,h]=n.useState("confirmed"),c=I(N),[i,y]=n.useState(null),[m,g]=n.useState(""),[x,j]=n.useState(""),[b,S]=n.useState(null),k=async t=>{t.preventDefault();try{let s=c._id,a=c.authToken;const r=await d.post(`https://cosmotrade.live/api/admin/uploadQrcode/${s}`,{upiId:m,qrCode:x},{headers:{Authorization:`Bearer ${a}`}});if(r.status===201)return u.success("Qr code uploaded!",{...p}),g(""),j(""),console.log(r),r}catch(s){s.response?s.response.data.message:s.message}},A=async t=>{try{let s=c.authToken;const a=await d.get(`https://cosmotrade.live/api/admin/getUserDetails/${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return console.log(a),y(a),a}catch(s){s.response?s.response.data.message:s.message}},f=async()=>{try{let t=c.authToken;const s=await d.get(`https://cosmotrade.live/api/admin/payment-request?status=${o}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return console.log(s),S(s.data),s}catch(t){const s=t.response?t.response.data.message:t.message;u.error(s||"Something went wrong",{...p})}},v=async(t,s)=>{try{let a=c.authToken;const r=await d.patch(`https://cosmotrade.live/api/admin/confirm-payment/${t}`,{status:s},{headers:{Authorization:`Bearer ${a}`}});if(r.status===200)return u.success("Recharge request confirmed",{...p}),f(),console.log(r),r}catch(a){const r=a.response?a.response.data.message:a.message;u.error(r||"Something went wrong",{...p})}};return n.useEffect(()=>{f()},[o]),e.jsxs("div",{children:[e.jsx(R,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(w,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(C,{}),e.jsxs("form",{onSubmit:k,className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Qr Code"}),e.jsx("label",{children:"Enter Qr Code Link"}),e.jsx("input",{type:"text",value:x,placeholder:"Enter QR code",onChange:t=>{j(t.target.value)}}),e.jsx("label",{children:"Enter UPI Id"}),e.jsx("input",{type:"text",value:m,placeholder:"Enter UPI Id",onChange:t=>{g(t.target.value)}}),e.jsx("button",{type:"submit",children:"Submit"})]}),e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:o==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{h("confirmed")},children:"Approved List"}),e.jsx("button",{className:o==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{h("pending")},children:"Pending List"}),e.jsx("button",{className:o==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{h("cancelled")},children:"Reject List"})]}),b&&b.map((t,s)=>e.jsx(l,{children:e.jsxs(l.Item,{eventKey:s,children:[e.jsxs(l.Header,{onClick:()=>{A(t.userId)},children:[e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Order: ",t._id]}),e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Amount: ",t.amount]}),e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Status: ",t.status]})]}),e.jsxs(l.Body,{children:[e.jsxs("p",{children:["UID: ",i&&i.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",i&&i.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Upi ReferenceNo: ",t.upiReferenceNo]}),e.jsxs("p",{children:["Upi Id: ",t.upiId]}),t.status!=="confirmed"&&t.status!=="cancelled"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"prime-approve-btn",onClick:()=>{v(t._id,"confirm")},children:"Approve"}),e.jsx("button",{onClick:()=>{v(t._id,"cancel")},className:"prime-reject-btn",children:"Reject"})]})]})]})},s))]})]})]})}export{z as default,p as toastProps};
