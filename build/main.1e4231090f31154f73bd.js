webpackJsonp([6,46],{101:function(e,t,n){var r=n(111);"string"==typeof r&&(r=[[e.i,r,""]]),n(103)(r,{}),r.locals&&(e.exports=r.locals)},102:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},103:function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],l=o[3],c={css:a,media:u,sourceMap:l};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function o(e,t){var n=h(),r=v[v.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var l=m++;n=b||(b=a(t)),r=c.bind(null,n,l,!1),o=c.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=s.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function s(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},y=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,v=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=y()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],a=0;a<o.length;a++){var u=o[a],l=p[u.id];l.refs--,i.push(l)}if(e){var c=r(e);n(c,t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},104:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(2),s=r(f),p=n(228),d=r(p),y=n(112),h=r(y),b=n(4),m=r(b),v=n(216),g=n(217),T=r(g),E="data-react-helmet",w=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r[t])return r[t]}return null},A=function(e){var t=_(e,"title"),n=_(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var r=_(e,"defaultTitle");return t||r||""},S=function(e){return _(e,"onChangeClientState")||function(){}},O=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return c({},e,t)},{})},P=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[v.TAG_NAMES.BASE]}).map(function(e){return e[v.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},x=function(e,t,n){var r={},o=n.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();t.indexOf(l)===-1||n===v.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===v.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==v.TAG_PROPERTIES.INNER_HTML&&u!==v.TAG_PROPERTIES.CSS_TEXT&&u!==v.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=(0,m.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse();return o},k=function(e,t){document.title=e||document.title,M(v.TAG_NAMES.TITLE,t)},M=function(e,t){for(var n=document.getElementsByTagName(e)[0],r=n.getAttribute(E),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var f=i.indexOf(l);f!==-1&&i.splice(f,1)}for(var s=i.length-1;s>=0;s--)n.removeAttribute(i[s]);o.length===i.length?n.removeAttribute(E):n.setAttribute(E,o.join(","))},j=function(e,t){var n=document.head||document.querySelector("head"),r=n.querySelectorAll(e+"["+E+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if("innerHTML"===r)n.innerHTML=t.innerHTML;else if("cssText"===r)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(E,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},R=function(e){for(var t=Object.keys(e),n="",r=0;r<t.length;r++){var o=t[r],i="undefined"!=typeof e[o]?o+'="'+e[o]+'"':""+o;n+=i+" "}return n.trim()},C=function(e,t,n){for(var r="",o=Object.keys(n),i=0;i<o.length;i++){var a=o[i],u="undefined"!=typeof n[a]?a+'="'+n[a]+'"':""+a;r+=u+" "}var l=r?"<"+e+" "+E+'="true" '+r.trim()+">"+w(t)+"</"+e+">":"<"+e+" "+E+'="true">'+w(t)+"</"+e+">";return l},N=function(e,t){var n=t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){if("undefined"==typeof t[e])return e;var n=w(t[e]);return e+'="'+n+'"'}).join(" ").trim(),r=t.innerHTML||t.cssText||"",o=[v.TAG_NAMES.NOSCRIPT,v.TAG_NAMES.SCRIPT,v.TAG_NAMES.STYLE].indexOf(e)===-1;return"<"+e+" "+E+'="true" '+n+(o?"/>":">"+r+"</"+e+">")}).join("");return n},L=function(e,t,n){var r=u({key:t},E,!0);Object.keys(n).forEach(function(e){var t=v.REACT_TAG_MAP[e]||e;r[t]=n[e]});var o=[s.default.createElement(v.TAG_NAMES.TITLE,r,t)];return o},G=function(e,t){var n=t.map(function(t,n){var r=u({key:n},E,!0);return Object.keys(t).forEach(function(e){var n=v.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var o=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:o}}else r[n]=t[e]}),s.default.createElement(e,r)});return n},I=function(e,t){switch(e){case v.TAG_NAMES.TITLE:return{toComponent:function(){return L(e,t.title,t.titleAttributes)},toString:function(){return C(e,t.title,t.titleAttributes)}};case v.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return R(t)}};default:return{toComponent:function(){return G(e,t)},toString:function(){return N(e,t)}}}},U=function(e){var t=e.htmlAttributes,n=e.title,r=e.titleAttributes,o=e.baseTag,i=e.metaTags,a=e.linkTags,u=e.scriptTags,l=e.noscriptTags,c=e.styleTags;return{htmlAttributes:I(v.TAG_NAMES.HTML,t),title:I(v.TAG_NAMES.TITLE,{title:n,titleAttributes:r}),base:I(v.TAG_NAMES.BASE,o),meta:I(v.TAG_NAMES.META,i),link:I(v.TAG_NAMES.LINK,a),script:I(v.TAG_NAMES.SCRIPT,u),noscript:I(v.TAG_NAMES.NOSCRIPT,l),style:I(v.TAG_NAMES.STYLE,c)}},z=function(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,t),l(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,h.default)(this.props,e)}},{key:"render",value:function(){return s.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component);return t.propTypes={htmlAttributes:s.default.PropTypes.object,title:s.default.PropTypes.string,defaultTitle:s.default.PropTypes.string,titleTemplate:s.default.PropTypes.string,titleAttributes:s.default.PropTypes.object,base:s.default.PropTypes.object,meta:s.default.PropTypes.arrayOf(s.default.PropTypes.object),link:s.default.PropTypes.arrayOf(s.default.PropTypes.object),script:s.default.PropTypes.arrayOf(s.default.PropTypes.object),noscript:s.default.PropTypes.arrayOf(s.default.PropTypes.object),style:s.default.PropTypes.arrayOf(s.default.PropTypes.object),onChangeClientState:s.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=U({htmlAttributes:{},title:"",titleAttributes:{},baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t},H=function(e){return{htmlAttributes:O(v.TAG_NAMES.HTML,e),title:A(e),titleAttributes:O("titleAttributes",e),baseTag:P([v.TAG_PROPERTIES.HREF],e),metaTags:x(v.TAG_NAMES.META,[v.TAG_PROPERTIES.NAME,v.TAG_PROPERTIES.CHARSET,v.TAG_PROPERTIES.HTTPEQUIV,v.TAG_PROPERTIES.PROPERTY,v.TAG_PROPERTIES.ITEM_PROP],e),linkTags:x(v.TAG_NAMES.LINK,[v.TAG_PROPERTIES.REL,v.TAG_PROPERTIES.HREF],e),scriptTags:x(v.TAG_NAMES.SCRIPT,[v.TAG_PROPERTIES.SRC,v.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:x(v.TAG_NAMES.NOSCRIPT,[v.TAG_PROPERTIES.INNER_HTML],e),styleTags:x(v.TAG_NAMES.STYLE,[v.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:S(e)}},D=function(e){var t=e.htmlAttributes,n=e.title,r=e.titleAttributes,o=e.baseTag,i=e.metaTags,a=e.linkTags,u=e.scriptTags,l=e.noscriptTags,c=e.styleTags,f=e.onChangeClientState;M("html",t),k(n,r);var s={baseTag:j(v.TAG_NAMES.BASE,o),metaTags:j(v.TAG_NAMES.META,i),linkTags:j(v.TAG_NAMES.LINK,a),scriptTags:j(v.TAG_NAMES.SCRIPT,u),noscriptTags:j(v.TAG_NAMES.NOSCRIPT,l),styleTags:j(v.TAG_NAMES.STYLE,c)},p={},d={};Object.keys(s).forEach(function(e){var t=s[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=s[e].oldTags)}),f(e,p,d)},B=(0,d.default)(H,D,U);t.default=z(B(T.default)),e.exports=t.default},105:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),u=n(2),l=r(u),c=n(61),f=r(c),s=n(59),p=r(s),d=function(e){var t=e.pattern,n=e.component,r=o(e,["pattern","component"]);return l.default.createElement(f.default,i({pattern:t},r,{render:function(e){return a(p.default,{modules:{component:n}},void 0,function(t){var n=t.component;return l.default.createElement(n,i({},e,r))})}}))};t.default=d,e.exports=t.default},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0}),t.Curtain=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),l=n(115),c=r(l),f=t.Curtain=function(e){var t=e.show,n=void 0===t||t,r=e.onClick,a=e.className,l=o(e,["show","onClick","className"]);return n?u.default.createElement("div",i({},l,{onClick:r,className:c.default.root+" "+(a?a:"")})):null};t.default=f},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Hamburger=void 0;var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(2),a=(r(i),n(116)),u=r(a),l=t.Hamburger=function(e){var t=e.open,n=e.onClick;return e.className,o("div",{onClick:n,className:u.default.root+" "+(t?u.default.open:"")},void 0,o("hr",{className:u.default.bar}),o("hr",{className:u.default.bar}))};t.default=l},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(2),a=(r(i),n(60)),u=r(a),l=n(117),c=r(l),f=function(e){var t=e.routes,n=e.open,r=e.onClick;return o("nav",{className:c.default.root+" "+(n?c.default.open:"")},void 0,o("ul",{className:c.default.ul,role:"menu"},void 0,t.map(function(e){return o("li",{className:c.default.li,role:"menuitem"},e.to,o(u.default,{to:e.to,onClick:r,className:c.default.link},void 0,e.text))})))};t.default=f,e.exports=t.default},109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(2),a=(r(i),n(104)),u=r(a),l=function(e){return o(u.default,{htmlAttributes:{lang:"en"},defaultTitle:"Evan Turner | Software Engineer",titleAttributes:{itemprop:"name",lang:"en"},title:"Software Engineer",titleTemplate:"Evan Turner | %s",meta:[{property:"og:description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{property:"og:title",content:"Evan Turner | Software Engineer"},{property:"og:site_name",content:"Evan Turner"},{property:"og:url",content:"https://evturn.com/#/"},{property:"og:image",content:n(38)},{property:"og:image:alt",content:"An elegant stencil in black and white of a guy with a beard and shades"},{property:"og:type",content:"website"},{property:"og:locale",content:"en_US"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:"Evan Turner | Software Engineer"},{name:"twitter:image",content:n(38)},{name:"twitter:image:src",content:n(38)},{name:"twitter:image:alt",content:"An elegant stencil in black and white of a guy with a beard and shades"},{name:"twitter:site",content:"@evturn"},{name:"twitter:url",content:"https://evturn.com/#/"},{name:"twitter:description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{name:"keywords",content:"evturn, evturn.com, evan turner, web apps, developer, software, javascript, mobile, technologies"},{name:"description",content:"Software Engineer based in New York City developing apps for web, mobile, and emerging technologies"},{name:"theme-color",content:"#00d2ff"}],link:[{rel:"canonical",href:"https://evturn.com/#/"},{rel:"apple-touch-icon",href:n(140)},{rel:"apple-touch-icon",sizes:"57x57",href:n(136)},{rel:"apple-touch-icon",sizes:"60x60",href:n(137)},{rel:"apple-touch-icon",sizes:"72x72",href:n(138)},{rel:"apple-touch-icon",sizes:"76x7",href:n(139)},{rel:"apple-touch-icon",sizes:"114x114",href:n(132)},{rel:"apple-touch-icon",sizes:"120x120",href:n(133)},{rel:"apple-touch-icon",sizes:"144x144",href:n(134)},{rel:"apple-touch-icon",sizes:"152x152",href:n(135)},{rel:"icon",sizes:"32x32",href:n(141)},{rel:"icon",sizes:"96x96",href:n(142)},{rel:"shortcut icon",type:"image/x-icon",href:n(143)}]})};t.default=l,e.exports=t.default},110:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),f=(r(c),n(108)),s=r(f),p=n(106),d=r(p),y=n(107),h=r(y),b=n(119),m=r(b),v=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={open:!1},r.toggleMenu=function(e){r.setState({open:!r.state.open})},a=n,i(r,a)}return a(t,e),l(t,[{key:"render",value:function(){var e=this.state.open,t=this.props.routes;return u("div",{className:m.default.root},void 0,u("header",{className:m.default.header},void 0,u("div",{className:m.default.wrap},void 0,u(h.default,{open:e,onClick:this.toggleMenu}),u(s.default,{open:e,routes:t,onClick:this.toggleMenu}))),u(d.default,{show:e,onClick:this.toggleMenu}))}}]),t}(c.Component);v.defaultProps={routes:[{to:"/",text:"Start"},{to:"/web",text:"Web"},{to:"/mobile",text:"Mobile"},{to:"/software",text:"Software"},{to:"/contact",text:"Contact"}]},t.default=v,e.exports=t.default},111:function(e,t,n){t=e.exports=n(102)(),t.push([e.i,"/*! sanitize.css v4.1.0 | CC0 License | github.com/jonathantneal/sanitize.css */article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;font-family:sans-serif;line-height:1.5;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{height:0;overflow:visible}nav ol,nav ul{list-style:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}progress{vertical-align:baseline}small,sub,sup{font-size:83.3333%}sub,sup{line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{outline-width:0}table{border-collapse:collapse;border-spacing:0}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit;font-size:1em;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-cancel-button,::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}[tabindex],a,area,button,input,label,select,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden][aria-hidden=false]{clip:rect(0,0,0,0);display:inherit;position:absolute}[hidden][aria-hidden=false]:focus{clip:auto}",""])},112:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length||"function"!=typeof e.copy||"function"!=typeof e.slice||e.length>0&&"number"!=typeof e[0])}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),p=u(t)}catch(e){return!1}if(s.length!=p.length)return!1;for(s.sort(),p.sort(),i=s.length-1;i>=0;i--)if(s[i]!=p[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(114),l=n(113),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},113:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},114:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},115:function(e,t){e.exports={root:"_3soI4Y83hlzRpyfwFbWQHY"}},116:function(e,t){e.exports={root:"_33l8Cu9g-QzuvNoQQl1tSt",bar:"_3jC0YlDJbpqLqPoJk7dqzn",open:"_2BbtjyU1lAQRmBPyU4hFZm"}},117:function(e,t){e.exports={root:"_3dje0LBIDrhhZQd-V6eszU",open:"_3xrJNTM63EoK9HGy1Tsws1",ul:"-pREEZfXVM09RL0BSjhXh",li:"_2R1w1KWmpHvjKULTDZ1-C",link:"_3mASRdSY61-SJn6r9x9xWe"}},118:function(e,t){e.exports={root:"_2zy9mwSOfa7qg0SnVJpRAZ"}},119:function(e,t){e.exports={root:"_3Cx6bSd0ilgH5aWN-8sQAw",header:"Mym9cTuy0YEaE0EOqPWl9",wrap:"_31Bgmibh4lUCUO_f1uYtfJ",hamburger:"_1QCpQy_jX6mZ-mxhjFALt6",line:"_1QP8YkAg3aces0_x29nwXW",line1:"_3xzZvaUUMMUaeNd_hhXARD _1QP8YkAg3aces0_x29nwXW",line3:"_27tPrQgIabKmuGObxGAYGJ _1QP8YkAg3aces0_x29nwXW",open:"oKtaq9XlhcIgTZUZnw9dJ"}},132:function(e,t,n){e.exports=n.p+"385a434660351a5785fbac1bdad8bcee.png"},133:function(e,t,n){e.exports=n.p+"63e5d9f47bb61823600b1e125c39e243.png"},134:function(e,t,n){e.exports=n.p+"f07d21418831787c0b1e6a868687a27c.png"},135:function(e,t,n){e.exports=n.p+"608548f1339140b4a269f990661e881e.png"},136:function(e,t,n){e.exports=n.p+"d19652e9c7b3efe6c1bacd1cf2e540df.png"},137:function(e,t,n){e.exports=n.p+"10b09f22ef6bda392be1a9919f37bfa5.png"},138:function(e,t,n){e.exports=n.p+"79d9c0e9c4969adc70a4075566e4f030.png"},139:function(e,t,n){e.exports=n.p+"1caf851adccc81faca6c014c7ee3c08d.png"},140:function(e,t,n){e.exports=n.p+"63e5d9f47bb61823600b1e125c39e243.png"},141:function(e,t,n){e.exports=n.p+"9588d25f5f5176f599dcd02f9617a64f.png"},142:function(e,t,n){e.exports=n.p+"a259794cd45770878f27e0f86ebeb945.png"},143:function(e,t,n){e.exports=n.p+"2bfe38b798cd331b13913469d2958695.ico"},216:function(e,t){t.__esModule=!0,t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText",ITEM_PROP:"itemprop"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv",itemprop:"itemProp",class:"className"}},217:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=r(l),f=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return null}}]),t}(c.default.Component);t.default=f,e.exports=t.default},228:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),l=r(u),c=n(229),f=r(c),s=n(230),p=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function s(){y=e(d.map(function(e){return e.props})),h.canUseDOM?t(y):n&&(y=n(y))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var d=[],y=void 0,h=function(e){function t(){o(this,t),e.apply(this,arguments)}return i(t,e),t.peek=function(){return y},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=y;return y=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),s()},t.prototype.render=function(){return l.default.createElement(c,this.props)},a(t,null,[{key:"displayName",value:"SideEffect("+r(c)+")",enumerable:!0},{key:"canUseDOM",value:f.default.canUseDOM,enumerable:!0}]),t}(u.Component);return h}}},229:function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};e.exports=o},230:function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=o.bind(t),a=0;a<n.length;a++)if(!i(n[a])||e[n[a]]!==t[n[a]])return!1;return!0}var o=Object.prototype.hasOwnProperty;e.exports=r},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;
if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(2),a=(r(i),n(36)),u=n(98),l=r(u);n(96),n(101),n(97),(0,a.render)(o(l.default,{}),document.getElementById("app")),n(99).install()},38:function(e,t,n){e.exports=n.p+"9588d25f5f5176f599dcd02f9617a64f.png"},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.importDefault=t.LazyLoad=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),c=(r(l),t.LazyLoad=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.state={loaded:!1},a=n,i(r,a)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){this.load(this.props)}},{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillReceiveProps",value:function(e){return e.modules===this.props.modules?null:void this.load(e)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"load",value:function(e){var t=this;this.setState({loaded:!1});var n=e.modules,r=Object.keys(n);Promise.all(r.map(function(e){return n[e]()})).then(function(e){return r.reduce(function(t,n,r){return t[n]=e[r],t},{})}).then(function(e){return t.mounted?void t.setState({modules:e,loaded:!0}):null})}},{key:"render",value:function(){var e=this.state,t=e.modules,n=e.loaded,r=this.props.children;return n?l.Children.only(r(t)):null}}]),t}(l.Component));t.importDefault=function(e){return e.then(function(e){return e.default})},t.default=c},96:function(e,t){e.exports={icons:[{src:"favicon.png",sizes:"32x32",type:"image/png",density:1},{src:"favicon.png",sizes:"96x96",type:"image/png",density:2},{src:"favicon.png",sizes:"128x128",type:"image/png",density:3},{src:"favicon.png",sizes:"196x196",type:"image/png",density:4}],name:"Evan Turner | Software Engineer",short_name:"Evan Turner",start_url:"index.html",display:"standalone",orientation:"portrait",theme_color:"#00d2ff",background_color:"#00d2ff"}},97:function(e,t,n){"use strict";!function(e,t,n,r,o,i,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.async=1,i.src=r,a.parentNode.insertBefore(i,a)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-58635966-1","auto"),ga("send","pageview")},98:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;var o=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),i=n(2),a=(r(i),n(88)),u=r(a),l=n(105),c=r(l),f=n(59),s=n(109),p=r(s),d=n(110),y=r(d),h=n(118),b=r(h),m=o(p.default,{}),v=o(y.default,{}),g=t.App=function(e){return o(u.default,{},void 0,function(e){var t=e.router;return o("div",{className:b.default.root},void 0,m,v,o(c.default,{pattern:"/",exactly:!0,component:function(e){return(0,f.importDefault)(n.e(3).then(n.bind(null,248)))}}),o(c.default,{pattern:"/web",router:t,component:function(e){return(0,f.importDefault)(n.e(1).then(n.bind(null,251)))}}),o(c.default,{pattern:"/software",component:function(e){return(0,f.importDefault)(n.e(0).then(n.bind(null,250)))}}),o(c.default,{pattern:"/mobile",component:function(e){return(0,f.importDefault)(n.e(2).then(n.bind(null,249)))}}),o(c.default,{pattern:"/contact",component:function(e){return(0,f.importDefault)(n.e(4).then(n.bind(null,247)))}}))})};t.default=g},99:function(e,t){function n(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function r(e){if(e||(e={}),n())navigator.serviceWorker.register("build/sw.js");else if(window.applicationCache){var t="build/appcache/",r="manifest",o=function(){var e=t+r+".html",n=document.createElement("iframe");n.src=e,n.style.display="none",i=n,document.body.appendChild(n)};return void("complete"===document.readyState?setTimeout(o):window.addEventListener("load",o))}}function o(e,t){}var i;t.install=r,t.applyUpdate=o}},[245]);