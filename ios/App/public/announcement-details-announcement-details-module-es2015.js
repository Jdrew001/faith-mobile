(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-details-announcement-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-nav-detail [title]=\"'Announcement'\" (dismiss)=\"dismissDetail($event)\"></app-nav-detail>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-detail [details]=\"details\" [type]=\"'announcement'\"></app-detail>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/announcements/announcement-details/announcement-details-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/announcements/announcement-details/announcement-details-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AnnouncementDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPageRoutingModule", function() { return AnnouncementDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _announcement_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcement-details.page */ "./src/app/announcements/announcement-details/announcement-details.page.ts");




const routes = [
    {
        path: '',
        component: _announcement_details_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementDetailsPage"]
    }
];
let AnnouncementDetailsPageRoutingModule = class AnnouncementDetailsPageRoutingModule {
};
AnnouncementDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnnouncementDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/announcements/announcement-details/announcement-details.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/announcements/announcement-details/announcement-details.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AnnouncementDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPageModule", function() { return AnnouncementDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _announcement_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./announcement-details-routing.module */ "./src/app/announcements/announcement-details/announcement-details-routing.module.ts");
/* harmony import */ var _announcement_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcement-details.page */ "./src/app/announcements/announcement-details/announcement-details.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let AnnouncementDetailsPageModule = class AnnouncementDetailsPageModule {
};
AnnouncementDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _announcement_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementDetailsPageRoutingModule"]
        ],
        declarations: [_announcement_details_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementDetailsPage"]]
    })
], AnnouncementDetailsPageModule);



/***/ }),

/***/ "./src/app/announcements/announcement-details/announcement-details.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/announcements/announcement-details/announcement-details.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 15px !important;\n  width: 90%;\n  margin: auto;\n}\n\nion-card {\n  width: 95%;\n  margin: auto !important;\n  position: relative;\n  bottom: 2em;\n  min-height: 35vh;\n}\n\nion-card.container-card {\n  position: relative;\n  background-color: #fbfbfb;\n}\n\nion-card.container-card ion-card-content.container-content {\n  height: 95%;\n}\n\nion-card.container-card h3 {\n  font-size: 18px;\n  text-align: center;\n  margin-top: 1.5vh;\n}\n\nion-card.container-card hr {\n  background-color: #E02E2E;\n  width: 8%;\n  display: block;\n  margin: auto;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\nion-card.container-card h4 {\n  text-align: center;\n  width: 85%;\n  display: block;\n  margin: auto;\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnQtZGV0YWlscy9DOlxcVXNlcnNcXGR0YXRrXFxQcm9qZWN0c1xcZmFpdGgtbW9iaWxlL3NyY1xcYXBwXFxhbm5vdW5jZW1lbnRzXFxhbm5vdW5jZW1lbnQtZGV0YWlsc1xcYW5ub3VuY2VtZW50LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudC1kZXRhaWxzL2Fubm91bmNlbWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREdJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50LWRldGFpbHMvYW5ub3VuY2VtZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMmVtO1xyXG4gICAgbWluLWhlaWdodDogMzV2aDtcclxufVxyXG5cclxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmJmYmZiO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQuY29udGFpbmVyLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXZoO1xyXG4gICAgfVxyXG5cclxuICAgIGhyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTAyRTJFO1xyXG4gICAgICAgIHdpZHRoOiA4JTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgfVxyXG59IiwiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAyZW07XG4gIG1pbi1oZWlnaHQ6IDM1dmg7XG59XG5cbmlvbi1jYXJkLmNvbnRhaW5lci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaW9uLWNhcmQtY29udGVudC5jb250YWluZXItY29udGVudCB7XG4gIGhlaWdodDogOTUlO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS41dmg7XG59XG5pb24tY2FyZC5jb250YWluZXItY2FyZCBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDJFMkU7XG4gIHdpZHRoOiA4JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59Il19 */");

/***/ }),

/***/ "./src/app/announcements/announcement-details/announcement-details.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/announcements/announcement-details/announcement-details.page.ts ***!
  \*********************************************************************************/
/*! exports provided: AnnouncementDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPage", function() { return AnnouncementDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../announcement.service */ "./src/app/announcements/announcement.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AnnouncementDetailsPage = class AnnouncementDetailsPage {
    constructor(activatedRoute, announcementService) {
        this.activatedRoute = activatedRoute;
        this.announcementService = announcementService;
    }
    ngOnInit() {
        this.announcementService.fetchAnnouncement(this.activatedRoute.snapshot.paramMap.get('id'));
        this.announcementService.announcement$.subscribe(val => this.details = val);
    }
    getImage(imgUrl) {
        return this.announcementService.getImage(this.details['image']['url']);
    }
    dismissDetail(val) {
        this.details = null;
    }
};
AnnouncementDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"] }
];
AnnouncementDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-announcement-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcement-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcement-details.page.scss */ "./src/app/announcements/announcement-details/announcement-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]])
], AnnouncementDetailsPage);



/***/ })

}]);
//# sourceMappingURL=announcement-details-announcement-details-module-es2015.js.map