function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"], {
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


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"main-bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Connect\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
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

    var ConnectPageModule = function ConnectPageModule() {
      _classCallCheck(this, ConnectPageModule);
    };

    ConnectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"]],
      declarations: [_connect_page__WEBPACK_IMPORTED_MODULE_6__["ConnectPage"]]
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


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QvY29ubmVjdC5wYWdlLnNjc3MifQ== */";
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

    var ConnectPage = /*#__PURE__*/function () {
      function ConnectPage() {
        _classCallCheck(this, ConnectPage);
      }

      _createClass(ConnectPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConnectPage;
    }();

    ConnectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-connect',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connect.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connect.page.scss */
      "./src/app/connect/connect.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ConnectPage);
    /***/
  }
}]);
//# sourceMappingURL=connect-connect-module-es5.js.map