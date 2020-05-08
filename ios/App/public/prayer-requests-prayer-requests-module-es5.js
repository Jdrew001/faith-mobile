function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["prayer-requests-prayer-requests-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrayerRequestsPrayerRequestsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigation></app-navigation>\n</ion-header>\n\n<ion-content>\n  <div class=\"heading fixed\">\n    <app-icon-bar [icon]=\"'book-outline'\" [title]=\"'Prayer Request'\"></app-icon-bar>\n  </div>\n  <ion-card [formGroup]=\"formGroup\" class=\"top fixed animated fadeIn faster\">\n    <ion-row>\n      <h4 style=\"padding-left: 1em; font-size: 14px\">Your Details</h4>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item mode=\"md\">\n          <ion-label position=\"floating\">First Name</ion-label>\n          <ion-input formControlName=\"firstname\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item mode=\"md\">\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input formControlName=\"lastname\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item mode=\"md\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input inputmode=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item mode=\"md\">\n          <ion-label position=\"floating\">Phone</ion-label>\n          <ion-input inputmode=\"number\" formControlName=\"phone\" appPhoneMask></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item mode=\"md\">\n          <ion-label position=\"floating\">Notes</ion-label>\n          <ion-textarea formControlName=\"notes\" rows=\"6\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"reset()\"><ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon></ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"danger\" size=\"small\" (click)=\"submit()\"><ion-icon slot=\"icon-only\" name=\"checkmark-outline\"></ion-icon></ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/prayer-requests/prayer-request.form.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/prayer-requests/prayer-request.form.service.ts ***!
    \****************************************************************/

  /*! exports provided: PrayerRequestFormService */

  /***/
  function srcAppPrayerRequestsPrayerRequestFormServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrayerRequestFormService", function () {
      return PrayerRequestFormService;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PrayerRequestFormService = /*#__PURE__*/function () {
      function PrayerRequestFormService() {
        _classCallCheck(this, PrayerRequestFormService);
      }

      _createClass(PrayerRequestFormService, [{
        key: "createPRForm",
        value: function createPRForm() {
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
          return this.formGroup;
        }
      }, {
        key: "firstnameVal",
        get: function get() {
          return this.formGroup.get('firstname').value;
        }
      }, {
        key: "lastnameVal",
        get: function get() {
          return this.formGroup.get('lastname').value;
        }
      }, {
        key: "emailVal",
        get: function get() {
          return this.formGroup.get('email').value;
        }
      }, {
        key: "phoneVal",
        get: function get() {
          return this.formGroup.get('phone').value;
        }
      }, {
        key: "notesval",
        get: function get() {
          return this.formGroup.get('notes').value;
        }
      }]);

      return PrayerRequestFormService;
    }();

    PrayerRequestFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PrayerRequestFormService);
    /***/
  },

  /***/
  "./src/app/prayer-requests/prayer-requests-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/prayer-requests/prayer-requests-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PrayerRequestsPageRoutingModule */

  /***/
  function srcAppPrayerRequestsPrayerRequestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrayerRequestsPageRoutingModule", function () {
      return PrayerRequestsPageRoutingModule;
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


    var _prayer_requests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prayer-requests.page */
    "./src/app/prayer-requests/prayer-requests.page.ts");

    var routes = [{
      path: '',
      component: _prayer_requests_page__WEBPACK_IMPORTED_MODULE_3__["PrayerRequestsPage"]
    }];

    var PrayerRequestsPageRoutingModule = function PrayerRequestsPageRoutingModule() {
      _classCallCheck(this, PrayerRequestsPageRoutingModule);
    };

    PrayerRequestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrayerRequestsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/prayer-requests/prayer-requests.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/prayer-requests/prayer-requests.module.ts ***!
    \***********************************************************/

  /*! exports provided: PrayerRequestsPageModule */

  /***/
  function srcAppPrayerRequestsPrayerRequestsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrayerRequestsPageModule", function () {
      return PrayerRequestsPageModule;
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


    var _prayer_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prayer-requests-routing.module */
    "./src/app/prayer-requests/prayer-requests-routing.module.ts");
    /* harmony import */


    var _prayer_requests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prayer-requests.page */
    "./src/app/prayer-requests/prayer-requests.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var PrayerRequestsPageModule = function PrayerRequestsPageModule() {
      _classCallCheck(this, PrayerRequestsPageModule);
    };

    PrayerRequestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _prayer_requests_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrayerRequestsPageRoutingModule"]],
      declarations: [_prayer_requests_page__WEBPACK_IMPORTED_MODULE_6__["PrayerRequestsPage"]]
    })], PrayerRequestsPageModule);
    /***/
  },

  /***/
  "./src/app/prayer-requests/prayer-requests.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/prayer-requests/prayer-requests.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrayerRequestsPrayerRequestsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card.top {\n  margin-top: 20% !important;\n}\n\nion-label {\n  font-size: 12px !important;\n}\n\nion-card ion-row {\n  padding: 5px 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL3ByYXllci1yZXF1ZXN0cy9wcmF5ZXItcmVxdWVzdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wcmF5ZXItcmVxdWVzdHMvcHJheWVyLXJlcXVlc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ByYXllci1yZXF1ZXN0cy9wcmF5ZXItcmVxdWVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQudG9wIHtcbiAgICBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQgaW9uLXJvdyB7XG4gICAgcGFkZGluZzogNXB4IDEycHggIWltcG9ydGFudDtcbn0iLCJpb24tY2FyZC50b3Age1xuICBtYXJnaW4tdG9wOiAyMCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIGlvbi1yb3cge1xuICBwYWRkaW5nOiA1cHggMTJweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/prayer-requests/prayer-requests.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/prayer-requests/prayer-requests.page.ts ***!
    \*********************************************************/

  /*! exports provided: PrayerRequestsPage */

  /***/
  function srcAppPrayerRequestsPrayerRequestsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrayerRequestsPage", function () {
      return PrayerRequestsPage;
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


    var _prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./prayer-request.form.service */
    "./src/app/prayer-requests/prayer-request.form.service.ts");
    /* harmony import */


    var _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/services/email.service */
    "./src/app/core/services/email.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../core/loader/loader.service */
    "./src/app/core/loader/loader.service.ts");

    var PrayerRequestsPage = /*#__PURE__*/function () {
      function PrayerRequestsPage(prayerRequestFormService, emailService, toastController, loaderService) {
        _classCallCheck(this, PrayerRequestsPage);

        this.prayerRequestFormService = prayerRequestFormService;
        this.emailService = emailService;
        this.toastController = toastController;
        this.loaderService = loaderService;
      }

      _createClass(PrayerRequestsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formGroup = this.prayerRequestFormService.createPRForm();
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          if (this.formGroup.valid) {
            console.log(this.formGroup.value);
            this.loaderService.toggleLoader(true);
            this.emailService.sendEmail(this.prayerRequestFormService.firstnameVal, this.prayerRequestFormService.lastnameVal, this.prayerRequestFormService.emailVal, this.prayerRequestFormService.phoneVal, this.prayerRequestFormService.notesval).then(function (res) {
              _this.presentToast('Successfully submitted prayer request', 'success');

              _this.loaderService.toggleLoader(false);

              _this.formGroup.reset();
            }, function (err) {
              return _this.presentToast('An error has occurred', 'danger');
            });
            return;
          }

          this.presentToast('Please fill in all fields', 'danger');
        }
      }, {
        key: "reset",
        value: function reset() {
          this.formGroup.reset();
        }
      }, {
        key: "presentToast",
        value: function presentToast(msg, type) {
          this.toastController.create({
            message: msg,
            duration: 2000,
            color: type
          }).then(function (val) {
            return val.present();
          });
        }
      }]);

      return PrayerRequestsPage;
    }();

    PrayerRequestsPage.ctorParameters = function () {
      return [{
        type: _prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"]
      }, {
        type: _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]
      }];
    };

    PrayerRequestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prayer-requests',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./prayer-requests.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/prayer-requests/prayer-requests.page.html"))["default"],
      providers: [_prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./prayer-requests.page.scss */
      "./src/app/prayer-requests/prayer-requests.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_prayer_request_form_service__WEBPACK_IMPORTED_MODULE_2__["PrayerRequestFormService"], _core_services_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _core_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])], PrayerRequestsPage);
    /***/
  }
}]);
//# sourceMappingURL=prayer-requests-prayer-requests-module-es5.js.map