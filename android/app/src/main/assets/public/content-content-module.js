(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-content-module"],{

/***/ "./src/app/content/content-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/content/content-page.component.ts ***!
  \***************************************************/
/*! exports provided: ContentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageComponent", function() { return ContentPageComponent; });
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

var ContentPageComponent = /** @class */ (function () {
    function ContentPageComponent() {
    }
    ContentPageComponent.prototype.toggleFullscreen = function (content) {
        content.fullscreen = !content.fullscreen;
        console.log('content.fullscren =', content.fullscreen);
    };
    ContentPageComponent.prototype.toggleDisplay = function (el) {
        el.style.display = !el.style.display ? 'none' : null;
    };
    ContentPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-page',
            styles: [
                "\n      div.box {\n        display: block;\n        margin: 15px auto;\n        max-width: 150px;\n        height: 150px;\n        background: blue;\n      }\n\n      div.box:last-of-type {\n        background: yellow;\n      }\n    "
            ],
            template: "\n  <ion-app>\n  <ion-header #header>\n    <ion-toolbar style=\"display: none\" #toolbar>\n      <ion-title>Hidden Toolbar</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-title>Content - Basic</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n    <ion-content padding style=\"text-align: center\" #content>\n      <p>\n      <ion-button (click)=\"toggleFullscreen(content)\">Toggle content.fullscreen</ion-button>\n      <p>\n        <ion-button (click)=\"toggleDisplay(header)\" color=\"secondary\">Toggle header</ion-button>\n        <ion-button (click)=\"toggleDisplay(footer)\" color=\"secondary\">Toggle footer</ion-button>\n        <ion-button (click)=\"toggleDisplay(toolbar)\" color=\"secondary\">Toggle 2nd toolbar</ion-button>\n      </p>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n      <div class=\"box\"></div>\n    </ion-content>\n\n\n  <ion-footer #footer>\n    <ion-toolbar>\n      <ion-title>Footer</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-app>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ContentPageComponent);
    return ContentPageComponent;
}());



/***/ }),

/***/ "./src/app/content/content-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/content/content-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-page.component */ "./src/app/content/content-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _content_page_component__WEBPACK_IMPORTED_MODULE_2__["ContentPageComponent"] }
];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());



/***/ }),

/***/ "./src/app/content/content.module.ts":
/*!*******************************************!*\
  !*** ./src/app/content/content.module.ts ***!
  \*******************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _content_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-page.component */ "./src/app/content/content-page.component.ts");
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-routing.module */ "./src/app/content/content-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _content_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContentRoutingModule"]
            ],
            declarations: [_content_page_component__WEBPACK_IMPORTED_MODULE_3__["ContentPageComponent"]]
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ })

}]);
//# sourceMappingURL=content-content-module.js.map