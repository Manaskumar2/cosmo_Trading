import{r as n,b as O,h as Q,j as e}from"./index-555ca70e.js";import{A as V,S as X}from"./Side-c730da09.js";/* empty css             */import{M as o}from"./Modal-7d90b00f.js";import{B as S}from"./Button-178f5130.js";import{a as j}from"./axios-4a70c6fc.js";/* empty css                  */import{I as Z,_ as u}from"./index-697d60b7.js";import"./setPrototypeOf-35303ce5.js";import"./TransitionWrapper-84340a80.js";import"./index-1f7d40ad.js";import"./Button-de888c1d.js";const m={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function ue(){const[y,M]=n.useState(null),[b,A]=n.useState(""),[f,C]=n.useState(""),[N,B]=n.useState(""),[w,D]=n.useState(null),[l,p]=n.useState(1),[P,I]=n.useState(!1),[T,R]=n.useState(!1),h=()=>{I(!1),R(!1)},q=()=>{I(!0)},z=()=>{R(!0)},[v,$]=n.useState(""),[d,k]=n.useState("confirmed"),[r,U]=n.useState(null),[i,_]=n.useState(null),[c,L]=n.useState(null),x=O(Q),F=async()=>{try{let t=x.authToken;const a=await j.post("https://cosmotrade.live/api/admin/createBank",{bankName:b,IfscCode:f,accountHolderName:N,accountNumber:w},{headers:{Authorization:`Bearer ${t}`}});if(a.status===201)return h(),A(""),C(""),B(""),D(""),u.success("Bank Details Successfully Updated",{...m}),a}catch(t){const a=t.response?t.response.data.message:t.message;u.error(a||"Something went wrong",{...m})}},Y=async t=>{try{let a=x.authToken;const s=await j.get(`https://cosmotrade.live/api/admin/getUserDetails/${t}`,{headers:{Authorization:`Bearer ${a}`}});if(s.status===200)return U(s),handleShow(),s}catch(a){a.response?a.response.data.message:a.message}},W=async()=>{try{let t=x.authToken;const a=await j.get(`https://cosmotrade.live/api/admin/getWithdrawRequest?status=${d}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return _(a.data),a}catch(t){t.response?t.response.data.message:t.message}},G=async t=>{try{let a=x.authToken;const s=await j.get(`https://cosmotrade.live/api/admin/getbankDetails/${t}`,{headers:{Authorization:`Bearer ${a}`}});if(s.status===200)return L(s),z(),s}catch(a){a.response?a.response.data.message:a.message}},E=async(t,a)=>{if(v!=="")try{let s=x.authToken;const g=await j.put(`https://cosmotrade.live/api/admin/conformWithdrawRequest/${t}`,{newStatus:a,approvedBy:v},{headers:{Authorization:`Bearer ${s}`}});if(g.status===200)return h(),$(""),W(),a==="confirmed"&&u.success("Withdraw Request Confirmed",{...m}),a==="cancelled"&&u.error("Withdraw Request Rejected",{...m}),g}catch(s){const g=s.response?s.response.data.message:s.message;u.error(g||"Something went wrong",{...m})}else u.error("Write Your Name first",{...m})};n.useEffect(()=>{W()},[d]);const J=()=>{l>1&&p(l-1)},H=i&&i.data&&i.data.totalPages,K=()=>{l<H&&p(l+1)};return e.jsxs("div",{children:[e.jsx(V,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(X,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("form",{className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Account Details"}),e.jsx("label",{children:"Enter Bank Name"}),e.jsx("input",{type:"text",value:b,placeholder:"Enter Bank Name",onChange:t=>{A(t.target.value)}}),e.jsx("label",{children:"Enter Account Holder Name"}),e.jsx("input",{type:"text",value:N,placeholder:"Enter Name",onChange:t=>{B(t.target.value)}}),e.jsx("label",{children:"Enter Account Number"}),e.jsx("input",{type:"number",value:w,placeholder:"Enter Account Number",onChange:t=>{D(t.target.value)}}),e.jsx("label",{children:"Enter IFSC Code"}),e.jsx("input",{type:"text",value:f,placeholder:"Enter Account Number",onChange:t=>{C(t.target.value)}}),e.jsx("button",{onClick:q,children:"Submit"}),e.jsxs(o,{show:P,onHide:h,size:"lg",centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Bank Details"})}),e.jsx(o.Body,{className:"userModalBody",children:e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"Confirm Bank Details"}),e.jsxs("p",{children:["Bank Name: ",b]}),e.jsxs("p",{children:["Account Holder Name: ",N]}),e.jsxs("p",{children:["Account Number: ",w]}),e.jsxs("p",{children:["IFSC Code: ",f]})]})}),e.jsxs(o.Footer,{children:[e.jsx(S,{variant:"secondary",onClick:F,children:"Confirm Submit"}),e.jsx(S,{variant:"secondary",onClick:h,children:"Close"})]})]})]}),e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:d==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("confirmed"),p(1)},children:"Approved List"}),e.jsx("button",{className:d==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("pending"),p(1)},children:"Pending List"}),e.jsx("button",{className:d==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("cancelled"),p(1)},children:"Reject List"})]}),e.jsx(Z,{}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row table-heading-admin",children:[e.jsx("th",{children:"Sl No"}),e.jsx("th",{children:"Transaction Id"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Request Time"}),d!=="pending"&&e.jsx("th",{children:"Action Time"}),e.jsx("th",{children:"Status"}),d!="pending"&&e.jsx("th",{children:"Action Done By"}),e.jsx("th",{children:"Details"})]})}),e.jsx("tbody",{children:i&&i.data.pendingWithdrawRequests.map((t,a)=>e.jsxs("tr",{className:"table-row ",children:[e.jsx("td",{children:(l-1)*20+a+1}),e.jsx("td",{children:t._id}),e.jsxs("td",{children:["  ",t.withdrawAmount]}),e.jsx("td",{children:new Date(t.createdAt).toLocaleString()}),d!=="pending"&&e.jsx("td",{children:new Date(t.updatedAt).toLocaleString()}),e.jsx("td",{children:t.status}),d!=="pending"&&e.jsx("td",{children:t.approvedBy}),e.jsxs("td",{children:[" ",e.jsx("button",{type:"button",class:"btn btn-primary",onClick:()=>{G(t.userId),Y(t.userId),M(t)},children:"Details"})," "]}),e.jsxs(o,{show:T,onHide:h,size:"lg",centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"User Details"})}),e.jsx(o.Body,{className:"userModalBody",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"User Details"}),e.jsxs("p",{children:["UID: ",r&&r.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",r&&r.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Wallet Amount: ",r&&r.data.data.userDetails.walletAmount]}),e.jsxs("p",{children:["Commission Amount: ",r&&r.data.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["Winning Amount: ",r&&r.data.data.userDetails.winningAmount]})]}),e.jsx("div",{style:{marginLeft:"6rem"},children:c&&e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"Bank Data"}),e.jsxs("p",{children:["Account Holder Name: ",c.data.data.accountHolderName]}),e.jsxs("p",{children:["Bank Name: ",c.data.data.bankName]}),e.jsxs("p",{children:["Account No: ",c.data.data.bankAccountNo]}),e.jsxs("p",{children:["Ifsc Code: ",c.data.data.ifscCode]}),e.jsxs("p",{children:["Branch Address: ",c.data.data.bankBranchAddress]}),e.jsxs("p",{children:["City: ",c.data.data.city]}),t.status!=="confirmed"&&t.status!=="cancelled"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[" ",e.jsx("input",{type:"text",value:v,onChange:s=>{$(s.target.value)},placeholder:"Enter Name",className:"name-input-admin"})," "]}),e.jsxs("div",{className:"flex-div",children:[e.jsx("button",{onClick:()=>{E(y._id,"confirmed")},className:"prime-approve-btn",children:"Approve"})," ",e.jsx("button",{onClick:()=>{E(y._id,"cancelled")},className:"prime-reject-btn",children:"Reject"})]})]})]})})]})}),e.jsx(o.Footer,{children:e.jsx(S,{variant:"secondary",onClick:h,children:"Close"})})]})]},a))})]}),i&&i.data&&i.data.pendingWithdrawRequests&&i.data.pendingWithdrawRequests.length!=0&&e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:J,children:"-"}),e.jsxs("div",{children:[l,"/",H]}),e.jsx("button",{onClick:K,children:"+"})]})]})]})]})}export{ue as default,m as toastProps};