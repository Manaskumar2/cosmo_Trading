import{r as m,u as b,a as h,A as C,j as s,L as w}from"./index-be84e0db.js";import{b as I}from"./back-button 1-53e9bab3.js";import{e as U}from"./earphone-d19d035b.js";import{p as y,c as A}from"./prime-6680e2a5.js";import{n as i}from"./next-1bd5c184.js";import{s as D}from"./shield 1-54442f07.js";import{N as P}from"./Nav-2d9563b6.js";import{U as W}from"./UserDetails-c5198997.js";import{G as g}from"./iconBase-143cf9d1.js";import{a as j}from"./axios-4a70c6fc.js";/* empty css            */const z="/assets/mic-e86e30b3.svg",B="/assets/premium 1-911c8889.svg",L="/assets/gift-card 1-11885889.svg",S="/assets/marketing-2 1-f19613c3.svg",T="/assets/video-2 1-967e6304.svg",E="/assets/information-button 1-2210e45a.svg",v="/assets/customer-service 1-74cd4a42.svg";function M(c){return g({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(c)}function $(c){return g({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"}}]})(c)}function X(){const[c,d]=m.useState(!0),[x,p]=m.useState(""),a=b(),[r,N]=h(C),[o,u]=h(W),f=()=>{sessionStorage.removeItem("authUserToken"),N(null),a("/signIn")},n=async()=>{try{let e=r.authToken,l=r.UID;const t=await j.get(`https://cosmotrade.live/api//getUserProfile/${l}`,{headers:{Authorization:`Bearer ${e}`}});if(t.status===200)return console.log(t),u(t),t}catch(e){e.response?e.response.data.message:e.message}},k=async()=>{try{let e=r.authToken;const l=await j.post("https://cosmotrade.live/api//updateUserProfile",{userName:x},{headers:{Authorization:`Bearer ${e}`}});if(l.status===200)return n(),d(!c),console.log(l),n(),l}catch(e){e.response?e.response.data.message:e.message}};return m.useEffect(()=>{n()},[]),s.jsxs("div",{className:"profileContainer",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(w,{to:"/",className:"col-2",children:s.jsx("img",{src:I,alt:""})}),s.jsx("div",{className:"col-8",children:"Profile"}),s.jsx("div",{className:"col-2",style:{textAlign:"right"},onClick:()=>{a("/customerCare")},children:s.jsx("img",{src:U,alt:"",className:"header_headphone"})})]})}),s.jsxs("div",{className:"profile-card",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-4",children:[s.jsx("div",{className:"img-cover",children:s.jsx("img",{src:y,alt:""})}),o&&o.data.data.userDetails.isPremiumUser===!0&&s.jsx("img",{src:A,alt:"",className:"prime-icon"})]}),s.jsx("div",{className:"col-8",children:s.jsxs("div",{className:"userData",children:[c?s.jsx("div",{children:s.jsxs("p",{children:["Name : ",o&&o.data.data.userDetails.name,"  ",s.jsx("span",{onClick:()=>d(!c),children:s.jsx(M,{style:{color:"#1B92AC",fontSize:"1.4rem"}})})]})}):s.jsx("div",{children:s.jsxs("p",{children:["Name : ",s.jsx("input",{type:"text",value:x,onChange:e=>{p(e.target.value)},className:"name-input"}),"  ",s.jsx("span",{onClick:k,children:s.jsx($,{style:{color:"#1B92AC",fontSize:"1rem"}})})]})}),s.jsxs("p",{children:["ID : ",r.UID]}),s.jsxs("p",{children:["Mobile :",r.phoneNumber]})]})})]})}),s.jsxs("div",{className:"wallet listing-wrapper",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"color-btn",children:s.jsx("button",{className:"promotion-btn",onClick:()=>{a("/promotion")},children:s.jsxs("div",{className:"promotion",children:[s.jsx("img",{src:z,alt:""}),"Promotion",s.jsx("img",{src:i,alt:""})]})})})}),s.jsxs("div",{className:"container chart",children:[s.jsxs("div",{className:"row",onClick:()=>{a("/premium")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:B,alt:""})})}),s.jsxs("div",{className:"col-8 lvlContainer",children:["Prime Membership ",s.jsx("div",{className:"lvl",children:"LV1"})]}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:D,alt:""})})}),s.jsx("div",{className:"col-8",onClick:()=>{a("/security")},children:"Account Security"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/promotion")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:S,alt:""})})}),s.jsx("div",{className:"col-8 ",children:"Promotion Mission "}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/gift")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:L,alt:""})})}),s.jsx("div",{className:"col-8",children:"Gift Code"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/beginnerTutorial")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:T,alt:""})})}),s.jsx("div",{className:"col-8",children:"Beginner Tutorial"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/about")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:E,alt:""})})}),s.jsx("div",{className:"col-8",children:"About"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/customerCare")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:v,alt:""})})}),s.jsx("div",{className:"col-8",children:"Customer Service"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/walletTransfer")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:v,alt:""})})}),s.jsx("div",{className:"col-8",children:"Wallet to Wallet Transfer"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]})]})]}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"color-btn",children:s.jsx("button",{className:"promotion-btn",style:{background:"linear-gradient(140deg, #C82F36 0%, #EC4E56 100%)",marginTop:"3rem",marginBottom:"8rem"},onClick:f,children:s.jsx("div",{className:"promotion",children:"Log Out"})})})})]}),s.jsx(P,{})]})}export{X as default};
