(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["badge-badge-module"],{

/***/ "./src/app/badge/badge-page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/badge/badge-page.component.ts ***!
  \***********************************************/
/*! exports provided: BadgePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgePageComponent", function() { return BadgePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BadgePageComponent = /** @class */ (function () {
    function BadgePageComponent() {
        this.dynamicColor = 'primary';
    }
    BadgePageComponent.prototype.ngOnInit = function () {
        console.log(this.badge);
    };
    BadgePageComponent.prototype.toggleColor = function () {
        if (this.dynamicColor === 'primary') {
            this.dynamicColor = 'secondary';
        }
        else if (this.dynamicColor === 'secondary') {
            this.dynamicColor = 'danger';
        }
        else {
            this.dynamicColor = 'primary';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Badge"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Badge"])
    ], BadgePageComponent.prototype, "badge", void 0);
    BadgePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badge-page',
            template: "\n  <ion-app>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Badges</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Badges Right</ion-list-header>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"primary\">99</ion-badge>\n        <ion-label>Default Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"primary\">99</ion-badge>\n        <ion-label>Primary Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"secondary\">99</ion-badge>\n        <ion-label>Secondary Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"danger\">99</ion-badge>\n        <ion-label>Danger Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"light\">99</ion-badge>\n        <ion-label>Light Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"end\" color=\"dark\">99</ion-badge>\n        <ion-label>Dark Badge</ion-label>\n      </ion-item>\n      <ion-item (click)=\"toggleColor()\">\n        <ion-badge slot=\"end\" [color]=\"dynamicColor\">{{dynamicColor}}</ion-badge>\n        <ion-label>Dynamic Badge Color (toggle)</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header>Badges Left</ion-list-header>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"primary\">99</ion-badge>\n        <ion-label>Default Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"primary\">99</ion-badge>\n        <ion-label>Primary Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"secondary\">99</ion-badge>\n        <ion-label>Secondary Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"danger\">99</ion-badge>\n        <ion-label>Danger Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"light\">99</ion-badge>\n        <ion-label>Light Badge</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-badge slot=\"start\" color=\"dark\">99</ion-badge>\n        <ion-label>Dark Badge</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  </ion-app>\n  "
        })
    ], BadgePageComponent);
    return BadgePageComponent;
}());



/***/ }),

/***/ "./src/app/badge/badge-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/badge/badge-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BadgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeRoutingModule", function() { return BadgeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _badge_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge-page.component */ "./src/app/badge/badge-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _badge_page_component__WEBPACK_IMPORTED_MODULE_2__["BadgePageComponent"] }
];
var BadgeRoutingModule = /** @class */ (function () {
    function BadgeRoutingModule() {
    }
    BadgeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BadgeRoutingModule);
    return BadgeRoutingModule;
}());



/***/ }),

/***/ "./src/app/badge/badge.module.ts":
/*!***************************************!*\
  !*** ./src/app/badge/badge.module.ts ***!
  \***************************************/
/*! exports provided: BadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeModule", function() { return BadgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _badge_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badge-page.component */ "./src/app/badge/badge-page.component.ts");
/* harmony import */ var _badge_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badge-routing.module */ "./src/app/badge/badge-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BadgeModule = /** @class */ (function () {
    function BadgeModule() {
    }
    BadgeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _badge_routing_module__WEBPACK_IMPORTED_MODULE_4__["BadgeRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"]
            ],
            declarations: [_badge_page_component__WEBPACK_IMPORTED_MODULE_3__["BadgePageComponent"]]
        })
    ], BadgeModule);
    return BadgeModule;
}());



/***/ })

}]);
//# sourceMappingURL=badge-badge-module.js.map