import{r as d,d as k,A as N,j as e}from"./index-1e26659f.js";import{A as D,S as y}from"./Side-1596005c.js";import{a as l}from"./axios-4a70c6fc.js";import{A as h}from"./Accordion-8da89bef.js";import{I as S,_ as u}from"./index-8fb5d817.js";import"./TransitionWrapper-1219bb77.js";import"./react-lifecycles-compat.es-22c986ff.js";const p={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function _(){const[i,m]=d.useState("confirmed"),[n,f]=d.useState(null),[x,b]=d.useState(null),[r,w]=d.useState(null),c=k(N),A=async s=>{try{let a=c.authToken;const t=await l.get(`https://cosmotrade.live/api/admin/getUserDetails/${s}`,{headers:{Authorization:`Bearer ${a}`}});if(t.status===200)return console.log(t),f(t),t}catch(a){a.response?a.response.data.message:a.message}},j=async()=>{try{let s=c.authToken;const a=await l.get(`https://cosmotrade.live/api/admin/getWithdrawRequest?status=${i}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return console.log(a),b(a.data),a}catch(s){const a=s.response?s.response.data.message:s.message;u.error(a||"Something went wrong",{...p})}},v=async s=>{try{let a=c.authToken;const t=await l.get(`https://cosmotrade.live/api/admin/getbankDetails/${s}`,{headers:{Authorization:`Bearer ${a}`}});if(t.status===200)return console.log(t),w(t),t}catch(a){a.response?a.response.data.message:a.message}},g=async(s,a)=>{try{let t=c.authToken;const o=await l.put(`https://cosmotrade.live/api/admin/conformWithdrawRequest/${s}`,{newStatus:a},{headers:{Authorization:`Bearer ${t}`}});if(o.status===200)return u.success("Withdraw request confirmed",{...p}),j(),console.log(o),o}catch(t){const o=t.response?t.response.data.message:t.message;u.error(o||"Something went wrong",{...p})}};return d.useEffect(()=>{j()},[i]),LiveChatWidget.call("hide"),e.jsxs("div",{children:[e.jsx(D,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(y,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:i==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{m("confirmed")},children:"Approved List"}),e.jsx("button",{className:i==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{m("pending")},children:"Pending List"}),e.jsx("button",{className:i==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{m("cancelled")},children:"Reject List"})]}),e.jsx(S,{}),x&&x.data.map((s,a)=>e.jsx(h,{children:e.jsxs(h.Item,{eventKey:a,children:[e.jsx(h.Header,{onClick:()=>{v(s.userId),A(s.userId)},children:e.jsxs("div",{className:"admin-Widthdraw-box",children:[e.jsxs("p",{children:["Order : ",s._id]}),e.jsxs("p",{children:["Amount : ",s.withdrawAmount]}),e.jsxs("p",{children:["Status : ",s.status]})]})}),e.jsx(h.Body,{children:e.jsxs("div",{className:"flex-div",children:[e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"User Details"}),e.jsxs("p",{children:["UID: ",n&&n.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",n&&n.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Wallet Amount: ",n&&n.data.data.userDetails.walletAmount]}),e.jsxs("p",{children:["Commission Amount: ",n&&n.data.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["Winning Amount: ",n&&n.data.data.userDetails.winningAmount]}),e.jsxs("p",{children:["Downline Count: ",n&&n.data.data.userDetails.downline.length]})]}),e.jsxs("div",{style:{marginLeft:"6rem"},children:[e.jsx("h3",{children:"Bank Data"}),r&&e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsxs("p",{children:["Account Holder Name: ",r.data.data.accountHolderName]}),e.jsxs("p",{children:["Email: ",r.data.data.email]}),e.jsxs("p",{children:["Bank Name: ",r.data.data.bankName]}),e.jsxs("p",{children:["Account No: ",r.data.data.bankAccountNo]}),e.jsxs("p",{children:["Ifsc Code: ",r.data.data.ifscCode]}),e.jsxs("p",{children:["Branch Address: ",r.data.data.bankBranchAddress]}),e.jsxs("p",{children:["City: ",r.data.data.city]}),s.status!=="confirmed"&&s.status!=="cancelled"&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex-div",children:[e.jsx("button",{onClick:()=>{g(s._id,"confirmed")},className:"prime-approve-btn",children:"Approve"})," ",e.jsx("button",{onClick:()=>{g(s._id,"cancelled")},className:"prime-reject-btn",children:"Reject"})]})})]})]})]})})]})},a))]})]})]})}export{_ as default,p as toastProps};
