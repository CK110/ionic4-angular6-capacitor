(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-page-home-page-module"],{

/***/ "./src/app/home-page/home-page-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/home-page/home-page-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>@ionic/angular tests</h1>\n\n<h3>Overlays</h3>\n<ul>\n  <li>\n    <a [routerLink]=\"['/actionSheet']\">Action Sheet Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/alert']\">Alert Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/loading']\">Loading Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/modal']\">Modal Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/popover']\">Popover Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/toast']\">Toast Page</a>\n  </li>\n</ul>\n\n\n<h3>Inputs</h3>\n<ul>\n  <li>\n    <a [routerLink]=\"['/basic-inputs']\">Basic Inputs Test Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/group-inputs']\">Group Inputs Test Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/form-sample']\">Form Sample Test Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/segment']\">Segment Page</a>\n  </li>\n</ul>\n\n\n<h3>Navigation</h3>\n<ul>\n  <li>\n    <a href=\"no-routing-nav\">No Routing</a>\n  </li>\n  <li>\n    <a href=\"simple-nav/page-one\">Simple Nav</a>\n  </li>\n  <li>\n    <a href=\"lazy-load-tabs\">Lazy Loaded Route Tabs</a>\n    <ul>\n      <li>\n        <a [routerLink]=\"['/lazy-load-tabs', 'tabs', { outlets: { tab1: ['mustang'] } }]\">Tab 1</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/lazy-load-tabs', 'tabs', { outlets: { tab2: ['camaro'] } }]\">Tab 2</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/lazy-load-tabs', 'tabs', { outlets: { tab3: ['charger'] } }]\">Tab 3</a>\n      </li>\n    </ul>\n  </li>\n  <li>\n    <a href=\"simple-tabs\">Simple Route Tabs</a>\n    <ul>\n      <li>\n        <a [routerLink]=\"['/simple-tabs', 'tabs', { outlets: { tab1: ['mustang'] } }]\">Tab 1</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/simple-tabs', 'tabs', { outlets: { tab2: ['camaro'] } }]\">Tab 2</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/simple-tabs', 'tabs', { outlets: { tab3: ['charger'] } }]\">Tab 3</a>\n      </li>\n    </ul>\n  </li>\n  <li>\n    <a href=\"static-tabs\">Static Tabs</a>\n  </li>\n</ul>\n\n\n<h3>Content</h3>\n<ul>\n  <li>\n    <a [routerLink]=\"['/badge']\">Badge Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/card']\">Card Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/content']\">Content Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/ng-if']\">ngIf Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/show-hide-when']\">Show/Hide When Page</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/virtual-scroll']\">Virtual Scroll Page</a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _home_page_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page-routing.module */ "./src/app/home-page/home-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _home_page_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomePageRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
            ],
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-page-home-page-module.js.map