function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sermons-sermons-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sermons/sermons.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sermons/sermons.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSermonsSermonsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"main-bg-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      Sermons\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/sermons/sermons-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sermons/sermons-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SermonsPageRoutingModule */

  /***/
  function srcAppSermonsSermonsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SermonsPageRoutingModule", function () {
      return SermonsPageRoutingModule;
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


    var _sermons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sermons.page */
    "./src/app/sermons/sermons.page.ts");

    var routes = [{
      path: '',
      component: _sermons_page__WEBPACK_IMPORTED_MODULE_3__["SermonsPage"]
    }];

    var SermonsPageRoutingModule = function SermonsPageRoutingModule() {
      _classCallCheck(this, SermonsPageRoutingModule);
    };

    SermonsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SermonsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sermons/sermons.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sermons/sermons.module.ts ***!
    \*******************************************/

  /*! exports provided: SermonsPageModule */

  /***/
  function srcAppSermonsSermonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SermonsPageModule", function () {
      return SermonsPageModule;
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


    var _sermons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sermons-routing.module */
    "./src/app/sermons/sermons-routing.module.ts");
    /* harmony import */


    var _sermons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sermons.page */
    "./src/app/sermons/sermons.page.ts");

    var SermonsPageModule = function SermonsPageModule() {
      _classCallCheck(this, SermonsPageModule);
    };

    SermonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sermons_routing_module__WEBPACK_IMPORTED_MODULE_5__["SermonsPageRoutingModule"]],
      declarations: [_sermons_page__WEBPACK_IMPORTED_MODULE_6__["SermonsPage"]]
    })], SermonsPageModule);
    /***/
  },

  /***/
  "./src/app/sermons/sermons.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sermons/sermons.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSermonsSermonsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcm1vbnMvc2VybW9ucy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sermons/sermons.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sermons/sermons.page.ts ***!
    \*****************************************/

  /*! exports provided: SermonsPage */

  /***/
  function srcAppSermonsSermonsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SermonsPage", function () {
      return SermonsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SermonsPage = /*#__PURE__*/function () {
      function SermonsPage() {
        _classCallCheck(this, SermonsPage);
      }

      _createClass(SermonsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SermonsPage;
    }();

    SermonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sermons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sermons.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sermons/sermons.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sermons.page.scss */
      "./src/app/sermons/sermons.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SermonsPage);
    /***/
  }
}]);
//# sourceMappingURL=sermons-sermons-module-es5.js.map