(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-three-page-three-module"],{

/***/ "./src/app/simple-nav/page-three/page-three-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/simple-nav/page-three/page-three-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PageThreeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThreeRoutingModule", function() { return PageThreeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-three */ "./src/app/simple-nav/page-three/page-three.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _page_three__WEBPACK_IMPORTED_MODULE_3__["PageThree"] }
];
var PageThreeRoutingModule = /** @class */ (function () {
    function PageThreeRoutingModule() {
    }
    PageThreeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], PageThreeRoutingModule);
    return PageThreeRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-three/page-three.module.ts":
/*!************************************************************!*\
  !*** ./src/app/simple-nav/page-three/page-three.module.ts ***!
  \************************************************************/
/*! exports provided: PageThreeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThreeModule", function() { return PageThreeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-three */ "./src/app/simple-nav/page-three/page-three.ts");
/* harmony import */ var _page_three_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-three-routing.module */ "./src/app/simple-nav/page-three/page-three-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageThreeModule = /** @class */ (function () {
    function PageThreeModule() {
    }
    PageThreeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _page_three_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageThreeRoutingModule"]
            ],
            declarations: [
                _page_three__WEBPACK_IMPORTED_MODULE_2__["PageThree"]
            ]
        })
    ], PageThreeModule);
    return PageThreeModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/page-three/page-three.ts":
/*!*****************************************************!*\
  !*** ./src/app/simple-nav/page-three/page-three.ts ***!
  \*****************************************************/
/*! exports provided: PageThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThree", function() { return PageThree; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageThree = /** @class */ (function () {
    function PageThree(route) {
        this.route = route;
        this.paramOne = null;
        this.paramTwo = null;
    }
    PageThree.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.paramOne = params['paramOne'];
            _this.paramTwo = params['paramTwo'];
        });
    };
    PageThree = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-three',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Page Three</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content padding>\n    <div>paramOne: {{paramOne}}</div>\n    <div>paramTwo: {{paramTwo}}</div>\n    <div>\n      <ion-button [routerLink]=\"['/simple-nav/page-one']\">Go to Page One</ion-button>\n    </div>\n    <div>\n      <ion-button [routerLink]=\"['/simple-nav/page-two']\">Go to Page Two</ion-button>\n    </div>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PageThree);
    return PageThree;
}());



/***/ })

}]);
//# sourceMappingURL=page-three-page-three-module.js.map