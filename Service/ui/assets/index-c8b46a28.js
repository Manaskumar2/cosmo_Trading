import{r as _e,i as qe,k as Ue,g as Ie}from"./index-cbf14f70.js";import{p as Ee}from"./index-5dbd9c80.js";import{r as $e}from"./react-lifecycles-compat.es-22c986ff.js";var le={exports:{}},H={},se={exports:{}},N={},ie={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var o="none",a="contents",l=/input|select|textarea|button|object|iframe/;function d(c,p){return p.getPropertyValue("overflow")!=="visible"||c.scrollWidth<=0&&c.scrollHeight<=0}function _(c){var p=c.offsetWidth<=0&&c.offsetHeight<=0;if(p&&!c.innerHTML)return!0;try{var m=window.getComputedStyle(c),E=m.getPropertyValue("display");return p?E!==a&&d(c,m):E===o}catch{return console.warn("Failed to inspect element style"),!1}}function r(c){for(var p=c,m=c.getRootNode&&c.getRootNode();p&&p!==document.body;){if(m&&p===m&&(p=m.host.parentNode),_(p))return!1;p=p.parentNode}return!0}function O(c,p){var m=c.nodeName.toLowerCase(),E=l.test(m)&&!c.disabled||m==="a"&&c.href||p;return E&&r(c)}function v(c){var p=c.getAttribute("tabindex");p===null&&(p=void 0);var m=isNaN(p);return(m||p>=0)&&O(c,!m)}function h(c){var p=[].slice.call(c.querySelectorAll("*"),0).reduce(function(m,E){return m.concat(E.shadowRoot?h(E.shadowRoot):[E])},[]);return p.filter(v)}n.exports=e.default})(ie,ie.exports);var we=ie.exports;Object.defineProperty(N,"__esModule",{value:!0});N.resetState=je;N.log=Ye;N.handleBlur=j;N.handleFocus=Y;N.markForFocusLater=ze;N.returnFocus=Ve;N.popWithoutFocus=Ge;N.setupScopedFocus=Je;N.teardownScopedFocus=Qe;var We=we,Be=Ke(We);function Ke(n){return n&&n.__esModule?n:{default:n}}var U=[],q=null,ue=!1;function je(){U=[]}function Ye(){}function j(){ue=!0}function Y(){if(ue){if(ue=!1,!q)return;setTimeout(function(){if(!q.contains(document.activeElement)){var n=(0,Be.default)(q)[0]||q;n.focus()}},0)}}function ze(){U.push(document.activeElement)}function Ve(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{U.length!==0&&(e=U.pop(),e.focus({preventScroll:n}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function Ge(){U.length>0&&U.pop()}function Je(n){q=n,window.addEventListener?(window.addEventListener("blur",j,!1),document.addEventListener("focus",Y,!0)):(window.attachEvent("onBlur",j),document.attachEvent("onFocus",Y))}function Qe(){q=null,window.addEventListener?(window.removeEventListener("blur",j),document.removeEventListener("focus",Y)):(window.detachEvent("onBlur",j),document.detachEvent("onFocus",Y))}var fe={exports:{}};(function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var o=we,a=l(o);function l(r){return r&&r.__esModule?r:{default:r}}function d(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?d(r.activeElement.shadowRoot):r.activeElement}function _(r,O){var v=(0,a.default)(r);if(!v.length){O.preventDefault();return}var h=void 0,c=O.shiftKey,p=v[0],m=v[v.length-1],E=d();if(r===E){if(!c)return;h=m}if(m===E&&!c&&(h=p),p===E&&c&&(h=m),h){O.preventDefault(),h.focus();return}var A=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),W=A!=null&&A[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(W){var k=v.indexOf(E);if(k>-1&&(k+=c?-1:1),h=v[k],typeof h>"u"){O.preventDefault(),h=c?m:p,h.focus();return}O.preventDefault(),h.focus()}}n.exports=e.default})(fe,fe.exports);var Xe=fe.exports,R={},Ze=function(){},et=Ze,T={},Se={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(n){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),o={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};n.exports?n.exports=o:window.ExecutionEnvironment=o})()})(Se);var tt=Se.exports;Object.defineProperty(T,"__esModule",{value:!0});T.canUseDOM=T.SafeNodeList=T.SafeHTMLCollection=void 0;var nt=tt,ot=rt(nt);function rt(n){return n&&n.__esModule?n:{default:n}}var ne=ot.default,at=ne.canUseDOM?window.HTMLElement:{};T.SafeHTMLCollection=ne.canUseDOM?window.HTMLCollection:{};T.SafeNodeList=ne.canUseDOM?window.NodeList:{};T.canUseDOM=ne.canUseDOM;T.default=at;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=ft;R.log=ct;R.assertNodeList=Me;R.setElement=dt;R.validateElement=ce;R.hide=pt;R.show=vt;R.documentNotReadyOrSSRTesting=mt;var lt=et,st=ut(lt),it=T;function ut(n){return n&&n.__esModule?n:{default:n}}var S=null;function ft(){S&&(S.removeAttribute?S.removeAttribute("aria-hidden"):S.length!=null?S.forEach(function(n){return n.removeAttribute("aria-hidden")}):document.querySelectorAll(S).forEach(function(n){return n.removeAttribute("aria-hidden")})),S=null}function ct(){}function Me(n,e){if(!n||!n.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function dt(n){var e=n;if(typeof e=="string"&&it.canUseDOM){var o=document.querySelectorAll(e);Me(o,e),e=o}return S=e||S,S}function ce(n){var e=n||S;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,st.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function pt(n){var e=!0,o=!1,a=void 0;try{for(var l=ce(n)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var _=d.value;_.setAttribute("aria-hidden","true")}}catch(r){o=!0,a=r}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function vt(n){var e=!0,o=!1,a=void 0;try{for(var l=ce(n)[Symbol.iterator](),d;!(e=(d=l.next()).done);e=!0){var _=d.value;_.removeAttribute("aria-hidden")}}catch(r){o=!0,a=r}finally{try{!e&&l.return&&l.return()}finally{if(o)throw a}}}function mt(){S=null}var I={};Object.defineProperty(I,"__esModule",{value:!0});I.resetState=ht;I.log=yt;var B={},K={};function ve(n,e){n.classList.remove(e)}function ht(){var n=document.getElementsByTagName("html")[0];for(var e in B)ve(n,B[e]);var o=document.body;for(var a in K)ve(o,K[a]);B={},K={}}function yt(){}var bt=function(e,o){return e[o]||(e[o]=0),e[o]+=1,o},Ot=function(e,o){return e[o]&&(e[o]-=1),o},Ct=function(e,o,a){a.forEach(function(l){bt(o,l),e.add(l)})},gt=function(e,o,a){a.forEach(function(l){Ot(o,l),o[l]===0&&e.remove(l)})};I.add=function(e,o){return Ct(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};I.remove=function(e,o){return gt(e.classList,e.nodeName.toLowerCase()=="html"?B:K,o.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Et;$.resetState=wt;function _t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var Te=function n(){var e=this;_t(this,n),this.register=function(o){e.openInstances.indexOf(o)===-1&&(e.openInstances.push(o),e.emit("register"))},this.deregister=function(o){var a=e.openInstances.indexOf(o);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(o){e.subscribers.push(o)},this.emit=function(o){e.subscribers.forEach(function(a){return a(o,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},Z=new Te;function Et(){console.log("portalOpenInstances ----------"),console.log(Z.openInstances.length),Z.openInstances.forEach(function(n){return console.log(n)}),console.log("end portalOpenInstances ----------")}function wt(){Z=new Te}$.default=Z;var de={};Object.defineProperty(de,"__esModule",{value:!0});de.resetState=Nt;de.log=Rt;var St=$,Mt=Tt(St);function Tt(n){return n&&n.__esModule?n:{default:n}}var g=void 0,M=void 0,F=[];function Nt(){for(var n=[g,M],e=0;e<n.length;e++){var o=n[e];o&&o.parentNode&&o.parentNode.removeChild(o)}g=M=null,F=[]}function Rt(){console.log("bodyTrap ----------"),console.log(F.length);for(var n=[g,M],e=0;e<n.length;e++){var o=n[e],a=o||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function me(){F.length!==0&&F[F.length-1].focusContent()}function At(n,e){!g&&!M&&(g=document.createElement("div"),g.setAttribute("data-react-modal-body-trap",""),g.style.position="absolute",g.style.opacity="0",g.setAttribute("tabindex","0"),g.addEventListener("focus",me),M=g.cloneNode(),M.addEventListener("focus",me)),F=e,F.length>0?(document.body.firstChild!==g&&document.body.insertBefore(g,document.body.firstChild),document.body.lastChild!==M&&document.body.appendChild(M)):(g.parentElement&&g.parentElement.removeChild(g),M.parentElement&&M.parentElement.removeChild(M))}Mt.default.subscribe(At);(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(f){for(var u=1;u<arguments.length;u++){var y=arguments[u];for(var t in y)Object.prototype.hasOwnProperty.call(y,t)&&(f[t]=y[t])}return f},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},l=function(){function f(u,y){for(var t=0;t<y.length;t++){var s=y[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(u,s.key,s)}}return function(u,y,t){return y&&f(u.prototype,y),t&&f(u,t),u}}(),d=_e,_=Ee,r=G(_),O=N,v=oe(O),h=Xe,c=G(h),p=R,m=oe(p),E=I,A=oe(E),W=T,k=G(W),Re=$,pe=G(Re);function oe(f){if(f&&f.__esModule)return f;var u={};if(f!=null)for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&(u[y]=f[y]);return u.default=f,u}function G(f){return f&&f.__esModule?f:{default:f}}function Ae(f,u){if(!(f instanceof u))throw new TypeError("Cannot call a class as a function")}function De(f,u){if(!f)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u&&(typeof u=="object"||typeof u=="function")?u:f}function Pe(f,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof u);f.prototype=Object.create(u&&u.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),u&&(Object.setPrototypeOf?Object.setPrototypeOf(f,u):f.__proto__=u)}var re={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},xe=function(u){return u.code==="Tab"||u.keyCode===9},Le=function(u){return u.code==="Escape"||u.keyCode===27},J=0,ae=function(f){Pe(u,f);function u(y){Ae(this,u);var t=De(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,y));return t.setOverlayRef=function(s){t.overlay=s,t.props.overlayRef&&t.props.overlayRef(s)},t.setContentRef=function(s){t.content=s,t.props.contentRef&&t.props.contentRef(s)},t.afterClose=function(){var s=t.props,C=s.appElement,w=s.ariaHideApp,b=s.htmlOpenClassName,P=s.bodyOpenClassName,x=s.parentSelector,Q=x&&x().ownerDocument||document;P&&A.remove(Q.body,P),b&&A.remove(Q.getElementsByTagName("html")[0],b),w&&J>0&&(J-=1,J===0&&m.show(C)),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(v.returnFocus(t.props.preventScroll),v.teardownScopedFocus()):v.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),pe.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(v.setupScopedFocus(t.node),v.markForFocusLater()),t.setState({isOpen:!0},function(){t.openAnimationFrame=requestAnimationFrame(function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})})}))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var s=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:s},function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())})},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(s){xe(s)&&(0,c.default)(t.content,s),t.props.shouldCloseOnEsc&&Le(s)&&(s.stopPropagation(),t.requestClose(s))},t.handleOverlayOnClick=function(s){t.shouldClose===null&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(s):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(s){!t.props.shouldCloseOnOverlayClick&&s.target==t.overlay&&s.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(s){return t.ownerHandlesClose()&&t.props.onRequestClose(s)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(s,C){var w=(typeof C>"u"?"undefined":a(C))==="object"?C:{base:re[s],afterOpen:re[s]+"--after-open",beforeClose:re[s]+"--before-close"},b=w.base;return t.state.afterOpen&&(b=b+" "+w.afterOpen),t.state.beforeClose&&(b=b+" "+w.beforeClose),typeof C=="string"&&C?b+" "+C:b},t.attributesFromObject=function(s,C){return Object.keys(C).reduce(function(w,b){return w[s+"-"+b]=C[b],w},{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return l(u,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(t,s){this.props.isOpen&&!t.isOpen?this.open():!this.props.isOpen&&t.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!s.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var t=this.props,s=t.appElement,C=t.ariaHideApp,w=t.htmlOpenClassName,b=t.bodyOpenClassName,P=t.parentSelector,x=P&&P().ownerDocument||document;b&&A.add(x.body,b),w&&A.add(x.getElementsByTagName("html")[0],w),C&&(J+=1,m.hide(s)),pe.default.register(this)}},{key:"render",value:function(){var t=this.props,s=t.id,C=t.className,w=t.overlayClassName,b=t.defaultStyles,P=t.children,x=C?{}:b.content,Q=w?{}:b.overlay;if(this.shouldBeClosed())return null;var Fe={ref:this.setOverlayRef,className:this.buildClassName("overlay",w),style:o({},Q,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},He=o({id:s,ref:this.setContentRef,style:o({},x,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",o({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),ke=this.props.contentElement(He,P);return this.props.overlayElement(Fe,ke)}}]),u}(d.Component);ae.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},ae.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(k.default),r.default.instanceOf(W.SafeHTMLCollection),r.default.instanceOf(W.SafeNodeList),r.default.arrayOf(r.default.instanceOf(k.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},e.default=ae,n.exports=e.default})(se,se.exports);var Dt=se.exports;const Pt=qe($e);Object.defineProperty(H,"__esModule",{value:!0});H.bodyOpenClassName=H.portalClassName=void 0;var he=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},xt=function(){function n(e,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(e,o,a){return o&&n(e.prototype,o),a&&n(e,a),e}}(),Ne=_e,ee=z(Ne),Lt=Ue,te=z(Lt),Ft=Ee,i=z(Ft),Ht=Dt,ye=z(Ht),kt=R,qt=It(kt),D=T,be=z(D),Ut=Pt;function It(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e.default=n,e}function z(n){return n&&n.__esModule?n:{default:n}}function $t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Oe(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n}function Wt(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}var Bt=H.portalClassName="ReactModalPortal",Kt=H.bodyOpenClassName="ReactModal__Body--open",L=D.canUseDOM&&te.default.createPortal!==void 0,Ce=function(e){return document.createElement(e)},ge=function(){return L?te.default.createPortal:te.default.unstable_renderSubtreeIntoContainer};function X(n){return n()}var V=function(n){Wt(e,n);function e(){var o,a,l,d;$t(this,e);for(var _=arguments.length,r=Array(_),O=0;O<_;O++)r[O]=arguments[O];return d=(a=(l=Oe(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this].concat(r))),l),l.removePortal=function(){!L&&te.default.unmountComponentAtNode(l.node);var v=X(l.props.parentSelector);v&&v.contains(l.node)?v.removeChild(l.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},l.portalRef=function(v){l.portal=v},l.renderPortal=function(v){var h=ge(),c=h(l,ee.default.createElement(ye.default,he({defaultStyles:e.defaultStyles},v)),l.node);l.portalRef(c)},a),Oe(l,d)}return xt(e,[{key:"componentDidMount",value:function(){if(D.canUseDOM){L||(this.node=Ce("div")),this.node.className=this.props.portalClassName;var a=X(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var l=X(a.parentSelector),d=X(this.props.parentSelector);return{prevParent:l,nextParent:d}}},{key:"componentDidUpdate",value:function(a,l,d){if(D.canUseDOM){var _=this.props,r=_.isOpen,O=_.portalClassName;a.portalClassName!==O&&(this.node.className=O);var v=d.prevParent,h=d.nextParent;h!==v&&(v.removeChild(this.node),h.appendChild(this.node)),!(!a.isOpen&&!r)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!D.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,l=Date.now(),d=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||l+this.props.closeTimeoutMS);d?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,d-l)):this.removePortal()}}},{key:"render",value:function(){if(!D.canUseDOM||!L)return null;!this.node&&L&&(this.node=Ce("div"));var a=ge();return a(ee.default.createElement(ye.default,he({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){qt.setElement(a)}}]),e}(Ne.Component);V.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(be.default),i.default.instanceOf(D.SafeHTMLCollection),i.default.instanceOf(D.SafeNodeList),i.default.arrayOf(i.default.instanceOf(be.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func};V.defaultProps={isOpen:!1,portalClassName:Bt,bodyOpenClassName:Kt,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,o){return ee.default.createElement("div",e,o)},contentElement:function(e,o){return ee.default.createElement("div",e,o)}};V.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Ut.polyfill)(V);H.default=V;(function(n,e){Object.defineProperty(e,"__esModule",{value:!0});var o=H,a=l(o);function l(d){return d&&d.__esModule?d:{default:d}}e.default=a.default,n.exports=e.default})(le,le.exports);var jt=le.exports;const Gt=Ie(jt);export{Gt as M};
