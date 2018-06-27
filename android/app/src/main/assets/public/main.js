(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-sheet/action-sheet.module": [
		"./src/app/action-sheet/action-sheet.module.ts",
		"action-sheet-action-sheet-module"
	],
	"./alert/alert.module": [
		"./src/app/alert/alert.module.ts",
		"alert-alert-module"
	],
	"./badge/badge.module": [
		"./src/app/badge/badge.module.ts",
		"badge-badge-module"
	],
	"./basic-inputs-page/basic-inputs-page.module": [
		"./src/app/basic-inputs-page/basic-inputs-page.module.ts",
		"basic-inputs-page-basic-inputs-page-module"
	],
	"./camaro/camaro.module": [
		"./src/app/lazy-load-tabs/camaro/camaro.module.ts",
		"camaro-camaro-module"
	],
	"./card/card.module": [
		"./src/app/card/card.module.ts",
		"card-card-module"
	],
	"./charger/charger.module": [
		"./src/app/lazy-load-tabs/charger/charger.module.ts",
		"charger-charger-module"
	],
	"./content/content.module": [
		"./src/app/content/content.module.ts",
		"content-content-module"
	],
	"./form-sample-page/form-sample-page.module": [
		"./src/app/form-sample-page/form-sample-page.module.ts",
		"form-sample-page-form-sample-page-module"
	],
	"./group-inputs-page/group-inputs-page.module": [
		"./src/app/group-inputs-page/group-inputs-page.module.ts",
		"group-inputs-page-group-inputs-page-module"
	],
	"./home-page/home-page.module": [
		"./src/app/home-page/home-page.module.ts",
		"home-page-home-page-module"
	],
	"./lazy-load-tabs/tabs.module": [
		"./src/app/lazy-load-tabs/tabs.module.ts",
		"lazy-load-tabs-tabs-module"
	],
	"./loading/loading.module": [
		"./src/app/loading/loading.module.ts",
		"loading-loading-module"
	],
	"./modal/modal.module": [
		"./src/app/modal/modal.module.ts",
		"modal-modal-module"
	],
	"./mustang/mustang.module": [
		"./src/app/lazy-load-tabs/mustang/mustang.module.ts",
		"mustang-mustang-module"
	],
	"./ng-if/ng-if.module": [
		"./src/app/ng-if/ng-if.module.ts",
		"ng-if-ng-if-module"
	],
	"./no-routing-nav/no-routing-nav.module": [
		"./src/app/no-routing-nav/no-routing-nav.module.ts",
		"no-routing-nav-no-routing-nav-module"
	],
	"./page-one/page-one.module": [
		"./src/app/simple-nav/page-one/page-one.module.ts",
		"page-one-page-one-module"
	],
	"./page-three/page-three.module": [
		"./src/app/simple-nav/page-three/page-three.module.ts",
		"page-three-page-three-module"
	],
	"./page-two/page-two.module": [
		"./src/app/simple-nav/page-two/page-two.module.ts",
		"page-two-page-two-module"
	],
	"./popover/popover.module": [
		"./src/app/popover/popover.module.ts",
		"popover-popover-module"
	],
	"./segment/segment.module": [
		"./src/app/segment/segment.module.ts",
		"segment-segment-module"
	],
	"./show-hide-when/show-hide-when.module": [
		"./src/app/show-hide-when/show-hide-when.module.ts",
		"show-hide-when-show-hide-when-module"
	],
	"./simple-nav/simple-nav.module": [
		"./src/app/simple-nav/simple-nav.module.ts",
		"simple-nav-simple-nav-module"
	],
	"./simple-tabs/tabs.module": [
		"./src/app/simple-tabs/tabs.module.ts",
		"simple-tabs-tabs-module"
	],
	"./static-tabs/tabs.module": [
		"./src/app/static-tabs/tabs.module.ts",
		"static-tabs-tabs-module"
	],
	"./toast/toast.module": [
		"./src/app/toast/toast.module.ts",
		"toast-toast-module"
	],
	"./virtual-scroll/virtual-scroll.module": [
		"./src/app/virtual-scroll/virtual-scroll.module.ts",
		"virtual-scroll-virtual-scroll-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'basic-inputs', loadChildren: './basic-inputs-page/basic-inputs-page.module#BasicInputsPageModule' },
    { path: 'show-hide-when', loadChildren: './show-hide-when/show-hide-when.module#ShowHideWhenModule' },
    { path: 'form-sample', loadChildren: './form-sample-page/form-sample-page.module#FormSamplePageModule' },
    { path: 'group-inputs', loadChildren: './group-inputs-page/group-inputs-page.module#GroupInputsPageModule' },
    { path: 'home', loadChildren: './home-page/home-page.module#HomePageModule' },
    { path: 'alert', loadChildren: './alert/alert.module#AlertModule' },
    { path: 'actionSheet', loadChildren: './action-sheet/action-sheet.module#ActionSheetModule' },
    { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
    { path: 'card', loadChildren: './card/card.module#CardModule' },
    { path: 'content', loadChildren: './content/content.module#ContentModule' },
    { path: 'toast', loadChildren: './toast/toast.module#ToastModule' },
    { path: 'loading', loadChildren: './loading/loading.module#LoadingModule' },
    { path: 'modal', loadChildren: './modal/modal.module#ModalModule' },
    { path: 'ng-if', loadChildren: './ng-if/ng-if.module#NgIfModule' },
    { path: 'popover', loadChildren: './popover/popover.module#PopoverModule' },
    { path: 'segment', loadChildren: './segment/segment.module#SegmentModule' },
    { path: 'virtual-scroll', loadChildren: './virtual-scroll/virtual-scroll.module#VirtualScrollModule' },
    //
    { path: 'no-routing-nav', loadChildren: './no-routing-nav/no-routing-nav.module#NoRoutingNavModule' },
    { path: 'simple-nav', loadChildren: './simple-nav/simple-nav.module#SimpleNavModule' },
    { path: 'lazy-load-tabs', loadChildren: './lazy-load-tabs/tabs.module#TabsModule' },
    { path: 'simple-tabs', loadChildren: './simple-tabs/tabs.module#TabsModule' },
    { path: 'static-tabs', loadChildren: './static-tabs/tabs.module#TabsModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-button>返回首页</ion-button>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/CK/git/ionic4-angular6-capacitor/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map