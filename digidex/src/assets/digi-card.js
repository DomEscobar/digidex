/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,e,i,s;const r=globalThis.trustedTypes,n=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,l="?"+o,a=`<${l}>`,c=document,d=(t="")=>c.createComment(t),h=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,u=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,v=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,y=/"/g,b=/^(?:script|style|textarea)$/i,x=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),w=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),A=new WeakMap,$=c.createTreeWalker(c,129,null,!1);class C{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let c=0,h=0;const p=t.length-1,x=this.parts,[w,S]=((t,e)=>{const i=t.length-1,s=[];let r,l=2===e?"<svg>":"",c=u;for(let e=0;e<i;e++){const i=t[e];let n,d,h=-1,p=0;for(;p<i.length&&(c.lastIndex=p,d=c.exec(i),null!==d);)p=c.lastIndex,c===u?"!--"===d[1]?c=g:void 0!==d[1]?c=v:void 0!==d[2]?(b.test(d[2])&&(r=RegExp("</"+d[2],"g")),c=m):void 0!==d[3]&&(c=m):c===m?">"===d[0]?(c=null!=r?r:u,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,n=d[1],c=void 0===d[3]?m:'"'===d[3]?y:f):c===y||c===f?c=m:c===g||c===v?c=u:(c=m,r=void 0);const x=c===m&&t[e+1].startsWith("/>")?" ":"";l+=c===u?i+a:h>=0?(s.push(n),i.slice(0,h)+"$lit$"+i.slice(h)+o+x):i+o+(-2===h?(s.push(void 0),e):x)}const d=l+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==n?n.createHTML(d):d,s]})(t,e);if(this.el=C.createElement(w,i),$.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=$.nextNode())&&x.length<p;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const i=S[h++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(i);x.push({type:1,index:c,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?R:"@"===e[1]?O:E})}else x.push({type:6,index:c})}for(const e of t)s.removeAttribute(e)}if(b.test(s.tagName)){const t=s.textContent.split(o),e=t.length-1;if(e>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],d()),$.nextNode(),x.push({type:2,index:++c});s.append(t[e],d())}}}else if(8===s.nodeType)if(s.data===l)x.push({type:2,index:c});else{let t=-1;for(;-1!==(t=s.data.indexOf(o,t+1));)x.push({type:7,index:c}),t+=o.length-1}c++}}static createElement(t,e){const i=c.createElement("template");return i.innerHTML=t,i}}function P(t,e,i=t,s){var r,n,o,l;if(e===w)return e;let a=void 0!==s?null===(r=i.Σi)||void 0===r?void 0:r[s]:i.Σo;const c=h(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a.O)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a.T(t,i,s)),void 0!==s?(null!==(o=(l=i).Σi)&&void 0!==o?o:l.Σi=[])[s]=a:i.Σo=a),void 0!==a&&(e=P(t,a.S(t,e.values),a,s)),e}class k{constructor(t,e){this.l=[],this.N=void 0,this.D=t,this.M=e}u(t){var e;const{el:{content:i},parts:s}=this.D,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:c).importNode(i,!0);$.currentNode=r;let n=$.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new T(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new H(n,this,t)),this.l.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=$.nextNode(),o++)}return r}v(t){let e=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(t,i,e),e+=i.strings.length-2):i.I(t[e])),e++}}class T{constructor(t,e,i,s){this.type=2,this.N=void 0,this.A=t,this.B=e,this.M=i,this.options=s}setConnected(t){var e;null===(e=this.P)||void 0===e||e.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,e=this){t=P(this,t,e),h(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==w&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var e;return p(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,e=this.B){return this.A.parentNode.insertBefore(t,e)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const e=this.A.nextSibling;null!==e&&3===e.nodeType&&(null===this.B?null===e.nextSibling:e===this.B.previousSibling)?e.data=t:this.$(c.createTextNode(t)),this.H=t}_(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=C.createElement(s.h,this.options)),s);if((null===(e=this.H)||void 0===e?void 0:e.D)===r)this.H.v(i);else{const t=new k(r,this),e=t.u(this.options);t.v(i),this.$(e),this.H=t}}C(t){let e=A.get(t.strings);return void 0===e&&A.set(t.strings,e=new C(t)),e}g(t){p(this.H)||(this.H=[],this.R());const e=this.H;let i,s=0;for(const r of t)s===e.length?e.push(i=new T(this.k(d()),this.k(d()),this,this.options)):i=e[s],i.I(r),s++;s<e.length&&(this.R(i&&i.B.nextSibling,s),e.length=s)}R(t=this.A.nextSibling,e){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,e);t&&t!==this.B;){const e=t.nextSibling;t.remove(),t=e}}}class E{constructor(t,e,i,s,r){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=e,this.M=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(S),this.strings=i):this.H=S}get tagName(){return this.element.tagName}I(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=P(this,t,e,0),n=!h(t)||t!==this.H&&t!==w,n&&(this.H=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=P(this,s[i+o],e,o),l===w&&(l=this.H[o]),n||(n=!h(l)||l!==this.H[o]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+r[o+1]),this.H[o]=l}n&&!s&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends E{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class R extends E{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class O extends E{constructor(){super(...arguments),this.type=5}I(t,e=this){var i;if((t=null!==(i=P(this,t,e,0))&&void 0!==i?i:S)===w)return;const s=this.H,r=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==S&&(s===S||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var e,i;"function"==typeof this.H?this.H.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this.H.handleEvent(t)}}class H{constructor(t,e,i){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=e,this.options=i}I(t){P(this,t)}}null===(e=(t=globalThis).litHtmlPlatformSupport)||void 0===e||e.call(t,C,T),(null!==(i=(s=globalThis).litHtmlVersions)&&void 0!==i?i:s.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol();class V{constructor(t,e){if(e!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return N&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const I=new Map,B=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof V)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);let s=I.get(i);return void 0===s&&I.set(i,s=new V(i,z)),s},D=N?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new V(t+"",z))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var M,j,L,_;const q={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},W=(t,e)=>e!==t&&(e==e||t==t),G={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:W};class Z extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var e;null!==(e=this.v)&&void 0!==e||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this.Πp(i,e);void 0!==s&&(this.Πm.set(s,i),t.push(s))})),t}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||G}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(D(t))}else void 0!==t&&e.push(D(t));return e}static"Πp"(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this.ΠU)&&void 0!==e?e:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this.ΠU)||void 0===e||e.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this.Πi.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{N?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style");i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,e,i){this.K(t,i)}"Πj"(t,e,i=G){var s,r;const n=this.constructor.Πp(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:q.toAttribute)(e,i.type);this.Πh=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this.Πh=null}}K(t,e){var i,s,r;const n=this.constructor,o=n.Πm.get(t);if(void 0!==o&&this.Πh!==o){const t=n.getPropertyOptions(o),l=t.converter,a=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:q.fromAttribute;this.Πh=o,this[o]=a(e,t.type),this.Πh=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||W)(this[t],e)?(this.L.has(t)||this.L.set(t,e),!0===i.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,e)=>this[e]=t)),this.Πi=void 0);let e=!1;const i=this.L;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this.Π$()}catch(t){throw e=!1,this.Π$(),t}e&&this.E(i)}willUpdate(t){}E(t){var e;null===(e=this.ΠU)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,e)=>this.Πj(e,this[e],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Q,Y,J,X,F;Z.finalized=!0,Z.shadowRootOptions={mode:"open"},null===(j=(M=globalThis).reactiveElementPlatformSupport)||void 0===j||j.call(M,{ReactiveElement:Z}),(null!==(L=(_=globalThis).reactiveElementVersions)&&void 0!==L?L:_.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(K=(F=globalThis).litElementVersions)&&void 0!==K?K:F.litElementVersions=[]).push("3.0.0-rc.1");class tt extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();super.update(t),this.Φt=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new T(e.insertBefore(d(),t),t,void 0,i)}return o.I(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return w}}tt.finalized=!0,tt._$litElement$=!0,null===(Y=(Q=globalThis).litElementHydrateSupport)||void 0===Y||Y.call(Q,{LitElement:tt}),null===(X=(J=globalThis).litElementPlatformSupport)||void 0===X||X.call(J,{LitElement:tt});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const rt=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class nt extends class{constructor(t){}T(t,e,i){this.Σdt=t,this.M=e,this.Σct=i}S(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),this.vt=S,t.type!==rt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S)return this.Vt=void 0,this.vt=t;if(t===w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.vt)return this.Vt;this.vt=t;const e=[t];return e.raw=e,this.Vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}}nt.directiveName="unsafeHTML",nt.resultType=1;const ot=(t=>(...e)=>({_$litDirective$:t,values:e}))(nt);var lt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let at=class extends tt{constructor(){super(...arguments),this.text="",this.bgTitle=""}render(){return x`<div class="neon"><span class="text">${this.text}</span> <span class="gradient" style="background:${this.bgTitle}"></span> <span class="spotlight"></span></div>`}};at.styles=B`:host{display:flex;align-items:center;justify-content:center}.neon{position:relative;overflow:hidden;filter:brightness(200%);width:100%;padding:5px;background:#101010;box-shadow:rgb(97 97 97) -3px -1px 14px 7px}.text{background-color:#000;color:#fff;font-family:sans-serif;text-transform:uppercase;position:relative;user-select:none;width:100%;font-size:13px;display:block}.text::before{content:attr(data-text);position:absolute;color:#000;filter:blur(.02em);mix-blend-mode:difference}.gradient{position:absolute;inset:0;mix-blend-mode:multiply}.spotlight{position:absolute;inset:-80% 58px 7px -75%;background:radial-gradient(circle,rgb(255 255 255),#4e4e4e 25%) center center/25% 25%,radial-gradient(circle,#fff,#000 25%) center center/12.5% 12.5%;animation:5s linear 0s infinite normal none running light;mix-blend-mode:soft-light}@keyframes light{to{transform:translate(50%,50%)}}`,lt([st()],at.prototype,"text",void 0),lt([st({type:String})],at.prototype,"bgTitle",void 0),at=lt([et("text-shiny")],at);var ct=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let dt=class extends tt{constructor(){super(...arguments),this.amount=0,this.name="",this.image=""}render(){return x`<div class="card-body"><div class="name">${this.name}</div><div class="container"><img-lazy rounded="true" src="${this.image}"></img-lazy><div class="info-container">${ot(ht.cards)} <span>${this.amount}</span></div></div></div>`}};dt.styles=B`:host{border-radius:1rem;box-shadow:rgb(173 173 173 / 26%) 0 0 20px 0;overflow:hidden;position:relative;display:block}.card-body{padding:.5rem;text-align:center}.container{display:flex}.name{margin-bottom:.5rem}img-lazy{flex:1;margin-right:1rem}.info-container{flex:1;display:flex;align-items:center}.info-container svg{margin-right:1rem;width:26px}`,ct([st({type:Number})],dt.prototype,"amount",void 0),ct([st({type:String})],dt.prototype,"name",void 0),ct([st({type:String})],dt.prototype,"image",void 0),dt=ct([et("collector-card")],dt);const ht={cards:'<?xml version="1.0" standalone="no"?>\n    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN"\n    "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg"\n    width="50.000000pt" height="46.000000pt" viewBox="0 0 50.000000 46.000000"\n    preserveAspectRatio="xMidYMid meet">\n    <g transform="translate(0.000000,46.000000) scale(0.100000,-0.100000)"\n    fill="#000000" stroke="none">\n    <path d="M305 453 c-61 -5 -149 -31 -197 -58 -58 -33 -108 -80 -108 -103 0 -10 40 -77 88 -148 79 -114 92 -129 120 -132 20 -2 42 4 60 18 23 17 51 24 117 29 119 9 117 5 113 204 -3 153 -4 160 -27 178 -23 19 -58 21 -166 12z m166 -178 c3 -82 1 -158 -3 -167 -7 -15 -23 -18 -108 -18 -54 0 -101 4 -104 8 -3 5 -8 75 -12 155 -5 114 -4 150 6 162 11 13 32 15 114 13 l101 -3 6 -150z m-252 23 l-1 -113 -17 95 c-11 58 -14 102 -9 113 20 40 28 12 27 -95z m-59 85 c0 -5 9 -59 20 -122 11 -63 18 -116 16 -118 -7 -7 -67 219 -62 233 6 14 26 20 26 7z m-50 -37 c0 -7 14 -58 30 -111 17 -54 29 -100 27 -102 -2 -1 -25 42 -52 97 -39 82 -45 103 -35 115 16 19 30 19 30 1z m27 -222 c-7 -7 -107 150 -107 167 0 41 19 22 63 -67 26 -53 46 -98 44 -100z"/>\n    </g>\n    </svg>'};var pt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let ut=class extends tt{constructor(){super(...arguments),this.emptyImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAIAAADMaMX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAzSURBVFhH7c1BEQAwEAOh+lcZKTXB3GsxwNutPqvP6rP6rD6rz+qz+qw+q8/qs/qs22/7cqJrk6NNXs8AAAAASUVORK5CYII=",this.loadedImg=this.emptyImg}connectedCallback(){super.connectedCallback(),this.checkImage(this.src||this.emptyImg).then((t=>{this.loadedImg=t,this.requestUpdate()}))}async checkImage(t){const e=new Image;return new Promise((i=>{e.onload=()=>i(t),e.onerror=()=>i(this.emptyImg),e.src=t}))}render(){return x`<img class="${this.rounded?"round":""}" src="${this.loadedImg}">`}};ut.styles=B`:host{display:block}img{width:100%;height:auto}.round{border-radius:50%}`,pt([st({type:Boolean})],ut.prototype,"rounded",void 0),pt([st({type:String})],ut.prototype,"src",void 0),ut=pt([et("img-lazy")],ut);var gt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let vt=class extends tt{render(){return x`${this.bgTitle?x`<div class="card-name"><text-shiny bgTitle="${this.bgTitle}" text="${this.name}"></text-shiny></div>`:void 0} ${this.bgTitle?void 0:x`<div class="card-name"><div class="normal-title">${this.name}</div></div>`}<div class="card-body"><img src="${this.image}" class="card-bg"><div class="image-container"><img-lazy src="${this.image}" class="card-img-top"></img-lazy></div><div class="info-container">${this.power?x`<div class="text-power">${this.power}</div>`:void 0} ${this.price?x`<div class="text-row">${ot(mt.dollar)} <span class="info-text">${this.price}</span></div>`:void 0}</div></div>`}};vt.styles=B`:host{border-radius:1rem;box-shadow:rgb(173 173 173 / 26%) 0 0 20px 0;overflow:hidden;position:relative;display:block}.card-bg{position:absolute;opacity:.1;left:0;height:100%;top:0;border-radius:1rem;transform:rotate(15deg);z-index:-1}.card-body{padding:.5rem;text-align:center}.image-container{padding:.5rem;text-align:center;display:inline-block}.info-container{padding:.5rem;flex-direction:column;display:inline-block;margin:auto;text-align:center;vertical-align:text-bottom}.card-img-top{max-width:90px;width:auto;margin:auto;text-align:center}.card-name{text-align:center;color:#191919;text-shadow:rgb(171 171 171) 2px 2px 8px;box-shadow:rgb(0 0 0 / 11%) 2px 3px 20px 0;background:rgba(255,255,255,.6)}.text-row{background:rgba(255,255,255,.6);border-radius:10px;border-bottom:1px solid #e2e2e2;display:flex;align-items:center;flex:1}.text-row svg{padding:.6rem;width:16px;border-radius:.5rem;height:16px;vertical-align:top;opacity:.5}.text-power{text-align:center;padding:1rem;margin-top:-1rem;min-width:85px;line-height:16px;position:relative;color:#fff;font-size:27px;font-weight:700;text-shadow:rgb(255 255 255) 0 1px 0,rgb(201 201 201) 0 2px 0,rgb(187 187 187) 0 3px 0,rgb(185 185 185) 0 4px 0,rgb(183 183 183) 0 5px 0,rgb(0 0 0 / 10%) 0 6px 1px,rgb(0 0 0 / 10%) 0 0 5px,rgb(0 0 0 / 30%) 0 1px 3px,rgb(0 0 0 / 20%) 0 3px 5px,rgb(0 0 0 / 25%) 0 5px 10px,rgb(0 0 0 / 0%) 0 10px 10px,rgb(0 0 0 / 0%) 0 20px 20px}.text-power::after{content:"POWER";position:absolute;z-index:-1;left:0;color:#000;opacity:.1;top:5px;width:100%}.normal-title{padding:2.5px;text-shadow:0 0 0 grey}`,gt([st({type:String})],vt.prototype,"name",void 0),gt([st({type:String})],vt.prototype,"image",void 0),gt([st({type:String})],vt.prototype,"price",void 0),gt([st({type:String})],vt.prototype,"releaseDate",void 0),gt([st({type:String})],vt.prototype,"condition",void 0),gt([st({type:String})],vt.prototype,"power",void 0),gt([st({type:String})],vt.prototype,"bgTitle",void 0),vt=gt([et("digi-card")],vt);const mt={calendar:'\n  <?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"/></svg>\n  ',diamond:'\n  <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>\n  ',dollar:'\n  <?xml version="1.0" encoding="iso-8859-1"?>\x3c!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\t width="511.613px" height="511.613px" viewBox="0 0 511.613 511.613" style="enable-background:new 0 0 511.613 511.613;"\t xml:space="preserve"><g>\t<path d="M385.261,311.475c-2.471-8.367-5.469-15.649-8.99-21.833c-3.519-6.19-8.559-12.228-15.13-18.134\t\tc-6.563-5.903-12.467-10.657-17.702-14.271c-5.232-3.617-12.419-7.661-21.557-12.137c-9.13-4.475-16.364-7.805-21.689-9.995\t\tc-5.332-2.187-13.045-5.185-23.134-8.992c-8.945-3.424-15.605-6.042-19.987-7.849c-4.377-1.809-10.133-4.377-17.271-7.71\t\tc-7.135-3.328-12.465-6.28-15.987-8.848c-3.521-2.568-7.279-5.708-11.277-9.419c-3.998-3.711-6.805-7.661-8.424-11.848\t\tc-1.615-4.188-2.425-8.757-2.425-13.706c0-12.94,5.708-23.507,17.128-31.689c11.421-8.182,26.174-12.275,44.257-12.275\t\tc7.99,0,16.136,1.093,24.41,3.284s15.365,4.659,21.266,7.421c5.906,2.762,11.471,5.808,16.707,9.137\t\tc5.235,3.332,8.945,5.852,11.136,7.565c2.189,1.714,3.576,2.855,4.141,3.427c2.478,1.903,5.041,2.568,7.706,1.999\t\tc2.854-0.19,5.045-1.715,6.571-4.567l23.13-41.684c2.283-3.805,1.811-7.422-1.427-10.85c-1.144-1.142-2.566-2.473-4.291-3.997\t\tc-1.708-1.524-5.421-4.283-11.136-8.282c-5.709-3.996-11.752-7.565-18.124-10.706c-6.379-3.138-14.661-6.328-24.845-9.562\t\tc-10.178-3.239-20.697-5.426-31.549-6.567V9.136c0-2.663-0.855-4.853-2.563-6.567C282.493,0.859,280.303,0,277.634,0h-38.546\t\tc-2.474,0-4.615,0.903-6.423,2.712s-2.712,3.949-2.712,6.424v51.391c-29.884,5.708-54.152,18.461-72.805,38.256\t\tc-18.651,19.796-27.98,42.823-27.98,69.092c0,7.803,0.812,15.226,2.43,22.265c1.616,7.045,3.616,13.374,5.996,18.988\t\tc2.378,5.618,5.758,11.136,10.135,16.562c4.377,5.424,8.518,10.088,12.419,13.988c3.903,3.899,8.995,7.945,15.274,12.131\t\tc6.283,4.19,11.66,7.571,16.134,10.139c4.475,2.56,10.422,5.52,17.843,8.843c7.423,3.333,13.278,5.852,17.561,7.569\t\tc4.283,1.711,10.135,4.093,17.561,7.132c10.277,3.997,17.892,7.091,22.84,9.281c4.952,2.19,11.231,5.235,18.849,9.137\t\tc7.611,3.898,13.176,7.468,16.7,10.705c3.521,3.237,6.708,7.234,9.565,11.991s4.288,9.801,4.288,15.133\t\tc0,15.037-5.853,26.645-17.562,34.823c-11.704,8.187-25.27,12.279-40.685,12.279c-7.036,0-14.084-0.757-21.124-2.279\t\tc-24.744-4.955-47.869-16.851-69.377-35.693l-0.571-0.571c-1.714-2.088-3.999-2.946-6.851-2.563\t\tc-3.046,0.38-5.236,1.523-6.567,3.43l-29.408,38.54c-2.856,3.806-2.663,7.707,0.572,11.704c0.953,1.143,2.618,2.86,4.996,5.14\t\tc2.384,2.289,6.81,5.852,13.278,10.715c6.47,4.856,13.513,9.418,21.128,13.706c7.614,4.281,17.272,8.514,28.98,12.703\t\tc11.708,4.182,23.839,7.131,36.402,8.843v49.963c0,2.478,0.905,4.617,2.712,6.427c1.809,1.811,3.949,2.711,6.423,2.711h38.546\t\tc2.669,0,4.859-0.855,6.57-2.566s2.563-3.901,2.563-6.571v-49.963c30.269-4.948,54.87-17.939,73.806-38.972\t\tc18.938-21.033,28.41-46.11,28.41-75.229C388.994,328.801,387.759,319.855,385.261,311.475z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n  '};
