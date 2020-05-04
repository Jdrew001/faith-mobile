(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayer-requests-prayer-requests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigation></app-navigation>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"heading fixed\">\r\n    <app-icon-bar [icon]=\"'book-outline'\" [title]=\"'Prayer Request'\"></app-icon-bar>\r\n  </div>\r\n  <ion-card [formGroup]=\"formGroup\" class=\"top fixed animated fadeIn faster\">\r\n    <ion-row>\r\n      <h4 style=\"padding-left: 1em; font-size: 14px\">Your Details</h4>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item mode=\"md\">\r\n          <ion-label position=\"floating\">First Name</ion-label>\r\n          <ion-input formControlName=\"firstname\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item mode=\"md\">\r\n          <ion-label position=\"floating\">Last Name</ion-label>\r\n          <ion-input formControlName=\"lastname\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item mode=\"md\">\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input inputmode=\"email\" formControlName=\"email\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-item mode=\"md\">\r\n          <ion-label position=\"floating\">Phone</ion-label>\r\n          <ion-input inputmode=\"number\" formControlName=\"phone\" appPhoneMask></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item mode=\"md\">\r\n          <ion-label position=\"floating\">Notes</ion-label>\r\n          <ion-textarea formControlName=\"notes\" rows=\"6\"></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"reset()\"><ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon></ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"submit()\"><ion-icon slot=\"icon-only\" name=\"checkmark-outline\"></ion-icon></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/prayer-requests/prayer-request.form.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/prayer-requests/prayer-request.form.service.ts ***!
  \****************************************************************/
/*! exports provided: PrayerRequestFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerRequestFormService", function() { return PrayerRequestFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let PrayerRequestFormService = class PrayerRequestFormService {
    constructor() { }
    get firstnameVal() { return this.formGroup.get('firstname').value; }
    get lastnameVal() { return this.formGroup.get('lastname').value; }
    get emailVal() { return this.formGroup.get('email').value; }
    get phoneVal() { return this.formGroup.get('phone').value; }
    get notesval() { return this.formGroup.get('notes').value; }
    createPRForm() {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        return this.formGroup;
    }
};
PrayerRequestFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrayerRequestFormService);



/***/ }),

/***/ "./src/app/prayer-requests/prayer-requests-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/prayer-requests/prayer-requests-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PrayerRequestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerRequestsPageRoutingModule", function() { return PrayerRequestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _prayer_requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prayer-requests.page */ "./src/app/prayer-requests/prayer-requests.page.ts");




const routes = [
    {
        path: '',
        component: _prayer_requests_page__WEBPACK_IMPORTED_MODULE_3__["PrayerRequestsPage"]
    }
];
let PrayerRequestsPageRoutingModule = class PrayerRequestsPageRoutingModule {
};
PrayerRequestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrayerRequestsPageRoutingModule);



/***/ }),

/***/ "./src/app/prayer-requests/prayer-requests.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/prayer-requests/prayer-requests.module.ts ***!
  \***********************************************************/
/*! exports provided: PrayerRequestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerRequestsPageModule", function() { return PrayerRequestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _prayer_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prayer-requests-routing.module */ "./src/app/prayer-requests/prayer-requests-routing.module.ts");
/* harmony import */ var _prayer_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prayer-requests.page */ "./src/app/prayer-requests/prayer-requests.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let PrayerRequestsPageModule = class PrayerRequestsPageModule {
};
PrayerRequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _prayer_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrayerRequestsPageRoutingModule"]
        ],
        declarations: [_prayer_requests_page__WEBPACK_IMPORTED_MODULE_6__["PrayerRequestsPage"]]
    })
], PrayerRequestsPageModule);



/***/ }),

/***/ "./src/app/prayer-requests/prayer-requests.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/prayer-requests/prayer-requests.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card.top {\n  margin-top: 20% !important;\n}\n\nion-label {\n  font-size: 12px !important;\n}\n\nion-card ion-row {\n  padding: 5px 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJheWVyLXJlcXVlc3RzL0M6XFxVc2Vyc1xcZHRhdGtcXFByb2plY3RzXFxmYWl0aC1tb2JpbGUvc3JjXFxhcHBcXHByYXllci1yZXF1ZXN0c1xccHJheWVyLXJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJheWVyLXJlcXVlc3RzL3ByYXllci1yZXF1ZXN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcmF5ZXItcmVxdWVzdHMvcHJheWVyLXJlcXVlc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLnRvcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCBpb24tcm93IHtcclxuICAgIHBhZGRpbmc6IDVweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tY2FyZC50b3Age1xuICBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiA1cHggMTJweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/prayer-requests/prayer-requests.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/prayer-requests/prayer-requests.page.ts ***!
  \*********************************************************/
/*! exports provided: PrayerRequestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrayerRequestsPage", function() { return PrayerRequestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prayer-request.form.service */ "./src/app/prayer-requests/prayer-request.form.service.ts");
/* harmony import */ var _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/email.service */ "./src/app/core/services/email.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/loader/loader.service */ "./src/app/core/loader/loader.service.ts");






let PrayerRequestsPage = class PrayerRequestsPage {
    constructor(prayerRequestFormService, emailService, toastController, loaderService) {
        this.prayerRequestFormService = prayerRequestFormService;
        this.emailService = emailService;
        this.toastController = toastController;
        this.loaderService = loaderService;
    }
    ngOnInit() {
        this.formGroup = this.prayerRequestFormService.createPRForm();
    }
    submit() {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
            this.loaderService.toggleLoader(true);
            this.emailService.sendEmail(this.prayerRequestFormService.firstnameVal, this.prayerRequestFormService.lastnameVal, this.prayerRequestFormService.emailVal, this.prayerRequestFormService.phoneVal, this.prayerRequestFormService.notesval).then(res => {
                this.presentToast('Successfully submitted prayer request', 'success');
                this.loaderService.toggleLoader(false);
                this.formGroup.reset();
            }, err => this.presentToast('An error has occurred', 'danger'));
            return;
        }
        this.presentToast('Please fill in all fields', 'danger');
    }
    reset() {
        this.formGroup.reset();
    }
    presentToast(msg, type) {
        this.toastController.create({
            message: msg,
            duration: 2000,
            color: type
        }).then(val => val.present());
    }
};
PrayerRequestsPage.ctorParameters = () => [
    { type: _prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"] },
    { type: _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
];
PrayerRequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prayer-requests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html")).default,
        providers: [_prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prayer-requests.page.scss */ "./src/app/prayer-requests/prayer-requests.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"], _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
], PrayerRequestsPage);



/***/ })

}]);
//# sourceMappingURL=prayer-requests-prayer-requests-module-es2015.js.map