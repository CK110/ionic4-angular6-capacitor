(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simple-nav-simple-nav-module"],{

/***/ "./src/app/simple-nav/simple-nav-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/simple-nav/simple-nav-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SimpleNavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNavRoutingModule", function() { return SimpleNavRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _simple_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-nav.component */ "./src/app/simple-nav/simple-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _simple_nav_component__WEBPACK_IMPORTED_MODULE_3__["SimpleNavPageComponent"],
        children: [
            { path: 'page-one', loadChildren: './page-one/page-one.module#PageOneModule' },
            { path: 'page-two', loadChildren: './page-two/page-two.module#PageTwoModule' },
            { path: 'page-three/:paramOne/:paramTwo', loadChildren: './page-three/page-three.module#PageThreeModule', data: { isProd: true } }
        ]
    },
];
var SimpleNavRoutingModule = /** @class */ (function () {
    function SimpleNavRoutingModule() {
    }
    SimpleNavRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]]
        })
    ], SimpleNavRoutingModule);
    return SimpleNavRoutingModule;
}());



/***/ }),

/***/ "./src/app/simple-nav/simple-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/simple-nav/simple-nav.component.ts ***!
  \****************************************************/
/*! exports provided: SimpleNavPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNavPageComponent", function() { return SimpleNavPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SimpleNavPageComponent = /** @class */ (function () {
    function SimpleNavPageComponent() {
    }
    SimpleNavPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-page',
            template: "\n    <ion-app>\n      <ion-router-outlet stack></ion-router-outlet>\n    </ion-app>\n  "
        })
    ], SimpleNavPageComponent);
    return SimpleNavPageComponent;
}());



/***/ }),

/***/ "./src/app/simple-nav/simple-nav.module.ts":
/*!*************************************************!*\
  !*** ./src/app/simple-nav/simple-nav.module.ts ***!
  \*************************************************/
/*! exports provided: SimpleNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleNavModule", function() { return SimpleNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _simple_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-nav.component */ "./src/app/simple-nav/simple-nav.component.ts");
/* harmony import */ var _simple_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-nav-routing.module */ "./src/app/simple-nav/simple-nav-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SimpleNavModule = /** @class */ (function () {
    function SimpleNavModule() {
    }
    SimpleNavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _simple_nav_component__WEBPACK_IMPORTED_MODULE_3__["SimpleNavPageComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _simple_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__["SimpleNavRoutingModule"]
            ]
        })
    ], SimpleNavModule);
    return SimpleNavModule;
}());



/***/ })

}]);
//# sourceMappingURL=simple-nav-simple-nav-module.js.map