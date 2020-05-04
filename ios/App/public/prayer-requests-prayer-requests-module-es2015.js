(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayer-requests-prayer-requests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"main-bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Prayer Requests\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

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







let PrayerRequestsPageModule = class PrayerRequestsPageModule {
};
PrayerRequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByYXllci1yZXF1ZXN0cy9wcmF5ZXItcmVxdWVzdHMucGFnZS5zY3NzIn0= */");

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


let PrayerRequestsPage = class PrayerRequestsPage {
    constructor() { }
    ngOnInit() {
    }
};
PrayerRequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prayer-requests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prayer-requests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prayer-requests.page.scss */ "./src/app/prayer-requests/prayer-requests.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrayerRequestsPage);



/***/ })

}]);
//# sourceMappingURL=prayer-requests-prayer-requests-module-es2015.js.map