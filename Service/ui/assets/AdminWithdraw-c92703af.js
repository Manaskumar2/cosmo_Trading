import{r as n,b as J,h as K,j as e}from"./index-fd44721e.js";import{A as O,S as Q}from"./Side-4b0e3785.js";/* empty css             */import{M as o}from"./Modal-c8e124a1.js";import{B as y}from"./Button-9e15f4f6.js";import{a as j}from"./axios-4a70c6fc.js";/* empty css                  */import{I as V,_ as u}from"./index-3c233412.js";import"./setPrototypeOf-650efc58.js";import"./TransitionWrapper-0b1ced11.js";import"./createWithBsPrefix-19c17a06.js";import"./index-39c48739.js";import"./Button-81ecffb2.js";const m={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function he(){const[b,A]=n.useState(""),[f,C]=n.useState(""),[w,S]=n.useState(""),[N,B]=n.useState(null),[l,p]=n.useState(1),[H,D]=n.useState(!1),[M,R]=n.useState(!1),h=()=>{D(!1),R(!1)},P=()=>{D(!0)},T=()=>{R(!0)},[v,$]=n.useState(""),[d,k]=n.useState("confirmed"),[r,q]=n.useState(null),[i,z]=n.useState(null),[c,U]=n.useState(null),x=J(K),_=async()=>{try{let t=x.authToken;const a=await j.post("https://cosmotrade.live/api/admin/createBank",{bankName:b,IfscCode:f,accountHolderName:w,accountNumber:N},{headers:{Authorization:`Bearer ${t}`}});if(a.status===201)return h(),A(""),C(""),S(""),B(""),u.success("Bank Details Successfully Updated",{...m}),a}catch(t){const a=t.response?t.response.data.message:t.message;u.error(a||"Something went wrong",{...m})}},L=async t=>{try{let a=x.authToken;const s=await j.get(`https://cosmotrade.live/api/admin/getUserDetails/${t}`,{headers:{Authorization:`Bearer ${a}`}});if(s.status===200)return q(s),handleShow(),s}catch(a){a.response?a.response.data.message:a.message}},W=async()=>{try{let t=x.authToken;const a=await j.get(`https://cosmotrade.live/api/admin/getWithdrawRequest?status=${d}`,{headers:{Authorization:`Bearer ${t}`}});if(a.status===200)return z(a.data),a}catch(t){t.response?t.response.data.message:t.message}},F=async t=>{try{let a=x.authToken;const s=await j.get(`https://cosmotrade.live/api/admin/getbankDetails/${t}`,{headers:{Authorization:`Bearer ${a}`}});if(s.status===200)return U(s),T(),s}catch(a){a.response?a.response.data.message:a.message}},E=async(t,a)=>{if(v!=="")try{let s=x.authToken;const g=await j.put(`https://cosmotrade.live/api/admin/conformWithdrawRequest/${t}`,{newStatus:a,approvedBy:v},{headers:{Authorization:`Bearer ${s}`}});if(g.status===200)return h(),$(""),W(),a==="confirmed"&&u.success("Withdraw Request Confirmed",{...m}),a==="cancelled"&&u.error("Withdraw Request Rejected",{...m}),g}catch(s){const g=s.response?s.response.data.message:s.message;u.error(g||"Something went wrong",{...m})}else u.error("Write Your Name first",{...m})};n.useEffect(()=>{W()},[d]);const Y=()=>{l>1&&p(l-1)},I=i&&i.data&&i.data.totalPages,G=()=>{l<I&&p(l+1)};return e.jsxs("div",{children:[e.jsx(O,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(Q,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsxs("form",{className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Account Details"}),e.jsx("label",{children:"Enter Bank Name"}),e.jsx("input",{type:"text",value:b,placeholder:"Enter Bank Name",onChange:t=>{A(t.target.value)}}),e.jsx("label",{children:"Enter Account Holder Name"}),e.jsx("input",{type:"text",value:w,placeholder:"Enter Name",onChange:t=>{S(t.target.value)}}),e.jsx("label",{children:"Enter Account Number"}),e.jsx("input",{type:"number",value:N,placeholder:"Enter Account Number",onChange:t=>{B(t.target.value)}}),e.jsx("label",{children:"Enter IFSC Code"}),e.jsx("input",{type:"text",value:f,placeholder:"Enter Account Number",onChange:t=>{C(t.target.value)}}),e.jsx("button",{onClick:P,children:"Submit"}),e.jsxs(o,{show:H,onHide:h,size:"lg",centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Bank Details"})}),e.jsx(o.Body,{className:"userModalBody",children:e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"Confirm Bank Details"}),e.jsxs("p",{children:["Bank Name: ",b]}),e.jsxs("p",{children:["Account Holder Name: ",w]}),e.jsxs("p",{children:["Account Number: ",N]}),e.jsxs("p",{children:["IFSC Code: ",f]})]})}),e.jsxs(o.Footer,{children:[e.jsx(y,{variant:"secondary",onClick:_,children:"Confirm Submit"}),e.jsx(y,{variant:"secondary",onClick:h,children:"Close"})]})]})]}),e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:d==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("confirmed"),p(1)},children:"Approved List"}),e.jsx("button",{className:d==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("pending"),p(1)},children:"Pending List"}),e.jsx("button",{className:d==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{k("cancelled"),p(1)},children:"Reject List"})]}),e.jsx(V,{}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"Sl No"}),e.jsx("th",{children:"Transaction Id"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Request Time"}),d!=="pending"&&e.jsx("th",{children:"Action Time"}),e.jsx("th",{children:"Status"}),d!="pending"&&e.jsx("th",{children:"Action Done By"}),e.jsx("th",{children:"Details"})]})}),e.jsx("tbody",{children:i&&i.data.pendingWithdrawRequests.map((t,a)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:(l-1)*20+a+1}),e.jsx("td",{children:t._id}),e.jsxs("td",{children:["  ",t.withdrawAmount]}),e.jsx("td",{children:new Date(t.createdAt).toLocaleString()}),d!=="pending"&&e.jsx("td",{children:new Date(t.updatedAt).toLocaleString()}),e.jsx("td",{children:t.status}),d!=="pending"&&e.jsx("td",{children:t.approvedBy}),e.jsxs("td",{children:[" ",e.jsx("button",{type:"button",class:"btn btn-primary",onClick:()=>{F(t.userId),L(t.userId)},children:"Details"})," "]}),e.jsxs(o,{show:M,onHide:h,size:"lg",centered:!0,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"User Details"})}),e.jsx(o.Body,{className:"userModalBody",children:e.jsxs("div",{style:{display:"flex"},children:[e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"User Details"}),e.jsxs("p",{children:["UID: ",r&&r.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",r&&r.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Wallet Amount: ",r&&r.data.data.userDetails.walletAmount]}),e.jsxs("p",{children:["Commission Amount: ",r&&r.data.data.userDetails.commissionAmount]}),e.jsxs("p",{children:["Winning Amount: ",r&&r.data.data.userDetails.winningAmount]}),e.jsxs("p",{children:["Downline Count: ",r&&r.data.data.userDetails.downline.length]})]}),e.jsx("div",{style:{marginLeft:"6rem"},children:c&&e.jsxs("div",{className:"admin-withdraw-data",children:[e.jsx("h3",{children:"Bank Data"}),e.jsxs("p",{children:["Account Holder Name: ",c.data.data.accountHolderName]}),e.jsxs("p",{children:["Bank Name: ",c.data.data.bankName]}),e.jsxs("p",{children:["Account No: ",c.data.data.bankAccountNo]}),e.jsxs("p",{children:["Ifsc Code: ",c.data.data.ifscCode]}),e.jsxs("p",{children:["Branch Address: ",c.data.data.bankBranchAddress]}),e.jsxs("p",{children:["City: ",c.data.data.city]}),t.status!=="confirmed"&&t.status!=="cancelled"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[" ",e.jsx("input",{type:"text",value:v,onChange:s=>{$(s.target.value)},placeholder:"Enter Name",className:"name-input-admin"})," "]}),e.jsxs("div",{className:"flex-div",children:[e.jsx("button",{onClick:()=>{E(t._id,"confirmed")},className:"prime-approve-btn",children:"Approve"})," ",e.jsx("button",{onClick:()=>{E(t._id,"cancelled")},className:"prime-reject-btn",children:"Reject"})]})]})]})})]})}),e.jsx(o.Footer,{children:e.jsx(y,{variant:"secondary",onClick:h,children:"Close"})})]})]},a))})]}),i&&i.data&&i.data.pendingWithdrawRequests&&i.data.pendingWithdrawRequests.length!=0&&e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:Y,children:"-"}),e.jsxs("div",{children:[l,"/",I]}),e.jsx("button",{onClick:G,children:"+"})]})]})]})]})}export{he as default,m as toastProps};