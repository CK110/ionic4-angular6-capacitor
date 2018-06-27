(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mustang-mustang-module"],{

/***/ "./src/app/lazy-load-tabs/mustang/mustang-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/lazy-load-tabs/mustang/mustang-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: MustangPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustangPageRoutingModule", function() { return MustangPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _mustang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mustang.page */ "./src/app/lazy-load-tabs/mustang/mustang.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _mustang_page__WEBPACK_IMPORTED_MODULE_3__["MustangPage"], outlet: 'tab1' }
];
var MustangPageRoutingModule = /** @class */ (function () {
    function MustangPageRoutingModule() {
    }
    MustangPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], MustangPageRoutingModule);
    return MustangPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/mustang/mustang.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/lazy-load-tabs/mustang/mustang.module.ts ***!
  \**********************************************************/
/*! exports provided: MustangModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustangModule", function() { return MustangModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _mustang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mustang.page */ "./src/app/lazy-load-tabs/mustang/mustang.page.ts");
/* harmony import */ var _mustang_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mustang-routing.module */ "./src/app/lazy-load-tabs/mustang/mustang-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MustangModule = /** @class */ (function () {
    function MustangModule() {
    }
    MustangModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _mustang_routing_module__WEBPACK_IMPORTED_MODULE_4__["MustangPageRoutingModule"]
            ],
            declarations: [
                _mustang_page__WEBPACK_IMPORTED_MODULE_3__["MustangPage"]
            ]
        })
    ], MustangModule);
    return MustangModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/mustang/mustang.page.ts":
/*!********************************************************!*\
  !*** ./src/app/lazy-load-tabs/mustang/mustang.page.ts ***!
  \********************************************************/
/*! exports provided: MustangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustangPage", function() { return MustangPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MustangPage = /** @class */ (function () {
    function MustangPage() {
    }
    MustangPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mustang-page',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Mustang</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Mustang\n    </ion-content>\n  "
        })
    ], MustangPage);
    return MustangPage;
}());



/***/ })

}]);
//# sourceMappingURL=mustang-mustang-module.js.map