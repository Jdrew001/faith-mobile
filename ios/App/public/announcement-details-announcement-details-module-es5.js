function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["announcement-details-announcement-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnnouncementsAnnouncementDetailsAnnouncementDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-nav-detail [title]=\"'Announcement'\" (dismiss)=\"dismissDetail($event)\"></app-nav-detail>\n</ion-header>\n\n<ion-content>\n  <app-detail [details]=\"details\" [type]=\"'announcement'\"></app-detail>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/announcements/announcement-details/announcement-details-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/announcements/announcement-details/announcement-details-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AnnouncementDetailsPageRoutingModule */

  /***/
  function srcAppAnnouncementsAnnouncementDetailsAnnouncementDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPageRoutingModule", function () {
      return AnnouncementDetailsPageRoutingModule;
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


    var _announcement_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./announcement-details.page */
    "./src/app/announcements/announcement-details/announcement-details.page.ts");

    var routes = [{
      path: '',
      component: _announcement_details_page__WEBPACK_IMPORTED_MODULE_3__["AnnouncementDetailsPage"]
    }];

    var AnnouncementDetailsPageRoutingModule = function AnnouncementDetailsPageRoutingModule() {
      _classCallCheck(this, AnnouncementDetailsPageRoutingModule);
    };

    AnnouncementDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AnnouncementDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/announcements/announcement-details/announcement-details.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/announcements/announcement-details/announcement-details.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: AnnouncementDetailsPageModule */

  /***/
  function srcAppAnnouncementsAnnouncementDetailsAnnouncementDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPageModule", function () {
      return AnnouncementDetailsPageModule;
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


    var _announcement_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./announcement-details-routing.module */
    "./src/app/announcements/announcement-details/announcement-details-routing.module.ts");
    /* harmony import */


    var _announcement_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./announcement-details.page */
    "./src/app/announcements/announcement-details/announcement-details.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var AnnouncementDetailsPageModule = function AnnouncementDetailsPageModule() {
      _classCallCheck(this, AnnouncementDetailsPageModule);
    };

    AnnouncementDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _announcement_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnnouncementDetailsPageRoutingModule"]],
      declarations: [_announcement_details_page__WEBPACK_IMPORTED_MODULE_6__["AnnouncementDetailsPage"]]
    })], AnnouncementDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/announcements/announcement-details/announcement-details.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/announcements/announcement-details/announcement-details.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnnouncementsAnnouncementDetailsAnnouncementDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  border-radius: 15px !important;\n  width: 90%;\n  margin: auto;\n}\n\nion-card {\n  width: 95%;\n  margin: auto !important;\n  position: relative;\n  bottom: 2em;\n  min-height: 35vh;\n}\n\nion-card.container-card {\n  position: relative;\n  background-color: #fbfbfb;\n}\n\nion-card.container-card ion-card-content.container-content {\n  height: 95%;\n}\n\nion-card.container-card h3 {\n  font-size: 18px;\n  text-align: center;\n  margin-top: 1.5vh;\n}\n\nion-card.container-card hr {\n  background-color: #E02E2E;\n  width: 8%;\n  display: block;\n  margin: auto;\n  margin-top: 2%;\n  margin-bottom: 2%;\n}\n\nion-card.container-card h4 {\n  text-align: center;\n  width: 85%;\n  display: block;\n  margin: auto;\n  line-height: 1.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50LWRldGFpbHMvYW5ub3VuY2VtZW50LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9hbm5vdW5jZW1lbnRzL2Fubm91bmNlbWVudC1kZXRhaWxzL2Fubm91bmNlbWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0FDQ1I7O0FERUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREdJO0VBQ0kseUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50LWRldGFpbHMvYW5ub3VuY2VtZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDJlbTtcbiAgICBtaW4taGVpZ2h0OiAzNXZoO1xufVxuXG5pb24tY2FyZC5jb250YWluZXItY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZiZmJmYjtcblxuICAgIGlvbi1jYXJkLWNvbnRlbnQuY29udGFpbmVyLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjV2aDtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMDJFMkU7XG4gICAgICAgIHdpZHRoOiA4JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDogMiU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgIH1cbn0iLCJpbWcge1xuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogOTUlO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDJlbTtcbiAgbWluLWhlaWdodDogMzV2aDtcbn1cblxuaW9uLWNhcmQuY29udGFpbmVyLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG59XG5pb24tY2FyZC5jb250YWluZXItY2FyZCBpb24tY2FyZC1jb250ZW50LmNvbnRhaW5lci1jb250ZW50IHtcbiAgaGVpZ2h0OiA5NSU7XG59XG5pb24tY2FyZC5jb250YWluZXItY2FyZCBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjV2aDtcbn1cbmlvbi1jYXJkLmNvbnRhaW5lci1jYXJkIGhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwMkUyRTtcbiAgd2lkdGg6IDglO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5pb24tY2FyZC5jb250YWluZXItY2FyZCBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDg1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/announcements/announcement-details/announcement-details.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/announcements/announcement-details/announcement-details.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: AnnouncementDetailsPage */

  /***/
  function srcAppAnnouncementsAnnouncementDetailsAnnouncementDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementDetailsPage", function () {
      return AnnouncementDetailsPage;
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
    /*! ../announcement.service */
    "./src/app/announcements/announcement.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AnnouncementDetailsPage = /*#__PURE__*/function () {
      function AnnouncementDetailsPage(activatedRoute, announcementService) {
        _classCallCheck(this, AnnouncementDetailsPage);

        this.activatedRoute = activatedRoute;
        this.announcementService = announcementService;
      }

      _createClass(AnnouncementDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.announcementService.fetchAnnouncement(this.activatedRoute.snapshot.paramMap.get('id'));
          this.announcementService.announcement$.subscribe(function (val) {
            return _this.details = val;
          });
        }
      }, {
        key: "getImage",
        value: function getImage(imgUrl) {
          return this.announcementService.getImage(this.details['image']['url']);
        }
      }, {
        key: "dismissDetail",
        value: function dismissDetail(val) {
          this.details = null;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.announcementService.announcement$.next(null);
        }
      }]);

      return AnnouncementDetailsPage;
    }();

    AnnouncementDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
      }];
    };

    AnnouncementDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-announcement-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./announcement-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/announcements/announcement-details/announcement-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./announcement-details.page.scss */
      "./src/app/announcements/announcement-details/announcement-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]])], AnnouncementDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=announcement-details-announcement-details-module-es5.js.map