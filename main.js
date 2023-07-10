/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},t(e,n)};var n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};function r(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function o(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;function a(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=a(e[n],t[n]));return e}var s=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();var c=function(e){function n(t,r,i){var o=e.call(this,r)||this;return o.code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,l.prototype.create),o}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}(n,e),n}(Error),l=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,t){return e.replace(u,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").";return new c(i,s,r)},e}(),u=/\{\$([^}]+)}/g;function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h(e,t){var n=new f(e,t);return n.subscribe.bind(n)}!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],l=this.chain_[2],u=this.chain_[3],p=this.chain_[4];for(r=0;r<80;r++)r<40?r<20?(o=u^c&(l^u),a=1518500249):(o=c^l^u,a=1859775393):r<60?(o=c&l|u&(c|l),a=2400959708):(o=c^l^u,a=3395469782),i=(s<<5|s>>>27)+o+p+a+n[r]&4294967295,p=u,u=l,l=4294967295&(c<<30|c>>>2),c=s,s=i;this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();var f=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=["next","error","complete"];n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e)?e:{next:e,error:t,complete:n}).next&&(r.next=d),void 0===r.error&&(r.error=d),void 0===r.complete&&(r.complete=d);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function d(){}var v,m=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),y="[DEFAULT]",b=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new s;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:y})}catch(e){}try{for(var o=r(this.instancesDeferred.entries()),a=o.next();!a.done;a=o.next()){var s=i(a.value,2),c=s[0],l=s[1],u=this.normalizeInstanceIdentifier(c);try{var p=this.getOrInitializeService({instanceIdentifier:u});l.resolve(p)}catch(e){}}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=y),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return e=this,t=void 0,r=function(){var e;return function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(o(o([],i(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),i(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))},new((n=void 0)||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}));var e,t,n,r},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=y),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=y),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var o=e.options,a=void 0===o?{}:o,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:s,options:a});try{for(var l=r(this.instancesDeferred.entries()),u=l.next();!u.done;u=l.next()){var p=i(u.value,2),h=p[0],f=p[1];s===this.normalizeInstanceIdentifier(h)&&f.resolve(c)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}return c},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var a=r(o),s=a.next();!s.done;s=a.next()){var c=s.value;try{c(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===y?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=y),this.component?this.component.multipleInstances?e:y:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}(),g=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new b(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();function E(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var _,I=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(_||(_={}));var w,C={debug:_.DEBUG,verbose:_.VERBOSE,info:_.INFO,warn:_.WARN,error:_.ERROR,silent:_.SILENT},O=_.INFO,k=((v={})[_.DEBUG]="log",v[_.VERBOSE]="log",v[_.INFO]="info",v[_.WARN]="warn",v[_.ERROR]="error",v),S=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=k[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,E(["["+i+"]  "+e.name+":"],n))}},N=function(){function e(e){this.name=e,this._logLevel=O,this._logHandler=S,this._userLogHandler=null,I.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in _))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?C[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,E([this,_.DEBUG],e)),this._logHandler.apply(this,E([this,_.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,E([this,_.VERBOSE],e)),this._logHandler.apply(this,E([this,_.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,E([this,_.INFO],e)),this._logHandler.apply(this,E([this,_.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,E([this,_.WARN],e)),this._logHandler.apply(this,E([this,_.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,E([this,_.ERROR],e)),this._logHandler.apply(this,E([this,_.ERROR],e))},e}();function A(e){I.forEach((function(t){t.setLogLevel(e)}))}var R,x=((w={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",w["bad-app-name"]="Illegal App name: '{$appName}",w["duplicate-app"]="Firebase App named '{$appName}' already exists",w["app-deleted"]="Firebase App named '{$appName}' already deleted",w["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",w["invalid-log-argument"]="First argument to `onLog` must be null or a function.",w),L=new l("app","Firebase",x),z="@firebase/app",P="[DEFAULT]",D=((R={})[z]="fire-core",R["@firebase/analytics"]="fire-analytics",R["@firebase/app-check"]="fire-app-check",R["@firebase/auth"]="fire-auth",R["@firebase/database"]="fire-rtdb",R["@firebase/functions"]="fire-fn",R["@firebase/installations"]="fire-iid",R["@firebase/messaging"]="fire-fcm",R["@firebase/performance"]="fire-perf",R["@firebase/remote-config"]="fire-rc",R["@firebase/storage"]="fire-gcs",R["@firebase/firestore"]="fire-fst",R["fire-js"]="fire-js",R["firebase-wrapper"]="fire-js-all",R),j=new N("@firebase/app"),B=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=a(void 0,e),this.container=new g(t.name),this._addComponent(new m("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(e){return r._addComponent(e)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){var n;void 0===t&&(t=P),this.checkDestroyed_();var r=this.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=P),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){j.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw L.create("app-deleted",{appName:this.name_})},e}();B.prototype.name&&B.prototype.options||B.prototype.delete||console.log("dc");var F=function e(){var t=function(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={}),"object"==typeof i&&null!==i||(i={name:i});var o=i;void 0===o.name&&(o.name=P);var a=o.name;if("string"!=typeof a||!a)throw L.create("bad-app-name",{appName:String(a)});if(p(t,a))throw L.create("duplicate-app",{appName:a});var s=new e(n,o,r);return t[a]=s,s},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=D[e])&&void 0!==r?r:e;n&&(i+="-"+n);var a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){var c=['Unable to register library "'+i+'" with version "'+t+'":'];return a&&c.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),a&&s&&c.push("and"),s&&c.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void j.warn(c.join(" "))}o(new m(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:A,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw L.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=C[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:_[n].toLowerCase(),message:a,args:i,type:t.name})}},r=0,i=I;r<i.length;r++)n(i[r])}(e,t)},apps:null,SDK_VERSION:"8.10.0",INTERNAL:{registerComponent:o,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){return"serverAuth"===t?null:t}}};function i(e){if(!p(t,e=e||P))throw L.create("no-app",{appName:e});return t[e]}function o(o){var s=o.name;if(n.has(s))return j.debug("There were multiple attempts to register component "+s+"."),"PUBLIC"===o.type?r[s]:null;if(n.set(s,o),"PUBLIC"===o.type){var c=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[s])throw L.create("invalid-app-argument",{appName:s});return e[s]()};void 0!==o.serviceProps&&a(c,o.serviceProps),r[s]=c,e.prototype[s]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,s).apply(this,o.multipleInstances?e:[])}}for(var l=0,u=Object.keys(t);l<u.length;l++){var p=u[l];t[p]._addComponent(o)}return"PUBLIC"===o.type?r[s]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}(B);return t.INTERNAL=n(n({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){a(t,e)},createSubscribe:h,ErrorFactory:l,deepExtend:a}),t}(),T=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();if("object"==typeof self&&self.self===self&&void 0!==self.firebase){j.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var H=self.firebase.SDK_VERSION;H&&H.indexOf("LITE")>=0&&j.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var M=F.initializeApp;F.initializeApp=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return function(){try{return"[object process]"===Object.prototype.toString.call(e.g.process)}catch(e){return!1}}()&&j.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),M.apply(void 0,t)};var V=F;!function(e,t){e.INTERNAL.registerComponent(new m("platform-logger",(function(e){return new T(e)}),"PRIVATE")),e.registerVersion(z,"0.6.30",void 0),e.registerVersion("fire-js","")}(V);const U=V;var W="8.10.1";U.registerVersion("firebase",W,"app"),U.SDK_VERSION=W,U.initializeApp({apiKey:"AIzaSyDGxolS2-nqQXWNea191x3cf0eN1JHXeSk",authDomain:"library-47f2a.firebaseapp.com",projectId:"library-47f2a",storageBucket:"library-47f2a.appspot.com",messagingSenderId:"921276267687",appId:"1:921276267687:web:1fe76a7ed1753bd886af82"}),(()=>{let e=[];const t=document.getElementById("book-container");let n;document.getElementById("new-book-btn").addEventListener("click",(function(s){const c=document.getElementById("book-title"),l=document.getElementById("book-author"),u=document.getElementById("book-pages"),p=document.getElementById("is-read");c.validity.valueMissing||l.validity.valueMissing||u.validity.typeMismatch||u.validity.valueMissing||u.validity.rangeUnderflow?(i(),s.preventDefault()):function(i,s,c,l){let u=new r;u.title=i,u.author=s,u.pages=c,u.isRead=l,e.push(u),Array.from(document.getElementsByClassName("book")).forEach((e=>{e.parentElement.removeChild(e)})),e.forEach(((e,n)=>{const r=document.createElement("div"),i=document.createElement("h3"),o=document.createElement("p"),s=document.createElement("p"),c=document.createElement("div"),l=document.createElement("p"),u=document.createElement("input"),p=document.createElement("div");u.setAttribute("type","checkbox");const h=document.createElement("button");h.type="button",h.className="remove-btn",h.textContent="Remove Book",i.textContent=e.title,o.textContent=e.author,s.textContent=e.pages+" pages",!0===e.isRead?(l.textContent="Read",p.style.backgroundColor="rgb(133, 190, 133)"):(l.textContent="Not read",p.style.backgroundColor="red"),t.appendChild(r),r.className="book",r.dataset.index=n,r.appendChild(i),r.appendChild(o),r.appendChild(s),r.appendChild(c),c.appendChild(l),c.appendChild(u),c.appendChild(p),r.appendChild(h),u.addEventListener("click",a)})),n=Array.from(document.getElementsByClassName("remove-btn")),n.forEach((e=>{e.addEventListener("click",o)}))}(c.value,l.value,u.value,p.checked),i()}));class r{title;author;pages;isRead;constructor(){}get info(){return title+" by "+author+", "+pages+", "+isRead}set title(e){this.title=e}set author(e){this.author=e}set pages(e){this.pages=e}set isRead(e){this.isRead=e}}function i(){const e=document.getElementById("book-title"),t=document.getElementById("book-author"),n=document.getElementById("book-pages"),r=document.getElementById("title-val"),i=document.getElementById("author-val"),o=document.getElementById("pages-val");e.validity.valueMissing?r.textContent="You need to enter a title":r.textContent="",t.validity.valueMissing?i.textContent="You need to enter an author":i.textContent="",n.validity.typeMismatch?o.textContent="Enter a valid number":o.textContent="",n.validity.valueMissing?o.textContent="Enter a valid number":o.textContent="",n.validity.rangeUnderflow?o.textContent="Enter a valid number":o.textContent=""}function o(t){let n=t.target.parentElement;index=n.dataset.index,e.splice(index,1),n.parentElement.removeChild(n),Array.from(document.getElementsByClassName("book")).forEach(((e,t)=>{e.dataset.index=t}))}function a(t){const n=t.target,r=n.parentElement.parentElement,i=document.querySelector('[data-index="'+r.dataset.index+'"] div div'),o=document.querySelector('[data-index="'+r.dataset.index+'"] div p');!0===n.checked&&e[r.dataset.index].isRead?(i.style.backgroundColor="red",o.textContent="Not read",e[r.dataset.index].isRead=!1):(i.style.backgroundColor="rgb(133, 190, 133)",o.textContent="Read",e[r.dataset.index].isRead=!0)}})()})();