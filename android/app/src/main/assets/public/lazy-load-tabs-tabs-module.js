(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-load-tabs-tabs-module"],{

/***/ "./src/app/lazy-load-tabs/tabs-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/lazy-load-tabs/tabs-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.component */ "./src/app/lazy-load-tabs/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'tabs',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsPageComponent"],
        children: [
            {
                path: 'mustang',
                outlet: 'tab1',
                loadChildren: './mustang/mustang.module#MustangModule'
            },
            {
                path: 'camaro',
                outlet: 'tab2',
                loadChildren: './camaro/camaro.module#CamaroModule'
            },
            {
                path: 'charger',
                outlet: 'tab3',
                loadChildren: './charger/charger.module#ChargerModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/lazy-load-tabs/tabs/(tab1:mustang)'
    }
];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/lazy-load-tabs/tabs.component.ts ***!
  \**************************************************/
/*! exports provided: TabsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageComponent", function() { return TabsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPageComponent = /** @class */ (function () {
    function TabsPageComponent() {
    }
    TabsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs-root',
            template: __webpack_require__(/*! ./tabs.html */ "./src/app/lazy-load-tabs/tabs.html")
        })
    ], TabsPageComponent);
    return TabsPageComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load-tabs/tabs.html":
/*!******************************************!*\
  !*** ./src/app/lazy-load-tabs/tabs.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n\n  <ion-tabs>\n\n    <ion-tab label=\"Tab 1\" icon=\"home\" href=\"/lazy-load-tabs/tabs/(tab1:mustang)\">\n      <ion-router-outlet name=\"tab1\"></ion-router-outlet>\n    </ion-tab>\n\n    <ion-tab label=\"Tab 2\" icon=\"heart\" href=\"/lazy-load-tabs/tabs/(tab2:camaro)\">\n      <ion-router-outlet name=\"tab2\"></ion-router-outlet>\n    </ion-tab>\n\n    <ion-tab label=\"Tab 3\" icon=\"star\" href=\"/lazy-load-tabs/tabs/(tab3:charger)\">\n      <ion-router-outlet name=\"tab3\"></ion-router-outlet>\n    </ion-tab>\n\n  </ion-tabs>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/lazy-load-tabs/tabs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load-tabs/tabs.module.ts ***!
  \***********************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ "./src/app/lazy-load-tabs/tabs.component.ts");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/lazy-load-tabs/tabs-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_4__["TabsRoutingModule"],
            ],
            declarations: [
                _tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsPageComponent"],
            ]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazy-load-tabs-tabs-module.js.map