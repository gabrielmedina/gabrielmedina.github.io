_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),l=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,l=p.length;s<l;s++){var c=p[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?a=!1:n.add(c);else{var u=o.props[c],f=r[c]||new Set;f.has(u)?a=!1:(f.add(u),r[c]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),s=n("eOcs"),l=o.a.createElement;function c(){var e=Object(r.useState)(),t=e[0],n=e[1];Object(r.useEffect)((function(){var e=localStorage.getItem("tokens");null!==e&&(e===s.a?n(!0):n(!1))}));return l("nav",{className:"nav"},l("ul",{className:"nav__list"},l("li",{className:"nav__list-item"},l("a",{className:"nav__list-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/gmedinasantos/"},"LinkedIn")),l("li",{className:"nav__list-item"},l("a",{className:"nav__list-link",target:"_blank",rel:"noopener noreferrer",href:"https://github.com/gabrielmedina"},"GitHub")),l("li",{className:"nav__list-item"},l("button",{className:"nav__list-btn-tokens ".concat(t?"nav__list-btn-tokens_dark":"nav__list-btn-tokens_light"),title:t?"Trocar para modo claro":"Trocar para modo escuro",onClick:function(){n(!t),function(){var e=document.querySelector("body");e.classList.remove(s.a,s.b),localStorage.removeItem("tokens"),t?(e.classList.add(s.b),localStorage.setItem("tokens",s.b)):(e.classList.add(s.a),localStorage.setItem("tokens",s.a))}()}},l("svg",{focusable:"false","data-prefix":"fas","data-icon":"adjust",className:"nav__list-tokens-icon svg-inline--fa fa-adjust fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{fill:"currentColor",d:"M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"}))))))}var u=o.a.createElement;function f(){return u("section",{className:"profile"},u("div",{className:"profile__wrapper"},u("header",{className:"profile__header"},u("figure",{className:"profile__figure"},u("img",{className:"profile__img",alt:"Foto de perfil",src:"https://avatars3.githubusercontent.com/u/2979365?v=3&s=466"})),u("h1",{className:"profile__title"},"Gabriel Medina"),u("h2",{className:"profile__subtitle"},"Front-end Developer / UX Designer")),u("p",{className:"profile__text"},"Enquanto ",u("strong",null,"designer de experi\xeancia do usu\xe1rio (UX)"),", atuo colhendo, refinando, prototipando e testando solu\xe7\xf5es."),u("p",{className:"profile__text"},"J\xe1 como ",u("strong",null,"front-end developer"),", atuo provendo HTML sem\xe2ntico e acess\xedvel, CSS escal\xe1vel e JavaScript seguindo boas pr\xe1ticas de desenvolvimento."),u("footer",{className:"profile__footer"},u("ul",{className:"profile__skills",title:"Compet\xeancias"},u("li",{className:"profile__skills-item"},"UX/UI Design"),u("li",{className:"profile__skills-item"},"Figma"),u("li",{className:"profile__skills-item"},"HTML"),u("li",{className:"profile__skills-item"},"Acessibilidade"),u("li",{className:"profile__skills-item"},"CSS"),u("li",{className:"profile__skills-item"},"Sass"),u("li",{className:"profile__skills-item"},"Responsive design"),u("li",{className:"profile__skills-item"},"Design systems"),u("li",{className:"profile__skills-item"},"JavaScript"),u("li",{className:"profile__skills-item"},"React"),u("li",{className:"profile__skills-item"},"Next.js")))))}var p=o.a.createElement;function d(){return p(o.a.Fragment,null,p(i.a,null,p("title",null,"Gabriel Medina: Front-end Developer / UX Designer"),p("meta",{name:"description",content:"Atuo colhendo, refinando, prototipando e testando solu\xe7\xf5es e constru\xedndo toda a parte front-end das aplica\xe7\xf5es."}),p("meta",{name:"keywords",content:"Medina, Developer, Designer, UX, Front-end"}),p("meta",{property:"og:title",content:"Gabriel Medina: Front-end Developer / UX Designer"}),p("meta",{property:"og:description",content:"Atuo colhendo, refinando, prototipando e testando solu\xe7\xf5es e constru\xedndo toda a parte front-end das aplica\xe7\xf5es."}),p("meta",{property:"og:image",content:"/og.png"}),p("link",{rel:"icon",href:"/favicon.svg"}),p("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap",rel:"stylesheet"})),p(c,null),p(f,null))}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=n("PJYZ"),s=n("7W2i"),l=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1,d=function(e){s(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,p&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},eOcs:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="tokens-dark",o="tokens-light"},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);