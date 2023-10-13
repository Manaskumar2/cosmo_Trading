import{a as P,d as T,A as ee,r as a,j as e,R as Se,u as Be,e as de,L as $}from"./index-07243434.js";import{b as Me}from"./back-button 1-53e9bab3.js";import{P as Ie,l as Pe,A as Te,m as De,c as L,T as W}from"./Timer-0e11bf57.js";import{w as ze,r as _e,a as Ge}from"./reload 1-451f7926.js";import{e as He}from"./earphone-d19d035b.js";import{M as c}from"./Modal-6b6eb5e8.js";import{G as Ue,W as xe}from"./GameHistory-92bc2388.js";import{C as se,S as ue,O as ve,T as be,m as Ee,U as Fe,A as X,B as Z,r as he,l as me}from"./Second-8df5e9e3.js";/* empty css            */import{I as ne,_ as G}from"./index-a3104dc6.js";import{a as H}from"./axios-4a70c6fc.js";import{U as Le}from"./UserDetails-fc66ec5b.js";import"./TransitionWrapper-169b9438.js";import"./createWithBsPrefix-b8b74e8a.js";import"./index-853571dd.js";const R="/assets/alfa-bd3fb70f.svg",O="/assets/beta-a6b4073d.svg",K="/assets/A-modal-a001361f.svg",Y="/assets/betabtn-8f8581e7.svg";function q(){var o,h,D,m;const[E,g]=P(se),[y,j]=P(ue),[b,S]=P(ve),f=T(ee),B=T(be),[u,N]=a.useState(0),M=Ee(new Date).tz("Asia/Kolkata").toISOString(),p=((h=(o=b==null?void 0:b.data)==null?void 0:o.data)==null?void 0:h.endTime)||null,k=async()=>{try{let d=f.authToken;const w=await H.get(`https://cosmotrade.live/api/getgame/${B}`,{headers:{Authorization:`Bearer ${d}`}});if(w.status===200)return S(w),w}catch(d){d.response?d.response.data.message:d.message}};a.useEffect(()=>{if(p){const d=new Date(M).getTime(),s=new Date(p).getTime()-d;if(s>0){const r=Math.floor(s/1e3);N(r),g(r);const I=setInterval(()=>{N(v=>v>0?(v===6&&(y||j(!0)),v-1):((v===0||v===59||v===58||v===57)&&k(),0))},1e3);return()=>clearInterval(I)}}},[M,y]),u===5&&!y&&j(!0);const i=Math.floor(u/60),C=u%60;return a.useEffect(()=>{const d=setInterval(k,1e3);return()=>{clearInterval(d)}},[]),e.jsxs("div",{children:[e.jsx(ne,{}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row time-play",children:[e.jsx("div",{className:"col-6 left",children:b&&B?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"selected-mint",children:[B," minute"]}),e.jsx("h3",{children:(m=(D=b==null?void 0:b.data)==null?void 0:D.data)==null?void 0:m.gameUID})]}):null}),e.jsxs("div",{className:"col-6 right",children:[e.jsx("p",{style:{color:"#97E2F2",textAlign:"center",marginBottom:"0"},children:"Left time to buy"}),e.jsx("div",{className:"end-time",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"time_minute",children:i})," ",e.jsx("div",{className:"time_colon",children:":"})," ",e.jsx("div",{className:"time_seconds",children:C<10?`0${C}`:C})]})})]})]})})]})}const je={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function J({duration:E}){const[g,y]=a.useState(1);T(se);const[j,b]=a.useState(null),S=s=>{b(j===s?null:s)},[f,B]=a.useState(1),u=T(ee),[N,M]=P(Ue),[p,k]=P(Fe),[i,C]=a.useState(1),o=10,h=(i-1)*o,D=h+o,m=async()=>{try{let s=u._id,r=u.authToken;const I=await H.get(`https://cosmotrade.live/api/bettingHistory/${s}`,{params:{page:i},headers:{Authorization:`Bearer ${r}`}});if(I.status===200)return k(I),I}catch(s){const r=s.response?s.response.data.message:s.message;G.error(r||"Something went wrong",{...je})}},d=async()=>{try{let s=u.authToken;const r=await H.get(`https://cosmotrade.live/api/getSuccessFullGameHistory/${E}`,{params:{page:g},headers:{Authorization:`Bearer ${s}`}});if(r.status===200)return M(r.data.data),r}catch(s){const r=s.response?s.response.data.message:s.message;G.error(r||"Something went wrong",{...je})}};a.useEffect(()=>{const s=setInterval(d,3500);return()=>{clearInterval(s)}},[g]),a.useEffect(()=>{const s=setInterval(m,3500);return()=>{clearInterval(s)}},[i]),a.useEffect(()=>{m()},[i]),a.useEffect(()=>{d()},[g]);const w=s=>{B(s)};return e.jsxs("div",{className:"gameHistory",children:[e.jsx(ne,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:f===1?"activeTab record-btn":" record-btn",onClick:()=>{w(1)},children:e.jsx("p",{children:"Game Record"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:f===2?"activeTab record-btn":"record-btn ",onClick:()=>{w(2)},children:e.jsx("p",{children:"My Game Record"})})})]})}),f===1&&e.jsx("div",{className:"period-heading",children:e.jsxs("div",{className:"table-responsive game_history_table",children:[e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",children:"Winner"})]})}),e.jsx("tbody",{children:N&&Array.isArray(N.gamesWithSuccessfulBets)&&N.gamesWithSuccessfulBets.filter(s=>s.isCompleted).map((s,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{width:"140",children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:xe,alt:"Winner"})}),e.jsx("p",{children:s.winnerGroup==="SMALL"?"Alpha":s.winnerGroup==="BIG"?"Beta":s.winnerGroup===null&&(s.gameUID%3===0||s.gameUID%5===0||s.gameUID%7===0)?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.winnerGroup==="SMALL"?X:s.winnerGroup==="BIG"?Z:s.winnerGroup===null&&(s.gameUID%3===0||s.gameUID%5===0||s.gameUID%7===0)?X:Z})})]})})]},r))})]}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{y(Math.max(g-1,1))},children:e.jsx("img",{src:he,alt:""})}),N&&e.jsxs("div",{className:"page-count",children:["  ",g,"/",N.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{y(Math.min(g+1,N.totalPages))},children:e.jsx("img",{src:me,alt:""})})]})})]})}),f===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:p&&p.data&&p.data.history.slice(h,D).map((s,r)=>e.jsxs(Se.Fragment,{children:[e.jsxs("tr",{onClick:()=>S(r),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:xe,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:s.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.group==="small"?X:Z,alt:"Alpha or Beta"})})]})})]}),j===r&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},r))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{C(Math.max(i-1,1))},children:e.jsx("img",{src:he,alt:""})}),p&&e.jsxs("div",{className:"page-count",children:["  ",i,"/",p.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{C(Math.min(i+1,p.data.totalPages))},children:e.jsx("img",{src:me,alt:""})})]})})]})})]})}const Q={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function cs(){const E=T(se),[g,y]=P(Ie),[j,b]=a.useState(!0),S=Be(),[f,B]=P(Le),[u,N]=a.useState(1),M=de(be),p=de(ve),k=T(ee),[i,C]=a.useState(1),[o,h]=a.useState(1),[D,m]=a.useState(""),[d,w]=a.useState(1),[s,r]=a.useState(1),[I,v]=a.useState(!1),[Ne,U]=a.useState(!1),[pe,te]=a.useState(!1),[ge,ie]=a.useState(!1),[ke,le]=a.useState(!1),[Ce,ce]=a.useState(!1),[ye,ae]=a.useState(!1),[fe,re]=a.useState(!1),F=T(ue),we=t=>{N(t)};a.useEffect(()=>{z();const t=setInterval(z,4500);return()=>clearInterval(t)},[]),a.useEffect(()=>{h(i*s)},[i,s]);const l=t=>{C(t)},n=t=>{r(t==="+"?x=>x+1:t==="-"?x=>Math.max(x-1,1):parseInt(t))};a.useEffect(()=>{z();const t=setInterval(z,4500);return()=>clearInterval(t)},[]);const oe=()=>{const t=new Date,x=t.getFullYear(),_=t.getMonth()+1,Ae=t.getDate();return x*1e4+_*100+Ae},[We,$e]=a.useState(oe());a.useEffect(()=>{V(),$e(oe())},[]);const z=async()=>{try{let t=k.authToken,x=k.UID;const _=await H.get(`https://cosmotrade.live/api/getUserProfile/${x}`,{headers:{Authorization:`Bearer ${t}`}});if(_.status===200)return B(_),_;if(_.status===404)return null}catch(t){if(t.response&&t.response.status===404)return null;const x=t.response?t.response.data.message:t.message;G.error(x||"Something went wrong",{...Q})}},A=async()=>{if(v(!1),U(!1),k.authToken,E<10)return G.error("Wait for the next game",{...Q}),null;try{let t=k.authToken;const x=await H.post("https://cosmotrade.live/api/bet",{amount:o,group:D,duration:d},{headers:{Authorization:`Bearer ${t}`}});if(x.status===201)return G.success("Bet created Successfully!",{...Q}),v(!1),U(!1),h(1),r(1),C(1),m(""),z(),x}catch(t){v(!1),U(!1),h(1),r(1),C(1);const x=t.response?t.response.data.message:t.message;G.error(x||"Something went wrong",{...Q})}},V=async()=>{try{let t=k.authToken;const x=await H.get(`https://cosmotrade.live/api/getgame/${d}`,{headers:{Authorization:`Bearer ${t}`}});if(x.status===200)return M(d),p(x),x}catch(t){if(t.response&&t.response.status===404)return null;t.response?t.response.data.message:t.message}};return a.useEffect(()=>{const t=setTimeout(async()=>{await V()},5e3);return()=>{clearTimeout(t)}},[]),e.jsxs("div",{className:"win",children:[e.jsx("div",{className:"container winNav",children:e.jsxs("div",{className:"row",children:[e.jsx($,{to:"/",className:"col-2",children:e.jsx("img",{src:Me,alt:""})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:Pe,alt:"",onClick:()=>{sendUID()}})}),e.jsxs("div",{className:"col-2",children:[e.jsx("img",{src:He,alt:"",className:"header_headphone",onClick:()=>{S("/customerCare")}}),g?e.jsx("img",{src:Te,alt:"",onClick:()=>{y(!1)}}):e.jsx("img",{src:De,alt:"",onClick:()=>{y(!0)}})]})]})}),e.jsx(ne,{}),e.jsx("div",{className:"wallet",children:e.jsxs("div",{className:"container winWallet",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:ze,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:_e,alt:""})," ",f&&f.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:Ge,alt:"",style:{marginLeft:10},onClick:z})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row wr-btns",children:[e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>S("/withdraw"),className:"withdraw",children:"Withdraw"})}),e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>S("/recharge"),className:"recharge",children:"Recharge"})})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"clock-btn-container row",children:[e.jsxs("button",{className:u===1?"activeClock col-3":"clock-btn col-3",onClick:()=>{w(1),V(),we(1),M(1)},children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"1 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"3 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"5 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"10 minute"})]})]})}),u===1&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{v(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{U(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:I,onHide:()=>v(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg modal-title",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]}),e.jsxs(c,{size:"lg",show:Ne,onHide:()=>U(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]})]}),e.jsx(J,{duration:d})]}),u===3&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{te(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ie(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:pe,onHide:()=>te(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]}),e.jsxs(c,{size:"lg",show:ge,onHide:()=>ie(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta   3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]})]}),e.jsx(J,{duration:d})]}),u===5&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{le(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ce(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:ke,onHide:()=>le(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]}),e.jsxs(c,{size:"lg",show:Ce,onHide:()=>ce(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]})]}),e.jsx(J,{duration:d})]}),u===10&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ae(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{re(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:ye,onHide:()=>ae(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]}),e.jsxs(c,{size:"lg",show:fe,onHide:()=>re(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:o,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:A,children:["Total Price: ",o]})]})})]})]}),e.jsx(J,{duration:d})]})]})]})}export{cs as default,Q as toastProps};
