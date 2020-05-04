(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcements-announcements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigation></app-navigation>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"heading\">\r\n    <app-icon-bar [icon]=\"'megaphone-outline'\" [title]=\"'Announcement'\"></app-icon-bar>\r\n    <ion-row class=\"fixed\">\r\n      <ion-col size=\"12\">\r\n        <ion-segment id=\"segment\" class=\"segment\" scrollable mode=\"md\" [value]=\"activeDate.date\" appAutoScroll (ionChange)=\"updateList($event)\">\r\n          <ion-segment-button *ngFor=\"let val of dates\" [value]=\"val.date\" id=\"{{val.active ? 'active': ''}}\">\r\n            <ion-label>{{ val.date }}</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-row class=\"empty-row animated fadeIn faster\" *ngIf=\"!listUpdate && announcements.length === 0\">\r\n    <ion-icon name=\"sad-outline\"></ion-icon>\r\n    <p style=\"text-align: center; padding-top: 5%\">No Announcements</p>\r\n  </ion-row>\r\n  <div style=\"margin-top: 40%;\">\r\n    <app-list-card-item [type]=\"'announcements'\" [items]=\"announcements\" [detailPage]=\"'announcement-details'\" (detailNavigate)=\"navigationToDetail($event)\"></app-list-card-item>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/announcements/announcements-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/announcements/announcements-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AnnouncementsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPageRoutingModule", function() { return AnnouncementsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./announcements.page */ "./src/app/announcements/announcements.page.ts");




const routes = [
    {
        path: '',
        component: _announcements_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsPage"]
    },
    {
        path: 'announcement-details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | announcement-details-announcement-details-module */ "announcement-details-announcement-details-module").then(__webpack_require__.bind(null, /*! ./announcement-details/announcement-details.module */ "./src/app/announcements/announcement-details/announcement-details.module.ts")).then(m => m.AnnouncementDetailsPageModule)
    }
];
let AnnouncementsPageRoutingModule = class AnnouncementsPageRoutingModule {
};
AnnouncementsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnnouncementsPageRoutingModule);



/***/ }),

/***/ "./src/app/announcements/announcements.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/announcements/announcements.module.ts ***!
  \*******************************************************/
/*! exports provided: AnnouncementsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPageModule", function() { return AnnouncementsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./announcements-routing.module */ "./src/app/announcements/announcements-routing.module.ts");
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./announcements.page */ "./src/app/announcements/announcements.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let AnnouncementsPageModule = class AnnouncementsPageModule {
};
AnnouncementsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_announcements_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsPage"]]
    })
], AnnouncementsPageModule);



/***/ }),

