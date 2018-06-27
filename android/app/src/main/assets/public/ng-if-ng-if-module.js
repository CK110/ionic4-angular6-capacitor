(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ng-if-ng-if-module"],{

/***/ "./src/app/ng-if/ng-if-page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ng-if/ng-if-page.component.ts ***!
  \***********************************************/
/*! exports provided: NgIfPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfPageComponent", function() { return NgIfPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NgIfPageComponent = /** @class */ (function () {
    function NgIfPageComponent() {
        this.value = Math.round(Math.random() * 10000000);
        this.show = true;
    }
    NgIfPageComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    NgIfPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-if-page',
            template: "\n  <ion-app>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>ngIf</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <p padding>Value should stay the same after ngIf removes the component from the DOM then adds it back in.</p>\n      <ion-list>\n        <ion-item>\n          <ion-label>Value: {{value}}</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"show\">\n          <ion-input value=\"{{value}}\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"show\">\n          <ion-input [value]=\"value\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"show\">\n          <ion-input [(ngModel)]=\"value\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button (click)=\"toggle()\">ngIf {{ show ? 'hide' : 'show'}}</ion-button>\n    </ion-content>\n  </ion-app>\n  "
        })
    ], NgIfPageComponent);
    return NgIfPageComponent;
}());



/***/ }),

/***/ "./src/app/ng-if/ng-if-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ng-if/ng-if-routing.module.ts ***!
  \***********************************************/
/*! exports provided: NgIfRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfRoutingModule", function() { return NgIfRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_if_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-if-page.component */ "./src/app/ng-if/ng-if-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _ng_if_page_component__WEBPACK_IMPORTED_MODULE_2__["NgIfPageComponent"] }
];
var NgIfRoutingModule = /** @class */ (function () {
    function NgIfRoutingModule() {
    }
    NgIfRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NgIfRoutingModule);
    return NgIfRoutingModule;
}());



/***/ }),

/***/ "./src/app/ng-if/ng-if.module.ts":
/*!***************************************!*\
  !*** ./src/app/ng-if/ng-if.module.ts ***!
  \***************************************/
/*! exports provided: NgIfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgIfModule", function() { return NgIfModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ng_if_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-if-page.component */ "./src/app/ng-if/ng-if-page.component.ts");
/* harmony import */ var _ng_if_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-if-routing.module */ "./src/app/ng-if/ng-if-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgIfModule = /** @class */ (function () {
    function NgIfModule() {
    }
    NgIfModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_if_routing_module__WEBPACK_IMPORTED_MODULE_5__["NgIfRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_ng_if_page_component__WEBPACK_IMPORTED_MODULE_4__["NgIfPageComponent"]]
        })
    ], NgIfModule);
    return NgIfModule;
}());



/***/ })

}]);
//# sourceMappingURL=ng-if-ng-if-module.js.map