(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t),o.d(t,{components:()=>I});const n=flarum.core.compat["forum/app"];var e=o.n(n);const r=flarum.core.compat["common/extend"],a=flarum.core.compat["common/Application"];var c=o.n(a);function s(o,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},s(o,t)}function u(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,s(o,t)}const l=flarum.core.compat["common/Component"];var i=o.n(l);const p=flarum.core.compat["common/helpers/listItems"];var f=o.n(p);const d=flarum.core.compat["common/utils/ItemList"];var b=o.n(d);const v=flarum.core.compat["common/components/LinkButton"];var y=o.n(v),h=function(o){function t(){for(var t,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(t=o.call.apply(o,[this].concat(e))||this).attrs=void 0,t}return u(t,o),t.prototype.view=function(o){var t=this.attrs,n=t.route,e=t.icon,r=t.label;return m(y(),{href:n,icon:e,title:r},r)},t}(i());const g=flarum.core.compat["common/components/Button"];var _=o.n(g);const M=flarum.core.compat["forum/components/LogInModal"];var O=o.n(M);const w=flarum.core.compat["forum/components/SessionDropdown"];var j=o.n(w);const S=flarum.core.compat["common/helpers/avatar"];var T=o.n(S),B=function(o){function t(){return o.apply(this,arguments)||this}return u(t,o),t.prototype.getButtonContent=function(o){var t=e().session.user;return[T()(t)," ",m("span",{className:"Button-label"},e().translator.trans("core.forum.header.profile_button"))]},t}(j()),P=function(o){function t(){return o.apply(this,arguments)||this}u(t,o);var n=t.prototype;return n.view=function(o){return m("nav",{className:"MobileTab"},m("ul",{className:"MobileTab-items"},f()(this.items().toArray())))},n.items=function(){var o=new(b());return o.add("home",m(h,{route:"/",icon:"fas fa-home",label:e().translator.trans("capomod-mobile-tab.forum.home")}),100),o.add("discuss",m(h,{route:"/all",icon:"fas fa-tags",label:e().translator.trans("capomod-mobile-tab.forum.discuss")}),100),o.add("capomsg",m(h,{route:"/t/CapoMsg",icon:"fa-solid fa-virus",label:e().translator.trans("capomod-mobile-tab.forum.capomsg")}),100),e().session.user?o.add("session",m(B,null),70):o.add("logIn",m(_(),{icon:"fas fa-user",className:"Button Button--link",onclick:function(){return e().modal.show(O(),{})}},e().translator.trans("core.forum.header.log_in_link")),70),o},t}(i()),I={MobileTab:P,MobileTabItem:h,MobileTabSessionDropdown:B};e().initializers.add("acpl/mobile-tab",(function(){(0,r.extend)(c().prototype,"mount",(function(){var o=document.createElement("div");m.mount(document.body.appendChild(o),P)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map