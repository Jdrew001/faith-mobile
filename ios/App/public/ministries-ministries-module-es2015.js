(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ministries-ministries-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigation></app-navigation>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"heading fixed\">\r\n    <app-icon-bar [icon]=\"'people-outline'\" [title]=\"'Ministries'\"></app-icon-bar>\r\n  </div>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height: 100%\">\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"youth-container\">\r\n          <div class=\"mask\">\r\n            <h4>Faith Youth</h4>\r\n            <p>Youth class starts every Sunday at 10::00 am. Every Friday night, there is a youth event for students ages 12-17.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"kids-container\">\r\n          <div class=\"mask\">\r\n            <h4>Faith Kids</h4>\r\n            <p>Kid classes start every Sunday at 10:00 a.m. This is a specially tailored classroom and lesson just for them! Every Wednesday, there is a class for kids ages 3-10 after worship.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"ladies-container\">\r\n          <div class=\"mask\">\r\n            <h4>Ladies</h4>\r\n            <p>It is important to get to know and receive encouragement from other women who love God. Ladies socials and studies are offered on Faith Fellowship nights.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"mens-container\">\r\n          <div class=\"mask\">\r\n            <h4>Mens</h4>\r\n            <p>Relax and spend time having fun with other christ-centered men.\r\n            Mens socials and studies are offered on Faith Fellowship nights.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"marrieds-container\">\r\n          <div class=\"mask\">\r\n            <h4>Marrieds</h4>\r\n            <p>Strong marriages that are connected to God are important.\r\n              Married socials and studies are offered on Faith Fellowship nights.\r\n              If you and your partner are interested in marital or premarital counseling,\r\n              please contact pastor for a session.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <div class=\"ministry-container\">\r\n        <div class=\"bible-container\">\r\n          <div class=\"mask\">\r\n            <h4>Bible Study</h4>\r\n            <p>As fellow learners, we want to join you in delving into the Word.\r\n              We offer free Bible studies that are tailored to you and your spiritual journey. Ask anyone on our ministry team to help you schedule a Bible study.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n");

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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let MinistriesPageModule = class MinistriesPageModule {
};
MinistriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ministries_routing_module__WEBPACK_IMPORTED_MODULE_5__["MinistriesPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
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
/* harmony default export */ __webpack_exports__["default"] = (".ministry-container {\n  height: 100%;\n  color: white;\n  text-align: center;\n  overflow-y: hidden;\n}\n\n.mask {\n  background-color: rgba(96, 125, 139, 0.7);\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.youth-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('faith-youth.jpg');\n  overflow-y: hidden;\n}\n\n.kids-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('kids.jpg');\n  overflow-y: hidden;\n}\n\n.ladies-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('flowers.jpg');\n  overflow-y: hidden;\n}\n\n.mens-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('mens.jpg');\n  overflow-y: hidden;\n}\n\n.marrieds-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('marrieds.jpg');\n  overflow-y: hidden;\n}\n\n.bible-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('bible.jpg');\n  overflow-y: hidden;\n}\n\nh4 {\n  color: white !important;\n  padding-top: 45%;\n  font-size: 2em;\n  vertical-align: middle;\n}\n\np {\n  padding: 10px 10px !important;\n  font-size: 0.8em !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaXN0cmllcy9DOlxcVXNlcnNcXGR0YXRrXFxQcm9qZWN0c1xcZmFpdGgtbW9iaWxlL3NyY1xcYXBwXFxtaW5pc3RyaWVzXFxtaW5pc3RyaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWluaXN0cmllcy9taW5pc3RyaWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbWluaXN0cmllcy9taW5pc3RyaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW5pc3RyeS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFzayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LDEyNSwxMzksLjcpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ueW91dGgtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9mYWl0aC15b3V0aC5qcGcnKTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmtpZHMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9raWRzLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubGFkaWVzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxvd2Vycy5qcGcnKTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1lbnMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW5zLmpwZycpO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4ubWFycmllZHMtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJyaWVkcy5qcGcnKTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmJpYmxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmlibGUuanBnJyk7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1JTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59IiwiLm1pbmlzdHJ5LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1hc2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LCAxMjUsIDEzOSwgMC43KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi55b3V0aC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFpdGgteW91dGguanBnXCIpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5raWRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9raWRzLmpwZ1wiKTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubGFkaWVzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9mbG93ZXJzLmpwZ1wiKTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubWVucy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVucy5qcGdcIik7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1hcnJpZWRzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXJyaWVkcy5qcGdcIik7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmJpYmxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9iaWJsZS5qcGdcIik7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuaDQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDQ1JTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbnAge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */");

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
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
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