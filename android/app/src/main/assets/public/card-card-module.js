(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-card-module"],{

/***/ "./src/app/card/card-page.component.ts":
/*!*********************************************!*\
  !*** ./src/app/card/card-page.component.ts ***!
  \*********************************************/
/*! exports provided: CardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageComponent", function() { return CardPageComponent; });
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


var CardPageComponent = /** @class */ (function () {
    function CardPageComponent(domCtrl) {
        this.domCtrl = domCtrl;
        this.domControllerTest('constructor');
    }
    CardPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.domControllerTest('ngOnInit');
        setTimeout(function () {
            _this.domControllerTest('setTimeout');
        }, 5000);
    };
    CardPageComponent.prototype.domControllerTest = function (test) {
        var _this = this;
        this.domCtrl.read(function (readTimeStamp) {
            console.log('DomController read:', test, readTimeStamp);
            _this.domCtrl.write(function (writeTimeStamp) {
                console.log('DomController write:', test, writeTimeStamp);
            });
        });
    };
    CardPageComponent.prototype.toggleColor = function () {
    };
    CardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card-page',
            template: "\n  <ion-app>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Card</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Card Header</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          Keep close to Nature's heart... and break clear away, once in awhile,\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n          ion-item in a card, icon left, button right\n          <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n        </ion-item>\n\n        <ion-card-content>\n          This is content, without any paragraph or header tags,\n          within an ion-card-content element.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-item href=\"#\" class=\"activated\">\n          <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n          Card Link Item 1 .activated\n        </ion-item>\n\n        <ion-item href=\"#\">\n          <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n          Card Link Item 2\n        </ion-item>\n\n        <ion-item class=\"activated\">\n          <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n          Card Button Item 1 .activated\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n          Card Button Item 2\n        </ion-item>\n      </ion-card>\n    </ion-content>\n</ion-app>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["DomController"]])
    ], CardPageComponent);
    return CardPageComponent;
}());



/***/ }),

/***/ "./src/app/card/card-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/card/card-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRoutingModule", function() { return CardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-page.component */ "./src/app/card/card-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _card_page_component__WEBPACK_IMPORTED_MODULE_2__["CardPageComponent"] }
];
var CardRoutingModule = /** @class */ (function () {
    function CardRoutingModule() {
    }
    CardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CardRoutingModule);
    return CardRoutingModule;
}());



/***/ }),

/***/ "./src/app/card/card.module.ts":
/*!*************************************!*\
  !*** ./src/app/card/card.module.ts ***!
  \*************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _card_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-page.component */ "./src/app/card/card-page.component.ts");
/* harmony import */ var _card_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-routing.module */ "./src/app/card/card-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _card_routing_module__WEBPACK_IMPORTED_MODULE_4__["CardRoutingModule"]
            ],
            declarations: [
                _card_page_component__WEBPACK_IMPORTED_MODULE_3__["CardPageComponent"]
            ],
            providers: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
            ]
        })
    ], CardModule);
    return CardModule;
}());



/***/ })

}]);
//# sourceMappingURL=card-card-module.js.map