/***/ "./src/app/announcements/announcements.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/announcements/announcements.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".forward-icon {\n  color: #E02E2E !important;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\nimg {\n  border-radius: 15px !important;\n}\n\nion-input {\n  margin: 0px 5%;\n  border-bottom: 1px solid #3171e05c;\n}\n\n.segment {\n  scroll-behavior: smooth;\n}\n\nion-row.empty-row {\n  margin: 0% 10vh;\n  position: relative;\n  top: 45% !important;\n  color: #929292;\n}\n\nion-row.empty-row ion-icon {\n  width: 100%;\n  font-size: 3em;\n  color: #9292928c;\n}\n\nion-row.empty-row p {\n  text-align: center;\n  padding-top: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5ub3VuY2VtZW50cy9DOlxcVXNlcnNcXGR0YXRrXFxQcm9qZWN0c1xcZmFpdGgtbW9iaWxlL3NyY1xcYXBwXFxhbm5vdW5jZW1lbnRzXFxhbm5vdW5jZW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NSOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvYW5ub3VuY2VtZW50cy9hbm5vdW5jZW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3J3YXJkLWljb24ge1xyXG4gICAgY29sb3I6ICNFMDJFMkUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIG1hcmdpbjogMHB4IDUlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMTcxZTA1YztcclxufVxyXG5cclxuLnNlZ21lbnQge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbmlvbi1yb3cuZW1wdHktcm93IHtcclxuICAgIG1hcmdpbjogMCUgMTB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDUlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzkyOTI5MjtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgICAgY29sb3I6ICM5MjkyOTI4YztcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLmZvcndhcmQtaWNvbiB7XG4gIGNvbG9yOiAjRTAyRTJFICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luOiAwcHggNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzE3MWUwNWM7XG59XG5cbi5zZWdtZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmlvbi1yb3cuZW1wdHktcm93IHtcbiAgbWFyZ2luOiAwJSAxMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDUlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOTI5MjkyO1xufVxuaW9uLXJvdy5lbXB0eS1yb3cgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjOTI5MjkyOGM7XG59XG5pb24tcm93LmVtcHR5LXJvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/announcements/announcements.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/announcements/announcements.page.ts ***!
  \*****************************************************/
/*! exports provided: AnnouncementsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsPage", function() { return AnnouncementsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcement.service */ "./src/app/announcements/announcement.service.ts");
/* harmony import */ var _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/load-worker.service */ "./src/app/core/load-worker.service.ts");
/* harmony import */ var _core_utils_DateUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils/DateUtilities */ "./src/app/core/utils/DateUtilities.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let AnnouncementsPage = class AnnouncementsPage {
    constructor(announcementService, loadWorkService, navController) {
        this.announcementService = announcementService;
        this.loadWorkService = loadWorkService;
        this.navController = navController;
        this.dateUtils = new _core_utils_DateUtilities__WEBPACK_IMPORTED_MODULE_4__["DateUtils"]();
        this.announcements = [];
        this.listUpdate = false;
        this.limit = new Date().getFullYear() + 2;
        this.dates = [];
        this.activeDate = {};
    }
    ngOnInit() {
        this.dates = this.dateUtils.retrieveMonthAndYear(this.limit);
        this.activeDate = this.dates.find(x => x.active);
        this.announcementService.announcements$.subscribe(val => {
            this.announcements = val;
            this.listUpdate = false;
        });
        this.loadAnnouncements(this.splitDate(this.activeDate['date']).month, this.splitDate(this.activeDate['date']).year);
    }
    loadAnnouncements(month, year) {
        this.announcementService.fetchFilteredAnnouncements(month, year);
    }
    updateList(event) {
        let date = event.detail.value.split(' ');
        let month = date[0];
        let year = date[1];
        this.announcements = [];
        this.listUpdate = true;
        this.announcementService.fetchFilteredAnnouncements(month, year);
    }
    splitDate(date) {
        let newDate = date.split(' ');
        let month = newDate[0];
        let year = newDate[1];
        return { month: month, year: year };
    }
    navigationToDetail(val) {
        this.navController.navigateForward(val);
    }
};
AnnouncementsPage.ctorParameters = () => [
    { type: _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"] },
    { type: _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnSegment', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"])
], AnnouncementsPage.prototype, "btnSegment", void 0);
AnnouncementsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-announcements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./announcements.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./announcements.page.scss */ "./src/app/announcements/announcements.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"],
        _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], AnnouncementsPage);



/***/ }),

/***/ "./src/app/core/utils/DateUtilities.ts":
/*!*********************************************!*\
  !*** ./src/app/core/utils/DateUtilities.ts ***!
  \*********************************************/
/*! exports provided: DateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateUtils", function() { return DateUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DateUtils {
    constructor() {
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    }
    retrieveMonthAndYear(limit) {
        let data = [];
        let startingYear = new Date().getFullYear();
        while (startingYear <= limit) {
            for (let i = 0; i < this.monthNames.length; i++) {
                data.push({ date: `${this.monthNames[i]} ${startingYear}`, active: (i === new Date().getMonth() && startingYear === new Date().getFullYear()) });
            }
            startingYear++;
        }
        return data;
    }
}


/***/ })

}]);
//# sourceMappingURL=announcements-announcements-module-es2015.js.map