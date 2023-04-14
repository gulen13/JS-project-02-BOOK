var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}function n(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:r}=Object,s=(o=Object.create(null),t=>{const e=i.call(t);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())});var o;const a=t=>(t=t.toLowerCase(),e=>s(e)===t),c=t=>e=>typeof e===t,{isArray:l}=Array,u=c("undefined");const h=a("ArrayBuffer");const f=c("string"),d=c("function"),p=c("number"),m=t=>null!==t&&"object"==typeof t,g=t=>{if("object"!==s(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},y=a("Date"),v=a("File"),b=a("Blob"),w=a("FileList"),x=a("URLSearchParams");function k(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),l(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function E(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,T=t=>!u(t)&&t!==I;const N=(C="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>C&&t instanceof C);var C;const S=a("HTMLFormElement"),_=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),A=a("RegExp"),R=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};k(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},O={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var L={isArray:l,isArrayBuffer:h,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&d(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||d(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&h(t.buffer),e},isString:f,isNumber:p,isBoolean:t=>!0===t||!1===t,isObject:m,isPlainObject:g,isUndefined:u,isDate:y,isFile:v,isBlob:b,isRegExp:A,isFunction:d,isStream:t=>m(t)&&d(t.pipe),isURLSearchParams:x,isTypedArray:N,isFileList:w,forEach:k,merge:function t(){const{caseless:e}=T(this)&&this||{},n={},i=(i,r)=>{const s=e&&E(n,r)||r;g(n[s])&&g(i)?n[s]=t(n[s],i):g(i)?n[s]=t({},i):l(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&k(arguments[t],i);return n},extend:(t,e,i,{allOwnKeys:r}={})=>(k(e,((e,r)=>{i&&d(e)?t[r]=n(e,i):t[r]=e}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let s,o,a;const c={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],i&&!i(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(l(t))return t;let e=t.length;if(!p(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:S,hasOwnProperty:_,hasOwnProp:_,reduceDescriptors:R,freezeMethods:t=>{R(t,((e,n)=>{if(d(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];d(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return l(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:E,global:I,isContextDefined:T,ALPHABET:O,generateString:(t=16,e=O.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&d(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(m(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=l(t)?[]:{};return k(t,((t,e)=>{const s=n(t,i+1);!u(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function D(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}L.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=D.prototype,P={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{P[t]={value:t}})),Object.defineProperties(D,P),Object.defineProperty(M,"isAxiosError",{value:!0}),D.from=(t,e,n,i,r,s)=>{const o=Object.create(M);return L.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),D.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var U,B,F,z=D;B=function(t){var e,n,i=X(t),r=i[0],s=i[1],o=new $(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)e=q[t.charCodeAt(n)]<<18|q[t.charCodeAt(n+1)]<<12|q[t.charCodeAt(n+2)]<<6|q[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=q[t.charCodeAt(n)]<<2|q[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=q[t.charCodeAt(n)]<<10|q[t.charCodeAt(n+1)]<<4|q[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},F=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(Q(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(W[e>>2]+W[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(W[e>>10]+W[e>>4&63]+W[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var V,j,W=[],q=[],$="undefined"!=typeof Uint8Array?Uint8Array:Array,H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=0,G=H.length;K<G;++K)W[K]=H[K],q[H.charCodeAt(K)]=K;function X(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function Q(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(W[(r=i)>>18&63]+W[r>>12&63]+W[r>>6&63]+W[63&r]);return s.join("")}q["-".charCodeAt(0)]=62,q["_".charCodeAt(0)]=63,V=function(t,e,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,f=n?-1:1,d=t[e+h];for(h+=f,s=d&(1<<-u)-1,d>>=-u,u+=a;u>0;s=256*s+t[e+h],h+=f,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+t[e+h],h+=f,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,i),s-=l}return(d?-1:1)*o*Math.pow(2,s-i)},j=function(t,e,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,d=i?0:s-1,p=i?1:-1,m=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=u):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?f/c:f*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(e*c-1)*Math.pow(2,r),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;t[n+d]=255&a,d+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;t[n+d]=255&o,d+=p,o/=256,l-=8);t[n+d-p]|=128*m};const J="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;U=Z;function Y(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,Z.prototype),e}function Z(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return nt(t)}return tt(t,e,n)}function tt(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!Z.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|ot(t,e);let i=Y(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Ft(t,Uint8Array)){const e=new Uint8Array(t);return rt(e.buffer,e.byteOffset,e.byteLength)}return it(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Ft(t,ArrayBuffer)||t&&Ft(t.buffer,ArrayBuffer))return rt(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Ft(t,SharedArrayBuffer)||t&&Ft(t.buffer,SharedArrayBuffer)))return rt(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return Z.from(i,e,n);const r=function(t){if(Z.isBuffer(t)){const e=0|st(t.length),n=Y(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||zt(t.length)?Y(0):it(t);if("Buffer"===t.type&&Array.isArray(t.data))return it(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return Z.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function et(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function nt(t){return et(t),Y(t<0?0:0|st(t))}function it(t){const e=t.length<0?0:0|st(t.length),n=Y(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function rt(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,Z.prototype),i}function st(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function ot(t,e){if(Z.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Ft(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Pt(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Ut(t).length;default:if(r)return i?-1:Pt(t).length;e=(""+e).toLowerCase(),r=!0}}function at(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return wt(this,e,n);case"utf8":case"utf-8":return yt(this,e,n);case"ascii":return vt(this,e,n);case"latin1":case"binary":return bt(this,e,n);case"base64":return gt(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return xt(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ct(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function lt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),zt(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=Z.from(e,i)),Z.isBuffer(e))return 0===e.length?-1:ut(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):ut(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ut(t,e,n,i,r){let s,o=1,a=t.length,c=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(t,s)===l(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(t,s+i)!==l(e,i)){n=!1;break}if(n)return s}return-1}function ht(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(zt(i))return o;t[n+o]=i}return o}function ft(t,e,n,i){return Bt(Pt(e,t.length-n),t,n,i)}function dt(t,e,n,i){return Bt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function pt(t,e,n,i){return Bt(Ut(e),t,n,i)}function mt(t,e,n,i){return Bt(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function gt(t,e,n){return 0===e&&n===t.length?F(t):F(t.slice(e,n))}function yt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(c=(15&e)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}Z.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),Z.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Z.prototype,"parent",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.buffer}}),Object.defineProperty(Z.prototype,"offset",{enumerable:!0,get:function(){if(Z.isBuffer(this))return this.byteOffset}}),Z.poolSize=8192,Z.from=function(t,e,n){return tt(t,e,n)},Object.setPrototypeOf(Z.prototype,Uint8Array.prototype),Object.setPrototypeOf(Z,Uint8Array),Z.alloc=function(t,e,n){return function(t,e,n){return et(t),t<=0?Y(t):void 0!==e?"string"==typeof n?Y(t).fill(e,n):Y(t).fill(e):Y(t)}(t,e,n)},Z.allocUnsafe=function(t){return nt(t)},Z.allocUnsafeSlow=function(t){return nt(t)},Z.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==Z.prototype},Z.compare=function(t,e){if(Ft(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),Ft(e,Uint8Array)&&(e=Z.from(e,e.offset,e.byteLength)),!Z.isBuffer(t)||!Z.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},Z.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Z.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Z.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=Z.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Ft(e,Uint8Array))r+e.length>i.length?(Z.isBuffer(e)||(e=Z.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!Z.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},Z.byteLength=ot,Z.prototype._isBuffer=!0,Z.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ct(this,e,e+1);return this},Z.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ct(this,e,e+3),ct(this,e+1,e+2);return this},Z.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ct(this,e,e+7),ct(this,e+1,e+6),ct(this,e+2,e+5),ct(this,e+3,e+4);return this},Z.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?yt(this,0,t):at.apply(this,arguments)},Z.prototype.toLocaleString=Z.prototype.toString,Z.prototype.equals=function(t){if(!Z.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Z.compare(this,t)},Z.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},J&&(Z.prototype[J]=Z.prototype.inspect),Z.prototype.compare=function(t,e,n,i,r){if(Ft(t,Uint8Array)&&(t=Z.from(t,t.offset,t.byteLength)),!Z.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==l[t]){s=c[t],o=l[t];break}return s<o?-1:o<s?1:0},Z.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},Z.prototype.indexOf=function(t,e,n){return lt(this,t,e,n,!0)},Z.prototype.lastIndexOf=function(t,e,n){return lt(this,t,e,n,!1)},Z.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return ht(this,t,e,n);case"utf8":case"utf-8":return ft(this,t,e,n);case"ascii":case"latin1":case"binary":return dt(this,t,e,n);case"base64":return pt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},Z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function vt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function bt(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function wt(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Vt[t[i]];return r}function xt(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function kt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function Et(t,e,n,i,r,s){if(!Z.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function It(t,e,n,i,r){Ot(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function Tt(t,e,n,i,r){Ot(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Nt(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Ct(t,e,n,i,r){return e=+e,n>>>=0,r||Nt(t,0,n,4),j(t,e,n,i,23,4),n+4}function St(t,e,n,i,r){return e=+e,n>>>=0,r||Nt(t,0,n,8),j(t,e,n,i,52,8),n+8}Z.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,Z.prototype),i},Z.prototype.readUintLE=Z.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},Z.prototype.readUintBE=Z.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},Z.prototype.readUint8=Z.prototype.readUInt8=function(t,e){return t>>>=0,e||kt(t,1,this.length),this[t]},Z.prototype.readUint16LE=Z.prototype.readUInt16LE=function(t,e){return t>>>=0,e||kt(t,2,this.length),this[t]|this[t+1]<<8},Z.prototype.readUint16BE=Z.prototype.readUInt16BE=function(t,e){return t>>>=0,e||kt(t,2,this.length),this[t]<<8|this[t+1]},Z.prototype.readUint32LE=Z.prototype.readUInt32LE=function(t,e){return t>>>=0,e||kt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Z.prototype.readUint32BE=Z.prototype.readUInt32BE=function(t,e){return t>>>=0,e||kt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Z.prototype.readBigUInt64LE=jt((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Z.prototype.readBigUInt64BE=jt((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Z.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},Z.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||kt(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},Z.prototype.readInt8=function(t,e){return t>>>=0,e||kt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},Z.prototype.readInt16LE=function(t,e){t>>>=0,e||kt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt16BE=function(t,e){t>>>=0,e||kt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},Z.prototype.readInt32LE=function(t,e){return t>>>=0,e||kt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Z.prototype.readInt32BE=function(t,e){return t>>>=0,e||kt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Z.prototype.readBigInt64LE=jt((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),Z.prototype.readBigInt64BE=jt((function(t){Lt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||Dt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),Z.prototype.readFloatLE=function(t,e){return t>>>=0,e||kt(t,4,this.length),V(this,t,!0,23,4)},Z.prototype.readFloatBE=function(t,e){return t>>>=0,e||kt(t,4,this.length),V(this,t,!1,23,4)},Z.prototype.readDoubleLE=function(t,e){return t>>>=0,e||kt(t,8,this.length),V(this,t,!0,52,8)},Z.prototype.readDoubleBE=function(t,e){return t>>>=0,e||kt(t,8,this.length),V(this,t,!1,52,8)},Z.prototype.writeUintLE=Z.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Et(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},Z.prototype.writeUintBE=Z.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){Et(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},Z.prototype.writeUint8=Z.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,1,255,0),this[e]=255&t,e+1},Z.prototype.writeUint16LE=Z.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeUint16BE=Z.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeUint32LE=Z.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},Z.prototype.writeUint32BE=Z.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigUInt64LE=jt((function(t,e=0){return It(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeBigUInt64BE=jt((function(t,e=0){return Tt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),Z.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Et(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);Et(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},Z.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},Z.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},Z.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},Z.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},Z.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||Et(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},Z.prototype.writeBigInt64LE=jt((function(t,e=0){return It(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeBigInt64BE=jt((function(t,e=0){return Tt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Z.prototype.writeFloatLE=function(t,e,n){return Ct(this,t,e,!0,n)},Z.prototype.writeFloatBE=function(t,e,n){return Ct(this,t,e,!1,n)},Z.prototype.writeDoubleLE=function(t,e,n){return St(this,t,e,!0,n)},Z.prototype.writeDoubleBE=function(t,e,n){return St(this,t,e,!1,n)},Z.prototype.copy=function(t,e,n,i){if(!Z.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},Z.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Z.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=Z.isBuffer(t)?t:Z.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const _t={};function At(t,e,n){_t[t]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function Rt(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Ot(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new _t.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Lt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||Dt(e,t.length-(n+1))}(i,r,s)}function Lt(t,e){if("number"!=typeof t)throw new _t.ERR_INVALID_ARG_TYPE(e,"number",t)}function Dt(t,e,n){if(Math.floor(t)!==t)throw Lt(t,n),new _t.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new _t.ERR_BUFFER_OUT_OF_BOUNDS;throw new _t.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}At("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),At("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),At("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Rt(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Rt(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const Mt=/[^+/0-9A-Za-z-_]/g;function Pt(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Ut(t){return B(function(t){if((t=(t=t.split("=")[0]).trim().replace(Mt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function Bt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Ft(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function zt(t){return t!=t}const Vt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function jt(t){return"undefined"==typeof BigInt?Wt:t}function Wt(){throw new Error("BigInt not supported")}var qt=U;function $t(t){return L.isPlainObject(t)||L.isArray(t)}function Ht(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function Kt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Ht(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const Gt=L.toFlatObject(L,{},null,(function(t){return/^is[A-Z]/.test(t)}));var Xt=function(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!L.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&L.isSpecCompliantForm(e);if(!L.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(L.isDate(t))return t.toISOString();if(!a&&L.isBlob(t))throw new z("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(t)||L.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):qt.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(L.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(L.isArray(t)&&function(t){return L.isArray(t)&&!t.some($t)}(t)||(L.isFileList(t)||L.endsWith(n,"[]"))&&(a=L.toArray(t)))return n=Ht(n),a.forEach((function(t,i){!L.isUndefined(t)&&null!==t&&e.append(!0===o?Kt([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!$t(t)||(e.append(Kt(r,n,s),c(t)),!1)}const u=[],h=Object.assign(Gt,{defaultVisitor:l,convertValue:c,isVisitable:$t});if(!L.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!L.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),L.forEach(n,(function(n,s){!0===(!(L.isUndefined(n)||null===n)&&r.call(e,n,L.isString(s)?s.trim():s,i,h))&&t(n,i?i.concat(s):[s])})),u.pop()}}(t),e};function Qt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Jt(t,e){this._pairs=[],t&&Xt(t,this,e)}const Yt=Jt.prototype;Yt.append=function(t,e){this._pairs.push([t,e])},Yt.toString=function(t){const e=t?function(e){return t.call(this,e,Qt)}:Qt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Zt=Jt;function te(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ee(t,e,n){if(!e)return t;const i=n&&n.encode||te,r=n&&n.serialize;let s;if(s=r?r(e,n):L.isURLSearchParams(e)?e.toString():new Zt(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var ne=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},ie={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var re={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Zt,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function se(t,e){return Xt(t,new re.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return re.isNode&&L.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var oe=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&L.isArray(i)?i.length:s,a)return L.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&L.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&L.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,((t,i)=>{e(function(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const ae={"Content-Type":void 0};const ce={transitional:ie,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=L.isObject(t);r&&L.isHTMLForm(t)&&(t=new FormData(t));if(L.isFormData(t))return i&&i?JSON.stringify(oe(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return se(t,this.formSerializer).toString();if((s=L.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Xt(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||ce.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&L.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw z.from(t,z.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],(function(t){ce.headers[t]={}})),L.forEach(["post","put","patch"],(function(t){ce.headers[t]=L.merge(ae)}));var le=ce;const ue=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var he=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&ue[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const fe=Symbol("internals");function de(t){return t&&String(t).trim().toLowerCase()}function pe(t){return!1===t||null==t?t:L.isArray(t)?t.map(pe):String(t)}function me(t,e,n,i,r){return L.isFunction(i)?i.call(this,e,n):(r&&(e=n),L.isString(e)?L.isString(i)?-1!==e.indexOf(i):L.isRegExp(i)?i.test(e):void 0:void 0)}class ge{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=de(e);if(!r)throw new Error("header name must be a non-empty string");const s=L.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=pe(t))}const s=(t,e)=>L.forEach(t,((t,n)=>r(t,n,e)));return L.isPlainObject(t)||t instanceof this.constructor?s(t,e):L.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())?s(he(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=de(t)){const n=L.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(L.isFunction(e))return e.call(this,t,n);if(L.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=de(t)){const n=L.findKey(this,t);return!(!n||void 0===this[n]||e&&!me(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=de(t)){const r=L.findKey(n,t);!r||e&&!me(0,n[r],r,e)||(delete n[r],i=!0)}}return L.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!me(0,this[r],r,t,!0)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return L.forEach(this,((i,r)=>{const s=L.findKey(n,r);if(s)return e[s]=pe(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=pe(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return L.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&L.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[fe]=this[fe]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=de(t);e[i]||(!function(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}}ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),L.freezeMethods(ge.prototype),L.freezeMethods(ge);var ye=ge;function ve(t,e){const n=this||le,i=e||n,r=ye.from(i.headers);let s=i.data;return L.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function be(t){return!(!t||!t.__CANCEL__)}function we(t,e,n){z.call(this,null==t?"canceled":t,z.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(we,z,{__CANCEL__:!0});var xe=we;function ke(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var Ee=re.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(i)&&o.push("path="+i),L.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ie(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Te(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Ie(t,e):e}var Ne=re.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=L.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Ce(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var Se=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-r<e)return;const f=l&&c-l;return f?Math.round(1e3*h/f):void 0}};function _e(t,e){let n=0;const i=Se(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[e?"download":"upload"]=!0,t(l)}}const Ae={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=ye.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}L.isFormData(i)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const l=Te(t.baseURL,t.url);function u(){if(!c)return;const i=ye.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());ke((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),ee(l,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new z("Request aborted",z.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new z("Network Error",z.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ie;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new z(e,i.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,c)),c=null},re.isStandardBrowserEnv){const e=(t.withCredentials||Ne(l))&&t.xsrfCookieName&&Ee.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&L.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),L.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",_e(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",_e(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new xe(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=Ce(l);h&&-1===re.protocols.indexOf(h)?n(new z("Unsupported protocol "+h+":",z.ERR_BAD_REQUEST,t)):c.send(i||null)}))}};L.forEach(Ae,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var Re={getAdapter:t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=L.isString(n)?Ae[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(L.hasOwnProp(Ae,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!L.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Ae};function Oe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xe(null,t)}function Le(t){Oe(t),t.headers=ye.from(t.headers),t.data=ve.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Re.getAdapter(t.adapter||le.adapter)(t).then((function(e){return Oe(t),e.data=ve.call(t,t.transformResponse,e),e.headers=ye.from(e.headers),e}),(function(e){return be(e)||(Oe(t),e&&e.response&&(e.response.data=ve.call(t,t.transformResponse,e.response),e.response.headers=ye.from(e.response.headers))),Promise.reject(e)}))}const De=t=>t instanceof ye?t.toJSON():t;function Me(t,e){e=e||{};const n={};function i(t,e,n){return L.isPlainObject(t)&&L.isPlainObject(e)?L.merge.call({caseless:n},t,e):L.isPlainObject(e)?L.merge({},e):L.isArray(e)?e.slice():e}function r(t,e,n){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!L.isUndefined(e))return i(void 0,e)}function o(t,e){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(De(t),De(e),!0)};return L.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=c[i]||r,o=s(t[i],e[i],i);L.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Pe={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Pe[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ue={};Pe.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.5] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new z(i(r," has been removed"+(e?" in "+e:"")),z.ERR_DEPRECATED);return e&&!Ue[r]&&(Ue[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Be={assertOptions:function(t,e,n){if("object"!=typeof t)throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new z("option "+s+" must be "+n,z.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new z("Unknown option "+s,z.ERR_BAD_OPTION)}},validators:Pe};const Fe=Be.validators;class ze{constructor(t){this.defaults=t,this.interceptors={request:new ne,response:new ne}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Me(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Be.assertOptions(n,{silentJSONParsing:Fe.transitional(Fe.boolean),forcedJSONParsing:Fe.transitional(Fe.boolean),clarifyTimeoutError:Fe.transitional(Fe.boolean)},!1),null!=i&&(L.isFunction(i)?e.paramsSerializer={serialize:i}:Be.assertOptions(i,{encode:Fe.function,serialize:Fe.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&L.merge(r.common,r[e.method]),s&&L.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=ye.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[Le.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);h<u;)l=l.then(t[h++],t[h++]);return l}u=o.length;let f=e;for(h=0;h<u;){const t=o[h++],e=o[h++];try{f=t(f)}catch(t){e.call(this,t);break}}try{l=Le.call(this,f)}catch(t){return Promise.reject(t)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(t){return ee(Te((t=Me(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],(function(t){ze.prototype[t]=function(e,n){return this.request(Me(n||{},{method:t,url:e,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Me(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}ze.prototype[t]=e(),ze.prototype[t+"Form"]=e(!0)}));var Ve=ze;class je{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new xe(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new je((function(e){t=e})),cancel:t}}}var We=je;const qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qe).forEach((([t,e])=>{qe[e]=t}));var $e=qe;const He=function t(e){const i=new Ve(e),r=n(Ve.prototype.request,i);return L.extend(r,Ve.prototype,i,{allOwnKeys:!0}),L.extend(r,i,null,{allOwnKeys:!0}),r.create=function(n){return t(Me(e,n))},r}(le);He.Axios=Ve,He.CanceledError=xe,He.CancelToken=We,He.isCancel=be,He.VERSION="1.3.5",He.toFormData=Xt,He.AxiosError=z,He.Cancel=He.CanceledError,He.all=function(t){return Promise.all(t)},He.spread=function(t){return function(e){return t.apply(null,e)}},He.isAxiosError=function(t){return L.isObject(t)&&!0===t.isAxiosError},He.mergeConfig=Me,He.AxiosHeaders=ye,He.formToJSON=t=>oe(L.isHTMLForm(t)?new FormData(t):t),He.HttpStatusCode=$e,He.default=He;var Ke=He;const{Axios:Ge,AxiosError:Xe,CanceledError:Qe,isCancel:Je,CancelToken:Ye,VERSION:Ze,all:tn,Cancel:en,isAxiosError:nn,spread:rn,toFormData:sn,AxiosHeaders:on,HttpStatusCode:an,formToJSON:cn,mergeConfig:ln}=Ke;class un{#t="https://books-backend.p.goit.global/books/";constructor(){this.page=1,this.query=""}async fetchBooksCategoryList(){return await Ke.get(`${this.#t}category-list`)}async fetchTopBooks(){return await Ke.get(`${this.#t}top-books`)}async fetchBookByID(t){return await Ke.get(`${this.#t}${t}`)}async fetchBooksByCategory(t){const e=new URLSearchParams({category:`${t}`});return await Ke.get(`${this.#t}category?${e}`)}incrementPage(){this.page+=1}resetPage(){this.page=1}decrementPage(){this.page-=1}}const hn={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function fn(){hn.menu.classList.toggle("is-open"),hn.openMenuBtn.classList.toggle("is-hidden"),hn.closeMenuBtn.classList.toggle("is-hidden")}hn.openMenuBtn.addEventListener("click",fn),hn.closeMenuBtn.addEventListener("click",fn);const dn=document.querySelector(".books-container");async function pn(){try{const t=new un,e=await t.fetchTopBooks();e.data.length>0?e.data.forEach((t=>{!function(t){const e=`\n    <div class="books-section__list-markup">\n      <p class="list-markup__paragraph">${t.list_name}</p>\n      <ul class="list-markup__block"></ul>\n      <div class="list-markup__button-wrapper">\n        <button class="list-markup__see-more-button" data-category="${t.list_name}">see more</button>\n      </div>\n    </div>\n  `;dn.innerHTML+=e;const n=dn.lastElementChild.querySelector(".list-markup__block");i=t.books,r=n,window.innerWidth<768?mn(i,1,r):window.innerWidth<1440?mn(i,3,r):mn(i,5,r);var i,r;dn.querySelectorAll(".list-markup__see-more-button").forEach((t=>{t.addEventListener("click",(()=>{const e=t.dataset.category;console.log(e),async function(t){const e=new un,n=await e.fetchBooksByCategory(t);console.log(n.data);const i=`\n      \n      <div class="block-for-books">\n      <h2 class="block-for-books__title">${t}</h2>\n      <ul class="block-for-books__list"></ul>\n      </div>\n      \n    `;dn.innerHTML=i;const r=dn.lastElementChild.querySelector(".block-for-books__list");n.data.forEach((t=>{const e=`\n      \n        <li class="list-book__book-card"  data-id="${t._id}">\n          <a href="#">\n            <img src="${t.book_image}" alt="${t.title}" class="book-card__img"></img>\n            <h2 class="card__title">${t.title}</h2>\n            <p class="card__paragraph">${t.author}</p>\n          </a>  \n        </li> \n      \n    `;r.innerHTML+=e}))}(e)}))}))}(t)})):console.error("No data available")}catch(t){console.error(t)}}function mn(t,e,n){for(let i=0;i<e;i++){const e=`\n      \n        <li class="list-book__book-card"  data-id="${t[i]._id}">\n          <a href="#">\n            <img src="${t[i].book_image}" alt="${t[i].title}" class="book-card__img"></img>\n            <h2 class="card__title">${t[i].title}</h2>\n            <p class="card__paragraph">${t[i].author}</p>\n          </a>  \n        </li> \n      \n    `;n.innerHTML+=e}}window.addEventListener("resize",(function(t){dn.innerHTML="",pn()})),pn();var gn,yn,vn={};function bn({list_name:t}){return`<li class="categories__item">\n        <button type="button" class="categories__btn">${t}</button>\n      </li>`}gn=void 0===t?"undefined"==typeof window?vn:window:t,yn=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n,i,r,s,o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",a='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",h="Info",f={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},d="Success",p="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",T="Arrows",N="Dots",C="Pulse",S="Custom",_="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},R="Standard",O="Hourglass",L="Circle",D="Arrows",M="Dots",P="Pulse",U={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},F=function(t){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+t+o)},z=function(e){return e||(e="head"),null!==t.document[e]||(B('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},V=function(e,n){if(!z("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}},j=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=e&&"[object Object]"===Object.prototype.toString.call(n[i])?j(t[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return t},W=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},q=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},$=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},H=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+t+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+t+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+t+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+e+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},K=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},G=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},X=function(t,e){return t||(t="60px"),e||(e="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+e+'" width="'+t+'" height="'+t+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Q=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Y=function(n,i,r,s){if(!z("body"))return!1;e||ct.Notify.init({});var o=j(!0,e,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var d={};"object"==typeof r?d=r:"object"==typeof s&&(d=s),e=j(!0,e,d)}var p=e[n.toLocaleLowerCase("en")];J++,"string"!=typeof i&&(i="Notiflix "+n),e.plainText&&(i=W(i)),!e.plainText&&i.length>e.messageMaxLength&&(e=j(!0,e,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>e.messageMaxLength&&(i=i.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(p.fontAwesomeIconColor=p.background),e.cssAnimation||(e.cssAnimationDuration=0);var m=t.document.getElementById(f.wrapID)||t.document.createElement("div");if(m.id=f.wrapID,m.style.width=e.width,m.style.zIndex=e.zindex,m.style.opacity=e.opacity,"center-center"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.top=e.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===e.position?(m.style.left=e.distance,m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===e.position?(m.style.right=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.left="auto"):"left-top"===e.position?(m.style.left=e.distance,m.style.top=e.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===e.position?(m.style.left=e.distance,m.style.bottom=e.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=e.distance,m.style.top=e.distance,m.style.left="auto",m.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(f.overlayID)||t.document.createElement("div");g.id=f.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=p.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(f.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(f.wrapID)||t.document.body.appendChild(m);var y=t.document.createElement("div");y.id=e.ID+"-"+J,y.className=e.className+" "+p.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=e.fontSize,y.style.color=p.textColor,y.style.background=p.background,y.style.borderRadius=e.borderRadius,y.style.pointerEvents="all",e.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+e.fontFamily+'", '+a,e.cssAnimation&&(y.style.animationDuration=e.cssAnimationDuration+"ms");var v="";if(e.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+p.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)y.innerHTML='<i style="color:'+p.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+p.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===h&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+p.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(e.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(e.closeButton?v:"");if("left-bottom"===e.position||"right-bottom"===e.position){var w=t.document.getElementById(f.wrapID);w.insertBefore(y,w.firstChild)}else t.document.getElementById(f.wrapID).appendChild(y);var x=t.document.getElementById(y.id);if(x){var k,E,I=function(){x.classList.add("nx-remove");var e=t.document.getElementById(f.overlayID);e&&0>=m.childElementCount&&e.classList.add("nx-remove"),clearTimeout(k)},T=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var e=t.document.getElementById(f.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(E)};if(e.closeButton&&"function"!=typeof r&&t.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof r||e.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),I();var t=setTimeout((function(){T(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof r){var N=function(){k=setTimeout((function(){I()}),e.timeout),E=setTimeout((function(){T()}),e.timeout+e.cssAnimationDuration)};N(),e.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),N()})))}}if(e.showOnlyTheLastOne&&0<J)for(var C,S=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+J+"])"),_=0;_<S.length;_++)null!==(C=S[_]).parentNode&&C.parentNode.removeChild(C);e=j(!0,e,o)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},tt=function(e,i,r,s,o,c){if(!z("body"))return!1;n||ct.Report.init({});var l={};if("object"==typeof o&&!Array.isArray(o)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof o?u=o:"object"==typeof c&&(u=c),l=j(!0,n,{}),n=j(!0,n,u)}var h=n[e.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+e),"string"!=typeof r&&(e===d?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':e===p?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':e===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':e===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),n.plainText&&(i=W(i),r=W(r),s=W(s)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonMaxLength&&(s=s.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var f=t.document.createElement("div");f.id=y.ID,f.className=n.className,f.style.zIndex=n.zindex,f.style.borderRadius=n.borderRadius,f.style.fontFamily='"'+n.fontFamily+'", '+a,n.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on")),f.style.display="flex",f.style.flexWrap="wrap",f.style.flexDirection="column",f.style.alignItems="center",f.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(h.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w,x,k="";if(e===d?(w=n.svgSize,x=h.svgColor,w||(w="110px"),x||(x="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+w+'" height="'+w+'" fill="'+x+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):e===p?k=function(t,e){return t||(t="110px"),e||(e="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===m?k=function(t,e){return t||(t="110px"),e||(e="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor):e===g&&(k=function(t,e){return t||(t="110px"),e||(e="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+t+'" height="'+t+'" fill="'+e+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,h.svgColor)),f.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+k+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+h.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+h.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+h.buttonBackground+"; color:"+h.buttonColor+';">'+s+"</a></div>",!t.document.getElementById(f.id)){t.document.body.appendChild(f);var E=function(){var e=t.document.getElementById(f.id);e.classList.add("nx-remove");var i=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e),clearTimeout(i)}),n.cssAnimationDuration)};t.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof o&&o(),E()})),v&&b&&t.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}n=j(!0,n,l)},et=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},nt=function(e,n,r,s,o,c,l,u,h){if(!z("body"))return!1;i||ct.Confirm.init({});var f=j(!0,i,{});"object"!=typeof h||Array.isArray(h)||(i=j(!0,i,h)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof o&&(o="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=W(n),r=W(r),o=W(o),c=W(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',o="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',o="Okay",c="..."),(o.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',o="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),o.length>i.buttonsMaxLength&&(o=o.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var d=t.document.createElement("div");d.id=x.ID,d.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),d.style.zIndex=i.zindex,d.style.padding=i.distance,i.rtl&&(d.setAttribute("dir","rtl"),d.classList.add("nx-rtl-on"));var p="string"==typeof i.position?i.position.trim():"center";d.classList.add("nx-position-"+p),d.style.fontFamily='"'+i.fontFamily+'", '+a;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(e===b||e===w){v=s||"";var E=e===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(e===w?'value="'+v+'"':"")+' maxlength="'+E+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(d.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+o+"</a>"+g+"</div></div>",!t.document.getElementById(d.id)){t.document.body.appendChild(d);var I=t.document.getElementById(d.id),T=t.document.getElementById("NXConfirmButtonOk"),N=t.document.getElementById("NXConfirmValidationInput");N&&(N.focus(),N.setSelectionRange(0,(N.value||"").length),N.addEventListener("keyup",(function(t){var n=t.target.value;e===b&&n!==v?(t.preventDefault(),N.classList.add("nx-validation-failure"),N.classList.remove("nx-validation-success")):(e===b&&(N.classList.remove("nx-validation-failure"),N.classList.add("nx-validation-success")),("enter"===(t.key||"").toLocaleLowerCase("en")||13===t.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(t){if(e===b&&v&&N){if((N.value||"").toString()!==v)return N.focus(),N.classList.add("nx-validation-failure"),t.stopPropagation(),t.preventDefault(),t.returnValue=!1,t.cancelBubble=!0,!1;N.classList.remove("nx-validation-failure")}"function"==typeof l&&(e===w&&N&&(k=N.value||""),l(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&t.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(e===w&&N&&(k=N.value||""),u(k)),I.classList.add("nx-remove");var t=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(t))}),i.cssAnimationDuration)}))}i=j(!0,i,f)},it=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},rt=function(e,n,i,s,o){if(!z("body"))return!1;r||ct.Loading.init({});var c=j(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=j(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),s){var h="";0<(u=u.length>r.messageMaxLength?W(u).toString().substring(0,r.messageMaxLength)+"...":W(u).toString()).length&&(h='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var f="";if(e===k)f=q(r.svgSize,r.svgColor);else if(e===E)f=$(r.svgSize,r.svgColor);else if(e===I)f=H(r.svgSize,r.svgColor);else if(e===T)f=K(r.svgSize,r.svgColor);else if(e===N)f=G(r.svgSize,r.svgColor);else if(e===C)f=X(r.svgSize,r.svgColor);else if(e===S&&null!==r.customSvgCode&&null===r.customSvgUrl)f=r.customSvgCode||"";else if(e===S&&null!==r.customSvgUrl&&null===r.customSvgCode)f='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(e===S&&(null===r.customSvgUrl||null===r.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;f=function(t,e,n){return t||(t="60px"),e||(e="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+t+'" height="'+t+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+e+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var d=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),p=t.innerWidth,m=d>=p?p-40+"px":d+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+f+"</div>",y=t.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+a,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+h,!t.document.getElementById(y.id)&&(t.document.body.appendChild(y),r.clickToClose)&&t.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var t=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(t))}),r.cssAnimationDuration)}))}else if(t.document.getElementById(A.ID))var v=t.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var t=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(t))}),r.cssAnimationDuration);clearTimeout(b)}),o);r=j(!0,r,c)},st=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ot=0,at=function(e,n,i,r,o,c){var l;if(Array.isArray(i)){if(1>i.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=t.document.querySelectorAll(i);if(1>u.length)return B('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}s||ct.Block.init({});var h=j(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var f={};"object"==typeof r?f=r:"object"==typeof o&&(f=o),s=j(!0,s,f)}var d="";"string"==typeof r&&0<r.length&&(d=r),s.cssAnimation||(s.cssAnimationDuration=0);var p=U.className;"string"==typeof s.className&&(p=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(e){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=l[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+U.ID+"]");if(1>x.length){var k="";n&&(k=n===O?$(s.svgSize,s.svgColor):n===L?H(s.svgSize,s.svgColor):n===D?K(s.svgSize,s.svgColor):n===M?G(s.svgSize,s.svgColor):n===P?X(s.svgSize,s.svgColor):q(s.svgSize,s.svgColor));var E='<span class="'+p+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",I="";0<d.length&&(d=d.length>s.messageMaxLength?W(d).substring(0,s.messageMaxLength)+"...":W(d),I='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+p+'-message">'+d+"</span>"),ot++;var T=t.document.createElement("div");T.id=U.ID+"-"+ot,T.className=p+(s.cssAnimation?" nx-with-animation":""),T.style.position=s.position,T.style.zIndex=s.zindex,T.style.background=s.backgroundColor,T.style.animationDuration=s.cssAnimationDuration+"ms",T.style.fontFamily='"'+s.fontFamily+'", '+a,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",s.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=E+I;var N,C=t.getComputedStyle(v).getPropertyValue("position"),S="string"==typeof C?C.toLocaleLowerCase("en"):"relative",_=Math.round(1.25*parseInt(s.svgSize))+40,A="";_>(v.offsetHeight||0)&&(A="min-height:"+_+"px;"),N=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var R="",V=-1>=["absolute","relative","fixed","sticky"].indexOf(S);if(V||0<A.length){if(!z("head"))return!1;V&&(R="position:relative!important;");var Q='<style id="Style-'+U.ID+"-"+ot+'">'+N+"."+y+"{"+R+A+"}</style>",J=t.document.createRange();J.selectNode(t.document.head);var Y=J.createContextualFragment(Q);t.document.head.appendChild(Y),v.classList.add(y)}v.appendChild(T)}}}else var Z=function(e){var n=setTimeout((function(){null!==e.parentNode&&e.parentNode.removeChild(e);var i=e.getAttribute("id"),r=t.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),s.cssAnimationDuration)},tt=function(t){if(t&&0<t.length)for(var e,n=0;n<t.length;n++)(e=t[n])&&(e.classList.add("nx-remove"),Z(e));else F("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},et=function(t){var e=setTimeout((function(){t.classList.remove(y),clearTimeout(e)}),s.cssAnimationDuration+300)},nt=setTimeout((function(){for(var t,e=0;e<g;e++)(t=l[e])&&(et(t),x=t.querySelectorAll("[id^="+U.ID+"]"),tt(x));clearTimeout(nt)}),c);s=j(!0,s,h)},ct={Notify:{init:function(t){e=j(!0,f,t),V(Q,"NotiflixNotifyInternalCSS")},merge:function(t){return e?void(e=j(!0,e,t)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(t,e,n){Y(c,t,e,n)},failure:function(t,e,n){Y(l,t,e,n)},warning:function(t,e,n){Y(u,t,e,n)},info:function(t,e,n){Y(h,t,e,n)}},Report:{init:function(t){n=j(!0,y,t),V(Z,"NotiflixReportInternalCSS")},merge:function(t){return n?void(n=j(!0,n,t)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(t,e,n,i,r){tt(d,t,e,n,i,r)},failure:function(t,e,n,i,r){tt(p,t,e,n,i,r)},warning:function(t,e,n,i,r){tt(m,t,e,n,i,r)},info:function(t,e,n,i,r){tt(g,t,e,n,i,r)}},Confirm:{init:function(t){i=j(!0,x,t),V(et,"NotiflixConfirmInternalCSS")},merge:function(t){return i?void(i=j(!0,i,t)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(t,e,n,i,r,s,o){nt(v,t,e,null,n,i,r,s,o)},ask:function(t,e,n,i,r,s,o,a){nt(b,t,e,n,i,r,s,o,a)},prompt:function(t,e,n,i,r,s,o,a){nt(w,t,e,n,i,r,s,o,a)}},Loading:{init:function(t){r=j(!0,A,t),V(it,"NotiflixLoadingInternalCSS")},merge:function(t){return r?void(r=j(!0,r,t)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(t,e){rt(k,t,e,!0,0)},hourglass:function(t,e){rt(E,t,e,!0,0)},circle:function(t,e){rt(I,t,e,!0,0)},arrows:function(t,e){rt(T,t,e,!0,0)},dots:function(t,e){rt(N,t,e,!0,0)},pulse:function(t,e){rt(C,t,e,!0,0)},custom:function(t,e){rt(S,t,e,!0,0)},notiflix:function(t,e){rt(_,t,e,!0,0)},remove:function(t){"number"!=typeof t&&(t=0),rt(null,null,null,!1,t)},change:function(e){!function(e){"string"!=typeof e&&(e="");var n=t.document.getElementById(A.ID);if(n)if(0<e.length){e=e.length>r.messageMaxLength?W(e).substring(0,r.messageMaxLength)+"...":W(e);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=e;else{var s=t.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=e,n.appendChild(s)}}else B("Where is the new message?")}(e)}},Block:{init:function(t){s=j(!0,U,t),V(st,"NotiflixBlockInternalCSS")},merge:function(t){return s?void(s=j(!0,s,t)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(t,e,n){at(!0,R,t,e,n)},hourglass:function(t,e,n){at(!0,O,t,e,n)},circle:function(t,e,n){at(!0,L,t,e,n)},arrows:function(t,e,n){at(!0,D,t,e,n)},dots:function(t,e,n){at(!0,M,t,e,n)},pulse:function(t,e,n){at(!0,P,t,e,n)},remove:function(t,e){"number"!=typeof e&&(e=0),at(!1,null,t,null,null,e)}}};return"object"==typeof t.Notiflix?j(!0,t.Notiflix,{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}):{Notify:ct.Notify,Report:ct.Report,Confirm:ct.Confirm,Loading:ct.Loading,Block:ct.Block}},"function"==typeof define&&define.amd?define([],(function(){return yn(gn)})):"object"==typeof vn?vn=yn(gn):gn.Notiflix=yn(gn);const wn=document.querySelector(".categories__list");function xn(t){const e=t.map(bn).join("");wn.insertAdjacentHTML("beforeend",e)}document.querySelector(".categories__list");const kn=new un;function En(t,e){try{const n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Error: ",t.message)}}document.addEventListener("DOMContentLoaded",(async t=>{try{const{data:t}=await kn.fetchBooksCategoryList();if(1===t.lenght)return void e(vn).Notify.info();xn(t)}catch(t){e(vn).Notify.warning(),console.log(t)}}));const In=document.querySelector("[data-modal]"),Tn=(document.querySelector("[data-modal-close]"),document.querySelector(".modal-book__btn")),Nn=document.querySelector(".modal-2");let Cn;document.addEventListener("click",(t=>{!async function(t){const e=await Sn.fetchBookByID(t),{book_image:n,title:i,author:r,description:s,buy_links:o}=e.data;console.log(o.find((t=>"Amazon"===t.name)).url),Cn=e.data;const a=`\n\n      <div class="modal-book">\n        <img class="modal-book__img" src="${n}" alt="Book cover" loading="lazy"/>\n        <div class="modal-book__description">\n          <div class="modal-book__info">\n            <h2 class="modal-book__title">${i}</h2>\n            <h3 class="modal-book__author">${r}</h3>\n            <p class="modal-book__about">${s||"N/A"}</p>\n          </div>\n          <div>\n            <ul class="book-stores">\n              <li class="book-stores__item">\n                <a class="book-stores__link" href="${o.find((t=>"Amazon"===t.name)).url}" target="_blank" rel="noopener noreferrer"\n                  aria-label="Amazon icon">\n                  <svg class="book-stores__icon" width="62" height="19">\n                  <use href="./images/icons.svg#icon-amazon"></use></svg></a>\n              </li>\n              <li class="book-stores__item">\n                <a class="book-stores__link" href="" target="_blank" rel="noopener noreferrer"\n                  aria-label="Apple Books icon">\n                  <svg class="book-stores__icon" width="32" height="32">\n                  <use href="./images/icons.svg#icon-ibook"></use></svg></a>\n              </li>\n              <li class="book-stores__item">\n                <a class="book-stores__link" href="" target="_blank" rel="noopener noreferrer"\n                  aria-label="Bookshop icon">\n                  <svg class="book-stores__icon" width="38" height="36">\n                  <use href="./images/icons.svg#icon-book-shop"></use></svg></a>\n              </li>\n            </ul>   \n          </div>\n        </div>\n      </div>  `;Nn.insertAdjacentHTML("afterbegin",a),In.classList.remove("is-hidden"),document.addEventListener("keydown",handleCloseModal),Nn.addEventListener("click",_n),Tn.addEventListener("click",function(t){const e={...t},n=JSON.parse(localStorage.getItem("bookarray"))||[];n.push(e),En("bookarray",n),isBookInShoppingList=!0}(Cn))}(t.target.parentElement.parentElement.getAttribute("data-id"))}));const Sn=new un;function _n(){In.classList.add("is-hidden"),Nn.removeEventListener("click",_n),Nn.innerHTML=""}const An=document.querySelector(".theme-switcher"),Rn=document.querySelector("header"),On=document.querySelector("nav"),Ln=document.querySelector("#iconLogo"),Dn=document.querySelector("svg.icon__lock"),Mn=document.querySelectorAll("button.categories__btn"),Pn=document.querySelector("h2.books-section__title"),Un=document.querySelectorAll("button.list-markup__see-more-button");An.addEventListener("click",(function(t){document.body.classList.toggle("dark"),Rn.classList.toggle("dark"),On.classList.toggle("dark"),Ln.setAttribute("href",t.target.checked?"/icons.adfc4680.svg#icon-logo-dark":"/icons.adfc4680.svg#icon-logo"),Dn.classList.toggle("dark"),Mn.forEach((function(t){t.classList.toggle("dark")})),Pn.classList.toggle("dark"),Un.forEach((function(t){t.classList.toggle("dark")}))}));var Bn,Fn,zn,Vn=Bn={};function jn(){throw new Error("setTimeout has not been defined")}function Wn(){throw new Error("clearTimeout has not been defined")}function qn(t){if(Fn===setTimeout)return setTimeout(t,0);if((Fn===jn||!Fn)&&setTimeout)return Fn=setTimeout,setTimeout(t,0);try{return Fn(t,0)}catch(e){try{return Fn.call(null,t,0)}catch(e){return Fn.call(this,t,0)}}}!function(){try{Fn="function"==typeof setTimeout?setTimeout:jn}catch(t){Fn=jn}try{zn="function"==typeof clearTimeout?clearTimeout:Wn}catch(t){zn=Wn}}();var $n,Hn=[],Kn=!1,Gn=-1;function Xn(){Kn&&$n&&(Kn=!1,$n.length?Hn=$n.concat(Hn):Gn=-1,Hn.length&&Qn())}function Qn(){if(!Kn){var t=qn(Xn);Kn=!0;for(var e=Hn.length;e;){for($n=Hn,Hn=[];++Gn<e;)$n&&$n[Gn].run();Gn=-1,e=Hn.length}$n=null,Kn=!1,function(t){if(zn===clearTimeout)return clearTimeout(t);if((zn===Wn||!zn)&&clearTimeout)return zn=clearTimeout,clearTimeout(t);try{zn(t)}catch(e){try{return zn.call(null,t)}catch(e){return zn.call(this,t)}}}(t)}}function Jn(t,e){this.fun=t,this.array=e}function Yn(){}Vn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Hn.push(new Jn(t,e)),1!==Hn.length||Kn||qn(Qn)},Jn.prototype.run=function(){this.fun.apply(null,this.array)},Vn.title="browser",Vn.browser=!0,Vn.env={},Vn.argv=[],Vn.version="",Vn.versions={},Vn.on=Yn,Vn.addListener=Yn,Vn.once=Yn,Vn.off=Yn,Vn.removeListener=Yn,Vn.removeAllListeners=Yn,Vn.emit=Yn,Vn.prependListener=Yn,Vn.prependOnceListener=Yn,Vn.listeners=function(t){return[]},Vn.binding=function(t){throw new Error("process.binding is not supported")},Vn.cwd=function(){return"/"},Vn.chdir=function(t){throw new Error("process.chdir is not supported")},Vn.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zn=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},ti={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),i.push(n[l],n[u],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw new ei;const c=r<<2|s>>4;if(i.push(c),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ni=function(t){return function(t){const e=Zn(t);return ti.encodeByteArray(e,!0)}(t).replace(/\./g,"")},ii=function(t){try{return ti.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ri=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,si=()=>{try{return ri()||(()=>{if(void 0===Bn||void 0===Bn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&ii(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},oi=t=>{var e,n;return null===(n=null===(e=si())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},ai=t=>{const e=oi(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ci=t=>{var e;return null===(e=si())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ni(JSON.stringify({alg:"none",type:"JWT"})),ni(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function fi(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function di(){const t=hi();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pi(){try{return"object"==typeof indexedDB}catch(t){return!1}}class mi extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(yi,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new mi(i,o,n)}}const yi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(wi(n)&&wi(s)){if(!bi(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function wi(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ki(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function Ei(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e){const n=new Ti(t,e);return n.subscribe.bind(n)}class Ti{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Ni),void 0===i.error&&(i.error=Ni),void 0===i.complete&&(i.complete=Ni);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ni(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ci(t){return t&&t._delegate?t._delegate:t}class Si{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new li;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ai{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new _i(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=[];var Oi,Li;(Li=Oi||(Oi={}))[Li.DEBUG=0]="DEBUG",Li[Li.VERBOSE=1]="VERBOSE",Li[Li.INFO=2]="INFO",Li[Li.WARN=3]="WARN",Li[Li.ERROR=4]="ERROR",Li[Li.SILENT=5]="SILENT";const Di={debug:Oi.DEBUG,verbose:Oi.VERBOSE,info:Oi.INFO,warn:Oi.WARN,error:Oi.ERROR,silent:Oi.SILENT},Mi=Oi.INFO,Pi={[Oi.DEBUG]:"log",[Oi.VERBOSE]:"log",[Oi.INFO]:"info",[Oi.WARN]:"warn",[Oi.ERROR]:"error"},Ui=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=Pi[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class Bi{constructor(t){this.name=t,this._logLevel=Mi,this._logHandler=Ui,this._userLogHandler=null,Ri.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Oi))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Di[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Oi.DEBUG,...t),this._logHandler(this,Oi.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Oi.VERBOSE,...t),this._logHandler(this,Oi.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Oi.INFO,...t),this._logHandler(this,Oi.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Oi.WARN,...t),this._logHandler(this,Oi.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Oi.ERROR,...t),this._logHandler(this,Oi.ERROR,...t)}}let Fi,zi;const Vi=new WeakMap,ji=new WeakMap,Wi=new WeakMap,qi=new WeakMap,$i=new WeakMap;let Hi={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ji.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Wi.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xi(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ki(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(zi||(zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Qi(this),e),Xi(Vi.get(this))}:function(...e){return Xi(t.apply(Qi(this),e))}:function(e,...n){const i=t.call(Qi(this),e,...n);return Wi.set(i,e.sort?e.sort():[e]),Xi(i)}}function Gi(t){return"function"==typeof t?Ki(t):(t instanceof IDBTransaction&&function(t){if(ji.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));ji.set(t,e)}(t),e=t,(Fi||(Fi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Hi):t);var e}function Xi(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Xi(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&Vi.set(e,t)})).catch((()=>{})),$i.set(e,t),e}(t);if(qi.has(t))return qi.get(t);const e=Gi(t);return e!==t&&(qi.set(t,e),$i.set(e,t)),e}const Qi=t=>$i.get(t);function Ji(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Xi(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Xi(o.result),t.oldVersion,t.newVersion,Xi(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Yi=["get","getKey","getAll","getAllKeys","count"],Zi=["put","add","delete","clear"],tr=new Map;function er(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(tr.get(e))return tr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Zi.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Yi.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return tr.set(e,s),s}Hi=(t=>({...t,get:(e,n,i)=>er(e,n)||t.get(e,n,i),has:(e,n)=>!!er(e,n)||t.has(e,n)}))(Hi);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ir=new Bi("@firebase/app"),rr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},sr=new Map,or=new Map;function ar(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cr(t){const e=t.name;if(or.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;or.set(e,t);for(const e of sr.values())ar(e,t);return!0}function lr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ur=new gi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Si("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw ur.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=si())||void 0===s?void 0:s.config),!n)throw ur.create("no-options");const o=sr.get(r);if(o){if(bi(n,o.options)&&bi(i,o.config))return o;throw ur.create("duplicate-app",{appName:r})}const a=new Ai(r);for(const t of or.values())a.addComponent(t);const c=new hr(n,i,a);return sr.set(r,c),c}function dr(t="[DEFAULT]"){const e=sr.get(t);if(!e&&"[DEFAULT]"===t)return fr();if(!e)throw ur.create("no-app",{appName:t});return e}function pr(t,e,n){var i;let r=null!==(i=rr[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ir.warn(t.join(" "))}cr(new Si(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let mr=null;function gr(){return mr||(mr=Ji("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw ur.create("idb-open",{originalErrorMessage:t.message})}))),mr}async function yr(t,e){try{const n=(await gr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,vr(t)),n.done}catch(t){if(t instanceof mi)ir.warn(t.message);else{const e=ur.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ir.warn(e.message)}}}function vr(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new xr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=wr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=wr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),kr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),kr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ni(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wr(){return(new Date).toISOString().substring(0,10)}class xr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!pi()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await gr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(vr(t))}catch(t){if(t instanceof mi)ir.warn(t.message);else{const e=ur.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ir.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function kr(t){return ni(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er;Er="",cr(new Si("platform-logger",(t=>new nr(t)),"PRIVATE")),cr(new Si("heartbeat",(t=>new br(t)),"PRIVATE")),pr("@firebase/app","0.9.7",Er),pr("@firebase/app","0.9.7","esm2017"),pr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
pr("firebase","9.19.1","app");var Ir,Tr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Nr={},Cr=Cr||{},Sr=Tr||self;function _r(){}function Ar(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Rr(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Or="closure_uid_"+(1e9*Math.random()>>>0),Lr=0;function Dr(t,e,n){return t.call.apply(t.bind,arguments)}function Mr(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Pr(t,e,n){return(Pr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Dr:Mr).apply(null,arguments)}function Ur(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Br(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Fr(){this.s=this.s,this.o=this.o}Fr.prototype.s=!1,Fr.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Or)&&t[Or]||(t[Or]=++Lr))},Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zr=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function jr(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Ar(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function Wr(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Wr.prototype.h=function(){this.defaultPrevented=!0};var qr=function(){if(!Sr.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Sr.addEventListener("test",_r,e),Sr.removeEventListener("test",_r,e)}catch(t){}return t}();function $r(t){return/^[\s\xa0]*$/.test(t)}var Hr=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kr(t,e){return t<e?-1:t>e?1:0}function Gr(){var t=Sr.navigator;return t&&(t=t.userAgent)?t:""}function Xr(t){return-1!=Gr().indexOf(t)}function Qr(t){return Qr[" "](t),t}Qr[" "]=_r;var Jr,Yr,Zr=Xr("Opera"),ts=Xr("Trident")||Xr("MSIE"),es=Xr("Edge"),ns=es||ts,is=Xr("Gecko")&&!(-1!=Gr().toLowerCase().indexOf("webkit")&&!Xr("Edge"))&&!(Xr("Trident")||Xr("MSIE"))&&!Xr("Edge"),rs=-1!=Gr().toLowerCase().indexOf("webkit")&&!Xr("Edge");function ss(){var t=Sr.document;return t?t.documentMode:void 0}t:{var os="",as=(Yr=Gr(),is?/rv:([^\);]+)(\)|;)/.exec(Yr):es?/Edge\/([\d\.]+)/.exec(Yr):ts?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Yr):rs?/WebKit\/(\S+)/.exec(Yr):Zr?/(?:Version)[ \/]?(\S+)/.exec(Yr):void 0);if(as&&(os=as?as[1]:""),ts){var cs=ss();if(null!=cs&&cs>parseFloat(os)){Jr=String(cs);break t}}Jr=os}var ls,us={};function hs(){return function(t){var e=us;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Hr(String(Jr)).split("."),n=Hr("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Kr(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Kr(0==r[2].length,0==s[2].length)||Kr(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(Sr.document&&ts){var fs=ss();ls=fs||(parseInt(Jr,10)||void 0)}else ls=void 0;var ds=ls;function ps(t,e){if(Wr.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(is){t:{try{Qr(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ms[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ps.X.h.call(this)}}Br(ps,Wr);var ms={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gs="closure_listenable_"+(1e6*Math.random()|0),ys=0;function vs(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++ys,this.ba=this.ea=!1}function bs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ws(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function xs(t){const e={};for(const n in t)e[n]=t[n];return e}const ks="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Es(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<ks.length;e++)n=ks[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Is(t){this.src=t,this.g={},this.h=0}function Ts(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=zr(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(bs(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ns(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}Is.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Ns(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new vs(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var Cs="closure_lm_"+(1e6*Math.random()|0),Ss={};function _s(t,e,n,i,r){if(i&&i.once)return Rs(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)_s(t,e[s],n,i,r);return null}return n=Bs(n),t&&t[gs]?t.N(e,n,Rr(i)?!!i.capture:!!i,r):As(t,e,n,!1,i,r)}function As(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Rr(r)?!!r.capture:!!r,a=Ps(t);if(a||(t[Cs]=a=new Is(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Ms;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)qr||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ds(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Rs(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Rs(t,e[s],n,i,r);return null}return n=Bs(n),t&&t[gs]?t.O(e,n,Rr(i)?!!i.capture:!!i,r):As(t,e,n,!0,i,r)}function Os(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Os(t,e[s],n,i,r);else i=Rr(i)?!!i.capture:!!i,n=Bs(n),t&&t[gs]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ns(s=t.g[e],n,i,r))&&(bs(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Ps(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ns(e,n,i,r)),(n=-1<t?e[t]:null)&&Ls(n))}function Ls(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[gs])Ts(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ds(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ps(e))?(Ts(n,t),0==n.h&&(n.src=null,e[Cs]=null)):bs(t)}}}function Ds(t){return t in Ss?Ss[t]:Ss[t]="on"+t}function Ms(t,e){if(t.ba)t=!0;else{e=new ps(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Ls(t),t=n.call(i,e)}return t}function Ps(t){return(t=t[Cs])instanceof Is?t:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bs(t){return"function"==typeof t?t:(t[Us]||(t[Us]=function(e){return t.handleEvent(e)}),t[Us])}function Fs(){Fr.call(this),this.i=new Is(this),this.P=this,this.I=null}function zs(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Wr(e,t);else if(e instanceof Wr)e.target=e.target||t;else{var r=e;Es(e=new Wr(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Vs(o,i,!0,e)&&r}if(r=Vs(o=e.g=t,i,!0,e)&&r,r=Vs(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Vs(o=e.g=n[s],i,!1,e)&&r}function Vs(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Ts(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}Br(Fs,Fr),Fs.prototype[gs]=!0,Fs.prototype.removeEventListener=function(t,e,n,i){Os(this,t,e,n,i)},Fs.prototype.M=function(){if(Fs.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)bs(n[i]);delete e.g[t],e.h--}}this.I=null},Fs.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Fs.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var js=Sr.JSON.stringify;function Ws(){var t=Qs;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var qs,$s=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Hs),(t=>t.reset()));class Hs{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ks(t){Sr.setTimeout((()=>{throw t}),0)}function Gs(t,e){qs||function(){var t=Sr.Promise.resolve(void 0);qs=function(){t.then(Js)}}(),Xs||(qs(),Xs=!0),Qs.add(t,e)}var Xs=!1,Qs=new class{constructor(){this.h=this.g=null}add(t,e){const n=$s.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Js(){for(var t;t=Ws();){try{t.h.call(t.g)}catch(t){Ks(t)}var e=$s;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xs=!1}function Ys(t,e){Fs.call(this),this.h=t||1,this.g=e||Sr,this.j=Pr(this.lb,this),this.l=Date.now()}function Zs(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function to(t,e,n){if("function"==typeof t)n&&(t=Pr(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Pr(t.handleEvent,t)}return 2147483647<Number(e)?-1:Sr.setTimeout(t,e||0)}function eo(t){t.g=to((()=>{t.g=null,t.i&&(t.i=!1,eo(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Br(Ys,Fs),(Ir=Ys.prototype).ca=!1,Ir.R=null,Ir.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zs(this,"tick"),this.ca&&(Zs(this),this.start()))}},Ir.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ir.M=function(){Ys.X.M.call(this),Zs(this),delete this.g};class no extends Fr{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:eo(this)}M(){super.M(),this.g&&(Sr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function io(t){Fr.call(this),this.h=t,this.g={}}Br(io,Fr);var ro=[];function so(t,e,n,i){Array.isArray(n)||(n&&(ro[0]=n.toString()),n=ro);for(var r=0;r<n.length;r++){var s=_s(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oo(t){ws(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ls(t)}),t),t.g={}}function ao(){this.g=!0}function co(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return js(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}io.prototype.M=function(){io.X.M.call(this),oo(this)},io.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ao.prototype.Aa=function(){this.g=!1},ao.prototype.info=function(){};var lo={},uo=null;function ho(){return uo=uo||new Fs}function fo(t){Wr.call(this,lo.Pa,t)}function po(t){const e=ho();zs(e,new fo(e))}function mo(t,e){Wr.call(this,lo.STAT_EVENT,t),this.stat=e}function go(t){const e=ho();zs(e,new mo(e,t))}function yo(t,e){Wr.call(this,lo.Qa,t),this.size=e}function vo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Sr.setTimeout((function(){t()}),e)}lo.Pa="serverreachability",Br(fo,Wr),lo.STAT_EVENT="statevent",Br(mo,Wr),lo.Qa="timingevent",Br(yo,Wr);var bo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},wo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xo(){}function ko(t){return t.h||(t.h=t.i())}function Eo(){}xo.prototype.h=null;var Io,To={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function No(){Wr.call(this,"d")}function Co(){Wr.call(this,"c")}function So(){}function _o(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new io(this),this.O=Ro,t=ns?125:void 0,this.T=new Ys(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ao}function Ao(){this.i=null,this.g="",this.h=!1}Br(No,Wr),Br(Co,Wr),Br(So,xo),So.prototype.g=function(){return new XMLHttpRequest},So.prototype.i=function(){return{}},Io=new So;var Ro=45e3,Oo={},Lo={};function Do(t,e,n){t.K=1,t.v=Zo(Go(e)),t.s=n,t.P=!0,Mo(t,null)}function Mo(t,e){t.F=Date.now(),Fo(t),t.A=Go(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),fa(n.i,"t",i),t.C=0,n=t.l.H,t.h=new Ao,t.g=hc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new no(Pr(t.La,t,t.g),t.N)),so(t.S,t.g,"readystatechange",t.ib),e=t.H?xs(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),po(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Po(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Uo(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Bo(t,n),i==Lo){4==e&&(t.o=4,go(14),r=!1),co(t.j,t.m,null,"[Incomplete Response]");break}if(i==Oo){t.o=4,go(15),co(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}co(t.j,t.m,i,null),qo(t,i)}Po(t)&&i!=Lo&&i!=Oo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,go(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ic(e),e.K=!0,go(11))):(co(t.j,t.m,n,"[Invalid Chunked Response]"),Wo(t),jo(t))}function Bo(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Lo:(n=Number(e.substring(n,i)),isNaN(n)?Oo:(i+=1)+n>e.length?Lo:(e=e.substr(i,n),t.C=i+n,e))}function Fo(t){t.V=Date.now()+t.O,zo(t,t.O)}function zo(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=vo(Pr(t.gb,t),e)}function Vo(t){t.B&&(Sr.clearTimeout(t.B),t.B=null)}function jo(t){0==t.l.G||t.I||oc(t.l,t)}function Wo(t){Vo(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Zs(t.T),oo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qo(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||va(n.h,t)))if(!t.J&&va(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sc(n),Xa(n)}nc(n),go(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=vo(Pr(n.cb,n),6e3));if(1>=ya(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else cc(n,11)}else if((t.J||n.g==t)&&sc(n),!$r(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=l[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ba(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Yo(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=uc(i,i.H?i.ka:null,i.V),o.J){wa(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Vo(a),Fo(a)),i.g=o}else ec(i);0<n.i.length&&Ja(n)}else"stop"!=l[0]&&"close"!=l[0]||cc(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?cc(n,7):Ga(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}po()}catch(t){}}function $o(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Ar(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Ar(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Ar(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Ir=_o.prototype).setTimeout=function(t){this.O=t},Ir.ib=function(t){t=t.target;const e=this.L;e&&3==ja(t)?e.l():this.La(t)},Ir.La=function(t){try{if(t==this.g)t:{const u=ja(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||ns||this.g&&(this.h.h||this.g.fa()||Wa(this.g)))){this.I||4!=u||7==e||po(),Vo(this);var n=this.g.aa();this.Y=n;e:if(Po(this)){var i=Wa(this.g);t="";var r=i.length,s=4==ja(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Wo(this),jo(this);var o="";break e}this.h.i=new Sr.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$r(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,go(12),Wo(this),jo(this);break t}co(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qo(this,n)}this.P?(Uo(this,u,o),ns&&this.i&&3==u&&(so(this.S,this.T,"tick",this.hb),this.T.start())):(co(this.j,this.m,o,null),qo(this,o)),4==u&&Wo(this),this.i&&!this.I&&(4==u?oc(this.l,this):(this.i=!1,Fo(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,go(12)):(this.o=0,go(13)),Wo(this),jo(this)}}}catch(t){}},Ir.hb=function(){if(this.g){var t=ja(this.g),e=this.g.fa();this.C<e.length&&(Vo(this),Uo(this,t,e),this.i&&4!=t&&Fo(this))}},Ir.cancel=function(){this.I=!0,Wo(this)},Ir.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(po(),go(17)),Wo(this),this.o=2,jo(this)):zo(this,this.V-t)};var Ho=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ko(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ko){this.h=void 0!==e?e:t.h,Xo(this,t.j),this.s=t.s,this.g=t.g,Qo(this,t.m),this.l=t.l,e=t.i;var n=new ca;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Jo(this,n),this.o=t.o}else t&&(n=String(t).match(Ho))?(this.h=!!e,Xo(this,n[1]||"",!0),this.s=ta(n[2]||""),this.g=ta(n[3]||"",!0),Qo(this,n[4]),this.l=ta(n[5]||"",!0),Jo(this,n[6]||"",!0),this.o=ta(n[7]||"")):(this.h=!!e,this.i=new ca(null,this.h))}function Go(t){return new Ko(t)}function Xo(t,e,n){t.j=n?ta(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Jo(t,e,n){e instanceof ca?(t.i=e,function(t,e){e&&!t.j&&(la(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ua(this,e),fa(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ea(e,oa)),t.i=new ca(e,t.h))}function Yo(t,e,n){t.i.set(e,n)}function Zo(t){return Yo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ta(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ea(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,na),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function na(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ko.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ea(e,ia,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ea(e,ia,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ea(n,"/"==n.charAt(0)?sa:ra,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ea(n,aa)),t.join("")};var ia=/[#\/\?@]/g,ra=/[#\?:]/g,sa=/[#\?]/g,oa=/[#\?@]/g,aa=/#/g;function ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function la(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ua(t,e){la(t),e=da(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ha(t,e){return la(t),e=da(t,e),t.g.has(e)}function fa(t,e,n){ua(t,e),0<n.length&&(t.i=null,t.g.set(da(t,e),Vr(n)),t.h+=n.length)}function da(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ir=ca.prototype).add=function(t,e){la(this),this.i=null,t=da(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ir.forEach=function(t,e){la(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Ir.oa=function(){la(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Ir.W=function(t){la(this);let e=[];if("string"==typeof t)ha(this,t)&&(e=e.concat(this.g.get(da(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ir.set=function(t,e){return la(this),this.i=null,ha(this,t=da(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ir.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Ir.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function pa(t){this.l=t||ma,Sr.PerformanceNavigationTiming?t=0<(t=Sr.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Sr.g&&Sr.g.Ga&&Sr.g.Ga()&&Sr.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ma=10;function ga(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ya(t){return t.h?1:t.g?t.g.size:0}function va(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ba(t,e){t.g?t.g.add(e):t.h=e}function wa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vr(t.i)}function ka(){}function Ea(){this.g=new ka}function Ia(t,e,n){const i=n||"";try{$o(t,(function(t,n){let r=t;Rr(t)&&(r=js(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Ta(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Na(t){this.l=t.ac||null,this.j=t.jb||!1}function Ca(t,e){Fs.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pa.prototype.cancel=function(){if(this.i=xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ka.prototype.stringify=function(t){return Sr.JSON.stringify(t,void 0)},ka.prototype.parse=function(t){return Sr.JSON.parse(t,void 0)},Br(Na,xo),Na.prototype.g=function(){return new Ca(this.l,this.j)},Na.prototype.i=function(t){return function(){return t}}({}),Br(Ca,Fs);var Sa=0;function _a(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Aa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ra(t)}function Ra(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ir=Ca.prototype).open=function(t,e){if(this.readyState!=Sa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ra(this)},Ir.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Sr).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Ir.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Aa(this)),this.readyState=Sa},Ir.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Sr.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_a(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Ir.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Aa(this):Ra(this),3==this.readyState&&_a(this)}},Ir.Va=function(t){this.g&&(this.response=this.responseText=t,Aa(this))},Ir.Ua=function(t){this.g&&(this.response=t,Aa(this))},Ir.ga=function(){this.g&&Aa(this)},Ir.setRequestHeader=function(t,e){this.v.append(t,e)},Ir.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ir.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ca.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Oa=Sr.JSON.parse;function La(t){Fs.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Da,this.K=this.L=!1}Br(La,Fs);var Da="",Ma=/^https?$/i,Pa=["POST","PUT"];function Ua(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ba(t),za(t)}function Ba(t){t.D||(t.D=!0,zs(t,"complete"),zs(t,"error"))}function Fa(t){if(t.h&&void 0!==Cr&&(!t.C[1]||4!=ja(t)||2!=t.aa()))if(t.v&&4==ja(t))to(t.Ha,0,t);else if(zs(t,"readystatechange"),4==ja(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(Ho)[1]||null;if(!r&&Sr.self&&Sr.self.location){var s=Sr.self.location.protocol;r=s.substr(0,s.length-1)}i=!Ma.test(r?r.toLowerCase():"")}n=i}if(n)zs(t,"complete"),zs(t,"success");else{t.m=6;try{var o=2<ja(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Ba(t)}}finally{za(t)}}}function za(t,e){if(t.g){Va(t);const n=t.g,i=t.C[0]?_r:null;t.g=null,t.C=null,e||zs(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Va(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Sr.clearTimeout(t.A),t.A=null)}function ja(t){return t.g?t.g.readyState:0}function Wa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Da:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qa(t){let e="";return ws(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function $a(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=qa(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Yo(t,e,n))}function Ha(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ka(t){this.Ca=0,this.i=[],this.j=new ao,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ha("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ha("baseRetryDelayMs",5e3,t),this.bb=Ha("retryDelaySeedMs",1e4,t),this.$a=Ha("forwardChannelMaxRetries",2,t),this.ta=Ha("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new pa(t&&t.concurrentRequestLimit),this.Fa=new Ea,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ga(t){if(Qa(t),3==t.G){var e=t.U++,n=Go(t.F);Yo(n,"SID",t.I),Yo(n,"RID",e),Yo(n,"TYPE","terminate"),Za(t,n),(e=new _o(t,t.j,e,void 0)).K=2,e.v=Zo(Go(n)),n=!1,Sr.navigator&&Sr.navigator.sendBeacon&&(n=Sr.navigator.sendBeacon(e.v.toString(),"")),!n&&Sr.Image&&((new Image).src=e.v,n=!0),n||(e.g=hc(e.l,null),e.g.da(e.v)),e.F=Date.now(),Fo(e)}lc(t)}function Xa(t){t.g&&(ic(t),t.g.cancel(),t.g=null)}function Qa(t){Xa(t),t.u&&(Sr.clearTimeout(t.u),t.u=null),sc(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Sr.clearTimeout(t.m),t.m=null)}function Ja(t){ga(t.h)||t.m||(t.m=!0,Gs(t.Ja,t),t.C=0)}function Ya(t,e){var n;n=e?e.m:t.U++;const i=Go(t.F);Yo(i,"SID",t.I),Yo(i,"RID",n),Yo(i,"AID",t.T),Za(t,i),t.o&&t.s&&$a(i,t.o,t.s),n=new _o(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=tc(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ba(t.h,n),Do(n,i,e)}function Za(t,e){t.ia&&ws(t.ia,(function(t,n){Yo(e,n,t)})),t.l&&$o({},(function(t,n){Yo(e,n,t)}))}function tc(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Pr(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Ia(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ec(t){t.g||t.u||(t.Z=1,Gs(t.Ia,t),t.A=0)}function nc(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=vo(Pr(t.Ia,t),ac(t,t.A)),t.A++,!0)}function ic(t){null!=t.B&&(Sr.clearTimeout(t.B),t.B=null)}function rc(t){t.g=new _o(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Go(t.sa);Yo(e,"RID","rpc"),Yo(e,"SID",t.I),Yo(e,"CI",t.L?"0":"1"),Yo(e,"AID",t.T),Yo(e,"TYPE","xmlhttp"),Za(t,e),t.o&&t.s&&$a(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Zo(Go(e)),n.s=null,n.P=!0,Mo(n,t)}function sc(t){null!=t.v&&(Sr.clearTimeout(t.v),t.v=null)}function oc(t,e){var n=null;if(t.g==e){sc(t),ic(t),t.g=null;var i=2}else{if(!va(t.h,e))return;n=e.D,wa(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;zs(i=ho(),new yo(i,n)),Ja(t)}else ec(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(ya(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=vo(Pr(t.Ja,t,e),ac(t,t.C)),t.C++,0)))}(t,e)||2==i&&nc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:cc(t,5);break;case 4:cc(t,10);break;case 3:cc(t,6);break;default:cc(t,2)}}function ac(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function cc(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Pr(t.kb,t);n||(n=new Ko("//www.google.com/images/cleardot.gif"),Sr.location&&"http"==Sr.location.protocol||Xo(n,"https"),Zo(n)),function(t,e){const n=new ao;if(Sr.Image){const i=new Image;i.onload=Ur(Ta,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Ur(Ta,n,i,"TestLoadImage: error",!1,e),i.onabort=Ur(Ta,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Ur(Ta,n,i,"TestLoadImage: timeout",!1,e),Sr.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else go(2);t.G=0,t.l&&t.l.va(e),lc(t),Qa(t)}function lc(t){if(t.G=0,t.la=[],t.l){const e=xa(t.h);0==e.length&&0==t.i.length||(jr(t.la,e),jr(t.la,t.i),t.h.i.length=0,Vr(t.i),t.i.length=0),t.l.ua()}}function uc(t,e,n){var i=n instanceof Ko?Go(n):new Ko(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Qo(i,i.m);else{var r=Sr.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ko(null,void 0);i&&Xo(s,i),e&&(s.g=e),r&&Qo(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Yo(i,n,e),Yo(i,"VER",t.ma),Za(t,i),i}function hc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new La(new Na({jb:!0})):new La(t.ra)).Ka(t.H),e}function fc(){}function dc(){if(ts&&!(10<=Number(ds)))throw Error("Environmental error: no available transport.")}function pc(t,e){Fs.call(this),this.g=new Ka(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$r(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$r(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new yc(this)}function mc(t){No.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function gc(){Co.call(this),this.status=1}function yc(t){this.g=t}(Ir=La.prototype).Ka=function(t){this.L=t},Ir.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Io.g(),this.C=this.u?ko(this.u):ko(Io),this.g.onreadystatechange=Pr(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ua(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Sr.FormData&&t instanceof Sr.FormData,!(0<=zr(Pa,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Va(this),0<this.B&&((this.K=function(t){return ts&&hs()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pr(this.qa,this)):this.A=to(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ua(this,t)}},Ir.qa=function(){void 0!==Cr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zs(this,"timeout"),this.abort(8))},Ir.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,zs(this,"complete"),zs(this,"abort"),za(this))},Ir.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),za(this,!0)),La.X.M.call(this)},Ir.Ha=function(){this.s||(this.F||this.v||this.l?Fa(this):this.fb())},Ir.fb=function(){Fa(this)},Ir.aa=function(){try{return 2<ja(this)?this.g.status:-1}catch(t){return-1}},Ir.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ir.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Oa(e)}},Ir.Ea=function(){return this.m},Ir.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ir=Ka.prototype).ma=8,Ir.G=1,Ir.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new _o(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=xs(s),Es(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=tc(this,r,e),Yo(n=Go(this.F),"RID",t),Yo(n,"CVER",22),this.D&&Yo(n,"X-HTTP-Session-Id",this.D),Za(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(qa(s)))+"&"+e:this.o&&$a(n,this.o,s)),ba(this.h,r),this.Ya&&Yo(n,"TYPE","init"),this.O?(Yo(n,"$req",e),Yo(n,"SID","null"),r.Z=!0,Do(r,n,null)):Do(r,n,e),this.G=2}}else 3==this.G&&(t?Ya(this,t):0==this.i.length||ga(this.h)||Ya(this))},Ir.Ia=function(){if(this.u=null,rc(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=vo(Pr(this.eb,this),t)}},Ir.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,go(10),Xa(this),rc(this))},Ir.cb=function(){null!=this.v&&(this.v=null,Xa(this),nc(this),go(19))},Ir.kb=function(t){t?(this.j.info("Successfully pinged google.com"),go(2)):(this.j.info("Failed to ping google.com"),go(1))},(Ir=fc.prototype).xa=function(){},Ir.wa=function(){},Ir.va=function(){},Ir.ua=function(){},Ir.Ra=function(){},dc.prototype.g=function(t,e){return new pc(t,e)},Br(pc,Fs),pc.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;go(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=uc(t,null,t.V),Ja(t)},pc.prototype.close=function(){Ga(this.g)},pc.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=js(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Ja(e)},pc.prototype.M=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,pc.X.M.call(this)},Br(mc,No),Br(gc,Co),Br(yc,fc),yc.prototype.xa=function(){zs(this.g,"a")},yc.prototype.wa=function(t){zs(this.g,new mc(t))},yc.prototype.va=function(t){zs(this.g,new gc)},yc.prototype.ua=function(){zs(this.g,"b")},dc.prototype.createWebChannel=dc.prototype.g,pc.prototype.send=pc.prototype.u,pc.prototype.open=pc.prototype.m,pc.prototype.close=pc.prototype.close,bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,wo.COMPLETE="complete",Eo.EventType=To,To.OPEN="a",To.CLOSE="b",To.ERROR="c",To.MESSAGE="d",Fs.prototype.listen=Fs.prototype.N,La.prototype.listenOnce=La.prototype.O,La.prototype.getLastError=La.prototype.Oa,La.prototype.getLastErrorCode=La.prototype.Ea,La.prototype.getStatus=La.prototype.aa,La.prototype.getResponseJson=La.prototype.Sa,La.prototype.getResponseText=La.prototype.fa,La.prototype.send=La.prototype.da,La.prototype.setWithCredentials=La.prototype.Ka;var vc=Nr.createWebChannelTransport=function(){return new dc},bc=Nr.getStatEventTarget=function(){return ho()},wc=Nr.ErrorCode=bo,xc=Nr.EventType=wo,kc=Nr.Event=lo,Ec=Nr.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ic=Nr.FetchXmlHttpFactory=Na,Tc=Nr.WebChannel=Eo,Nc=Nr.XhrIo=La;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Cc.UNAUTHENTICATED=new Cc(null),Cc.GOOGLE_CREDENTIALS=new Cc("google-credentials-uid"),Cc.FIRST_PARTY=new Cc("first-party-uid"),Cc.MOCK_USER=new Cc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Sc="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Bi("@firebase/firestore");function Ac(){return _c.logLevel}function Rc(t,...e){if(_c.logLevel<=Oi.DEBUG){const n=e.map(Dc);_c.debug(`Firestore (${Sc}): ${t}`,...n)}}function Oc(t,...e){if(_c.logLevel<=Oi.ERROR){const n=e.map(Dc);_c.error(`Firestore (${Sc}): ${t}`,...n)}}function Lc(t,...e){if(_c.logLevel<=Oi.WARN){const n=e.map(Dc);_c.warn(`Firestore (${Sc}): ${t}`,...n)}}function Dc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t="Unexpected state"){const e=`FIRESTORE (${Sc}) INTERNAL ASSERTION FAILED: `+t;throw Oc(e),new Error(e)}function Pc(t,e){t||Mc()}function Uc(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Fc extends mi{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Cc.UNAUTHENTICATED)))}shutdown(){}}class Wc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class qc{constructor(t){this.t=t,this.currentUser=Cc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new zc;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new zc,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Rc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Rc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new zc)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Rc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Pc("string"==typeof e.accessToken),new Vc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Pc(null===t||"string"==typeof t),new Cc(t)}}class $c{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=Cc.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Hc{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new $c(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Cc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Kc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gc{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&Rc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,Rc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Rc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?i(t):Rc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Pc("string"==typeof t.token),this.T=t.token,new Kc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Xc(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function Jc(t,e){return t<e?-1:t>e?1:0}function Yc(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Fc(Bc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Fc(Bc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Fc(Bc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Fc(Bc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Zc.fromMillis(Date.now())}static fromDate(t){return Zc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Zc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Jc(this.nanoseconds,t.nanoseconds):Jc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t){this.timestamp=t}static fromTimestamp(t){return new tl(t)}static min(){return new tl(new Zc(0,0))}static max(){return new tl(new Zc(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t,e,n){void 0===e?e=0:e>t.length&&Mc(),void 0===n?n=t.length-e:n>t.length-e&&Mc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===el.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof el?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class nl extends el{construct(t,e,n){return new nl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Fc(Bc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new nl(e)}static emptyPath(){return new nl([])}}const il=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rl extends el{construct(t,e,n){return new rl(t,e,n)}static isValidIdentifier(t){return il.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Fc(Bc.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Fc(Bc.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Fc(Bc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Fc(Bc.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rl(e)}static emptyPath(){return new rl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.path=t}static fromPath(t){return new sl(nl.fromString(t))}static fromName(t){return new sl(nl.fromString(t).popFirst(5))}static empty(){return new sl(nl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===nl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return nl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new sl(new nl(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}ol.UNKNOWN_ID=-1;function al(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=tl.fromTimestamp(1e9===i?new Zc(n+1,0):new Zc(n,i));return new ll(r,sl.empty(),e)}function cl(t){return new ll(t.readTime,t.key,-1)}class ll{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ll(tl.min(),sl.empty(),-1)}static max(){return new ll(tl.max(),sl.empty(),-1)}}function ul(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=sl.comparator(t.documentKey,e.documentKey),0!==n?n:Jc(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(t){if(t.code!==Bc.FAILED_PRECONDITION||t.message!==hl)throw t;Rc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Mc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new pl(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof pl?e:pl.resolve(e)}catch(t){return pl.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):pl.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):pl.reject(e)}static resolve(t){return new pl(((e,n)=>{e(t)}))}static reject(t){return new pl(((e,n)=>{n(t)}))}static waitFor(t){return new pl(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=pl.resolve(!1);for(const n of t)e=e.next((t=>t?pl.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new pl(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new pl(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function yl(t){return null==t}function vl(t){return 0===t&&1/t==-1/0}function bl(t){return"number"==typeof t&&Number.isInteger(t)&&!vl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gl.ct=-1;const wl=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kl=xl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function El(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Il(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,e){this.comparator=t,this.root=e||Sl.EMPTY}insert(t,e){return new Nl(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Sl.BLACK,null,null))}remove(t){return new Nl(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Sl.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cl(this.root,t,this.comparator,!0)}}class Cl{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Sl{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Sl.RED,this.left=null!=i?i:Sl.EMPTY,this.right=null!=r?r:Sl.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Sl(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Sl.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Sl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Sl.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Sl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Mc();if(this.right.isRed())throw Mc();const t=this.left.check();if(t!==this.right.check())throw Mc();return t+(this.isRed()?0:1)}}Sl.EMPTY=null,Sl.RED=!0,Sl.BLACK=!1,Sl.EMPTY=new class{constructor(){this.size=0}get key(){throw Mc()}get value(){throw Mc()}get color(){throw Mc()}get left(){throw Mc()}get right(){throw Mc()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Sl(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _l{constructor(t){this.comparator=t,this.data=new Nl(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(t){return new Al(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof _l))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new _l(this.comparator);return e.data=t,e}}class Al{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t){this.fields=t,t.sort(rl.comparator)}static empty(){return new Rl([])}unionWith(t){let e=new _l(rl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Rl(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Yc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ol("Invalid base64 string: "+t):t}}(t);return new Ll(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ll(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Jc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ll.EMPTY_BYTE_STRING=new Ll("");const Dl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ml(t){if(Pc(!!t),"string"==typeof t){let e=0;const n=Dl.exec(t);if(Pc(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Pl(t.seconds),nanos:Pl(t.nanos)}}function Pl(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ul(t){return"string"==typeof t?Ll.fromBase64String(t):Ll.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fl(t){const e=t.mapValue.fields.__previous_value__;return Bl(e)?Fl(e):e}function zl(t){const e=Ml(t.mapValue.fields.__local_write_time__.timestampValue);return new Zc(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jl&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ql(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bl(t)?4:iu(t)?9007199254740991:10:Mc()}function $l(t,e){if(t===e)return!0;const n=ql(t);if(n!==ql(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zl(t).isEqual(zl(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ml(t.timestampValue),i=Ml(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ul(t.bytesValue).isEqual(Ul(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Pl(t.geoPointValue.latitude)===Pl(e.geoPointValue.latitude)&&Pl(t.geoPointValue.longitude)===Pl(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Pl(t.integerValue)===Pl(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Pl(t.doubleValue),i=Pl(e.doubleValue);return n===i?vl(n)===vl(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Yc(t.arrayValue.values||[],e.arrayValue.values||[],$l);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(El(n)!==El(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!$l(n[t],i[t])))return!1;return!0}(t,e);default:return Mc()}}function Hl(t,e){return void 0!==(t.values||[]).find((t=>$l(t,e)))}function Kl(t,e){if(t===e)return 0;const n=ql(t),i=ql(e);if(n!==i)return Jc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Jc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Pl(t.integerValue||t.doubleValue),i=Pl(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Gl(t.timestampValue,e.timestampValue);case 4:return Gl(zl(t),zl(e));case 5:return Jc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ul(t),i=Ul(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Jc(n[t],i[t]);if(0!==e)return e}return Jc(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Jc(Pl(t.latitude),Pl(e.latitude));return 0!==n?n:Jc(Pl(t.longitude),Pl(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Kl(n[t],i[t]);if(e)return e}return Jc(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Wl.mapValue&&e===Wl.mapValue)return 0;if(t===Wl.mapValue)return 1;if(e===Wl.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=Jc(i[t],s[t]);if(0!==e)return e;const o=Kl(n[i[t]],r[s[t]]);if(0!==o)return o}return Jc(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Mc()}}function Gl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Jc(t,e);const n=Ml(t),i=Ml(e),r=Jc(n.seconds,i.seconds);return 0!==r?r:Jc(n.nanos,i.nanos)}function Xl(t){return Ql(t)}function Ql(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ml(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ul(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,sl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Ql(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Ql(t.fields[r])}`;return n+"}"}(t.mapValue):Mc()}function Jl(t){return!!t&&"integerValue"in t}function Yl(t){return!!t&&"arrayValue"in t}function Zl(t){return!!t&&"nullValue"in t}function tu(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function eu(t){return!!t&&"mapValue"in t}function nu(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Il(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=nu(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=nu(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iu(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t){this.value=t}static empty(){return new ru({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!eu(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=nu(e)}setAll(t){let e=rl.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=nu(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());eu(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $l(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Il(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new ru(nu(this.value))}}function su(t){const e=[];return Il(t.fields,((t,n)=>{const i=new rl([t]);if(eu(n)){const t=su(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Rl(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ou{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ou(t,0,tl.min(),tl.min(),tl.min(),ru.empty(),0)}static newFoundDocument(t,e,n,i){return new ou(t,1,e,tl.min(),n,i,0)}static newNoDocument(t,e){return new ou(t,2,e,tl.min(),tl.min(),ru.empty(),0)}static newUnknownDocument(t,e){return new ou(t,3,e,tl.min(),tl.min(),ru.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(tl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ru.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ru.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=tl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ou&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ou(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.position=t,this.inclusive=e}}function cu(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?sl.comparator(sl.fromName(o.referenceValue),n.key):Kl(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function lu(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$l(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e="asc"){this.field=t,this.dir=e}}function hu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{}class du extends fu{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new xu(t,e,n):"array-contains"===e?new Tu(t,n):"in"===e?new Nu(t,n):"not-in"===e?new Cu(t,n):"array-contains-any"===e?new Su(t,n):new du(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new ku(t,n):new Eu(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Kl(e,this.value)):null!==e&&ql(this.value)===ql(e)&&this.matchesComparison(Kl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Mc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pu extends fu{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new pu(t,e)}matches(t){return mu(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function mu(t){return"and"===t.op}function gu(t){return yu(t)&&mu(t)}function yu(t){for(const e of t.filters)if(e instanceof pu)return!1;return!0}function vu(t){if(t instanceof du)return t.field.canonicalString()+t.op.toString()+Xl(t.value);if(gu(t))return t.filters.map((t=>vu(t))).join(",");{const e=t.filters.map((t=>vu(t))).join(",");return`${t.op}(${e})`}}function bu(t,e){return t instanceof du?function(t,e){return e instanceof du&&t.op===e.op&&t.field.isEqual(e.field)&&$l(t.value,e.value)}(t,e):t instanceof pu?function(t,e){return e instanceof pu&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&bu(n,e.filters[i])),!0)}(t,e):void Mc()}function wu(t){return t instanceof du?function(t){return`${t.field.canonicalString()} ${t.op} ${Xl(t.value)}`}(t):t instanceof pu?function(t){return t.op.toString()+" {"+t.getFilters().map(wu).join(" ,")+"}"}(t):"Filter"}class xu extends du{constructor(t,e,n){super(t,e,n),this.key=sl.fromName(n.referenceValue)}matches(t){const e=sl.comparator(t.key,this.key);return this.matchesComparison(e)}}class ku extends du{constructor(t,e){super(t,"in",e),this.keys=Iu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Eu extends du{constructor(t,e){super(t,"not-in",e),this.keys=Iu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Iu(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>sl.fromName(t.referenceValue)))}class Tu extends du{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Yl(e)&&Hl(e.arrayValue,this.value)}}class Nu extends du{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Hl(this.value.arrayValue,e)}}class Cu extends du{constructor(t,e){super(t,"not-in",e)}matches(t){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Hl(this.value.arrayValue,e)}}class Su extends du{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Yl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Hl(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Au(t,e=null,n=[],i=[],r=null,s=null,o=null){return new _u(t,e,n,i,r,s,o)}function Ru(t){const e=Uc(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>vu(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),yl(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xl(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xl(t))).join(",")),e.ft=t}return e.ft}function Ou(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bu(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lu(t.startAt,e.startAt)&&lu(t.endAt,e.endAt)}function Lu(t){return sl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Du{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Mu(t,e,n,i,r,s,o,a){return new Du(t,e,n,i,r,s,o,a)}function Pu(t){return new Du(t)}function Uu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Bu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function zu(t){return null!==t.collectionGroup}function Vu(t){const e=Uc(t);if(null===e.dt){e.dt=[];const t=Fu(e),n=Bu(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new uu(t)),e.dt.push(new uu(rl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new uu(rl.keyField(),t))}}}return e.dt}function ju(t){const e=Uc(t);if(!e.wt)if("F"===e.limitType)e.wt=Au(e.path,e.collectionGroup,Vu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Vu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new uu(n.field,e))}const n=e.endAt?new au(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new au(e.startAt.position,e.startAt.inclusive):null;e.wt=Au(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function Wu(t,e,n){return new Du(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qu(t,e){return Ou(ju(t),ju(e))&&t.limitType===e.limitType}function $u(t){return`${Ru(ju(t))}|lt:${t.limitType}`}function Hu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>wu(t))).join(", ")}]`),yl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xl(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xl(t))).join(",")),`Target(${e})`}(ju(t))}; limitType=${t.limitType})`}function Ku(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):sl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Vu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=cu(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,Vu(n),i)||n.endAt&&!function(t,e,n){const i=cu(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,Vu(n),i)));var n,i}function Gu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xu(t){return(e,n)=>{let i=!1;for(const r of Vu(t)){const t=Qu(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Qu(t,e,n){const i=t.field.isKeyField()?sl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Kl(i,r):Mc()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Mc()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Il(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Tl(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Nl(sl.comparator);function Zu(){return Yu}const th=new Nl(sl.comparator);function eh(...t){let e=th;for(const n of t)e=e.insert(n.key,n);return e}function nh(t){let e=th;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ih(){return sh()}function rh(){return sh()}function sh(){return new Ju((t=>t.toString()),((t,e)=>t.isEqual(e)))}const oh=new Nl(sl.comparator),ah=new _l(sl.comparator);function ch(...t){let e=ah;for(const n of t)e=e.add(n);return e}const lh=new _l(Jc);function uh(){return lh}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vl(e)?"-0":e}}function fh(t){return{integerValue:""+t}}function dh(t,e){return bl(e)?fh(e):hh(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this._=void 0}}function mh(t,e,n){return t instanceof vh?bh(t,e):t instanceof wh?xh(t,e):n}function gh(t,e){var n;return t instanceof kh?Jl(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class yh extends ph{}class vh extends ph{constructor(t){super(),this.elements=t}}function bh(t,e){const n=Ih(e);for(const e of t.elements)n.some((t=>$l(t,e)))||n.push(e);return{arrayValue:{values:n}}}class wh extends ph{constructor(t){super(),this.elements=t}}function xh(t,e){let n=Ih(e);for(const e of t.elements)n=n.filter((t=>!$l(t,e)));return{arrayValue:{values:n}}}class kh extends ph{constructor(t,e){super(),this.serializer=t,this._t=e}}function Eh(t){return Pl(t.integerValue||t.doubleValue)}function Ih(t){return Yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e){this.version=t,this.transformResults=e}}class Nh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nh}static exists(t){return new Nh(void 0,t)}static updateTime(t){return new Nh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ch(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Sh{}function _h(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Bh(t.key,Nh.none()):new Lh(t.key,t.data,Nh.none());{const n=t.data,i=ru.empty();let r=new _l(rl.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Dh(t.key,i,new Rl(r.toArray()),Nh.none())}}function Ah(t,e,n,i){return t instanceof Lh?function(t,e,n,i){if(!Ch(t.precondition,e))return n;const r=t.value.clone(),s=Uh(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Dh?function(t,e,n,i){if(!Ch(t.precondition,e))return n;const r=Uh(t.fieldTransforms,i,e),s=e.data;return s.setAll(Mh(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Ch(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Rh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=gh(i.transform,t||null);null!=r&&(null===n&&(n=ru.empty()),n.set(i.field,r))}return n||null}function Oh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Yc(n,i,((t,e)=>{return i=e,(n=t).field.isEqual(i.field)&&function(t,e){return t instanceof vh&&e instanceof vh||t instanceof wh&&e instanceof wh?Yc(t.elements,e.elements,$l):t instanceof kh&&e instanceof kh?$l(t._t,e._t):t instanceof yh&&e instanceof yh}(n.transform,i.transform);var n,i}))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Lh extends Sh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dh extends Sh{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Ph(t,e,n){const i=new Map;Pc(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,mh(o,a,n[r]))}return i}function Uh(t,e,n){const i=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=e,(r=t)instanceof yh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof vh?bh(r,s):r instanceof wh?xh(r,s):function(t,e){const n=gh(t,e),i=Eh(n)+Eh(t._t);return Jl(n)&&Jl(t._t)?fh(i):hh(t.serializer,i)}(r,s)))}var r,s,o;return i}class Bh extends Sh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fh extends Sh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const o=this.mutations[e];o.key.isEqual(t.key)&&(i=o,r=t,s=n[e],i instanceof Lh?function(t,e,n){const i=t.value.clone(),r=Ph(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,r,s):i instanceof Dh?function(t,e,n){if(!Ch(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Ph(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Mh(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,r,s):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,r,s))}var i,r,s}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ah(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ah(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rh();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=_h(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(tl.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ch())}isEqual(t){return this.batchId===t.batchId&&Yc(this.mutations,t.mutations,((t,e)=>Oh(t,e)))&&Yc(this.baseMutations,t.baseMutations,((t,e)=>Oh(t,e)))}}class Vh{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Pc(t.mutations.length===n.length);let i=oh;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new Vh(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wh{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qh,$h;function Hh(t){switch(t){default:return Mc();case Bc.CANCELLED:case Bc.UNKNOWN:case Bc.DEADLINE_EXCEEDED:case Bc.RESOURCE_EXHAUSTED:case Bc.INTERNAL:case Bc.UNAVAILABLE:case Bc.UNAUTHENTICATED:return!1;case Bc.INVALID_ARGUMENT:case Bc.NOT_FOUND:case Bc.ALREADY_EXISTS:case Bc.PERMISSION_DENIED:case Bc.FAILED_PRECONDITION:case Bc.ABORTED:case Bc.OUT_OF_RANGE:case Bc.UNIMPLEMENTED:case Bc.DATA_LOSS:return!0}}function Kh(t){if(void 0===t)return Oc("GRPC error has no .code"),Bc.UNKNOWN;switch(t){case qh.OK:return Bc.OK;case qh.CANCELLED:return Bc.CANCELLED;case qh.UNKNOWN:return Bc.UNKNOWN;case qh.DEADLINE_EXCEEDED:return Bc.DEADLINE_EXCEEDED;case qh.RESOURCE_EXHAUSTED:return Bc.RESOURCE_EXHAUSTED;case qh.INTERNAL:return Bc.INTERNAL;case qh.UNAVAILABLE:return Bc.UNAVAILABLE;case qh.UNAUTHENTICATED:return Bc.UNAUTHENTICATED;case qh.INVALID_ARGUMENT:return Bc.INVALID_ARGUMENT;case qh.NOT_FOUND:return Bc.NOT_FOUND;case qh.ALREADY_EXISTS:return Bc.ALREADY_EXISTS;case qh.PERMISSION_DENIED:return Bc.PERMISSION_DENIED;case qh.FAILED_PRECONDITION:return Bc.FAILED_PRECONDITION;case qh.ABORTED:return Bc.ABORTED;case qh.OUT_OF_RANGE:return Bc.OUT_OF_RANGE;case qh.UNIMPLEMENTED:return Bc.UNIMPLEMENTED;case qh.DATA_LOSS:return Bc.DATA_LOSS;default:return Mc()}}($h=qh||(qh={}))[$h.OK=0]="OK",$h[$h.CANCELLED=1]="CANCELLED",$h[$h.UNKNOWN=2]="UNKNOWN",$h[$h.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$h[$h.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$h[$h.NOT_FOUND=5]="NOT_FOUND",$h[$h.ALREADY_EXISTS=6]="ALREADY_EXISTS",$h[$h.PERMISSION_DENIED=7]="PERMISSION_DENIED",$h[$h.UNAUTHENTICATED=16]="UNAUTHENTICATED",$h[$h.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$h[$h.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$h[$h.ABORTED=10]="ABORTED",$h[$h.OUT_OF_RANGE=11]="OUT_OF_RANGE",$h[$h.UNIMPLEMENTED=12]="UNIMPLEMENTED",$h[$h.INTERNAL=13]="INTERNAL",$h[$h.UNAVAILABLE=14]="UNAVAILABLE",$h[$h.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Xh}static getOrCreateInstance(){return null===Xh&&(Xh=new Gh),Xh}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Xh=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Jh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Qh(tl.min(),i,uh(),Zu(),ch())}}class Jh{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Jh(n,e,ch(),ch(),ch())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Zh{constructor(t,e){this.targetId=t,this.Et=e}}class tf{constructor(t,e,n=Ll.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class ef{constructor(){this.At=0,this.Rt=sf(),this.vt=Ll.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=ch(),e=ch(),n=ch();return this.Rt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Mc()}})),new Jh(this.vt,this.bt,t,e,n)}xt(){this.Pt=!1,this.Rt=sf()}Nt(t,e){this.Pt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class nf{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=Zu(),this.qt=rf(),this.Ut=new _l(Jc)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}zt(t){this.forEachTarget(t,(e=>{const n=this.jt(e);switch(t.state){case 0:this.Wt(e)&&n.Dt(t.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(e);break;case 3:this.Wt(e)&&(n.Mt(),n.Dt(t.resumeToken));break;case 4:this.Wt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Mc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.Wt(n)&&e(n)}))}Jt(t){var e;const n=t.targetId,i=t.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Lu(s))if(0===i){const t=new sl(s.path);this.Qt(n,t,ou.newNoDocument(t,tl.min()))}else Pc(1===i);else{const r=this.Zt(n);r!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(e=Gh.instance)||void 0===e||e.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:t.Et.count}))}}}Xt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Lu(r.target)){const e=new sl(r.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,ou.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=ch();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Qh(t,e,this.Ut,this.Lt,n);return this.Lt=Zu(),this.qt=rf(),this.Ut=new _l(Jc),i}Gt(t,e){if(!this.Wt(t))return;const n=this.te(t,e.key)?2:0;this.jt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.Wt(t))return;const i=this.jt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Zt(t){const e=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let e=this.Bt.get(t);return e||(e=new ef,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new _l(Jc),this.qt=this.qt.insert(t,e)),e}Wt(t){const e=null!==this.Yt(t);return e||Rc("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new ef),this.Ft.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.Ft.getRemoteKeysForTarget(t).has(e)}}function rf(){return new Nl(sl.comparator)}function sf(){return new Nl(sl.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={asc:"ASCENDING",desc:"DESCENDING"},af={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cf={and:"AND",or:"OR"};class lf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function uf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ff(t,e){return uf(t,e.toTimestamp())}function df(t){return Pc(!!t),tl.fromTimestamp(function(t){const e=Ml(t);return new Zc(e.seconds,e.nanos)}(t))}function pf(t,e){return function(t){return new nl(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function mf(t){const e=nl.fromString(t);return Pc(Mf(e)),e}function gf(t,e){return pf(t.databaseId,e.path)}function yf(t,e){const n=mf(e);if(n.get(1)!==t.databaseId.projectId)throw new Fc(Bc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Fc(Bc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new sl(xf(n))}function vf(t,e){return pf(t.databaseId,e)}function bf(t){const e=mf(t);return 4===e.length?nl.emptyPath():xf(e)}function wf(t){return new nl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xf(t){return Pc(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function kf(t,e,n){return{name:gf(t,e),fields:n.value.mapValue.fields}}function Ef(t,e){let n;if(e instanceof Lh)n={update:kf(t,e.key,e.value)};else if(e instanceof Bh)n={delete:gf(t,e.key)};else if(e instanceof Dh)n={update:kf(t,e.key,e.data),updateMask:Df(e.fieldMask)};else{if(!(e instanceof Fh))return Mc();n={verify:gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof yh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof kh)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Mc()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ff(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Mc()}(t,e.precondition)),n}function If(t,e){return{documents:[vf(t,e.path)]}}function Tf(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=vf(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vf(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0!==t.length)return Lf(pu.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Rf(t.field),direction:Sf(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.useProto3Json||yl(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Nf(t){let e=bf(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Pc(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Cf(t);return e instanceof pu&&gu(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new uu(Of((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yl(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new au(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new au(n,e)}(n.endAt)),Mu(e,r,o,s,a,"F",c,l)}function Cf(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Of(t.unaryFilter.field);return du.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Of(t.unaryFilter.field);return du.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Of(t.unaryFilter.field);return du.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Of(t.unaryFilter.field);return du.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Mc()}}(t):void 0!==t.fieldFilter?(n=t,du.create(Of(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Mc()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,pu.create(e.compositeFilter.filters.map((t=>Cf(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Mc()}}(e.compositeFilter.op))):Mc();var e,n}function Sf(t){return of[t]}function _f(t){return af[t]}function Af(t){return cf[t]}function Rf(t){return{fieldPath:t.canonicalString()}}function Of(t){return rl.fromServerFormat(t.fieldPath)}function Lf(t){return t instanceof du?function(t){if("=="===t.op){if(tu(t.value))return{unaryFilter:{field:Rf(t.field),op:"IS_NAN"}};if(Zl(t.value))return{unaryFilter:{field:Rf(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(tu(t.value))return{unaryFilter:{field:Rf(t.field),op:"IS_NOT_NAN"}};if(Zl(t.value))return{unaryFilter:{field:Rf(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rf(t.field),op:_f(t.op),value:t.value}}}(t):t instanceof pu?function(t){const e=t.getFilters().map((t=>Lf(t)));return 1===e.length?e[0]:{compositeFilter:{op:Af(t.op),filters:e}}}(t):Mc()}function Df(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Mf(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e,n,i,r=tl.min(),s=tl.min(),o=Ll.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Pf(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Pf(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Pf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(t){this.se=t}}function Bf(t){const e=Nf({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Wu(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){}oe(t,e){this.ue(t,e),e.ce()}ue(t,e){if("nullValue"in t)this.ae(e,5);else if("booleanValue"in t)this.ae(e,10),e.he(t.booleanValue?1:0);else if("integerValue"in t)this.ae(e,15),e.he(Pl(t.integerValue));else if("doubleValue"in t){const n=Pl(t.doubleValue);isNaN(n)?this.ae(e,13):(this.ae(e,15),vl(n)?e.he(0):e.he(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ae(e,20),"string"==typeof n?e.le(n):(e.le(`${n.seconds||""}`),e.he(n.nanos||0))}else if("stringValue"in t)this.fe(t.stringValue,e),this.de(e);else if("bytesValue"in t)this.ae(e,30),e.we(Ul(t.bytesValue)),this.de(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ae(e,45),e.he(n.latitude||0),e.he(n.longitude||0)}else"mapValue"in t?iu(t)?this.ae(e,Number.MAX_SAFE_INTEGER):(this.me(t.mapValue,e),this.de(e)):"arrayValue"in t?(this.ge(t.arrayValue,e),this.de(e)):Mc()}fe(t,e){this.ae(e,25),this.ye(t,e)}ye(t,e){e.le(t)}me(t,e){const n=t.fields||{};this.ae(e,55);for(const t of Object.keys(n))this.fe(t,e),this.ue(n[t],e)}ge(t,e){const n=t.values||[];this.ae(e,50);for(const t of n)this.ue(t,e)}_e(t,e){this.ae(e,37),sl.fromName(t).path.forEach((t=>{this.ae(e,60),this.ye(t,e)}))}ae(t,e){t.he(e)}de(t){t.he(2)}}Ff.pe=new Ff;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zf{constructor(){this.He=new Vf}addToCollectionParentIndex(t,e){return this.He.add(e),pl.resolve()}getCollectionParents(t,e){return pl.resolve(this.He.getEntries(e))}addFieldIndex(t,e){return pl.resolve()}deleteFieldIndex(t,e){return pl.resolve()}getDocumentsMatchingTarget(t,e){return pl.resolve(null)}getIndexType(t,e){return pl.resolve(0)}getFieldIndexes(t,e){return pl.resolve([])}getNextCollectionGroupToUpdate(t){return pl.resolve(null)}getMinOffset(t,e){return pl.resolve(ll.min())}getMinOffsetFromCollectionGroup(t,e){return pl.resolve(ll.min())}updateCollectionGroup(t,e,n){return pl.resolve()}updateIndexEntries(t,e){return pl.resolve()}}class Vf{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new _l(nl.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new _l(nl.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class jf{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new jf(t,jf.DEFAULT_COLLECTION_PERCENTILE,jf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jf.DEFAULT_COLLECTION_PERCENTILE=10,jf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jf.DEFAULT=new jf(41943040,jf.DEFAULT_COLLECTION_PERCENTILE,jf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jf.DISABLED=new jf(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wf{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Wf(0)}static bn(){return new Wf(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{constructor(){this.changes=new Ju((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ou.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?pl.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $f{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ah(n.mutation,t,Rl.empty(),Zc.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ch()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ch()){const i=ih();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=eh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ih();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ch())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Zu();const s=sh(),o=sh();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Dh)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ah(o.mutation,e,o.mutation.getFieldMask(),Zc.now())):s.set(e.key,Rl.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new $f(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=sh();let i=new Nl(((t,e)=>t-e)),r=ch();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Rl.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||ch()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=rh();c.forEach((t=>{if(!r.has(t)){const i=_h(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return pl.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return sl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):pl.resolve(ih());let o=-1,a=r;return s.next((e=>pl.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?pl.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,ch()))).next((t=>({batchId:o,changes:nh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new sl(e)).next((t=>{let e=eh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=eh();return this.indexManager.getCollectionParents(t,i).next((s=>pl.forEach(s,(s=>{const o=function(t,e){return new Du(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,ou.newInvalidDocument(i)))}));let n=eh();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Ah(s.mutation,r,Rl.empty(),Zc.now()),Ku(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return pl.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:df(n.createTime)}),pl.resolve()}getNamedQuery(t,e){return pl.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Bf(t.bundledQuery),readTime:df(t.readTime)}}(e)),pl.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(){this.overlays=new Nl(sl.comparator),this.ts=new Map}getOverlay(t,e){return pl.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ih();return pl.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.re(t,e,i)})),pl.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.ts.delete(n)),pl.resolve()}getOverlaysForCollection(t,e,n){const i=ih(),r=e.length+1,s=new sl(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return pl.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Nl(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=ih(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ih(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return pl.resolve(o)}re(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new jh(e,n));let r=this.ts.get(e);void 0===r&&(r=ch(),this.ts.set(e,r)),this.ts.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.es=new _l(Qf.ns),this.ss=new _l(Qf.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,e){const n=new Qf(t,e);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.us(new Qf(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}hs(t){const e=new sl(new nl([])),n=new Qf(e,t),i=new Qf(e,t+1),r=[];return this.ss.forEachInRange([n,i],(t=>{this.us(t),r.push(t.key)})),r}ls(){this.es.forEach((t=>this.us(t)))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const e=new sl(new nl([])),n=new Qf(e,t),i=new Qf(e,t+1);let r=ch();return this.ss.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Qf(t,0),n=this.es.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Qf{constructor(t,e){this.key=t,this.ds=e}static ns(t,e){return sl.comparator(t.key,e.key)||Jc(t.ds,e.ds)}static rs(t,e){return Jc(t.ds,e.ds)||sl.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this._s=new _l(Qf.ns)}checkEmpty(t){return pl.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zh(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this._s=this._s.add(new Qf(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return pl.resolve(s)}lookupMutationBatch(t,e){return pl.resolve(this.gs(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ys(n),r=i<0?0:i;return pl.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return pl.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return pl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Qf(e,0),i=new Qf(e,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,i],(t=>{const e=this.gs(t.ds);r.push(e)})),pl.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new _l(Jc);return e.forEach((t=>{const e=new Qf(t,0),i=new Qf(t,Number.POSITIVE_INFINITY);this._s.forEachInRange([e,i],(t=>{n=n.add(t.ds)}))})),pl.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;sl.isDocumentKey(r)||(r=r.child(""));const s=new Qf(new sl(r),0);let o=new _l(Jc);return this._s.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ds)),!0)}),s),pl.resolve(this.ps(o))}ps(t){const e=[];return t.forEach((t=>{const n=this.gs(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Pc(0===this.Is(e.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return pl.forEach(e.mutations,(i=>{const r=new Qf(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this._s=n}))}En(t){}containsKey(t,e){const n=new Qf(e,0),i=this._s.firstAfterOrEqual(n);return pl.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,pl.resolve()}Is(t,e){return this.ys(t)}ys(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}gs(t){const e=this.ys(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.Ts=t,this.docs=new Nl(sl.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ts(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return pl.resolve(n?n.document.mutableCopy():ou.newInvalidDocument(e))}getEntries(t,e){let n=Zu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ou.newInvalidDocument(t))})),pl.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Zu();const s=e.path,o=new sl(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ul(cl(o),n)<=0||(i.has(o.key)||Ku(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return pl.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Mc()}Es(t,e){return pl.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Zf(this)}getSize(t){return pl.resolve(this.size)}}class Zf extends qf{constructor(t){super(),this.Jn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Jn.addEntry(t,i)):this.Jn.removeEntry(n)})),pl.waitFor(e)}getFromCache(t,e){return this.Jn.getEntry(t,e)}getAllFromCache(t,e){return this.Jn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.persistence=t,this.As=new Ju((t=>Ru(t)),Ou),this.lastRemoteSnapshotVersion=tl.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Xf,this.targetCount=0,this.bs=Wf.vn()}forEachTarget(t,e){return this.As.forEach(((t,n)=>e(n))),pl.resolve()}getLastRemoteSnapshotVersion(t){return pl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pl.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),pl.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Rs&&(this.Rs=e),pl.resolve()}Sn(t){this.As.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new Wf(e),this.highestTargetId=e),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,e){return this.Sn(e),this.targetCount+=1,pl.resolve()}updateTargetData(t,e){return this.Sn(e),pl.resolve()}removeTargetData(t,e){return this.As.delete(e.target),this.vs.hs(e.targetId),this.targetCount-=1,pl.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.As.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),pl.waitFor(r).next((()=>i))}getTargetCount(t){return pl.resolve(this.targetCount)}getTargetData(t,e){const n=this.As.get(e)||null;return pl.resolve(n)}addMatchingKeys(t,e,n){return this.vs.os(e,n),pl.resolve()}removeMatchingKeys(t,e,n){this.vs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),pl.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.vs.hs(e),pl.resolve()}getMatchingKeysForTargetId(t,e){const n=this.vs.fs(e);return pl.resolve(n)}containsKey(t,e){return pl.resolve(this.vs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e){this.Ps={},this.overlays={},this.Vs=new gl(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new td(this),this.indexManager=new zf,this.remoteDocumentCache=function(t){return new Yf(t)}((t=>this.referenceDelegate.Cs(t))),this.serializer=new Uf(e),this.xs=new Kf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Gf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ps[t.toKey()];return n||(n=new Jf(e,this.referenceDelegate),this.Ps[t.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,e,n){Rc("MemoryPersistence","Starting transaction:",t);const i=new nd(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((t=>this.referenceDelegate.ks(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Os(t,e){return pl.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class nd extends fl{constructor(t){super(),this.currentSequenceNumber=t}}class id{constructor(t){this.persistence=t,this.$s=new Xf,this.Ms=null}static Fs(t){return new id(t)}get Bs(){if(this.Ms)return this.Ms;throw Mc()}addReference(t,e,n){return this.$s.addReference(n,e),this.Bs.delete(n.toString()),pl.resolve()}removeReference(t,e,n){return this.$s.removeReference(n,e),this.Bs.add(n.toString()),pl.resolve()}markPotentiallyOrphaned(t,e){return this.Bs.add(e.toString()),pl.resolve()}removeTarget(t,e){this.$s.hs(e.targetId).forEach((t=>this.Bs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Bs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ns(){this.Ms=new Set}ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pl.forEach(this.Bs,(n=>{const i=sl.fromPath(n);return this.Ls(t,i).next((t=>{t||e.removeEntry(i,tl.min())}))})).next((()=>(this.Ms=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ls(t,e).next((t=>{t?this.Bs.delete(e.toString()):this.Bs.add(e.toString())}))}Cs(t){return 0}Ls(t,e){return pl.or([()=>pl.resolve(this.$s.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rd{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Vi=n,this.Si=i}static Di(t,e){let n=ch(),i=ch();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new rd(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.Ci=!1}initialize(t,e){this.xi=t,this.indexManager=e,this.Ci=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ni(t,e).next((r=>r||this.ki(t,e,i,n))).next((n=>n||this.Oi(t,e)))}Ni(t,e){if(Uu(e))return pl.resolve(null);let n=ju(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Wu(e,null,"F"),n=ju(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=ch(...i);return this.xi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.$i(e,i);return this.Mi(e,s,r,n.readTime)?this.Ni(t,Wu(e,null,"F")):this.Fi(t,s,e,n)}))))})))))}ki(t,e,n,i){return Uu(e)||i.isEqual(tl.min())?this.Oi(t,e):this.xi.getDocuments(t,n).next((r=>{const s=this.$i(e,r);return this.Mi(e,s,n,i)?this.Oi(t,e):(Ac()<=Oi.DEBUG&&Rc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hu(e)),this.Fi(t,s,e,al(i,-1)))}))}$i(t,e){let n=new _l(Xu(t));return e.forEach(((e,i)=>{Ku(t,i)&&(n=n.add(i))})),n}Mi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,e){return Ac()<=Oi.DEBUG&&Rc("QueryEngine","Using full collection scan to execute query:",Hu(e)),this.xi.getDocumentsMatchingQuery(t,e,ll.min())}Fi(t,e,n,i){return this.xi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,n,i){this.persistence=t,this.Bi=e,this.serializer=i,this.Li=new Nl(Jc),this.qi=new Ju((t=>Ru(t)),Ou),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(n)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hf(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Li)))}}function ad(t,e,n,i){return new od(t,e,n,i)}async function cd(t,e){const n=Uc(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=ch();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Qi:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function ld(t){const e=Uc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ds.getLastRemoteSnapshotVersion(t)))}function ud(t,e,n){let i=ch(),r=ch();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Zu();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(tl.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Rc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:i,ji:r}}))}function hd(t,e){const n=Uc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function fd(t,e){const n=Uc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Ds.getTargetData(t,e).next((r=>r?(i=r,pl.resolve(i)):n.Ds.allocateTargetId(t).next((r=>(i=new Pf(e,r,0,t.currentSequenceNumber),n.Ds.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Li.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function dd(t,e,n){const i=Uc(t),r=i.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!ml(t))throw t;Rc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Li=i.Li.remove(e),i.qi.delete(r.target)}function pd(t,e,n){const i=Uc(t);let r=tl.min(),s=ch();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Uc(t),r=i.qi.get(n);return void 0!==r?pl.resolve(i.Li.get(r)):i.Ds.getTargetData(e,n)}(i,t,ju(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Bi.getDocumentsMatchingQuery(t,e,n?r:tl.min(),n?s:ch()))).next((t=>(md(i,Gu(e),t),{documents:t,Wi:s})))))}function md(t,e,n){let i=t.Ui.get(e)||tl.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ui.set(e,i)}class gd{constructor(){this.activeTargetIds=uh()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yd{constructor(){this.Br=new gd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,e,n){this.Lr[t]=e}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new gd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Rc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){Rc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd=null;function xd(){return null===wd?wd=268435456+Math.round(2147483648*Math.random()):wd++,"0x"+wd.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.ro=e+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,e,n,i,r){const s=xd(),o=this.ao(t,e);Rc("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={};return this.ho(a,i,r),this.lo(t,o,a,n).then((e=>(Rc("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Lc("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}fo(t,e,n,i,r,s){return this.co(t,e,n,i,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Sc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=kd[t];return`${this.ro}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,i){const r=xd();return new Promise(((s,o)=>{const a=new Nc;a.setWithCredentials(!0),a.listenOnce(xc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case wc.NO_ERROR:const e=a.getResponseJson();Rc("WebChannelConnection",`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case wc.TIMEOUT:Rc("WebChannelConnection",`RPC '${t}' ${r} timed out`),o(new Fc(Bc.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const n=a.getStatus();if(Rc("WebChannelConnection",`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Bc).indexOf(e)>=0?e:Bc.UNKNOWN}(e.status);o(new Fc(t,e.message))}else o(new Fc(Bc.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Fc(Bc.UNAVAILABLE,"Connection failed."));break;default:Mc()}}finally{Rc("WebChannelConnection",`RPC '${t}' ${r} completed.`)}}));const c=JSON.stringify(i);Rc("WebChannelConnection",`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const i=xd(),r=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=vc(),o=bc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ic({})),this.ho(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Rc("WebChannelConnection",`Creating RPC '${t}' stream ${i}: ${c}`,a);const l=s.createWebChannel(c,a);let u=!1,h=!1;const f=new Ed({Wr:e=>{h?Rc("WebChannelConnection",`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Rc("WebChannelConnection",`Opening RPC '${t}' stream ${i} transport.`),l.open(),u=!0),Rc("WebChannelConnection",`RPC '${t}' stream ${i} sending:`,e),l.send(e))},Hr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Tc.EventType.OPEN,(()=>{h||Rc("WebChannelConnection",`RPC '${t}' stream ${i} transport opened.`)})),d(l,Tc.EventType.CLOSE,(()=>{h||(h=!0,Rc("WebChannelConnection",`RPC '${t}' stream ${i} transport closed`),f.so())})),d(l,Tc.EventType.ERROR,(e=>{h||(h=!0,Lc("WebChannelConnection",`RPC '${t}' stream ${i} transport errored:`,e),f.so(new Fc(Bc.UNAVAILABLE,"The operation could not be completed")))})),d(l,Tc.EventType.MESSAGE,(e=>{var n;if(!h){const r=e.data[0];Pc(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Rc("WebChannelConnection",`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=qh[t];if(void 0!==e)return Kh(e)}(e),r=o.message;void 0===n&&(n=Bc.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),h=!0,f.so(new Fc(n,r)),l.close()}else Rc("WebChannelConnection",`RPC '${t}' stream ${i} received:`,r),f.io(r)}})),d(o,kc.STAT_EVENT,(e=>{e.stat===Ec.PROXY?Rc("WebChannelConnection",`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Ec.NOPROXY&&Rc("WebChannelConnection",`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.no()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){return new lf(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Ws=t,this.timerId=e,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,e-n);i>0&&Rc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,e,n,i,r,s,o,a){this.Ws=t,this.bo=n,this.Po=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Cd(t,e)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,e){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==t?this.Co.reset():e&&e.code===Bc.RESOURCE_EXHAUSTED?(Oc(e.toString()),Oc("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):e&&e.code===Bc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),e=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Vo===e&&this.Ko(t,n)}),(e=>{t((()=>{const t=new Fc(Bc.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Go(t)}))}))}Ko(t,e){const n=this.Uo(this.Vo);this.stream=this.Qo(t,e),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((t=>{n((()=>this.Go(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(t){return Rc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return e=>{this.Ws.enqueueAndForget((()=>this.Vo===t?e():(Rc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _d extends Sd{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}Qo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Co.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Mc()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(Pc(void 0===e||"string"==typeof e),Ll.fromBase64String(e||"")):(Pc(void 0===e||e instanceof Uint8Array),Ll.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Bc.UNKNOWN:Kh(t.code);return new Fc(e,t.message||"")}(o);n=new tf(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=yf(t,i.document.name),s=df(i.document.updateTime),o=i.document.createTime?df(i.document.createTime):tl.min(),a=new ru({mapValue:{fields:i.document.fields}}),c=ou.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Yh(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=yf(t,i.document),s=i.readTime?df(i.readTime):tl.min(),o=ou.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Yh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=yf(t,i.document),s=i.removedTargetIds||[];n=new Yh([],s,r,null)}else{if(!("filter"in e))return Mc();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new Wh(i),s=t.targetId;n=new Zh(s,r)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return tl.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?tl.min():e.readTime?df(e.readTime):tl.min()}(t);return this.listener.zo(e,n)}jo(t){const e={};e.database=wf(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;return n=Lu(i)?{documents:If(t,i)}:{query:Tf(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=hf(t,e.resumeToken):e.snapshotVersion.compareTo(tl.min())>0&&(n.readTime=uf(t,e.snapshotVersion.toTimestamp())),n}(this.serializer,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Mc()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Fo(e)}Wo(t){const e={};e.database=wf(this.serializer),e.removeTarget=t,this.Fo(e)}}class Ad extends Sd{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Pc(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Pc(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?df(t.updateTime):df(e);return n.isEqual(tl.min())&&(n=df(e)),new Th(n,t.transformResults||[])}(t,n)))):[]),r=df(t.commitTime);return this.listener.Zo(r,i)}var e,n;return Pc(!t.writeResults||0===t.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=wf(this.serializer),this.Fo(t)}Yo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ef(this.serializer,t)))};this.Fo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new Fc(Bc.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.co(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fc(Bc.UNKNOWN,t.toString())}))}fo(t,e,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.fo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Bc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Fc(Bc.UNKNOWN,t.toString())}))}terminate(){this.eu=!0}}class Od{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(t){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,"Online"===t&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Oc(e),this.ru=!1):Rc("OnlineStateTracker",e)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((t=>{n.enqueueAndForget((async()=>{jd(this)&&(Rc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Uc(t);e.du.add(4),await Md(e),e.mu.set("Unknown"),e.du.delete(4),await Dd(e)}(this))}))})),this.mu=new Od(n,i)}}async function Dd(t){if(jd(t))for(const e of t.wu)await e(!0)}async function Md(t){for(const e of t.wu)await e(!1)}function Pd(t,e){const n=Uc(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Vd(n)?zd(n):op(n).No()&&Bd(n,e))}function Ud(t,e){const n=Uc(t),i=op(n);n.fu.delete(e),i.No()&&Fd(n,e),0===n.fu.size&&(i.No()?i.$o():jd(n)&&n.mu.set("Unknown"))}function Bd(t,e){t.gu.Ot(e.targetId),op(t).jo(e)}function Fd(t,e){t.gu.Ot(e),op(t).Wo(e)}function zd(t){t.gu=new nf({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),op(t).start(),t.mu.ou()}function Vd(t){return jd(t)&&!op(t).xo()&&t.fu.size>0}function jd(t){return 0===Uc(t).du.size}function Wd(t){t.gu=void 0}async function qd(t){t.fu.forEach(((e,n)=>{Bd(t,e)}))}async function $d(t,e){Wd(t),Vd(t)?(t.mu.au(e),zd(t)):t.mu.set("Unknown")}async function Hd(t,e,n){if(t.mu.set("Online"),e instanceof tf&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.fu.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.fu.delete(i),t.gu.removeTarget(i))}(t,e)}catch(n){Rc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Kd(t,n)}else if(e instanceof Yh?t.gu.Kt(e):e instanceof Zh?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(tl.min()))try{const e=await ld(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.gu.Xt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.fu.get(i);r&&t.fu.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.fu.get(e);if(!n)return;t.fu.set(e,n.withResumeToken(Ll.EMPTY_BYTE_STRING,n.snapshotVersion)),Fd(t,e);const i=new Pf(n.target,e,1,n.sequenceNumber);Bd(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Rc("RemoteStore","Failed to raise snapshot:",e),await Kd(t,e)}}async function Kd(t,e,n){if(!ml(e))throw e;t.du.add(1),await Md(t),t.mu.set("Offline"),n||(n=()=>ld(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Rc("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Dd(t)}))}function Gd(t,e){return e().catch((n=>Kd(t,n,e)))}async function Xd(t){const e=Uc(t),n=ap(e);let i=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Qd(e);)try{const t=await hd(e.localStore,i);if(null===t){0===e.lu.length&&n.$o();break}i=t.batchId,Jd(e,t)}catch(t){await Kd(e,t)}Yd(e)&&Zd(e)}function Qd(t){return jd(t)&&t.lu.length<10}function Jd(t,e){t.lu.push(e);const n=ap(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function Yd(t){return jd(t)&&!ap(t).xo()&&t.lu.length>0}function Zd(t){ap(t).start()}async function tp(t){ap(t).tu()}async function ep(t){const e=ap(t);for(const n of t.lu)e.Yo(n.mutations)}async function np(t,e,n){const i=t.lu.shift(),r=Vh.from(i,e,n);await Gd(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Xd(t)}async function ip(t,e){e&&ap(t).Jo&&await async function(t,e){if(Hh(n=e.code)&&n!==Bc.ABORTED){const n=t.lu.shift();ap(t).Oo(),await Gd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Xd(t)}var n}(t,e),Yd(t)&&Zd(t)}async function rp(t,e){const n=Uc(t);n.asyncQueue.verifyOperationInProgress(),Rc("RemoteStore","RemoteStore received new credentials");const i=jd(n);n.du.add(3),await Md(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Dd(n)}async function sp(t,e){const n=Uc(t);e?(n.du.delete(2),await Dd(n)):e||(n.du.add(2),await Md(n),n.mu.set("Unknown"))}function op(t){return t.yu||(t.yu=function(t,e,n){const i=Uc(t);return i.nu(),new _d(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Jr:qd.bind(null,t),Zr:$d.bind(null,t),zo:Hd.bind(null,t)}),t.wu.push((async e=>{e?(t.yu.Oo(),Vd(t)?zd(t):t.mu.set("Unknown")):(await t.yu.stop(),Wd(t))}))),t.yu}function ap(t){return t.pu||(t.pu=function(t,e,n){const i=Uc(t);return i.nu(),new Ad(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Jr:tp.bind(null,t),Zr:ip.bind(null,t),Xo:ep.bind(null,t),Zo:np.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),await Xd(t)):(await t.pu.stop(),t.lu.length>0&&(Rc("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))}))),t.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cp{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new zc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new cp(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Fc(Bc.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(t,e){if(Oc("AsyncQueue",`${e}: ${t}`),ml(t))return new Fc(Bc.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t){this.comparator=t?(e,n)=>t(e,n)||sl.comparator(e.key,n.key):(t,e)=>sl.comparator(t.key,e.key),this.keyedMap=eh(),this.sortedSet=new Nl(this.comparator)}static emptySet(t){return new up(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof up))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new up;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(){this.Iu=new Nl(sl.comparator)}track(t){const e=t.doc.key,n=this.Iu.get(e);n?0!==t.type&&3===n.type?this.Iu=this.Iu.insert(e,t):3===t.type&&1!==n.type?this.Iu=this.Iu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Iu=this.Iu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Iu=this.Iu.remove(e):1===t.type&&2===n.type?this.Iu=this.Iu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Iu=this.Iu.insert(e,{type:2,doc:t.doc}):Mc():this.Iu=this.Iu.insert(e,t)}Tu(){const t=[];return this.Iu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class fp{constructor(t,e,n,i,r,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,r){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new fp(t,e,up.emptySet(e),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.Eu=void 0,this.listeners=[]}}class pp{constructor(){this.queries=new Ju((t=>$u(t)),qu),this.onlineState="Unknown",this.Au=new Set}}async function mp(t,e){const n=Uc(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new dp),r)try{s.Eu=await n.onListen(i)}catch(t){const n=lp(t,`Initialization of query '${Hu(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&bp(n)}async function gp(t,e){const n=Uc(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function yp(t,e){const n=Uc(t);let i=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.vu(t)&&(i=!0);r.Eu=t}}i&&bp(n)}function vp(t,e,n){const i=Uc(t),r=i.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);i.queries.delete(e)}function bp(t){t.Au.forEach((t=>{t.next()}))}class wp{constructor(t,e,n){this.query=t,this.bu=e,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new fp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),e=!0):this.Du(t,this.onlineState)&&(this.Cu(t),e=!0),this.Vu=t,e}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let e=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),e=!0),e}Du(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.xu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Su(t){if(t.docChanges.length>0)return!0;const e=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Cu(t){t=fp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp{constructor(t){this.key=t}}class kp{constructor(t){this.key=t}}class Ep{constructor(t,e){this.query=t,this.Lu=e,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ch(),this.mutatedKeys=ch(),this.Ku=Xu(t),this.Gu=new up(this.Ku)}get Qu(){return this.Lu}zu(t,e){const n=e?e.ju:new hp,i=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Ku(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let d=!1;l&&u?l.data.isEqual(u.data)?h!==f&&(n.track({type:3,doc:u}),d=!0):this.Wu(l,u)||(n.track({type:2,doc:u}),d=!0,(a&&this.Ku(u,a)>0||c&&this.Ku(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),d=!0):l&&!u&&(n.track({type:1,doc:l}),d=!0,(a||c)&&(o=!0)),d&&(u?(s=s.add(u),r=f?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:s,ju:n,Mi:o,mutatedKeys:r}}Wu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.ju.Tu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Mc()}};return n(t)-n(e)}(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const s=e?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new fp(this.query,t.Gu,i,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new hp,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=ch(),this.Gu.forEach((t=>{this.Zu(t.key)&&(this.Uu=this.Uu.add(t.key))}));const e=[];return t.forEach((t=>{this.Uu.has(t)||e.push(new kp(t))})),this.Uu.forEach((n=>{t.has(n)||e.push(new xp(n))})),e}Xu(t){this.Lu=t.Wi,this.Uu=ch();const e=this.zu(t.documents);return this.applyChanges(e,!0)}tc(){return fp.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class Ip{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Tp{constructor(t){this.key=t,this.ec=!1}}class Np{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Ju((t=>$u(t)),qu),this.ic=new Map,this.rc=new Set,this.oc=new Nl(sl.comparator),this.uc=new Map,this.cc=new Xf,this.ac={},this.hc=new Map,this.lc=Wf.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Cp(t,e){const n=$p(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const t=await fd(n.localStore,ju(e));n.isPrimaryClient&&Pd(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Sp(n,e,i,"current"===s,t.resumeToken)}return r}async function Sp(t,e,n,i,r){t.dc=(e,n,i)=>async function(t,e,n,i){let r=e.view.zu(n);r.Mi&&(r=await pd(t.localStore,e.query,!1).then((({documents:t})=>e.view.zu(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Fp(t,e.targetId,o.Yu),o.snapshot}(t,e,n,i);const s=await pd(t.localStore,e,!0),o=new Ep(e,s.Wi),a=o.zu(s.documents),c=Jh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,r),l=o.applyChanges(a,t.isPrimaryClient,c);Fp(t,n,l.Yu);const u=new Ip(e,n,o);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function _p(t,e){const n=Uc(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((t=>!qu(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await dd(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ud(n.remoteStore,i.targetId),Up(n,i.targetId)})).catch(dl)):(Up(n,i.targetId),await dd(n.localStore,i.targetId,!0))}async function Ap(t,e){const n=Uc(t);try{const t=await function(t,e){const n=Uc(t),i=e.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Ll.EMPTY_BYTE_STRING,tl.min()).withLastLimboFreeSnapshotVersion(tl.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,s)&&o.push(n.Ds.updateTargetData(t,l))}));let a=Zu(),c=ch();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(ud(t,s,e.documentUpdates).next((t=>{a=t.zi,c=t.ji}))),!i.isEqual(tl.min())){const e=n.Ds.getLastRemoteSnapshotVersion(t).next((e=>n.Ds.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return pl.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Li=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.uc.get(e);i&&(Pc(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ec=!0:t.modifiedDocuments.size>0?Pc(i.ec):t.removedDocuments.size>0&&(Pc(i.ec),i.ec=!1))})),await jp(n,t,e)}catch(t){await dl(t)}}function Rp(t,e,n){const i=Uc(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.sc.forEach(((n,i)=>{const r=i.view.Ru(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Uc(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Ru(e)&&(i=!0)})),i&&bp(n)}(i.eventManager,e),t.length&&i.nc.zo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Op(t,e,n){const i=Uc(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let t=new Nl(sl.comparator);t=t.insert(s,ou.newNoDocument(s,tl.min()));const n=ch().add(s),r=new Qh(tl.min(),new Map,new _l(Jc),t,n);await Ap(i,r),i.oc=i.oc.remove(s),i.uc.delete(e),Vp(i)}else await dd(i.localStore,e,!1).then((()=>Up(i,e,n))).catch(dl)}async function Lp(t,e){const n=Uc(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Uc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=pl.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Pc(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ch();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Pp(n,i,null),Mp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await jp(n,t)}catch(t){await dl(t)}}async function Dp(t,e,n){const i=Uc(t);try{const t=await function(t,e){const n=Uc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Pc(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Pp(i,e,n),Mp(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await jp(i,t)}catch(t){await dl(t)}}function Mp(t,e){(t.hc.get(e)||[]).forEach((t=>{t.resolve()})),t.hc.delete(e)}function Pp(t,e,n){const i=Uc(t);let r=i.ac[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.ac[i.currentUser.toKey()]=r}}function Up(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc.wc(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach((e=>{t.cc.containsKey(e)||Bp(t,e)}))}function Bp(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Ud(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Vp(t))}function Fp(t,e,n){for(const i of n)i instanceof xp?(t.cc.addReference(i.key,e),zp(t,i)):i instanceof kp?(Rc("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||Bp(t,i.key)):Mc()}function zp(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Rc("SyncEngine","New document in limbo: "+n),t.rc.add(i),Vp(t))}function Vp(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new sl(nl.fromString(e)),i=t.lc.next();t.uc.set(i,new Tp(n)),t.oc=t.oc.insert(n,i),Pd(t.remoteStore,new Pf(ju(Pu(n.path)),i,2,gl.ct))}}async function jp(t,e,n){const i=Uc(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((t,a)=>{o.push(i.dc(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=rd.Di(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.nc.zo(r),await async function(t,e){const n=Uc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>pl.forEach(e,(e=>pl.forEach(e.Vi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>pl.forEach(e.Si,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ml(t))throw t;Rc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Li.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(e,r)}}}(i.localStore,s))}async function Wp(t,e){const n=Uc(t);if(!n.currentUser.isEqual(e)){Rc("SyncEngine","User change. New user:",e.toKey());const t=await cd(n.localStore,e);n.currentUser=e,(i=n).hc.forEach((t=>{t.forEach((t=>{t.reject(new Fc(Bc.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.hc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await jp(n,t.Qi)}var i}function qp(t,e){const n=Uc(t),i=n.uc.get(e);if(i&&i.ec)return ch().add(i.key);{let t=ch();const i=n.ic.get(e);if(!i)return t;for(const e of i){const i=n.sc.get(e);t=t.unionWith(i.view.Qu)}return t}}function $p(t){const e=Uc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ap.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Op.bind(null,e),e.nc.zo=yp.bind(null,e.eventManager),e.nc.wc=vp.bind(null,e.eventManager),e}function Hp(t){const e=Uc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dp.bind(null,e),e}class Kp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Nd(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ad(this.persistence,new sd,t.initialUser,this.serializer)}createPersistence(t){return new ed(id.Fs,this.serializer)}createSharedClientState(t){return new yd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Rp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wp.bind(null,this.syncEngine),await sp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new pp}createDatastore(t){const e=Nd(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Id(i));var i;return function(t,e,n,i){return new Rd(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,r,s;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Rp(this.syncEngine,t,0),s=bd.D()?new bd:new vd,new Ld(e,n,i,r,s)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Np(t,e,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Uc(t);Rc("RemoteStore","RemoteStore shutting down."),e.du.add(5),await Md(e),e._u.shutdown(),e.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):Oc("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qp{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Cc.UNAUTHENTICATED,this.clientId=Qc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Rc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Rc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Fc(Bc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new zc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=lp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Jp(t,e){t.asyncQueue.verifyOperationInProgress(),Rc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await cd(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Yp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tm(t);Rc("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>rp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>rp(e.remoteStore,n))),t._onlineComponents=e}function Zp(t){return"FirebaseError"===t.name?t.code===Bc.FAILED_PRECONDITION||t.code===Bc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function tm(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Rc("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Zp(n))throw n;Lc("Error using user provided cache. Falling back to memory cache: "+n),await Jp(t,new Kp)}}else Rc("FirestoreClient","Using default OfflineComponentProvider"),await Jp(t,new Kp);return t._offlineComponents}async function em(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Rc("FirestoreClient","Using user provided OnlineComponentProvider"),await Yp(t,t._uninitializedComponentsProvider._online)):(Rc("FirestoreClient","Using default OnlineComponentProvider"),await Yp(t,new Gp))),t._onlineComponents}function nm(t){return em(t).then((t=>t.syncEngine))}async function im(t){const e=await em(t),n=e.eventManager;return n.onListen=Cp.bind(null,e.syncEngine),n.onUnlisten=_p.bind(null,e.syncEngine),n}function rm(t,e,n={}){const i=new zc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Xp({next:n=>{e.enqueueAndForget((()=>gp(t,o))),n.fromCache&&"server"===i.source?r.reject(new Fc(Bc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new wp(n,s,{includeMetadataChanges:!0,xu:!0});return mp(t,o)}(await im(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sm=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e,n){if(!n)throw new Fc(Bc.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function am(t){if(!sl.isDocumentKey(t))throw new Fc(Bc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cm(t){if(sl.isDocumentKey(t))throw new Fc(Bc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lm(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Mc()}function um(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Fc(Bc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lm(t);throw new Fc(Bc.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hm{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Fc(Bc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Fc(Bc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Fc(Bc.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Fc(Bc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Fc(Bc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hm(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new jc;switch(t.type){case"firstParty":return new Hc(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Fc(Bc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=sm.get(t);e&&(Rc("ComponentProvider","Removing Datastore"),sm.delete(t),e.terminate())}(this),Promise.resolve()}}function dm(t,e,n,i={}){var r;const s=(t=um(t,fm))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Lc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Cc.MOCK_USER;else{e=ui(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Fc(Bc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Cc(s)}t._authCredentials=new Wc(new Vc(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gm(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pm(this.firestore,t,this._key)}}class mm{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new mm(this.firestore,t,this._query)}}class gm extends mm{constructor(t,e,n){super(t,e,Pu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pm(this.firestore,null,new sl(t))}withConverter(t){return new gm(this.firestore,t,this._path)}}function ym(t,e,...n){if(t=Ci(t),1===arguments.length&&(e=Qc.A()),om("doc","path",e),t instanceof fm){const i=nl.fromString(e,...n);return am(i),new pm(t,null,new sl(i))}{if(!(t instanceof pm||t instanceof gm))throw new Fc(Bc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nl.fromString(e,...n));return am(i),new pm(t.firestore,t instanceof gm?t.converter:null,new sl(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vm{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Cd(this,"async_queue_retry"),this.qc=()=>{const t=Td();t&&Rc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const t=Td();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const e=Td();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise((()=>{}));const e=new zc;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.kc.push(t),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!ml(t))throw t;Rc("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(t){const e=this.Nc.then((()=>(this.Fc=!0,t().catch((t=>{this.Mc=t,this.Fc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw Oc("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Fc=!1,t))))));return this.Nc=e,e}enqueueAfterDelay(t,e,n){this.Uc(),this.Lc.indexOf(t)>-1&&(e=0);const i=cp.createAndSchedule(this,t,e,n,(t=>this.Qc(t)));return this.$c.push(i),i}Uc(){this.Mc&&Mc()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Nc,await t}while(t!==this.Nc)}jc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Wc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Hc(t){this.Lc.push(t)}Qc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class bm extends fm{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new vm,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xm(this),this._firestoreClient.terminate()}}function wm(t){return t._firestoreClient||xm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xm(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Vl(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Qp(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class km{constructor(t){this._byteString=t}static fromBase64String(t){try{return new km(Ll.fromBase64String(t))}catch(t){throw new Fc(Bc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new km(Ll.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Fc(Bc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rl(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Im{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Fc(Bc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Fc(Bc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Jc(this._lat,t._lat)||Jc(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=/^__.*__$/;class Cm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Dh(t,this.data,this.fieldMask,e,this.fieldTransforms):new Lh(t,this.data,e,this.fieldTransforms)}}function Sm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Mc()}}class _m{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new _m(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.ea(t),i}na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return zm(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(0===t.length)throw this.ia("Document fields must not be empty");if(Sm(this.Yc)&&Nm.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class Am{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Nd(t)}ua(t,e,n,i=!1){return new _m({Yc:t,methodName:e,oa:n,path:rl.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rm(t){const e=t._freezeSettings(),n=Nd(t._databaseId);return new Am(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Om(t,e,n,i,r,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,r);Pm("Data must be an object, but it was:",o,i);const a=Dm(i,o);let c,l;if(s.merge)c=new Rl(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Um(e,i,n);if(!o.contains(r))throw new Fc(Bc.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Vm(t,r)||t.push(r)}c=new Rl(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new Cm(new ru(a),c,l)}function Lm(t,e){if(Mm(t=Ci(t)))return Pm("Unsupported field value:",e,t),Dm(t,e);if(t instanceof Im)return function(t,e){if(!Sm(e.Yc))throw e.ia(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ia(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&4!==e.Yc)throw e.ia("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Lm(r,e.sa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Ci(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return dh(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Zc.fromDate(t);return{timestampValue:uf(e.serializer,n)}}if(t instanceof Zc){const n=new Zc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:uf(e.serializer,n)}}if(t instanceof Tm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof km)return{bytesValue:hf(e.serializer,t._byteString)};if(t instanceof pm){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:pf(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ia(`Unsupported field value: ${lm(t)}`)}(t,e)}function Dm(t,e){const n={};return Tl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Il(t,((t,i)=>{const r=Lm(i,e.Xc(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Mm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Zc||t instanceof Tm||t instanceof km||t instanceof pm||t instanceof Im)}function Pm(t,e,n){if(!Mm(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=lm(n);throw"an object"===i?e.ia(t+" a custom object"):e.ia(t+" "+i)}}function Um(t,e,n){if((e=Ci(e))instanceof Em)return e._internalPath;if("string"==typeof e)return Fm(t,e);throw zm("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bm=new RegExp("[~\\*/\\[\\]]");function Fm(t,e,n){if(e.search(Bm)>=0)throw zm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Em(...e.split("."))._internalPath}catch(i){throw zm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zm(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Fc(Bc.INVALID_ARGUMENT,a+t+c)}function Vm(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new pm(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Wm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qm("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Wm extends jm{data(){return super.data()}}function qm(t,e){return"string"==typeof e?Fm(t,e):e instanceof Em?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Fc(Bc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hm{convertValue(t,e="none"){switch(ql(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pl(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ul(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Mc()}}convertObject(t,e){const n={};return Il(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Tm(Pl(t.latitude),Pl(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Fl(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(zl(t));default:return null}}convertTimestamp(t){const e=Ml(t);return new Zc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=nl.fromString(t);Pc(Mf(n));const i=new jl(n.get(1),n.get(3)),r=new sl(n.popFirst(5));return i.isEqual(e)||Oc(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gm{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xm extends jm{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Qm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Qm extends Xm{data(t={}){return super.data(t)}}class Jm{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Gm(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Qm(this._firestore,this._userDataWriter,n.key,n,new Gm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Fc(Bc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new Qm(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Gm(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new Qm(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Gm(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Ym(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ym(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mc()}}class Zm extends Hm{constructor(t){super(),this.firestore=t}convertBytes(t){return new km(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pm(this.firestore,null,e)}}function tg(t,e,n){t=um(t,pm);const i=um(t.firestore,bm),r=Km(t.converter,e,n);return eg(i,[Om(Rm(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Nh.none())])}function eg(t,e){return function(t,e){const n=new zc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Hp(t);try{const t=await function(t,e){const n=Uc(t),i=Zc.now(),r=e.reduce(((t,e)=>t.add(e.key)),ch());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Zu(),c=ch();return n.Ki.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Rh(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Dh(t.key,e,su(e.value.mapValue),Nh.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:nh(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.ac[t.currentUser.toKey()];i||(i=new Nl(Jc)),i=i.insert(e,n),t.ac[t.currentUser.toKey()]=i}(i,t.batchId,n),await jp(i,t.changes),await Xd(i.remoteStore)}catch(t){const e=lp(t,"Failed to persist write");n.reject(e)}}(await nm(t),e,n))),n.promise}(wm(t),e)}!function(t,e=!0){Sc="9.19.1",cr(new Si("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new bm(new qc(t.getProvider("auth-internal")),new Gc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Fc(Bc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jl(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),pr("@firebase/firestore","3.10.0",t),pr("@firebase/firestore","3.10.0","esm2017")}();function ng(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rg=ig,sg=new gi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),og=new Bi("@firebase/auth");function ag(t,...e){og.logLevel<=Oi.ERROR&&og.error(`Auth (9.19.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t,...e){throw hg(t,...e)}function lg(t,...e){return hg(t,...e)}function ug(t,e,n){const i=Object.assign(Object.assign({},rg()),{[e]:n});return new gi("auth","Firebase",i).create(e,{appName:t.name})}function hg(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return sg.create(t,...e)}function fg(t,e,...n){if(!t)throw hg(e,...n)}function dg(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ag(e),new Error(e)}function pg(t,e){t||dg(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Map;function gg(t){pg(t instanceof Function,"Expected a class definition");let e=mg.get(t);return e?(pg(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mg.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yg(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function vg(){return"http:"===bg()||"https:"===bg()}function bg(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vg()||fi()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xg{constructor(t,e){this.shortDelay=t,this.longDelay=e,pg(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(hi())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return wg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){pg(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dg("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dg("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dg("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Tg=new xg(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cg(t,e,n,i,r={}){return Sg(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=xi(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Eg.fetch()(Ag(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Sg(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ig),e);try{const e=new Rg(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Og(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Og(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Og(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Og(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ug(t,a,o);cg(t,a)}}catch(e){if(e instanceof mi)throw e;cg(t,"network-request-failed",{message:String(e)})}}async function _g(t,e,n,i,r={}){const s=await Cg(t,e,n,i,r);return"mfaPendingCredential"in s&&cg(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ag(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?kg(t.config,r):`${t.config.apiScheme}://${r}`}class Rg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(lg(this.auth,"network-request-failed"))),Tg.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Og(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=lg(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lg(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){return 1e3*Number(t)}function Mg(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return ag("JWT malformed, contained fewer than 3 sections"),null;try{const t=ii(n);return t?JSON.parse(t):(ag("Failed to decode base64 JWT payload"),null)}catch(t){return ag("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pg(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof mi&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Ug{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lg(this.lastLoginAt),this.creationTime=Lg(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fg(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Pg(t,async function(t,e){return Cg(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));fg(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=ng(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!u&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bg(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zg{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){fg(t.idToken,"internal-error"),fg(void 0!==t.idToken,"internal-error"),fg(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Mg(t);return fg(e,"internal-error"),fg(void 0!==e.exp,"internal-error"),fg(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return fg(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Sg(t,{},(async()=>{const n=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Ag(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Eg.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new zg;return n&&(fg("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(fg("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(fg("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new zg,this.toJSON())}_performRefresh(){return dg("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e){fg("string"==typeof t||void 0===t,"internal-error",{appName:e})}class jg{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=ng(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Bg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Pg(this,this.stsTokenManager.getToken(this.auth,t));return fg(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Ci(t),i=await n.getIdToken(e),r=Mg(i);fg(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Lg(Dg(r.auth_time)),issuedAtTime:Lg(Dg(r.iat)),expirationTime:Lg(Dg(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Ci(t);await Fg(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(fg(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new jg(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){fg(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Fg(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Pg(this,async function(t,e){return Cg(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,f=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=e;fg(v&&k,t,"internal-error");const E=zg.fromJSON(this.name,k);fg("string"==typeof v,t,"internal-error"),Vg(u,t.name),Vg(h,t.name),fg("boolean"==typeof b,t,"internal-error"),fg("boolean"==typeof w,t,"internal-error"),Vg(f,t.name),Vg(d,t.name),Vg(p,t.name),Vg(m,t.name),Vg(g,t.name),Vg(y,t.name);const I=new jg({uid:v,auth:t,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((t=>Object.assign({},t)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new zg;i.updateFromServerResponse(e);const r=new jg({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Fg(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Wg.type="NONE";const qg=Wg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t,e,n){return`firebase:${t}:${e}:${n}`}class Hg{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=$g(this.userKey,i.apiKey,r),this.fullPersistenceKey=$g("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?jg._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Hg(gg(qg),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||gg(qg);const s=$g(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=jg._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Hg(r,t,n)):new Hg(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zg(e))return"Blackberry";if(ty(e))return"Webos";if(Xg(e))return"Safari";if((e.includes("chrome/")||Qg(e))&&!e.includes("edge/"))return"Chrome";if(Yg(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Gg(t=hi()){return/firefox\//i.test(t)}function Xg(t=hi()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qg(t=hi()){return/crios\//i.test(t)}function Jg(t=hi()){return/iemobile/i.test(t)}function Yg(t=hi()){return/android/i.test(t)}function Zg(t=hi()){return/blackberry/i.test(t)}function ty(t=hi()){return/webos/i.test(t)}function ey(t=hi()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ny(){return di()&&10===document.documentMode}function iy(t=hi()){return ey(t)||Yg(t)||ty(t)||Zg(t)||/windows phone/i.test(t)||Jg(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ry(t,e=[]){let n;switch(t){case"Browser":n=Kg(hi());break;case"Worker":n=`${Kg(hi())}-${t}`;break;default:n=t}return`${n}/JsCore/9.19.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cy(this),this.idTokenSubscription=new cy(this),this.beforeStateQueue=new sy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=gg(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Hg.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fg(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Fg(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Ci(t):null;return e&&fg(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&fg(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(gg(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gi("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&gg(t)||this._popupRedirectResolver;fg(e,this,"argument-error"),this.redirectPersistenceManager=await Hg.create(this,[gg(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return fg(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return fg(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function ay(t){return Ci(t)}class cy{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ii((t=>this.observer=t))}get next(){return fg(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ly(t,e,n){const i=ay(t);fg(i._canInitEmulator,i,"emulator-config-failed"),fg(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=uy(e),{host:o,port:a}=function(t){const e=uy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:hy(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:hy(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function uy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class fy{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return dg("not implemented")}_getIdTokenResponse(t){return dg("not implemented")}_linkToIdToken(t,e){return dg("not implemented")}_getReauthenticationResolver(t){return dg("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(t,e){return Cg(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class py extends fy{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new py(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new py(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return _g(t,"POST","/v1/accounts:signInWithPassword",Ng(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return _g(t,"POST","/v1/accounts:signInWithEmailLink",Ng(t,e))}(t,{email:this._email,oobCode:this._password});default:cg(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return dy(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return _g(t,"POST","/v1/accounts:signInWithEmailLink",Ng(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:cg(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(t,e){return _g(t,"POST","/v1/accounts:signInWithIdp",Ng(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new gy(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):cg("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=ng(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new gy(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return my(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,my(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,my(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=xi(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vy extends fy{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new vy({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new vy({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return _g(t,"POST","/v1/accounts:signInWithPhoneNumber",Ng(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await _g(t,"POST","/v1/accounts:signInWithPhoneNumber",Ng(t,e));if(n.temporaryProof)throw Og(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return _g(t,"POST","/v1/accounts:signInWithPhoneNumber",Ng(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),yy)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new vy({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t){var e,n,i,r,s,o;const a=ki(Ei(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);fg(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=ki(Ei(t)).link,n=e?ki(Ei(e)).deep_link_id:null,i=ki(Ei(t)).deep_link_id;return(i?ki(Ei(i)).link:null)||i||n||e||t}(t);try{return new by(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wy{constructor(){this.providerId=wy.PROVIDER_ID}static credential(t,e){return py._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=by.parseLink(e);return fg(n,"argument-error"),py._fromEmailAndCode(t,n.code,n.tenantId)}}wy.PROVIDER_ID="password",wy.EMAIL_PASSWORD_SIGN_IN_METHOD="password",wy.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xy{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends xy{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ey extends ky{constructor(){super("facebook.com")}static credential(t){return gy._fromParams({providerId:Ey.PROVIDER_ID,signInMethod:Ey.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ey.credentialFromTaggedObject(t)}static credentialFromError(t){return Ey.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ey.credential(t.oauthAccessToken)}catch(t){return null}}}Ey.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ey.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iy extends ky{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return gy._fromParams({providerId:Iy.PROVIDER_ID,signInMethod:Iy.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Iy.credentialFromTaggedObject(t)}static credentialFromError(t){return Iy.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Iy.credential(e,n)}catch(t){return null}}}Iy.GOOGLE_SIGN_IN_METHOD="google.com",Iy.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ty extends ky{constructor(){super("github.com")}static credential(t){return gy._fromParams({providerId:Ty.PROVIDER_ID,signInMethod:Ty.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ty.credentialFromTaggedObject(t)}static credentialFromError(t){return Ty.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ty.credential(t.oauthAccessToken)}catch(t){return null}}}Ty.GITHUB_SIGN_IN_METHOD="github.com",Ty.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ny extends ky{constructor(){super("twitter.com")}static credential(t,e){return gy._fromParams({providerId:Ny.PROVIDER_ID,signInMethod:Ny.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Ny.credentialFromTaggedObject(t)}static credentialFromError(t){return Ny.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Ny.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cy(t,e){return _g(t,"POST","/v1/accounts:signUp",Ng(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ny.TWITTER_SIGN_IN_METHOD="twitter.com",Ny.PROVIDER_ID="twitter.com";class Sy{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await jg._fromIdTokenResponse(t,n,i),s=_y(n);return new Sy({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=_y(n);return new Sy({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function _y(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ay extends mi{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ay.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Ay(t,e,n,i)}}function Ry(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ay._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(t,e,n=!1){const i=await Pg(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sy._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ly(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Pg(t,Ry(i,r,e,t),n);fg(s.idToken,i,"internal-error");const o=Mg(s.idToken);fg(o,i,"internal-error");const{sub:a}=o;return fg(t.uid===a,i,"user-mismatch"),Sy._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&cg(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(t,e,n=!1){const i="signIn",r=await Ry(t,i,e),s=await Sy._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function My(t,e){return Dy(ay(t),e)}async function Py(t,e,n){const i=ay(t),r=await Cy(i,{returnSecureToken:!0,email:e,password:n}),s=await Sy._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Uy(t,e,n){return My(Ci(t),wy.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function By(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const i=Ci(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Pg(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){return Cg(t,"POST","/v1/accounts:update",e)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:t})=>"password"===t));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fy{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends Fy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=hi();return Xg(t)||ey(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);ny()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}zy.type="LOCAL";const Vy=zy;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends Fy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}jy.type="SESSION";const Wy=jy;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qy{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new qy(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $y(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qy.receivers=[];class Hy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=$y("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gy(){return void 0!==Ky().WorkerGlobalScope&&"function"==typeof Ky().importScripts}class Xy{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Qy(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Jy(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Xy(t).toPromise()}(),e(await Jy()))}))}))}async function Yy(t,e,n){const i=Qy(t,!0).put({fbase_key:e,value:n});return new Xy(i).toPromise()}function Zy(t,e){const n=Qy(t,!0).delete(e);return new Xy(n).toPromise()}class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jy()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qy._getInstance(Gy()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Hy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Jy();return await Yy(t,"__sak","1"),await Zy(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Yy(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Qy(t,!1).get(e),i=await new Xy(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>Zy(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Qy(t,!1).getAll();return new Xy(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tv.type="LOCAL";const ev=tv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=lg("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function iv(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
iv("rcb"),new xg(3e4,6e4);async function rv(t,e,n){var i;const r=await n.verify();try{let s;if(fg("string"==typeof r,t,"argument-error"),fg("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){fg("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Cg(t,"POST","/v2/accounts/mfaEnrollment:start",Ng(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{fg("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;fg(n,t,"missing-multi-factor-info");const o=await function(t,e){return Cg(t,"POST","/v2/accounts/mfaSignIn:start",Ng(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Cg(t,"POST","/v1/accounts:sendVerificationCode",Ng(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sv{constructor(t){this.providerId=sv.PROVIDER_ID,this.auth=ay(t)}verifyPhoneNumber(t,e){return rv(this.auth,t,Ci(e))}static credential(t,e){return vy._fromVerification(t,e)}static credentialFromResult(t){const e=t;return sv.credentialFromTaggedObject(e)}static credentialFromError(t){return sv.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?vy._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ov(t,e){return e?gg(e):(fg(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sv.PROVIDER_ID="phone",sv.PHONE_SIGN_IN_METHOD="phone";class av extends fy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return my(t,this._buildIdpRequest())}_linkToIdToken(t,e){return my(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return my(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function cv(t){return Dy(t.auth,new av(t),t.bypassAuthState)}function lv(t){const{auth:e,user:n}=t;return fg(n,e,"internal-error"),Ly(n,new av(t),t.bypassAuthState)}async function uv(t){const{auth:e,user:n}=t;return fg(n,e,"internal-error"),Oy(n,new av(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return cv;case"linkViaPopup":case"linkViaRedirect":return uv;case"reauthViaPopup":case"reauthViaRedirect":return lv;default:cg(this.auth,"internal-error")}}resolve(t){pg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pg(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new xg(2e3,1e4);class dv extends hv{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,dv.currentPopupAction&&dv.currentPopupAction.cancel(),dv.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return fg(t,this.auth,"internal-error"),t}async onExecution(){pg(1===this.filter.length,"Popup operations only handle one event");const t=$y();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(lg(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(lg(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dv.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(lg(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,fv.get())};t()}}dv.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pv=new Map;class mv extends hv{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=pv.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=vv(e),i=yv(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}pv.set(this.auth._key(),t)}return this.bypassAuthState||pv.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function gv(t,e){pv.set(t._key(),e)}function yv(t){return gg(t._redirectPersistence)}function vv(t){return $g("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){const i=ay(t),r=ov(i,e),s=new mv(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class wv{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!kv(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(lg(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(xv(t))}saveEventToCache(t){this.cachedEventUids.add(xv(t)),this.lastProcessedEventTime=Date.now()}}function xv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function kv({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ev=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iv=/^https?/;async function Tv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Cg(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Nv(t))return}catch(t){}cg(t,"unauthorized-domain")}function Nv(t){const e=yg(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Iv.test(n))return!1;if(Ev.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new xg(3e4,6e4);function Sv(){const t=Ky().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let _v=null;function Av(t){return _v=_v||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),n(lg(t,"network-request-failed"))},timeout:Cv.get()})}if(null===(r=null===(i=Ky().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ky().gapi)||void 0===s?void 0:s.load)){const e=iv("iframefcb");return Ky()[e]=()=>{gapi.load?o():n(lg(t,"network-request-failed"))},nv(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw _v=null,t}))}(t),_v}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=new xg(5e3,15e3),Ov={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dv(t){const e=t.config;fg(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kg(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.19.1"},r=Lv.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${xi(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Pv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Uv(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Mv),{width:i.toString(),height:r.toString(),top:s,left:o}),l=hi().toLowerCase();n&&(a=Qg(l)?"_blank":n),Gg(l)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=hi()){var e;return ey(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Pv(null);const h=window.open(e||"",a,u);fg(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Pv(h)}function Bv(t,e,n,i,r,s){fg(t.config.authDomain,t,"auth-domain-config-required"),fg(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.19.1",eventId:r};if(e instanceof xy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof ky){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?kg(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${xi(a).slice(1)}`}const Fv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wy,this._completeRedirectFn=bv,this._overrideRedirectResult=gv}async _openPopup(t,e,n,i){var r;pg(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Uv(t,Bv(t,e,n,yg(),i),$y())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=Bv(t,e,n,yg(),i),Ky().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(pg(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Av(t),n=Ky().gapi;return fg(n,t,"internal-error"),e.open({where:document.body,url:Dv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ov,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=lg(t,"network-request-failed"),s=Ky().setTimeout((()=>{i(r)}),Rv.get());function o(){Ky().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new wv(t);return e.register("authEvent",(e=>{fg(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),cg(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Tv(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return iy()||Xg()||ey()}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zv{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){fg(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vv=ci("authIdTokenMaxAge")||300;let jv=null;var Wv;Wv="Browser",cr(new Si("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{fg(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),fg(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:Wv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(Wv)},o=new oy(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(gg);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),cr(new Si("auth-internal",(t=>{const e=ay(t.getProvider("auth").getImmediate());return new zv(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),pr("@firebase/auth","0.22.0",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wv)),pr("@firebase/auth","0.22.0","esm2017");var qv,$v,Hv={};qv=void 0!==t?t:"undefined"!=typeof window?window:Hv,$v=function(t){if(void 0===t&&void 0===t.document)return!1;var e,n="Success",i="Failure",r="Warning",s="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(e){return e||(e="head"),null!==t.document[e]||(a('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},l=function(){var t={},e=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=l(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,f=function(a,u,f,p){if(!c("body"))return!1;e||d.Notify.init({});var m=l(!0,e,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof f?g=f:"object"==typeof p&&(g=p),e=l(!0,e,g)}var y,v,b=e[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),e.plainText&&(y=u,(v=t.document.createElement("div")).innerHTML=y,u=v.textContent||v.innerText||""),!e.plainText&&u.length>e.messageMaxLength&&(e=l(!0,e,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>e.messageMaxLength&&(u=u.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(o.wrapID)||t.document.createElement("div");if(w.id=o.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var x=t.document.getElementById(o.overlayID)||t.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=e.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||e.backOverlayColor,x.className=e.cssAnimation?"nx-with-animation":"",x.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(o.overlayID)||t.document.body.appendChild(x)}t.document.getElementById(o.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+h,k.className=e.className+" "+b.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=b.textColor,k.style.background=b.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var E="";if(e.closeButton&&"function"!=typeof f&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"");else{var I="";a===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===s&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=I+'<span class="nx-message nx-with-icon">'+u+"</span>"+(e.closeButton?E:"")}else k.innerHTML='<span class="nx-message">'+u+"</span>"+(e.closeButton?E:"");if("left-bottom"===e.position||"right-bottom"===e.position){var T=t.document.getElementById(o.wrapID);T.insertBefore(k,T.firstChild)}else t.document.getElementById(o.wrapID).appendChild(k);var N=t.document.getElementById(k.id);if(N){var C,S,_=function(){N.classList.add("nx-remove");var e=t.document.getElementById(o.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(o.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof f||e.clickToClose)&&N.addEventListener("click",(function(){"function"==typeof f&&f(),_();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof f){var R=function(){C=setTimeout((function(){_()}),e.timeout),S=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};R(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(C),clearTimeout(S)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),R()})))}}if(e.showOnlyTheLastOne&&h>0)for(var O=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+h+"])"),L=0;L<O.length;L++){var D=O[L];null!==D.parentNode&&D.parentNode.removeChild(D)}e=l(!0,e,m)},d={Notify:{init:function(n){e=l(!0,o,n),function(e,n){if(!c("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var i=t.document.createElement("style");i.id=n,i.innerHTML=e(),t.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return a("You have to initialize the Notify module before call Merge function."),!1;e=l(!0,e,t)},success:function(t,e,i){f(n,t,e,i)},failure:function(t,e,n){f(i,t,e,n)},warning:function(t,e,n){f(r,t,e,n)},info:function(t,e,n){f(s,t,e,n)}}};return"object"==typeof t.Notiflix?l(!0,t.Notiflix,{Notify:d.Notify}):{Notify:d.Notify}},"function"==typeof define&&define.amd?define([],(function(){return $v(qv)})):"object"==typeof Hv?Hv=$v(qv):qv.Notiflix=$v(qv),console.log("start v1");const Kv=fr({apiKey:"AIzaSyCKI9Dj7vqAk2upt61qv5a7F6gdwdA1Pn8",authDomain:"book-project-name.firebaseapp.com",databaseURL:"https://book-project-name-default-rtdb.firebaseio.com",projectId:"book-project-name",storageBucket:"book-project-name.appspot.com",messagingSenderId:"1038443063469",appId:"1:1038443063469:web:57badc25615bd16ba6fe24"}),Gv=function(t,e){const n="string"==typeof t?t:e||"(default)",i=lr("object"==typeof t?t:dr(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=ai("firestore");t&&dm(i,...t)}return i}(Kv),Xv=function(t=dr()){const e=lr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=lr(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(bi(n.getOptions(),null!=e?e:{}))return t;cg(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Fv,persistence:[ev,Vy,Wy]}),i=ci("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Vv)return;const i=null==e?void 0:e.token;jv!==i&&(jv=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){Ci(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Ci(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=oi("auth");return s&&ly(n,`http://${s}`),n}(Kv),Qv=function(t,e,...n){if(t=Ci(t),om("collection","path",e),t instanceof fm){const i=nl.fromString(e,...n);return cm(i),new gm(t,null,i)}{if(!(t instanceof pm||t instanceof gm))throw new Fc(Bc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(nl.fromString(e,...n));return cm(i),new gm(t.firestore,null,i)}}(Gv,"todos");!function(t){t=um(t,mm);const e=um(t.firestore,bm),n=wm(e),i=new Zm(e);$m(t._query),rm(n,t._query).then((n=>new Jm(e,i,t,n)))}(Qv),async function(){await tg(ym(Gv,"user","nameuser"),{id:1,message:"newmes"})}();document.querySelector(".sigIn").addEventListener("click",(function(t){t.preventDefault();const e=Jv[0].value,n=Jv[1].value;Uy(Xv,e,n).then((t=>Hv.Notify.success("OK"))).catch((t=>{if(console.log(t.message),"Firebase: Error (auth/wrong-password)."===t.message)return Hv.Notify.warning("wrong Pass")}))})),document.querySelector(".sigOut").addEventListener("click",(function(){(t=Xv,Ci(t).signOut()).then((()=>{})).catch((t=>{console.log(t)}));var t})),document.querySelector(".reg").addEventListener("click",(function(t){const e=Jv[0].value,n=Jv[1].value;t.preventDefault(),Py(Xv,e,n)}));const Jv=document.querySelector(".form-test");const Yv=document.querySelector(".check");var Zv,tb,eb;Zv=t=>{if(null!==t){console.log("logged in!"),By(Xv.currentUser,{displayName:"Jane Q. User"}).then((()=>{})).catch((t=>{}));const t=Xv.currentUser.email;console.log(t),console.log(Xv.currentUser.displayName),Yv.style.background="lightgreen"}else console.log("No user"),Yv.style.background="black"},Ci(Xv).onAuthStateChanged(Zv,tb,eb);
//# sourceMappingURL=index.acfa0f41.js.map
