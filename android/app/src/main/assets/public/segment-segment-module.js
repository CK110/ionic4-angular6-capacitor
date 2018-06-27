(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-segment-module"],{

/***/ "./src/app/segment/segment-page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/segment/segment-page.component.ts ***!
  \***************************************************/
/*! exports provided: SegmentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentPageComponent", function() { return SegmentPageComponent; });
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

var SegmentPageComponent = /** @class */ (function () {
    function SegmentPageComponent() {
        this.relationship = 'friends';
        this.modelStyle = 'B';
        this.appType = 'free';
        this.icons = 'camera';
        this.isDisabledB = true;
        this.isDisabledS = false;
        this.valve = {
            daysInfo: [],
            selectDay: '0',
            periodDays: 3
        };
        this.periodDaysChange(this.valve);
    }
    SegmentPageComponent.prototype.periodDaysChange = function (valve) {
        valve.periodDays = parseInt(valve.periodDays);
        if (valve.daysInfo.length < valve.periodDays) {
            for (var i = valve.daysInfo.length; i < valve.periodDays; ++i) {
                valve.daysInfo.push({ day: i, intervals: [] });
            }
        }
        else if (valve.daysInfo.length > valve.periodDays) {
            valve.daysInfo = valve.daysInfo.slice(0, valve.periodDays);
        }
    };
    SegmentPageComponent.prototype.addDays = function (valve) {
        valve.periodDays += 1;
        this.periodDaysChange(valve);
    };
    SegmentPageComponent.prototype.toggleBDisabled = function () {
        this.isDisabledB = !this.isDisabledB;
    };
    SegmentPageComponent.prototype.toggleSDisabled = function () {
        this.isDisabledS = !this.isDisabledS;
    };
    SegmentPageComponent.prototype.onSegmentChanged = function (segmentButton) {
        console.log('Segment changed to', segmentButton.currentTarget.value);
    };
    SegmentPageComponent.prototype.onSegmentSelected = function (segmentButton) {
        console.log('Segment selected', segmentButton.currentTarget.value);
    };
    SegmentPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-segment-page',
            template: "\n  <ion-app>\n      <ion-header>\n        <ion-toolbar>\n          <ion-segment id=\"segment\" [(ngModel)]=\"relationship\" (ionChange)=\"onSegmentChanged($event)\">\n            <ion-segment-button value=\"friends\" (ionSelect)=\"onSegmentSelected($event)\" class=\"e2eSegmentFriends\">\n              Friends\n            </ion-segment-button>\n            <ion-segment-button value=\"enemies\" (ionSelect)=\"onSegmentSelected($event)\">\n              Enemies\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n        <ion-toolbar>\n          <ion-buttons slot=\"mode-end\">\n            <ion-button>\n              <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-segment [(ngModel)]=\"icons\" color=\"secondary\">\n            <ion-segment-button value=\"camera\">\n              <ion-icon name=\"camera\"></ion-icon>\n            </ion-segment-button>\n            <ion-segment-button value=\"bookmark\">\n              <ion-icon name=\"bookmark\"></ion-icon>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content padding>\n        <h4>Model style: NgModel</h4>\n        <ion-segment [(ngModel)]=\"modelStyle\" color=\"dark\" [disabled]=\"isDisabledS\">\n          <ion-segment-button value=\"A\">\n            Model A\n          </ion-segment-button>\n          <ion-segment-button value=\"B\">\n            Model B\n          </ion-segment-button>\n          <ion-segment-button value=\"C\" class=\"e2eSegmentModelC\">\n            Model C\n          </ion-segment-button>\n          <ion-segment-button value=\"D\" [disabled]=\"isDisabledB\">\n            Model D\n          </ion-segment-button>\n        </ion-segment>\n        <p>Model Style: <b>Model {{ modelStyle }}</b></p>\n        <ion-segment [(ngModel)]=\"icons\">\n          <ion-segment-button value=\"camera\">\n            <ion-icon name=\"camera\"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value=\"bookmark\">\n            <ion-icon name=\"bookmark\"></ion-icon>\n          </ion-segment-button>\n        </ion-segment>\n        <ion-button color=\"dark\" (click)=\"toggleBDisabled()\">Toggle Button Disabled</ion-button>\n        <ion-button color=\"dark\" (click)=\"toggleSDisabled()\">Toggle Segment Disabled</ion-button>\n\n        <ion-item>\n          <ion-label>Period Days</ion-label>\n          <ion-select [(ngModel)]=\"valve.periodDays\" (ionChange)=\"periodDaysChange(valve)\">\n            <ion-select-option value=\"1\">1 Day</ion-select-option>\n            <ion-select-option value=\"2\">2 Days</ion-select-option>\n            <ion-select-option value=\"3\">3 Days</ion-select-option>\n            <ion-select-option value=\"4\">4 Days</ion-select-option>\n            <ion-select-option value=\"5\">5 Days</ion-select-option>\n            <ion-select-option value=\"6\">6 Days</ion-select-option>\n            <ion-select-option value=\"7\">7 Days</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-segment [(ngModel)]=\"valve.selectDay\">\n          <ion-segment-button *ngFor=\"let info of valve.daysInfo\" value=\"{{info.day}}\">{{info.day+1}}th day</ion-segment-button>\n        </ion-segment>\n      </ion-content>\n\n      <ion-footer>\n        <ion-toolbar color=\"primary\">\n          <ion-segment [(ngModel)]=\"appType\" color=\"light\">\n            <ion-segment-button value=\"paid\">\n              Primary\n            </ion-segment-button>\n            <ion-segment-button value=\"free\">\n              Toolbar\n            </ion-segment-button>\n            <ion-segment-button value=\"top\" class=\"e2eSegmentTopGrossing\">\n              Light Segment\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n        <ion-toolbar>\n          <ion-segment [(ngModel)]=\"appType\" color=\"danger\">\n            <ion-segment-button value=\"paid\">\n              Default\n            </ion-segment-button>\n            <ion-segment-button value=\"free\">\n              Toolbar\n            </ion-segment-button>\n            <ion-segment-button value=\"top\">\n              Danger Segment\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n        <ion-toolbar>\n          <ion-segment [(ngModel)]=\"appType\" color=\"dark\" [disabled]=\"isDisabledS\">\n            <ion-segment-button value=\"paid\">\n              Default\n            </ion-segment-button>\n            <ion-segment-button value=\"free\">\n              Toolbar\n            </ion-segment-button>\n            <ion-segment-button value=\"top\">\n              Dark Segment\n            </ion-segment-button>\n          </ion-segment>\n        </ion-toolbar>\n      </ion-footer>\n</ion-app>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SegmentPageComponent);
    return SegmentPageComponent;
}());



/***/ }),

/***/ "./src/app/segment/segment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/segment/segment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SegmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentRoutingModule", function() { return SegmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _segment_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./segment-page.component */ "./src/app/segment/segment-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _segment_page_component__WEBPACK_IMPORTED_MODULE_2__["SegmentPageComponent"] }
];
var SegmentRoutingModule = /** @class */ (function () {
    function SegmentRoutingModule() {
    }
    SegmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SegmentRoutingModule);
    return SegmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/segment/segment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/segment/segment.module.ts ***!
  \*******************************************/
/*! exports provided: SegmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentModule", function() { return SegmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _segment_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./segment-page.component */ "./src/app/segment/segment-page.component.ts");
/* harmony import */ var _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./segment-routing.module */ "./src/app/segment/segment-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SegmentModule = /** @class */ (function () {
    function SegmentModule() {
    }
    SegmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _segment_routing_module__WEBPACK_IMPORTED_MODULE_5__["SegmentRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_segment_page_component__WEBPACK_IMPORTED_MODULE_4__["SegmentPageComponent"]]
        })
    ], SegmentModule);
    return SegmentModule;
}());



/***/ })

}]);
//# sourceMappingURL=segment-segment-module.js.map