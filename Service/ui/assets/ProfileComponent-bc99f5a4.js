import{r as m,u as k,a as h,A as b,j as s,L as C}from"./index-70e3bcd7.js";import{b as I}from"./back-button 1-53e9bab3.js";import{e as w}from"./earphone-d19d035b.js";import{p as U,c as y}from"./prime-6680e2a5.js";import{n as i}from"./next-1bd5c184.js";import{s as A}from"./shield 1-54442f07.js";import{N as D}from"./Nav-59da6c14.js";import{U as P}from"./UserDetails-af9992ff.js";import{G as v}from"./iconBase-a94df296.js";import{a as j}from"./axios-4a70c6fc.js";import"./Auth-8f851289.js";const z="/assets/mic-e86e30b3.svg",B="/assets/premium 1-911c8889.svg",L="/assets/gift-card 1-11885889.svg",S="/assets/marketing-2 1-f19613c3.svg",E="/assets/video-2 1-967e6304.svg",W="/assets/information-button 1-2210e45a.svg",M="/assets/customer-service 1-74cd4a42.svg";function T(r){return v({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(r)}function $(r){return v({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.5 2l-7.5 7.5-3.5-3.5-2.5 2.5 6 6 10-10z"}}]})(r)}function X(){const[r,d]=m.useState(!0),[x,p]=m.useState(""),a=k(),[c,g]=h(b),[l,N]=h(P),u=()=>{localStorage.removeItem("authUserToken"),g(null),a("/signIn")},t=async()=>{try{let e=c.authToken,o=c.UID;const n=await j.get(`https://cosmotrade.live/api/getUserProfile/${o}`,{headers:{Authorization:`Bearer ${e}`}});if(n.status===200)return N(n),n}catch(e){if(e.response.status===403)return a("/signIn"),response;e.response?e.response.data.message:e.message}},f=async()=>{try{let e=c.authToken;const o=await j.post("https://cosmotrade.live/api/updateUserProfile",{userName:x},{headers:{Authorization:`Bearer ${e}`}});if(o.status===200)return t(),d(!r),t(),o}catch(e){e.response?e.response.data.message:e.message}};return m.useEffect(()=>{t()},[]),s.jsxs("div",{className:"profileContainer",children:[s.jsx("div",{className:"container ProNav",children:s.jsxs("div",{className:"row",children:[s.jsx(C,{to:"/",className:"col-2",children:s.jsx("img",{src:I,alt:""})}),s.jsx("div",{className:"col-8",children:"Profile"}),s.jsx("div",{className:"col-2",style:{textAlign:"right"},onClick:()=>{a("/customerCare")},children:s.jsx("img",{src:w,alt:"",className:"header_headphone"})})]})}),s.jsxs("div",{className:"profile-card",children:[s.jsx("div",{className:"container",children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-4",children:[s.jsx("div",{className:"img-cover",children:s.jsx("img",{src:U,alt:""})}),l&&l.data.data.userDetails.isPremiumUser===!0&&s.jsx("img",{src:y,alt:"",className:"prime-icon"})]}),s.jsx("div",{className:"col-8",children:s.jsxs("div",{className:"userData",children:[r?s.jsx("div",{children:s.jsxs("p",{children:["Name : ",l&&l.data.data.userDetails.name,"  ",s.jsx("span",{onClick:()=>d(!r),children:s.jsx(T,{style:{color:"#1B92AC",fontSize:"1.4rem"}})})]})}):s.jsx("div",{children:s.jsxs("p",{children:["Name : ",s.jsx("input",{type:"text",value:x,onChange:e=>{p(e.target.value)},className:"name-input"}),"  ",s.jsx("span",{onClick:f,children:s.jsx($,{style:{color:"#1B92AC",fontSize:"1rem"}})})]})}),s.jsxs("p",{children:["ID : ",c.UID]}),s.jsxs("p",{children:["Mobile :",c.phoneNumber]})]})})]})}),s.jsxs("div",{className:"wallet listing-wrapper",children:[s.jsx("div",{className:"container",children:s.jsx("div",{className:"color-btn",children:s.jsx("button",{className:"promotion-btn",onClick:()=>{a("/promotion")},children:s.jsxs("div",{className:"promotion",children:[s.jsx("img",{src:z,alt:""}),"Promotion",s.jsx("img",{src:i,alt:""})]})})})}),s.jsxs("div",{className:"container chart",children:[s.jsxs("div",{className:"row",onClick:()=>{a("/premium")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:B,alt:""})})}),s.jsxs("div",{className:"col-8 lvlContainer",children:["Prime Membership ",s.jsx("div",{className:"lvl",children:"LV1"})]}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:A,alt:""})})}),s.jsx("div",{className:"col-8",onClick:()=>{a("/security")},children:"Account Security"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/promotion")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:S,alt:""})})}),s.jsx("div",{className:"col-8 ",children:"Promotion Mission "}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/gift")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:L,alt:""})})}),s.jsx("div",{className:"col-8",children:"Gift Code"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/beginnerTutorial")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:E,alt:""})})}),s.jsx("div",{className:"col-8",children:"Beginner Tutorial"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/about")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:W,alt:""})})}),s.jsx("div",{className:"col-8",children:"About"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]}),s.jsxs("div",{className:"row",onClick:()=>{a("/customerCare")},children:[s.jsx("div",{className:"col-2",children:s.jsx("div",{className:"profile-logo-Wrapper",children:s.jsx("img",{src:M,alt:""})})}),s.jsx("div",{className:"col-8",children:"Customer Service"}),s.jsx("div",{className:"col-2 backImg",children:s.jsx("img",{src:i,alt:""})})]})]})]}),s.jsx("div",{className:"container",children:s.jsx("div",{className:"color-btn",children:s.jsx("button",{className:"promotion-btn",style:{background:"linear-gradient(140deg, #C82F36 0%, #EC4E56 100%)",marginTop:"3rem",marginBottom:"8rem"},onClick:u,children:s.jsx("div",{className:"promotion",children:"Log Out"})})})})]}),s.jsx(D,{})]})}export{X as default};
