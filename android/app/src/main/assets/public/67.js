(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/vng8ii5q.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/vng8ii5q.js ***!
  \***********************************************************/
/*! exports provided: IonSearchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonSearchbar", function() { return Searchbar; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_770a6cdb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-770a6cdb.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-770a6cdb.js");
/* harmony import */ var _chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-d7be1947.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-d7be1947.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Searchbar=function(){function e(){this.isCancelVisible=!1,this.shouldBlur=!0,this.shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}return e.prototype.debounceChanged=function(){this.ionChange=Object(_chunk_770a6cdb_js__WEBPACK_IMPORTED_MODULE_1__["e"])(this.ionChange,this.debounce)},e.prototype.valueChanged=function(){var e=this.nativeInput,t=this.value;e&&e.value!==t&&(e.value=t),this.ionChange.emit({value:t})},e.prototype.componentDidLoad=function(){this.positionElements(),this.debounceChanged()},e.prototype.clearInput=function(){var e=this;this.ionClear.emit(),setTimeout(function(){var t=e.value;void 0!==t&&""!==t&&(e.value="")},64),this.shouldBlur=!1},e.prototype.cancelSearchbar=function(){this.ionCancel.emit(),this.clearInput(),this.shouldBlur=!0,this.activated=!1},e.prototype.onInput=function(e){var t=e.target;t&&(this.value=t.value),this.ionInput.emit(e)},e.prototype.inputUpdated=function(){this.positionElements()},e.prototype.onBlur=function(){var e=this.el.querySelector(".searchbar-input");if(!1===this.shouldBlur)return e.focus(),this.shouldBlur=!0,this.ionBlur.emit(),void this.inputUpdated();this.focused=!1,this.positionElements()},e.prototype.onFocus=function(){this.activated=!0,this.focused=!0,this.ionFocus.emit(),this.inputUpdated(),this.positionElements()},e.prototype.positionElements=function(){var e=this.shouldAlignLeft,t=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this.shouldAlignLeft=t,"ios"===this.mode&&(e!==t&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},e.prototype.positionPlaceholder=function(){var e="rtl"===this.doc.dir,t=this.el.querySelector(".searchbar-input"),o=this.el.querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)t.removeAttribute("style"),o.removeAttribute("style");else{var i=this.doc,n=i.createElement("span");n.innerHTML=this.placeholder,i.body.appendChild(n);var a=n.offsetWidth;n.remove();var s="calc(50% - "+a/2+"px)",r="calc(50% - "+(a/2+30)+"px)";e?(t.style.paddingRight=s,o.style.marginRight=r):(t.style.paddingLeft=s,o.style.marginLeft=r)}},e.prototype.positionCancelButton=function(){var e="rtl"===this.doc.dir,t=this.el.querySelector(".searchbar-cancel-button-ios"),o=this.focused;if(o!==this.isCancelVisible){var i=t.style;if(this.isCancelVisible=o,o)e?i.marginLeft="0":i.marginRight="0";else{var n=t.offsetWidth;n>0&&(e?i.marginLeft=-n+"px":i.marginRight=-n+"px")}}},e.prototype.hostData=function(){return{class:{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused}}},e.prototype.render=function(){var e=this,t=Object(_chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.mode,this.color,"searchbar-cancel-button"),o=Object(_chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.mode,this.color,"searchbar-search-icon"),i=this.showCancelButton?Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{type:"button",tabindex:"ios"!==this.mode||this.activated?void 0:-1,onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:t},"md"===this.mode?Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{name:"md-arrow-back"}):this.cancelButtonText):null;return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"searchbar-input-container"},"md"===this.mode&&i,Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:o}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input",{ref:function(t){return e.nativeInput=t},class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{type:"button",class:"searchbar-clear-icon",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)})),"ios"===this.mode&&i]},Object.defineProperty(e,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"searchbar"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonText:{type:String,attr:"cancel-button-text"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-searchbar{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%}.searchbar-icon{pointer-events:none}.searchbar-input-container{position:relative;display:block;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;font-family:inherit}.searchbar-input:active,.searchbar-input:focus{outline:0}.searchbar-input::-webkit-search-cancel-button{display:none}.searchbar-clear-icon{margin:0;padding:0;display:none;min-height:0}.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon{display:block}.searchbar-md{padding:8px;font-family:Roboto,\"Helvetica Neue\",sans-serif;background:inherit}.searchbar-search-icon-md{left:16px;top:11px;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-md-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20d='M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z%20M206.225,305.372c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742C304.687,261.485,260.925,305.372,206.225,305.372z'/></svg>\");width:21px;height:21px}.searchbar-cancel-button-md{left:10px;top:0;margin:0;display:none;height:100%;border:0;font-size:1.8em;color:var(--ion-text-md-color-step-100,var(--ion-text-color-step-100,#1a1a1a));background-color:transparent}.searchbar-cancel-button-md,.searchbar-search-icon-md{position:absolute;background-repeat:no-repeat;background-size:20px}.searchbar-cancel-button-md.activated,.searchbar-search-icon-md.activated{background-color:transparent}.searchbar-md .searchbar-input{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px;color:var(--ion-text-md-color-step-150,var(--ion-text-color-step-150,#262626));background-color:var(--ion-background-md-color,var(--ion-background-color,#fff));-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-md .searchbar-input::-moz-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.searchbar-md .searchbar-input:-ms-input-placeholder{color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.searchbar-md .searchbar-input::-webkit-input-placeholder{text-indent:0;color:var(--ion-placeholder-text-md-color,var(--ion-placeholder-text-color,#999))}.searchbar-md .searchbar-clear-icon{right:13px;top:0;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-md-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");padding:0;background-position:center;position:absolute;width:22px;height:100%;border:0;background-color:transparent;background-repeat:no-repeat;background-size:22px}.searchbar-md .searchbar-clear-icon.activated{background-color:transparent}.searchbar-has-focus.searchbar-show-cancel .searchbar-search-icon-md{display:none}.searchbar-has-focus.searchbar-show-cancel .searchbar-cancel-button-md{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex}.toolbar .searchbar-md{padding:3px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=67.js.map