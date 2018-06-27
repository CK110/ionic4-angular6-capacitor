(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-hide-when-show-hide-when-module"],{

/***/ "./src/app/show-hide-when/show-hide-when-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/show-hide-when/show-hide-when-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowHideWhenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideWhenComponent", function() { return ShowHideWhenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideWhenComponent = /** @class */ (function () {
    function ShowHideWhenComponent() {
    }
    ShowHideWhenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show-hide-page',
            template: __webpack_require__(/*! ./show-hide-when.html */ "./src/app/show-hide-when/show-hide-when.html")
        }),
        __metadata("design:paramtypes", [])
    ], ShowHideWhenComponent);
    return ShowHideWhenComponent;
}());



/***/ }),

/***/ "./src/app/show-hide-when/show-hide-when-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/show-hide-when/show-hide-when-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShowHideWhenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideWhenRoutingModule", function() { return ShowHideWhenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_hide_when_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-hide-when-page.component */ "./src/app/show-hide-when/show-hide-when-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _show_hide_when_page_component__WEBPACK_IMPORTED_MODULE_2__["ShowHideWhenComponent"] }
];
var ShowHideWhenRoutingModule = /** @class */ (function () {
    function ShowHideWhenRoutingModule() {
    }
    ShowHideWhenRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ShowHideWhenRoutingModule);
    return ShowHideWhenRoutingModule;
}());



/***/ }),

/***/ "./src/app/show-hide-when/show-hide-when.html":
/*!****************************************************!*\
  !*** ./src/app/show-hide-when/show-hide-when.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Show/Hide When</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n\n      <div>\n        <h2>Mode Tests</h2>\n        <ion-show-when mode=\"md, ios\">\n          <div>Shows on MD, iOS</div>\n        </ion-show-when>\n\n        <ion-show-when mode=\"md\">\n          <div>Shows on MD only</div>\n        </ion-show-when>\n\n        <ion-show-when mode=\"ios\">\n          <div>Shows on iOS only</div>\n        </ion-show-when>\n\n        <ion-hide-when mode=\"md, ios\">\n          <div>Hides on MD, iOS</div>\n        </ion-hide-when>\n\n        <ion-hide-when mode=\"md\">\n          <div>Hides on MD only</div>\n        </ion-hide-when>\n\n        <ion-hide-when mode=\"ios\">\n          <div>Hides on iOS only</div>\n        </ion-hide-when>\n      </div>\n\n      <br>\n      <div>\n        <h2>Orientation Tests</h2>\n        <ion-show-when orientation=\"portrait\">\n          <div>Shows on portrait orientation</div>\n        </ion-show-when>\n\n        <ion-show-when orientation=\"landscape\">\n          <div>Shows on landscape orientation</div>\n        </ion-show-when>\n\n        <ion-hide-when orientation=\"portrait\">\n          <div>Hides on portrait orientation</div>\n        </ion-hide-when>\n\n        <ion-hide-when orientation=\"landscape\">\n          <div>Hides on landscape orientation</div>\n        </ion-hide-when>\n      </div>\n\n      <br>\n      <div>\n        <h2>Platform Tests</h2>\n\n        <ion-show-when platform=\"android,ios\">\n          <div>Render on Android and iOS</div>\n        </ion-show-when>\n\n        <ion-show-when platform=\"ios\">\n          <div>Only show on iOS</div>\n        </ion-show-when>\n\n        <ion-show-when platform=\"android\">\n          <div>Only show on Android</div>\n        </ion-show-when>\n\n        <ion-show-when platform=\"ipad\">\n          <div>Only show on ipad</div>\n        </ion-show-when>\n\n        <ion-show-when platform=\"phablet\">\n          <div>Only show on phablet</div>\n        </ion-show-when>\n\n        <ion-show-when platform=\"iphone\">\n          <div>Only show on phone</div>\n        </ion-show-when>\n\n        <ion-hide-when platform=\"android,ios\">\n          <div>Hides on Android and iOS</div>\n        </ion-hide-when>\n\n        <ion-hide-when platform=\"ios\">\n          <div>Only hide on iOS</div>\n        </ion-hide-when>\n\n        <ion-hide-when platform=\"android\">\n          <div>Only hide on Android</div>\n        </ion-hide-when>\n\n        <ion-hide-when platform=\"ipad\">\n          <div>Only hide on ipad</div>\n        </ion-hide-when>\n\n        <ion-hide-when platform=\"phablet\">\n          <div>Only hide on phablet</div>\n        </ion-hide-when>\n\n        <ion-hide-when platform=\"iphone\">\n          <div>Only hide on phone</div>\n        </ion-hide-when>\n      </div>\n\n      <br>\n      <div>\n        <h2>Size Tests</h2>\n        <ion-show-when size=\"xs\">\n          <div>Only show on xs</div>\n        </ion-show-when>\n\n        <ion-show-when size=\"sm\">\n          <div>Only show on sm</div>\n        </ion-show-when>\n\n        <ion-show-when size=\"md\">\n          <div>Only show on md</div>\n        </ion-show-when>\n\n        <ion-show-when size=\"lg\">\n          <div>Only show on lg</div>\n        </ion-show-when>\n\n        <ion-show-when size=\"xl\">\n          <div>Only show on xl</div>\n        </ion-show-when>\n\n        <ion-show-when size=\"xs, m\">\n          <div>Only show on XS or m</div>\n        </ion-show-when>\n\n        <ion-hide-when size=\"xs\">\n          <div>Only hide on xs</div>\n        </ion-hide-when>\n\n        <ion-hide-when size=\"sm\">\n          <div>Only hide on sm</div>\n        </ion-hide-when>\n\n        <ion-hide-when size=\"md\">\n          <div>Only hide on md</div>\n        </ion-hide-when>\n\n        <ion-hide-when size=\"lg\">\n          <div>Only hide on lg</div>\n        </ion-hide-when>\n\n        <ion-hide-when size=\"xl\">\n          <div>Only hide on xl</div>\n        </ion-hide-when>\n\n        <ion-hide-when size=\"xs, m\">\n          <div>Only hide on XS or m</div>\n        </ion-hide-when>\n      </div>\n\n    </ion-content>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/show-hide-when/show-hide-when.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/show-hide-when/show-hide-when.module.ts ***!
  \*********************************************************/
/*! exports provided: ShowHideWhenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideWhenModule", function() { return ShowHideWhenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _show_hide_when_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-hide-when-page.component */ "./src/app/show-hide-when/show-hide-when-page.component.ts");
/* harmony import */ var _show_hide_when_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-hide-when-routing.module */ "./src/app/show-hide-when/show-hide-when-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ShowHideWhenModule = /** @class */ (function () {
    function ShowHideWhenModule() {
    }
    ShowHideWhenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _show_hide_when_routing_module__WEBPACK_IMPORTED_MODULE_4__["ShowHideWhenRoutingModule"]
            ],
            declarations: [_show_hide_when_page_component__WEBPACK_IMPORTED_MODULE_3__["ShowHideWhenComponent"]]
        })
    ], ShowHideWhenModule);
    return ShowHideWhenModule;
}());



/***/ })

}]);
//# sourceMappingURL=show-hide-when-show-hide-when-module.js.map