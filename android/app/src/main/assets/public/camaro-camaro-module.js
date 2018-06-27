(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camaro-camaro-module"],{

/***/ "./src/app/lazy-load-tabs/camaro/camaro-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/lazy-load-tabs/camaro/camaro-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CamaroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamaroPageRoutingModule", function() { return CamaroPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _camaro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camaro.page */ "./src/app/lazy-load-tabs/camaro/camaro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _camaro_page__WEBPACK_IMPORTED_MODULE_3__["CamaroPage"], outlet: 'tab2' }
];
var CamaroPageRoutingModule = /** @class */ (function () {
    function CamaroPageRoutingModule() {
    }
    CamaroPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], CamaroPageRoutingModule);
    return CamaroPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/camaro/camaro.module.ts":
/*!********************************************************!*\
  !*** ./src/app/lazy-load-tabs/camaro/camaro.module.ts ***!
  \********************************************************/
/*! exports provided: CamaroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamaroModule", function() { return CamaroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _camaro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camaro.page */ "./src/app/lazy-load-tabs/camaro/camaro.page.ts");
/* harmony import */ var _camaro_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camaro-routing.module */ "./src/app/lazy-load-tabs/camaro/camaro-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CamaroModule = /** @class */ (function () {
    function CamaroModule() {
    }
    CamaroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _camaro_routing_module__WEBPACK_IMPORTED_MODULE_4__["CamaroPageRoutingModule"]
            ],
            declarations: [
                _camaro_page__WEBPACK_IMPORTED_MODULE_3__["CamaroPage"]
            ]
        })
    ], CamaroModule);
    return CamaroModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/camaro/camaro.page.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-load-tabs/camaro/camaro.page.ts ***!
  \******************************************************/
/*! exports provided: CamaroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamaroPage", function() { return CamaroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamaroPage = /** @class */ (function () {
    function CamaroPage() {
    }
    CamaroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'camaro-page',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Camaro</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Camaro\n    </ion-content>\n  "
        })
    ], CamaroPage);
    return CamaroPage;
}());



/***/ })

}]);
//# sourceMappingURL=camaro-camaro-module.js.map