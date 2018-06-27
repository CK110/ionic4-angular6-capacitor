(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-routing-nav-no-routing-nav-module"],{

/***/ "./src/app/no-routing-nav/no-routing-nav-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/no-routing-nav/no-routing-nav-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NoRoutingNavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRoutingNavRoutingModule", function() { return NoRoutingNavRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _no_routing_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-routing-nav.component */ "./src/app/no-routing-nav/no-routing-nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _no_routing_nav_component__WEBPACK_IMPORTED_MODULE_2__["NoRoutingNavPageComponent"] }
];
var NoRoutingNavRoutingModule = /** @class */ (function () {
    function NoRoutingNavRoutingModule() {
    }
    NoRoutingNavRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], NoRoutingNavRoutingModule);
    return NoRoutingNavRoutingModule;
}());



/***/ }),

/***/ "./src/app/no-routing-nav/no-routing-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/no-routing-nav/no-routing-nav.component.ts ***!
  \************************************************************/
/*! exports provided: NoRoutingNavPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRoutingNavPageComponent", function() { return NoRoutingNavPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_page_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-one */ "./src/app/no-routing-nav/pages/page-one.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoRoutingNavPageComponent = /** @class */ (function () {
    function NoRoutingNavPageComponent() {
        this.pageOne = _pages_page_one__WEBPACK_IMPORTED_MODULE_1__["PageOne"];
    }
    NoRoutingNavPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-page',
            template: "\n    <ion-app>\n      <ion-nav [root]=\"pageOne\"></ion-nav>\n    </ion-app>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NoRoutingNavPageComponent);
    return NoRoutingNavPageComponent;
}());



/***/ }),

/***/ "./src/app/no-routing-nav/no-routing-nav.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/no-routing-nav/no-routing-nav.module.ts ***!
  \*********************************************************/
/*! exports provided: NoRoutingNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoRoutingNavModule", function() { return NoRoutingNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _no_routing_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-routing-nav.component */ "./src/app/no-routing-nav/no-routing-nav.component.ts");
/* harmony import */ var _no_routing_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-routing-nav-routing.module */ "./src/app/no-routing-nav/no-routing-nav-routing.module.ts");
/* harmony import */ var _pages_page_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-one */ "./src/app/no-routing-nav/pages/page-one.ts");
/* harmony import */ var _pages_page_two__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-two */ "./src/app/no-routing-nav/pages/page-two.ts");
/* harmony import */ var _pages_page_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-three */ "./src/app/no-routing-nav/pages/page-three.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NoRoutingNavModule = /** @class */ (function () {
    function NoRoutingNavModule() {
    }
    NoRoutingNavModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _no_routing_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__["NoRoutingNavRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            ],
            declarations: [
                _no_routing_nav_component__WEBPACK_IMPORTED_MODULE_3__["NoRoutingNavPageComponent"],
                _pages_page_one__WEBPACK_IMPORTED_MODULE_5__["PageOne"],
                _pages_page_two__WEBPACK_IMPORTED_MODULE_6__["PageTwo"],
                _pages_page_three__WEBPACK_IMPORTED_MODULE_7__["PageThree"]
            ],
            entryComponents: [
                _pages_page_one__WEBPACK_IMPORTED_MODULE_5__["PageOne"],
                _pages_page_two__WEBPACK_IMPORTED_MODULE_6__["PageTwo"],
                _pages_page_three__WEBPACK_IMPORTED_MODULE_7__["PageThree"]
            ]
        })
    ], NoRoutingNavModule);
    return NoRoutingNavModule;
}());



/***/ }),

/***/ "./src/app/no-routing-nav/pages/page-one.ts":
/*!**************************************************!*\
  !*** ./src/app/no-routing-nav/pages/page-one.ts ***!
  \**************************************************/
/*! exports provided: PageOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOne", function() { return PageOne; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-two */ "./src/app/no-routing-nav/pages/page-two.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PageOne = /** @class */ (function () {
    function PageOne(nav) {
        this.nav = nav;
        this.ngOnInitDetection = 'initial';
        this.ionViewWillEnterDetection = 'initial';
        this.ionViewDidEnterDetection = 'initial';
    }
    PageOne.prototype.ngOnInit = function () {
        var _this = this;
        console.log('page one ngOnInit');
        setInterval(function () {
            _this.ngOnInitDetection = '' + Date.now();
        }, 500);
    };
    PageOne.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('page one ionViewWillEnter');
        setInterval(function () {
            _this.ionViewWillEnterDetection = '' + Date.now();
        }, 500);
    };
    PageOne.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('page one ionViewDidEnter');
        setInterval(function () {
            _this.ionViewDidEnterDetection = '' + Date.now();
        }, 500);
    };
    PageOne.prototype.goToPageTwo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nav.push(_page_two__WEBPACK_IMPORTED_MODULE_1__["PageTwo"])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageOne = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-one',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Page One</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    Page One\n    <div>\n      <ion-button (click)=\"goToPageTwo()\">Go to Page Two</ion-button>\n    </div>\n    <ul>\n      <li>ngOnInit - {{ngOnInitDetection}}</li>\n      <li>ionViewWillEnter - {{ionViewWillEnterDetection}}</li>\n      <li>ionViewDidEnter - {{ionViewDidEnterDetection}}</li>\n    </ul>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Nav"]])
    ], PageOne);
    return PageOne;
}());



