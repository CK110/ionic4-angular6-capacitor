(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtual-scroll-virtual-scroll-module"],{

/***/ "./src/app/virtual-scroll/virtual-scroll-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/virtual-scroll/virtual-scroll-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: VirtualScrollPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollPageComponent", function() { return VirtualScrollPageComponent; });
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

var VirtualScrollPageComponent = /** @class */ (function () {
    function VirtualScrollPageComponent() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
            this.items.push({
                name: i + ' - ' + images[rotateImg],
                imgSrc: getImgSrc(),
                avatarSrc: getImgSrc(),
                imgHeight: Math.floor((Math.random() * 50) + 150),
                content: lorem.substring(0, (Math.random() * (lorem.length - 100)) + 100)
            });
            rotateImg++;
            if (rotateImg === images.length) {
                rotateImg = 0;
            }
        }
    }
    VirtualScrollPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtual-scroll-page',
            template: "\n    <ion-app>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Test</ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content>\n\n      <ion-virtual-scroll [items]=\"items\" approxItemHeight=\"320px\">\n\n        <ion-card *virtualItem=\"let item; let itemBounds = bounds;\">\n\n          <div>\n            <img [src]=\"item.imgSrc\" [height]=\"item.imgHeight\" [alt]=\"item.name\">\n          </div>\n\n          <ion-card-header>\n            <ion-card-title>{{ item.name }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>{{ item.content }}</ion-card-content>\n\n        </ion-card>\n\n      </ion-virtual-scroll>\n\n    </ion-content>\n  </ion-app>"
        }),
        __metadata("design:paramtypes", [])
    ], VirtualScrollPageComponent);
    return VirtualScrollPageComponent;
}());

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' +
    'do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim' +
    ' veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
    'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
    'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non' +
    ' proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile',
];
function getImgSrc() {
    var src = "https://dummyimage.com/600x400/" + Math.round(Math.random() * 99999) + "/fff.png";
    rotateImg++;
    if (rotateImg === images.length) {
        rotateImg = 0;
    }
    return src;
}
var rotateImg = 0;


/***/ }),

/***/ "./src/app/virtual-scroll/virtual-scroll-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/virtual-scroll/virtual-scroll-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: VirtualScrollRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollRoutingModule", function() { return VirtualScrollRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _virtual_scroll_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-scroll-page.component */ "./src/app/virtual-scroll/virtual-scroll-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _virtual_scroll_page_component__WEBPACK_IMPORTED_MODULE_2__["VirtualScrollPageComponent"] }
];
var VirtualScrollRoutingModule = /** @class */ (function () {
    function VirtualScrollRoutingModule() {
    }
    VirtualScrollRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VirtualScrollRoutingModule);
    return VirtualScrollRoutingModule;
}());



/***/ }),

/***/ "./src/app/virtual-scroll/virtual-scroll.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/virtual-scroll/virtual-scroll.module.ts ***!
  \*********************************************************/
/*! exports provided: VirtualScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualScrollModule", function() { return VirtualScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _virtual_scroll_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-scroll-page.component */ "./src/app/virtual-scroll/virtual-scroll-page.component.ts");
/* harmony import */ var _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virtual-scroll-routing.module */ "./src/app/virtual-scroll/virtual-scroll-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VirtualScrollModule = /** @class */ (function () {
    function VirtualScrollModule() {
    }
    VirtualScrollModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _virtual_scroll_routing_module__WEBPACK_IMPORTED_MODULE_4__["VirtualScrollRoutingModule"]
            ],
            declarations: [_virtual_scroll_page_component__WEBPACK_IMPORTED_MODULE_3__["VirtualScrollPageComponent"]]
        })
    ], VirtualScrollModule);
    return VirtualScrollModule;
}());



/***/ })

}]);
//# sourceMappingURL=virtual-scroll-virtual-scroll-module.js.map