(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/70tbcdvp.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/70tbcdvp.js ***!
  \***********************************************************/
/*! exports provided: IonRippleEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRippleEffect", function() { return RippleEffect; });
/* harmony import */ var _chunk_770a6cdb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-770a6cdb.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-770a6cdb.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var RippleEffect=function(){function e(){this.lastClick=-1e4,this.tapClick=!1}return e.prototype.tapClickChanged=function(e){this.enableListener(this,"parent:ionActivated",e),this.enableListener(this,"touchstart",!e),this.enableListener(this,"mousedown",!e)},e.prototype.ionActivated=function(e){this.addRipple(e.detail.x,e.detail.y)},e.prototype.touchStart=function(e){this.lastClick=Object(_chunk_770a6cdb_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e);var t=e.touches[0];this.addRipple(t.clientX,t.clientY)},e.prototype.mouseDown=function(e){var t=Object(_chunk_770a6cdb_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e);this.lastClick<t-1e3&&this.addRipple(e.pageX,e.pageY)},e.prototype.componentDidLoad=function(){this.tapClickChanged(this.tapClick)},e.prototype.addRipple=function(e,t){var i,n,o,a=this;this.queue.read(function(){var r=a.el.getBoundingClientRect(),c=r.width,p=r.height;o=Math.min(2*Math.sqrt(c*c+p*p),MAX_RIPPLE_DIAMETER),i=e-r.left-o/2,n=t-r.top-o/2}),this.queue.write(function(){var e=a.doc.createElement("div");e.classList.add("ripple-effect");var t=e.style,r=Math.max(RIPPLE_FACTOR*Math.sqrt(o),MIN_RIPPLE_DURATION);t.top=n+"px",t.left=i+"px",t.width=o+"px",t.height=o+"px",t.animationDuration=r+"ms",a.el.appendChild(e),setTimeout(function(){return e.remove()},r+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"parent:ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-ripple-effect{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect{border-radius:50%;position:absolute;background-color:var(--ion-ripple-background-color,#000);opacity:0;will-change:transform,opacity;pointer-events:none;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;contain:strict}\@-webkit-keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}\@keyframes rippleAnimation{0%{opacity:.2;-webkit-transform:scale(.1);transform:scale(.1)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}"},enumerable:!0,configurable:!0}),e}(),RIPPLE_FACTOR=35,MIN_RIPPLE_DURATION=260,MAX_RIPPLE_DIAMETER=550;

/***/ })

}]);
//# sourceMappingURL=63.js.map