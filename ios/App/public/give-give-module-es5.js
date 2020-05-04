function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["give-give-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGiveGivePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"main-bg-color\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      Give\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/give/give-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/give/give-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: GivePageRoutingModule */

  /***/
  function srcAppGiveGiveRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivePageRoutingModule", function () {
      return GivePageRoutingModule;
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


    var _give_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./give.page */
    "./src/app/give/give.page.ts");

    var routes = [{
      path: '',
      component: _give_page__WEBPACK_IMPORTED_MODULE_3__["GivePage"]
    }];

    var GivePageRoutingModule = function GivePageRoutingModule() {
      _classCallCheck(this, GivePageRoutingModule);
    };

    GivePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GivePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/give/give.module.ts":
  /*!*************************************!*\
    !*** ./src/app/give/give.module.ts ***!
    \*************************************/

  /*! exports provided: GivePageModule */

  /***/
  function srcAppGiveGiveModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivePageModule", function () {
      return GivePageModule;
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


    var _give_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./give-routing.module */
    "./src/app/give/give-routing.module.ts");
    /* harmony import */


    var _give_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./give.page */
    "./src/app/give/give.page.ts");

    var GivePageModule = function GivePageModule() {
      _classCallCheck(this, GivePageModule);
    };

    GivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _give_routing_module__WEBPACK_IMPORTED_MODULE_5__["GivePageRoutingModule"]],
      declarations: [_give_page__WEBPACK_IMPORTED_MODULE_6__["GivePage"]]
    })], GivePageModule);
    /***/
  },

  /***/
  "./src/app/give/give.page.scss":
  /*!*************************************!*\
    !*** ./src/app/give/give.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppGiveGivePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdmUvZ2l2ZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/give/give.page.ts":
  /*!***********************************!*\
    !*** ./src/app/give/give.page.ts ***!
    \***********************************/

  /*! exports provided: GivePage */

  /***/
  function srcAppGiveGivePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GivePage", function () {
      return GivePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GivePage = /*#__PURE__*/function () {
      function GivePage() {
        _classCallCheck(this, GivePage);
      }

      _createClass(GivePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GivePage;
    }();

    GivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-give',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./give.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/give/give.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./give.page.scss */
      "./src/app/give/give.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GivePage);
    /***/
  }
}]);
//# sourceMappingURL=give-give-module-es5.js.map