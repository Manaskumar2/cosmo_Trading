import{r as a,j as e,L as ue,d as Pe,A as We,a as Be}from"./index-0e8bc24c.js";import{N as Ke}from"./Nav-d2c57975.js";import{u as Ge,a as Ue,b as F,c as Ye,d as Ve}from"./createWithBsPrefix-2be3eafb.js";import{c as H,u as fe,a as Xe,t as Fe,T as ze,b as Je}from"./TransitionWrapper-b80d433f.js";import{u as qe,A as h}from"./Accordion-69369367.js";import"./react-lifecycles-compat.es-22c986ff.js";import{W as me,G as Qe}from"./GameHistory-dd92094b.js";import{a as Ze}from"./axios-4a70c6fc.js";/* empty css            */const es="/assets/Cosmo Logo-19871880.svg";const ss="/assets/telegram-21bf3f2e.svg",ns="/assets/bannerCosmoTrade-e7677bdc.svg",ts="/assets/bannerCosmoTrade2-3fe515db.svg",as="/assets/bannerCosmoTrade3-46d0c88c.svg";function rs(s,n){const r=a.useRef(!0);a.useEffect(()=>{if(r.current){r.current=!1;return}return s()},n)}const z=2**31-1;function ve(s,n,r){const i=r-Date.now();s.current=i<=z?setTimeout(n,i):setTimeout(()=>ve(s,n,r),z)}function is(){const s=Ge(),n=a.useRef();return Ue(()=>clearTimeout(n.current)),a.useMemo(()=>{const r=()=>clearTimeout(n.current);function i(l,c=0){s()&&(r(),c<=z?n.current=setTimeout(l,c):ve(n,l,Date.now()+c))}return{set:i,clear:r}},[])}const cs=["as","disabled"];function ls(s,n){if(s==null)return{};var r={},i=Object.keys(s),l,c;for(c=0;c<i.length;c++)l=i[c],!(n.indexOf(l)>=0)&&(r[l]=s[l]);return r}function os(s){return!s||s.trim()==="#"}function ge({tagName:s,disabled:n,href:r,target:i,rel:l,role:c,onClick:d,tabIndex:x=0,type:y}){s||(r!=null||i!=null||l!=null?s="a":s="button");const S={tagName:s};if(s==="button")return[{type:y||"button",disabled:n},S];const j=m=>{if((n||s==="a"&&os(r))&&m.preventDefault(),n){m.stopPropagation();return}d==null||d(m)},f=m=>{m.key===" "&&(m.preventDefault(),j(m))};return s==="a"&&(r||(r="#"),n&&(r=void 0)),[{role:c??"button",disabled:void 0,tabIndex:n?void 0:x,href:r,target:s==="a"?i:void 0,"aria-disabled":n||void 0,rel:s==="a"?l:void 0,onClick:j,onKeyDown:f},S]}const ds=a.forwardRef((s,n)=>{let{as:r,disabled:i}=s,l=ls(s,cs);const[c,{tagName:d}]=ge(Object.assign({tagName:r,disabled:i},l));return e.jsx(d,Object.assign({},l,c,{ref:n}))});ds.displayName="Button";const us=["onKeyDown"];function ms(s,n){if(s==null)return{};var r={},i=Object.keys(s),l,c;for(c=0;c<i.length;c++)l=i[c],!(n.indexOf(l)>=0)&&(r[l]=s[l]);return r}function hs(s){return!s||s.trim()==="#"}const pe=a.forwardRef((s,n)=>{let{onKeyDown:r}=s,i=ms(s,us);const[l]=ge(Object.assign({tagName:"a"},i)),c=F(d=>{l.onKeyDown(d),r==null||r(d)});return hs(i.href)||i.role==="button"?e.jsx("a",Object.assign({ref:n},i,l,{onKeyDown:c})):e.jsx("a",Object.assign({ref:n},i,{onKeyDown:r}))});pe.displayName="Anchor";const he=pe,xs=Ye("carousel-caption"),Ne=a.forwardRef(({as:s="div",bsPrefix:n,className:r,...i},l)=>{const c=H(r,fe(n,"carousel-item"));return e.jsx(s,{ref:l,...i,className:c})});Ne.displayName="CarouselItem";const js=Ne;function xe(s,n){let r=0;return a.Children.map(s,i=>a.isValidElement(i)?n(i,r++):i)}function fs(s,n){let r=0;a.Children.forEach(s,i=>{a.isValidElement(i)&&n(i,r++)})}const vs=40;function gs(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const n=getComputedStyle(s);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const be=a.forwardRef(({defaultActiveIndex:s=0,...n},r)=>{const{as:i="div",bsPrefix:l,slide:c=!0,fade:d=!1,controls:x=!0,indicators:y=!0,indicatorLabels:S=[],activeIndex:j,onSelect:f,onSlide:m,onSlid:k,interval:D=5e3,keyboard:J=!0,onKeyDown:P,pause:R="hover",onMouseOver:W,onMouseOut:B,wrap:M=!0,touch:q=!0,onTouchStart:K,onTouchMove:G,onTouchEnd:U,prevIcon:ye=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Q="Previous",nextIcon:_e=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Z="Next",variant:ee,className:we,children:Y,...Ce}=qe({defaultActiveIndex:s,...n},{activeIndex:"onSelect"}),p=fe(l,"carousel"),T=Xe(),I=a.useRef(null),[se,ne]=a.useState("next"),[Se,L]=a.useState(!1),[E,te]=a.useState(!1),[u,Re]=a.useState(j||0);a.useEffect(()=>{!E&&j!==u&&(I.current?ne(I.current):ne((j||0)>u?"next":"prev"),c&&te(!0),Re(j||0))},[j,E,u,c]),a.useEffect(()=>{I.current&&(I.current=null)});let _=0,ae;fs(Y,(t,o)=>{++_,o===j&&(ae=t.props.interval)});const re=Ve(ae),v=a.useCallback(t=>{if(E)return;let o=u-1;if(o<0){if(!M)return;o=_-1}I.current="prev",f==null||f(o,t)},[E,u,f,M,_]),g=F(t=>{if(E)return;let o=u+1;if(o>=_){if(!M)return;o=0}I.current="next",f==null||f(o,t)}),V=a.useRef();a.useImperativeHandle(r,()=>({element:V.current,prev:v,next:g}));const ie=F(()=>{!document.hidden&&gs(V.current)&&(T?v():g())}),w=se==="next"?"start":"end";rs(()=>{c||(m==null||m(u,w),k==null||k(u,w))},[u]);const Te=`${p}-item-${se}`,Ie=`${p}-item-${w}`,Ee=a.useCallback(t=>{Fe(t),m==null||m(u,w)},[m,u,w]),ke=a.useCallback(()=>{te(!1),k==null||k(u,w)},[k,u,w]),De=a.useCallback(t=>{if(J&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),T?g(t):v(t);return;case"ArrowRight":t.preventDefault(),T?v(t):g(t);return}P==null||P(t)},[J,P,v,g,T]),Me=a.useCallback(t=>{R==="hover"&&L(!0),W==null||W(t)},[R,W]),Ae=a.useCallback(t=>{L(!1),B==null||B(t)},[B]),ce=a.useRef(0),$=a.useRef(0),le=is(),Le=a.useCallback(t=>{ce.current=t.touches[0].clientX,$.current=0,R==="hover"&&L(!0),K==null||K(t)},[R,K]),$e=a.useCallback(t=>{t.touches&&t.touches.length>1?$.current=0:$.current=t.touches[0].clientX-ce.current,G==null||G(t)},[G]),Oe=a.useCallback(t=>{if(q){const o=$.current;Math.abs(o)>vs&&(o>0?v(t):g(t))}R==="hover"&&le.set(()=>{L(!1)},D||void 0),U==null||U(t)},[q,R,v,g,le,D,U]),oe=D!=null&&!Se&&!E,X=a.useRef();a.useEffect(()=>{var t,o;if(!oe)return;const N=T?v:g;return X.current=window.setInterval(document.visibilityState?ie:N,(t=(o=re.current)!=null?o:D)!=null?t:void 0),()=>{X.current!==null&&clearInterval(X.current)}},[oe,v,g,re,D,ie,T]);const de=a.useMemo(()=>y&&Array.from({length:_},(t,o)=>N=>{f==null||f(o,N)}),[y,_,f]);return e.jsxs(i,{ref:V,...Ce,onKeyDown:De,onMouseOver:Me,onMouseOut:Ae,onTouchStart:Le,onTouchMove:$e,onTouchEnd:Oe,className:H(we,p,c&&"slide",d&&`${p}-fade`,ee&&`${p}-${ee}`),children:[y&&e.jsx("div",{className:`${p}-indicators`,children:xe(Y,(t,o)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":S!=null&&S.length?S[o]:`Slide ${o+1}`,className:o===u?"active":void 0,onClick:de?de[o]:void 0,"aria-current":o===u},o))}),e.jsx("div",{className:`${p}-inner`,children:xe(Y,(t,o)=>{const N=o===u;return c?e.jsx(ze,{in:N,onEnter:N?Ee:void 0,onEntered:N?ke:void 0,addEndListener:Je,children:(A,He)=>a.cloneElement(t,{...He,className:H(t.props.className,N&&A!=="entered"&&Te,(A==="entered"||A==="exiting")&&"active",(A==="entering"||A==="exiting")&&Ie)})}):a.cloneElement(t,{className:H(t.props.className,N&&"active")})})}),x&&e.jsxs(e.Fragment,{children:[(M||j!==0)&&e.jsxs(he,{className:`${p}-control-prev`,onClick:v,children:[ye,Q&&e.jsx("span",{className:"visually-hidden",children:Q})]}),(M||j!==_-1)&&e.jsxs(he,{className:`${p}-control-next`,onClick:g,children:[_e,Z&&e.jsx("span",{className:"visually-hidden",children:Z})]})]})]})});be.displayName="Carousel";const C=Object.assign(be,{Caption:xs,Item:js});function ps(){return e.jsx("div",{children:e.jsx("div",{className:"banner",children:e.jsxs(C,{controls:!1,children:[e.jsxs(C.Item,{interval:8e3,children:[e.jsx("img",{src:ns}),e.jsx(C.Caption,{})]}),e.jsxs(C.Item,{interval:8e3,children:[e.jsx("img",{src:ts}),e.jsx(C.Caption,{})]}),e.jsxs(C.Item,{interval:8e3,children:[e.jsx("img",{src:as}),e.jsx(C.Caption,{})]})]})})})}const Ns="/assets/Big _ Small Game-0ae084a6.svg",bs="/assets/RiseUp-a4a2742a.svg",b="/assets/img-profile-5fe91240.svg";function ys(){return e.jsx("div",{className:"game",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"col-12 game",children:[e.jsx(ue,{to:"/growUp",children:e.jsxs("div",{className:"game-banner",children:[e.jsx("img",{src:Ns,alt:""}),e.jsxs("div",{className:"game_user_row1",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo5454"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 300.00"})]})]})]})}),e.jsx(ue,{to:"/riseUp",children:e.jsxs("div",{className:"game-banner trx",children:[e.jsx("img",{src:bs,alt:"",className:"game-banner-image"}),e.jsxs("div",{className:"game_user_row",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo2934"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 260.00"})]})]})]})})]})})})}const _s="/assets/count1-cefb43c4.svg",ws="/assets/count2-4fd82a1a.svg",Cs="/assets/count3-57f295d8.svg";function Ss(){return e.jsx("div",{className:"count",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"online_count_row",children:[e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:Cs,alt:""})}),e.jsx("div",{className:"num",children:"3251"}),e.jsx("p",{children:"Players"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:ws,alt:""})}),e.jsx("div",{className:"num",children:"78031"}),e.jsx("p",{children:"Total of betting"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:_s,alt:""})}),e.jsx("div",{className:"num",children:"2033"}),e.jsx("p",{children:"Online"})]})]})})})}const Rs="/assets/img-withdraw-bonus-33cbbf26.svg";function Ts(){return e.jsx("div",{className:"bonus",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"txt",children:[e.jsx("img",{src:Rs,alt:"",className:"img_bonus"}),e.jsxs("div",{className:"total_wdraw",children:[e.jsx("p",{children:"Today Total Withdrawal"}),e.jsxs("h3",{children:[e.jsx("i",{className:"icon-rupee"})," 68,520.00"]})]})]})})})}const Is=()=>{const s=a.useRef(null),n=a.useRef(null),r=a.useRef(null);return a.useEffect(()=>{const i=Math.floor(Math.random()*45311+651235);s.current&&(s.current.textContent=i);const c=setInterval(()=>{const d=new Date,x=d.getMinutes(),y=d.getSeconds();n.current&&(n.current.textContent=String(x).padStart(2,"0")),r.current&&(r.current.textContent=String(y).padStart(2,"0"))},1e3);return()=>{clearInterval(c)}},[]),e.jsx("div",{className:"time",children:e.jsxs("div",{className:"container",children:[e.jsx("h4",{className:"title text-center",children:"WEBSITE RUNNING TIME"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:s,className:"top"}),e.jsx("div",{className:"bot",children:"Hours"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:n,className:"top"}),e.jsx("div",{className:"bot",children:"Minutes"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:r,className:"top"}),e.jsx("div",{className:"bot",children:"Second"})]})]})]})})},je="/assets/star-62094d32.svg";function Es(){return e.jsx("div",{className:"withdraw",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row golden-bg",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})}),e.jsx("div",{className:"col-8 text-center",children:"Today Withdrawal"}),e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table table-striped",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Salman Reang"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Subham Sharma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 5000.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Rajesh Maiti"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Deepika Ghosh"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 700.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Sunam Verma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 450.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Abhishek Saini"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 1400.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]})]})})})]})})}const O="/assets/CasinoWheel-a7efa910.svg";function ks(){return e.jsxs("div",{className:"how-it-works",children:[e.jsx("h3",{className:"title",children:"How It Works?"}),e.jsxs(h,{children:[e.jsxs(h.Item,{eventKey:"0",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title ",children:" Choose a Game"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 01"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:O})})]})})]}),e.jsxs(h.Item,{eventKey:"1",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Pick a Number"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 02"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:O})})]})})]}),e.jsxs(h.Item,{eventKey:"3",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Bet Ammount"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 03"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:O})})]})})]}),e.jsxs(h.Item,{eventKey:"4",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Get Bonus"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 04"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:O})})]})})]})]})]})}const Ds="/assets/wp-c30eaa95.svg";function Ks(){const s=Pe(We),[n,r]=a.useState(1),[i,l]=Be(Qe),c=async()=>{try{let d=s.authToken;const x=await Ze.get(`https://cosmotrade.live/api//getSuccessFullGameHistory/${n}`,{headers:{Authorization:`Bearer ${d}`}});if(x.status===200)return console.log(x.data),l(x.data),x}catch(d){const x=d.response?d.response.data.message:d.message;console.log(x)}};return a.useEffect(()=>{c()},[]),e.jsxs("div",{className:"main-background",children:[e.jsx("div",{className:"home",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row home-row",children:[e.jsx("div",{className:"col-2 download",children:e.jsx("a",{href:"https://whatsapp.com/channel/0029VaAOCUm2Jl8C4oYY1u0M",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:Ds,alt:"",style:{width:"2.5rem"}})})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:es,alt:""})}),e.jsx("div",{className:"col-2 download",children:e.jsx("a",{href:"https://t.me/cosmotradeofficial",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:ss,alt:""})})})]})})}),e.jsx(ps,{}),e.jsx(ys,{}),e.jsx(Ss,{}),e.jsx(Ts,{}),e.jsx(Is,{}),e.jsx(Es,{}),e.jsx(ks,{}),e.jsx(Ke,{})]})}export{Ks as default};