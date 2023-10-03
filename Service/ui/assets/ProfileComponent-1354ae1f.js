import{R as h,r as u,u as P,a as N,A as z,j as e,L as E}from"./index-cc5e8f82.js";import{b as O}from"./back-button 1-53e9bab3.js";import{e as T}from"./earphone-d19d035b.js";import{p as A}from"./profile 2-e539e0ee.js";import{n as c}from"./next-1bd5c184.js";import{s as D}from"./shield 1-54442f07.js";import{N as S}from"./Nav-9aefb67a.js";import{U}from"./UserDetails-8b443147.js";import{a as p}from"./axios-4a70c6fc.js";/* empty css            */const W="/assets/mic-e86e30b3.svg",_="/assets/premium 1-911c8889.svg",B="/assets/gift-card 1-11885889.svg",L="/assets/marketing-2 1-f19613c3.svg",M="/assets/video-2 1-967e6304.svg",$="/assets/information-button 1-2210e45a.svg",f="/assets/customer-service 1-74cd4a42.svg";var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=h.createContext&&h.createContext(k),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(s){for(var l,r=1,i=arguments.length;r<i;r++){l=arguments[r];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(s[a]=l[a])}return s},o.apply(this,arguments)},R=globalThis&&globalThis.__rest||function(s,l){var r={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&l.indexOf(i)<0&&(r[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(s);a<i.length;a++)l.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(s,i[a])&&(r[i[a]]=s[i[a]]);return r};function C(s){return s&&s.map(function(l,r){return h.createElement(l.tag,o({key:r},l.attr),C(l.child))})}function y(s){return function(l){return h.createElement(G,o({attr:o({},s.attr)},l),C(s.child))}}function G(s){var l=function(r){var i=s.attr,a=s.size,n=s.title,j=R(s,["attr","size","title"]),m=a||r.size||"1em",d;return r.className&&(d=r.className),s.className&&(d=(d?d+" ":"")+s.className),h.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,i,j,{className:d,style:o(o({color:s.color||r.color},r.style),s.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),n&&h.createElement("title",null,n),s.children)};return b!==void 0?h.createElement(b.Consumer,null,function(r){return l(r)}):l(k)}function F(s){return y({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(s)}function H(s){return y({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"}}]})(s)}const V="/assets/prime-5266ae3b.svg";function re(){const[s,l]=u.useState(!0),[r,i]=u.useState(""),a=P(),[n,j]=N(z),[m,d]=N(U),w=()=>{sessionStorage.removeItem("authToken"),j(null),a("/signIn")},g=async()=>{try{let t=n.authToken,x=n.UID;const v=await p.get(`https://cosmotrade.live/api//getUserProfile/${x}`,{headers:{Authorization:`Bearer ${t}`}});if(v.status===200)return console.log(v),d(v),v}catch(t){t.response?t.response.data.message:t.message}},I=async()=>{try{let t=n.authToken;const x=await p.post("https://cosmotrade.live/api//updateUserProfile",{userName:r},{headers:{Authorization:`Bearer ${t}`}});if(x.status===200)return g(),l(!s),console.log(x),g(),x}catch(t){t.response?t.response.data.message:t.message}};return u.useEffect(()=>{g()},[]),e.jsxs("div",{className:"profileContainer",children:[e.jsx("div",{className:"container ProNav",children:e.jsxs("div",{className:"row",children:[e.jsx(E,{to:"/",className:"col-2",children:e.jsx("img",{src:O,alt:""})}),e.jsx("div",{className:"col-8",children:"Profile"}),e.jsx("div",{className:"col-2",style:{textAlign:"right"},onClick:()=>{a("/customerCare")},children:e.jsx("img",{src:T,alt:"",className:"header_headphone"})})]})}),e.jsxs("div",{className:"profile-card",children:[e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("div",{className:"img-cover",children:e.jsx("img",{src:A,alt:""})}),m&&m.data.data.userDetails.isPremiumUser===!0&&e.jsx("img",{src:V,alt:"",className:"prime-icon"})]}),e.jsx("div",{className:"col-8",children:e.jsxs("div",{className:"userData",children:[s?e.jsx("div",{children:e.jsxs("p",{children:["Name : ",m&&m.data.data.userDetails.name,"  ",e.jsx("span",{onClick:()=>l(!s),children:e.jsx(F,{style:{color:"#1B92AC",fontSize:"1.4rem"}})})]})}):e.jsx("div",{children:e.jsxs("p",{children:["Name : ",e.jsx("input",{type:"text",value:r,onChange:t=>{i(t.target.value)},className:"name-input"}),"  ",e.jsx("span",{onClick:I,children:e.jsx(H,{style:{color:"#1B92AC",fontSize:"1rem"}})})]})}),e.jsxs("p",{children:["ID : ",n.UID]}),e.jsxs("p",{children:["Mobile :",n.phoneNumber]})]})})]})}),e.jsxs("div",{className:"wallet listing-wrapper",children:[e.jsx("div",{className:"container",children:e.jsx("div",{className:"color-btn",children:e.jsx("button",{className:"promotion-btn",onClick:()=>{a("/promotion")},children:e.jsxs("div",{className:"promotion",children:[e.jsx("img",{src:W,alt:""}),"Promotion",e.jsx("img",{src:c,alt:""})]})})})}),e.jsxs("div",{className:"container chart",children:[e.jsxs("div",{className:"row",onClick:()=>{a("/premium")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:_,alt:""})})}),e.jsxs("div",{className:"col-8 lvlContainer",children:["Prime Membership ",e.jsx("div",{className:"lvl",children:"LV1"})]}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:D,alt:""})})}),e.jsx("div",{className:"col-8",onClick:()=>{a("/security")},children:"Account Security"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/promotion")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:L,alt:""})})}),e.jsx("div",{className:"col-8 ",children:"Promotion Mission "}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/gift")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:B,alt:""})})}),e.jsx("div",{className:"col-8",children:"Gift Code"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/beginnerTutorial")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:M,alt:""})})}),e.jsx("div",{className:"col-8",children:"Beginner Tutorial"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/about")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:$,alt:""})})}),e.jsx("div",{className:"col-8",children:"About"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/customerCare")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:f,alt:""})})}),e.jsx("div",{className:"col-8",children:"Customer Service"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]}),e.jsxs("div",{className:"row",onClick:()=>{a("/walletTransfer")},children:[e.jsx("div",{className:"col-2",children:e.jsx("div",{className:"profile-logo-Wrapper",children:e.jsx("img",{src:f,alt:""})})}),e.jsx("div",{className:"col-8",children:"Wallet to Wallet Transfer"}),e.jsx("div",{className:"col-2 backImg",children:e.jsx("img",{src:c,alt:""})})]})]})]}),e.jsx("div",{className:"container",children:e.jsx("div",{className:"color-btn",children:e.jsx("button",{className:"promotion-btn",style:{background:"linear-gradient(140deg, #C82F36 0%, #EC4E56 100%)",marginTop:"3rem",marginBottom:"8rem"},onClick:w,children:e.jsx("div",{className:"promotion",children:"Log Out"})})})})]}),e.jsx(S,{})]})}export{re as default};
