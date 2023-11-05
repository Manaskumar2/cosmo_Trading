import{f as le,r as n,R as ce,u as de,d as he,h as ue,a as me,j as e}from"./index-70e3bcd7.js";import{A as xe,S as pe}from"./Side-3a346d97.js";import{a as i}from"./axios-4a70c6fc.js";import{M as c}from"./Modal-713a1fa7.js";/* empty css             */import{I as ge,_ as d}from"./index-4ecd74d8.js";import"./TransitionWrapper-30149e25.js";import"./createWithBsPrefix-2edff448.js";import"./index-5ace8bc0.js";const je=le({key:"AllUserData",default:null}),h={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Be(){const[G,ve]=n.useState(""),[N,w]=ce.useState(!1),D=()=>{w(!1),m(""),p(""),g(""),j(""),C(""),v(""),y("")},[u,m]=n.useState(""),[x,p]=n.useState(""),[A,g]=n.useState(0),[k,j]=n.useState(""),[Z,K]=n.useState(""),[f,v]=n.useState(""),[S,y]=n.useState(""),[U,B]=n.useState(""),[P,$]=n.useState(""),[I,_]=n.useState(""),[F,R]=n.useState(""),[V,C]=n.useState(""),[T,M]=n.useState(0),[z,q]=n.useState(0);de();const r=he(ue),[o,H]=n.useState(1),[X,ye]=n.useState(""),[L,be]=n.useState([]),[l,W]=me(je),Y=async s=>{try{let a=r.authToken;const t=await i.put(`https://cosmotrade.live/api/admin/updateUser/${s}`,{bankName:u,accountHolderName:x,bankAccountNo:A,bankId:V,city:k,ifscCode:f,bankBranchAddress:S,name:U,phoneNumber:P,password:I,parentReferralCode:F,walletAmount:T,rechargeAmount:z},{headers:{Authorization:`Bearer ${a}`}});if(t.status===200)return d.success("User Data Successfully Updated",{...h}),m(""),p(""),g(""),j(""),C(""),v(""),y(""),D(),t}catch(a){a.response?a.response.data.message:a.message}},E=async()=>{try{let s=r.authToken;const a=await i.get("https://cosmotrade.live/api/admin/getAllUsers",{headers:{Authorization:`Bearer ${s}`},params:{queryPageIndex:o,queryPageSortBy:L}});a.status===200&&(console.log(a.data.response.getUsers),W(a))}catch(s){const a=s.response?s.response.data.message:s.message;console.error("An error occurred:",a)}},[Q,J]=n.useState(""),ee=async()=>{try{let s=r.authToken;const a=await i.get(`https://cosmotrade.live/api/admin/getAllUsers?queryPageFilter=${Q}`,{headers:{Authorization:`Bearer ${s}`}});a.status===200&&(W(a),J(""))}catch(s){console.error("Error searching users:",s)}},te=async s=>{try{let a=r.authToken;const t=await i.get(`https://cosmotrade.live/api/admin/userAndBankData/${s}`,{headers:{Authorization:`Bearer ${a}`}});return t.status,t.data.user&&(B(t.data.user.name),$(t.data.user.phoneNumber),_(t.data.user.password),R(t.data.user.parentReferralCode),M(t.data.user.walletAmount.toFixed(2)),q(t.data.user.rechargeAmount.toFixed(2)),K(t.data.user._id)),t.data.bankDetails!==null&&(m(t.data.bankDetails.bankName),p(t.data.bankDetails.accountHolderName),g(t.data.bankDetails.bankAccountNo),j(t.data.bankDetails.city),C(t.data.bankDetails._id),v(t.data.bankDetails.ifscCode),y(t.data.bankDetails.bankBranchAddress)),w(!0),console.log(N),t}catch(a){a.response?a.response.data.message:a.message}},se=async s=>{try{let a=r.authToken;const t=await i.patch(`https://cosmotrade.live/api/admin/activateUser/${s}`,{},{headers:{Authorization:`Bearer ${a}`}});if(t.status===200)return d.success("User Activated",{...h}),t}catch(a){const t=a.response?a.response.data.message:a.message;console.error(t)}},ae=async s=>{try{let a=r.authToken,t=r._id;const b=await i.patch(`https://cosmotrade.live/api/admin/deactivateUser/${s}`,{},{headers:{Authorization:`Bearer ${a}`}});if(b.status===200)return d.success("User Deactivated",{...h}),b}catch(a){const t=a.response?a.response.data.message:a.message;console.error(t)}};n.useEffect(()=>{E()},[o,X,L]);const O=l&&l.data.response.totalPages,ne=()=>{o>1&&H(o-1)},re=()=>{o<O&&H(o+1)},oe=async(s,a)=>{try{const t=await i.post("https://cosmotrade.live/api/signIn",{phoneNumber:s,password:a});if(t.status===200)return d.success("Welcome to our Gaming Zone",{...h}),localStorage.setItem("authUserToken",JSON.stringify(t.data.data)),window.open("/","_blank"),t}catch(t){const b=t.response?t.response.data.message:t.message;d.error(b||"Something went wrong",{...h})}};function ie(s){const a={year:"numeric",month:"numeric",day:"numeric"};return new Date(s).toLocaleDateString(void 0,a)}return e.jsxs("div",{children:[e.jsx(xe,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(pe,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(ge,{}),e.jsxs("div",{className:"all-user-top",children:[e.jsx("input",{className:"user-input",type:"text",placeholder:"Search by UID",value:Q,onChange:s=>J(s.target.value)}),e.jsx("button",{onClick:ee,type:"button",class:"btn btn-primary",children:"Search"}),e.jsx("button",{onClick:E,type:"button",class:"btn btn-success",children:"All Users"})]}),e.jsxs("div",{className:"total-wallet-amount",children:[e.jsx("h4",{children:"Total Wallet Amount Of All Users"}),e.jsx("div",{children:l&&l.data.response.totalWalletAmount})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Password"}),e.jsx("th",{children:"Joining Date"}),e.jsx("th",{children:"Total Downline"}),e.jsx("th",{children:"Parent Id"}),e.jsx("th",{children:"Commission Earned"}),e.jsx("th",{children:"Wallet Amount"}),e.jsx("th",{children:"Winning Amount"}),e.jsx("th",{children:"User Details"}),e.jsx("th",{children:"Actions"}),e.jsx("th",{children:"Login"})]})}),e.jsx("tbody",{children:l&&l.data.response.getUsers.filter(s=>String(s.UID).toLowerCase().includes(G.toLowerCase())).map((s,a)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:s.UID}),e.jsx("td",{children:s.name}),e.jsx("td",{children:s.phoneNumber}),e.jsx("td",{children:s.password}),e.jsx("td",{children:ie(s.createdAt)}),e.jsx("td",{children:s.downline.length}),e.jsx("td",{children:s.parentUserUid}),e.jsx("td",{children:s.commissionAmount.toFixed(2)}),e.jsx("td",{children:s.walletAmount.toFixed(2)}),e.jsx("td",{children:s.winningAmount.toFixed(2)}),e.jsxs("td",{children:[e.jsx("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",variant:"primary",onClick:()=>{te(s._id)},children:"Details"}),e.jsxs(c,{show:N,onHide:D,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(c.Header,{closeButton:!0,children:e.jsx(c.Title,{id:"contained-modal-title-vcenter",children:"User Personal & Bank Data"})}),e.jsxs(c.Body,{className:"userModalBody",children:[e.jsxs("div",{children:[e.jsx("h5",{children:"Personal Details"}),e.jsxs("div",{children:["  User Name :  ",e.jsx("input",{type:"text",value:U,onChange:t=>{B(t.target.value)}})," "]}),e.jsxs("div",{children:[" Password :  ",e.jsx("input",{type:"text",value:I,onChange:t=>{_(t.target.value)}})," "]}),e.jsxs("div",{children:[" PhoneNumber :  ",e.jsx("input",{type:"text",value:P,onChange:t=>{$(t.target.value)}})," "]}),e.jsxs("div",{children:[" Parent Referral Code :  ",e.jsx("input",{type:"text",value:F,onChange:t=>{R(t.target.value)}})," "]}),e.jsxs("div",{children:[" Wallet Amount :  ",e.jsx("input",{type:"text",value:T,onChange:t=>{M(t.target.value)}})," "]}),e.jsxs("div",{children:[" Recharge Amount :  ",e.jsx("input",{type:"text",value:z,onChange:t=>{q(t.target.value)}})," "]})]}),u&&x&&e.jsxs("div",{children:[e.jsx("h5",{children:"Bank Details"}),u&&e.jsxs("div",{children:[" Bank Name :  ",e.jsx("input",{type:"text",value:u,onChange:t=>{m(t.target.value)}})," "]}),x&&e.jsxs("div",{children:[" Account Holder Name :  ",e.jsx("input",{type:"text",value:x,onChange:t=>{p(t.target.value)}})," "]}),A&&e.jsxs("div",{children:[" Bank Account No :  ",e.jsx("input",{type:"text",value:A,onChange:t=>{g(t.target.value)}})," "]}),k&&e.jsxs("div",{children:[" City :  ",e.jsx("input",{type:"text",value:k,onChange:t=>{j(t.target.value)}})," "]}),f&&e.jsxs("div",{children:[" IFSC Code :  ",e.jsx("input",{type:"text",value:f,onChange:t=>{v(t.target.value)}})," "]}),S&&e.jsxs("div",{children:[" Bank Branch Address :  ",e.jsx("input",{type:"text",value:S,onChange:t=>{y(t.target.value)}})," "]})]})]}),e.jsx(c.Footer,{style:{textAlign:"center"},children:e.jsx("button",{onClick:()=>Y(Z),className:"userUpdate",children:"Submit"})})]})]}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>se(s._id),className:"activate",children:"Activate"}),e.jsx("button",{onClick:()=>ae(s._id),className:"deactivate",children:"Deactivate"})]}),e.jsx("td",{children:e.jsx("button",{className:"login-user",onClick:()=>{oe(s.phoneNumber,s.password)},children:"Login"})})]},a))})]}),e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:ne,children:"-"}),e.jsxs("div",{children:[o,"/",O]}),e.jsx("button",{onClick:re,children:"+"})]})]})]})]})}export{Be as default,h as toastProps};