import{r as t,j as e,b as V,A as q,L as Ne,e as ye,d as ds,u as us,R as ms}from"./index-7972bc9e.js";import{N as hs}from"./Nav-4bedcb46.js";import{u as xs,a as fs,b as ne,_ as ps,c as vs,d as E,e as gs,f as js,t as Ae,T as Ee,g as Re,s as we,E as Ns,h as ys,i as ws,j as Cs}from"./TransitionWrapper-8fd303ad.js";import{u as bs}from"./Button-0c9c3d90.js";import{r as C}from"./setPrototypeOf-91672389.js";import"./react-lifecycles-compat.es-22c986ff.js";import"./GameHistory-24b3dd9e.js";import{W as Ce}from"./icon-winner-c8ca1043.js";import{a as L}from"./axios-4a70c6fc.js";import{G as Ss}from"./iconBase-dffa8345.js";import"./Auth-d7e9c41d.js";const _s="/assets/Cosmo Logo-19871880.svg";const Is="/assets/telegram-21bf3f2e.svg",As="/assets/bannerCosmoTrade-e7677bdc.svg",Es="/assets/bannerCosmoTrade2-3fe515db.svg",Rs="/assets/bannerCosmoTrade3-46d0c88c.svg";function Ts(s,n){const a=t.useRef(!0);t.useEffect(()=>{if(a.current){a.current=!1;return}return s()},n)}const te=2**31-1;function Te(s,n,a){const o=a-Date.now();s.current=o<=te?setTimeout(n,o):setTimeout(()=>Te(s,n,a),te)}function ks(){const s=xs(),n=t.useRef();return fs(()=>clearTimeout(n.current)),t.useMemo(()=>{const a=()=>clearTimeout(n.current);function o(r,c=0){s()&&(a(),c<=te?n.current=setTimeout(r,c):Te(n,r,Date.now()+c))}return{set:o,clear:a}},[])}const $s=["onKeyDown"];function Ds(s,n){if(s==null)return{};var a={},o=Object.keys(s),r,c;for(c=0;c<o.length;c++)r=o[c],!(n.indexOf(r)>=0)&&(a[r]=s[r]);return a}function Bs(s){return!s||s.trim()==="#"}const ke=t.forwardRef((s,n)=>{let{onKeyDown:a}=s,o=Ds(s,$s);const[r]=bs(Object.assign({tagName:"a"},o)),c=ne(i=>{r.onKeyDown(i),a==null||a(i)});return Bs(o.href)||o.role==="button"?e.jsx("a",Object.assign({ref:n},o,r,{onKeyDown:c})):e.jsx("a",Object.assign({ref:n},o,{onKeyDown:a}))});ke.displayName="Anchor";const be=ke;function ae(){return ae=Object.assign?Object.assign.bind():function(s){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(s[o]=a[o])}return s},ae.apply(this,arguments)}function Se(s){return"default"+s.charAt(0).toUpperCase()+s.substr(1)}function Ms(s){var n=Ps(s,"string");return typeof n=="symbol"?n:String(n)}function Ps(s,n){if(typeof s!="object"||s===null)return s;var a=s[Symbol.toPrimitive];if(a!==void 0){var o=a.call(s,n||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(s)}function Ls(s,n,a){var o=t.useRef(s!==void 0),r=t.useState(n),c=r[0],i=r[1],u=s!==void 0,d=o.current;return o.current=u,!u&&d&&c!==n&&i(n),[u?s:c,t.useCallback(function(h){for(var f=arguments.length,p=new Array(f>1?f-1:0),m=1;m<f;m++)p[m-1]=arguments[m];a&&a.apply(void 0,[h].concat(p)),i(h)},[a])]}function $e(s,n){return Object.keys(n).reduce(function(a,o){var r,c=a,i=c[Se(o)],u=c[o],d=ps(c,[Se(o),o].map(Ms)),h=n[o],f=Ls(u,i,s[h]),p=f[0],m=f[1];return ae({},d,(r={},r[o]=p,r[h]=m,r))},s)}const Os=vs("carousel-caption"),De=t.forwardRef(({as:s="div",bsPrefix:n,className:a,...o},r)=>{const c=C(a,E(n,"carousel-item"));return e.jsx(s,{ref:r,...o,className:c})});De.displayName="CarouselItem";const Ws=De;function _e(s,n){let a=0;return t.Children.map(s,o=>t.isValidElement(o)?n(o,a++):o)}function Ks(s,n){let a=0;t.Children.forEach(s,o=>{t.isValidElement(o)&&n(o,a++)})}const Hs=40;function Us(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const n=getComputedStyle(s);return n.display!=="none"&&n.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const Be=t.forwardRef(({defaultActiveIndex:s=0,...n},a)=>{const{as:o="div",bsPrefix:r,slide:c=!0,fade:i=!1,controls:u=!0,indicators:d=!0,indicatorLabels:h=[],activeIndex:f,onSelect:p,onSlide:m,onSlid:j,interval:w=5e3,keyboard:U=!0,onKeyDown:v,pause:A="hover",onMouseOver:O,onMouseOut:W,wrap:R=!0,touch:G=!0,onTouchStart:g,onTouchMove:T,onTouchEnd:J,prevIcon:Xe=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:ce="Previous",nextIcon:Ye=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:ie="Next",variant:le,className:Ve,children:Q,...qe}=$e({defaultActiveIndex:s,...n},{activeIndex:"onSelect"}),_=E(r,"carousel"),B=gs(),M=t.useRef(null),[de,ue]=t.useState("next"),[Ze,F]=t.useState(!1),[P,me]=t.useState(!1),[N,Je]=t.useState(f||0);t.useEffect(()=>{!P&&f!==N&&(M.current?ue(M.current):ue((f||0)>N?"next":"prev"),c&&me(!0),Je(f||0))},[f,P,N,c]),t.useEffect(()=>{M.current&&(M.current=null)});let k=0,he;Ks(Q,(l,x)=>{++k,x===f&&(he=l.props.interval)});const xe=js(he),b=t.useCallback(l=>{if(P)return;let x=N-1;if(x<0){if(!R)return;x=k-1}M.current="prev",p==null||p(x,l)},[P,N,p,R,k]),S=ne(l=>{if(P)return;let x=N+1;if(x>=k){if(!R)return;x=0}M.current="next",p==null||p(x,l)}),ee=t.useRef();t.useImperativeHandle(a,()=>({element:ee.current,prev:b,next:S}));const fe=ne(()=>{!document.hidden&&Us(ee.current)&&(B?b():S())}),$=de==="next"?"start":"end";Ts(()=>{c||(m==null||m(N,$),j==null||j(N,$))},[N]);const Qe=`${_}-item-${de}`,es=`${_}-item-${$}`,ss=t.useCallback(l=>{Ae(l),m==null||m(N,$)},[m,N,$]),ns=t.useCallback(()=>{me(!1),j==null||j(N,$)},[j,N,$]),ts=t.useCallback(l=>{if(U&&!/input|textarea/i.test(l.target.tagName))switch(l.key){case"ArrowLeft":l.preventDefault(),B?S(l):b(l);return;case"ArrowRight":l.preventDefault(),B?b(l):S(l);return}v==null||v(l)},[U,v,b,S,B]),as=t.useCallback(l=>{A==="hover"&&F(!0),O==null||O(l)},[A,O]),os=t.useCallback(l=>{F(!1),W==null||W(l)},[W]),pe=t.useRef(0),z=t.useRef(0),ve=ks(),rs=t.useCallback(l=>{pe.current=l.touches[0].clientX,z.current=0,A==="hover"&&F(!0),g==null||g(l)},[A,g]),cs=t.useCallback(l=>{l.touches&&l.touches.length>1?z.current=0:z.current=l.touches[0].clientX-pe.current,T==null||T(l)},[T]),is=t.useCallback(l=>{if(G){const x=z.current;Math.abs(x)>Hs&&(x>0?b(l):S(l))}A==="hover"&&ve.set(()=>{F(!1)},w||void 0),J==null||J(l)},[G,A,b,S,ve,w,J]),ge=w!=null&&!Ze&&!P,se=t.useRef();t.useEffect(()=>{var l,x;if(!ge)return;const I=B?b:S;return se.current=window.setInterval(document.visibilityState?fe:I,(l=(x=xe.current)!=null?x:w)!=null?l:void 0),()=>{se.current!==null&&clearInterval(se.current)}},[ge,b,S,xe,w,fe,B]);const je=t.useMemo(()=>d&&Array.from({length:k},(l,x)=>I=>{p==null||p(x,I)}),[d,k,p]);return e.jsxs(o,{ref:ee,...qe,onKeyDown:ts,onMouseOver:as,onMouseOut:os,onTouchStart:rs,onTouchMove:cs,onTouchEnd:is,className:C(Ve,_,c&&"slide",i&&`${_}-fade`,le&&`${_}-${le}`),children:[d&&e.jsx("div",{className:`${_}-indicators`,children:_e(Q,(l,x)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":h!=null&&h.length?h[x]:`Slide ${x+1}`,className:x===N?"active":void 0,onClick:je?je[x]:void 0,"aria-current":x===N},x))}),e.jsx("div",{className:`${_}-inner`,children:_e(Q,(l,x)=>{const I=x===N;return c?e.jsx(Ee,{in:I,onEnter:I?ss:void 0,onEntered:I?ns:void 0,addEndListener:Re,children:(K,ls)=>t.cloneElement(l,{...ls,className:C(l.props.className,I&&K!=="entered"&&Qe,(K==="entered"||K==="exiting")&&"active",(K==="entering"||K==="exiting")&&es)})}):t.cloneElement(l,{className:C(l.props.className,I&&"active")})})}),u&&e.jsxs(e.Fragment,{children:[(R||f!==0)&&e.jsxs(be,{className:`${_}-control-prev`,onClick:b,children:[Xe,ce&&e.jsx("span",{className:"visually-hidden",children:ce})]}),(R||f!==k-1)&&e.jsxs(be,{className:`${_}-control-next`,onClick:S,children:[Ye,ie&&e.jsx("span",{className:"visually-hidden",children:ie})]})]})]})});Be.displayName="Carousel";const D=Object.assign(Be,{Caption:Os,Item:Ws}),Gs="/assets/mic-3d929cbc.svg";function Fs({news:s}){return e.jsxs("div",{children:[e.jsx("div",{className:"banner",children:e.jsxs(D,{controls:!1,children:[e.jsxs(D.Item,{interval:8e3,children:[e.jsx("img",{src:As}),e.jsx(D.Caption,{})]}),e.jsxs(D.Item,{interval:8e3,children:[e.jsx("img",{src:Es}),e.jsx(D.Caption,{})]}),e.jsxs(D.Item,{interval:8e3,children:[e.jsx("img",{src:Rs}),e.jsx(D.Caption,{})]})]})}),e.jsxs("div",{className:"announcement container",children:[e.jsx("div",{className:"title text-center",children:e.jsx("h4",{children:"Latest News"})}),e.jsxs("div",{className:"row marquee-wrapper",children:[e.jsx("div",{className:"img_marquee",children:e.jsx("img",{src:Gs,alt:""})}),s&&e.jsx("div",{className:"marquee_text",children:e.jsx("marquee",{direction:"left",children:s.newsText})})]})]})]})}const zs="/assets/Big _ Small Game-0ae084a6.svg",Xs="/assets/RiseUp-a4a2742a.svg",oe="/assets/img-profile-5fe91240.svg";function Ys(){const s=V(q),[n,a]=t.useState(0),[o,r]=t.useState(9),[c,i]=t.useState(null),u=async()=>{try{let d=s.authToken;const h=await L.get("https://cosmotrade.live/api/getWinningDocuments",{headers:{Authorization:`Bearer ${d}`}});h.status===200&&i(h.data.documents)}catch(d){const h=d.response?d.response.data.message:d.message;console.error(h)}};return t.useEffect(()=>{u()},[]),t.useEffect(()=>{const d=setInterval(()=>{a(h=>(h+1)%10)},1e4);return()=>clearInterval(d)},[]),t.useEffect(()=>{const d=setInterval(()=>{r(h=>(h-1+10)%10)},1e4);return()=>clearInterval(d)},[]),e.jsx("div",{className:"game",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"col-12 game",children:[e.jsx(Ne,{to:"/growUp",children:e.jsxs("div",{className:"game-banner",children:[e.jsx("img",{src:zs,alt:""}),c&&c.length!=0&&e.jsxs("div",{className:"game_user_row1",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:oe,alt:""})}),e.jsx("div",{className:"game_user_name",children:c[n].name})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:Ce,alt:""})}),e.jsxs("div",{className:"game_user_name",children:["Win ",c[n].winningAmount]})]})]})]})}),e.jsx(Ne,{to:"/riseUp",children:e.jsxs("div",{className:"game-banner trx",children:[e.jsx("img",{src:Xs,alt:"",className:"game-banner-image"}),c&&c.length!=0&&e.jsxs("div",{className:"game_user_row",children:[e.jsxs("div",{className:"game_user_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:oe,alt:""})}),e.jsx("div",{className:"game_user_name",children:c[o].name})]}),e.jsxs("div",{className:"game_win_col",children:[e.jsx("div",{className:"game_user_img",children:e.jsx("img",{src:Ce,alt:""})}),e.jsxs("div",{className:"game_user_name",children:["Win ",c[o].winningAmount]})]})]})]})})]})})})}const Vs="/assets/count1-cefb43c4.svg",qs="/assets/count2-4fd82a1a.svg",Zs="/assets/count3-57f295d8.svg",Js="/assets/img-withdraw-bonus-33cbbf26.svg";function Qs(){const[s,n]=t.useState(),a=V(q),o=async()=>{try{let r=a.authToken;const c=await L.get("https://cosmotrade.live/api/getPlayers",{headers:{Authorization:`Bearer ${r}`}});if(c.status===200)return n(c.data),c}catch(r){r.response?r.response.data.message:r.message}};return t.useEffect(()=>{o()},[]),e.jsx("div",{className:"bonus",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"txt",children:[e.jsx("img",{src:Js,alt:"",className:"img_bonus"}),e.jsxs("div",{className:"total_wdraw",children:[e.jsx("p",{children:"Today Total Withdrawal"}),e.jsxs("h3",{children:[e.jsx("i",{className:"icon-rupee"})," ",s?s.todayTotalWithdrawal:105800]})]})]})})})}function en(){const[s,n]=t.useState(),a=V(q),o=async()=>{try{let r=a.authToken;const c=await L.get("https://cosmotrade.live/api/getPlayers",{headers:{Authorization:`Bearer ${r}`}});if(c.status===200)return n(c.data),c}catch(r){r.response?r.response.data.message:r.message}};return t.useEffect(()=>{o()},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"count",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"online_count_row",children:[e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:Zs,alt:""})}),e.jsx("div",{className:"num",children:s?s.totalPlayers:5659}),e.jsx("p",{children:"Players"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:qs,alt:""})}),e.jsx("div",{className:"num",children:s?s.TotalBetting:19900}),e.jsx("p",{children:"Total betting"})]}),e.jsxs("div",{className:"online_count_col",children:[e.jsx("div",{className:"count-logo",children:e.jsx("img",{src:Vs,alt:""})}),e.jsx("div",{className:"num",children:s?s.onlinePlayers:4959}),e.jsx("p",{children:"Online"})]})]})})}),e.jsx(Qs,{})]})}const sn=()=>{const s=t.useRef(null),n=t.useRef(null),a=t.useRef(null);return t.useEffect(()=>{const o=Math.floor(Math.random()*24+5111);s.current&&(s.current.textContent=o);const c=setInterval(()=>{const i=new Date,u=i.getMinutes(),d=i.getSeconds();n.current&&(n.current.textContent=String(u).padStart(2,"0")),a.current&&(a.current.textContent=String(d).padStart(2,"0"))},1e3);return()=>{clearInterval(c)}},[]),e.jsx("div",{className:"time",children:e.jsxs("div",{className:"container",children:[e.jsx("h4",{className:"title text-center",children:"WEBSITE RUNNING TIME"}),e.jsxs("div",{className:"row",children:[e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:s,className:"top"}),e.jsx("div",{className:"bot",children:"Hours"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:n,className:"top"}),e.jsx("div",{className:"bot",children:"Minutes"})]}),e.jsxs("div",{className:"col-4",children:[e.jsx("div",{ref:a,className:"top"}),e.jsx("div",{className:"bot",children:"Second"})]})]})]})})},Ie="/assets/star-62094d32.svg",X=[{name:"Haider",amount:1500},{name:"Shankar",amount:1800},{name:"Sai Patel",amount:900},{name:"Kiran Gupta",amount:700},{name:"Krishna Kumar",amount:1200},{name:"Ram Das",amount:1600},{name:"Ramesh Sharma",amount:800},{name:"UI",amount:1700},{name:"RaviRaj",amount:1100},{name:"Sunil ",amount:500},{name:"Suresh",amount:1400},{name:"Shardanand",amount:1900},{name:"Sarjerao",amount:600},{name:"Satya",amount:2e3},{name:"Shrikant",amount:800},{name:"Neha Agrawal",amount:1700},{name:"Shaligram",amount:900},{name:"Vasant",amount:700},{name:"Yogesh",amount:1300},{name:"Gopal",amount:1600},{name:"Yogesh",amount:1100},{name:"Dinkarrao",amount:700},{name:"Dattatrya",amount:1800},{name:"Chandru",amount:600},{name:"Jayant",amount:1500},{name:"Govardhan",amount:900},{name:"Azeez",amount:1600},{name:"Belal",amount:800},{name:"Belal",amount:1200},{name:"Babasahebh",amount:700},{name:"Narshima",amount:1400},{name:"Namdev",amount:800},{name:"Namdeo",amount:1200},{name:"Niwas",amount:700},{name:"Pratim",amount:1400},{name:"Prasad",amount:1200},{name:"Pawar",amount:700},{name:"Mohan",amount:1400},{name:"Kundlik",amount:1400},{name:"Kartik",amount:1200},{name:"Jinchandra",amount:700},{name:"Laxman",amount:1400},{name:"Maruti",amount:1400},{name:"Manu",amount:1200},{name:"Limaye",amount:700},{name:"Sumedh",amount:1400},{name:"Rao",amount:1400},{name:"Phani",amount:1200},{name:"Nitheesh",amount:700},{name:"Raza",amount:1400},{name:"Sambhab",amount:1200},{name:"Sajeed",amount:700},{name:"Rehman",amount:1400},{name:"Mohd",amount:1200},{name:"Sajeed",amount:700},{name:"Rehman",amount:1400},{name:"Preet",amount:1200},{name:"Zainab",amount:700},{name:"Shashikant",amount:1400},{name:"Balasaheb",amount:1200},{name:"Christopher",amount:700},{name:"Kamna",amount:1400},{name:"Subodh",amount:1200},{name:"Deepak",amount:700},{name:"Shashikant",amount:1400}];function nn(){const[s,n]=t.useState(X.slice(0,5)),[a,o]=t.useState(10);t.useEffect(()=>{const u=setInterval(()=>{o(d=>(d+1)%X.length)},4e3);return()=>{clearInterval(u)}},[]),t.useEffect(()=>{let u=[];for(let d=0;d<5;d++){const h=(a+d)%X.length;u.push(X[h])}n(u)},[a]);const[r,c]=t.useState(new Date);t.useEffect(()=>{const u=setInterval(()=>{c(new Date)},6e4);return()=>clearInterval(u)},[]);const i=r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return e.jsx("div",{className:"withdraw",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"container ",children:e.jsxs("div",{className:"row golden-bg",children:[e.jsx("div",{className:"col-2",children:e.jsx("img",{src:Ie,alt:""})}),e.jsx("div",{className:"col-8 text-center",children:"Today Withdrawal"}),e.jsx("div",{className:"col-2",children:e.jsx("img",{src:Ie,alt:""})})]})}),e.jsx("div",{className:"table-responsive",children:e.jsx("table",{className:"table table-striped",children:e.jsx("tbody",{children:s.map((u,d)=>e.jsxs("tr",{children:[e.jsx("td",{width:"35",children:e.jsx("img",{src:oe,alt:""})}),e.jsx("td",{style:{paddingLeft:0,textAlign:"left"},children:u.name}),e.jsx("td",{children:e.jsxs("h5",{style:{textAlign:"center"},children:[e.jsx("i",{className:"icon-rupee"})," ",u.amount]})}),e.jsx("td",{children:e.jsx("h6",{style:{textAlign:"right"},children:i})})]},d))})})})]})})}const Y="/assets/CasinoWheel-a7efa910.svg";function H(...s){return s.filter(n=>n!=null).reduce((n,a)=>{if(typeof a!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?a:function(...r){n.apply(this,r),a.apply(this,r)}},null)}const tn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function an(s,n){const a=`offset${s[0].toUpperCase()}${s.slice(1)}`,o=n[a],r=tn[s];return o+parseInt(we(n,r[0]),10)+parseInt(we(n,r[1]),10)}const on={[Ns]:"collapse",[ys]:"collapsing",[ws]:"collapsing",[Cs]:"collapse show"},rn=ye.forwardRef(({onEnter:s,onEntering:n,onEntered:a,onExit:o,onExiting:r,className:c,children:i,dimension:u="height",in:d=!1,timeout:h=300,mountOnEnter:f=!1,unmountOnExit:p=!1,appear:m=!1,getDimensionValue:j=an,...w},U)=>{const v=typeof u=="function"?u():u,A=t.useMemo(()=>H(g=>{g.style[v]="0"},s),[v,s]),O=t.useMemo(()=>H(g=>{const T=`scroll${v[0].toUpperCase()}${v.slice(1)}`;g.style[v]=`${g[T]}px`},n),[v,n]),W=t.useMemo(()=>H(g=>{g.style[v]=null},a),[v,a]),R=t.useMemo(()=>H(g=>{g.style[v]=`${j(v,g)}px`,Ae(g)},o),[o,j,v]),G=t.useMemo(()=>H(g=>{g.style[v]=null},r),[v,r]);return e.jsx(Ee,{ref:U,addEndListener:Re,...w,"aria-expanded":w.role?d:null,onEnter:A,onEntering:O,onEntered:W,onExit:R,onExiting:G,childRef:i.ref,in:d,timeout:h,mountOnEnter:f,unmountOnExit:p,appear:m,children:(g,T)=>ye.cloneElement(i,{...T,className:C(c,i.props.className,on[g],v==="width"&&"collapse-horizontal")})})}),cn=rn;function Me(s,n){return Array.isArray(s)?s.includes(n):s===n}const Pe=t.createContext({});Pe.displayName="AccordionContext";const Z=Pe,Le=t.forwardRef(({as:s="div",bsPrefix:n,className:a,children:o,eventKey:r,...c},i)=>{const{activeEventKey:u}=t.useContext(Z);return n=E(n,"accordion-collapse"),e.jsx(cn,{ref:i,in:Me(u,r),...c,className:C(a,n),children:e.jsx(s,{children:t.Children.only(o)})})});Le.displayName="AccordionCollapse";const Oe=Le,We=t.createContext({eventKey:""});We.displayName="AccordionItemContext";const re=We,Ke=t.forwardRef(({as:s="div",bsPrefix:n,className:a,onEnter:o,onEntering:r,onEntered:c,onExit:i,onExiting:u,onExited:d,...h},f)=>{n=E(n,"accordion-body");const{eventKey:p}=t.useContext(re);return e.jsx(Oe,{eventKey:p,onEnter:o,onEntering:r,onEntered:c,onExit:i,onExiting:u,onExited:d,children:e.jsx(s,{ref:f,...h,className:C(a,n)})})});Ke.displayName="AccordionBody";const ln=Ke;function dn(s,n){const{activeEventKey:a,onSelect:o,alwaysOpen:r}=t.useContext(Z);return c=>{let i=s===a?null:s;r&&(Array.isArray(a)?a.includes(s)?i=a.filter(u=>u!==s):i=[...a,s]:i=[s]),o==null||o(i,c),n==null||n(c)}}const He=t.forwardRef(({as:s="button",bsPrefix:n,className:a,onClick:o,...r},c)=>{n=E(n,"accordion-button");const{eventKey:i}=t.useContext(re),u=dn(i,o),{activeEventKey:d}=t.useContext(Z);return s==="button"&&(r.type="button"),e.jsx(s,{ref:c,onClick:u,...r,"aria-expanded":Array.isArray(d)?d.includes(i):i===d,className:C(a,n,!Me(d,i)&&"collapsed")})});He.displayName="AccordionButton";const Ue=He,Ge=t.forwardRef(({as:s="h2",bsPrefix:n,className:a,children:o,onClick:r,...c},i)=>(n=E(n,"accordion-header"),e.jsx(s,{ref:i,...c,className:C(a,n),children:e.jsx(Ue,{onClick:r,children:o})})));Ge.displayName="AccordionHeader";const un=Ge,Fe=t.forwardRef(({as:s="div",bsPrefix:n,className:a,eventKey:o,...r},c)=>{n=E(n,"accordion-item");const i=t.useMemo(()=>({eventKey:o}),[o]);return e.jsx(re.Provider,{value:i,children:e.jsx(s,{ref:c,...r,className:C(a,n)})})});Fe.displayName="AccordionItem";const mn=Fe,ze=t.forwardRef((s,n)=>{const{as:a="div",activeKey:o,bsPrefix:r,className:c,onSelect:i,flush:u,alwaysOpen:d,...h}=$e(s,{activeKey:"onSelect"}),f=E(r,"accordion"),p=t.useMemo(()=>({activeEventKey:o,onSelect:i,alwaysOpen:d}),[o,i,d]);return e.jsx(Z.Provider,{value:p,children:e.jsx(a,{ref:n,...h,className:C(c,f,u&&`${f}-flush`)})})});ze.displayName="Accordion";const y=Object.assign(ze,{Button:Ue,Collapse:Oe,Item:mn,Header:un,Body:ln});function hn(){return e.jsxs("div",{className:"how-it-works",children:[e.jsx("h3",{className:"title",children:"How It Works?"}),e.jsxs(y,{className:"gradient-btn",children:[e.jsxs(y.Item,{eventKey:"0",className:"Accordian-home-item",children:[e.jsxs(y.Header,{className:"acordian-home-head",children:[" ",e.jsx("div",{className:"acc-title ",children:" Choose a Game"}),e.jsx("div",{className:"acc-step",style:{color:"#00406F",fontWeight:"650"},children:"Step 01"})]}),e.jsx(y.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:Y})})]})})]}),e.jsxs(y.Item,{eventKey:"1",className:"Accordian-home-item",children:[e.jsxs(y.Header,{className:"acordian-home-head",children:[" ",e.jsx("div",{className:"acc-title",children:" Pick a Number"}),e.jsx("div",{className:"acc-step",style:{color:"#00406F",fontWeight:"650"},children:"Step 02"})]}),e.jsx(y.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:Y})})]})})]}),e.jsxs(y.Item,{eventKey:"3",className:"Accordian-home-item",children:[e.jsxs(y.Header,{className:"acordian-home-head",children:[" ",e.jsx("div",{className:"acc-title",children:" Bet Ammount"}),e.jsx("div",{className:"acc-step",style:{color:"#00406F",fontWeight:"650"},children:"Step 03"})]}),e.jsx(y.Body,{children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:Y})})]})})]}),e.jsxs(y.Item,{eventKey:"4",className:"Accordian-home-item",children:[e.jsxs(y.Header,{className:"acordian-home-head",children:[" ",e.jsx("div",{className:"acc-title",children:" Get Bonus"}),e.jsx("div",{className:"acc-step",style:{color:"#00406F",fontWeight:"650"},children:"Step 04"})]}),e.jsx(y.Body,{className:"acordian-home-body",children:e.jsxs("div",{className:"accordion_content_row",children:[e.jsx("div",{className:"accordion_text",children:"You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games."}),e.jsx("div",{className:"accordion_image",children:e.jsx("img",{src:Y})})]})})]})]})]})}const xn="/assets/wp-c30eaa95.svg";function fn(s){return Ss({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z",fill:"currentColor"}}]})(s)}const pn=ds({key:"TotalTeam",default:null});function An(){const s=us(),n=V(q),[a,o]=t.useState(!1),[r,c]=t.useState(""),[i,u]=t.useState("");ms(pn);const d=()=>{o(!1),localStorage.removeItem("showPopUp"),document.body.style.overflow="auto"},h=async()=>{try{let m=n.authToken,j=n._id;const w=await L.get(`https://cosmotrade.live/api/commissionAmount/${j}`,{headers:{Authorization:`Bearer ${m}`}});if(w.status===200)return localStorage.setItem("commission",JSON.stringify(w.data)),w}catch(m){m.response?m.response.data.message:m.message}},f=async()=>{try{let m=n.authToken;const j=await L.get("https://cosmotrade.live/api/images",{headers:{Authorization:`Bearer ${m}`}});j.status===200&&c(j.data.data.imageUrl)}catch(m){m.response?m.response.data.message:m.message}},p=async()=>{try{let m=n.authToken;const j=await L.get("https://cosmotrade.live/api/articles",{headers:{Authorization:`Bearer ${m}`}});if(j.status===200)return u(j.data),j}catch(m){if(m.response.status||m.status===403)return localStorage.removeItem("authUserToken"),s("/signIn"),response;m.response?m.response.data.message:m.message}};return t.useEffect(()=>{h(),p(),f()},[]),t.useEffect(()=>{(localStorage.getItem("showPopUp")||null)&&(o(!0),r?document.body.style.overflow="hidden":document.body.style.overflow="auto")},[]),e.jsxs("div",{className:"main-background main-background-Home",children:[a&&r&&e.jsx("div",{className:"popup-Home popup",children:e.jsxs("div",{className:"popup-body-home",children:[e.jsx("button",{className:"popup-close",onClick:d,children:e.jsx(fn,{})}),e.jsx("img",{src:r,alt:"Popup"})]})}),e.jsxs(e.Fragment,{children:[" ",e.jsx("div",{className:"home",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row home-row",children:[e.jsx("div",{className:"col-2 download",children:e.jsx("img",{src:xn,alt:"",style:{width:"2.5rem"}})}),e.jsx("div",{className:"col-8",children:e.jsx("img",{src:_s,alt:""})}),e.jsx("div",{className:"col-2 download",children:e.jsx("a",{href:"https://t.me/cosmotradeofficial",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:Is,alt:""})})})]})})}),e.jsx(Fs,{news:i}),e.jsx(Ys,{}),e.jsx(en,{}),e.jsx(sn,{}),e.jsx(nn,{}),e.jsx(hn,{}),e.jsx(hs,{})]})]})}export{An as default};
