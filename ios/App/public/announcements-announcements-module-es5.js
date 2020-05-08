function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcements-announcements-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnnouncementsAnnouncementsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigation></app-navigation>\n</ion-header>\n<ion-content>\n  <div class=\"heading\">\n    <app-icon-bar [icon]=\"'megaphone-outline'\" [title]=\"'Announcement'\"></app-icon-bar>\n    <ion-row class=\"fixed\">\n      <ion-col size=\"12\">\n        <ion-segment id=\"segment\" class=\"segment\" scrollable mode=\"md\" [value]=\"activeDate.date\" appAutoScroll (ionChange)=\"updateList($event)\">\n          <ion-segment-button *ngFor=\"let val of dates\" [value]=\"val.date\" id=\"{{val.active ? 'active': ''}}\">\n            <ion-label>{{ val.date }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"empty-row animated fadeIn faster\" *ngIf=\"!listUpdate && announcements.length === 0\">\n    <ion-icon name=\"sad-outline\"></ion-icon>\n    <p style=\"text-align: center; padding-top: 5%\">No Announcements</p>\n  </ion-row>\n  <div style=\"margin-top: 40%;\">\n    <app-list-card-item [type]=\"'announcements'\" [items]=\"announcements\" [detailPage]=\"'announcement-details'\" (detailNavigate)=\"navigationToDetail($event)\"></app-list-card-item>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/announcements/announcements-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/announcements/announcements-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AnnouncementsPageRoutingModule */

  /***/
  function srcAppAnnouncementsAnnouncementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsPageRoutingModule", function () {
      return AnnouncementsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _announcements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./announcements.page */
    "./src/app/announcements/announcements.page.ts");

    var routes = [{
      path: '',
      component: _announcements_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsPage"]
    }, {
      path: 'announcement-details/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | announcement-details-announcement-details-module */
        "announcement-details-announcement-details-module").then(__webpack_require__.bind(null,
        /*! ./announcement-details/announcement-details.module */
        "./src/app/announcements/announcement-details/announcement-details.module.ts")).then(function (m) {
          return m.AnnouncementDetailsPageModule;
        });
      }
    }];

    var AnnouncementsPageRoutingModule = function AnnouncementsPageRoutingModule() {
      _classCallCheck(this, AnnouncementsPageRoutingModule);
    };

    AnnouncementsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AnnouncementsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/announcements/announcements.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/announcements/announcements.module.ts ***!
    \*******************************************************/

  /*! exports provided: AnnouncementsPageModule */

  /***/
  function srcAppAnnouncementsAnnouncementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsPageModule", function () {
      return AnnouncementsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./announcements-routing.module */
    "./src/app/announcements/announcements-routing.module.ts");
    /* harmony import */


    var _announcements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./announcements.page */
    "./src/app/announcements/announcements.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AnnouncementsPageModule = function AnnouncementsPageModule() {
      _classCallCheck(this, AnnouncementsPageModule);
    };

    AnnouncementsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _announcements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_announcements_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementsPage"]]
    })], AnnouncementsPageModule);
    /***/
  },

  /***/
  "./src/app/announcements/announcements.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/announcements/announcements.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnnouncementsAnnouncementsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forward-icon {\n  color: #E02E2E !important;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\nimg {\n  border-radius: 15px !important;\n}\n\nion-input {\n  margin: 0px 5%;\n  border-bottom: 1px solid #3171e05c;\n}\n\n.segment {\n  scroll-behavior: smooth;\n}\n\nion-row.empty-row {\n  margin: 0% 10vh;\n  position: relative;\n  top: 45% !important;\n  color: #929292;\n}\n\nion-row.empty-row ion-icon {\n  width: 100%;\n  font-size: 3em;\n  color: #9292928c;\n}\n\nion-row.empty-row p {\n  text-align: center;\n  padding-top: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9yd2FyZC1pY29uIHtcbiAgICBjb2xvcjogI0UwMkUyRSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBtYXJnaW46IDBweCA1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxNzFlMDVjO1xufVxuXG4uc2VnbWVudCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmlvbi1yb3cuZW1wdHktcm93IHtcbiAgICBtYXJnaW46IDAlIDEwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDUlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM5MjkyOTI7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgY29sb3I6ICM5MjkyOTI4YztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCIuZm9yd2FyZC1pY29uIHtcbiAgY29sb3I6ICNFMDJFMkUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW46IDBweCA1JTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMTcxZTA1Yztcbn1cblxuLnNlZ21lbnQge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaW9uLXJvdy5lbXB0eS1yb3cge1xuICBtYXJnaW46IDAlIDEwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0NSUgIWltcG9ydGFudDtcbiAgY29sb3I6ICM5MjkyOTI7XG59XG5pb24tcm93LmVtcHR5LXJvdyBpb24taWNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDNlbTtcbiAgY29sb3I6ICM5MjkyOTI4Yztcbn1cbmlvbi1yb3cuZW1wdHktcm93IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/announcements/announcements.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/announcements/announcements.page.ts ***!
    \*****************************************************/

  /*! exports provided: AnnouncementsPage */

  /***/
  function srcAppAnnouncementsAnnouncementsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsPage", function () {
      return AnnouncementsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./announcement.service */
    "./src/app/announcements/announcement.service.ts");
    /* harmony import */


    var _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/load-worker.service */
    "./src/app/core/load-worker.service.ts");
    /* harmony import */


    var _core_utils_DateUtilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/utils/DateUtilities */
    "./src/app/core/utils/DateUtilities.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var AnnouncementsPage = /*#__PURE__*/function () {
      function AnnouncementsPage(announcementService, loadWorkService, navController) {
        _classCallCheck(this, AnnouncementsPage);

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

      _createClass(AnnouncementsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dates = this.dateUtils.retrieveMonthAndYear(this.limit);
          this.activeDate = this.dates.find(function (x) {
            return x.active;
          });
          this.announcementService.announcements$.subscribe(function (val) {
            _this.announcements = val;
            _this.listUpdate = false;
          });
          this.loadAnnouncements(this.splitDate(this.activeDate['date']).month, this.splitDate(this.activeDate['date']).year);
        }
      }, {
        key: "loadAnnouncements",
        value: function loadAnnouncements(month, year) {
          this.announcementService.fetchFilteredAnnouncements(month, year);
        }
      }, {
        key: "updateList",
        value: function updateList(event) {
          var date = event.detail.value.split(' ');
          var month = date[0];
          var year = date[1];
          this.announcements = [];
          this.listUpdate = true;
          this.announcementService.fetchFilteredAnnouncements(month, year);
        }
      }, {
        key: "splitDate",
        value: function splitDate(date) {
          var newDate = date.split(' ');
          var month = newDate[0];
          var year = newDate[1];
          return {
            month: month,
            year: year
          };
        }
      }, {
        key: "navigationToDetail",
        value: function navigationToDetail(val) {
          this.navController.navigateForward(val);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log('on destroy');
          this.announcementService.announcement$.next(null);
        }
      }]);

      return AnnouncementsPage;
    }();

    AnnouncementsPage.ctorParameters = function () {
      return [{
        type: _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
      }, {
        type: _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnSegment', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSegment"])], AnnouncementsPage.prototype, "btnSegment", void 0);
    AnnouncementsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-announcements',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./announcements.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcements.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./announcements.page.scss */
      "./src/app/announcements/announcements.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"], _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], AnnouncementsPage);
    /***/
  },

  /***/
  "./src/app/core/utils/DateUtilities.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/utils/DateUtilities.ts ***!
    \*********************************************/

  /*! exports provided: DateUtils */

  /***/
  function srcAppCoreUtilsDateUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateUtils", function () {
      return DateUtils;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DateUtils = /*#__PURE__*/function () {
      function DateUtils() {
        _classCallCheck(this, DateUtils);

        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
      }

      _createClass(DateUtils, [{
        key: "retrieveMonthAndYear",
        value: function retrieveMonthAndYear(limit) {
          var data = [];
          var startingYear = new Date().getFullYear();

          while (startingYear <= limit) {
            for (var i = 0; i < this.monthNames.length; i++) {
              data.push({
                date: "".concat(this.monthNames[i], " ").concat(startingYear),
                active: i === new Date().getMonth() && startingYear === new Date().getFullYear()
              });
            }

            startingYear++;
          }

          return data;
        }
      }]);

      return DateUtils;
    }();
    /***/

  }
}]);
//# sourceMappingURL=announcements-announcements-module-es5.js.map