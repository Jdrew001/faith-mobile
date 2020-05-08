function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ministries-ministries-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMinistriesMinistriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigation></app-navigation>\n</ion-header>\n\n<ion-content>\n  <div class=\"heading fixed\">\n    <app-icon-bar [icon]=\"'people-outline'\" [title]=\"'Ministries'\"></app-icon-bar>\n  </div>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"height: 100%\">\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"youth-container\">\n          <div class=\"mask\">\n            <h4>Faith Youth</h4>\n            <p>Youth class starts every Sunday at 10::00 am. Every Friday night, there is a youth event for students ages 12-17.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"kids-container\">\n          <div class=\"mask\">\n            <h4>Faith Kids</h4>\n            <p>Kid classes start every Sunday at 10:00 a.m. This is a specially tailored classroom and lesson just for them! Every Wednesday, there is a class for kids ages 3-10 after worship.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"ladies-container\">\n          <div class=\"mask\">\n            <h4>Ladies</h4>\n            <p>It is important to get to know and receive encouragement from other women who love God. Ladies socials and studies are offered on Faith Fellowship nights.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"mens-container\">\n          <div class=\"mask\">\n            <h4>Mens</h4>\n            <p>Relax and spend time having fun with other christ-centered men.\n            Mens socials and studies are offered on Faith Fellowship nights.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"marrieds-container\">\n          <div class=\"mask\">\n            <h4>Marrieds</h4>\n            <p>Strong marriages that are connected to God are important.\n              Married socials and studies are offered on Faith Fellowship nights.\n              If you and your partner are interested in marital or premarital counseling,\n              please contact pastor for a session.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class=\"ministry-container\">\n        <div class=\"bible-container\">\n          <div class=\"mask\">\n            <h4>Bible Study</h4>\n            <p>As fellow learners, we want to join you in delving into the Word.\n              We offer free Bible studies that are tailored to you and your spiritual journey. Ask anyone on our ministry team to help you schedule a Bible study.</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ministries/ministries-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ministries/ministries-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MinistriesPageRoutingModule */

  /***/
  function srcAppMinistriesMinistriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinistriesPageRoutingModule", function () {
      return MinistriesPageRoutingModule;
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


    var _ministries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ministries.page */
    "./src/app/ministries/ministries.page.ts");

    var routes = [{
      path: '',
      component: _ministries_page__WEBPACK_IMPORTED_MODULE_3__["MinistriesPage"]
    }];

    var MinistriesPageRoutingModule = function MinistriesPageRoutingModule() {
      _classCallCheck(this, MinistriesPageRoutingModule);
    };

    MinistriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MinistriesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ministries/ministries.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ministries/ministries.module.ts ***!
    \*************************************************/

  /*! exports provided: MinistriesPageModule */

  /***/
  function srcAppMinistriesMinistriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinistriesPageModule", function () {
      return MinistriesPageModule;
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


    var _ministries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ministries-routing.module */
    "./src/app/ministries/ministries-routing.module.ts");
    /* harmony import */


    var _ministries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ministries.page */
    "./src/app/ministries/ministries.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var MinistriesPageModule = function MinistriesPageModule() {
      _classCallCheck(this, MinistriesPageModule);
    };

    MinistriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ministries_routing_module__WEBPACK_IMPORTED_MODULE_5__["MinistriesPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_ministries_page__WEBPACK_IMPORTED_MODULE_6__["MinistriesPage"]]
    })], MinistriesPageModule);
    /***/
  },

  /***/
  "./src/app/ministries/ministries.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/ministries/ministries.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMinistriesMinistriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ministry-container {\n  height: 100%;\n  color: white;\n  text-align: center;\n  overflow-y: hidden;\n}\n\n.mask {\n  background-color: rgba(96, 125, 139, 0.7);\n  height: 100%;\n  overflow-y: hidden;\n}\n\n.youth-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('faith-youth.jpg');\n  overflow-y: hidden;\n}\n\n.kids-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('kids.jpg');\n  overflow-y: hidden;\n}\n\n.ladies-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('flowers.jpg');\n  overflow-y: hidden;\n}\n\n.mens-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('mens.jpg');\n  overflow-y: hidden;\n}\n\n.marrieds-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('marrieds.jpg');\n  overflow-y: hidden;\n}\n\n.bible-container {\n  height: 100vh;\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  background-image: url('bible.jpg');\n  overflow-y: hidden;\n}\n\nh4 {\n  color: white !important;\n  padding-top: 45%;\n  font-size: 2em;\n  vertical-align: middle;\n}\n\np {\n  padding: 10px 10px !important;\n  font-size: 0.8em !important;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21pbmlzdHJpZXMvbWluaXN0cmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluaXN0cnktY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5tYXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk2LDEyNSwxMzksLjcpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi55b3V0aC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmFpdGgteW91dGguanBnJyk7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ua2lkcy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMva2lkcy5qcGcnKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5sYWRpZXMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zsb3dlcnMuanBnJyk7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubWVucy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVucy5qcGcnKTtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5tYXJyaWVkcy1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFycmllZHMuanBnJyk7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4uYmlibGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JpYmxlLmpwZycpO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA0NSU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSIsIi5taW5pc3RyeS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5tYXNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NiwgMTI1LCAxMzksIDAuNyk7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ueW91dGgtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2ZhaXRoLXlvdXRoLmpwZ1wiKTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ua2lkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMva2lkcy5qcGdcIik7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLmxhZGllcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvZmxvd2Vycy5qcGdcIik7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLm1lbnMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21lbnMuanBnXCIpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5tYXJyaWVkcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWFycmllZHMuanBnXCIpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5iaWJsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYmlibGUuanBnXCIpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmg0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA0NSU7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMC44ZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ministries/ministries.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/ministries/ministries.page.ts ***!
    \***********************************************/

  /*! exports provided: MinistriesPage */

  /***/
  function srcAppMinistriesMinistriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinistriesPage", function () {
      return MinistriesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MinistriesPage = /*#__PURE__*/function () {
      function MinistriesPage() {
        _classCallCheck(this, MinistriesPage);

        this.slideOpts = {
          initialSlide: 0,
          speed: 400
        };
      }

      _createClass(MinistriesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MinistriesPage;
    }();

    MinistriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ministries',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ministries.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ministries/ministries.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ministries.page.scss */
      "./src/app/ministries/ministries.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MinistriesPage);
    /***/
  }
}]);
//# sourceMappingURL=ministries-ministries-module-es5.js.map