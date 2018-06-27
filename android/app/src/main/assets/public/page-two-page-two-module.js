(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-two-page-two-module"],{

/***/ "./src/app/simple-nav/page-two/page-two-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/simple-nav/page-two/page-two-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PageTwoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoRoutingModule", function() { return PageTwoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-two */ "./src/app/simple-nav/page-two/page-two.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _page_two__WEBPACK_IMPORTED_MODULE_3__["PageTwo"],
    }
];
var PageTwoRoutingModule = /** @class */ (function () {
    function PageTwoRoutingModule() {
    }
    PageTwoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], PageTwoRoutingModule);
    return PageTwoRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-two/page-two.module.ts":
/*!********************************************************!*\
  !*** ./src/app/simple-nav/page-two/page-two.module.ts ***!
  \********************************************************/
/*! exports provided: PageTwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoModule", function() { return PageTwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-two */ "./src/app/simple-nav/page-two/page-two.ts");
/* harmony import */ var _page_two_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-two-routing.module */ "./src/app/simple-nav/page-two/page-two-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PageTwoModule = /** @class */ (function () {
    function PageTwoModule() {
    }
    PageTwoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page_two_routing_module__WEBPACK_IMPORTED_MODULE_4__["PageTwoRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            ],
            declarations: [
                _page_two__WEBPACK_IMPORTED_MODULE_3__["PageTwo"],
            ]
        })
    ], PageTwoModule);
    return PageTwoModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-two/page-two.ts":
/*!*************************************************!*\
  !*** ./src/app/simple-nav/page-two/page-two.ts ***!
  \*************************************************/
/*! exports provided: PageTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwo", function() { return PageTwo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageTwo = /** @class */ (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-two',
            template: "\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Page Two</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      Page Two\n      <div>\n        <ion-button routerLink=\"/simple-nav/page-three/paramOne/paramTwo\">Go to Page Three</ion-button>\n      </div>\n      <div>\n        <ion-button routerLink=\"/simple-nav/page-one\" goBack>Go to Page One</ion-button>\n      </div>\n\n      <ion-list>\n        <ion-item href=\"/simple-nav/page-one\" routerDirection=\"forward\">\n          FORWARD (Page one)\n        </ion-item>\n\n        <ion-item href=\"/simple-nav/page-one\" routerDirection=\"back\">\n          BACK (Page one)\n        </ion-item>\n\n        <ion-item href=\"/simple-nav/page-one\" routerDirection=\"root\">\n          ROOT (Page one)\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  "
        })
    ], PageTwo);
    return PageTwo;
}());



/***/ })

}]);
//# sourceMappingURL=page-two-page-two-module.js.map