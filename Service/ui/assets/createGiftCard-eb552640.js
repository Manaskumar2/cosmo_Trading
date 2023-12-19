import{r as a,u as H,b as R,h as T,j as e}from"./index-555ca70e.js";import{B as U}from"./Button-178f5130.js";/* empty css             */import{a as S}from"./axios-4a70c6fc.js";import{I as P,_ as d}from"./index-697d60b7.js";import{A as _,S as $}from"./Side-c730da09.js";import{M as r}from"./Modal-7d90b00f.js";import"./setPrototypeOf-35303ce5.js";import"./Button-de888c1d.js";import"./TransitionWrapper-84340a80.js";import"./index-1f7d40ad.js";const c={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function X(){const[b,l]=a.useState(!1),h=()=>l(!1),G=()=>l(!0),w=H(),[m,B]=a.useState(null),[i,n]=a.useState(null),[k,x]=a.useState(!1),o=a.useRef(null);a.useEffect(()=>{const t=localStorage.getItem("gift");if(t){const s=JSON.parse(t);n(s)}else n(null)},[]);const u=R(T),[f,j]=a.useState(""),[p,I]=a.useState(null),[g,C]=a.useState(0),[y,v]=a.useState(0),D=async()=>{try{let t=u.authToken;const s=await S.get("https://cosmotrade.live/api/admin/getGiftCode",{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return B(s.data),console.log(s.data),s}catch(t){const s=t.response?t.response.data.message:t.message;d.error(s||"Gift card not Found.",{...c})}},A=async()=>{try{let t=u.authToken;const s=await S.post("https://cosmotrade.live/api/admin/giftCode",{code:f,maxClaims:g,amount:y},{headers:{Authorization:`Bearer ${t}`}});if(s.status===200)return localStorage.setItem("gift",JSON.stringify(s.data.data)),n(s.data.data),j(""),v(0),C(0),d.success("Successfully Created Gift Card",{...c}),s}catch(t){const s=t.response?t.response.data.message:t.message;d.error(s||"Gift card not Found.",{...c})}},E=()=>{o.current&&(o.current.select(),document.execCommand("copy"),x(!0),setTimeout(()=>{x(!1)},2e3))};return a.useEffect(()=>{D()},[]),e.jsxs("div",{children:[e.jsx(_,{}),e.jsxs("div",{children:[e.jsx($,{}),e.jsxs("div",{className:"giftCardPage",children:[e.jsx(P,{}),e.jsxs("div",{className:"gift-body",children:[e.jsxs("div",{className:"box",children:[e.jsx("h6",{children:"Create Gift Card"}),e.jsx("p",{children:"Enter Gift card Name"}),e.jsx("input",{type:"text",value:f,onChange:t=>{j(t.target.value)}}),e.jsx("p",{children:"Enter Gift Amount"}),e.jsx("input",{type:"text",value:y,onChange:t=>{v(t.target.value)}}),e.jsx("p",{children:"Enter How many Person You Want to Share"}),e.jsx("input",{type:"text",value:g,onChange:t=>{C(t.target.value)}}),e.jsx("div",{className:"row gift-btn",children:e.jsx("button",{className:"col-12 submit-gft-btn",onClick:A,children:"SUBMIT"})}),e.jsx("div",{className:"row gift-btn",children:e.jsx("button",{className:"col-12 history-gft-btn",onClick:()=>{w("/admin/giftCodeHistory")},children:"Gift Code History"})})]}),e.jsx("div",{className:"Gift-code",children:i&&e.jsxs("div",{className:"box",children:[e.jsx("h6",{children:"Your Gift Card"}),e.jsxs("div",{className:"gift-code-row",children:[e.jsx("h5",{children:" Gift Code : "}),e.jsx("input",{type:"text",value:i.code,readOnly:!0,ref:o}),e.jsx("button",{onClick:E,children:k?"Copied":"Copy"})]}),e.jsxs("div",{className:"gift-code-row",children:[e.jsx("h5",{children:" Amount : "}),e.jsx("p",{children:i.amount})]}),e.jsxs("div",{className:"gift-code-row",children:[e.jsx("h5",{children:" Maximum Person Claim : "}),e.jsx("p",{children:i.maxClaims})]})]})})]}),e.jsx("div",{className:"container",children:e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-row table-heading-admin",children:[e.jsx("th",{children:"Sl No"}),e.jsx("th",{children:"Gift Code"}),e.jsx("th",{children:"Total Claimed"}),e.jsx("th",{children:"Remaining Claims"}),e.jsx("th",{children:"Details"})]})}),e.jsx("tbody",{children:m&&m.map((t,s)=>e.jsxs("tr",{className:"table-row",children:[e.jsx("td",{children:s+1}),e.jsx("td",{children:t.code}),e.jsx("td",{children:t.claimedByUsers.length}),e.jsx("td",{children:t.maxClaim-t.claimedByUsers.length}),e.jsxs("td",{children:[" ",e.jsx("button",{type:"button",class:"btn btn-primary",onClick:()=>{I(t),G()},children:"Details"}),e.jsxs(r,{show:b,onHide:h,centered:!0,children:[e.jsx(r.Header,{closeButton:!0,children:e.jsx(r.Title,{children:"Gift Code Claimed By"})}),e.jsx(r.Body,{className:"userModalBody",children:e.jsx("div",{children:p&&p.claimedByUsers.map((N,M)=>e.jsx("ol",{children:e.jsxs("div",{children:[e.jsxs("span",{style:{marginRight:"5rem"},children:["UID: ",N.UID]}),"  ",e.jsxs("span",{children:["Name: ",N.name," "]})," "]})},M))})}),e.jsx(r.Footer,{children:e.jsx(U,{variant:"secondary",onClick:h,children:"Close"})})]})," "]})]},s))})]})})]})]})]})}export{X as default,c as toastProps};