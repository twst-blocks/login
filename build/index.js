!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(3),r=n(1),a=n(0),o=n(2);n(4);var c={labelUsername:{type:"string",default:Object(r.__)("Username or Email Address","twst-login-block")},defaultUsername:{type:"string",default:""},labelPassword:{type:"string",default:Object(r.__)("Password","twst-login-block")},labelRememberMe:{type:"string",default:Object(r.__)("Remember Me","twst-login-block")},defaultRememberMe:{type:"boolean",default:!1},labelLogIn:{type:"string",default:Object(r.__)("Log In","twst-login-block")}};Object(l.registerBlockType)("twst/login",{title:Object(r.__)("Login","twst-login-block"),description:Object(r.__)("Easily insert a login form block into your post or page!","twst-login-block"),category:"widgets",icon:"lock",supports:{html:!1},attributes:c,example:{},edit:function(e){return function(e,t){var n=e.attributes,l=e.className,c=e.setAttributes;return Object(a.createElement)("form",{className:l,onSubmit:function(e){return e.preventDefault()}},Object(a.createElement)("p",{className:"login-username"},Object(a.createElement)(o.RichText,{tagName:"label",placeholder:t.labelUsername.default,keepPlaceholderOnFocus:"true",formattingControls:["bold","italic"],onChange:function(e){return c({labelUsername:e})},value:n.labelUsername}),Object(a.createElement)("input",{type:"text",className:"input",placeholder:Object(r.__)("Default username","twst-login-block"),onChange:function(e){return c({defaultUsername:e.target.value})},value:n.defaultUsername,size:"20"})),Object(a.createElement)("p",{className:"login-password"},Object(a.createElement)(o.RichText,{tagName:"label",placeholder:t.labelPassword.default,keepPlaceholderOnFocus:"true",formattingControls:["bold","italic"],onChange:function(e){return c({labelPassword:e})},value:n.labelPassword}),Object(a.createElement)("input",{type:"password",className:"input",size:"20",readOnly:!0})),Object(a.createElement)("p",{className:"login-remember"},Object(a.createElement)("label",null,Object(a.createElement)("input",{type:"checkbox",onChange:function(e){return c({defaultRememberMe:"on"===e.target.value})},checked:n.defaultRememberMe})),Object(a.createElement)(o.RichText,{tagName:"span",placeholder:t.labelRememberMe.default,keepPlaceholderOnFocus:"true",formattingControls:["bold","italic"],onChange:function(e){return c({labelRememberMe:e})},value:n.labelRememberMe})),Object(a.createElement)("p",{className:"login-submit"},Object(a.createElement)(o.RichText,{tagName:"div",className:"wp-block-button__link",placeholder:t.labelLogIn.default,keepPlaceholderOnFocus:"true",formattingControls:[],onChange:function(e){return c({labelLogIn:e})},onClick:function(e){return e.preventDefault()},onKeyPress:function(e){return e.preventDefault()},value:n.labelLogIn})))}(e,c)}})}]);