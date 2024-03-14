const C="3.7.6",Z=C,O=typeof atob=="function",V=typeof btoa=="function",i=typeof Buffer=="function",p=typeof TextDecoder=="function"?new TextDecoder:void 0,g=typeof TextEncoder=="function"?new TextEncoder:void 0,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=Array.prototype.slice.call(j),d=(t=>{let e={};return t.forEach((r,n)=>e[r]=n),e})(u),L=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,o=String.fromCharCode.bind(String),m=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),U=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),F=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),S=t=>{let e,r,n,s,a="";const l=t.length%3;for(let c=0;c<t.length;){if((r=t.charCodeAt(c++))>255||(n=t.charCodeAt(c++))>255||(s=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");e=r<<16|n<<8|s,a+=u[e>>18&63]+u[e>>12&63]+u[e>>6&63]+u[e&63]}return l?a.slice(0,l-3)+"===".substring(l):a},A=V?t=>btoa(t):i?t=>Buffer.from(t,"binary").toString("base64"):S,h=i?t=>Buffer.from(t).toString("base64"):t=>{let r=[];for(let n=0,s=t.length;n<s;n+=4096)r.push(o.apply(null,t.subarray(n,n+4096)));return A(r.join(""))},x=(t,e=!1)=>e?U(h(t)):h(t),N=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?o(192|e>>>6)+o(128|e&63):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return o(240|e>>>18&7)+o(128|e>>>12&63)+o(128|e>>>6&63)+o(128|e&63)}},k=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,D=t=>t.replace(k,N),B=i?t=>Buffer.from(t,"utf8").toString("base64"):g?t=>h(g.encode(t)):t=>A(D(t)),f=(t,e=!1)=>e?U(B(t)):B(t),_=t=>f(t,!0),$=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,q=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return o((r>>>10)+55296)+o((r&1023)+56320);case 3:return o((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return o((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},E=t=>t.replace($,q),R=t=>{if(t=t.replace(/\s+/g,""),!L.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,r="",n,s;for(let a=0;a<t.length;)e=d[t.charAt(a++)]<<18|d[t.charAt(a++)]<<12|(n=d[t.charAt(a++)])<<6|(s=d[t.charAt(a++)]),r+=n===64?o(e>>16&255):s===64?o(e>>16&255,e>>8&255):o(e>>16&255,e>>8&255,e&255);return r},y=O?t=>atob(F(t)):i?t=>Buffer.from(t,"base64").toString("binary"):R,w=i?t=>m(Buffer.from(t,"base64")):t=>m(y(t).split("").map(e=>e.charCodeAt(0))),T=t=>w(v(t)),G=i?t=>Buffer.from(t,"base64").toString("utf8"):p?t=>p.decode(w(t)):t=>E(y(t)),v=t=>F(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),b=t=>G(v(t)),H=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},I=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),z=function(){const t=(e,r)=>Object.defineProperty(String.prototype,e,I(r));t("fromBase64",function(){return b(this)}),t("toBase64",function(e){return f(this,e)}),t("toBase64URI",function(){return f(this,!0)}),t("toBase64URL",function(){return f(this,!0)}),t("toUint8Array",function(){return T(this)})},P=function(){const t=(e,r)=>Object.defineProperty(Uint8Array.prototype,e,I(r));t("toBase64",function(e){return x(this,e)}),t("toBase64URI",function(){return x(this,!0)}),t("toBase64URL",function(){return x(this,!0)})},J=()=>{z(),P()},K={version:C,VERSION:Z,atob:y,atobPolyfill:R,btoa:A,btoaPolyfill:S,fromBase64:b,toBase64:f,encode:f,encodeURI:_,encodeURL:_,utob:D,btou:E,decode:b,isValid:H,fromUint8Array:x,toUint8Array:T,extendString:z,extendUint8Array:P,extendBuiltins:J};export{K as g};