/***/ }),

/***/ "./src/app/no-routing-nav/pages/page-three.ts":
/*!****************************************************!*\
  !*** ./src/app/no-routing-nav/pages/page-three.ts ***!
  \****************************************************/
/*! exports provided: PageThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageThree", function() { return PageThree; });
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

var PageThree = /** @class */ (function () {
    function PageThree() {
        this.ngOnInitDetection = 'initial';
        this.ionViewWillEnterDetection = 'initial';
        this.ionViewDidEnterDetection = 'initial';
    }
    PageThree.prototype.ngOnInit = function () {
        var _this = this;
        console.log('page two ngOnInit');
        setInterval(function () {
            _this.ngOnInitDetection = '' + Date.now();
        }, 500);
    };
    PageThree.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('page two ionViewWillEnter');
        setInterval(function () {
            _this.ionViewWillEnterDetection = '' + Date.now();
        }, 500);
    };
    PageThree.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('page two ionViewDidEnter');
        setInterval(function () {
            _this.ionViewDidEnterDetection = '' + Date.now();
        }, 500);
    };
    PageThree.prototype.goBack = function () {
        var nav = document.querySelector('ion-nav');
        nav.pop().then(function () { return console.log('pop complete'); });
    };
    PageThree = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-three',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Page Three</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    Page Three\n    <div>\n    <ion-button (click)=\"goBack()\">Go Back</ion-button>\n  </div>\n    <ul>\n      <li>ngOnInit - {{ngOnInitDetection}}</li>\n      <li>ionViewWillEnter - {{ionViewWillEnterDetection}}</li>\n      <li>ionViewDidEnter - {{ionViewDidEnterDetection}}</li>\n    </ul>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PageThree);
    return PageThree;
}());



/***/ }),

/***/ "./src/app/no-routing-nav/pages/page-two.ts":
/*!**************************************************!*\
  !*** ./src/app/no-routing-nav/pages/page-two.ts ***!
  \**************************************************/
/*! exports provided: PageTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwo", function() { return PageTwo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-three */ "./src/app/no-routing-nav/pages/page-three.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTwo = /** @class */ (function () {
    function PageTwo() {
        this.ngOnInitDetection = 'initial';
        this.ionViewWillEnterDetection = 'initial';
        this.ionViewDidEnterDetection = 'initial';
    }
    PageTwo.prototype.ngOnInit = function () {
        var _this = this;
        console.log('page two ngOnInit');
        setInterval(function () {
            _this.ngOnInitDetection = '' + Date.now();
        }, 500);
    };
    PageTwo.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log('page two ionViewWillEnter');
        setInterval(function () {
            _this.ionViewWillEnterDetection = '' + Date.now();
        }, 500);
    };
    PageTwo.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('page two ionViewDidEnter');
        setInterval(function () {
            _this.ionViewDidEnterDetection = '' + Date.now();
        }, 500);
    };
    PageTwo.prototype.goNext = function () {
        var nav = document.querySelector('ion-nav');
        nav.push(_page_three__WEBPACK_IMPORTED_MODULE_1__["PageThree"]).then(function () { return console.log('push complete'); });
    };
    PageTwo.prototype.goBack = function () {
        var nav = document.querySelector('ion-nav');
        nav.pop().then(function () { return console.log('pop complete'); });
    };
    PageTwo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-two',
            template: "\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Page Two</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    Page Two\n    <div>\n      <ion-button (click)=\"goNext()\">Go to Page Three</ion-button>\n    </div>\n    <div>\n    <ion-button (click)=\"goBack()\">Go Back</ion-button>\n  </div>\n    <ul>\n      <li>ngOnInit - {{ngOnInitDetection}}</li>\n      <li>ionViewWillEnter - {{ionViewWillEnterDetection}}</li>\n      <li>ionViewDidEnter - {{ionViewDidEnterDetection}}</li>\n    </ul>\n  </ion-content>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], PageTwo);
    return PageTwo;
}());



/***/ })

}]);
//# sourceMappingURL=no-routing-nav-no-routing-nav-module.js.map