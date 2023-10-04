import{a as I,d as z,A as ee,r as a,j as e,R as Se,u as Me,e as de,L as $}from"./index-5edd455d.js";import{b as Be}from"./back-button 1-53e9bab3.js";import{P as Pe,l as Te,A as Ie,m as ze,c as L,T as W,M as c}from"./Timer-98472c49.js";import{w as _e,r as De,a as Ge}from"./reload 1-451f7926.js";import{e as He}from"./earphone-d19d035b.js";import{G as Ue,W as xe}from"./GameHistory-013bf8e3.js";import{C as se,S as ue,O as ve,T as be,m as Ee,U as Fe,A as X,B as Z,r as he,l as me}from"./Second-7d326314.js";/* empty css            */import{I as ne,_ as M}from"./index-f0a88bba.js";import{a as H}from"./axios-4a70c6fc.js";import{U as Le}from"./UserDetails-6633f5d2.js";import"./TransitionWrapper-9c9e9629.js";import"./createWithBsPrefix-591f1cfc.js";import"./index-c67d386a.js";const R="/assets/alfa-bd3fb70f.svg",O="/assets/beta-a6b4073d.svg",K="/assets/A-modal-a001361f.svg",Y="/assets/betabtn-8f8581e7.svg",We={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function q(){var r,h,_,m;const[U,k]=I(se),[C,j]=I(ue),[v,B]=I(ve),f=z(ee),P=z(be),[u,b]=a.useState(0),T=Ee(new Date).tz("Asia/Kolkata").toISOString(),N=((h=(r=v==null?void 0:v.data)==null?void 0:r.data)==null?void 0:h.endTime)||null,y=async()=>{try{let d=f.authToken;const p=await H.get(`https://cosmotrade.live/api//getgame/${P}`,{headers:{Authorization:`Bearer ${d}`}});if(p.status===200)return B(p),p}catch(d){const p=d.response?d.response.data.message:d.message;M.error(p||"Something went wrong",{...We})}};a.useEffect(()=>{if(N){const d=new Date(T).getTime(),s=new Date(N).getTime()-d;if(s>0){const o=Math.floor(s/1e3);b(o),k(o);const A=setInterval(()=>{b(g=>g>0?(g===6&&(C||j(!0)),g-1):((g===0||g===59||g===58||g===57)&&y(),0))},1e3);return()=>clearInterval(A)}}},[T,C]),u===5&&!C&&j(!0);const i=Math.floor(u/60),w=u%60;return a.useEffect(()=>{const d=setInterval(y,1e3);return()=>{clearInterval(d)}},[]),e.jsxs("div",{children:[e.jsx(ne,{}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row time-play",children:[e.jsx("div",{className:"col-6 left",children:v&&P?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"selected-mint",children:[P," minute"]}),e.jsx("h3",{children:(m=(_=v==null?void 0:v.data)==null?void 0:_.data)==null?void 0:m.gameUID})]}):null}),e.jsxs("div",{className:"col-6 right",children:[e.jsx("p",{style:{color:"#97E2F2",textAlign:"center",marginBottom:"0"},children:"Left time to buy"}),e.jsx("div",{className:"end-time",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"time_minute",children:i})," ",e.jsx("div",{className:"time_colon",children:":"})," ",e.jsx("div",{className:"time_seconds",children:w<10?`0${w}`:w})]})})]})]})})]})}const je={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function J({duration:U}){const[k,C]=a.useState(1);z(se);const[j,v]=a.useState(null),B=s=>{v(j===s?null:s)},[f,P]=a.useState(1),u=z(ee),[b,T]=I(Ue),[N,y]=I(Fe),[i,w]=a.useState(1),r=10,h=(i-1)*r,_=h+r,m=async()=>{try{let s=u._id,o=u.authToken;const A=await H.get(`https://cosmotrade.live/api//bettingHistory/${s}`,{params:{page:i},headers:{Authorization:`Bearer ${o}`}});if(A.status===200)return console.log(A),y(A),A}catch(s){const o=s.response?s.response.data.message:s.message;M.error(o||"Something went wrong",{...je})}},d=async()=>{try{let s=u.authToken;const o=await H.get(`https://cosmotrade.live/api//getSuccessFullGameHistory/${U}`,{params:{page:k},headers:{Authorization:`Bearer ${s}`}});if(o.status===200)return T(o.data.data),o}catch(s){const o=s.response?s.response.data.message:s.message;M.error(o||"Something went wrong",{...je})}};a.useEffect(()=>{const s=setInterval(d,3500);return()=>{clearInterval(s)}},[k]),a.useEffect(()=>{const s=setInterval(m,3500);return()=>{clearInterval(s)}},[i]),a.useEffect(()=>{m()},[i]),a.useEffect(()=>{d()},[k]);const p=s=>{P(s)};return e.jsxs("div",{className:"gameHistory",children:[e.jsx(ne,{}),e.jsx("div",{className:"container record-btn-container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-6",children:e.jsx("button",{className:f===1?"activeTab record-btn":" record-btn",onClick:()=>{p(1)},children:e.jsx("p",{children:"Game Record"})})}),e.jsx("div",{className:"col-6",children:e.jsx("button",{className:f===2?"activeTab record-btn":"record-btn ",onClick:()=>{p(2)},children:e.jsx("p",{children:"My Game Record"})})})]})}),f===1&&e.jsx("div",{className:"period-heading",children:e.jsxs("div",{className:"table-responsive game_history_table",children:[e.jsxs("table",{className:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",children:"Winner"})]})}),e.jsx("tbody",{children:b&&Array.isArray(b.gamesWithSuccessfulBets)&&b.gamesWithSuccessfulBets.filter(s=>s.isCompleted).map((s,o)=>e.jsxs("tr",{children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{width:"140",children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:xe,alt:"Winner"})}),e.jsx("p",{children:s.winnerGroup==="SMALL"?"Alpha":s.winnerGroup==="BIG"?"Beta":s.winnerGroup===null?s.gameUID%2===1?"Alpha":"Beta":""}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.winnerGroup==="SMALL"?X:s.winnerGroup==="BIG"?Z:s.winnerGroup===null?s.gameUID%2===1?X:Z:""})})]})})]},o))})]}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{C(Math.max(k-1,1))},children:e.jsx("img",{src:he,alt:""})}),b&&e.jsxs("div",{className:"page-count",children:["  ",k,"/",b.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{C(Math.min(k+1,b.totalPages))},children:e.jsx("img",{src:me,alt:""})})]})})]})}),f===2&&e.jsx("div",{children:e.jsxs("div",{className:"period-heading",children:[e.jsx("div",{className:"table-responsive game_history_table",children:e.jsxs("table",{class:"table table-striped",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Period"}),e.jsx("th",{width:"140",style:{textAlign:"center"},children:"Result"}),e.jsx("th",{style:{textAlign:"center"},children:"Group"})]})}),e.jsx("tbody",{children:N&&N.data&&N.data.history.slice(h,_).map((s,o)=>e.jsxs(Se.Fragment,{children:[e.jsxs("tr",{onClick:()=>B(o),children:[e.jsx("td",{children:s.gameUID}),e.jsx("td",{style:{textAlign:"center"},children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"}),e.jsx("td",{children:e.jsxs("div",{className:"winners_col_row",children:[e.jsx("span",{className:"icon_win",children:e.jsx("img",{src:xe,alt:"Winner"})}),e.jsx("p",{style:{textAlign:"left"},children:s.group==="small"?"Alpha":"Beta"}),e.jsx("span",{className:"icon_rate",children:e.jsx("img",{src:s.group==="small"?X:Z,alt:"Alpha or Beta"})})]})})]}),j===o&&e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:e.jsxs("div",{className:"expanded-content",children:[e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Period :"}),e.jsxs("p",{children:["  ",s.gameUID]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Amount :"}),e.jsxs("p",{children:["  ",s.amount]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Placed :"}),e.jsxs("p",{children:[" ",s.group==="small"?"Alpha":"Beta"]})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Betting Status :"}),e.jsx("p",{children:s.isCompleted?s.winnerGroup===s.group.toUpperCase()?"Win":"Lose":"Pending"})]}),e.jsxs("div",{className:"flex-div-space-Betn",children:[e.jsx("p",{children:"Order Time:"}),e.jsx("p",{children:new Date(s.startTime).toLocaleString()})]})]})})})]},o))})]})}),e.jsx("div",{className:"pagination-buttons-container",children:e.jsxs("div",{className:"pagination-buttons",children:[e.jsx("button",{className:"decreaseBtn",onClick:()=>{w(Math.max(i-1,1))},children:e.jsx("img",{src:he,alt:""})}),N&&e.jsxs("div",{className:"page-count",children:["  ",i,"/",N.data.totalPages," "]}),e.jsx("button",{className:"increaseBtn",onClick:()=>{w(Math.min(i+1,N.data.totalPages))},children:e.jsx("img",{src:me,alt:""})})]})})]})})]})}const E={position:"top-center",duration:2e3,style:{fontSize:"1rem",background:"#fff",color:"#333"}};function cs(){const U=z(se),[k,C]=I(Pe),[j,v]=a.useState(!0),B=Me(),[f,P]=I(Le),[u,b]=a.useState(1),T=de(be),N=de(ve),y=z(ee),[i,w]=a.useState(1),[r,h]=a.useState(1),[_,m]=a.useState(""),[d,p]=a.useState(1),[s,o]=a.useState(1),[A,g]=a.useState(!1),[Ne,Q]=a.useState(!1),[pe,te]=a.useState(!1),[ge,ie]=a.useState(!1),[ke,le]=a.useState(!1),[ye,ce]=a.useState(!1),[Ce,ae]=a.useState(!1),[fe,re]=a.useState(!1),F=z(ue),we=t=>{b(t)};a.useEffect(()=>{D();const t=setInterval(D,4500);return()=>clearInterval(t)},[]),a.useEffect(()=>{h(i*s)},[i,s]);const l=t=>{w(t)},n=t=>{o(t==="+"?x=>x+1:t==="-"?x=>Math.max(x-1,1):parseInt(t))};a.useEffect(()=>{D();const t=setInterval(D,4500);return()=>clearInterval(t)},[]);const oe=()=>{const t=new Date,x=t.getFullYear(),G=t.getMonth()+1,Ae=t.getDate();return x*1e4+G*100+Ae},[Re,$e]=a.useState(oe());a.useEffect(()=>{V(),$e(oe())},[]);const D=async()=>{try{let t=y.authToken,x=y.UID;const G=await H.get(`https://cosmotrade.live/api//getUserProfile/${x}`,{headers:{Authorization:`Bearer ${t}`}});if(G.status===200)return P(G),G;if(G.status===404)return null}catch(t){if(t.response&&t.response.status===404)return null;const x=t.response?t.response.data.message:t.message;M.error(x||"Something went wrong",{...E})}},S=async()=>{if(y.authToken,U<10)return M.error("Wait for the next game",{...E}),null;try{let t=y.authToken;const x=await H.post("https://cosmotrade.live/api//bet",{amount:r,group:_,duration:d},{headers:{Authorization:`Bearer ${t}`}});if(x.status===201)return M.success("Bet created Successfully!",{...E}),g(!1),Q(!1),w(1),m(""),h(1),o(1),D(),x}catch(t){const x=t.response?t.response.data.message:t.message;M.error(x||"Something went wrong",{...E})}},V=async()=>{try{let t=y.authToken;console.log(d),console.log(t);const x=await H.get(`https://cosmotrade.live/api//getgame/${d}`,{headers:{Authorization:`Bearer ${t}`}});if(x.status===200)return T(d),N(x),console.log(x),x}catch(t){if(t.response&&t.response.status===404)return null;{const x=t.response?t.response.data.message:t.message;M.error(x||"Something went wrong",{...E})}}};return a.useEffect(()=>{const t=setTimeout(async()=>{await V(),console.log(U)},5e3);return()=>{clearTimeout(t)}},[]),e.jsxs("div",{className:"win",children:[e.jsx("div",{className:"container winNav",children:e.jsxs("div",{className:"row",children:[e.jsx($,{to:"/",className:"col-2",children:e.jsx("img",{src:Be,alt:""})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:Te,alt:"",onClick:()=>{sendUID()}})}),e.jsxs("div",{className:"col-2",children:[e.jsx("img",{src:He,alt:"",className:"header_headphone",onClick:()=>{B("/customerCare")}}),k?e.jsx("img",{src:Ie,alt:"",onClick:()=>{C(!1)}}):e.jsx("img",{src:ze,alt:"",onClick:()=>{C(!0)}})]})]})}),e.jsx(ne,{}),e.jsx("div",{className:"wallet",children:e.jsxs("div",{className:"container winWallet",children:[e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-8",style:{marginBottom:"10px"},children:[e.jsx("h4",{style:{marginBottom:3,color:"#6FC0EE",fontFamily:"Montserrat",letterSpacing:.09,fontWeight:600},children:"Total"}),e.jsx("p",{style:{color:"#29CEE4",fontFamily:"Montserrat"},children:"Wallet balance"})]}),e.jsx("div",{className:"col-4",style:{textAlign:"right"},children:e.jsx("img",{src:_e,alt:""})}),e.jsxs("h2",{style:{color:"#fff",letterSpacing:.15,fontSize:27,fontFamily:"Montserrat",display:"flex",fontWeight:600},children:[e.jsx("img",{src:De,alt:""})," ",f&&f.data.data.userDetails.walletAmount.toFixed(2)," ",e.jsx("img",{src:Ge,alt:"",style:{marginLeft:10},onClick:D})]})]}),e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row wr-btns",children:[e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>B("/withdraw"),className:"withdraw",children:"Withdraw"})}),e.jsx("div",{className:"col-6 ",children:e.jsx("button",{onClick:()=>B("/recharge"),className:"recharge",children:"Recharge"})})]})})]})}),e.jsxs("div",{children:[e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"clock-btn-container row",children:[e.jsxs("button",{className:u===1?"activeClock col-3":"clock-btn col-3",onClick:()=>{p(1),V(),we(1),T(1)},children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"1 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"3 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"5 minute"})]}),e.jsxs("button",{className:"clock-btn col-3",children:[e.jsx("div",{className:"clock",children:e.jsx("img",{src:L,alt:""})}),e.jsx("p",{children:"10 minute"})]})]})}),u===1&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{g(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{Q(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:A,onHide:()=>g(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg modal-title",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]}),e.jsxs(c,{size:"lg",show:Ne,onHide:()=>Q(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["1 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]})]}),e.jsx(J,{duration:d})]}),u===3&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{te(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ie(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:pe,onHide:()=>te(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]}),e.jsxs(c,{size:"lg",show:ge,onHide:()=>ie(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta   3 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]})]}),e.jsx(J,{duration:d})]}),u===5&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{le(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{ce(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:ke,onHide:()=>le(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]}),e.jsxs(c,{size:"lg",show:ye,onHide:()=>ce(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta 5 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]})]}),e.jsx(J,{duration:d})]}),u===10&&e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"big-small-game-wrapper ",children:F===!0?e.jsx(W,{}):e.jsx("div",{className:"image-cover",children:e.jsx("div",{className:" big-small",children:e.jsxs("div",{className:"main-btn",children:[e.jsx("button",{className:"left",onClick:()=>{ae(!0),m("small")},children:e.jsx("img",{src:R,alt:""})}),e.jsx("button",{className:" right",onClick:()=>{re(!0),m("big")},children:e.jsx("img",{src:O,alt:""})})]})})})}),e.jsxs(c,{size:"lg",show:Ce,onHide:()=>ae(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Alfa 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:K,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]}),e.jsxs(c,{size:"lg",show:fe,onHide:()=>re(!1),"aria-labelledby":"example-modal-sizes-title-lg",children:[e.jsx(c.Header,{closeButton:!0,children:e.jsxs(c.Title,{id:"example-modal-sizes-title-lg",children:["Beta 10 minute",e.jsx("div",{style:{textAlign:"center"},children:e.jsx("img",{src:Y,alt:""})})]})}),e.jsx(c.Body,{children:e.jsxs("div",{className:" money-container",children:[e.jsxs("div",{className:"money",children:[e.jsx("div",{children:e.jsx("p",{children:"Money"})}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${i===1?"active-btn":""}`,onClick:()=>l(1),children:"1"}),e.jsx("button",{className:`x-section ${i===10?"active-btn":""}`,onClick:()=>l(10),children:"10"}),e.jsx("button",{className:`x-section ${i===100?"active-btn":""}`,onClick:()=>l(100),children:"100"}),e.jsx("button",{className:`x-section ${i===1e3?"active-btn":""}`,onClick:()=>l(1e3),children:"1000"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Multiply"})}),e.jsxs("div",{className:"plus-minus",children:[e.jsx("button",{onClick:()=>n("-"),children:"-"}),e.jsx("div",{children:s}),e.jsx("button",{onClick:()=>n("+"),children:"+"})]})]}),e.jsxs("div",{className:"multiply",children:[e.jsx("div",{children:e.jsx("p",{children:"Custom Amount"})}),e.jsx("div",{className:"plus-minus",children:e.jsx("input",{className:"plus-minus-input",type:"number",value:r,onChange:t=>{h(t.target.value)}})})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"x-row-section",children:[e.jsx("button",{className:`x-section ${s==1?"active-btn":""}`,onClick:()=>n("1"),children:"x1"}),e.jsx("button",{className:`x-section ${s==2?"active-btn":""}`,onClick:()=>n("2"),children:"x2"}),e.jsx("button",{className:`x-section ${s==5?"active-btn":""}`,onClick:()=>n("5"),children:"x5"}),e.jsx("button",{className:`x-section ${s==10?"active-btn":""}`,onClick:()=>n("10"),children:"x10"}),e.jsx("button",{className:`x-section ${s==50?"active-btn":""}`,onClick:()=>n("50"),children:"x50"}),e.jsx("button",{className:`x-section ${s==100?"active-btn":""}`,onClick:()=>n("100"),children:"x100"})]}),e.jsx("div",{className:"hrline"}),e.jsxs("div",{className:"custom_checkbox",children:[e.jsx("input",{type:"checkbox",id:"Agree",checked:j}),e.jsxs("label",{for:"Agree",children:["I Agree ",e.jsx($,{children:"Privacy Policy"})]})]}),e.jsx("div",{className:"hrline"}),e.jsxs("button",{className:"total-btn",onClick:S,children:["Total Price: ",r]})]})})]})]}),e.jsx(J,{duration:d})]})]})]})}export{cs as default,E as toastProps};
