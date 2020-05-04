(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-details-announcement-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <app-nav-detail [title]=\"'Announcement'\" (dismiss)=\"dismissDetail($event)\"></app-nav-detail>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"details\" class=\"col-md-12\" style=\"margin-top: 5vh\" class=\"animated fadeIn faster\">\n    <ion-row>\n      <img [src]=\"getImage(details.image.url)\" />\n    </ion-row>\n    <ion-row>\n      <ion-card class=\"container-card\">\n        <ion-card-content class=\"container-content\">\n          <h3>{{ details.title }}</h3>\n          <h4>{{ details.month }} {{ details.year }}</h4>\n\n          <hr>\n\n          <h4>{{ details.description }}</h4>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n  </div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  border-radius: 15px !important;\n  width: 90%;\n  margin: auto;\n}\n\nion-card {\n  width: 95%;\n  margin: auto !important;\n  position: relative;\n  bottom: 2em;\n  min-height: 35vh;\n}\n\nion-card.container-card {\n  position: relative;\n  background-color: #fbfbfb;\n}\n\nion-card.container-card ion-card-content.container-content {\n  height: 95%;\n}\n\nion-card.container-card h3 {\n  font-size: 18px;\n  text-align: center;\n  margin-top: 1.5vh;\n}\n\nion-card.container-card hr {\n  background-color: #E02E2E;\n  width: 8%;\n  display: block;\n  margin: auto;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\nion-card.container-card h4 {\n  text-align: center;\n  width: 85%;\n  display: block;\n  margin: auto;\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLWFwcGxpY2F0aW9ucy9mYWl0aC1tb2JpbGUvc3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudC1kZXRhaWxzL2Fubm91bmNlbWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnQtZGV0YWlscy9hbm5vdW5jZW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURHSTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudC1kZXRhaWxzL2Fubm91bmNlbWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY2FyZCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAyZW07XG4gICAgbWluLWhlaWdodDogMzV2aDtcbn1cblxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmYmZiZmI7XG5cbiAgICBpb24tY2FyZC1jb250ZW50LmNvbnRhaW5lci1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41dmg7XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTAyRTJFO1xuICAgICAgICB3aWR0aDogOCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDIlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICB9XG5cbiAgICBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICB9XG59IiwiaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1jYXJkIHtcbiAgd2lkdGg6IDk1JTtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAyZW07XG4gIG1pbi1oZWlnaHQ6IDM1dmg7XG59XG5cbmlvbi1jYXJkLmNvbnRhaW5lci1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaW9uLWNhcmQtY29udGVudC5jb250YWluZXItY29udGVudCB7XG4gIGhlaWdodDogOTUlO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMS41dmg7XG59XG5pb24tY2FyZC5jb250YWluZXItY2FyZCBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMDJFMkU7XG4gIHdpZHRoOiA4JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59Il19 */");

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
        return this.announcementService.getImage(this.details['image'].url);
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