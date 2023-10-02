import{r,d as I,A as N,j as e}from"./index-89217131.js";import{A as R,S as C}from"./Side-a8e3dd01.js";import{a as d}from"./axios-4a70c6fc.js";import{A as l}from"./Accordion-b91f1892.js";import{I as $,_ as f}from"./index-21a7fd35.js";import"./TransitionWrapper-d5493e64.js";import"./react-lifecycles-compat.es-22c986ff.js";const v={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function B(){const[o,u]=r.useState("confirmed"),c=I(N),[i,y]=r.useState(null),[p,h]=r.useState(""),[m,x]=r.useState(""),[g,k]=r.useState(null),A=async t=>{t.preventDefault();try{let s=c._id,a=c.authToken;const n=await d.post(`https://cosmotrade.live/api/admin/uploadQrcode/${s}`,{upiId:p,qrCode:m},{headers:{Authorization:`Bearer ${a}`}});if(n.status===201)return f.success("Qr code uploaded!",{...v}),h(""),x(""),console.log(n),n}catch(s){s.response?s.response.data.message:s.message}},S=async t=>{try{let s=c.authToken;const a=await d.get(`https://cosmotrade.live/api/admin/getUserDetails/${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return console.log(a),y(a),a}catch(s){s.response?s.response.data.message:s.message}},j=async()=>{try{let t=c.authToken;const s=await d.get(`https://cosmotrade.live/api/admin/payment-request?status=${o}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return console.log(s),k(s.data),s}catch(t){t.response?t.response.data.message:t.message}},b=async(t,s)=>{try{let a=c.authToken;const n=await d.patch(`https://cosmotrade.live/api/admin/confirm-payment/${t}`,{status:s},{headers:{Authorization:`Bearer ${a}`}});if(n.status===200)return f.success("Recharge request confirmed",{...v}),j(),console.log(n),n}catch(a){a.response?a.response.data.message:a.message}};return r.useEffect(()=>{j()},[o]),e.jsxs("div",{children:[e.jsx(R,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(C,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx($,{}),e.jsxs("form",{onSubmit:A,className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Qr Code"}),e.jsx("label",{children:"Enter Qr Code Link"}),e.jsx("input",{type:"text",value:m,placeholder:"Enter QR code",onChange:t=>{x(t.target.value)}}),e.jsx("label",{children:"Enter UPI Id"}),e.jsx("input",{type:"text",value:p,placeholder:"Enter UPI Id",onChange:t=>{h(t.target.value)}}),e.jsx("button",{type:"submit",children:"Submit"})]}),e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:o==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("confirmed")},children:"Approved List"}),e.jsx("button",{className:o==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("pending")},children:"Pending List"}),e.jsx("button",{className:o==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("cancelled")},children:"Reject List"})]}),g&&g.map((t,s)=>e.jsx(l,{children:e.jsxs(l.Item,{eventKey:s,children:[e.jsxs(l.Header,{onClick:()=>{S(t.userId)},children:[e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Order: ",t._id]}),e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Amount: ",t.amount]}),e.jsxs("p",{style:{marginRight:"3.5rem"},children:["Status: ",t.status]})]}),e.jsxs(l.Body,{children:[e.jsxs("p",{children:["UID: ",i&&i.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",i&&i.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Upi ReferenceNo: ",t.upiReferenceNo]}),e.jsxs("p",{children:["Upi Id: ",t.upiId]}),t.status!=="confirmed"&&t.status!=="cancelled"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"prime-approve-btn",onClick:()=>{b(t._id,"confirm")},children:"Approve"}),e.jsx("button",{onClick:()=>{b(t._id,"cancel")},className:"prime-reject-btn",children:"Reject"})]})]})]})},s))]})]})]})}export{B as default,v as toastProps};
