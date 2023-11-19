import{r as n,b as z,h as L,j as e}from"./index-f056ec52.js";import{A as Q,S as O}from"./Side-f7658f34.js";import{a as j}from"./axios-4a70c6fc.js";import{B as H}from"./Button-7c78380a.js";/* empty css                  *//* empty css             */import{I as W,_ as l}from"./index-0cd8b721.js";import{M as m}from"./Modal-43ca8553.js";import"./setPrototypeOf-02af426c.js";import"./Button-69878b4c.js";import"./TransitionWrapper-90e190c6.js";import"./createWithBsPrefix-b3f3165a.js";import"./index-3606af68.js";const h={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function oe(){const[x,A]=n.useState(null),[v,y]=n.useState(""),[o,p]=n.useState(1),[g,S]=n.useState(""),[r,f]=n.useState("confirmed"),u=z(L),[d,P]=n.useState(null),[B,N]=n.useState(null),[I,w]=n.useState(""),[i,U]=n.useState(null),[$,C]=n.useState(!1),b=()=>C(!1),T=()=>C(!0),q=t=>{const s=t.target.files[0];N(s)},k=i&&i.data.totalPages,_=async()=>{try{const t=new FormData;t.append("image",B),t.append("upiId",I),t.append("options",v);let s=u._id,a=u.authToken;const c=await j.post(`https://cosmotrade.live/api/admin/uploadQrcode/${s}`,t,{headers:{Authorization:`Bearer ${a}`},"Content-Type":"multipart/form-data"});if(c.status===201)return l.success("Qr code uploaded!",{...h}),w(""),N(null),y(""),c}catch(t){t.response?t.response.data.message:t.message}},E=async t=>{try{let s=u.authToken;const a=await j.get(`https://cosmotrade.live/api/admin/getUserDetails/${t}`,{headers:{Authorization:`Bearer ${s}`}});if(a.status===200)return T(),P(a),a}catch(s){s.response?s.response.data.message:s.message}},D=async()=>{try{let t=u.authToken;const s=await j.get(`https://cosmotrade.live/api/admin/payment-request?status=${r}&page=${o}`,{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return U(s.data),s}catch(t){const s=t.response?t.response.data.message:t.message;l.error(s||"Something went wrong",{...h})}},R=async(t,s)=>{if(g!=="")try{let a=u.authToken;const c=await j.patch(`https://cosmotrade.live/api/admin/confirm-payment/${t}`,{status:s,approvedBy:g},{headers:{Authorization:`Bearer ${a}`}});if(c.status===200)return b(),S(""),D(),s==="confirm"&&l.success("Recharge Request Confirmed",{...h}),s==="cancel"&&l.error("Recharge Request Rejected",{...h}),c}catch(a){const c=a.response?a.response.data.message:a.message;l.error(c||"Something went wrong",{...h})}else l.error("Write Your Name First",{...h})};n.useEffect(()=>{D()},[r,o]);const F=()=>{o>1&&p(o-1)},M=()=>{o<k&&p(o+1)};return e.jsxs("div",{children:[e.jsx(Q,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(O,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(W,{}),e.jsxs("form",{className:"form-rechrge",children:[e.jsx("h3",{className:"text-centre",children:"Submit Qr Code"}),e.jsx("label",{children:"Enter Qr Code Image"}),e.jsx("input",{type:"file",accept:".jpg, .jpeg, .png, .svg",onChange:q}),e.jsx("label",{children:"Enter UPI Id"}),e.jsx("input",{type:"text",value:I,placeholder:"Enter UPI Id",onChange:t=>{w(t.target.value)}}),e.jsxs("div",{className:"sort-dropdown",children:[e.jsx("h5",{children:"Select Method Of UPI:"}),e.jsxs("select",{onChange:t=>y(t.target.value),value:v,children:[e.jsx("option",{value:"",children:"Select an Option"}),e.jsx("option",{value:"Normal",children:"Normal UPI"}),e.jsx("option",{value:"Fast",children:"Fast UPI"})]})]}),e.jsx("button",{onClick:_,children:"Submit"})]}),e.jsxs("div",{className:"row tab-btns",children:[e.jsx("button",{className:r==="confirmed"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{f("confirmed"),p(1)},children:"Approved List"}),e.jsx("button",{className:r==="pending"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{f("pending"),p(1)},children:"Pending List"}),e.jsx("button",{className:r==="cancelled"?"col-4 active-tab-btn-adminPage":"col-4 tab-btn",onClick:()=>{f("cancelled"),p(1)},children:"Reject List"})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"Sl No"}),e.jsx("th",{children:"Transaction Id"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Request Time"}),r!=="pending"&&e.jsx("th",{children:"Action Time"}),e.jsx("th",{children:"Status"}),r!="pending"&&e.jsx("th",{children:"Action Done By"}),e.jsx("th",{children:"Details"})]})}),e.jsx("tbody",{children:i&&i.data.paymentsRequest.map((t,s)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:(o-1)*20+s+1}),e.jsx("td",{children:t._id}),e.jsxs("td",{children:[" ",t.amount]}),e.jsx("td",{children:new Date(t.createdAt).toLocaleString()}),r!=="pending"&&e.jsx("td",{children:new Date(t.updatedAt).toLocaleString()}),e.jsx("td",{children:t.status}),r!=="pending"&&e.jsx("td",{children:t.approvedBy}),e.jsxs("td",{children:[" ",e.jsx("button",{type:"button",class:"btn btn-primary",onClick:()=>{E(t.userId),A(t)},children:"Details"}),e.jsxs(m,{show:$,onHide:b,centered:!0,children:[e.jsx(m.Header,{closeButton:!0,children:e.jsx(m.Title,{children:"User Details"})}),e.jsx(m.Body,{className:"userModalBody",children:e.jsxs("div",{children:[e.jsxs("p",{children:["Name: ",d&&d.data.data.userDetails.name]}),e.jsxs("p",{children:["UID: ",d&&d.data.data.userDetails.UID]}),e.jsxs("p",{children:["Phone: ",d&&d.data.data.userDetails.phoneNumber]}),e.jsxs("p",{children:["Upi ReferenceNo: ",x&&x.upiReferenceNo]}),e.jsxs("p",{children:["Upi Id: ",x&&x.upiId]}),r=="pending"&&e.jsxs(e.Fragment,{children:[" ",e.jsxs("div",{children:[" ",e.jsx("input",{type:"text",value:g,onChange:a=>{S(a.target.value)},placeholder:"Enter Name",className:"name-input-admin",style:{width:"14rem"}})," "]}),e.jsx("button",{className:"prime-approve-btn",onClick:()=>{R(t._id,"confirm")},children:"Approve"}),e.jsx("button",{onClick:()=>{R(t._id,"cancel")},className:"prime-reject-btn",children:"Reject"})]})]})}),e.jsx(m.Footer,{children:e.jsx(H,{variant:"secondary",onClick:b,children:"Close"})})]})," "]})]},s))})]}),i&&i.data.paymentsRequest&&i.data.paymentsRequest.length!=0&&e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:F,children:"-"}),e.jsxs("div",{children:[o,"/",k]}),e.jsx("button",{onClick:M,children:"+"})]})]})]})]})}export{oe as default,h as toastProps};
