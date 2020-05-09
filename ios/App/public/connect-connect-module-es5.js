function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConnectComponentsBiblestudyBiblestudyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"biblestudy-container\">\n\n  <ng-container *ngFor=\"let item of data; let i = index;\">\n    <div class=\"animated fadeInUp faster\" [ngStyle]=\"{'animation-delay': (i * (110 + (i / 100))) + 'ms'}\">\n      <ion-row>\n        <img [src]=\"getImage(item.image.url)\" />\n      </ion-row>\n      <ion-row>\n        <ion-card class=\"container-card\">\n          <ion-card-content class=\"container-content\">\n            <ion-row>\n              <ion-col [size]=\"7\">\n                <h3>{{ item.title }}</h3>\n                <p>Salvation</p>\n              </ion-col>\n              <ion-col [size]=\"5\">\n                <ion-fab>\n                  <ion-fab-button (click)=\"viewFile(item)\">\n                    <ion-icon name=\"cloud-download-outline\"></ion-icon>\n                  </ion-fab-button>\n                </ion-fab>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </div>\n  </ng-container>\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConnectComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  contact works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConnectComponentsSocialSocialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"social-container\">\n  <ng-container>\n    <ion-row *ngFor=\"let item of data['data']; let i = index;\">\n      <ion-card class=\"container-card animated fadeInUp faster\" *ngIf=\"(getMedia(item) && getMedia(item).type === 'photo') || (getMedia(item) && getMedia(item).type === 'video')\" [ngStyle]=\"{'animation-delay': (i * (110 + (i / 100))) + 'ms'}\">\n        <ion-card-content class=\"container-content\">\n          <ng-container *ngIf=\"getMedia(item) && getMedia(item).type === 'photo'\">\n          <img [src]=\"getMedia(item).image.src\" />\n        </ng-container>\n        <ng-container *ngIf=\"getMedia(item) && getMedia(item).type === 'video'\">\n          <video #player controls [poster]=\"getMedia(item).image.src\">\n            <source [src]=\"getMedia(item).media_source\" type=\"video/mp4\">\n          </video>\n        </ng-container>\n        </ion-card-content>\n        <ion-card-header>\n          <ion-card-subtitle>{{ convertToLocalDate(item.created_time) }}</ion-card-subtitle>\n          <ion-card-title *ngIf=\"item.message\">{{ item.message }}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-row>\n  </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConnectConnectPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigation></app-navigation>\n</ion-header>\n\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <div class=\"heading\">\n    <app-icon-bar [icon]=\"'chatbubbles-outline'\" [title]=\"'Connect'\"></app-icon-bar>\n    <ion-row class=\"fixed\">\n      <ion-col size=\"12\">\n        <ion-segment id=\"segment\" class=\"segment\" mode=\"md\" (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\">\n          <ion-segment-button *ngFor=\"let val of segments\" [value]=\"val.value\">\n            <ion-label>{{ val.name }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-slides #slides [options]=\"options\" (ionSlideDidChange)=\"slideChanged()\">\n    <ion-slide>\n      <ng-container>\n        <app-social [data]=\"fbFeedData\" [scrolling]=\"scrolling\" [view]=\"view\"></app-social>\n      </ng-container>\n    </ion-slide>\n    <ion-slide>\n      <ng-container>\n        <app-biblestudy [data]=\"bStudies\"></app-biblestudy>\n      </ng-container>\n    </ion-slide>\n    <ion-slide>\n      <ng-container>\n        <app-contact></app-contact>\n      </ng-container>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/connect/components/biblestudy/biblestudy.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/connect/components/biblestudy/biblestudy.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConnectComponentsBiblestudyBiblestudyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".biblestudy-container {\n  margin-top: 20vh;\n  width: 100% !important;\n}\n\nimg {\n  border-radius: 15px !important;\n  width: 85%;\n  height: 20%;\n  margin: auto;\n}\n\nion-card {\n  text-align: left !important;\n  width: 100% !important;\n  position: relative;\n  bottom: 3vh !important;\n}\n\nion-card-content {\n  padding: 8% 3% !important;\n}\n\nion-fab {\n  width: 80% !important;\n}\n\nion-fab-button {\n  width: 45px !important;\n  height: 45px !important;\n  float: right !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9iaWJsZXN0dWR5L2JpYmxlc3R1ZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9iaWJsZXN0dWR5L2JpYmxlc3R1ZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2NvbXBvbmVudHMvYmlibGVzdHVkeS9iaWJsZXN0dWR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpYmxlc3R1ZHktY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgaGVpZ2h0OiAyMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY2FyZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogM3ZoICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDglIDMlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mYWIge1xuICAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICAgIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59IiwiLmJpYmxlc3R1ZHktY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IDIwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDN2aCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogOCUgMyUgIWltcG9ydGFudDtcbn1cblxuaW9uLWZhYiB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/connect/components/biblestudy/biblestudy.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/connect/components/biblestudy/biblestudy.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BiblestudyComponent */

  /***/
  function srcAppConnectComponentsBiblestudyBiblestudyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BiblestudyComponent", function () {
      return BiblestudyComponent;
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


    var _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/biblestudy.service */
    "./src/app/connect/services/biblestudy.service.ts");
    /* harmony import */


    var src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/helper.service */
    "./src/app/core/helper.service.ts");

    var BiblestudyComponent = /*#__PURE__*/function () {
      function BiblestudyComponent(bibleStudyService, helperService) {
        _classCallCheck(this, BiblestudyComponent);

        this.bibleStudyService = bibleStudyService;
        this.helperService = helperService;
        this.placeHolderImg = '';
      }

      _createClass(BiblestudyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.placeHolderImg = this.helperService.getResourceUrl('images/placeholder-image.jpg', true);
        }
      }, {
        key: "getImage",
        value: function getImage(imgUrl) {
          return this.bibleStudyService.getImage(imgUrl);
        }
      }, {
        key: "viewFile",
        value: function viewFile(item) {
          var url = item.file.url;
          var fileName = item.file.name;
          this.bibleStudyService.downloadAndOpenPdf(url, fileName);
        }
      }]);

      return BiblestudyComponent;
    }();

    BiblestudyComponent.ctorParameters = function () {
      return [{
        type: _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_2__["BiblestudyService"]
      }, {
        type: src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], BiblestudyComponent.prototype, "data", void 0);
    BiblestudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-biblestudy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./biblestudy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./biblestudy.component.scss */
      "./src/app/connect/components/biblestudy/biblestudy.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_biblestudy_service__WEBPACK_IMPORTED_MODULE_2__["BiblestudyService"], src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])], BiblestudyComponent);
    /***/
  },

  /***/
  "./src/app/connect/components/contact/contact.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/connect/components/contact/contact.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConnectComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/connect/components/contact/contact.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/connect/components/contact/contact.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppConnectComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/connect/components/contact/contact.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ContactComponent);
    /***/
  },

  /***/
  "./src/app/connect/components/social/social.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/connect/components/social/social.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConnectComponentsSocialSocialComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.social-container {\n  margin-top: 20vh;\n  width: 100% !important;\n}\n\nimg {\n  border-radius: 0px !important;\n  width: 100%;\n  margin: auto;\n}\n\nvideo {\n  border-radius: 0px !important;\n  width: 100%;\n  margin: auto;\n}\n\nion-card-content {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\nion-card {\n  margin: auto !important;\n  position: relative;\n  bottom: 2em !important;\n  min-height: 15vh;\n  margin: 10% 5% 0% 5% !important;\n}\n\n.bar {\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  transform: translate(0%, -100%);\n  background-image: url('grey-gradient.jpg');\n}\n\nion-icon {\n  color: #516065 !important;\n}\n\nion-card-title {\n  font-size: 13px !important;\n}\n\nion-card-subtitle {\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb25uZWN0L2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zb2NpYWwtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG52aWRlbyB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTV2aDtcbiAgICBtYXJnaW46IDEwJSA1JSAwJSA1JSAhaW1wb3J0YW50O1xufVxuXG4uYmFyIHtcbiAgICB6LWluZGV4OiAyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTEwMCUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmV5LWdyYWRpZW50LmpwZycpO1xufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6ICM1MTYwNjUgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59IiwiZGl2LnNvY2lhbC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAyMHZoO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxudmlkZW8ge1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDE1dmg7XG4gIG1hcmdpbjogMTAlIDUlIDAlIDUlICFpbXBvcnRhbnQ7XG59XG5cbi5iYXIge1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dyZXktZ3JhZGllbnQuanBnXCIpO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjNTE2MDY1ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/connect/components/social/social.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/connect/components/social/social.component.ts ***!
    \***************************************************************/

  /*! exports provided: SocialComponent */

  /***/
  function srcAppConnectComponentsSocialSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialComponent", function () {
      return SocialComponent;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);

    var SocialComponent = /*#__PURE__*/function () {
      function SocialComponent() {
        _classCallCheck(this, SocialComponent);
      }

      _createClass(SocialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.scrolling) {
            this.viewDidScroll();
          }

          if (this.view && this.view !== 0) {
            if (this.currentPlaying) {
              this.currentPlaying.pause();
              this.currentPlaying = null;
            }
          }
        }
      }, {
        key: "viewDidScroll",
        value: function viewDidScroll() {
          var _this = this;

          if (this.currentPlaying && this.isElementInView(this.currentPlaying)) {
            return;
          }

          if (this.currentPlaying && !this.isElementInView(this.currentPlaying)) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
          }

          this.videoPlayers.forEach(function (player) {
            var nativeElement = player.nativeElement;

            var inView = _this.isElementInView(nativeElement);

            if (_this.currentPlaying) {
              return;
            }

            if (inView) {
              _this.currentPlaying = nativeElement;
              _this.currentPlaying.muted = true;

              _this.currentPlaying.play();
            }
          });
        }
      }, {
        key: "getMedia",
        value: function getMedia(item) {
          if (item.attachments) {
            var data = item.attachments.data[0];
            return {
              type: data.media_type,
              media_source: data.media ? data.media.source : '',
              image: data.media ? data.media.image : ''
            };
          }

          return null;
        }
      }, {
        key: "isElementInView",
        value: function isElementInView(el) {
          var rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        }
      }, {
        key: "convertToLocalDate",
        value: function convertToLocalDate(date) {
          return date ? moment__WEBPACK_IMPORTED_MODULE_2__(date).format('dddd, MMMM Do YYYY') : '';
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentPlaying) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
          }
        }
      }]);

      return SocialComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)], SocialComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scrolling'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SocialComponent.prototype, "scrolling", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('view'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], SocialComponent.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('player'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], SocialComponent.prototype, "videoPlayers", void 0);
    SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-social',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./social.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./social.component.scss */
      "./src/app/connect/components/social/social.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SocialComponent);
    /***/
  },

  /***/
  "./src/app/connect/connect-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/connect/connect-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ConnectPageRoutingModule */

  /***/
  function srcAppConnectConnectRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectPageRoutingModule", function () {
      return ConnectPageRoutingModule;
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


    var _connect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./connect.page */
    "./src/app/connect/connect.page.ts");

    var routes = [{
      path: '',
      component: _connect_page__WEBPACK_IMPORTED_MODULE_3__["ConnectPage"]
    }];

    var ConnectPageRoutingModule = function ConnectPageRoutingModule() {
      _classCallCheck(this, ConnectPageRoutingModule);
    };

    ConnectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConnectPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/connect/connect.constant.ts":
  /*!*********************************************!*\
    !*** ./src/app/connect/connect.constant.ts ***!
    \*********************************************/

  /*! exports provided: ConnectConstant */

  /***/
  function srcAppConnectConnectConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectConstant", function () {
      return ConnectConstant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ConnectConstant = function ConnectConstant() {
      _classCallCheck(this, ConnectConstant);
    };

    ConnectConstant.FB_FEED = 'https://graph.facebook.com/v6.0/107643457281903?fields=posts%7Battachments%7Bdescription%2Cmedia%2Cmedia_type%2Ctitle%7D%2Cmessage%2Ccreated_time%7D&access_token=EAADGQ0IHbkYBALk8HdWZCpnrRnlwlSkFwoO2P1OpTgu9N5PdXZCruyQxAKzI9ZCJT7A3uh2ZCBLl19og6BEy5uLg2TSKz6UgtAVCqdZBMoELRKOI3x1C3U8T2vcoQqwNj22BzmpTHn8cGZAbrY2kvH9XtKbioDibYVVZAh56oX1ZBAZDZD';
    ConnectConstant.BIBLE_STUDY_URL = 'biblestudies';
    /***/
  },

  /***/
  "./src/app/connect/connect.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/connect/connect.module.ts ***!
    \*******************************************/

  /*! exports provided: ConnectPageModule */

  /***/
  function srcAppConnectConnectModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function () {
      return ConnectPageModule;
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


    var _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./connect-routing.module */
    "./src/app/connect/connect-routing.module.ts");
    /* harmony import */


    var _connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./connect.page */
    "./src/app/connect/connect.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_social_social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/social/social.component */
    "./src/app/connect/components/social/social.component.ts");
    /* harmony import */


    var _components_biblestudy_biblestudy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/biblestudy/biblestudy.component */
    "./src/app/connect/components/biblestudy/biblestudy.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/connect/components/contact/contact.component.ts");
    /* harmony import */


    var _services_social_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/social.service */
    "./src/app/connect/services/social.service.ts");
    /* harmony import */


    var _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/biblestudy.service */
    "./src/app/connect/services/biblestudy.service.ts");

    var ConnectPageModule = function ConnectPageModule() {
      _classCallCheck(this, ConnectPageModule);
    };

    ConnectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      providers: [_services_social_service__WEBPACK_IMPORTED_MODULE_11__["SocialService"], _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_12__["BiblestudyService"]],
      declarations: [_connect_page__WEBPACK_IMPORTED_MODULE_6__["ConnectPage"], _components_social_social_component__WEBPACK_IMPORTED_MODULE_8__["SocialComponent"], _components_biblestudy_biblestudy_component__WEBPACK_IMPORTED_MODULE_9__["BiblestudyComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]]
    })], ConnectPageModule);
    /***/
  },

  /***/
  "./src/app/connect/connect.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/connect/connect.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppConnectConnectPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  margin: 0px 5%;\n  border-bottom: 1px solid #3171e05c;\n}\n\n.segment {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2Nvbm5lY3QvY29ubmVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvbm5lY3QvY29ubmVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICBtYXJnaW46IDBweCA1JTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxNzFlMDVjO1xufVxuXG4uc2VnbWVudCB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59IiwiaW9uLWlucHV0IHtcbiAgbWFyZ2luOiAwcHggNSU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzE3MWUwNWM7XG59XG5cbi5zZWdtZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/connect/connect.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/connect/connect.page.ts ***!
    \*****************************************/

  /*! exports provided: ConnectPage */

  /***/
  function srcAppConnectConnectPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectPage", function () {
      return ConnectPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/social.service */
    "./src/app/connect/services/social.service.ts");
    /* harmony import */


    var _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/biblestudy.service */
    "./src/app/connect/services/biblestudy.service.ts");

    var ConnectPage = /*#__PURE__*/function () {
      function ConnectPage(socialService, bibleStudyService) {
        _classCallCheck(this, ConnectPage);

        this.socialService = socialService;
        this.bibleStudyService = bibleStudyService;
        this.segments = [{
          name: 'Social',
          value: 0
        }, {
          name: 'Bible Studies',
          value: 1
        }, {
          name: 'Contact',
          value: 2
        }];
        this.segment = 0;
        this.fbFeedData = [];
        this.bStudies = [];
        this.options = {
          autoHeight: true
        };
      }

      _createClass(ConnectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.socialService.fetchFBFeed().subscribe(function (val) {
            _this2.fbFeedData = val['posts'];
          });
          this.bibleStudyService.fetchAllStudies().subscribe(function (val) {
            _this2.bStudies = val;
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged() {
          this.slider.slideTo(this.segment, 500);
        }
      }, {
        key: "slideChanged",
        value: function slideChanged() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.slider.getActiveIndex();

                  case 2:
                    this.segment = _context.sent;
                    this.view = this.segment;

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onScroll",
        value: function onScroll(event) {
          this.scrolling = event;
        }
      }]);

      return ConnectPage;
    }();

    ConnectPage.ctorParameters = function () {
      return [{
        type: _services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"]
      }, {
        type: _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_4__["BiblestudyService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], ConnectPage.prototype, "slider", void 0);
    ConnectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connect.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connect.page.scss */
      "./src/app/connect/connect.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"], _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_4__["BiblestudyService"]])], ConnectPage);
    /***/
  },

  /***/
  "./src/app/connect/services/biblestudy.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/connect/services/biblestudy.service.ts ***!
    \********************************************************/

  /*! exports provided: BiblestudyService */

  /***/
  function srcAppConnectServicesBiblestudyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BiblestudyService", function () {
      return BiblestudyService;
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


    var src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/helper.service */
    "./src/app/core/helper.service.ts");
    /* harmony import */


    var _connect_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../connect.constant */
    "./src/app/connect/connect.constant.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var BiblestudyService = /*#__PURE__*/function () {
      function BiblestudyService(helperService, http, inAppBrowser) {
        _classCallCheck(this, BiblestudyService);

        this.helperService = helperService;
        this.http = http;
        this.inAppBrowser = inAppBrowser;
        this.allBibleStudies$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.pdfFileType = 'application/pdf';
      }

      _createClass(BiblestudyService, [{
        key: "fetchAllStudies",
        value: function fetchAllStudies() {
          var url = this.helperService.getResourceUrl(_connect_constant__WEBPACK_IMPORTED_MODULE_3__["ConnectConstant"].BIBLE_STUDY_URL, false);
          return this.http.get(url);
        }
      }, {
        key: "getImage",
        value: function getImage(imgUrl) {
          return src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].IMG_URL + imgUrl;
        }
      }, {
        key: "downloadAndOpenPdf",
        value: function downloadAndOpenPdf(url, name) {
          this.inAppBrowser.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].IMG_URL + url, '_system', 'location=yes');
        }
      }]);

      return BiblestudyService;
    }();

    BiblestudyService.ctorParameters = function () {
      return [{
        type: src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
      }];
    };

    BiblestudyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]])], BiblestudyService);
    /***/
  },

  /***/
  "./src/app/connect/services/social.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/connect/services/social.service.ts ***!
    \****************************************************/

  /*! exports provided: SocialService */

  /***/
  function srcAppConnectServicesSocialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialService", function () {
      return SocialService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/helper.service */
    "./src/app/core/helper.service.ts");
    /* harmony import */


    var _connect_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../connect.constant */
    "./src/app/connect/connect.constant.ts");

    var SocialService = /*#__PURE__*/function () {
      function SocialService(httpClient, helperService) {
        _classCallCheck(this, SocialService);

        this.httpClient = httpClient;
        this.helperService = helperService;
      }

      _createClass(SocialService, [{
        key: "fetchFBFeed",
        value: function fetchFBFeed() {
          var url = _connect_constant__WEBPACK_IMPORTED_MODULE_4__["ConnectConstant"].FB_FEED;
          return this.httpClient.get(url);
        }
      }]);

      return SocialService;
    }();

    SocialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    SocialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])], SocialService);
    /***/
  }
}]);
//# sourceMappingURL=connect-connect-module-es5.js.map