(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popover-popover-module"],{

/***/ "./src/app/popover/popover-page-to-present.ts":
/*!****************************************************!*\
  !*** ./src/app/popover/popover-page-to-present.ts ***!
  \****************************************************/
/*! exports provided: PopoverPageToPresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageToPresent", function() { return PopoverPageToPresent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//  import { PopoverController } from '@ionic/angular';
var PopoverPageToPresent = /** @class */ (function () {
    function PopoverPageToPresent() {
        this.ngOnInitDetection = 'initial';
    }
    // constructor(private controller: PopoverController) { }
    PopoverPageToPresent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('page one ngOnInit');
        setInterval(function () {
            _this.ngOnInitDetection = '' + Date.now();
        }, 500);
    };
    PopoverPageToPresent.prototype.dismiss = function () {
        // return this.controller.
    };
    PopoverPageToPresent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-one',
            template: "\n    <div style=\"height: 200px; background-color: blue\">\n      {{ngOnInitDetection}}\n      <ion-button (click)=\"dismiss()\">Close Popover</ion-button>\n    </div>\n  "
        })
    ], PopoverPageToPresent);
    return PopoverPageToPresent;
}());



/***/ }),

/***/ "./src/app/popover/popover-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/popover/popover-page.component.ts ***!
  \***************************************************/
/*! exports provided: PopoverPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageComponent", function() { return PopoverPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _popover_page_to_present__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-page-to-present */ "./src/app/popover/popover-page-to-present.ts");
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



var PopoverPageComponent = /** @class */ (function () {
    function PopoverPageComponent(popoverController) {
        this.popoverController = popoverController;
    }
    PopoverPageComponent.prototype.clickMe = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_page_to_present__WEBPACK_IMPORTED_MODULE_2__["PopoverPageToPresent"],
                            ev: event
                        })];
                    case 1:
                        popover = _a.sent();
                        return [2 /*return*/, popover.present()];
                }
            });
        });
    };
    PopoverPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popover-page',
            template: "\n    <ion-app>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Popover</ion-title>\n          <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"clickMe()\">\n              No event passed\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content padding>\n        <ion-button (click)=\"clickMe($event)\">Open Basic Popover</ion-button>\n      </ion-content>\n    </ion-app>\n  "
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], PopoverPageComponent);
    return PopoverPageComponent;
}());



/***/ }),

/***/ "./src/app/popover/popover-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/popover/popover-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PopoverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverRoutingModule", function() { return PopoverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popover_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-page.component */ "./src/app/popover/popover-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _popover_page_component__WEBPACK_IMPORTED_MODULE_2__["PopoverPageComponent"] }
];
var PopoverRoutingModule = /** @class */ (function () {
    function PopoverRoutingModule() {
    }
    PopoverRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PopoverRoutingModule);
    return PopoverRoutingModule;
}());



/***/ }),

/***/ "./src/app/popover/popover.module.ts":
/*!*******************************************!*\
  !*** ./src/app/popover/popover.module.ts ***!
  \*******************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _popover_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover-page.component */ "./src/app/popover/popover-page.component.ts");
/* harmony import */ var _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popover-routing.module */ "./src/app/popover/popover-routing.module.ts");
/* harmony import */ var _popover_page_to_present__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popover-page-to-present */ "./src/app/popover/popover-page-to-present.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"].forRoot(),
                _popover_routing_module__WEBPACK_IMPORTED_MODULE_4__["PopoverRoutingModule"]
            ],
            declarations: [
                _popover_page_component__WEBPACK_IMPORTED_MODULE_3__["PopoverPageComponent"],
                _popover_page_to_present__WEBPACK_IMPORTED_MODULE_5__["PopoverPageToPresent"]
            ],
            providers: [],
            entryComponents: [
                _popover_page_to_present__WEBPACK_IMPORTED_MODULE_5__["PopoverPageToPresent"]
            ]
        })
    ], PopoverModule);
    return PopoverModule;
}());



/***/ })

}]);
//# sourceMappingURL=popover-popover-module.js.map