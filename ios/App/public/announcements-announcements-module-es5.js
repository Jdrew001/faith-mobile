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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <app-navigation></app-navigation>\n</ion-header>\n<ion-content>\n  <div class=\"heading\">\n    <app-icon-bar [icon]=\"'megaphone-outline'\" [title]=\"'Announcement'\"></app-icon-bar>\n    <ion-row class=\"fixed\">\n      <ion-col size=\"12\">\n        <ion-segment id=\"segment\" class=\"segment\" scrollable mode=\"md\" [value]=\"activeDate.date\" appAutoScroll (ionChange)=\"updateList($event)\">\n          <ion-segment-button *ngFor=\"let val of dates\" [value]=\"val.date\" id=\"{{val.active ? 'active': ''}}\">\n            <ion-label>{{ val.date }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"empty-row animated fadeIn faster\" *ngIf=\"!listUpdate && announcements.length === 0\">\n    <ion-icon name=\"sad-outline\"></ion-icon>\n    <p style=\"text-align: center; padding-top: 5%\">No Announcements</p>\n  </ion-row>\n  <div style=\"margin-top: 40%;\">\n    <ng-container *ngIf=\"announcements.length !== 0\">\n      <ion-row *ngFor=\"let item of announcements; let i = index;\">\n        <ion-card class=\"animated fadeInUp faster ion-activatable ripple-parent\" [routerLink]=\"'announcement-details/' + item._id\" [ngStyle]=\"{'animation-delay': (i * (110 + (i / 100))) + 'ms'}\" *ngIf=\"item.isActive\">\n          <ion-card-content>\n            <ion-row>\n              <ion-col [size]=\"5\">\n                <img [src]=\"getImage(item.image.url)\" onerror=\"this.src='./app/assets/images/placeholder.jpg';\" />\n              </ion-col>\n              <ion-col [size]=\"7\">\n                <h4>{{ item.title }}</h4>\n                <p class=\"truncate-overflow\" *ngIf=\"toShortDescription(item.description).isTrimmed\">{{ toShortDescription(item.description).description }}...</p>\n                <p class=\"truncate-overflow\" *ngIf=\"!toShortDescription(item.description).isTrimmed\">{{ toShortDescription(item.description).description }}</p>\n              </ion-col>\n            </ion-row>\n            <ion-icon class=\"forward-icon\" ios=\"arrow-forward-outline\" md=\"arrow-forward-sharp\"></ion-icon>\n          </ion-card-content>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-card>\n      </ion-row>\n    </ng-container>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/icon-bar/icon-bar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/icon-bar/icon-bar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedIconBarIconBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row>\n  <ion-col [size]=\"12\">\n    <ul>\n      <li><p class=\"left\"><ion-icon [name]=\"icon\"></ion-icon></p></li>\n      <li><p class=\"right\">{{ title }}</p></li>\n    </ul>\n  </ion-col>\n</ion-row>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav-detail/nav-detail.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav-detail/nav-detail.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavDetailNavDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"primary\" class=\"main-bg-color\">\n  <ion-buttons slot=\"start\" style=\"position: absolute;\">\n    <ion-back-button (click)=\"dismissPage()\"></ion-back-button>\n  </ion-buttons>\n  <ion-title class=\"ion-text-center\">\n    Announcement\n  </ion-title>\n</ion-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/navigation.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/navigation.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-toolbar color=\"primary\" class=\"main-bg-color\">\n  <ion-buttons slot=\"start\">\n    <ion-menu-button></ion-menu-button>\n  </ion-buttons>\n  <img src=\"../../../assets/faith_tab_logo_white.png\" />\n</ion-toolbar>";
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


    __webpack_exports__["default"] = "div.heading {\n  position: fixed;\n  width: 100vw;\n  z-index: 99999;\n  background: white;\n  box-shadow: rgba(145, 104, 104, 0.12) 0px 2px;\n}\n\n.forward-icon {\n  color: #E02E2E !important;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\nimg {\n  border-radius: 15px !important;\n}\n\nion-input {\n  margin: 0px 5%;\n  border-bottom: 1px solid #3171e05c;\n}\n\n.segment {\n  scroll-behavior: smooth;\n}\n\nion-row.empty-row {\n  margin: 0% 10vh;\n  position: relative;\n  top: 45% !important;\n  color: #929292;\n}\n\nion-row.empty-row ion-icon {\n  width: 100%;\n  font-size: 3em;\n  color: #9292928c;\n}\n\nion-row.empty-row p {\n  text-align: center;\n  padding-top: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLWFwcGxpY2F0aW9ucy9mYWl0aC1tb2JpbGUvc3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmhlYWRpbmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogcmdiYSgxNDUsIDEwNCwgMTA0LCAwLjEyKSAwcHggMnB4O1xufVxuXG4uZm9yd2FyZC1pY29uIHtcbiAgICBjb2xvcjogI0UwMkUyRSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG5pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBtYXJnaW46IDBweCA1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxNzFlMDVjO1xufVxuXG4uc2VnbWVudCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmlvbi1yb3cuZW1wdHktcm93IHtcbiAgICBtYXJnaW46IDAlIDEwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNDUlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICM5MjkyOTI7XG5cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgY29sb3I6ICM5MjkyOTI4YztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCJkaXYuaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ1LCAxMDQsIDEwNCwgMC4xMikgMHB4IDJweDtcbn1cblxuLmZvcndhcmQtaWNvbiB7XG4gIGNvbG9yOiAjRTAyRTJFICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luOiAwcHggNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzE3MWUwNWM7XG59XG5cbi5zZWdtZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmlvbi1yb3cuZW1wdHktcm93IHtcbiAgbWFyZ2luOiAwJSAxMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDUlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOTI5MjkyO1xufVxuaW9uLXJvdy5lbXB0eS1yb3cgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjOTI5MjkyOGM7XG59XG5pb24tcm93LmVtcHR5LXJvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
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
      function AnnouncementsPage(announcementService, loadWorkService) {
        _classCallCheck(this, AnnouncementsPage);

        this.announcementService = announcementService;
        this.loadWorkService = loadWorkService;
        this.dateUtils = new _core_utils_DateUtilities__WEBPACK_IMPORTED_MODULE_4__["DateUtils"]();
        this.announcements = [];
        this.listUpdate = false;
        this.limit = new Date().getFullYear() + 2;
        this.dates = [];
        this.activeDate = '';
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
        key: "getImage",
        value: function getImage(imgUrl) {
          return this.announcementService.getImage(imgUrl);
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
        key: "toShortDescription",
        value: function toShortDescription(description) {
          var maxLength = 50;

          if (description.length > maxLength) {
            var trimmed = description.substr(0, maxLength);
            return {
              isTrimmed: true,
              description: trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))
            };
          }

          return {
            isTrimmed: false,
            description: description
          };
        }
      }]);

      return AnnouncementsPage;
    }();

    AnnouncementsPage.ctorParameters = function () {
      return [{
        type: _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
      }, {
        type: _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"], _core_load_worker_service__WEBPACK_IMPORTED_MODULE_3__["LoadWorkerService"]])], AnnouncementsPage);
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

  },

  /***/
  "./src/app/shared/auto-scroll.directive.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/auto-scroll.directive.ts ***!
    \*************************************************/

  /*! exports provided: AutoScrollDirective */

  /***/
  function srcAppSharedAutoScrollDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoScrollDirective", function () {
      return AutoScrollDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AutoScrollDirective = /*#__PURE__*/function () {
      function AutoScrollDirective(el) {
        _classCallCheck(this, AutoScrollDirective);

        this.el = el;
      }

      _createClass(AutoScrollDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.el) {
            var item = document.getElementById('active');
            var segment = document.getElementById('segment');
            setTimeout(function () {
              var location = item.getBoundingClientRect();
              segment.scrollLeft = location.left - 7;
            }, 700);
          }
        }
      }]);

      return AutoScrollDirective;
    }();

    AutoScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    AutoScrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appAutoScroll]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AutoScrollDirective);
    /***/
  },

  /***/
  "./src/app/shared/icon-bar/icon-bar.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/icon-bar/icon-bar.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedIconBarIconBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  width: 100vw;\n  list-style-type: none;\n  padding: 0px !important;\n  text-align: center;\n  margin-bottom: 0px !important;\n}\n\nli {\n  display: inline-block;\n}\n\np {\n  margin: 0px !important;\n}\n\np.right {\n  font-size: 15px;\n  color: #E02E2E;\n  position: relative;\n  bottom: 10px;\n}\n\nion-icon {\n  font-size: 4vh;\n  color: #E02E2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLWFwcGxpY2F0aW9ucy9mYWl0aC1tb2JpbGUvc3JjL2FwcC9zaGFyZWQvaWNvbi1iYXIvaWNvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9pY29uLWJhci9pY29uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pY29uLWJhci9pY29uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxubGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxucC5yaWdodCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjRTAyRTJFO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDEwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDR2aDtcbiAgICBjb2xvcjogI0UwMkUyRTtcbn0iLCJ1bCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxubGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnAge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG5wLnJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0UwMkUyRTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGNvbG9yOiAjRTAyRTJFO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/icon-bar/icon-bar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/icon-bar/icon-bar.component.ts ***!
    \*******************************************************/

  /*! exports provided: IconBarComponent */

  /***/
  function srcAppSharedIconBarIconBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconBarComponent", function () {
      return IconBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IconBarComponent = /*#__PURE__*/function () {
      function IconBarComponent() {
        _classCallCheck(this, IconBarComponent);
      }

      _createClass(IconBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('icon'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IconBarComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IconBarComponent.prototype, "title", void 0);
    IconBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icon-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./icon-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/icon-bar/icon-bar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./icon-bar.component.scss */
      "./src/app/shared/icon-bar/icon-bar.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IconBarComponent);
    /***/
  },

  /***/
  "./src/app/shared/nav-detail/nav-detail.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shared/nav-detail/nav-detail.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavDetailNavDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYtZGV0YWlsL25hdi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/nav-detail/nav-detail.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/nav-detail/nav-detail.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavDetailComponent */

  /***/
  function srcAppSharedNavDetailNavDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavDetailComponent", function () {
      return NavDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavDetailComponent = /*#__PURE__*/function () {
      function NavDetailComponent() {
        _classCallCheck(this, NavDetailComponent);

        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(NavDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissPage",
        value: function dismissPage() {
          this.dismiss.emit(true);
        }
      }]);

      return NavDetailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NavDetailComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('dismiss'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], NavDetailComponent.prototype, "dismiss", void 0);
    NavDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/nav-detail/nav-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-detail.component.scss */
      "./src/app/shared/nav-detail/nav-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavDetailComponent);
    /***/
  },

  /***/
  "./src/app/shared/navigation/navigation.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shared/navigation/navigation.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-buttons {\n  position: absolute !important;\n  top: 0px !important;\n  height: 100% !important;\n}\nion-buttons ion-menu-button {\n  font-size: 3em;\n  height: 100%;\n}\nimg {\n  width: 50%;\n  display: block;\n  margin: auto;\n  padding: 5px 0px;\n  width: calc(100% - 60vw);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLWFwcGxpY2F0aW9ucy9mYWl0aC1tb2JpbGUvc3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FDQ1I7QURHQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcblxuICAgIGlvbi1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG5pbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwdncpO1xufSIsImlvbi1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuaW9uLWJ1dHRvbnMgaW9uLW1lbnUtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwdncpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/navigation/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/navigation/navigation.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppSharedNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.imgUrl = '../../../assets/faith_tab_logo_white.png';
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navigation/navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/shared/navigation/navigation.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navigation/navigation.component */
    "./src/app/shared/navigation/navigation.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./icon-bar/icon-bar.component */
    "./src/app/shared/icon-bar/icon-bar.component.ts");
    /* harmony import */


    var _auto_scroll_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auto-scroll.directive */
    "./src/app/shared/auto-scroll.directive.ts");
    /* harmony import */


    var _nav_detail_nav_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nav-detail/nav-detail.component */
    "./src/app/shared/nav-detail/nav-detail.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_5__["IconBarComponent"], _auto_scroll_directive__WEBPACK_IMPORTED_MODULE_6__["AutoScrollDirective"], _nav_detail_nav_detail_component__WEBPACK_IMPORTED_MODULE_7__["NavDetailComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]],
      exports: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_5__["IconBarComponent"], _auto_scroll_directive__WEBPACK_IMPORTED_MODULE_6__["AutoScrollDirective"], _nav_detail_nav_detail_component__WEBPACK_IMPORTED_MODULE_7__["NavDetailComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=announcements-announcements-module-es5.js.map