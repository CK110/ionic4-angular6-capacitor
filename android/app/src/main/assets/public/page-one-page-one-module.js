(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-one-page-one-module"],{

/***/ "./src/app/simple-nav/page-one/page-one-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/simple-nav/page-one/page-one-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PageOneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneRoutingModule", function() { return PageOneRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _page_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one */ "./src/app/simple-nav/page-one/page-one.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _page_one__WEBPACK_IMPORTED_MODULE_3__["PageOne"] }
];
var PageOneRoutingModule = /** @class */ (function () {
    function PageOneRoutingModule() {
    }
    PageOneRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], PageOneRoutingModule);
    return PageOneRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-one/page-one.module.ts":
/*!********************************************************!*\
  !*** ./src/app/simple-nav/page-one/page-one.module.ts ***!
  \********************************************************/
/*! exports provided: PageOneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneModule", function() { return PageOneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-one */ "./src/app/simple-nav/page-one/page-one.ts");
/* harmony import */ var _page_one_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-one-routing.module */ "./src/app/simple-nav/page-one/page-one-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageOneModule = /** @class */ (function () {
    function PageOneModule() {
    }
    PageOneModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page_one_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageOneRoutingModule"]
            ],
            declarations: [_page_one__WEBPACK_IMPORTED_MODULE_2__["PageOne"]]
        })
    ], PageOneModule);
    return PageOneModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-one/page-one.ts":
/*!*************************************************!*\
  !*** ./src/app/simple-nav/page-one/page-one.ts ***!
  \*************************************************/
/*! exports provided: PageOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOne", function() { return PageOne; });
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

var PageOne = /** @class */ (function () {
    function PageOne() {
        var _this = this;
        setInterval(function () {
            _this.ts = Date.now();
        }, 500);
    }
    PageOne = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-one',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Simple Page One</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Page One - {{ts}}\n      <div>\n        <ion-button [routerLink]=\"['/simple-nav/page-two']\">Go to Page Two</ion-button>\n\n        <ion-button routerLink=\"/simple-nav/page-two\" routerDirection=\"forward\">FORWARD (Page Two)</ion-button>\n        <ion-button routerLink=\"/simple-nav/page-two\" routerDirection=\"back\">BACK (Page Two)</ion-button>\n        <ion-button routerLink=\"/simple-nav/page-two\" routerDirection=\"root\">ROOT (Page Two)</ion-button>\n\n      </div>\n    </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PageOne);
    return PageOne;
}());



/***/ })

}]);
//# sourceMappingURL=page-one-page-one-module.js.map