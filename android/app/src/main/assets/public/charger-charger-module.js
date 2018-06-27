(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charger-charger-module"],{

/***/ "./src/app/lazy-load-tabs/charger/charger-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/lazy-load-tabs/charger/charger-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ChargerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerPageRoutingModule", function() { return ChargerPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _charger_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charger.page */ "./src/app/lazy-load-tabs/charger/charger.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _charger_page__WEBPACK_IMPORTED_MODULE_3__["ChargerPage"], outlet: 'tab3' }
];
var ChargerPageRoutingModule = /** @class */ (function () {
    function ChargerPageRoutingModule() {
    }
    ChargerPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], ChargerPageRoutingModule);
    return ChargerPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/charger/charger.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/lazy-load-tabs/charger/charger.module.ts ***!
  \**********************************************************/
/*! exports provided: ChargerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerModule", function() { return ChargerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _charger_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charger.page */ "./src/app/lazy-load-tabs/charger/charger.page.ts");
/* harmony import */ var _charger_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charger-routing.module */ "./src/app/lazy-load-tabs/charger/charger-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChargerModule = /** @class */ (function () {
    function ChargerModule() {
    }
    ChargerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _charger_routing_module__WEBPACK_IMPORTED_MODULE_4__["ChargerPageRoutingModule"]
            ],
            declarations: [
                _charger_page__WEBPACK_IMPORTED_MODULE_3__["ChargerPage"]
            ]
        })
    ], ChargerModule);
    return ChargerModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/charger/charger.page.ts":
/*!********************************************************!*\
  !*** ./src/app/lazy-load-tabs/charger/charger.page.ts ***!
  \********************************************************/
/*! exports provided: ChargerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargerPage", function() { return ChargerPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChargerPage = /** @class */ (function () {
    function ChargerPage() {
    }
    ChargerPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'charger-page',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Charger</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Charger\n    </ion-content>\n  "
        })
    ], ChargerPage);
    return ChargerPage;
}());



/***/ })

}]);
//# sourceMappingURL=charger-charger-module.js.map