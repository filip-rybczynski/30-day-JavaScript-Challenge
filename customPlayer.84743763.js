!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({18:function(e,t,n){"use strict";n.r(t);n(19);console.log("Day 11 log: challenge for today was quite difficult for me (as I wasn't familiar with the video tag in HTML at all) and I was rather busy, so for the most part I followed the video. Current behavior doesn't include the custom controls in the fullscreen view - hope to fix it soon when I find the time");var r=document.querySelector(".player"),o=r.querySelector(".viewer"),u=r.querySelector(".progress"),i=r.querySelector(".progress__filled"),l=r.querySelector(".toggle"),s=r.querySelectorAll("[data-skip]"),c=r.querySelectorAll(".player__slider"),a=r.querySelector(".fullscreen");function d(e){if(!e.key||" "===e.key){var t=o.paused?"play":"pause";o[t]()}}function f(){l.textContent=this.paused?"►":"❚ ❚"}function v(){var e=+this.dataset.skip;o.currentTime+=e}function p(){o[this.name]=this.value}function y(e){var t=e.offsetX/u.offsetWidth*o.duration;o.currentTime=t}function m(){o.requestFullscreen?o.requestFullscreen():o.msRequestFullscreen?o.msRequestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen&&o.webkitRequestFullscreen()}o.addEventListener("click",d),o.addEventListener("play",f),o.addEventListener("pause",f),o.addEventListener("timeupdate",(function(){var e=o.currentTime/o.duration*100;i.style.flexBasis="".concat(e,"%")})),l.addEventListener("click",d),window.addEventListener("keypress",d),s.forEach((function(e){return e.addEventListener("click",v)})),c.forEach((function(e){return e.addEventListener("change",p)})),c.forEach((function(e){return e.addEventListener("mousemove",p)}));var h=!1;u.addEventListener("click",y),u.addEventListener("mousemove",(function(e){return h&&y(e)})),u.addEventListener("mousedown",(function(){return h=!0})),u.addEventListener("mouseup",(function(){return h=!1})),a.addEventListener("click",m),o.addEventListener("dblclick",m)},19:function(e,t,n){}});