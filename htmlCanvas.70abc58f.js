!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}({14:function(e,t,n){"use strict";n.r(t);n(15);var o=document.querySelector("#draw"),r=o.getContext("2d");console.log("Day 8 log: today's challenge has one of the most satisfying results! Oh, and I had no idea there was a 'canvas' tag in HTML - who would've though!"),o.width=window.innerWidth,o.height=window.innerHeight-38,r.strokeStyle="#ffffff",r.lineCap="round",r.lineJoin="round",r.lineWidth=1;var i=!1,u=0,f=0,a=0,d=20,s=!0;o.addEventListener("mousedown",(function(e){i=!0;var t=[e.offsetX,e.offsetY];u=t[0],f=t[1]})),o.addEventListener("mousemove",(function(e){if(i){r.strokeStyle="hsl(".concat(a,", 100%, 50%)"),r.beginPath(),r.moveTo(u,f),r.lineTo(e.offsetX,e.offsetY),r.stroke();var t=[e.offsetX,e.offsetY];u=t[0],f=t[1],a<359?a++:a=0,d>=1e3&&(s=!1),d<=10&&(s=!0),s?d++:d--,r.lineWidth=d/10}})),o.addEventListener("mouseup",(function(){return i=!1})),o.addEventListener("mouseout",(function(){return i=!1}))},15:function(e,t,n){}});