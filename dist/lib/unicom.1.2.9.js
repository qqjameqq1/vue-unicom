"use strict";function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _slicedToArray=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var f,u=e[Symbol.iterator]();!(r=(f=u.next()).done)&&(n.push(f.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueUnicom=t()}(window,function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("[object array]"==s.call(t).toLowerCase())for(var o=0;o<t.length;o+=1)e(t[o],n,r,i);else if(t){var f=r?r(t):t;void 0===f&&(f=t),i[f]||(n.push(f),i[f]=!0)}return n}function t(t,n,r){var i=l.get(this)||{},o=i.group||[];r&&e(r).forEach(function(e){if(o.indexOf(e)<0){var n=h[e];n&&n.splice(n.indexOf(t),1)}}),e(n).forEach(function(e){var n=h[e];n||(n=h[e]=[]),n.indexOf(t)<0&&n.push(t)})}function n(e,t,n){t!=n&&(n&&d[n]==e&&delete d[n],t&&(d[t]=e))}function r(e,t,n){y[e]||(y[e]=[]),y[e].push({fn:t,self:n,method:e})}function i(t,n,r,i){var o=y[t],f=0;if(o)for(var u=0;u<o.length;u+=1){var a=o[u],c=a.fn,s=a.self;if("#"==r){if(s[v]!=n)continue}else if("@"==r){var h=l.get(s).group,d=s[p],g=d?e(d):[];if((!h||h.indexOf(n)<0)&&g.indexOf(n)<0)continue}f+=1,c.apply(s,i)}return f}function o(e,t){var n=y[e];if(n)for(var r=0;r<n.length;r+=1)if(t===n[r].self)return void n.splice(r,1)}function f(e,t,n,r,o){if(e)return r.unshift(o),i(e,t,n,r)}function u(e){for(var t="",n="",r="",i=e.replace(/^([`~])/,function(e,t){return"～"==t&&(r=t),""}).replace(/([@#])([^@#]*)$/,function(e,r,i){return t=i,n=r,""}),o=arguments.length,u=Array(o>1?o-1:0),a=1;a<o;a++)u[a-1]=arguments[a];if(r)return g.push([i,t,n,u,this]),this;var c=f(i,t,n,u,this);switch(n){case"#":return d[t]||null;case"@":return h[t]||[]}return c}function a(i){var c,s,d=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=d.name,m=void 0===y?"unicom":y,b=d.idName,x=d.groupName;if(!a.installed){a.installed=!0,i.prototype["$"+m]=u,i[m]=u,v=b||m+"Id",p=x||m+"Name",i.mixin({props:(c={},_defineProperty(c,v,{type:String,default:""}),_defineProperty(c,p,{type:[String,Array],default:""}),c),watch:(s={},_defineProperty(s,v,function(e,t){n(this,e,t)}),_defineProperty(s,p,{deep:!0,handler:function(e,n){t(this,e,n)}}),s),beforeCreate:function(){var t=this,n=this.$options,i=n[m],o={},f=!1,u=o.uni={};i&&i.length&&(f=!0,i.forEach(function(e){if(e)for(var n in e)u[n]||(u[n]=[]),u[n].push([e[n]]),r(n,e[n],t)}));var a=o.group=[];e(n[p],a,function(e){var n=String(e);h[n]||(h[n]=[]),h[n].push(t)}),a.length>0&&(f=!0),f&&l.set(this,o)},created:function(){var e=this[v];e&&n(this,e);var r=this[p];r&&t(this,r);for(var i=l.get(this)||{},o=0;o<g.length;o+=1){var u=g[o],a=_slicedToArray(u,5),c=a[0],s=a[1],h=a[2],d=a[3],y=a[4],m=!1;"#"==h?s==e&&(m=!0):"@"==h?i.group&&i.group.indexOf(s)>-1&&(m=!0):(""==c||Object.keys(i.uni||{}).indexOf(c)>-1)&&(m=!0),m&&(""==c?d[0](this):(g.splice(o,1),o-=1,f(c,s,h,d,y)))}},destroyed:function(){var e=this,r=this.unicomId;r&&n(this,void 0,r);var i=this[p];i&&t(this,void 0,i);var f=l.get(this);if(f){l.delete(this);var u=f.uni;for(var a in u)o(a,this);f.group.forEach(function(t){var n=h[t];if(n){var r=n.indexOf(e);r>-1&&n.splice(r,1),0==n.length&&delete h[t]}});for(var c=0;c<g.length;){var s=g[c];""==s[0]&&s[4]==this?g.splice(c,1):c+=1}}}});var O=i.config.optionMergeStrategies;O[m]=O[p]=function(e,t){var n=e||[];return t&&n.push(t),n}}}function c(){return u.apply(this,arguments)}var s=Object.prototype.toString,l=new Map,p="",h={},d={},v="",y={},g=[];return c.install=a,c});