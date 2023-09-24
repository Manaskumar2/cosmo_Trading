import{a as T,d as _,A as V,r as o,j as e,R as ge,u as ke,e as ce,L as k}from"./index-ca1722cc.js";import{b as ye}from"./back-button 1-53e9bab3.js";import{l as Ce,A as fe,m as we,c as $e,T as D,M as a}from"./Modal-ef62bb75.js";import{w as Ae,r as Se,a as Me}from"./reload 1-451f7926.js";import{e as Be}from"./earphone-d19d035b.js";import{C as oe,W as ae}from"./CountDown-838ead4e.js";import{O as de,T as xe,G as Te,U as Pe,A as K,B as Q,r as Ie,l as ze}from"./GameTimeRiseup-8ac7bf27.js";/* empty css            */import{I as X,_ as S}from"./index-057465f7.js";import{a as B}from"./axios-4a70c6fc.js";import{U as _e}from"./UserDetails-17504cef.js";import{P as Ge}from"./PlaySound-e75a5443.js";import"./TransitionWrapper-4c62e7df.js";const L="/assets/alfa-bd3fb70f.svg",F="/assets/beta-a6b4073d.svg",E="/assets/A-modal-a001361f.svg",R="/assets/betabtn-8f8581e7.svg",He={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function W(){var A,x,u,n,r;const[P,y]=T(oe),[h,G]=T(de),p=_(V),C=_(xe),[f,b]=o.useState(0),I=((A=h==null?void 0:h.data)==null?void 0:A.currentTime)||null,v=((u=(x=h==null?void 0:h.data)==null?void 0:x.data)==null?void 0:u.endTime)||null,M=async()=>{try{let d=p.authToken;const w=await B.get(`https://cosmotrade.live/api/getgame/${C}`,{headers:{Authorization:`Bearer ${d}`}});if(w.status===200)return G(w),w}catch(d){const w=d.response?d.response.data.message:d.message;S.error(w||"Something went wrong",{...He})}};o.useEffect(()=>{if(v){const d=new Date(I).getTime(),i=new Date(v).getTime()-d;if(i>0){const z=Math.floor(i/1e3);b(z);const H=setInterval(()=>{b(g=>g>0?(Math.floor(g/60)===0&&g%60===6&&y(!0),g-1):(clearInterval(H),g===0&&M(),0))},1e3);return()=>clearInterval(H)}}},[v,y]),o.useEffect(()=>{const d=setInterval(M,5e3);return()=>{clearInterval(d)}},[]);const j=Math.floor(f/60),t=f%60;return e.jsxs("div",{children:[e.jsx(X,{}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row time-play",children:[e.jsx("div",{className:"col-6 left",children:h&&C?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"selected-mint",children:[C," minute"]}),e.jsx("h3",{children:(r=(n=h==null?void 0:h.data)==null?void 0:n.data)==null?void 0:r.gameUID})]}):null}),e.jsxs("div",{className:"col-6 right",children:[e.jsx("p",{style:{color:"#97E2F2",textAlign:"center",marginBottom:"0"},children:"Left time to buy"}),e.jsx("div",{className:"end-time",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"time_minute",children:j})," ",e.jsx("div",{className:"time_colon",children:":"})," ",e.jsx("div",{className:"time_seconds",children:t<10?`0${t}`:t})]})})]})]})})]})}const re={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function O({duration:P}){const[y,h]=o.useState(null),G=n=>{h(y===n?null:n)},[p,C]=o.useState(1),f=_(V),[b,I]=T(Te),[v,M]=T(Pe),[j,t]=o.useState(1),A=async()=>{try{let n=f._id,r=f.authToken;console.log(r);const d=await B.get(`https://cosmotrade.live/api/bettingHistory/${n}`,{params:{page:j},headers:{Authorization:`Bearer ${r}`}});if(d.status===200)return console.log(d),M(d),console.log(v),d}catch(n){const r=n.response?n.response.data.message:n.message;S.error(r||"Something went wrong",{...re})}},x=async()=>{try{let n=f.authToken;console.log(n);const r=await B.get(`https://cosmotrade.live/api/getSuccessFullGameHistory/${P}`,{headers:{Authorization:`Bearer ${n}`}});if(r.status===200)return console.log(r),I(r.data),console.log(b),r}catch(n){const r=n.response?n.response.data.message:n.message;S.error(r||"Something went wrong",{...re})}};o.useEffect(()=>{x();const n=setInterval(()=>{x()},4500);return()=>clearInterval(n)},[P]),o.useEffect(()=>{A();const n=setInterval(()=>{A()},5e3);return()=>clearInterval(n)},[j]);const u=n=>{C(n)};return e.jsxs("div",{className:"gameHistory",children:[e.jsx(X,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:p===1?"activeTab record-btn":" record-btn",onClick:()=>{u(1)},children:e.jsx("p",{children:"Game Record"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:p===2?"activeTab record-btn":"record-btn ",onClick:()=>{u(2)},children:e.jsx("p",{children:"My Game Record"})})})]})}),p===1&&e.jsx("div",{className:"period-heading",children:e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",children:"Winner"})]})}),e.jsx("tbody",{children:b&&b.data.filter(n=>n.isCompleted).map((n,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:n.gameUID}),e.jsx("td",{width:"140",children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:ae,alt:"Winner"})}),e.jsx("p",{children:n.winnerGroup==="SMALL"?"Alpha":n.winnerGroup==="BIG"?"Beta":n.winnerGroup===null?n.gameUID%2===1?"Alpha":"Beta":""}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:n.winnerGroup==="SMALL"?K:n.winnerGroup==="BIG"?Q:n.winnerGroup===null?n.gameUID%2===1?K:Q:""})})]})})]},r))})]})})}),p===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:v&&v.data&&v.data.history.map((n,r)=>e.jsxs(ge.Fragment,{children:[e.jsxs("tr",{onClick:()=>G(r),children:[e.jsx("td",{children:n.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:n.isCompleted?n.winnerGroup===n.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:ae,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:n.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:n.group==="small"?K:Q,alt:"Alpha or Beta"})})]})})]}),y===r&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",n.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",n.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",n.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:n.isCompleted?n.winnerGroup===n.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(n.startTime).toLocaleString()})]})]})})})]},r))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{t(Math.max(j-1,1))},children:e.jsx("img",{src:Ie,alt:""})}),v&&e.jsxs("div",{className:"page-count",children:["  ",j,"/",v.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{t(Math.min(j+1,v.data.totalPages))},children:e.jsx("img",{src:ze,alt:""})})]})})]})})]})}const q={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function Xe(){const[P,y]=T(Ge),[h,G]=o.useState(!0),p=ke(),[C,f]=T(_e),[b,I]=o.useState(1),v=ce(xe),M=ce(de),j=_(V),[t,A]=o.useState(1),[x,u]=o.useState(1),[n,r]=o.useState(""),[d,w]=o.useState(1),[i,z]=o.useState(1),[H,g]=o.useState(!1),[he,J]=o.useState(!1),[me,Y]=o.useState(!1),[je,Z]=o.useState(!1),[ue,ee]=o.useState(!1),[ve,se]=o.useState(!1),[be,ie]=o.useState(!1),[Ne,ne]=o.useState(!1),U=_(oe),pe=l=>{I(l)};o.useEffect(()=>{u(t*i)},[t,i]);const c=l=>{A(l)},s=l=>{z(l==="+"?m=>m+1:l==="-"?m=>Math.max(m-1,1):parseInt(l))},le=async()=>{try{let l=j.authToken,m=j.UID;const N=await B.get(`https://cosmotrade.live/api/getUserProfile/${m}`,{headers:{Authorization:`Bearer ${l}`}});if(N.status===200)return f(N),N;if(N.status===404)return null}catch(l){if(l.response&&l.response.status===404)return null;const m=l.response?l.response.data.message:l.message;S.error(m||"Something went wrong",{...q})}},$=async()=>{j.authToken;try{let l=j.authToken;const m=await B.post("https://cosmotrade.live/api/bet",{amount:x,group:n,duration:d},{headers:{Authorization:`Bearer ${l}`}});if(m.status===201)return S.success("Bet created Successfully!",{...q}),g(!1),J(!1),r(""),u(1),console.log(m),console.log("Bapi"),p("/growUp"),m}catch(l){const m=l.response?l.response.data.message:l.message;S.error(m||"Something went wrong",{...q})}},te=async l=>{try{let m=j.authToken;console.log(l),console.log(m);const N=await B.get(`https://cosmotrade.live/api/getgame/${l}`,{headers:{Authorization:`Bearer ${m}`}});if(N.status===200)return console.log(N),v(l),M(N),N}catch(m){const N=m.response?m.response.data.message:m.message;S.error(N||"Something went wrong",{...q})}};return o.useEffect(()=>{if(console.log(d),j.authToken&&j.UID){te(d);const l=setTimeout(async()=>{await le()},3e3);return()=>{clearTimeout(l)}}},[j,d]),e.jsxs("div",{className:"win",children:[e.jsx("div",{className:"container winNav",children:e.jsxs("div",{className:"row",children:[e.jsx(k,{to:"/",className:"col-2",children:e.jsx("img",{src:ye,alt:""})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:Ce,alt:""})}),e.jsxs("div",{className:"col-2",children:[e.jsx("img",{src:Be,alt:"",className:"header_headphone"}),P?e.jsx("img",{src:fe,alt:"",onClick:()=>{y(!1)}}):e.jsx("img",{src:we,alt:"",onClick:()=>{y(!0)}})]})]})}),e.jsx(X,{}),e.jsx("div",{className:"wallet",children:e.jsxs("div",{className:"container winWallet",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:Ae,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:Se,alt:""})," ",C&&C.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:Me,alt:"",style:{marginLeft:10},onClick:le})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row wr-btns",children:[e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>p("/withdraw"),className:"withdraw",children:"Withdraw"})}),e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>p("/recharge"),className:"recharge",children:"Recharge"})})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"clock-btn-container row",children:e.jsxs("button",{className:b===1?"activeClock col-3":"clock-btn col-3",onClick:()=>{w(1),te(d),pe(1),v(1)},children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:$e,alt:""})}),e.jsx("p",{children:"1 minute"})]})})}),b===1&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{g(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{J(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:H,onHide:()=>g(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg modal-title",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:he,onHide:()=>J(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===3&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{Y(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{Z(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:me,onHide:()=>Y(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:je,onHide:()=>Z(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta   3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===5&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ee(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{se(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:ue,onHide:()=>ee(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:ve,onHide:()=>se(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]}),b===10&&e.jsxs(e.Fragment,{children:[e.jsx(W,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:U===!0?e.jsx(D,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ie(!0),r("small")},children:e.jsx("img",{src:L,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ne(!0),r("big")},children:e.jsx("img",{src:F,alt:""})})]})})})}),e.jsxs(a,{size:"lg",show:be,onHide:()=>ie(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:E,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]}),e.jsxs(a,{size:"lg",show:Ne,onHide:()=>ne(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(a.Header,{closeButton:!0,children:e.jsxs(a.Title,{id:"example-modal-sizes-title-lg",children:["Beta 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:R,alt:""})})]})}),e.jsx(a.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${t===1?"active-btn":""}`,onClick:()=>c(1),children:"1"}),e.jsx("button",{className:`x-section ${t===10?"active-btn":""}`,onClick:()=>c(10),children:"10"}),e.jsx("button",{className:`x-section ${t===100?"active-btn":""}`,onClick:()=>c(100),children:"100"}),e.jsx("button",{className:`x-section ${t===1e3?"active-btn":""}`,onClick:()=>c(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>s("-"),children:"-"}),e.jsx("div",{children:i}),e.jsx("button",{onClick:()=>s("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:x,onChange:l=>{u(l.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i==1?"active-btn":""}`,onClick:()=>s("1"),children:"x1"}),e.jsx("button",{className:`x-section ${i==2?"active-btn":""}`,onClick:()=>s("2"),children:"x2"}),e.jsx("button",{className:`x-section ${i==5?"active-btn":""}`,onClick:()=>s("5"),children:"x5"}),e.jsx("button",{className:`x-section ${i==10?"active-btn":""}`,onClick:()=>s("10"),children:"x10"}),e.jsx("button",{className:`x-section ${i==50?"active-btn":""}`,onClick:()=>s("50"),children:"x50"}),e.jsx("button",{className:`x-section ${i==100?"active-btn":""}`,onClick:()=>s("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:h}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx(k,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:$,children:["Total Price: ",x]})]})})]})]}),e.jsx(O,{duration:d})]})]})]})}export{Xe as default,q as toastProps};
