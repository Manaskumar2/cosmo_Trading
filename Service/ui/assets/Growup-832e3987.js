import{a as T,d as _,A as V,r as o,j as e,R as ge,u as ke,e as ce,L as y}from"./index-b71f0eae.js";import{b as ye}from"./back-button 1-53e9bab3.js";import{P as Ce,l as fe,A as we,m as $e,c as Ae,T as D,M as a}from"./Timer-81287ad2.js";import{w as Se,r as Me,a as Be}from"./reload 1-451f7926.js";import{e as Te}from"./earphone-d19d035b.js";import{W as ae}from"./Accordian-3a32bb7d.js";import{C as oe,O as de,T as xe,G as Pe,U as Ie,A as K,B as Q,r as ze,l as _e}from"./GameTimeRiseup-b5842691.js";/* empty css            */import{I as X,_ as S}from"./index-7c3ad6a8.js";import{a as B}from"./axios-4a70c6fc.js";import{U as Ge}from"./UserDetails-93bb6087.js";import"./TransitionWrapper-6affc94d.js";import"./createWithBsPrefix-81968555.js";const L="/assets/alfa-bd3fb70f.svg",F="/assets/beta-a6b4073d.svg",E="/assets/A-modal-a001361f.svg",R="/assets/betabtn-8f8581e7.svg",He={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function W(){var A,x,u,i,r;const[P,C]=T(oe),[h,G]=T(de),N=_(V),f=_(xe),[w,b]=o.useState(0),I=((A=h==null?void 0:h.data)==null?void 0:A.currentTime)||null,v=((u=(x=h==null?void 0:h.data)==null?void 0:x.data)==null?void 0:u.endTime)||null,M=async()=>{try{let d=N.authToken;const g=await B.get(`https://cosmotrade.live/api//getgame/${f}`,{headers:{Authorization:`Bearer ${d}`}});if(g.status===200)return console.log(g),G(g),g}catch(d){const g=d.response?d.response.data.message:d.message;S.error(g||"Something went wrong",{...He})}};o.useEffect(()=>{if(v){const d=new Date(I).getTime(),n=new Date(v).getTime()-d;if(n>0){const z=Math.floor(n/1e3);b(z);const H=setInterval(()=>{b(k=>k>0?(Math.floor(k/60)===0&&k%60===6&&C(!0),k-1):(clearInterval(H),k===0&&M(),0))},1e3);return()=>clearInterval(H)}}},[v,C]),o.useEffect(()=>{const d=setInterval(M,4e3);return()=>{clearInterval(d)}},[]);const j=Math.floor(w/60),t=w%60;return e.jsxs("div",{children:[e.jsx(X,{}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row time-play",children:[e.jsx("div",{className:"col-6 left",children:h&&f?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"selected-mint",children:[f," minute"]}),e.jsx("h3",{children:(r=(i=h==null?void 0:h.data)==null?void 0:i.data)==null?void 0:r.gameUID})]}):null}),e.jsxs("div",{className:"col-6 right",children:[e.jsx("p",{style:{color:"#97E2F2",textAlign:"center",marginBottom:"0"},children:"Left time to buy"}),e.jsx("div",{className:"end-time",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"time_minute",children:j})," ",e.jsx("div",{className:"time_colon",children:":"})," ",e.jsx("div",{className:"time_seconds",children:t<10?`0${t}`:t})]})})]})]})})]})}const re={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function O({duration:P}){const[C,h]=o.useState(null),G=i=>{h(C===i?null:i)},[N,f]=o.useState(1),w=_(V),[b,I]=T(Pe),[v,M]=T(Ie),[j,t]=o.useState(1),A=async()=>{try{let i=w._id,r=w.authToken;console.log(r);const d=await B.get(`https://cosmotrade.live/api//bettingHistory/${i}`,{params:{page:j},headers:{Authorization:`Bearer ${r}`}});if(d.status===200)return console.log(d),M(d),console.log(v),d}catch(i){const r=i.response?i.response.data.message:i.message;S.error(r||"Something went wrong",{...re})}},x=async()=>{try{let i=w.authToken;console.log(i);const r=await B.get(`https://cosmotrade.live/api//getSuccessFullGameHistory/${P}`,{headers:{Authorization:`Bearer ${i}`}});if(r.status===200)return console.log(r),I(r.data),console.log(b),r}catch(i){const r=i.response?i.response.data.message:i.message;S.error(r||"Something went wrong",{...re})}};o.useEffect(()=>{x();const i=setInterval(()=>{x()},4500);return()=>clearInterval(i)},[P]),o.useEffect(()=>{A();const i=setInterval(()=>{A()},5e3);return()=>clearInterval(i)},[j]);const u=i=>{f(i)};return e.jsxs("div",{className:"gameHistory",children:[e.jsx(X,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:N===1?"activeTab record-btn":" record-btn",onClick:()=>{u(1)},children:e.jsx("p",{children:"Game Record"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:N===2?"activeTab record-btn":"record-btn ",onClick:()=>{u(2)},children:e.jsx("p",{children:"My Game Record"})})})]})}),N===1&&e.jsx("div",{className:"period-heading",children:e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",children:"Winner"})]})}),e.jsx("tbody",{children:b&&b.data.filter(i=>i.isCompleted).map((i,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:i.gameUID}),e.jsx("td",{width:"140",children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:ae,alt:"Winner"})}),e.jsx("p",{children:i.winnerGroup==="SMALL"?"Alpha":i.winnerGroup==="BIG"?"Beta":i.winnerGroup===null?i.gameUID%2===1?"Alpha":"Beta":""}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:i.winnerGroup==="SMALL"?K:i.winnerGroup==="BIG"?Q:i.winnerGroup===null?i.gameUID%2===1?K:Q:""})})]})})]},r))})]})})}),N===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:v&&v.data&&v.data.history.map((i,r)=>e.jsxs(ge.Fragment,{children:[e.jsxs("tr",{onClick:()=>G(r),children:[e.jsx("td",{children:i.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:i.isCompleted?i.winnerGroup===i.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:ae,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:i.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:i.group==="small"?K:Q,alt:"Alpha or Beta"})})]})})]}),C===r&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",i.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",i.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",i.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:i.isCompleted?i.winnerGroup===i.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(i.startTime).toLocaleString()})]})]})})})]},r))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{t(Math.max(j-1,1))},children:e.jsx("img",{src:ze,alt:""})}),v&&e.jsxs("div",{className:"page-count",children:["  ",j,"/",v.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{t(Math.min(j+1,v.data.totalPages))},children:e.jsx("img",{src:_e,alt:""})})]})})]})})]})}const q={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Xe(){const[P,C]=T(Ce),[h,G]=o.useState(!0),N=ke(),[f,w]=T(Ge),[b,I]=o.useState(1),v=ce(xe),M=ce(de),j=_(V),[t,A]=o.useState(1),[x,u]=o.useState(1),[i,r]=o.useState(""),[d,g]=o.useState(1),[n,z]=o.useState(1),[H,k]=o.useState(!1),[he,J]=o.useState(!1),[me,Y]=o.useState(!1),[je,Z]=o.useState(!1),[ue,ee]=o.useState(!1),[ve,se]=o.useState(!1),[be,ne]=o.useState(!1),[Ne,ie]=o.useState(!1),U=_(oe),pe=l=>{I(l)};o.useEffect(()=>{u(t*n)},[t,n]);const c=l=>{A(l)},s=l=>{z(l==="+"?m=>m+1:l==="-"?m=>Math.max(m-1,1):parseInt(l))},le=async()=>{try{let l=j.authToken,m=j.UID;const p=await B.get(`https://cosmotrade.live/api//getUserProfile/${m}`,{headers:{Authorization:`Bearer ${l}`}});if(p.status===200)return w(p),p;if(p.status===404)return null}catch(l){if(l.response&&l.response.status===404)return null;const m=l.response?l.response.data.message:l.message;S.error(m||"Something went wrong",{...q})}},$=async()=>{j.authToken;try{let l=j.authToken;const m=await B.post("https://cosmotrade.live/api//bet",{amount:x,group:i,duration:d},{headers:{Authorization:`Bearer ${l}`}});if(m.status===201)return S.success("Bet created Successfully!",{...q}),k(!1),J(!1),r(""),u(1),console.log(m),console.log("Bapi"),N("/growUp"),m}catch(l){const m=l.response?l.response.data.message:l.message;S.error(m||"Something went wrong",{...q})}},te=async l=>{try{let m=j.authToken;console.log(l),console.log(m);const p=await B.get(`https://cosmotrade.live/api//getgame/${l}`,{headers:{Authorization:`Bearer ${m}`}});if(p.status===200)return console.log(p),v(l),M(p),p}catch(m){const p=m.response?m.response.data.message:m.message;S.error(p||"Something went wrong",{...q})}};return o.useEffect(()=>{if(console.log(d),j.authToken&&j.UID){te(d);const l=setTimeout(async()=>{await le()},3e3);return()=>{clearTimeout(l)}}},[j,d]),e.jsxs("div",{className:"win",children:[e.jsx("div",{className:"container winNav",children:e.jsxs("div",{className:"row",children:[e.jsx(y,{to:"/",className:"col-2",children:e.jsx("img",{src:ye,alt:""})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:fe,alt:""})}),e.jsxs("div",{className:"col-2",children:[e.jsx("img",{src:Te,alt:"",className:"header_headphone",onClick:()=>{N("/customerCare")}}),P?e.jsx("img",{src:we,alt:"",onClick:()=>{C(!1)}}):e.jsx("img",{src:$e,alt:"",onClick:()=>{C(!0)}})]})]})}),e.jsx(X,{}),e.jsx("div",{className:"wallet",children:e.jsxs("div",{className:"container winWallet",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:Se,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:Me,alt:""})," ",f&&f.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:Be,alt:"",style:{marginLeft:10},onClick:le})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row wr-btns",children:[e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>N("/withdraw"),className:"withdraw",children:"Withdraw"})}),e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>N("/recharge"),className:"recharge",children:"Recharge"})})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"clock-btn-container row",children:e.jsxs("button",{className:b===1?"activeClock col-3":"clock-btn col-3",onClick:()=>{g(1),te(d),pe(1),v(1)},children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:Ae,alt:""})}),e.jsx("p",{children:"1 minute"})]})})}),b===1&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{k(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{J(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:H,onHide:()=>k(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg modal-title",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:he,onHide:()=>J(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===3&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{Y(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{Z(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:me,onHide:()=>Y(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:je,onHide:()=>Z(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta   3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===5&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ee(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{se(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:ue,onHide:()=>ee(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:ve,onHide:()=>se(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===10&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ne(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ie(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:be,onHide:()=>ne(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:Ne,onHide:()=>ie(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:n}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${n==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${n==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${n==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${n==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${n==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${n==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(y,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]})]})]})}export{Xe as default,q as toastProps};