import{r as i,d as _,A as O,a as T,j as e,R as ce,u as re,e as K,L as z}from"./index-824af789.js";import{b as oe}from"./back-button 1-53e9bab3.js";import{P as de,l as he,A as xe,m as me,c as ue,T as je,M as u}from"./Timer-c715fdbc.js";import{w as pe,r as ge,a as ve}from"./reload 1-451f7926.js";import{e as be}from"./earphone-d19d035b.js";import{W as Q}from"./Accordian-3a32bb7d.js";import{b as Ne,a as ye,A,B as G,r as fe,l as ke,C as ee,R as se,T as te}from"./GameTimeRiseup-b3873efe.js";/* empty css            */import{I as q,_ as B}from"./index-9485cae4.js";import{a as M}from"./axios-4a70c6fc.js";import{U as we}from"./UserDetails-8e474088.js";import"./TransitionWrapper-9fca4408.js";import"./createWithBsPrefix-41bb0fc3.js";const $="/assets/gama-42dc3966.svg",V={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Ce({duration:I}){const[f,c]=i.useState(null),D=s=>{c(f===s?null:s)},v=[A,G,$],[j,S]=i.useState(1),k=_(O),[U,w]=T(Ne),[p,h]=T(ye),[r,g]=i.useState(1),C=async()=>{try{let s=k._id,t=k.authToken;const o=await M.get(`https://cosmotrade.live/api//get2ndgameUserHistory/${s}`,{params:{page:r},headers:{Authorization:`Bearer ${t}`}});if(o.status===200)return console.log(o),h(o),o}catch(s){const t=s.response?s.response.data.message:s.message;B.error(t||"Something went wrong",{...V})}},b=async()=>{try{let s=k.authToken;const t=await M.get(`https://cosmotrade.live/api//gameHistory/${I}`,{headers:{Authorization:`Bearer ${s}`}});if(t.status===200)return w(t.data),t}catch(s){const t=s.response?s.response.data.message:s.message;B.error(t||"Something went wrong",{...V})}};i.useEffect(()=>{b();const s=setInterval(()=>{b()},5e3);return()=>clearInterval(s)},[I]),i.useEffect(()=>{C();const s=setInterval(()=>{C()},4500);return()=>clearInterval(s)},[r]);const x=s=>{S(s)};return e.jsxs("div",{className:"gameHistory",children:[e.jsx(q,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:j===1?"activeTab record-btn":" record-btn",onClick:()=>{x(1)},children:e.jsx("p",{children:"Game Record"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:j===2?"activeTab record-btn":"record-btn ",onClick:()=>{x(2)},children:e.jsx("p",{children:"My Game Record"})})})]})}),j===1&&e.jsx("div",{className:"period-heading",children:e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",children:"Winner"})]})}),e.jsx("tbody",{children:U&&U.data.filter(s=>s.isCompleted).map((s,t)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{width:"140",children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:Q,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:s.winnerGroup==="A"?e.jsx("img",{src:A,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.winnerGroup==="B"?e.jsx("img",{src:G,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.winnerGroup==="C"?e.jsx("img",{src:$,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):s.winnerGroup===null&&s.gameUID%2===1?e.jsx("img",{src:A,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.winnerGroup===null&&s.gameUID%2===0?e.jsx("img",{src:G,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.winnerGroup===null&&s.gameUID%3===0?e.jsx("img",{src:$,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):null}),s.runnerUpGroup&&e.jsx("span",{className:"icon_rate",children:s.runnerUpGroup==="A"?e.jsx("img",{src:A,alt:"Alpha"}):s.runnerUpGroup==="B"?e.jsx("img",{src:G,alt:"Beta"}):s.runnerUpGroup==="C"?e.jsx("img",{src:$,alt:"Gamma"}):s.runnerUpGroup===null&&s.gameUID%2===1?e.jsx("img",{src:A,alt:"Alpha"}):s.runnerUpGroup===null&&s.gameUID%2===0?e.jsx("img",{src:G,alt:"Beta"}):s.runnerUpGroup===null&&s.gameUID%5===0?e.jsx("img",{src:$,alt:"Gamma"}):null})]})})]},t))})]})})}),j===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:p&&p.data&&p.data.history.map((s,t)=>e.jsxs(ce.Fragment,{children:[e.jsxs("tr",{onClick:()=>D(t),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:Q,alt:"Winner"})}),e.jsx("span",{className:"icon_rate",children:s.group==="A"?e.jsx("img",{src:A,alt:"Alpha",style:{height:"2rem",width:"2rem"}}):s.group==="B"?e.jsx("img",{src:G,alt:"Beta",style:{height:"2rem",width:"2rem"}}):s.group==="C"?e.jsx("img",{src:$,alt:"Gamma",style:{height:"2rem",width:"2rem"}}):e.jsx("img",{src:v[Math.floor(Math.random()*v.length)],alt:"Random Icon"})}),s.runnerUpGroup&&e.jsx("span",{className:"icon_rate",children:s.runnerUpGroup==="A"?e.jsx("img",{src:A,alt:"Alpha"}):s.runnerUpGroup==="B"?e.jsx("img",{src:G,alt:"Beta"}):s.runnerUpGroup==="C"?e.jsx("img",{src:$,alt:"Gamma"}):e.jsx("img",{src:v[Math.floor(Math.random()*v.length)],alt:"Random Icon"})})]})})]}),f===t&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="A"?"Alpha":s.group==="B"?"Beta":s.group==="C"?"Gama":"Unknown"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Runner Up :"}),e.jsx("p",{children:s.runnerUpGroup&&s.runnerUpGroup==="A"?"Alpha":s.runnerUpGroup==="B"?"Beta":s.runnerUpGroup==="C"?"Gama":"None"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{style:{textAlign:"left"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},t))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{g(Math.max(r-1,1))},children:e.jsx("img",{src:fe,alt:""})}),p&&e.jsxs("div",{className:"page-count",children:["  ",r,"/",p.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{g(Math.min(r+1,p.data.totalPages))},children:e.jsx("img",{src:ke,alt:""})})]})})]})})]})}const Ae={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Ge(){var g,C,b,x,s;const[I,f]=T(ee),[c,D]=T(se),v=_(O),j=_(te),[S,k]=i.useState(0),U=((g=c==null?void 0:c.data)==null?void 0:g.currentTime)||null,w=((b=(C=c==null?void 0:c.data)==null?void 0:C.data)==null?void 0:b.endTime)||null,p=async()=>{try{let t=v.authToken;const o=await M.get(`https://cosmotrade.live/api//getSecondGame/${j}`,{headers:{Authorization:`Bearer ${t}`}});if(o.status===200)return D(o),o}catch(t){const o=t.response?t.response.data.message:t.message;B.error(o||"Something went wrong",{...Ae})}};i.useEffect(()=>{if(console.log(c),w){const t=new Date(U).getTime(),P=new Date(w).getTime()-t;if(P>0){const F=Math.floor(P/1e3);k(F);const R=setInterval(()=>{k(N=>N>0?(Math.floor(N/60)===0&&N%60===6&&f(!0),N-1):(clearInterval(R),N===0&&p(),0))},1e3);return()=>clearInterval(R)}}},[w,f]),i.useEffect(()=>{const t=setInterval(p,1500);return()=>{clearInterval(t)}},[]);const h=Math.floor(S/60),r=S%60;return e.jsxs("div",{children:[e.jsx(q,{}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row time-play",children:[e.jsx("div",{className:"col-6 left",children:c&&j?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"selected-mint",children:[j," minute"]}),e.jsx("h3",{children:(s=(x=c==null?void 0:c.data)==null?void 0:x.data)==null?void 0:s.gameUID})]}):null}),e.jsxs("div",{className:"col-6 right",children:[e.jsx("p",{style:{color:"#97E2F2",textAlign:"center",marginBottom:"0"},children:"Left time to buy"}),e.jsx("div",{className:"end-time",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"time_minute",children:h})," ",e.jsx("div",{className:"time_colon",children:":"})," ",e.jsx("div",{className:"time_seconds",children:r<10?`0${r}`:r})]})})]})]})})]})}const X="/assets/alfaBtn-f9a44bb9.svg",Y="/assets/betaBtn-defa9d9b.svg",Z="/assets/gama-a2e672fc.svg",E={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Ee(){const[I,f]=T(de),[c,D]=i.useState(!0),v=re(),[j,S]=T(we),[k,U]=i.useState(1),w=K(te),p=K(se),h=_(O),[r,g]=i.useState(1),[C,b]=i.useState(""),[x,s]=i.useState(1),[t,o]=i.useState(1),[P,F]=i.useState(!1),[R,N]=i.useState(!1),[ae,H]=i.useState(!1),ne=_(ee),[d,le]=i.useState(0),ie=a=>{U(a)},L=async()=>{try{let a=h.authToken,l=h.UID;const y=await M.get(`https://cosmotrade.live/api//getUserProfile/${l}`,{headers:{Authorization:`Bearer ${a}`}});if(y.status===200)return S(y),y}catch(a){const l=a.response?a.response.data.message:a.message;B.error(l||"Something went wrong",{...E})}},W=async()=>{h.authToken;try{let a=h.authToken;const l=await M.post("https://cosmotrade.live/api//betSecondGame",{amount:r,group:C,duration:x},{headers:{Authorization:`Bearer ${a}`}});if(l.status===201)return B.success("Bet created Successfully!",{...E}),b(""),g(1),N(!1),H(!1),console.log(l),L(),l;if(l.status===404)return null}catch(a){if(a.response&&a.response.status===404)return null;const l=a.response?a.response.data.message:a.message;B.error(l||"Something went wrong",{...E})}},J=async a=>{try{let l=h.authToken;console.log(a),console.log(l);const y=await M.get(`https://cosmotrade.live/api//getSecondGame/${a}`,{headers:{Authorization:`Bearer ${l}`}});if(y.status===200)return w(a),p(y),y}catch(l){const y=l.response?l.response.data.message:l.message;B.error(y||"Something went wrong",{...E})}};i.useEffect(()=>{if(console.log(x),h.authToken&&h.UID){J(x);const a=setTimeout(async()=>{await L()},3e3);return()=>{clearTimeout(a)}}},[h,x]),i.useEffect(()=>{g(d*t)},[d,t]);const m=a=>{le(a)},n=a=>{o(a==="+"?l=>l+1:a==="-"?l=>Math.max(l-1,1):parseInt(a))};return e.jsxs("div",{className:"win",children:[e.jsx("div",{className:"container winNav",children:e.jsxs("div",{className:"row",children:[e.jsx(z,{to:"/",className:"col-2",children:e.jsx("img",{src:oe,alt:""})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:he,alt:""})}),e.jsxs("div",{className:"col-2",children:[e.jsx("img",{src:be,alt:"",className:"header_headphone",onClick:()=>{v("/customerCare")}}),I?e.jsx("img",{src:xe,alt:"",onClick:()=>{f(!1)}}):e.jsx("img",{src:me,alt:"",onClick:()=>{f(!0)}})]})]})}),e.jsx(q,{}),e.jsx("div",{className:"wallet",children:e.jsxs("div",{className:"container winWallet",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:pe,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:ge,alt:""})," ",j&&j.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:ve,alt:"",style:{marginLeft:10},onClick:L})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row wr-btns",children:[e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>v("/withdraw"),className:"withdraw",children:"Withdraw"})}),e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>v("/recharge"),className:"recharge",children:"Recharge"})})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"clock-btn-containerRaiseUp row",children:e.jsxs("button",{className:k===1?"activeClockRaiseUp col-3":"clock-btn col-3",onClick:()=>{s(1),J(x),ie(1),w(1)},children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:ue,alt:""})}),e.jsx("p",{children:"1 minute"})]})})}),e.jsxs(e.Fragment,{children:[e.jsx(Ge,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:ne===!0?e.jsx(je,{}):e.jsx("div",{className:"second-image-cover",children:e.jsxs("div",{className:" alfa-beta-gama-button-container",children:[e.jsxs("button",{className:"alfa-beta-gama-button",onClick:()=>{F(!0),b("A")},style:{background:"radial-gradient(50% 50% at 50% 50%, #FF7562 0%, #E51616 100%)"},children:[e.jsx("img",{src:X,alt:""}),e.jsx("p",{children:"ALPHA"})]}),e.jsxs("button",{className:"alfa-beta-gama-button",onClick:()=>{N(!0),b("B")},style:{background:"radial-gradient(50% 50% at 50% 50%, #8DFF8A 0%, #09BD05 100%)"},children:[e.jsx("img",{src:Y,alt:""}),e.jsx("p",{children:"BETA"})]}),e.jsxs("button",{className:"alfa-beta-gama-button",onClick:()=>{H(!0),b("C")},style:{background:"radial-gradient(50% 50% at 50% 50%, #FFF3C9 0%, #DEAF06 100%)"},children:[e.jsx("img",{src:Z,alt:""}),e.jsx("p",{children:"GAMA"})]})]})})}),e.jsxs(u,{size:"lg",show:P,onHide:()=>F(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(u.Header,{closeButton:!0,children:e.jsxs(u.Title,{id:"example-modal-sizes-title-lg modal-title",children:["1 minute",e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsxs("button",{className:"alfa-beta-gama-button",style:{background:"radial-gradient(50% 50% at 50% 50%, #FF7562 0%, #E51616 100%)"},children:[e.jsx("img",{src:X,alt:""}),e.jsx("p",{children:"ALPHA"})]})})]})}),e.jsx(u.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${d===1?"active-btn":""}`,onClick:()=>m(1),children:"1"}),e.jsx("button",{className:`x-section ${d===10?"active-btn":""}`,onClick:()=>m(10),children:"10"}),e.jsx("button",{className:`x-section ${d===100?"active-btn":""}`,onClick:()=>m(100),children:"100"}),e.jsx("button",{className:`x-section ${d===1e3?"active-btn":""}`,onClick:()=>m(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:t}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:a=>{g(a.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${t==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${t==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${t==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${t==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${t==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:c}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(z,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:W,children:["Total Price: ",r]})]})})]}),e.jsxs(u,{size:"lg",show:R,onHide:()=>N(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(u.Header,{closeButton:!0,children:e.jsxs(u.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsxs("button",{className:"alfa-beta-gama-button",style:{background:"radial-gradient(50% 50% at 50% 50%, #8DFF8A 0%, #09BD05 100%)"},children:[e.jsx("img",{src:Y,alt:""}),e.jsx("p",{children:"Beta"})]})})]})}),e.jsx(u.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${d===1?"active-btn":""}`,onClick:()=>m(1),children:"1"}),e.jsx("button",{className:`x-section ${d===10?"active-btn":""}`,onClick:()=>m(10),children:"10"}),e.jsx("button",{className:`x-section ${d===100?"active-btn":""}`,onClick:()=>m(100),children:"100"}),e.jsx("button",{className:`x-section ${d===1e3?"active-btn":""}`,onClick:()=>m(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:t}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:a=>{g(a.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${t==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${t==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${t==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${t==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${t==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:c}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(z,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:W,children:["Total Price: ",r]})]})})]}),e.jsxs(u,{size:"lg",show:ae,onHide:()=>H(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(u.Header,{closeButton:!0,children:e.jsxs(u.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsxs("button",{className:"alfa-beta-gama-button",style:{background:"radial-gradient(50% 50% at 50% 50%, #FFF3C9 0%, #DEAF06 100%)"},children:[e.jsx("img",{src:Z,alt:""}),e.jsx("p",{children:"Gama"})]})})]})}),e.jsx(u.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${d===1?"active-btn":""}`,onClick:()=>m(1),children:"1"}),e.jsx("button",{className:`x-section ${d===10?"active-btn":""}`,onClick:()=>m(10),children:"10"}),e.jsx("button",{className:`x-section ${d===100?"active-btn":""}`,onClick:()=>m(100),children:"100"}),e.jsx("button",{className:`x-section ${d===1e3?"active-btn":""}`,onClick:()=>m(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:t}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:a=>{g(a.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${t==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${t==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${t==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${t==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${t==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:c}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(z,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:W,children:["Total Price: ",r]})]})})]})]}),e.jsx(Ce,{duration:x})]})]})]})}export{Ee as default,E as toastProps};