(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-sample-page-form-sample-page-module"],{

/***/ "./src/app/form-sample-page/form-sample-page-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/form-sample-page/form-sample-page-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormSamplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSamplePageRoutingModule", function() { return FormSamplePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_sample_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-sample-page.component */ "./src/app/form-sample-page/form-sample-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _form_sample_page_component__WEBPACK_IMPORTED_MODULE_2__["FormSamplePageComponent"] }
];
var FormSamplePageRoutingModule = /** @class */ (function () {
    function FormSamplePageRoutingModule() {
    }
    FormSamplePageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormSamplePageRoutingModule);
    return FormSamplePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/form-sample-page/form-sample-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/form-sample-page/form-sample-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <form #myForm=\"ngForm\" class=\"ion-page\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Sample Form</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content padding>\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"floating\">First Name</ion-label>\n          <ion-input name=\"firstName\" #viewFirstName=\"ngModel\" [(ngModel)]=\"firstName\" required minlength=\"2\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"viewFirstName.invalid && (viewFirstName.dirty || viewFirstName.touched)\" color=\"danger\">\n          <small *ngIf=\"viewFirstName.errors['required']\">First Name is required</small>\n          <small *ngIf=\"viewFirstName.errors['minlength']\">First Name must be at least 2 characters long</small>\n        </ion-text>\n        <ion-item>\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input name=\"lastName\" #viewLastName=\"ngModel\" [(ngModel)]=\"lastName\" required minlength=\"4\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"viewLastName.invalid && (viewLastName.dirty || viewLastName.touched)\" color=\"danger\">\n          <small *ngIf=\"viewLastName.errors['required']\">Last Name is required</small>\n          <small *ngIf=\"viewLastName.errors['minlength']\">Last Name must be at least 4 characters long</small>\n        </ion-text>\n        <ion-item>\n          <ion-label>Desired Job Title</ion-label>\n          <ion-select name=\"jobTitle\" [(ngModel)]=\"jobTitle\" #viewJobTitle=\"ngModel\" required>\n            <ion-select-option value=\"manager\">Cat Herder</ion-select-option>\n            <ion-select-option value=\"captain\">Nerf Herder (Scruffy)</ion-select-option>\n            <ion-select-option value=\"engineer\">Cat</ion-select-option>\n            <ion-select-option value=\"tester\">Trier of Things</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-text *ngIf=\"viewJobTitle.invalid && (viewJobTitle.dirty || viewJobTitle.touched)\" color=\"danger\">\n          <small *ngIf=\"viewJobTitle.errors['required']\">Job Title is required</small>\n        </ion-text>\n        <ion-item-divider>\n          <ion-label>I Would Like To:</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-label>Drink the Beers</ion-label>\n          <ion-toggle name=\"drinkBeers\" color=\"dark\" [(ngModel)]=\"drinkBeers\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Drink the Teas</ion-label>\n          <ion-toggle name=\"drinkTeas\" color=\"secondary\" [(ngModel)]=\"drinkTeas\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Make the Coffees</ion-label>\n          <ion-toggle name=\"makeCoffee\" color=\"primary\" [(ngModel)]=\"makeCoffee\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Feed the Engineers</ion-label>\n          <ion-toggle name=\"feedEngineers\" color=\"danger\" [(ngModel)]=\"feedEngineers\"></ion-toggle>\n        </ion-item>\n          <ion-item>\n          <ion-label position=\"floating\">Short Self Description</ion-label>\n          <ion-textarea name=\"selfDescription\" #viewSelfDescription=\"ngModel\" [(ngModel)]=\"selfDescription\" required minlength=\"25\"></ion-textarea>\n        </ion-item>\n        <ion-text *ngIf=\"viewSelfDescription.invalid && (viewSelfDescription.dirty || viewSelfDescription.touched)\" color=\"danger\">\n          <small *ngIf=\"viewSelfDescription.errors['required']\">Self Description is required</small>\n          <small *ngIf=\"viewSelfDescription.errors['minlength']\">Please tell us more</small>\n        </ion-text>\n        <ion-item>\n          <ion-label position=\"floating\">Desired Salary</ion-label>\n          <ion-input name=\"desiredSalary\" #viewSalary=\"ngModel\" type=\"number\" required [(ngModel)]=\"desiredSalary\"></ion-input>\n        </ion-item>\n        <ion-text *ngIf=\"viewSalary.invalid && (viewSalary.dirty || viewSalary.touched)\" color=\"danger\">\n          <small *ngIf=\"viewSalary.errors['required']\">Desired Salary is required</small>\n        </ion-text>\n        <ion-item-divider>\n          <ion-label>My Level of Happy</ion-label>\n        </ion-item-divider>\n        <ion-item>\n          <ion-range name=\"levelOfHappy\" [(ngModel)]=\"levelOfHappy\">\n            <ion-icon name=\"sad\" slot=\"start\"></ion-icon>\n            <ion-icon name=\"happy\" slot=\"end\"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n    <ion-footer>\n      <ion-button expand=\"block\" [disabled]=\"myForm.invalid\" (click)=\"save(myForm.value)\">\n        <ion-icon name=\"save\" slot=\"start\"></ion-icon>Looks Good to Me</ion-button>\n    </ion-footer>\n  </form>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/form-sample-page/form-sample-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/form-sample-page/form-sample-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/form-sample-page/form-sample-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/form-sample-page/form-sample-page.component.ts ***!
  \****************************************************************/
/*! exports provided: FormSamplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSamplePageComponent", function() { return FormSamplePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_test_post_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-test/post-test.service */ "./src/app/post-test/post-test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormSamplePageComponent = /** @class */ (function () {
    function FormSamplePageComponent(postman, router) {
        this.postman = postman;
        this.router = router;
    }
    FormSamplePageComponent.prototype.ngOnInit = function () { };
    FormSamplePageComponent.prototype.save = function (data) {
        this.postman.post(data).subscribe(function (res) { return console.log(res); });
        this.router.navigate(['home']);
    };
    FormSamplePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-sample-page',
            template: __webpack_require__(/*! ./form-sample-page.component.html */ "./src/app/form-sample-page/form-sample-page.component.html"),
            styles: [__webpack_require__(/*! ./form-sample-page.component.scss */ "./src/app/form-sample-page/form-sample-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_post_test_post_test_service__WEBPACK_IMPORTED_MODULE_2__["PostTestService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FormSamplePageComponent);
    return FormSamplePageComponent;
}());



/***/ }),

