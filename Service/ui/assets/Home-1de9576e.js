import{r as i,j as e,L as ue,d as Pe,A as We,a as Be}from"./index-08afe73c.js";import{l as Ke}from"./Cosmo Logo-1a4c0b51.js";import{N as Ge}from"./Nav-46124044.js";import{u as Ue,a as Xe,b as F,c as Ve,d as Ye}from"./createWithBsPrefix-d2ad0586.js";import{c as O,u as fe,a as Fe,t as ze,T as qe,b as Je}from"./TransitionWrapper-6fac8e16.js";import{u as Qe,A as h}from"./Accordion-e9c4a7c7.js";import{W as me,G as Ze}from"./GameHistory-fb991578.js";import{a as es}from"./axios-4a70c6fc.js";/* empty css            */const ss="/assets/telegram-21bf3f2e.svg",ns="/assets/bannerCosmoTrade-e7677bdc.svg",ts="/assets/bannerCosmoTrade2-3fe515db.svg",is="/assets/bannerCosmoTrade3-46d0c88c.svg";function as(s,n){const a=i.useRef(!0);i.useEffect(()=>{if(a.current){a.current=!1;return}return s()},n)}const z=2**31-1;function ve(s,n,a){const r=a-Date.now();s.current=r<=z?setTimeout(n,r):setTimeout(()=>ve(s,n,a),z)}function rs(){const s=Ue(),n=i.useRef();return Xe(()=>clearTimeout(n.current)),i.useMemo(()=>{const a=()=>clearTimeout(n.current);function r(l,c=0){s()&&(a(),c<=z?n.current=setTimeout(l,c):ve(n,l,Date.now()+c))}return{set:r,clear:a}},[])}const cs=["as","disabled"];function ls(s,n){if(s==null)return{};var a={},r=Object.keys(s),l,c;for(c=0;c<r.length;c++)l=r[c],!(n.indexOf(l)>=0)&&(a[l]=s[l]);return a}function os(s){return!s||s.trim()==="#"}function ge({tagName:s,disabled:n,href:a,target:r,rel:l,role:c,onClick:d,tabIndex:x=0,type:y}){s||(a!=null||r!=null||l!=null?s="a":s="button");const S={tagName:s};if(s==="button")return[{type:y||"button",disabled:n},S];const j=m=>{if((n||s==="a"&&os(a))&&m.preventDefault(),n){m.stopPropagation();return}d==null||d(m)},f=m=>{m.key===" "&&(m.preventDefault(),j(m))};return s==="a"&&(a||(a="#"),n&&(a=void 0)),[{role:c??"button",disabled:void 0,tabIndex:n?void 0:x,href:a,target:s==="a"?r:void 0,"aria-disabled":n||void 0,rel:s==="a"?l:void 0,onClick:j,onKeyDown:f},S]}const ds=i.forwardRef((s,n)=>{let{as:a,disabled:r}=s,l=ls(s,cs);const[c,{tagName:d}]=ge(Object.assign({tagName:a,disabled:r},l));return e.jsx(d,Object.assign({},l,c,{ref:n}))});ds.displayName="Button";const us=["onKeyDown"];function ms(s,n){if(s==null)return{};var a={},r=Object.keys(s),l,c;for(c=0;c<r.length;c++)l=r[c],!(n.indexOf(l)>=0)&&(a[l]=s[l]);return a}function hs(s){return!s||s.trim()==="#"}const pe=i.forwardRef((s,n)=>{let{onKeyDown:a}=s,r=ms(s,us);const[l]=ge(Object.assign({tagName:"a"},r)),c=F(d=>{l.onKeyDown(d),a==null||a(d)});return hs(r.href)||r.role==="button"?e.jsx("a",Object.assign({ref:n},r,l,{onKeyDown:c})):e.jsx("a",Object.assign({ref:n},r,{onKeyDown:a}))});pe.displayName="Anchor";const he=pe,xs=Ve("carousel-caption"),Ne=i.forwardRef(({as:s="div",bsPrefix:n,className:a,...r},l)=>{const c=O(a,fe(n,"carousel-item"));return e.jsx(s,{ref:l,...r,className:c})});Ne.displayName="CarouselItem";const js=Ne;function xe(s,n){let a=0;return i.Children.map(s,r=>i.isValidElement(r)?n(r,a++):r)}function fs(s,n){let a=0;i.Children.forEach(s,r=>{i.isValidElement(r)&&n(r,a++)})}const vs=40;function gs(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const n=getComputedStyle(s);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const be=i.forwardRef(({defaultActiveIndex:s=0,...n},a)=>{const{as:r="div",bsPrefix:l,slide:c=!0,fade:d=!1,controls:x=!0,indicators:y=!0,indicatorLabels:S=[],activeIndex:j,onSelect:f,onSlide:m,onSlid:k,interval:D=5e3,keyboard:q=!0,onKeyDown:P,pause:R="hover",onMouseOver:W,onMouseOut:B,wrap:M=!0,touch:J=!0,onTouchStart:K,onTouchMove:G,onTouchEnd:U,prevIcon:ye=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:Q="Previous",nextIcon:_e=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Z="Next",variant:ee,className:Ce,children:X,...we}=Qe({defaultActiveIndex:s,...n},{activeIndex:"onSelect"}),p=fe(l,"carousel"),T=Fe(),I=i.useRef(null),[se,ne]=i.useState("next"),[Se,L]=i.useState(!1),[E,te]=i.useState(!1),[u,Re]=i.useState(j||0);i.useEffect(()=>{!E&&j!==u&&(I.current?ne(I.current):ne((j||0)>u?"next":"prev"),c&&te(!0),Re(j||0))},[j,E,u,c]),i.useEffect(()=>{I.current&&(I.current=null)});let _=0,ie;fs(X,(t,o)=>{++_,o===j&&(ie=t.props.interval)});const ae=Ye(ie),v=i.useCallback(t=>{if(E)return;let o=u-1;if(o<0){if(!M)return;o=_-1}I.current="prev",f==null||f(o,t)},[E,u,f,M,_]),g=F(t=>{if(E)return;let o=u+1;if(o>=_){if(!M)return;o=0}I.current="next",f==null||f(o,t)}),V=i.useRef();i.useImperativeHandle(a,()=>({element:V.current,prev:v,next:g}));const re=F(()=>{!document.hidden&&gs(V.current)&&(T?v():g())}),C=se==="next"?"start":"end";as(()=>{c||(m==null||m(u,C),k==null||k(u,C))},[u]);const Te=`${p}-item-${se}`,Ie=`${p}-item-${C}`,Ee=i.useCallback(t=>{ze(t),m==null||m(u,C)},[m,u,C]),ke=i.useCallback(()=>{te(!1),k==null||k(u,C)},[k,u,C]),De=i.useCallback(t=>{if(q&&!/input|textarea/i.test(t.target.tagName))switch(t.key){case"ArrowLeft":t.preventDefault(),T?g(t):v(t);return;case"ArrowRight":t.preventDefault(),T?v(t):g(t);return}P==null||P(t)},[q,P,v,g,T]),Me=i.useCallback(t=>{R==="hover"&&L(!0),W==null||W(t)},[R,W]),Ae=i.useCallback(t=>{L(!1),B==null||B(t)},[B]),ce=i.useRef(0),$=i.useRef(0),le=rs(),Le=i.useCallback(t=>{ce.current=t.touches[0].clientX,$.current=0,R==="hover"&&L(!0),K==null||K(t)},[R,K]),$e=i.useCallback(t=>{t.touches&&t.touches.length>1?$.current=0:$.current=t.touches[0].clientX-ce.current,G==null||G(t)},[G]),He=i.useCallback(t=>{if(J){const o=$.current;Math.abs(o)>vs&&(o>0?v(t):g(t))}R==="hover"&&le.set(()=>{L(!1)},D||void 0),U==null||U(t)},[J,R,v,g,le,D,U]),oe=D!=null&&!Se&&!E,Y=i.useRef();i.useEffect(()=>{var t,o;if(!oe)return;const N=T?v:g;return Y.current=window.setInterval(document.visibilityState?re:N,(t=(o=ae.current)!=null?o:D)!=null?t:void 0),()=>{Y.current!==null&&clearInterval(Y.current)}},[oe,v,g,ae,D,re,T]);const de=i.useMemo(()=>y&&Array.from({length:_},(t,o)=>N=>{f==null||f(o,N)}),[y,_,f]);return e.jsxs(r,{ref:V,...we,onKeyDown:De,onMouseOver:Me,onMouseOut:Ae,onTouchStart:Le,onTouchMove:$e,onTouchEnd:He,className:O(Ce,p,c&&"slide",d&&`${p}-fade`,ee&&`${p}-${ee}`),children:[y&&e.jsx("div",{className:`${p}-indicators`,children:xe(X,(t,o)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":S!=null&&S.length?S[o]:`Slide ${o+1}`,className:o===u?"active":void 0,onClick:de?de[o]:void 0,"aria-current":o===u},o))}),e.jsx("div",{className:`${p}-inner`,children:xe(X,(t,o)=>{const N=o===u;return c?e.jsx(qe,{in:N,onEnter:N?Ee:void 0,onEntered:N?ke:void 0,addEndListener:Je,children:(A,Oe)=>i.cloneElement(t,{...Oe,className:O(t.props.className,N&&A!=="entered"&&Te,(A==="entered"||A==="exiting")&&"active",(A==="entering"||A==="exiting")&&Ie)})}):i.cloneElement(t,{className:O(t.props.className,N&&"active")})})}),x&&e.jsxs(e.Fragment,{children:[(M||j!==0)&&e.jsxs(he,{className:`${p}-control-prev`,onClick:v,children:[ye,Q&&e.jsx("span",{className:"visually-hidden",children:Q})]}),(M||j!==_-1)&&e.jsxs(he,{className:`${p}-control-next`,onClick:g,children:[_e,Z&&e.jsx("span",{className:"visually-hidden",children:Z})]})]})]})});be.displayName="Carousel";const w=Object.assign(be,{Caption:xs,Item:js});function ps(){return e.jsx("div",{children:e.jsx("div",{className:"banner",children:e.jsxs(w,{controls:!1,children:[e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:ns}),e.jsx(w.Caption,{})]}),e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:ts}),e.jsx(w.Caption,{})]}),e.jsxs(w.Item,{interval:8e3,children:[e.jsx("img",{src:is}),e.jsx(w.Caption,{})]})]})})})}const Ns="/assets/Big _ Small Game-0ae084a6.svg",bs="/assets/RiseUp-a4a2742a.svg",b="/assets/img-profile-5fe91240.svg";function ys(){return e.jsx("div",{className:"game",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"col-12 game",children:[e.jsx(ue,{to:"/growUp",children:e.jsxs("div",{className:"game-banner",children:[e.jsx("img",{src:Ns,alt:""}),e.jsxs("div",{className:"game_user_row1",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo5454"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 300.00"})]})]})]})}),e.jsx(ue,{to:"/riseUp",children:e.jsxs("div",{className:"game-banner trx",children:[e.jsx("img",{src:bs,alt:"",className:"game-banner-image"}),e.jsxs("div",{className:"game_user_row",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:b,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Cosmo2934"})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:me,alt:""})}),e.jsx("div",{className:"game_user_name",children:"Win 260.00"})]})]})]})})]})})})}const _s="/assets/count1-cefb43c4.svg",Cs="/assets/count2-4fd82a1a.svg",ws="/assets/count3-57f295d8.svg";function Ss(){return e.jsx("div",{className:"count",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"online_count_row",children:[e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:ws,alt:""})}),e.jsx("div",{className:"num",children:"3251"}),e.jsx("p",{children:"Players"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:Cs,alt:""})}),e.jsx("div",{className:"num",children:"78031"}),e.jsx("p",{children:"Total of betting"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:_s,alt:""})}),e.jsx("div",{className:"num",children:"2033"}),e.jsx("p",{children:"Online"})]})]})})})}const Rs="/assets/img-withdraw-bonus-33cbbf26.svg";function Ts(){return e.jsx("div",{className:"bonus",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"txt",children:[e.jsx("img",{src:Rs,alt:"",className:"img_bonus"}),e.jsxs("div",{className:"total_wdraw",children:[e.jsx("p",{children:"Today Total Withdrawal"}),e.jsxs("h3",{children:[e.jsx("i",{className:"icon-rupee"})," 68,520.00"]})]})]})})})}const Is=()=>{const s=i.useRef(null),n=i.useRef(null),a=i.useRef(null);return i.useEffect(()=>{const r=Math.floor(Math.random()*45311+651235);s.current&&(s.current.textContent=r);const c=setInterval(()=>{const d=new Date,x=d.getMinutes(),y=d.getSeconds();n.current&&(n.current.textContent=String(x).padStart(2,"0")),a.current&&(a.current.textContent=String(y).padStart(2,"0"))},1e3);return()=>{clearInterval(c)}},[]),e.jsx("div",{className:"time",children:e.jsxs("div",{className:"container",children:[e.jsx("h4",{className:"title text-center",children:"WEBSITE RUNNING TIME"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:s,className:"top"}),e.jsx("div",{className:"bot",children:"Hours"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:n,className:"top"}),e.jsx("div",{className:"bot",children:"Minutes"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:a,className:"top"}),e.jsx("div",{className:"bot",children:"Second"})]})]})]})})},je="/assets/star-62094d32.svg";function Es(){return e.jsx("div",{className:"withdraw",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row golden-bg",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})}),e.jsx("div",{className:"col-8 text-center",children:"Today Withdrawal"}),e.jsx("div",{className:"col-2",children:e.jsx("img",{src:je,alt:""})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table table-striped",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Salman Reang"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Subham Sharma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 5000.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Rajesh Maiti"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 300.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Deepika Ghosh"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 700.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Sunam Verma"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 450.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"09:20 AM"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:e.jsx("img",{src:b,alt:""})}),e.jsx("td",{style:{paddingLeft:0},children:"Abhishek Saini"}),e.jsx("td",{children:e.jsxs("h5",{children:[e.jsx("i",{className:"icon-rupee"})," 1400.00"]})}),e.jsx("td",{children:e.jsx("h6",{children:"06:30 PM"})})]})]})})})]})})}const H="/assets/CasinoWheel-a7efa910.svg";function ks(){return e.jsxs("div",{className:"how-it-works",children:[e.jsx("h3",{className:"title",children:"How It Works?"}),e.jsxs(h,{children:[e.jsxs(h.Item,{eventKey:"0",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title ",children:" Choose a Game"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 01"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"1",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Pick a Number"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 02"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"3",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Bet Ammount"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 03"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]}),e.jsxs(h.Item,{eventKey:"4",children:[e.jsxs(h.Header,{children:[" ",e.jsx("div",{className:"acc-title",children:" Get Bonus"}),e.jsx("div",{className:"acc-step",style:{color:"#1CC7ED"},children:"Step 04"})]}),e.jsx(h.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:H})})]})})]})]})]})}function Bs(){const s=Pe(We),[n,a]=i.useState(1),[r,l]=Be(Ze),c=async()=>{try{let d=s.authToken;const x=await es.get(`https://cosmotrade.live/api//getSuccessFullGameHistory/${n}`,{headers:{Authorization:`Bearer ${d}`}});if(x.status===200)return console.log(x.data),l(x.data),x}catch(d){const x=d.response?d.response.data.message:d.message;console.log(x)}};return i.useEffect(()=>{c()},[]),e.jsxs("div",{className:"main-background",children:[e.jsx("div",{className:"home",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-9",children:e.jsx("img",{src:Ke,alt:""})}),e.jsx("div",{className:"col-3 download",children:e.jsx("a",{href:"https://t.me/cosmotradeofficial",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:ss,alt:""})})})]})})}),e.jsx(ps,{}),e.jsx(ys,{}),e.jsx(Ss,{}),e.jsx(Ts,{}),e.jsx(Is,{}),e.jsx(Es,{}),e.jsx(ks,{}),e.jsx(Ge,{})]})}export{Bs as default};
