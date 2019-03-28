/*! amazon-dtb-javascript-api - amzn_ads - v7.20.00 - 2018-11-08 20:28:00 */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.shouldSample=function(t){try{var e=parseInt(t,10);if(!isNaN(e)){if(e<=0)return!1;if(e>=100)return!0;if(100*Math.random()<=e)return!0}return!1}catch(t){return!1}},e.getRandomArrayElement=function(t){return a(t)[0]},e.shuffleArray=a,e.getRand=function(){return""+Math.round(1e12*Math.random())+Date.now()},e.isObject=i,e.isArray=c,e.safeObjectHasProp=s,e.hasLocalStorage=d,e.checkAllPossibleBidCacheIds=function(t,e,n){return t.amzniid===e||t[n+"amzniid"]===e||t.amzniid_sp===e},e.inArray=u,e.isDebugEnabled=function(t){return u(l(),t)},e.setDebugMode=function(t,e){if(!d())return!1;var n=l();return e&&-1===n.indexOf(t)?n.push(t):e||(n=n.filter(function(e){return e!==t})),0===n.length?window.localStorage.removeItem(o.DEBUG_LOCAL_STORAGE_KEY):window.localStorage.setItem(o.DEBUG_LOCAL_STORAGE_KEY,JSON.stringify(n)),!0},e.getDebugValue=function(t){return"undefined"!=typeof window&&s(window,o.DEBUG_GLOBAL)&&s(window[o.DEBUG_GLOBAL],t)?window[o.DEBUG_GLOBAL][t]:""};var o=n(1);function a(t){var e=t.length,n=void 0,r=void 0;for(t=[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(t));0!==e;)r=Math.floor(Math.random()*e),n=t[--e],t[e]=t[r],t[r]=n;return t}function i(t){return"object"===(void 0===t?"undefined":r(t))&&null!==t}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function s(t,e){return i(t)&&Object.prototype.hasOwnProperty.call(t,e)&&void 0!==t[e]&&""!==t[e]}function d(){var t="amzn_lsTest";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}function u(t,e){return-1!==t.indexOf(e)}function l(){if(!d())return[];var t=window.localStorage.getItem(o.DEBUG_LOCAL_STORAGE_KEY);null===t||"false"===t?t="[]":"true"===t&&(t='["fake_bids"]');var e=void 0;try{e=JSON.parse(t)}catch(t){}return c(e)||(e=[]),e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DISPLAY_TARGETING_KEYS=["amznbid","amzniid","amznsz","amznp"],e.VIDEO_TARGETING_KEYS=["amznbid","amzniid","amznp","r_amznbid","r_amzniid","r_amznp"],e.BID_STATES={new:"NEW",exposed:"EXPOSED",set:"SET",rendered:"RENDERED"},e.DEBUG_LOCAL_STORAGE_KEY="apstagDebug",e.DEBUG_CONSOLE_HEIGHT_KEY="apstagDebugHeight",e.DEBUG_GLOBAL="apstagDEBUG",e.CFG_LOCAL_STORAGE_KEY="apstagCfg",e.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX=0,e.MINIMUM_BID_TIMEOUT=0,e.MOCKBID={amznbid:"testBid",amzniid:"testImpression",amznp:"testP",crid:"testCrid"},e.MEDIA_TYPES_MAGIC_STRING_FOR_AAX={video:"v"},e.SLOT_STATE_KEYS=["amznbid","amznp"],e.FIRST_PARTY_COOKIE_KEYS={__apsid:{urlParam:"ck"},__aps_id_p:{urlParam:"ckp"},aps_ext_917:{urlParam:"st"}},e.SLOT_STATES={noRequest:"0",bidInFlight:"1",noBid:"2"},e.AAX_RESP_REMAP_COOKIE_KEY="cr",e.SELF_SERVE_PUB_SRC="600",e.LIBRARY_VERSION="7.20.00",e.PROTOCOL=function(){try{var t=window.document.location.protocol;if("h"===t[0])return t+"//"}catch(t){}return"https://"}(),e.HAS_XHR_SUPPORT="function"==typeof XMLHttpRequest&&void 0!==(new XMLHttpRequest).withCredentials},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.store=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.reducer=u;var o=n(1),a=n(0);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var s=void 0,d=[];function u(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];return{AAXReqs:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1];switch(e.type){case"RECORD_AAX_REQUEST":return[].concat(c(t),[r({},e.data)]);case"RECORD_AAX_RESPONSE_PROP":return t.map(function(t){return(t=r({},t)).bidReqID===e.bidReqID&&(t[e.key]=e.value),t});default:return[].concat(c(t))}}(t.AAXReqs,e),aaxViewabilityEnabled:function(){var t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],e=arguments[1];switch(e.type){case"SET_VIEWABILITY":return e.viewability;default:return t}}(t.aaxViewabilityEnabled,e),bidConfigs:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"RECORD_ORIGINAL_BID_CONFIG":return r({},t,i({},e.bidConfig.bidReqID,r({},e.bidConfig)));default:return r({},t)}}(t.bidConfigs,e),bidReqs:function(){var t,e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];switch(n.type){case"ADD_CHUNKED_REQUESTS":return r({},e,i({},n.fid,r({},e[n.fid],{networkReqs:new Array(n.numChunks)})));case"NEW_FETCH_BID_REQUEST":return r({},e,i({},n.fid,{pto:n.pto,hasCallbackExecuted:!1}));case"RECORD_CALLBACK":return r({},e,i({},n.fid,r({},e[n.fid],{hasCallbackExecuted:!0})));case"RECORD_NETWORK_EXCHANGE":return r({},e,i({},n.fid,r({},e[n.fid],{networkReqs:r([].concat(c(e[n.fid].networkReqs)),i({},n.networkID,r({},e[n.fid].networkReqs[n.networkID],(t={},i(t,n.exchangeType+"Time",n.timestamp),i(t,"inFlight","request"===n.exchangeType),t))))})));case"RECORD_TIMEOUT":return r({},e,i({},n.fid,r({},e[n.fid],{networkReqs:e[n.fid].networkReqs.map(function(t){return t.inFlight?r({},t,{timeOut:n.timeOut}):t})})));default:return r({},e)}}(t.bidReqs,e),bsPixels:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"RECORD_BID_INFO_SENT":return r({},t,i({},e.bidInfo.iid,e.bidInfo.state));default:return r({},t)}}(t.bsPixels,e),cfg:function(){var t=arguments.length<=0||void 0===arguments[0]?{DEFAULT_AAX_HOST:(0,a.getDebugValue)("host")||"aax.amazon-adsystem.com",CSM_JS:"//c.amazon-adsystem.com/aax2/csm.js.gz",CSM_RTB_COMMUNICATOR_JS:"//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",DEBUG_APP_HTML:"//c.amazon-adsystem.com/aax2/debugApp.html",DEFAULT_TIMEOUT:2e3,DTB_PATH:"/e/dtb",PIXEL_PATH:"/x/px/",LATENCY_SAMPLING_RATE:1,COOKIE_MATCH_DELAY:0,MAX_SLOTS_PER_REQUEST:1}:arguments[0],e=arguments[1];switch(e.type){case"SET_CFG":return r({},t,e.cfg);default:return r({},t)}}(t.cfg,e),cmpFired:function(){var t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0];switch(arguments[1].type){case"CMP_FIRED":return!0;default:return t}}(t.cmpFired,e),config:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"SET_CONFIG":return r({},e.config,{gdpr:r({cmpTimeout:e.defaultCmpTimeout},e.config.gdpr),isSelfServePub:e.config.pubID&&e.config.pubID.length>=5});default:return r({},t)}}(t.config,e),displayAdServer:function(){var t=arguments.length<=0||void 0===arguments[0]?{noBidSlotIDs:[]}:arguments[0],e=arguments[1];switch(e.type){case"SLOT_RENDER_ENDED_SET":return r({},t,{slotRenderEndedSet:!0});case"NO_BID_ON_ADSERVER_SLOTS":return r({},t,{noBidSlotIDs:t.noBidSlotIDs.concat(e.slotIDs)});case"REQUESTED_BID_FOR_ADSERVER_SLOTS":return r({},t,{noBidSlotIDs:t.noBidSlotIDs.filter(function(t){return!(0,a.inArray)(e.slotIDs,t)})});default:return r({},t,{noBidSlotIDs:[].concat(c(t.noBidSlotIDs))})}}(t.displayAdServer,e),eventLog:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1];switch(e.type){case"LOG_EVENT":return[].concat(c(t),[r({},e.event)]);default:return[].concat(c(t))}}(t.eventLog,e),experiments:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"SHOULD_CHUNK_REQUESTS":return r({chunkRequests:!0===t.shouldSampleLatency&&e.value},t);case"SHOULD_SAMPLE_LATENCY":return r({},t,{shouldSampleLatency:e.value});default:return r({},t)}}(t.experiments,e),gdpr:function(){var t=arguments.length<=0||void 0===arguments[0]?null:arguments[0],e=arguments[1];switch(e.type){case"SET_GDPR_CONFIG":return null===e.config?null:r({},e.config);default:return null===t?t:r({},t)}}(t.gdpr,e),gdprQue:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1];switch(e.type){case"ADD_GDPR_QUE_ITEM":return[].concat(c(t),[e.func]);case"CLEAR_GDPR_QUE":return[];default:return[].concat(c(t))}}(t.gdprQue,e),Q:function(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1];switch(e.type){case"SET_Q":return[].concat(c(e.Q));default:return[].concat(c(t))}}(t.Q,e),slotBids:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"BID_STATE_CHANGE":return r({},t,i({},e.slotID,t[e.slotID].map(function(t){var n={};return(0,a.checkAllPossibleBidCacheIds)(t,e.bidID,e.dealId)&&(n.bidState=e.bidState,e.bidState===o.BID_STATES.rendered?n.renderTime=e.ts:e.bidState===o.BID_STATES.set&&(n.setAtTimes=(0,a.safeObjectHasProp)(t,"setAtTimes")?[].concat(c(t.setAtTimes),[e.ts]):[e.ts])),r({},t,n)})));case"UPDATE_BID_INFO_PROP":return void 0===t[e.slotID]||t[e.slotID].filter(function(t){return(0,a.checkAllPossibleBidCacheIds)(t,e.iid,e.dealId)}).length<1?r({},t):r({},t,i({},e.slotID,t[e.slotID].map(function(t){return t=r({},t),(0,a.checkAllPossibleBidCacheIds)(t,e.iid,e.dealId)&&(t[e.key]=e.value),t})));case"UPDATE_SLOT_BIDS":return r({},t,e.bids.reduce(function(e,n){return(0,a.safeObjectHasProp)(e,n.slotID)?e[n.slotID]=[].concat(c(e[n.slotID]),[r({},n)]):(0,a.safeObjectHasProp)(t,n.slotID)?e[n.slotID]=[].concat(c(t[n.slotID]),[r({},n)]):e[n.slotID]=[r({},n)],e},{}));default:return r({},t)}}(t.slotBids,e),sync917:function(){var t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],e=arguments[1];switch(e.type){case"SET_SYNC_917":return e.value;default:return t}}(t.sync917,e),targetingKeys:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"UPDATE_SLOT_BIDS":return r({},t,e.bids.reduce(function(e,n){return(0,a.safeObjectHasProp)(t,n.slotID)?e[n.slotID]=[].concat(c(t[n.slotID]),c((n.targeting?n.targeting:o.DISPLAY_TARGETING_KEYS).filter(function(e){return-1===t[n.slotID].indexOf(e)}))):e[n.slotID]=n.targeting?n.targeting:o.DISPLAY_TARGETING_KEYS,e},{}));default:return r({},t)}}(t.targetingKeys,e),tests:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];switch(e.type){case"UPDATE_TEST":return r({},t,i({},e.id,{name:e.name,status:e.status,case:e.case}));default:return r({},t)}}(t.tests,e)}}var l={getState:function(){return s},dispatch:function(t){s=u(s,t),d.forEach(function(t){return t()})},subscribe:function(t){d.push(t)}};(0,a.isDebugEnabled)("redux")&&(0,a.hasLocalStorage)()&&(0,a.safeObjectHasProp)(window,"__REDUX_DEVTOOLS_EXTENSION__")&&(e.store=l=window.__REDUX_DEVTOOLS_EXTENSION__(u)),l.dispatch({type:"NOOP"}),e.store=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pixels=e.pixelQueue=void 0,e.noBidCacheIdPixel=function(t){return u(d()+"p/PH/"+s(t))},e.bidCacheIdPixel=function(t,e){return u(""+d()+t+"/"+s(e))},e.sendPixels=function(){i||(i=!0,a.forEach(u))},e.resetSendPixels=function(){i=!1,e.pixels=c=[],e.pixelQueue=a=[]};var r=n(1),o=n(2),a=e.pixelQueue=[],i=!1,c=e.pixels=[];function s(t){t._tl="aps-tag";var e=JSON.stringify(t);return e=e.replace(/\\.{1}/g,""),encodeURIComponent(e)}function d(){var t=o.store.getState().cfg,e=t.DEFAULT_AAX_HOST,n=t.PIXEL_PATH;return""+r.PROTOCOL+e+n}function u(t){if(i){var e=new Image;return e.src=t,c.push(e),e}return a.push(t),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.reportError=f,e.wrapFunction=function(t,e){return function(){try{return t.apply(null,arguments)}catch(t){return f(t,e),null}}},e.consoleWarn=function(t){(!(arguments.length<=1||void 0===arguments[1])&&arguments[1]||(0,r.isDebugEnabled)("errors"))&&window[s][u](t)};var r=n(0),o=n(1),a=n(3),i=n(2),c=(0,r.shouldSample)(10),s="console",d="error",u="warn",l=void 0,m=void 0;function f(t,e,n){try{if((n||(0,r.isDebugEnabled)("errors"))&&window[s][d](t),!c)return!1;var u={lv:o.LIBRARY_VERSION,ts:Date.now(),url:encodeURIComponent(window.document.documentURI),r:encodeURIComponent(window.document.referrer),_type:"apstagError",e:{et:t.name,el:e,msg:t.message}};if(void 0===l){var f=i.store.getState();void 0!==f&&void 0!==f.config&&(l=f.config.isSelfServePub,m=f.config.pubID)}return void 0!==l&&(l?(u.src=o.SELF_SERVE_PUB_SRC,u.pubid=m):u.src=m),(0,a.noBidCacheIdPixel)(u),!0}catch(t){}return!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GDPR=e.cmpLocalStorageChanged=e.cmpResponseKey=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a=n(0),i=n(4);Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t};var c=e.cmpResponseKey="cmpRTimesA",s=e.cmpLocalStorageChanged="crfgL0cSt0rC";e.GDPR=function(t,e){t=o({},t);var n=void 0,d=50,u=[1,1,3,5],l=0,m=!1,f="crfgL0cSt0r",p=!1,g="cmp-timeout";try{var _=function(){e=(0,i.wrapFunction)(e,"GdprCallback");var _=function(t){try{if(!(0,a.hasLocalStorage)())return;window.localStorage.setItem(s,"0"),!1!==p&&p.enabled===t.enabled&&p.consent===t.consent||(window.localStorage.setItem(s,"2"),window.localStorage.setItem(f,JSON.stringify({enabled:t.enabled,consent:t.consent})),!1!==p&&(v.lsStatus="cmp-override",window.localStorage.setItem(s,"1"))),window.document.cookie=f+"=true;max-age=604800"}catch(t){return void(0,i.reportError)(t,"__gdpr_save__")}},y=function(t){try{t=o({},t),Object.keys(t.log).map(function(e){"string"==typeof t.log[e]&&-1!==t.log[e].indexOf("/")&&(t.log[e]=encodeURIComponent(t.log[e]))}),t.log=JSON.stringify(t.log)}catch(t){(0,i.reportError)(t,"__gdpr_stringify_log__")}e(t)};"object"===(void 0===t?"undefined":r(t))&&null!==t||(t={});var v={cmpGlobal:t.cmpGlobal,cmpTimeout:t.cmpTimeout,enabled:t.enabled};!1===t.enabled?v.status="explicit-no-gdpr":!0===t.enabled&&(v.status=void 0!==t.consent?"explicit-consent-passed":"explicit-no-consent-passed"),(0,a.hasLocalStorage)()&&(p=function(){try{var t=window.localStorage.getItem(f);return null!==t&&JSON.parse(t)}catch(t){return(0,i.reportError)(t,"__gdpr_parse_ls__"),!1}}()),!1!==p&&(void 0===window.document.cookie||-1===window.document.cookie.indexOf(f+"=true")?(p=!1,v.lsStatus="invalid"):(v.lsStatus="present",d=50,g="cmp-timeout-cfb")),"string"!=typeof t.cmpGlobal&&(t.cmpGlobal="__cmp"),Number.isInteger(t.cmpTimeout)||(t.cmpTimeout=d);var h,b,S=(b={log:v},void 0===(h=t).enabled?b:!1===h.enabled?(b.enabled=0,b):(Number.isInteger(h.enabled)?b.enabled=h.enabled:b.enabled=1,"string"==typeof h.consent&&(b.consent=h.consent),b));if(void 0!==S.enabled)return y(S),{v:void 0};!1!==p&&(S=o({},p,S)),!1===p||p.enabled===S.enabled&&p.consent===S.consent||(v.lsStatus="pub-override"),function t(e,r){if(!(0,a.safeObjectHasProp)(window,e.cmpGlobal)||"function"!=typeof window[e.cmpGlobal])return r({error:"no-cmp"}),void(l<u.length&&(setTimeout(t,1e3*u[l],e,r),l++));setTimeout(r,e.cmpTimeout,{timeout:!0},!0),n=Date.now();try{window[e.cmpGlobal]("getConsentData",null,r)}catch(t){r({error:"cmp-internal-error"}),(0,i.reportError)(t,"__gdpr_cmp__")}}(t,function(t,e,o){if(!m||"object"!==(void 0===e?"undefined":r(e))||null===e||!e.timeout){m=!0;try{return"object"===(void 0===e?"undefined":r(e))&&null!==e&&void 0!==e.error?(v.status=e.error,void y(t)):o&&"object"===(void 0===e?"undefined":r(e))&&null!==e?e.timeout?(v.status=g,void y(t)):(function(t){if((0,a.hasLocalStorage)())try{var e=window.localStorage.getItem(c);(e=null!==e?JSON.parse(e):[]).push(t),window.localStorage.setItem(c,JSON.stringify(e))}catch(t){(0,i.reportError)(t,"__gdpr_save_time__")}}(Date.now()-n),v.status="success",e.gdprApplies?(t.enabled=1,t.consent=e.consentData,_(t),void y(t)):(t.enabled=0,delete t.consent,_(t),void y(t))):(v.status="cmp-error",void y(t))}catch(e){return(0,i.reportError)(e,"__gdpr_cmp_callback__"),v.status="func-error",void y(t)}}}.bind(null,S))}();if("object"===(void 0===_?"undefined":r(_)))return _.v}catch(t){m||e({log:'{"status":"global-func-error"}'}),m=!0,(0,i.reportError)(t,"__gdpr_global_func__")}}},,,,,,,,,,function(t,e,n){"use strict";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(5),i={log:'{"status":"cmp-in-flight"}'},c=!1,s=[],d={wrapFunction:function(t){return function(){try{return t.apply(null,arguments)}catch(t){return null}}},reportError:console.error};(0,a.GDPR)({},function(t){i=t,c=!0,s.map(function(t){try{t()}catch(t){}}),s=[]},d),window.amznpassback=window.amznpassback||{},window.amznpassback.CPM_JS||(window.amznpassback.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz");var u=window.amznpassback;function l(t,e){t.write(e),t.close()}function m(t){var e=!1;function n(t){if(!e){e=!0;var n=document.createElement("iframe");n.style.display="none",n.src=t,document.body.appendChild(n)}}document.readyState&&"loading"==document.readyState?document.addEventListener?document.addEventListener("DOMContentLoaded",function(){n(t)},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&n(t)}):n(t)}Date.now||(Date.now=function(){return(new Date).getTime()});var f=function(t,e,n){var d="https:"===e.location.protocol;t.latencyUtil=t.latencyUtil||null,t.protocol=d?"https://":"http://",t.DEFAULT_HOST="aax.amazon-adsystem.com",t.host=t.DEFAULT_HOST,t.dtb_svc="/e/dtb/bid",t.pb_svc="/x/getad",t.px_svc="/x/px/",t.debug_mode=t.debug_mode||!1,t.MIN_TIMEOUT=0,t.DEFAULT_TIMEOUT=1e3,t.targetingKey="amznslots",t.latencySamplingRate=1,t.vidKey="amzn_vid",t.tasks=t.tasks||[],t.VIEWABILITY_CUTOFF_AREA=t.VIEWABILITY_CUTOFF_AREA||.5,t.VIEWABILITY_CUTOFF_DURATION_SEC=t.VIEWABILITY_CUTOFF_DURATION_SEC||1,t.CSM_JS="//c.amazon-adsystem.com/aax2/csm.js.gz",t.vads={};var u=!1,p=new function(){this.metrics={},this.t0=Date.now(),this.i=0,this.addTimer=function(t,e){e||(e=Date.now()),this.metrics[t]=e-this.t0},this.set=function(t,e){this.metrics[t]=e},this.schedule=function(e,n){var r=this;e||(e=5e3),n||(n="PH"),n+="/",setTimeout(function(){r.metrics.i=r.i,r.metrics.t0=r.t0,r.metrics.site=r.getTopDomain(t),r.metrics={},r.t0=Date.now(),r.i++},e)},this.getTopDomain=function(t){var e=decodeURIComponent(t.getReferrerURL());return(e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0]}};function g(e,n,r,o,a){var i=null;a=a||{};try{n&&"function"==typeof n&&(i=t.handleCallBack(n,r))}catch(t){}a.to||(a.to=r),t.doGetAdsAsync(e,o,a,i)}function _(e,n,r){this.startTime=null,this.stopTime=null,this.sourceId=n,this.sync=e,this.mode=r,this.latency=null,_.prototype.startTimer=function(){this.startTime=Date.now()},_.prototype.stopTimer=function(){this.stopTime=Date.now()},_.prototype.stopTimerAndReportLatency=function(){this.stopTimer(),this.calculateLatency(),this.isThrottled()||this.reportLatency()},_.prototype.calculateLatency=function(){this.latency=this.stopTime-this.startTime},_.prototype.isThrottled=function(){var e=parseInt(t.latencySamplingRate,10);if(!isNaN(e)){if(0==e)return!0;if(100==e)return!1;if(100*Math.random()<=e)return!1}return!0},_.prototype.reportLatency=function(){null!==this.latency&&this.latency}}return p.addTimer("tlt"),t.ads||(t.ads={}),t.updateAds=function(e){if(e&&e.cmp&&""!=e.cmp&&"undefined"!=e.cmp&&m(e.cmp),u=!0,t.ads=e.ads,t.ev=e.ev,e.vads){var n;t.vads=e.vads,t.ads||(t.ads={});var r=!1;for(n in e.vads)e.vads.hasOwnProperty(n)&&-1!=n.indexOf("_d")&&(t.ads[n]=e.vads[n],t.amzn_vid=e.vads[n],r=!0);if(!r)for(n in e.vads)e.vads.hasOwnProperty(n)&&(t.ads[n]=e.vads[n],t.amzn_vid=e.vads[n])}t.doAllTasks(),t.tasks.push=function(e){t.doTask(e)};try{e.lsr&&(t.latencySamplingRate=e.lsr),e.rm&&(p.addTimer("br"),p.set("brs","1"),p.schedule(e.to,e.id)),null!==t.latencyUtil&&t.latencyUtil.stopTimerAndReportLatency()}catch(t){}},t.aaxPunt=function(t){try{t&&t.cmp&&""!=t.cmp&&"undefined"!=t.cmp&&m(t.cmp),u=!0,p.addTimer("br"),p.set("brs","0"),t&&t.rm&&p.schedule(t.to,t.id)}catch(t){}},t.saveAds=function(e){t.saved_ads=e.ads,t.updateAds(e)},t.getAdForSlot=function(n,r,o){t.src_id=n;var a=a||{},i=a.u;t.host=3e3==n?"aax-cpm.amazon-adsystem.com":t.host,i||(i=t.getReferrerURL()),i&&-1!==i.indexOf("amzn_debug_mode")&&(t.debug_mode=!0);var c="src="+t.src_id+"&slot_uuid="+r+"&c=100&u="+i+"&cb="+Math.round(1e7*Math.random()),s=t.protocol+t.host+t.pb_svc+"?jsd=1&"+c;o?t.appendScriptTag(s):l(e,"<script type='text/javascript' src='"+s+"'><\/script>")},t.getAdsCallback=function(t,e,n,r,o){o=o||{},c?g(t,e,n,r,o):s.push(g.bind(null,t,e,n,r,o))},t.getVideoAdsCallback=function(e,n,r,o,a){(a=a||{}).mt="V",t.getAdsCallback(e,n,r,o,a)},t.getDisplayAdsCallback=function(e,n,r,o,a){(a=a||{}).mt="D",t.getAdsCallback(e,n,r,o,a)},t.getAdsAsync=function(e,n,r){t.doGetAdsAsync(e,n,r)},t.getVideoAdsAsync=function(e,n,r){(r=r||{}).mt="V",t.getAdsAsync(e,n,r)},t.getDisplayAdsAsync=function(e,n,r){(r=r||{}).mt="D",t.getAdsAsync(e,n,r)},t.handleCallBack=function(e,r){var o=!1,a=null,i=function(t){if(!o){try{e(t),a&&clearTimeout(a),t||p.set("to","1")}catch(t){}o=!0}},c=t.getValidMilliseconds(r);return a=c?n.setTimeout(i,c):n.setTimeout(i,t.DEFAULT_TIMEOUT),i},t.getValidMilliseconds=function(e){if(!e)return!1;try{var n=~~Number(e);if(n>t.MIN_TIMEOUT)return n}catch(t){return!1}return!1},t.getAds=function(n,r,o,a){if(u=!1,a)t.doGetAdsAsync(n,r,o);else{var i=t.getScriptSource(n,r,o);try{t.latencyUtil=new _(!0,n,o&&o.mt?o.mt:"DV"),t.latencyUtil.startTimer(),p.addTimer("sb"),p.set("src",n)}catch(t){}i&&l(e,"<script type='text/javascript' src='"+i+"'><\/script>")}},t.getVideoAds=function(e,n,r,o){(r=r||{}).mt="V",t.getAds(e,n,r,o)},t.getDisplayAds=function(e,n,r,o){(r=r||{}).mt="D",t.getAds(e,n,r,o)},t.doGetAdsAsync=function(e,n,r,o){u=!1;var a=t.getScriptSource(e,n,r);try{t.latencyUtil=new _(!1,e,r&&r.mt?r.mt:"DV"),t.latencyUtil.startTimer(),p.addTimer("ab"),p.set("src",e)}catch(t){}t.appendScriptTag(a,o)},t.getScriptSource=function(c,s,d){if(!t.ssb){t.src_id=c;var u=(d=d||{}).u,l=d.d,m=d.to,f=d.mt;if(u||(u=t.getReferrerURL()),u&&-1!==u.indexOf("amzn_debug_mode")&&(t.debug_mode=!0),d.mt&&"V"!=d.mt&&"DV"!=d.mt||t.vads&&(t.vads={},delete t.amzn_vid),t.ads&&(t.clearTargetingFromGPTAsync(),t.ads={}),t.startTime&&o("number"==t.startTime)&&p.addTimer("st",t.startTime),t.saved_ads&&(t.ads=t.saved_ads),l)try{e.domain=l}catch(t){}var g="src="+c+"&u="+u+"&cb="+Math.round(1e7*Math.random());return s&&(g+="&sz="+s),m&&(g+="&t="+m),f&&(g+="&mt="+f),"object"===(void 0===i?"undefined":o(i))&&(_={enabled:"gdpre",consent:"gdprc",log:"gdprl"},y=r({},i),Object.keys(_).filter(function(t){return void 0!==y[t]}).map(function(t){switch(t){case"log":if(function(){var t="amzn_lsTest";try{return window.localStorage.setItem(t,t),window.localStorage.removeItem(t),!0}catch(t){return!1}}()){var e=n.localStorage.getItem(a.cmpResponseKey);if(null!==e){try{e=JSON.parse(e)}catch(t){e=null}n.localStorage.removeItem(a.cmpResponseKey)}null!==e&&(y.log=JSON.stringify(r({},JSON.parse(y.log),{rtimes:e})));var o=n.localStorage.getItem(a.cmpLocalStorageChanged);null!==o&&(n.localStorage.removeItem(a.cmpLocalStorageChanged),y.log=JSON.stringify(r({},JSON.parse(y.log),{cc:o})))}}g+="&"+_[t]+"="+encodeURIComponent(y[t])})),t.protocol+t.host+t.dtb_svc+"?"+g}var _,y;t.ssb=!1},t.getReferrerURL=function(){var r=encodeURIComponent(e.documentURI);try{(r=encodeURIComponent(n.top.location.href))&&"undefined"!=r||(r=t.detectIframeAndGetURL())}catch(e){r=t.detectIframeAndGetURL()}return r},t.detectIframeAndGetURL=function(){try{if(n.top!==n.self)return encodeURIComponent(e.referrer)}catch(t){}return encodeURIComponent(e.documentURI)},t.appendScriptTag=function(t,n){if(t||!n||"function"!=typeof n){var r=e.getElementsByTagName("script")[0],o=e.createElement("script");o.type="text/javascript",o.async=!0,t&&(o.src=t);try{n&&"function"==typeof n&&(o.readyState?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(o.onreadystatechange=null,n(!0))}:o.onload=function(){n(!0)})}catch(t){}r.parentNode.insertBefore(o,r)}else n.apply(this,[!0])},t.renderAd=function(e,n){if(t.ads[n]){p.addTimer("imp");var r=t.ads[n];if(t.ev){var o="amznad"+Math.round(1e6*Math.random());r=(r=r.replace("window.top.amznads.detectViewability","window.amzncsm.rmD")).replace(/id=[^ ]*/,'id="'+o+'"');var a="<script type='text/javascript' src='"+t.CSM_JS+"'><\/script>\n";t.host!=t.DEFAULT_HOST&&(a+="<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}<\/script>\n"),r=a+r}l(e,r)}else{p.set("kvm","1");var i={c:"dtb"};i.src=t.src_id,i.kvmismatch=1,i.pubReturnedKey=n,i.aaxReturnedKeys=t.getTokens(),i.cb=Math.round(1e7*Math.random());try{i.u=encodeURIComponent(location.host+location.pathname),navigator&&(i.ua=encodeURIComponent(navigator.userAgent))}catch(t){}}},t.hasAds=function(e){var n;if(!e)try{return Object.keys(t.ads).length>0}catch(e){for(n in t.ads)if(t.ads.hasOwnProperty(n))return!0}for(n in t.ads)if(t.ads.hasOwnProperty(n)&&n.indexOf(e)>0)return!0;return!1},t.getTargeting=function(){var e={},n=0;t.getTokens()&&t.getTokens().length>0?(n=1,e[t.targetingKey]=t.getTokens(),t.amzn_vid&&(e[t.vidKey]=t.amzn_vid)):u||(n=2);try{p.addTimer("gk"),p.set("gks",n)}catch(t){}return e},t.setTargeting=function(e,n){var r;for(r in t.ads)if(t.ads.hasOwnProperty(r)){if(n&&r.indexOf(n)<0)continue;e(r,"1")}},t.setTargetingForGPTAsync=function(e){try{if(e){t.targetingKey=e;var n=t.getTokens();void 0!==n&&n.length>0&&googletag.cmd.push(function(){googletag.pubads().setTargeting(e,n),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)})}else{var r;for(r in t.ads)t.ads.hasOwnProperty(r)&&function(){var e=r;googletag.cmd.push(function(){f.debug_mode,googletag.pubads().setTargeting(e,"1"),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid)})}()}}catch(t){}},t.setTargetingForGPTSync=function(e){try{if(e){t.targetingKey=e;var n=t.getTokens();void 0!==n&&n.length>0&&(googletag.pubads().setTargeting(e,n),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid))}else{var r;for(r in t.ads)t.ads.hasOwnProperty(r)&&(googletag.pubads().setTargeting(r,"1"),t.amzn_vid&&googletag.pubads().setTargeting(t.vidKey,t.amzn_vid))}}catch(t){}},t.clearTargetingFromGPTAsync=function(){try{googletag&&googletag.pubads()&&googletag.pubads().clearTargeting(t.targetingKey),googletag.pubads().clearTargeting(t.vidKey)}catch(t){}},t.appendTargetingToAdServerUrl=function(e){try{var n;-1===e.indexOf("?")&&(e+="?");for(n in t.ads)t.ads.hasOwnProperty(n)&&(e+="&"+n+"=1")}catch(t){}return e},t.appendTargetingToQueryString=function(e){try{var n;for(n in t.ads)t.ads.hasOwnProperty(n)&&(e+="&"+n+"=1")}catch(t){}return e},t.getTokens=function(e){var n,r=[];try{for(n in t.ads)if(t.ads.hasOwnProperty(n)){if(e&&n.indexOf(e)<0)continue;r.push(n)}}catch(t){}return r},t.getKeys=t.getTokens,t.getVid=function(){return t.amzn_vid},t.doAllTasks=function(){for(;t.tasks.length>0;){var e=t.tasks.shift();t.doTask(e)}},t.doTask=function(t){try{t.call()}catch(t){}},t.tryGetAdsAsync=function(){t.ssb&&t.__ads&&t.updateAds(t.__ads),t.asyncParams&&(t.startTime=t.asyncParams.startTime,t.getAdsCallback(t.asyncParams.id,t.asyncParams.callbackFn,t.asyncParams.timeout,t.asyncParams.size,t.asyncParams.data))},t}(window.amznads||{},document,window);f.tryGetAdsAsync(),window.amzn_ads=function(t){try{f.updateAds(t)}catch(t){}},window.amznads=f,window.aax_write=l,window.amznMatchCookie=m,window.aax_render_ad=function(t){if(t&&t.cmp&&""!=t.cmp&&"undefined"!=t.cmp&&m(t.cmp),t.passback)l(document,t.html);else{var e=t.slotSize;if(e){var n,r=e.indexOf("x"),o=e.substring(0,r),a=e.substring(r+1),i="amznad"+Math.round(1e6*Math.random());l(document,'<iframe id="'+i+'" width="'+o+'" height="'+a+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0"></iframe>');try{var c=(n=document.getElementById(i)).contentWindow||n.contentDocument;c.document&&(c=c.document),l(c,t.html);try{t.iid&&(document.write('<script type="text/javascript" src="'+u.CSM_JS+'"><\/script>'),document.write('<script type="text/javascript">'),document.write('  amzncsm.host="aax.amazon-adsystem.com";\n'),document.write('  amzncsm.rmC(document.getElementById("'+i+'"), "'+t.iid+'", window, document);'),document.write("<\/script>"),document.close())}catch(t){console&&console.log}}catch(t){n&&(n.style.display="none")}}else l(document,t.html)}}},function(t,e,n){t.exports=n(15)}]);
//# sourceMappingURL=amzn_ads.js.map