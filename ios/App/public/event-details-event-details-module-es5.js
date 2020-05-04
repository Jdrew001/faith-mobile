function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-details-event-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventDetailsEventDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <app-nav-detail [title]=\"'Event'\" (dismiss)=\"dismissDetail($event)\"></app-nav-detail>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-detail *ngIf=\"details\" [details]=\"details\" [type]=\"'event'\"></app-detail>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/events/event-details/event-details-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/events/event-details/event-details-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: EventDetailsPageRoutingModule */

  /***/
  function srcAppEventsEventDetailsEventDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsPageRoutingModule", function () {
      return EventDetailsPageRoutingModule;
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


    var _event_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event-details.page */
    "./src/app/events/event-details/event-details.page.ts");

    var routes = [{
      path: '',
      component: _event_details_page__WEBPACK_IMPORTED_MODULE_3__["EventDetailsPage"]
    }];

    var EventDetailsPageRoutingModule = function EventDetailsPageRoutingModule() {
      _classCallCheck(this, EventDetailsPageRoutingModule);
    };

    EventDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/events/event-details/event-details.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/events/event-details/event-details.module.ts ***!
    \**************************************************************/

  /*! exports provided: EventDetailsPageModule */

  /***/
  function srcAppEventsEventDetailsEventDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function () {
      return EventDetailsPageModule;
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


    var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./event-details-routing.module */
    "./src/app/events/event-details/event-details-routing.module.ts");
    /* harmony import */


    var _event_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event-details.page */
    "./src/app/events/event-details/event-details.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var EventDetailsPageModule = function EventDetailsPageModule() {
      _classCallCheck(this, EventDetailsPageModule);
    };

    EventDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _event_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventDetailsPageRoutingModule"]],
      declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]]
    })], EventDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/events/event-details/event-details.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/events/event-details/event-details.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventDetailsEventDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/events/event-details/event-details.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/events/event-details/event-details.page.ts ***!
    \************************************************************/

  /*! exports provided: EventDetailsPage */

  /***/
  function srcAppEventsEventDetailsEventDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsPage", function () {
      return EventDetailsPage;
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


    var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../event.service */
    "./src/app/events/event.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EventDetailsPage = /*#__PURE__*/function () {
      function EventDetailsPage(eventService, actRoute) {
        _classCallCheck(this, EventDetailsPage);

        this.eventService = eventService;
        this.actRoute = actRoute;
        this.details = null;
      }

      _createClass(EventDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.eventService.fetchEvent(this.actRoute.snapshot.paramMap.get('id'));
          this.eventService.event$.subscribe(function (val) {
            return _this.details = val;
          });
        }
      }, {
        key: "dismissDetail",
        value: function dismissDetail(val) {
          this.details = null;
        }
      }]);

      return EventDetailsPage;
    }();

    EventDetailsPage.ctorParameters = function () {
      return [{
        type: _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EventDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-details.page.scss */
      "./src/app/events/event-details/event-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], EventDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=event-details-event-details-module-es5.js.map