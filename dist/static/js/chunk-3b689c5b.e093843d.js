(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b689c5b"],{"044b":function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},"0a06":function(e,t,r){"use strict";var n=r("2444"),o=r("c532"),u=r("f6b49"),i=r("5270");function s(e){this.defaults=e,this.interceptors={request:new u,response:new u}}s.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(n,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[i,void 0],r=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}})),o.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}})),e.exports=s},"0df6":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},2444:function(e,t,r){"use strict";(function(t){var n=r("c532"),o=r("c8af"),u={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t)&&(e=r("b50d")),e}var a={adapter:s(),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){a.headers[e]=n.merge(u)})),e.exports=a}).call(this,r("f28c"))},"2d83":function(e,t,r){"use strict";var n=r("387f");e.exports=function(e,t,r,o,u){var i=new Error(e);return n(i,t,r,o,u)}},"2e67":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,r){"use strict";var n=r("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var u;if(r)u=r(t);else if(n.isURLSearchParams(t))u=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),u=i.join("&")}return u&&(e+=(-1===e.indexOf("?")?"?":"&")+u),e}},"365c":function(e,t,r){"use strict";r.d(t,"n",(function(){return s})),r.d(t,"m",(function(){return a})),r.d(t,"r",(function(){return c})),r.d(t,"c",(function(){return f})),r.d(t,"j",(function(){return p})),r.d(t,"e",(function(){return d})),r.d(t,"q",(function(){return l})),r.d(t,"o",(function(){return h})),r.d(t,"v",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"p",(function(){return y})),r.d(t,"k",(function(){return v})),r.d(t,"y",(function(){return w})),r.d(t,"x",(function(){return b})),r.d(t,"h",(function(){return x})),r.d(t,"u",(function(){return C})),r.d(t,"w",(function(){return T})),r.d(t,"a",(function(){return E})),r.d(t,"l",(function(){return R})),r.d(t,"t",(function(){return S})),r.d(t,"b",(function(){return j})),r.d(t,"s",(function(){return A})),r.d(t,"f",(function(){return L})),r.d(t,"i",(function(){return B})),r.d(t,"g",(function(){return q}));var n=r("bc3a"),o=r.n(n),u=o.a.create({baseURL:"http://localhost:8081/vip",timeout:5e3});u.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject()})),u.interceptors.response.use((function(e){if(200===e.status)return e.data;Promise.reject()}),(function(e){return console.log(e),Promise.reject()}));var i=u,s=function(e){return i({url:"managerLogin",method:"get",params:e})},a=function(e){return i({url:"getManagerData",method:"get",params:e})},c=function(e){return i({url:"getMovie",method:"get",params:e})},f=function(e){return i({url:"getDealData",method:"get",params:e})},p=function(e){return i({url:"insertMovie",method:"post",params:e})},d=function(e){return i({url:"delMovie",method:"get",params:e})},l=function(e){return i({url:"modifyMovie",method:"get",params:e})},h=function(e){return i({url:"memberData",method:"get",params:e})},m=function(e){return i({url:"memberRegister",method:"get",params:e})},g=function(e){return i({url:"delMember",method:"get",params:e})},y=function(e){return i({url:"modifyMember",method:"get",params:e})},v=function(e){return i({url:"loginMember",method:"get",params:e})},w=function(e){return i({url:"getStatisticData",method:"get",params:e})},b=function(e){return i({url:"requestDealData",method:"get",params:e})},x=function(e){return i({url:"getCardData",method:"post",params:e})},C=function(e){return i({url:"registerCard",method:"get",params:e})},T=function(e){return i({url:"reissueCard",method:"post",params:e})},E=function(e){return i({url:"cancelCard",method:"post",params:e})},R=function(e){return i({url:"loseCard",method:"post",params:e})},S=function(e){return i({url:"rechargeCard",method:"post",params:e})},j=function(e){return i({url:"consumeCard",method:"post",params:e})},A=function(e){return i({url:"queryRecord",method:"post",params:e})},L=function(e){return i({url:"exchangeIntegral",method:"post",params:e})},B=function(e){return i({url:"getCardIdByFuzzyQuery",method:"post",params:e})},q=function(e){return i({url:"getCardByCardId",method:"post",params:e})}},"387f":function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},3934:function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,r){"use strict";var n=r("2d83");e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},5270:function(e,t,r){"use strict";var n=r("c532"),o=r("c401"),u=r("2e67"),i=r("2444"),s=r("d925"),a=r("e683");function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){c(e),e.baseURL&&!s(e.url)&&(e.url=a(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return u(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"7a77":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,u,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(u)&&s.push("domain="+u),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4b":function(e,t,r){"use strict";var n=r("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},b50d:function(e,t,r){"use strict";var n=r("c532"),o=r("467f"),u=r("30b5"),i=r("c345"),s=r("3934"),a=r("2d83");e.exports=function(e){return new Promise((function(t,c){var f=e.data,p=e.headers;n.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",h=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+h)}if(d.open(e.method.toUpperCase(),u(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?d.response:d.responseText,u={data:n,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,c,u),d=null}},d.onerror=function(){c(a("Network Error",e,null,d)),d=null},d.ontimeout=function(){c(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r("7aac"),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;g&&(p[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&n.forEach(p,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),c(e),d=null)})),void 0===f&&(f=null),d.send(f)}))}},bc3a:function(e,t,r){e.exports=r("cee4")},c345:function(e,t,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,u,i={};return e?(n.forEach(e.split("\n"),(function(e){if(u=e.indexOf(":"),t=n.trim(e.substr(0,u)).toLowerCase(),r=n.trim(e.substr(u+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},c401:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},c532:function(e,t,r){"use strict";var n=r("1d2b"),o=r("044b"),u=Object.prototype.toString;function i(e){return"[object Array]"===u.call(e)}function s(e){return"[object ArrayBuffer]"===u.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function c(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===u.call(e)}function m(e){return"[object File]"===u.call(e)}function g(e){return"[object Blob]"===u.call(e)}function y(e){return"[object Function]"===u.call(e)}function v(e){return l(e)&&y(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function T(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=T(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)C(arguments[r],t);return e}function E(e,t,r){return C(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}e.exports={isArray:i,isArrayBuffer:s,isBuffer:o,isFormData:a,isArrayBufferView:c,isString:f,isNumber:p,isObject:l,isUndefined:d,isDate:h,isFile:m,isBlob:g,isFunction:y,isStream:v,isURLSearchParams:w,isStandardBrowserEnv:x,forEach:C,merge:T,extend:E,trim:b}},c8af:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},cee4:function(e,t,r){"use strict";var n=r("c532"),o=r("1d2b"),u=r("0a06"),i=r("2444");function s(e){var t=new u(e),r=o(u.prototype.request,t);return n.extend(r,u.prototype,t),n.extend(r,t),r}var a=s(i);a.Axios=u,a.create=function(e){return s(n.merge(i,e))},a.Cancel=r("7a77"),a.CancelToken=r("8df4b"),a.isCancel=r("2e67"),a.all=function(e){return Promise.all(e)},a.spread=r("0df6"),e.exports=a,e.exports.default=a},d925:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e683:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f28c:function(e,t){var r,n,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===u||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function a(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(function(){try{r="function"===typeof setTimeout?setTimeout:u}catch(e){r=u}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}})();var c,f=[],p=!1,d=-1;function l(){p&&c&&(p=!1,c.length?f=c.concat(f):d=-1,f.length&&h())}function h(){if(!p){var e=s(l);p=!0;var t=f.length;while(t){c=f,f=[];while(++d<t)c&&c[d].run();d=-1,t=f.length}c=null,p=!1,a(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new m(e,t)),1!==f.length||p||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},f6b49:function(e,t,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);