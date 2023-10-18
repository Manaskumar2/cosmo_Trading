import{r as d,d as y,h as D,j as e}from"./index-13c7cc3a.js";import{A as B,S}from"./Side-1a933b25.js";import{a as l}from"./axios-4a70c6fc.js";import{A as h}from"./Accordion-86c0a4a1.js";import{I as C,_ as p}from"./index-29444f7e.js";import"./TransitionWrapper-1ddcd552.js";import"./react-lifecycles-compat.es-22c986ff.js";const x={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function z(){const[m,j]=d.useState(""),[i,u]=d.useState("confirmed"),[n,v]=d.useState(null),[f,A]=d.useState(null),[r,w]=d.useState(null),o=y(D),k=async a=>{try{let s=o.authToken;const t=await l.get(`https://cosmotrade.live/api/admin/getUserDetails/${a}`,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return v(t),t}catch(s){s.response?s.response.data.message:s.message}},g=async()=>{try{let a=o.authToken;const s=await l.get(`https://cosmotrade.live/api/admin/getWithdrawRequest?status=${i}`,{headers:{Authorization:`Bearer ${a}`}});if(s.status===200)return A(s.data),s}catch(a){a.response?a.response.data.message:a.message}},N=async a=>{try{let s=o.authToken;const t=await l.get(`https://cosmotrade.live/api/admin/getbankDetails/${a}`,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return w(t),t}catch(s){s.response?s.response.data.message:s.message}},b=async(a,s)=>{if(m!=="")try{let t=o.authToken;const c=await l.put(`https://cosmotrade.live/api/admin/conformWithdrawRequest/${a}`,{newStatus:s,approvedBy:m},{headers:{Authorization:`Bearer ${t}`}});if(c.status===200)return j(""),p.success("Withdraw request confirmed",{...x}),g(),c}catch(t){const c=t.response?t.response.data.message:t.message;p.error(c||"Something went wrong",{...x})}else p.error("Write Your Name first",{...x})};return d.useEffect(()=>{g()},[i]),e.jsxs("div",{children:[e.jsx(B,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(S,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:i==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("confirmed")},children:"Approved List"}),e.jsx("button",{className:i==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("pending")},children:"Pending List"}),e.jsx("button",{className:i==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{u("cancelled")},children:"Reject List"})]}),e.jsx(C,{}),e.jsx(h,{children:f&&f.data.map((a,s)=>e.jsxs(h.Item,{eventKey:s,children:[e.jsx(h.Header,{onClick:()=>{N(a.userId),k(a.userId)},className:"acc-head",children:e.jsxs("div",{className:"admin-Widthdraw-box",children:[e.jsxs("p",{children:["Order : ",a._id]}),e.jsxs("p",{children:["Amount : ",a.withdrawAmount]}),e.jsxs("p",{children:["Status : ",a.status]}),i!=="pending"&&e.jsxs("p",{children:["Action done by : ",a.approvedBy]})]})}),e.jsx(h.Body,{children:e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"User Details"}),e.jsxs("p",{children:["UID: ",n&&n.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",n&&n.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Wallet Amount: ",n&&n.data.data.userDetails.walletAmount]}),e.jsxs("p",{children:["Commission Amount: ",n&&n.data.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["Winning Amount: ",n&&n.data.data.userDetails.winningAmount]}),e.jsxs("p",{children:["Downline Count: ",n&&n.data.data.userDetails.downline.length]})]}),e.jsxs("div",{style:{marginLeft:"6rem"},children:[e.jsx("h3",{children:"Bank Data"}),r&&e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsxs("p",{children:["Account Holder Name: ",r.data.data.accountHolderName]}),e.jsxs("p",{children:["Email: ",r.data.data.email]}),e.jsxs("p",{children:["Bank Name: ",r.data.data.bankName]}),e.jsxs("p",{children:["Account No: ",r.data.data.bankAccountNo]}),e.jsxs("p",{children:["Ifsc Code: ",r.data.data.ifscCode]}),e.jsxs("p",{children:["Branch Address: ",r.data.data.bankBranchAddress]}),e.jsxs("p",{children:["City: ",r.data.data.city]}),a.status!=="confirmed"&&a.status!=="cancelled"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[" ",e.jsx("input",{type:"text",value:m,onChange:t=>{j(t.target.value)},placeholder:"Enter Name",className:"name-input-admin"})," "]}),e.jsxs("div",{className:"flex-div",children:[e.jsx("button",{onClick:()=>{b(a._id,"confirmed")},className:"prime-approve-btn",children:"Approve"})," ",e.jsx("button",{onClick:()=>{b(a._id,"cancelled")},className:"prime-reject-btn",children:"Reject"})]})]})]})]})]})})]},s))})]})]})]})}export{z as default,x as toastProps};