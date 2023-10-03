import{r as a,j as e,L as ue,d as We,A as Pe,a as Be}from"./index-1e26659f.js";import{N as Ke}from"./Nav-8d11edef.js";import{u as Ge,a as Ue,b as F,c as Xe,d as Ve}from"./createWithBsPrefix-262d36d9.js";import{c as O,u as fe,a as Ye,t as Fe,T as ze,b as qe}from"./TransitionWrapper-1219bb77.js";import{u as Je,A as h}from"./Accordion-8da89bef.js";import"./react-lifecycles-compat.es-22c986ff.js";import{W as me,G as Qe}from"./GameHistory-f05bd794.js";import{a as Ze}from"./axios-4a70c6fc.js";/* empty css            */const es="/assets/Cosmo Logo-19871880.svg";const ss="/assets/telegram-21bf3f2e.svg",ns="/assets/bannerCosmoTrade-e7677bdc.svg",ts="/assets/bannerCosmoTrade2-3fe515db.svg",as="/assets/bannerCosmoTrade3-46d0c88c.svg";function is(s,n){const i=a.useRef(!0);a.useEffect(()=>{if(i.current){i.current=!1;return}return s()},n)}const z=2**31-1;function ve(s,n,i){const r=i-Date.now();s.current=r<=z?setTimeout(n,r):setTimeout(()=>ve(s,n,i),z)}function rs(){const s=Ge(),n=a.useRef();return Ue(()=>clearTimeout(n.current)),a.useMemo(()=>{const i=()=>clearTimeout(n.current);function r(l,c=0){s()&&(i(),c<=z?n.current=setTimeout(l,c):ve(n,l,Date.now()+c))}return{set:r,clear:i}},[])}const cs=["as","disabled"];function ls(s,n){if(s==null)return{};var i={},r=Object.keys(s),l,c;for(c=0;c<r.length;c++)l=r[c],!(n.indexOf(l)>=0)&&(i[l]=s[l]);return i}function os(s){return!s||s.trim()==="#"}function ge({tagName:s,disabled:n,href:i,target:r,rel:l,role:c,onClick:d,tabIndex:x=0,type:y}){s||(i!=null||r!=null||l!=null?s="a":s="button");const S={tagName:s};if(s==="button")return[{type:y||"button",disabled:n},S];const j=m=>{if((n||s==="a"&&os(i))&&m.preventDefault(),n){m.stopPropagation();return}d==null||d(m)},f=m=>{m.key===" "&&(m.preventDefault(),j(m))};return s==="a"&&(i||(i="#"),n&&(i=void 0)),[{role:c??"button",disabled:void 0,tabIndex:n?void 0:x,href:i,target:s==="a"?r:void 0,"aria-disabled":n||void 0,rel:s==="a"?l:void 0,onClick:j,onKeyDown:f},S]}const ds=a.forwardRef((s,n)=>{let{as:i,disabled:r}=s,l=ls(s,cs);const[c,{tagName:d}]=ge(Object.assign({tagName:i,disabled:r},l));return e.jsx(d,Object.assign({},l,c,{ref:n}))});ds.displayName="Button";const us=["onKeyDown"];function ms(s,n){if(s==null)return{};var i={},r=Object.keys(s),l,c;for(c=0;c<r.length;c++)l=r[c],!(n.indexOf(l)>=0)&&(i[l]=s[l]);return i}function hs(s){return!s||s.trim()==="#"}const pe=a.forwardRef((s,n)=>{let{onKeyDown:i}=s,r=ms(s,us);const[l]=ge(Object.assign({tagName:"a"},r)),c=F(d=>{l.onKeyDown(d),i==null||i(d)});return hs(r.href)||r.role==="button"?e.jsx("a",Object.assign({ref:n},r,l,{onKeyDown:c})):e.jsx("a",Object.assign({ref:n},r,{onKeyDown:i}))});pe.displayName="Anchor";const he=pe,xs=Xe("carousel-caption"),Ne=a.forwardRef(({as:s="div",bsPrefix:n,className:i,...r},l)=>{const c=O(i,fe(n,"carousel-item"));return e.jsx(s,{ref:l,...r,className:c})});Ne.displayName="CarouselItem";const js=Ne;function xe(s,n){let i=0;return a.Children.map(s,r=>a.isValidElement(r)?n(r,i++):r)}function fs(s,n){let i=0;a.Children.forEach(s,r=>{a.isValidElement(r)&&n(r,i++)})}const vs=40;function gs(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const n=getComputedStyle(s);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const be=a.forwardRef(({defaultActiveIndex:s=0,...n},i)=>{const{as:r="div",bsPrefix:l,slide:c=!0,fade:d=!1,controls:x=!0,indicators:y=!0,indicatorLabels:S=[],activeIndex:j,onSelect:f,onSlide:m,onSlid:k,interval:D=5e3,keyboard:q=!0,onKeyDown:W,pause:R="hover",onMouseOver:P,onMouseOut:B,wrap:M=!0,touch:J=!0,onTouchStart:K,onTouchMove:G,onTouchEnd:U,prevIcon:ye=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Q="Previous",nextIcon:_e=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Z="Next",variant:ee,className:Ce,children:X,...we}=Je({defaultActiveIndex:s,...n},{activeIndex:"onSelect"}),p=fe(l,"carousel"),T=Ye(),I=a.useRef(null),[se,ne]=a.useState("next"),[Se,A]=a.useState(!1),[E,te]=a.useState(!1),[u,Re]=a.useState(j||0);a.useEffect(()=>{!E&&j!==u&&(I.current?ne(I.current):ne((j||0)>u?"next":"prev"),c&&te(!0),Re(j||0))},[j,E,u,c]),a.useEffect(()=>{I.current&&(I.current=null)});let _=0,ae;fs(X,(t,o)=>{++_,o===j&&(ae=t.props.interval)});const ie=Ve(ae),v=a.useCallback(t=>{if(E)return;let o=u-1;if(o<0){if(!M)return;o=_-1}I.current="prev",f==null||f(o,t)},[E,u,f,M,_]),g=F(t=>{if(E)return;let o=u+1;if(o>=_){if(!M)return;o=0}I.current="next",f==null||f(o,t)}),V=a.useRef();a.useImperativeHandle(i,()=>({element:V.current,prev:v,next:g}));const re=F(()=>{!document.hidden&&gs(V.current)&&(T?v():g())}),C=se==="next"?"start":"end";is(()=>{c||(m==null||m(u,C),k==null||k(u,C))},[u]);const Te=`${p}-item-${se}`,Ie=`${p}-item-${C}`,Ee=a.useCallback(t=>{Fe(t),m==null||m(u,C)},[m,u,C]),ke=a.useCallback(()=>{te(!1),k==null||k(u,C)},[k,u,C]),De=a.useCallback(t=>{if(q&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),T?g(t):v(t);return;case"ArrowRight":t.preventDefault(),T?v(t):g(t);return}W==null||W(t)},[q,W,v,g,T]),Me=a.useCallback(t=>{R==="hover"&&A(!0),P==null||P(t)},[R,P]),Le=a.useCallback(t=>{A(!1),B==null||B(t)},[B]),ce=a.useRef(0),$=a.useRef(0),le=rs(),Ae=a.useCallback(t=>{ce.current=t.touches[0].clientX,$.current=0,R==="hover"&&A(!0),K==null||K(t)},[R,K]),$e=a.useCallback(t=>{t.touches&&t.touches.length>1?$.current=0:$.current=t.touches[0].clientX-ce.current,G==null||G(t)},[G]),He=a.useCallback(t=>{if(J){const o=$.current;Math.abs(o)>vs&&(o>0?v(t):g(t))}R==="hover"&&le.set(()=>{A(!1)},D||void 0),U==null||U(t)},[J,R,v,g,le,D,U]),oe=D!=null&&!Se&&!E,Y=a.useRef();a.useEffect(()=>{var t,o;if(!oe)return;const N=T?v:g;return Y.current=window.setInterval(document.visibilityState?re:N,(t=(o=ie.current)!=null?o:D)!=null?t:void 0),()=>{Y.current!==null&&clearInterval(Y.current)}},[oe,v,g,ie,D,re,T]);const de=a.useMemo(()=>y&&Array.from({length:_},(t,o)=>N=>{f==null||f(o,N)}),[y,_,f]);return e.jsxs(r,{ref:V,...we,onKeyDown:De,onMouseOver:Me,onMouseOut:Le,onTouchStart:Ae,onTouchMove:$e,onTouchEnd:He,className:O(Ce,p,c&&"slide",d&&`${p}-fade`,ee&&`${p}-${ee}`),children:[y&&e.jsx("div",{className:`${p}-indicators`,children:xe(X,(t,o)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":S!=null&&S.length?S[o]:`Slide ${o+1}`,className:o===u?"active":void 0,onClick:de?de[o]:void 0,"aria-current":o===u},o))}),e.jsx("div",{className:`${p}-inner`,children:xe(X,(t,o)=>{const N=o===u;return c?e.jsx(ze,{in:N,onEnter:N?Ee:void 0,onEntered:N?ke:void 0,addEndListener:qe,children:(L,Oe)=>a.cloneElement(t,{...Oe,className:O(t.props.className,N&&L!=="entered"&&Te,(L==="entered"||L==="exiting")&&"active",(L==="entering"||L==="exiting")&&Ie)})}):a.cloneElement(t,{className:O(t.props.className,N&&"active")})})}),x&&e.jsxs(e.Fragment,{children:[(M||j!==0)&&e.jsxs(he,{className:`${p}-control-prev`,onClick:v,children:[ye,Q&&e.jsx("span",{className:"visually-hidden",children:Q})]}),(M||j!==_-1)&&e.jsxs(he,{className:`${p}-control-next`,onClick:g,children:[_e,Z&&e.jsx("span",{className:"visually-hidden",children:Z})]})]})]})});be.displayName="Carousel";const w=Object.assign(be,{Caption:xs,Item:js});function ps(){return e.jsx("div",{children:e.jsx("div",{className:"banner",children:e.jsxs(w,{controls:!1,children:[e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:ns}),e.jsx(w.Caption,{})]}),e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:ts}),e.jsx(w.Caption,{})]}),e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:as}),e.jsx(w.Caption,{})]})]})})})}const Ns="/assets/Big _ Small Game-0ae084a6.svg",bs="/assets/RiseUp-a4a2742a.svg",b="/assets/img-profile-5fe91240.svg";function ys(){return e.jsx("div",{className:"game",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"col-12 game",children:[e.jsx(ue,{to:"/growUp",children:e.jsxs("div",{className:"game-banner",children:[e.jsx("img",{src:Ns,alt:""}),e.jsxs("div",{className:"game_user_row1",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo5454"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 300.00"})]})]})]})}),e.jsx(ue,{to:"/riseUp",children:e.jsxs("div",{className:"game-banner trx",children:[e.jsx("img",{src:bs,alt:"",className:"game-banner-image"}),e.jsxs("div",{className:"game_user_row",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo2934"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 260.00"})]})]})]})})]})})})}const _s="/assets/count1-cefb43c4.svg",Cs="/assets/count2-4fd82a1a.svg",ws="/assets/count3-57f295d8.svg";function Ss(){return e.jsx("div",{className:"count",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"online_count_row",children:[e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:ws,alt:""})}),e.jsx("div",{className:"num",children:"3251"}),e.jsx("p",{children:"Players"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:Cs,alt:""})}),e.jsx("div",{className:"num",children:"78031"}),e.jsx("p",{children:"Total of betting"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:_s,alt:""})}),e.jsx("div",{className:"num",children:"2033"}),e.jsx("p",{children:"Online"})]})]})})})}const Rs="/assets/img-withdraw-bonus-33cbbf26.svg";function Ts(){return e.jsx("div",{className:"bonus",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"txt",children:[e.jsx("img",{src:Rs,alt:"",className:"img_bonus"}),e.jsxs("div",{className:"total_wdraw",children:[e.jsx("p",{children:"Today Total Withdrawal"}),e.jsxs("h3",{children:[e.jsx("i",{className:"icon-rupee"})," 68,520.00"]})]})]})})})}const Is=()=>{const s=a.useRef(null),n=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{const r=Math.floor(Math.random()*45311+651235);s.current&&(s.current.textContent=r);const c=setInterval(()=>{const d=new Date,x=d.getMinutes(),y=d.getSeconds();n.current&&(n.current.textContent=String(x).padStart(2,"0")),i.current&&(i.current.textContent=String(y).padStart(2,"0"))},1e3);return()=>{clearInterval(c)}},[]),e.jsx("div",{className:"time",children:e.jsxs("div",{className:"container",children:[e.jsx("h4",{className:"title text-center",children:"WEBSITE RUNNING TIME"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:s,className:"top"}),e.jsx("div",{className:"bot",children:"Hours"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:n,className:"top"}),e.jsx("div",{className:"bot",children:"Minutes"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:i,className:"top"}),e.jsx("div",{className:"bot",children:"Second"})]})]})]})})},je="/assets/star-62094d32.svg";function Es(){return e.jsx("div",{className:"withdraw",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row golden-bg",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})}),e.jsx("div",{className:"col-8 text-center",children:"Today Withdrawal"}),e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table table-striped",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Salman Reang"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Subham Sharma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 5000.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Rajesh Maiti"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Deepika Ghosh"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 700.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Sunam Verma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 450.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Abhishek Saini"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 1400.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]})]})})})]})})}const H="/assets/CasinoWheel-a7efa910.svg";function ks(){return e.jsxs("div",{className:"how-it-works",children:[e.jsx("h3",{className:"title",children:"How It Works?"}),e.jsxs(h,{children:[e.jsxs(h.Item,{eventKey:"0",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title ",children:" Choose a Game"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 01"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"1",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Pick a Number"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 02"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"3",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Bet Ammount"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 03"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"4",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Get Bonus"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 04"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]})]})]})}const Ds="/assets/wp-c30eaa95.svg";function Ks(){LiveChatWidget.call("hide");const s=We(Pe),[n,i]=a.useState(1),[r,l]=Be(Qe),c=async()=>{try{let d=s.authToken;const x=await Ze.get(`https://cosmotrade.live/api//getSuccessFullGameHistory/${n}`,{headers:{Authorization:`Bearer ${d}`}});if(x.status===200)return console.log(x.data),l(x.data),x}catch(d){const x=d.response?d.response.data.message:d.message;console.log(x)}};return a.useEffect(()=>{c()},[]),e.jsxs("div",{className:"main-background",children:[e.jsx("div",{className:"home",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row home-row",children:[e.jsx("div",{className:"col-2 download",children:e.jsx("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:Ds,alt:""})})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:es,alt:""})}),e.jsx("div",{className:"col-2 download",children:e.jsx("a",{href:"https://t.me/cosmotradeofficial",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:ss,alt:""})})})]})})}),e.jsx(ps,{}),e.jsx(ys,{}),e.jsx(Ss,{}),e.jsx(Ts,{}),e.jsx(Is,{}),e.jsx(Es,{}),e.jsx(ks,{}),e.jsx(Ke,{})]})}export{Ks as default};
