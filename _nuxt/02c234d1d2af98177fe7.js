(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{242:function(t,e,r){},243:function(t,e,r){},265:function(t,e,r){t.exports=r.p+"img/0a91ab7.png"},266:function(t,e,r){"use strict";const n=r(267),o=r(268),c=r(269),l=r(270),m=Symbol("encodeFragmentIdentifier");function f(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(t,e){return e.encode?e.strict?n(t):encodeURIComponent(t):t}function v(t,e){return e.decode?o(t):t}function h(input){const t=input.indexOf("#");return-1!==t&&(input=input.slice(0,t)),input}function y(input){const t=(input=h(input)).indexOf("?");return-1===t?"":input.slice(t+1)}function F(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function x(t,e){f((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const r=function(t){let e;switch(t.arrayFormat){case"index":return(t,r,n)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return(t,r,n)=>{e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};case"comma":case"separator":return(e,r,n)=>{const o="string"==typeof r&&r.includes(t.arrayFormatSeparator),c="string"==typeof r&&!o&&v(r,t).includes(t.arrayFormatSeparator);r=c?v(r,t):r;const l=o||c?r.split(t.arrayFormatSeparator).map(e=>v(e,t)):null===r?r:v(r,t);n[e]=l};case"bracket-separator":return(e,r,n)=>{const o=/(\[\])$/.test(e);if(e=e.replace(/\[\]$/,""),!o)return void(n[e]=r?v(r,t):r);const c=null===r?[]:r.split(t.arrayFormatSeparator).map(e=>v(e,t));void 0!==n[e]?n[e]=[].concat(n[e],c):n[e]=c};default:return(t,e,r)=>{void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}(e),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;for(const param of t.split("&")){if(""===param)continue;let[t,o]=c(e.decode?param.replace(/\+/g," "):param,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?o:v(o,e),r(v(t,e),o,n)}for(const t of Object.keys(n)){const r=n[t];if("object"==typeof r&&null!==r)for(const t of Object.keys(r))r[t]=F(r[t],e);else n[t]=F(r,e)}return!1===e.sort?n:(!0===e.sort?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((t,e)=>{const r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=function t(input){return Array.isArray(input)?input.sort():"object"==typeof input?t(Object.keys(input)).sort((a,b)=>Number(a)-Number(b)).map(t=>input[t]):input}(r):t[e]=r,t},Object.create(null))}e.extract=y,e.parse=x,e.stringify=(object,t)=>{if(!object)return"";f((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const e=e=>t.skipNull&&null==object[e]||t.skipEmptyString&&""===object[e],r=function(t){switch(t.arrayFormat){case"index":return e=>(r,n)=>{const o=r.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[",o,"]"].join("")]:[...r,[d(e,t),"[",d(o,t),"]=",d(n,t)].join("")]};case"bracket":return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,[d(e,t),"[]"].join("")]:[...r,[d(e,t),"[]=",d(n,t)].join("")];case"comma":case"separator":case"bracket-separator":{const e="bracket-separator"===t.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[d(r,t),e,d(o,t)].join("")]:[[n,d(o,t)].join(t.arrayFormatSeparator)])}default:return e=>(r,n)=>void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?r:null===n?[...r,d(e,t)]:[...r,[d(e,t),"=",d(n,t)].join("")]}}(t),n={};for(const t of Object.keys(object))e(t)||(n[t]=object[t]);const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(e=>{const n=object[e];return void 0===n?"":null===n?d(e,t):Array.isArray(n)?0===n.length&&"bracket-separator"===t.arrayFormat?d(e,t)+"[]":n.reduce(r(e),[]).join("&"):d(e,t)+"="+d(n,t)}).filter(t=>t.length>0).join("&")},e.parseUrl=(t,e)=>{e=Object.assign({decode:!0},e);const[r,n]=c(t,"#");return Object.assign({url:r.split("?")[0]||"",query:x(y(t),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:v(n,e)}:{})},e.stringifyUrl=(object,t)=>{t=Object.assign({encode:!0,strict:!0,[m]:!0},t);const r=h(object.url).split("?")[0]||"",n=e.extract(object.url),o=e.parse(n,{sort:!1}),c=Object.assign(o,object.query);let l=e.stringify(c,t);l&&(l="?"+l);let f=function(t){let e="";const r=t.indexOf("#");return-1!==r&&(e=t.slice(r)),e}(object.url);return object.fragmentIdentifier&&(f="#"+(t[m]?d(object.fragmentIdentifier,t):object.fragmentIdentifier)),`${r}${l}${f}`},e.pick=(input,filter,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[m]:!1},t);const{url:r,query:n,fragmentIdentifier:o}=e.parseUrl(input,t);return e.stringifyUrl({url:r,query:l(n,filter),fragmentIdentifier:o},t)},e.exclude=(input,filter,t)=>{const r=Array.isArray(filter)?t=>!filter.includes(t):(t,e)=>!filter(t,e);return e.pick(input,r,t)}},267:function(t,e,r){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())},268:function(t,e,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function c(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],c(r),c(n))}function l(input){try{return decodeURIComponent(input)}catch(e){for(var t=input.match(n),i=1;i<t.length;i++)t=(input=c(t,i).join("")).match(n);return input}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(input){for(var t={"%FE%FF":"��","%FF%FE":"��"},e=o.exec(input);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(n){var r=l(e[0]);r!==e[0]&&(t[e[0]]=r)}e=o.exec(input)}t["%C2"]="�";for(var n=Object.keys(t),i=0;i<n.length;i++){var c=n[i];input=input.replace(new RegExp(c,"g"),t[c])}return input}(t)}}},269:function(t,e,r){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const r=t.indexOf(e);return-1===r?[t]:[t.slice(0,r),t.slice(r+e.length)]}},270:function(t,e,r){"use strict";t.exports=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),i=0;i<n.length;i++){var c=n[i],l=t[c];(o?-1!==e.indexOf(c):e(c,l,t))&&(r[c]=l)}return r}},271:function(t,e,r){"use strict";r(242)},272:function(t,e,r){"use strict";r(243)},279:function(t,e,r){"use strict";r.r(e);var n={layout:"default",components:{},props:{},data:function(){return{name:"",phone:"",mail:"",service:"",serviceOptions:[{value:"開發"},{value:"製作"},{value:"虛擬製作"},{value:"其他合作"}],message:"",isForm:{name:!0,phone:!0,mail:!0,service:!0,message:!0},isPass:!0,isShowPopup:!1}},computed:{},methods:{focusInput:function(t){"name"==t?this.isForm.name=!0:"phone"==t?this.isForm.phone=!0:"mail"==t?this.isForm.mail=!0:"service"==t?this.isForm.service=!0:"message"==t&&(this.isForm.message=!0)},handleSubmit:function(){if(this.name||(this.isForm.name=!1),this.phone||(this.isForm.phone=!1),this.mail||(this.isForm.mail=!1),this.service||(this.isForm.service=!1),this.message||(this.isForm.message=!1),this.name&&this.phone&&this.mail&&this.service&&this.message){var q=r(266).stringifyUrl({url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6FRXZuWT0Y1KeI1TVgUcbrCeRgTpCrkNPFwKsjAnveCYxZg/formResponse",query:{"entry.943479078":this.name,"entry.851500943":this.phone,"entry.1010778510":this.mail,"entry.1848715513":this.service,"entry.2049837030":this.message}});this.$axios.post(q).then((function(t){})).catch((function(t){})),this.isPass=!0,this.isShowPopup=!0}else this.isPass=!1},closePopup:function(){this.isShowPopup=!1,this.name="",this.phone="",this.mail="",this.service="",this.message=""}},watch:{}},o=(r(271),r(272),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[t._m(0),t._v(" "),n("form",{staticClass:"contact-form",attrs:{method:"POST",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSf6FRXZuWT0Y1KeI1TVgUcbrCeRgTpCrkNPFwKsjAnveCYxZg/formResponse",target:"_blank"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:["contact-input",{"contact-nofill":!t.isForm.name}],attrs:{type:"text",placeholder:"姓名"},domProps:{value:t.name},on:{focus:function(e){return t.focusInput("name")},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],class:["contact-input",{"contact-nofill":!t.isForm.phone}],attrs:{type:"text",placeholder:"聯繫電話"},domProps:{value:t.phone},on:{focus:function(e){return t.focusInput("phone")},input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mail,expression:"mail"}],class:["contact-input",{"contact-nofill":!t.isForm.mail}],attrs:{type:"text",placeholder:"電子郵件"},domProps:{value:t.mail},on:{focus:function(e){return t.focusInput("mail")},input:function(e){e.target.composing||(t.mail=e.target.value)}}}),t._v(" "),n("div",{class:["contact-select",{"contact-nofill":!t.isForm.service}]},[n("el-select",{attrs:{placeholder:"服務項目"},on:{focus:function(e){return t.focusInput("service")}},model:{value:t.service,callback:function(e){t.service=e},expression:"service"}},t._l(t.serviceOptions,(function(t){return n("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),1)],1),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],class:["contact-input contact-textarea",{"contact-nofill":!t.isForm.message}],attrs:{placeholder:"訊息"},domProps:{value:t.message},on:{focus:function(e){return t.focusInput("message")},input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("div",{staticClass:"contact-btn-box"},[n("div",{staticClass:"contact-error-text"},[t.isPass?t._e():n("span",[t._v("請填寫上方所有欄位")])]),t._v(" "),n("button",{staticClass:"contact-btn"},[t._v("送出")])])]),t._v(" "),t.isShowPopup?n("div",{staticClass:"contact-popup",on:{click:t.closePopup}},[n("div",{staticClass:"contact-popup-box",on:{click:function(t){t.stopPropagation()}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:r(265),expression:"require('@/assets/img/icon/success.png')"}],staticClass:"contact-popup-img",attrs:{alt:"success"}}),t._v(" "),n("div",{staticClass:"contact-popup-title"},[t._v("成功")]),t._v(" "),n("div",{staticClass:"contact-popup-desc"},[t._v("表單已上傳成功，將會有專人與您聯繫")]),t._v(" "),n("button",{staticClass:"contact-popup-btn",on:{click:t.closePopup}},[t._v("Confirm")])])]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contact-row-inner"},[e("div",{staticClass:"contact-line"}),this._v(" "),e("div",{staticClass:"contact-head"},[this._v("專人接洽")])])}],!1,null,"35837759",null);e.default=component.exports}}]);