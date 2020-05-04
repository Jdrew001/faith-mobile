(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ministries-ministries-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"main-bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Ministries\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ministries/ministries-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ministries/ministries-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MinistriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistriesPageRoutingModule", function() { return MinistriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ministries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ministries.page */ "./src/app/ministries/ministries.page.ts");




const routes = [
    {
        path: '',
        component: _ministries_page__WEBPACK_IMPORTED_MODULE_3__["MinistriesPage"]
    }
];
let MinistriesPageRoutingModule = class MinistriesPageRoutingModule {
};
MinistriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MinistriesPageRoutingModule);



/***/ }),

/***/ "./src/app/ministries/ministries.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ministries/ministries.module.ts ***!
  \*************************************************/
/*! exports provided: MinistriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistriesPageModule", function() { return MinistriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ministries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ministries-routing.module */ "./src/app/ministries/ministries-routing.module.ts");
/* harmony import */ var _ministries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ministries.page */ "./src/app/ministries/ministries.page.ts");







let MinistriesPageModule = class MinistriesPageModule {
};
MinistriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ministries_routing_module__WEBPACK_IMPORTED_MODULE_5__["MinistriesPageRoutingModule"]
        ],
        declarations: [_ministries_page__WEBPACK_IMPORTED_MODULE_6__["MinistriesPage"]]
    })
], MinistriesPageModule);



/***/ }),

/***/ "./src/app/ministries/ministries.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ministries/ministries.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ministries/ministries.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ministries/ministries.page.ts ***!
  \***********************************************/
/*! exports provided: MinistriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinistriesPage", function() { return MinistriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinistriesPage = class MinistriesPage {
    constructor() { }
    ngOnInit() {
    }
};
MinistriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ministries',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ministries.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ministries.page.scss */ "./src/app/ministries/ministries.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MinistriesPage);



/***/ })

}]);
//# sourceMappingURL=ministries-ministries-module-es2015.js.map