/***/ "./src/app/form-sample-page/form-sample-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/form-sample-page/form-sample-page.module.ts ***!
  \*************************************************************/
/*! exports provided: FormSamplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSamplePageModule", function() { return FormSamplePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _form_sample_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-sample-page.component */ "./src/app/form-sample-page/form-sample-page.component.ts");
/* harmony import */ var _form_sample_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-sample-page-routing.module */ "./src/app/form-sample-page/form-sample-page-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormSamplePageModule = /** @class */ (function () {
    function FormSamplePageModule() {
    }
    FormSamplePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _form_sample_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormSamplePageRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [_form_sample_page_component__WEBPACK_IMPORTED_MODULE_4__["FormSamplePageComponent"]]
        })
    ], FormSamplePageModule);
    return FormSamplePageModule;
}());



/***/ }),

/***/ "./src/app/post-test/post-test.service.ts":
/*!************************************************!*\
  !*** ./src/app/post-test/post-test.service.ts ***!
  \************************************************/
/*! exports provided: PostTestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTestService", function() { return PostTestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostTestService = /** @class */ (function () {
    function PostTestService(http) {
        this.http = http;
    }
    PostTestService.prototype.post = function (data) {
        return this.http.post('http://localhost:5000/test', data);
    };
    PostTestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostTestService);
    return PostTestService;
}());



/***/ })

}]);
//# sourceMappingURL=form-sample-page-form-sample-page-module.js.map