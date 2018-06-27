(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-inputs-page-basic-inputs-page-module"],{

/***/ "./src/app/basic-inputs-page/basic-inputs-page-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/basic-inputs-page/basic-inputs-page-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BasicInputsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInputsPageRoutingModule", function() { return BasicInputsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_inputs_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-inputs-page.component */ "./src/app/basic-inputs-page/basic-inputs-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _basic_inputs_page_component__WEBPACK_IMPORTED_MODULE_2__["BasicInputsPageComponent"] }
];
var BasicInputsPageRoutingModule = /** @class */ (function () {
    function BasicInputsPageRoutingModule() {
    }
    BasicInputsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BasicInputsPageRoutingModule);
    return BasicInputsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/basic-inputs-page/basic-inputs-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/basic-inputs-page/basic-inputs-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Basic Inputs</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-grid>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Disable Inputs</ion-label>\n            <ion-checkbox id=\"disableCheckbox\" name=\"disableCheckbox\" [(ngModel)]=\"disableInputs\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Text Input</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdTextInput\">Standard Input</label>\n          <input id=\"stdTextInput\" name=\"stdTextInput\" [(ngModel)]=\"textValue\" minlength=\"10\" [disabled]=\"disableInputs\" />\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"textOutput\">{{textValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Text Input</ion-label>\n            <ion-input id=\"ionTextInput\" name=\"ionTextInput\" [(ngModel)]=\"textValue\" minlength=\"10\" [disabled]=\"disableInputs\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Search Input</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Text Input</ion-label>\n            <ion-searchbar id=\"ionSearchInput\" name=\"ionSearchInput\" [(ngModel)]=\"searchValue\" minlength=\"10\" [disabled]=\"disableInputs\"></ion-searchbar>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"searchOutput\">{{searchValue}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Numeric Input</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Numeric Input</ion-label>\n            <ion-input type=\"number\" id=\"ionNumericInput\" name=\"ionNumericInput\" [(ngModel)]=\"numericValue\" [disabled]=\"disableInputs\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <div>\n            Value:\n            <span id=\"numericOutput\">{{numericValue}}</span>\n          </div>\n          <div>\n            Type:\n            <span id=\"numericOutputType\">{{typeOf(numericValue)}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Textarea Input</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdTextareaInput\">Standard Textarea Input</label>\n          <textarea id=\"stdTextareaInput\" name=\"stdTextareaInput\" [(ngModel)]=\"textareaValue\" minlength=\"10\" [disabled]=\"disableInputs\"></textarea>\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"textareaOutput\">{{textareaValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Textarea Input</ion-label>\n            <ion-textarea id=\"ionTextareaInput\" name=\"ionTextareaInput\" [(ngModel)]=\"textareaValue\" minlength=\"10\" [disabled]=\"disableInputs\"></ion-textarea>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Checkbox</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdCheckbox\">Standard Checkbox</label>\n          <input type=\"checkbox\" id=\"stdCheckbox\" name=\"stdCheckbox\" [(ngModel)]=\"checkboxValue\" [disabled]=\"disableInputs\" />\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"checkboxOutput\">{{checkboxValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Checkbox</ion-label>\n            <ion-checkbox id=\"ionCheckbox\" name=\"ionCheckbox\" [(ngModel)]=\"checkboxValue\" [disabled]=\"disableInputs\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Checkbox No ngModel</ion-label>\n            <ion-checkbox id=\"ionCheckboxNoModel\" name=\"ionCheckboxNoModel\" [checked]=\"checkboxValue\" (ionChange)=\"checkboxValue=$event.target.checked\"\n              [disabled]=\"disableInputs\"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Toggle</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdToggle\">Standard Toggle</label>\n          <input type=\"checkbox\" id=\"stdToggle\" name=\"stdToggle\" [(ngModel)]=\"toggleValue\" [disabled]=\"disableInputs\" />\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"toggleOutput\">{{toggleValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Toggle</ion-label>\n            <ion-toggle id=\"ionToggle\" name=\"ionToggle\" [(ngModel)]=\"toggleValue\" [disabled]=\"disableInputs\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Select</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdSelect\">Select</label>\n          <select id=\"stdSelect\" name=\"stdSelect\" [(ngModel)]=\"selectValue\" placeholder=\"YYYY-MM-DDTHH:mm:ssZ\" [disabled]=\"disableInputs\">\n            <option value=\"bacon\">Bacon</option>\n            <option value=\"pepperoni\">Pepperoni</option>\n            <option value=\"ham\" selected>Ham</option>\n            <option value=\"sausage\">Sausage</option>\n            <option value=\"pineapple\">Pineapple</option>\n          </select>\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"selectOutput\">{{selectValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Select</ion-label>\n            <ion-select id=\"ionSelectInput\" [(ngModel)]=\"selectValue\" [disabled]=\"disableInputs\">\n              <ion-select-option value=\"bacon\">Bacon</ion-select-option>\n              <ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\n              <ion-select-option value=\"ham\" selected>Ham</ion-select-option>\n              <ion-select-option value=\"sausage\">Sausage</ion-select-option>\n              <ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Date Time Picker</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdToggle\">ISO Formatted Date</label>\n          <input id=\"stdDatetimeInput\" name=\"stdDatetimeInput\" [(ngModel)]=\"datetimeValue\" placeholder=\"YYYY-MM-DDTHH:mm:ssZ\" [disabled]=\"disableInputs\"\n          />\n        </ion-col>\n        <ion-col>\n          Value:\n          <span id=\"datetimeOutput\">{{datetimeValue}}</span>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Ionic Date</ion-label>\n            <ion-datetime id=\"ionDatetimeInput\" pickerFormat=\"YYYY-MM-DD HH:mm:ss\" displayFormat=\"MM/DD/YYYY HH:mm:ss\" name=\"ionDatetimeInput\"\n              [(ngModel)]=\"datetimeValue\" [disabled]=\"disableInputs\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2>Range</h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <label for=\"stdRangeInput\">Range Value</label>\n          <input id=\"stdRangeInput\" type=\"number\" [(ngModel)]=\"rangeValue\"  [disabled]=\"disableInputs\" />\n        </ion-col>\n        <ion-col>\n          Value:\n          <span>{{rangeValue}}</span>\n          <span>{{typeOf(rangeValue)}}</span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-range id=\"ionRangeInput\" [(ngModel)]=\"rangeValue\" [disabled]=\"disableInputs\"></ion-range>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-content>\n\n  <ion-footer>\n    <ion-toolbar>\n      <a href='home'>Home</a>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/basic-inputs-page/basic-inputs-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/basic-inputs-page/basic-inputs-page.component.ts ***!
  \******************************************************************/
/*! exports provided: BasicInputsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInputsPageComponent", function() { return BasicInputsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicInputsPageComponent = /** @class */ (function () {
    function BasicInputsPageComponent() {
        this.disableInputs = false;
        this.datetimeValue = '2017-11-18T14:17:45-06:00';
        this.textareaValue = 'This is the Textarea Input';
        this.textValue = 'This is the Text Input';
        this.numericValue = 1138;
        this.selectValue = 'pineapple';
        this.checkboxValue = true;
        this.toggleValue = false;
        this.rangeValue = 15;
    }
    BasicInputsPageComponent.prototype.typeOf = function (v) {
        return typeof v;
    };
    BasicInputsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-inputs-page',
            template: __webpack_require__(/*! ./basic-inputs-page.component.html */ "./src/app/basic-inputs-page/basic-inputs-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        })
    ], BasicInputsPageComponent);
    return BasicInputsPageComponent;
}());



/***/ }),

/***/ "./src/app/basic-inputs-page/basic-inputs-page.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/basic-inputs-page/basic-inputs-page.module.ts ***!
  \***************************************************************/
/*! exports provided: BasicInputsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInputsPageModule", function() { return BasicInputsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _basic_inputs_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic-inputs-page.component */ "./src/app/basic-inputs-page/basic-inputs-page.component.ts");
/* harmony import */ var _basic_inputs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-inputs-page-routing.module */ "./src/app/basic-inputs-page/basic-inputs-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var BasicInputsPageModule = /** @class */ (function () {
    function BasicInputsPageModule() {
    }
    BasicInputsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _basic_inputs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasicInputsPageRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_basic_inputs_page_component__WEBPACK_IMPORTED_MODULE_4__["BasicInputsPageComponent"]]
        })
    ], BasicInputsPageModule);
    return BasicInputsPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=basic-inputs-page-basic-inputs-page-module.js.map