(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-inputs-page-group-inputs-page-module"],{

/***/ "./src/app/group-inputs-page/group-inputs-page-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/group-inputs-page/group-inputs-page-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: GroupInputsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInputsPageRoutingModule", function() { return GroupInputsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _group_inputs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-inputs-page.component */ "./src/app/group-inputs-page/group-inputs-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _group_inputs_page_component__WEBPACK_IMPORTED_MODULE_2__["GroupInputsPageComponent"] }
];
var GroupInputsPageRoutingModule = /** @class */ (function () {
    function GroupInputsPageRoutingModule() {
    }
    GroupInputsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GroupInputsPageRoutingModule);
    return GroupInputsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/group-inputs-page/group-inputs-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/group-inputs-page/group-inputs-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  Ionic Core Group Inputs Demo\n</div>\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>Disable Inputs</ion-label>\n        <ion-checkbox id=\"disableCheckbox\" name=\"disableCheckbox\" [(ngModel)]=\"disableInputs\"></ion-checkbox>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h2>Radio Buttons</h2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h3>Angular</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <input id=\"stdBeef\" type=\"radio\" value=\"beef\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\" />\n      <label for=\"stdBeef\">Carne Asada</label>\n      <input id=\"stdTongue\" type=\"radio\" value=\"tongue\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\" />\n      <label for=\"stdTongue\">Lengua</label>\n      <input id=\"stdBrains\" type=\"radio\" value=\"brains\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\" />\n      <label for=\"stdBrains\">Sesos</label>\n      <input id=\"stdTripe\" type=\"radio\" value=\"tripe\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\" />\n      <label for=\"stdTripe\">Tripa</label>\n      <input id=\"stdChicken\" type=\"radio\" value=\"chicken\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\" />\n      <label for=\"stdChicken\">Pollo</label>\n    </ion-col>\n    <ion-col>\n      Value:\n      <span id=\"radioOutput\">{{radioValue}}</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h3>Ionic With Radio Group</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-radio-group id=\"radio-group\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\">\n          <ion-item>\n            <ion-label>Crarne Asada</ion-label>\n            <ion-radio id=\"ion-grp-beef\" value=\"beef\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Lengua</ion-label>\n            <ion-radio id=\"ion-grp-tongue\" value=\"tongue\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Sesos</ion-label>\n            <ion-radio id=\"ion-grp-brains\" value=\"brains\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Tripa</ion-label>\n            <ion-radio id=\"ion-grp-tripe\" value=\"tripe\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Pollo</ion-label>\n            <ion-radio id=\"ion-grp-chicken\" value=\"chicken\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h3>Ionic Without Radio Group</h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-list>\n        <ion-item>\n          <ion-label>Crarne Asada</ion-label>\n          <ion-radio value=\"beef\" id=\"ion-beef\" name=\"tacos\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Lengua</ion-label>\n          <ion-radio value=\"tongue\" id=\"ion-tongue\" name=\"tacos\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Sesos</ion-label>\n          <ion-radio value=\"brains\" id=\"ion-brains\" name=\"tacos\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Tripa</ion-label>\n          <ion-radio value=\"tripe\" id=\"ion-tripe\" name=\"tacos\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Pollo</ion-label>\n          <ion-radio value=\"chicken\" id=\"ion-chicken\" name=\"tacos\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h2>Ionic Segment</h2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-segment id=\"segment\" color=\"primary\" [(ngModel)]=\"radioValue\" [disabled]=\"disableInputs\">\n        <ion-segment-button value=\"beef\" id=\"ion-seg-beef\">Carne Asada</ion-segment-button>\n        <ion-segment-button value=\"tongue\" id=\"ion-seg-tongue\">Lengua</ion-segment-button>\n        <ion-segment-button value=\"brains\" id=\"ion-seg-brains\">Sesos</ion-segment-button>\n        <ion-segment-button value=\"tripe\" id=\"ion-seg-tripe\">Tripa</ion-segment-button>\n        <ion-segment-button value=\"chicken\" id=\"ion-seg-chicken\">Pollo</ion-segment-button>\n      </ion-segment>\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <h2>Select</h2>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <label for=\"stdSelect\">Standard Select (for tacos)</label>\n      <select id=\"stdSelect\" name=\"stdSelect\" [(ngModel)]=\"selectValue\" [disabled]=\"disableInputs\">\n        <option value=\"beef\">Carne Asada</option>\n        <option value=\"tongue\">Lengua</option>\n        <option value=\"brains\">Sesos</option>\n        <option value=\"tripe\">Tripa</option>\n        <option value=\"chicken\">Pollo</option>\n      </select>\n    </ion-col>\n    <ion-col>\n      Value:\n      <span id=\"selectOutput\">{{selectValue}}</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label>Ionic Select (for tacos)</ion-label>\n        <ion-select id=\"ionSelect\" name=\"ionSelect\" [(ngModel)]=\"selectValue\" [disabled]=\"disableInputs\">\n          <ion-select-option value=\"beef\">Carne Asada</ion-select-option>\n          <ion-select-option value=\"tongue\">Lengua</ion-select-option>\n          <ion-select-option value=\"brains\">Sesos</ion-select-option>\n          <ion-select-option value=\"tripe\">Tripa</ion-select-option>\n          <ion-select-option value=\"chicken\">Pollo</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n<a href='home'>Home</a>\n"

/***/ }),

/***/ "./src/app/group-inputs-page/group-inputs-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/group-inputs-page/group-inputs-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/group-inputs-page/group-inputs-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/group-inputs-page/group-inputs-page.component.ts ***!
  \******************************************************************/
/*! exports provided: GroupInputsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInputsPageComponent", function() { return GroupInputsPageComponent; });
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

var GroupInputsPageComponent = /** @class */ (function () {
    function GroupInputsPageComponent() {
        this.disableInputs = false;
        this.radioValue = 'tripe';
        this.selectValue = 'brains';
    }
    GroupInputsPageComponent.prototype.ngOnInit = function () { };
    GroupInputsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-group-inputs-page',
            template: __webpack_require__(/*! ./group-inputs-page.component.html */ "./src/app/group-inputs-page/group-inputs-page.component.html"),
            styles: [__webpack_require__(/*! ./group-inputs-page.component.scss */ "./src/app/group-inputs-page/group-inputs-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], GroupInputsPageComponent);
    return GroupInputsPageComponent;
}());



/***/ }),

/***/ "./src/app/group-inputs-page/group-inputs-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/group-inputs-page/group-inputs-page.module.ts ***!
  \***************************************************************/
/*! exports provided: GroupInputsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupInputsPageModule", function() { return GroupInputsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _group_inputs_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-inputs-page.component */ "./src/app/group-inputs-page/group-inputs-page.component.ts");
/* harmony import */ var _group_inputs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-inputs-page-routing.module */ "./src/app/group-inputs-page/group-inputs-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GroupInputsPageModule = /** @class */ (function () {
    function GroupInputsPageModule() {
    }
    GroupInputsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _group_inputs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupInputsPageRoutingModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_group_inputs_page_component__WEBPACK_IMPORTED_MODULE_4__["GroupInputsPageComponent"]]
        })
    ], GroupInputsPageModule);
    return GroupInputsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=group-inputs-page-group-inputs-page-module.js.map