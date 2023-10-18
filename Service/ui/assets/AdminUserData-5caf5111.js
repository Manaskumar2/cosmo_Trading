import{f as le,r as n,R as ce,u as ue,d as he,h as me,a as xe,j as e}from"./index-13c7cc3a.js";import{A as pe,S as ge}from"./Side-1a933b25.js";import{a as l}from"./axios-4a70c6fc.js";import{M as c}from"./Modal-a499273f.js";/* empty css             */import{I as je,_ as u}from"./index-29444f7e.js";import"./TransitionWrapper-1ddcd552.js";import"./createWithBsPrefix-e33f4447.js";import"./index-31bd0afa.js";const ve=le({key:"AllUserData",default:null}),h={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Be(){const[S,Q]=n.useState(""),[w,D]=ce.useState(!1),U=()=>{D(!1),x(""),g(""),j(""),v(""),N(""),y(""),b("")},[m,x]=n.useState(""),[p,g]=n.useState(""),[A,j]=n.useState(0),[k,v]=n.useState(""),[G,Z]=n.useState(""),[f,y]=n.useState(""),[C,b]=n.useState(""),[B,I]=n.useState(""),[P,_]=n.useState(""),[$,F]=n.useState(""),[M,R]=n.useState(""),[K,N]=n.useState(""),[T,L]=n.useState(0),[z,H]=n.useState(0);ue();const o=he(me),[r,W]=n.useState(1),[q,ye]=n.useState(""),[E,be]=n.useState([]),[i,V]=xe(ve),X=async a=>{try{let s=o.authToken;const t=await l.put(`https://cosmotrade.live/api/admin/updateUser/${a}`,{bankName:m,accountHolderName:p,bankAccountNo:A,bankId:K,city:k,ifscCode:f,bankBranchAddress:C,name:B,phoneNumber:P,password:$,parentReferralCode:M,walletAmount:T,rechargeAmount:z},{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return u.success("User Data Successfully Updated",{...h}),x(""),g(""),j(""),v(""),N(""),y(""),b(""),U(),t}catch(s){s.response?s.response.data.message:s.message}},Y=async()=>{try{let a=o.authToken;const s=await l.get("https://cosmotrade.live/api/admin/getAllUsers",{headers:{Authorization:`Bearer ${a}`},params:{queryPageIndex:r,queryPageSortBy:E}});if(s.status===200){const t=q.toLowerCase(),d=s.data.response.getUsers.filter(O=>{const ie=O.phoneNumber.includes(t),de=O.UID.toString().toLowerCase().includes(t);return ie||de});V({...s,data:{...s.data,response:{...s.data.response,getUsers:d}}})}}catch(a){const s=a.response?a.response.data.message:a.message;console.error("An error occurred:",s)}},ee=async a=>{try{let s=o.authToken;const t=await l.get(`https://cosmotrade.live/api/admin/userAndBankData/${a}`,{headers:{Authorization:`Bearer ${s}`}});return t.status,t.data.user&&(I(t.data.user.name),_(t.data.user.phoneNumber),F(t.data.user.password),R(t.data.user.parentReferralCode),L(t.data.user.walletAmount.toFixed(2)),H(t.data.user.rechargeAmount.toFixed(2)),Z(t.data.user._id)),t.data.bankDetails!==null&&(x(t.data.bankDetails.bankName),g(t.data.bankDetails.accountHolderName),j(t.data.bankDetails.bankAccountNo),v(t.data.bankDetails.city),N(t.data.bankDetails._id),y(t.data.bankDetails.ifscCode),b(t.data.bankDetails.bankBranchAddress)),D(!0),console.log(w),t}catch(s){s.response?s.response.data.message:s.message}},te=async a=>{try{let s=o.authToken;const t=await l.patch(`https://cosmotrade.live/api/admin/activateUser/${a}`,{},{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return u.success("User Activated",{...h}),t}catch(s){const t=s.response?s.response.data.message:s.message;console.error(t)}},ae=async a=>{try{let s=o.authToken,t=o._id;const d=await l.patch(`https://cosmotrade.live/api/admin/deactivateUser/${a}`,{},{headers:{Authorization:`Bearer ${s}`}});if(d.status===200)return u.success("User Deactivated",{...h}),d}catch(s){const t=s.response?s.response.data.message:s.message;console.error(t)}};n.useEffect(()=>{Y()},[r,q,E]);const J=i&&i.data.response.totalPages,se=()=>{r>1&&W(r-1)},ne=()=>{r<J&&W(r+1)},re=async(a,s)=>{try{const t=await l.post("https://cosmotrade.live/api/signIn",{phoneNumber:a,password:s});if(t.status===200)return u.success("Welcome to our Gaming Zone",{...h}),localStorage.setItem("authUserToken",JSON.stringify(t.data.data)),window.open("/","_blank"),t}catch(t){const d=t.response?t.response.data.message:t.message;u.error(d||"Something went wrong",{...h})}};function oe(a){const s={year:"numeric",month:"numeric",day:"numeric"};return new Date(a).toLocaleDateString(void 0,s)}return e.jsxs("div",{children:[e.jsx(pe,{}),e.jsxs("div",{className:"flex-div",children:[e.jsx(ge,{}),e.jsxs("div",{className:"admin-rightSection",children:[e.jsx(je,{}),e.jsx("input",{type:"text",className:"user-input",value:S,onChange:a=>Q(a.target.value),placeholder:"Search UID"}),e.jsxs("div",{className:"total-wallet-amount",children:[e.jsx("h4",{children:"Total Wallet Amount Of All Users"}),e.jsx("div",{children:i&&i.data.response.totalWalletAmount})]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row",children:[e.jsx("th",{children:"UID"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"Password"}),e.jsx("th",{children:"Joining Date"}),e.jsx("th",{children:"Total Downline"}),e.jsx("th",{children:"Parent Id"}),e.jsx("th",{children:"Commission Earned"}),e.jsx("th",{children:"Wallet Amount"}),e.jsx("th",{children:"Winning Amount"}),e.jsx("th",{children:"User Details"}),e.jsx("th",{children:"Actions"}),e.jsx("th",{children:"Login"})]})}),e.jsx("tbody",{children:i&&i.data.response.getUsers.filter(a=>String(a.UID).toLowerCase().includes(S.toLowerCase())).map((a,s)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:a.UID}),e.jsx("td",{children:a.name}),e.jsx("td",{children:a.phoneNumber}),e.jsx("td",{children:a.password}),e.jsx("td",{children:oe(a.createdAt)}),e.jsx("td",{children:a.downline.length}),e.jsx("td",{children:a.parentUserUid}),e.jsx("td",{children:a.commissionAmount.toFixed(2)}),e.jsx("td",{children:a.walletAmount.toFixed(2)}),e.jsx("td",{children:a.winningAmount.toFixed(2)}),e.jsxs("td",{children:[e.jsx("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#exampleModalCenter",variant:"primary",onClick:()=>{ee(a._id)},children:"Details"}),e.jsxs(c,{show:w,onHide:U,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[e.jsx(c.Header,{closeButton:!0,children:e.jsx(c.Title,{id:"contained-modal-title-vcenter",children:"User Personal & Bank Data"})}),e.jsxs(c.Body,{className:"userModalBody",children:[e.jsxs("div",{children:[e.jsx("h5",{children:"Personal Details"}),e.jsxs("div",{children:["  User Name :  ",e.jsx("input",{type:"text",value:B,onChange:t=>{I(t.target.value)}})," "]}),e.jsxs("div",{children:[" Password :  ",e.jsx("input",{type:"text",value:$,onChange:t=>{F(t.target.value)}})," "]}),e.jsxs("div",{children:[" PhoneNumber :  ",e.jsx("input",{type:"text",value:P,onChange:t=>{_(t.target.value)}})," "]}),e.jsxs("div",{children:[" Parent Referral Code :  ",e.jsx("input",{type:"text",value:M,onChange:t=>{R(t.target.value)}})," "]}),e.jsxs("div",{children:[" Wallet Amount :  ",e.jsx("input",{type:"text",value:T,onChange:t=>{L(t.target.value)}})," "]}),e.jsxs("div",{children:[" Recharge Amount :  ",e.jsx("input",{type:"text",value:z,onChange:t=>{H(t.target.value)}})," "]})]}),m&&p&&e.jsxs("div",{children:[e.jsx("h5",{children:"Bank Details"}),m&&e.jsxs("div",{children:[" Bank Name :  ",e.jsx("input",{type:"text",value:m,onChange:t=>{x(t.target.value)}})," "]}),p&&e.jsxs("div",{children:[" Account Holder Name :  ",e.jsx("input",{type:"text",value:p,onChange:t=>{g(t.target.value)}})," "]}),A&&e.jsxs("div",{children:[" Bank Account No :  ",e.jsx("input",{type:"text",value:A,onChange:t=>{j(t.target.value)}})," "]}),k&&e.jsxs("div",{children:[" City :  ",e.jsx("input",{type:"text",value:k,onChange:t=>{v(t.target.value)}})," "]}),f&&e.jsxs("div",{children:[" IFSC Code :  ",e.jsx("input",{type:"text",value:f,onChange:t=>{y(t.target.value)}})," "]}),C&&e.jsxs("div",{children:[" Bank Branch Address :  ",e.jsx("input",{type:"text",value:C,onChange:t=>{b(t.target.value)}})," "]})]})]}),e.jsx(c.Footer,{style:{textAlign:"center"},children:e.jsx("button",{onClick:()=>X(G),className:"userUpdate",children:"Submit"})})]})]}),e.jsxs("td",{children:[e.jsx("button",{onClick:()=>te(a._id),className:"activate",children:"Activate"}),e.jsx("button",{onClick:()=>ae(a._id),className:"deactivate",children:"Deactivate"})]}),e.jsx("td",{children:e.jsx("button",{className:"login-user",onClick:()=>{re(a.phoneNumber,a.password)},children:"Login"})})]},s))})]}),e.jsxs("div",{className:"inc-dec-btns",children:[e.jsx("button",{onClick:se,children:"-"}),e.jsxs("div",{children:[r,"/",J]}),e.jsx("button",{onClick:ne,children:"+"})]})]})]})]})}export{Be as default,h as toastProps};