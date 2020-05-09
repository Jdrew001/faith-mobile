function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"], {
  /***/
  "./node_modules/@ionic-native/in-app-browser/ngx/index.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic-native/in-app-browser/ngx/index.js ***!
    \****************************************************************/

  /*! exports provided: InAppBrowserObject, InAppBrowser */

  /***/
  function node_modulesIonicNativeInAppBrowserNgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InAppBrowserObject", function () {
      return InAppBrowserObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InAppBrowser", function () {
      return InAppBrowser;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var InAppBrowserObject =
    /** @class */
    function () {
      /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param {string} url     The URL to load.
       * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
       *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
       *                 _blank: Opens in the InAppBrowser.
       *                 _system: Opens in the system's web browser.
       * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       */
      function InAppBrowserObject(url, target, options) {
        try {
          if (options && typeof options !== 'string') {
            options = Object.keys(options).map(function (key) {
              return key + "=" + options[key];
            }).join(',');
          }

          this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        } catch (e) {
          if (typeof window !== 'undefined') {
            window.open(url, target);
          }

          console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
      }

      InAppBrowserObject.prototype._loadAfterBeforeload = function (strUrl) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "_loadAfterBeforeload", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.show = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "show", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.close = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "close", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.hide = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "hide", {
          "sync": true
        }, arguments);
      };

      InAppBrowserObject.prototype.executeScript = function (script) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "executeScript", {}, arguments);
      };

      InAppBrowserObject.prototype.insertCSS = function (css) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "insertCSS", {}, arguments);
      };

      InAppBrowserObject.prototype.on = function (event) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this._objectInstance.addEventListener(event, observer.next.bind(observer));

              return function () {
                return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
              };
            });
          }
        }();
      };

      InAppBrowserObject.prototype.on = function (event) {
        var _this = this;

        return function () {
          if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
              _this._objectInstance.addEventListener(event, observer.next.bind(observer));

              return function () {
                return _this._objectInstance.removeEventListener(event, observer.next.bind(observer));
              };
            });
          }
        }();
      };

      return InAppBrowserObject;
    }();

    var InAppBrowser =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InAppBrowser, _super);

      function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */


      InAppBrowser.prototype.create = function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
      };

      InAppBrowser.pluginName = "InAppBrowser";
      InAppBrowser.plugin = "cordova-plugin-inappbrowser";
      InAppBrowser.pluginRef = "cordova.InAppBrowser";
      InAppBrowser.repo = "https://github.com/apache/cordova-plugin-inappbrowser";
      InAppBrowser.platforms = ["AmazonFire OS", "Android", "Browser", "iOS", "macOS", "Windows"];
      InAppBrowser = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], InAppBrowser);
      return InAppBrowser;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1icm93c2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDREQUtOLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUEySTFDOzs7Ozs7Ozs7O09BVUc7SUFDSCw0QkFDRSxHQUFXLEVBQ1gsTUFBZSxFQUNmLE9BQXNDO1FBRXRDLElBQUk7WUFDRixJQUFJLE9BQU8sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDM0IsR0FBRyxDQUNGLFVBQUMsR0FBVyxJQUFLLE9BQUcsR0FBRyxTQUFLLE9BQStCLENBQUMsR0FBRyxDQUFHLEVBQWpELENBQWlELENBQ25FO3FCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNkO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDMUI7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUNWLHFHQUFxRyxDQUN0RyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBT0QsaURBQW9CLGFBQUMsTUFBYztJQU9uQyxpQ0FBSTtJQU1KLGtDQUFLO0lBT0wsaUNBQUk7SUFRSiwwQ0FBYSxhQUFDLE1BQXdDO0lBVXRELHNDQUFTLGFBQUMsR0FBcUM7SUFVL0MsK0JBQUUsYUFBQyxLQUE0Qjs7O3NEQUFpQztnQkFDOUQsT0FBTyxJQUFJLFVBQVUsQ0FDbkIsVUFBQyxRQUFxQztvQkFDcEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDbkMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QixDQUFDO29CQUNGLE9BQU87d0JBQ0wsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUN0QyxLQUFLLEVBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCO29CQUhELENBR0MsQ0FBQztnQkFDTixDQUFDLENBQ0YsQ0FBQzthQUNIOzs7SUFRRCwrQkFBRSxhQUFDLEtBQWE7OztzREFBaUM7Z0JBQy9DLE9BQU8sSUFBSSxVQUFVLENBQ25CLFVBQUMsUUFBcUM7b0JBQ3BDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQ25DLEtBQUssRUFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDN0IsQ0FBQztvQkFDRixPQUFPO3dCQUNMLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FDdEMsS0FBSyxFQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUM3QjtvQkFIRCxDQUdDLENBQUM7Z0JBQ04sQ0FBQyxDQUNGLENBQUM7YUFDSDs7OzZCQS9RSDs7OztJQXlUa0MsZ0NBQWlCOzs7O0lBQ2pEOzs7Ozs7OztPQVFHO0lBQ0gsNkJBQU0sR0FBTixVQUNFLEdBQVcsRUFDWCxNQUFlLEVBQ2YsT0FBc0M7UUFFdEMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBaEJVLFlBQVk7UUFEeEIsVUFBVSxFQUFFO09BQ0EsWUFBWTt1QkF6VHpCO0VBeVRrQyxpQkFBaUI7U0FBdEMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpblxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSBjb25zdCBjb3Jkb3ZhOiBDb3Jkb3ZhICYgeyBJbkFwcEJyb3dzZXI6IGFueSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3Nlck9wdGlvbnMge1xuICAvKipcbiAgICogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGFsbG93IGluLWxpbmUgSFRNTDUgbWVkaWEgcGxheWJhY2ssIGRpc3BsYXlpbmcgd2l0aGluIHRoZSBicm93c2VyIHdpbmRvdyByYXRoZXIgdGhhbiBhIGRldmljZS1zcGVjaWZpYyBwbGF5YmFjayBpbnRlcmZhY2UuXG4gICAqIFRoZSBIVE1MJ3MgdmlkZW8gZWxlbWVudCBtdXN0IGFsc28gaW5jbHVkZSB0aGUgd2Via2l0LXBsYXlzaW5saW5lIGF0dHJpYnV0ZSAoZGVmYXVsdHMgdG8gbm8pXG4gICAqL1xuICBhbGxvd0lubGluZU1lZGlhUGxheWJhY2s/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiBzZXQgdG8gZW5hYmxlIHRoZSBiZWZvcmVsb2FkIGV2ZW50IHRvIG1vZGlmeSB3aGljaCBwYWdlcyBhcmUgYWN0dWFsbHkgbG9hZGVkIGluIHRoZSBicm93c2VyLiBBY2NlcHRlZCB2YWx1ZXMgYXJlIGdldCB0b1xuICAgKiBpbnRlcmNlcHQgb25seSBHRVQgcmVxdWVzdHMsIHBvc3QgdG8gaW50ZXJjZXB0IG9uIFBPU1QgcmVxdWVzdHMgb3IgeWVzIHRvIGludGVyY2VwdCBib3RoIEdFVCAmIFBPU1QgcmVxdWVzdHMuXG4gICAqIE5vdGUgdGhhdCBQT1NUIHJlcXVlc3RzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIChpZiB5b3Ugc2V0IGJlZm9yZWxvYWQ9cG9zdCBpdCB3aWxsIHJhaXNlIGFuIGVycm9yKS5cbiAgICovXG4gIGJlZm9yZWxvYWQ/OiAneWVzJyB8ICdnZXQnIHwgJ3Bvc3QnO1xuICAvKiogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBicm93c2VyJ3MgY29va2llIGNhY2hlIGNsZWFyZWQgYmVmb3JlIHRoZSBuZXcgd2luZG93IGlzIG9wZW5lZC4gKi9cbiAgY2xlYXJjYWNoZT86ICd5ZXMnIHwgJ25vJztcbiAgLyoqICBzZXQgdG8geWVzIHRvIGhhdmUgdGhlIGJyb3dzZXIncyBlbnRpcmUgbG9jYWwgc3RvcmFnZSBjbGVhcmVkIChjb29raWVzLCBIVE1MNSBsb2NhbCBzdG9yYWdlLCBJbmRleGVkREIsIGV0Yy4pIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQgKi9cbiAgY2xlYXJkYXRhPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBoYXZlIHRoZSBzZXNzaW9uIGNvb2tpZSBjYWNoZSBjbGVhcmVkIGJlZm9yZSB0aGUgbmV3IHdpbmRvdyBpcyBvcGVuZWQuXG4gICAqIEZvciBXS1dlYlZpZXcsIHJlcXVpcmVzIGlPUyAxMSsgb24gdGFyZ2V0IGRldmljZS5cbiAgICovXG4gIGNsZWFyc2Vzc2lvbmNhY2hlPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGNsb3NlIGJ1dHRvbidzIGNhcHRpb24gaW5zdGVhZCBvZiBhIFguIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKiAoaU9TKSBTZXQgdG8gYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBEb25lIGJ1dHRvbidzIGNhcHRpb24uIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBsb2NhbGl6ZSB0aGlzIHZhbHVlIHlvdXJzZWxmLlxuICAgKi9cbiAgY2xvc2VidXR0b25jYXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNsb3NlIGJ1dHRvbiBjb2xvciBmcm9tIGRlZmF1bHQsIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgYSB0ZXh0IG9yIGRlZmF1bHQgWC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuXG4gICAqIChpT1MpIFNldCBhcyBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCB0byBjaGFuZ2UgZnJvbSB0aGUgZGVmYXVsdCBEb25lIGJ1dHRvbidzIGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBjbG9zZWJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIChkZWZhdWx0IGlzIG5vKS4gVHVybnMgb24vb2ZmIHRoZSBVSVdlYlZpZXdCb3VuY2UgcHJvcGVydHkuICovXG4gIGRpc2FsbG93b3ZlcnNjcm9sbD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgIFNldCB0byB5ZXMgb3Igbm8gdG8gcHJldmVudCB2aWV3cG9ydCBzY2FsaW5nIHRocm91Z2ggYSBtZXRhIHRhZyAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBlbmFibGVWaWV3cG9ydFNjYWxlPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IGEgY2xvc2UgYnV0dG9uIGluIHRoZSBmb290ZXIgc2ltaWxhciB0byB0aGUgaU9TIERvbmUgYnV0dG9uLiBUaGUgY2xvc2UgYnV0dG9uIHdpbGwgYXBwZWFyIHRoZSBzYW1lIGFzIGZvciB0aGUgaGVhZGVyIGhlbmNlIHVzZSBjbG9zZWJ1dHRvbmNhcHRpb24gYW5kIGNsb3NlYnV0dG9uY29sb3IgdG8gc2V0IGl0cyBwcm9wZXJ0aWVzICovXG4gIGZvb3Rlcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlICMwMGZmMDAgb3IgI0NDMDBmZjAwICgjYWFycmdnYmIpLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGZvb3RlciBjb2xvciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBmb290ZXIgc2V0IHRvIHllcyAqL1xuICBmb290ZXJjb2xvcj86IHN0cmluZztcbiAgLyoqXG4gICAqIChXaW5kb3dzIG9ubHkpIFNldCB0byB5ZXMgdG8gY3JlYXRlIHRoZSBicm93c2VyIGNvbnRyb2wgd2l0aG91dCBhIGJvcmRlciBhcm91bmQgaXQuXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgaWYgbG9jYXRpb249bm8gaXMgYWxzbyBzcGVjaWZpZWQsIHRoZXJlIHdpbGwgYmUgbm8gY29udHJvbCBwcmVzZW50ZWQgdG8gdXNlciB0byBjbG9zZSBJQUIgd2luZG93LlxuICAgKi9cbiAgZnVsbHNjcmVlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkICYgV2luZG93cyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSB0aGUgaGFyZHdhcmUgYmFjayBidXR0b24gdG8gbmF2aWdhdGUgYmFja3dhcmRzIHRocm91Z2ggdGhlIEluQXBwQnJvd3NlcidzIGhpc3RvcnkuXG4gICAqIElmIHRoZXJlIGlzIG5vIHByZXZpb3VzIHBhZ2UsIHRoZSBJbkFwcEJyb3dzZXIgd2lsbCBjbG9zZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgeWVzLCBzbyB5b3UgbXVzdCBzZXQgaXQgdG8gbm8gaWYgeW91IHdhbnQgdGhlIGJhY2sgYnV0dG9uIHRvIHNpbXBseSBjbG9zZSB0aGUgSW5BcHBCcm93c2VyLlxuICAgKi9cbiAgaGFyZHdhcmViYWNrPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogU2V0IHRvIHllcyB0byBjcmVhdGUgdGhlIGJyb3dzZXIgYW5kIGxvYWQgdGhlIHBhZ2UsIGJ1dCBub3Qgc2hvdyBpdC4gVGhlIGxvYWRzdG9wIGV2ZW50IGZpcmVzIHdoZW4gbG9hZGluZyBpcyBjb21wbGV0ZS5cbiAgICogT21pdCBvciBzZXQgdG8gbm8gKGRlZmF1bHQpIHRvIGhhdmUgdGhlIGJyb3dzZXIgb3BlbiBhbmQgbG9hZCBub3JtYWxseS5cbiAgICovXG4gIGhpZGRlbj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8geWVzIHRvIGhpZGUgdGhlIG5hdmlnYXRpb24gYnV0dG9ucyBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLlxuICAgKiAoaU9TKSBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIHRvb2xiYXIgbmF2aWdhdGlvbiBidXR0b25zIG9uIG9yIG9mZiAoZGVmYXVsdHMgdG8gbm8pLiBPbmx5IGFwcGxpY2FibGUgaWYgdG9vbGJhciBpcyBub3QgZGlzYWJsZWQuXG4gICAqL1xuICBoaWRlbmF2aWdhdGlvbmJ1dHRvbnM/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAgKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIGNoYW5nZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbG9hZGluZyBpbmRpY2F0b3IgKGRlZmF1bHRzIHRvIG5vKS5cbiAgICovXG4gIGhpZGVzcGlubmVyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQpIFNldCB0byB5ZXMgdG8gaGlkZSB0aGUgdXJsIGJhciBvbiB0aGUgbG9jYXRpb24gdG9vbGJhciwgb25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIG5vLiAqL1xuICBoaWRldXJsYmFyPzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIG9yIG5vIHRvIG9wZW4gdGhlIGtleWJvYXJkIHdoZW4gZm9ybSBlbGVtZW50cyByZWNlaXZlIGZvY3VzIHZpYSBKYXZhU2NyaXB0J3MgZm9jdXMoKSBjYWxsIChkZWZhdWx0cyB0byB5ZXMpLiAqL1xuICBrZXlib2FyZERpc3BsYXlSZXF1aXJlc1VzZXJBY3Rpb24/OiAneWVzJyB8ICdubyc7XG4gIC8qKlxuICAgKiAoQW5kcm9pZCkgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIG5hdmlnYXRpb24gYnV0dG9ucyBnbyB0byB0aGUgbGVmdCBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSByaWdodC5cbiAgICogKGlPUykgU2V0IHRvIHllcyB0byBzd2FwIHBvc2l0aW9ucyBvZiB0aGUgbmF2aWdhdGlvbiBidXR0b25zIGFuZCB0aGUgY2xvc2UgYnV0dG9uLiBTcGVjaWZpY2FsbHksIGNsb3NlIGJ1dHRvbiBnb2VzIHRvIHRoZSByaWdodCBhbmQgbmF2aWdhdGlvbiBidXR0b25zIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgbGVmdHRvcmlnaHQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiBTZXQgdG8geWVzIG9yIG5vIHRvIHR1cm4gdGhlIEluQXBwQnJvd3NlcidzIGxvY2F0aW9uIGJhciBvbiBvciBvZmYuICovXG4gIGxvY2F0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogIFNldCB0byB5ZXMgdG8gcHJldmVudCBIVE1MNSBhdWRpbyBvciB2aWRlbyBmcm9tIGF1dG9wbGF5aW5nIChkZWZhdWx0cyB0byBubykuXG4gICAqL1xuICBtZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyQWN0aW9uPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogKEFuZHJvaWQpIFNldCB0byBhIHZhbGlkIGhleCBjb2xvciBzdHJpbmcsIGZvciBleGFtcGxlOiAjMDBmZjAwLCBhbmQgaXQgd2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIGJvdGggbmF2aWdhdGlvbiBidXR0b25zIGZyb20gZGVmYXVsdC4gT25seSBoYXMgZWZmZWN0IGlmIHVzZXIgaGFzIGxvY2F0aW9uIHNldCB0byB5ZXMgYW5kIG5vdCBoaWRlbmF2aWdhdGlvbmJ1dHRvbnMgc2V0IHRvIHllcy5cbiAgICogKGlPUykgU2V0IGFzIGEgdmFsaWQgaGV4IGNvbG9yIHN0cmluZywgZm9yIGV4YW1wbGU6ICMwMGZmMDAsIHRvIGNoYW5nZSBmcm9tIHRoZSBkZWZhdWx0IGNvbG9yLiBPbmx5IGFwcGxpY2FibGUgaWYgbmF2aWdhdGlvbiBidXR0b25zIGFyZSB2aXNpYmxlLlxuICAgKi9cbiAgbmF2aWdhdGlvbmJ1dHRvbmNvbG9yPzogc3RyaW5nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8gcGFnZXNoZWV0LCBmb3Jtc2hlZXQgb3IgZnVsbHNjcmVlbiB0byBzZXQgdGhlIHByZXNlbnRhdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gZnVsbHNjcmVlbikuICovXG4gIHByZXNlbnRhdGlvbnN0eWxlPzogJ3BhZ2VzaGVldCcgfCAnZm9ybXNoZWV0JyB8ICdmdWxsc2NyZWVuJztcbiAgLyoqIChBbmRyb2lkIE9ubHkpIFNldCB0byB5ZXMgdG8gbWFrZSBJbkFwcEJyb3dzZXIgV2ViVmlldyB0byBwYXVzZS9yZXN1bWUgd2l0aCB0aGUgYXBwIHRvIHN0b3AgYmFja2dyb3VuZCBhdWRpbyAodGhpcyBtYXkgYmUgcmVxdWlyZWQgdG8gYXZvaWQgR29vZ2xlIFBsYXkgaXNzdWVzKSAqL1xuICBzaG91bGRQYXVzZU9uU3VzcGVuZD86ICd5ZXMnIHwgJ25vJztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHllcyBvciBubyB0byB3YWl0IHVudGlsIGFsbCBuZXcgdmlldyBjb250ZW50IGlzIHJlY2VpdmVkIGJlZm9yZSBiZWluZyByZW5kZXJlZCAoZGVmYXVsdHMgdG8gbm8pLiAqL1xuICBzdXBwcmVzc2VzSW5jcmVtZW50YWxSZW5kZXJpbmc/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gdHVybiB0aGUgdG9vbGJhciBvbiBvciBvZmYgZm9yIHRoZSBJbkFwcEJyb3dzZXIgKGRlZmF1bHRzIHRvIHllcykgKi9cbiAgdG9vbGJhcj86ICd5ZXMnIHwgJ25vJztcbiAgLyoqXG4gICAqIChBbmRyb2lkKSBTZXQgdG8gYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgYW5kIGl0IHdpbGwgY2hhbmdlIHRoZSBjb2xvciB0aGUgdG9vbGJhciBmcm9tIGRlZmF1bHQuIE9ubHkgaGFzIGVmZmVjdCBpZiB1c2VyIGhhcyBsb2NhdGlvbiBzZXQgdG8geWVzLlxuICAgKiAoaU9TKSBTZXQgYXMgYSB2YWxpZCBoZXggY29sb3Igc3RyaW5nLCBmb3IgZXhhbXBsZTogIzAwZmYwMCwgdG8gY2hhbmdlIGZyb20gdGhlIGRlZmF1bHQgY29sb3Igb2YgdGhlIHRvb2xiYXIuIE9ubHkgYXBwbGljYWJsZSBpZiB0b29sYmFyIGlzIG5vdCBkaXNhYmxlZC5cbiAgICovXG4gIHRvb2xiYXJjb2xvcj86IHN0cmluZztcbiAgLyoqIChpT1MgT25seSkgU2V0IHRvIHRvcCBvciBib3R0b20gKGRlZmF1bHQgaXMgYm90dG9tKS4gQ2F1c2VzIHRoZSB0b29sYmFyIHRvIGJlIGF0IHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB3aW5kb3cuICovXG4gIHRvb2xiYXJwb3NpdGlvbj86ICd0b3AnIHwgJ2JvdHRvbSc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byB5ZXMgb3Igbm8gdG8gbWFrZSB0aGUgdG9vbGJhciB0cmFuc2x1Y2VudChzZW1pLXRyYW5zcGFyZW50KSAoZGVmYXVsdHMgdG8geWVzKS4gT25seSBhcHBsaWNhYmxlIGlmIHRvb2xiYXIgaXMgbm90IGRpc2FibGVkLiAqL1xuICB0b29sYmFydHJhbnNsdWNlbnQ/OiAneWVzJyB8ICdubyc7XG4gIC8qKiAoaU9TIE9ubHkpIFNldCB0byBmbGlwaG9yaXpvbnRhbCwgY3Jvc3NkaXNzb2x2ZSBvciBjb3ZlcnZlcnRpY2FsIHRvIHNldCB0aGUgdHJhbnNpdGlvbiBzdHlsZSAoZGVmYXVsdHMgdG8gY292ZXJ2ZXJ0aWNhbCkuICovXG4gIHRyYW5zaXRpb25zdHlsZT86ICdmbGlwaG9yaXpvbnRhbCcgfCAnY3Jvc3NkaXNzb2x2ZScgfCAnY292ZXJ2ZXJ0aWNhbCc7XG4gIC8qKiAoQW5kcm9pZCBPbmx5KSBTZXRzIHdoZXRoZXIgdGhlIFdlYlZpZXcgc2hvdWxkIGVuYWJsZSBzdXBwb3J0IGZvciB0aGUgXCJ2aWV3cG9ydFwiIEhUTUwgbWV0YSB0YWcgb3Igc2hvdWxkIHVzZSBhIHdpZGUgdmlld3BvcnQuIFdoZW4gdGhlIHZhbHVlIG9mIHRoZSBzZXR0aW5nIGlzIG5vLCB0aGUgbGF5b3V0IHdpZHRoIGlzIGFsd2F5cyBzZXQgdG8gdGhlIHdpZHRoIG9mIHRoZSBXZWJWaWV3IGNvbnRyb2wgaW4gZGV2aWNlLWluZGVwZW5kZW50IChDU1MpIHBpeGVscy4gV2hlbiB0aGUgdmFsdWUgaXMgeWVzIGFuZCB0aGUgcGFnZSBjb250YWlucyB0aGUgdmlld3BvcnQgbWV0YSB0YWcsIHRoZSB2YWx1ZSBvZiB0aGUgd2lkdGggc3BlY2lmaWVkIGluIHRoZSB0YWcgaXMgdXNlZC4gSWYgdGhlIHBhZ2UgZG9lcyBub3QgY29udGFpbiB0aGUgdGFnIG9yIGRvZXMgbm90IHByb3ZpZGUgYSB3aWR0aCwgdGhlbiBhIHdpZGUgdmlld3BvcnQgd2lsbCBiZSB1c2VkLiAoZGVmYXVsdHMgdG8geWVzKS4gKi9cbiAgdXNlV2lkZVZpZXdQb3J0PzogJ3llcycgfCAnbm8nO1xuICAvKiogKGlPUyBPbmx5KSBTZXQgdG8geWVzIHRvIHVzZSBXS1dlYlZpZXcgZW5naW5lIGZvciB0aGUgSW5hcHBCcm93c2VyLiBPbWl0IG9yIHNldCB0byBubyAoZGVmYXVsdCkgdG8gdXNlIFVJV2ViVmlldy4gKi9cbiAgdXNld2t3ZWJ2aWV3PzogJ3llcycgfCAnbm8nO1xuICAvKiogKEFuZHJvaWQgT25seSkgU2V0IHRvIHllcyB0byBzaG93IEFuZHJvaWQgYnJvd3NlcidzIHpvb20gY29udHJvbHMsIHNldCB0byBubyB0byBoaWRlIHRoZW0uIERlZmF1bHQgdmFsdWUgaXMgeWVzLiAqL1xuICB6b29tPzogJ3llcycgfCAnbm8nO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBJbkFwcEJyb3dzZXJFdmVudFR5cGUgPSAnbG9hZHN0YXJ0JyB8ICdsb2Fkc3RvcCcgfCAnbG9hZGVycm9yJyB8ICdleGl0JyB8ICdiZWZvcmVsb2FkJyB8ICdtZXNzYWdlJyB8ICdjdXN0b21zY2hlbWUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwQnJvd3NlckV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICAvKiogdGhlIGV2ZW50IG5hbWUgKi9cbiAgdHlwZTogc3RyaW5nO1xuICAvKiogdGhlIFVSTCB0aGF0IHdhcyBsb2FkZWQuICovXG4gIHVybDogc3RyaW5nO1xuICAvKiogdGhlIGVycm9yIGNvZGUsIG9ubHkgaW4gdGhlIGNhc2Ugb2YgbG9hZGVycm9yLiAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiB0aGUgZXJyb3IgbWVzc2FnZSwgb25seSBpbiB0aGUgY2FzZSBvZiBsb2FkZXJyb3IuICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgLyoqIHRoZSBwb3N0TWVzc2FnZSBkYXRhLCBvbmx5IGluIHRoZSBjYXNlIG9mIG1lc3NhZ2UuICovXG4gIGRhdGE6IGFueTtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbkFwcEJyb3dzZXJPYmplY3Qge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBPcGVucyBhIFVSTCBpbiBhIG5ldyBJbkFwcEJyb3dzZXIgaW5zdGFuY2UsIHRoZSBjdXJyZW50IGJyb3dzZXIgaW5zdGFuY2UsIG9yIHRoZSBzeXN0ZW0gYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldD1cInNlbGZcIl0gIFRoZSB0YXJnZXQgaW4gd2hpY2ggdG8gbG9hZCB0aGUgVVJMLCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byBfc2VsZi5cbiAgICogICAgICAgICAgICAgICAgIF9zZWxmOiBPcGVucyBpbiB0aGUgV2ViVmlldyBpZiB0aGUgVVJMIGlzIGluIHRoZSB3aGl0ZSBsaXN0LCBvdGhlcndpc2UgaXQgb3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9ibGFuazogT3BlbnMgaW4gdGhlIEluQXBwQnJvd3Nlci5cbiAgICogICAgICAgICAgICAgICAgIF9zeXN0ZW06IE9wZW5zIGluIHRoZSBzeXN0ZW0ncyB3ZWIgYnJvd3Nlci5cbiAgICogQHBhcmFtIHtzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXJnZXQ/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHN0cmluZyB8IEluQXBwQnJvd3Nlck9wdGlvbnNcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmtleXMob3B0aW9ucylcbiAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgKGtleTogc3RyaW5nKSA9PiBgJHtrZXl9PSR7KG9wdGlvbnMgYXMgSW5BcHBCcm93c2VyT3B0aW9ucylba2V5XX1gXG4gICAgICAgICAgKVxuICAgICAgICAgIC5qb2luKCcsJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gY29yZG92YS5JbkFwcEJyb3dzZXIub3Blbih1cmwsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05hdGl2ZTogSW5BcHBCcm93c2VyIGlzIG5vdCBpbnN0YWxsZWQgb3IgeW91IGFyZSBydW5uaW5nIG9uIGEgYnJvd3Nlci4gRmFsbGluZyBiYWNrIHRvIHdpbmRvdy5vcGVuLidcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBiZSBjYWxsZWQgYWZ0ZXIgdGhlIFwiYmVmb3JlbG9hZFwiIGV2ZW50IHRvIGNvbnRpbnVlIHRoZSBzY3JpcHRcbiAgICogQHBhcmFtIHN0clVybCB7U3RyaW5nfSBUaGUgVVJMIHRoZSBJbkFwcEJyb3dzZXIgc2hvdWxkIG5hdmlnYXRlIHRvLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgX2xvYWRBZnRlckJlZm9yZWxvYWQoc3RyVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIGFuIEluQXBwQnJvd3NlciB3aW5kb3cgdGhhdCB3YXMgb3BlbmVkIGhpZGRlbi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSB2aXNpYmxlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZXMgYW4gSW5BcHBCcm93c2VyIHdpbmRvdyB0aGF0IGlzIGN1cnJlbnRseSBzaG93bi4gQ2FsbGluZyB0aGlzIGhhcyBubyBlZmZlY3RcbiAgICogaWYgdGhlIEluQXBwQnJvd3NlciB3YXMgYWxyZWFkeSBoaWRkZW4uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogSW5qZWN0cyBKYXZhU2NyaXB0IGNvZGUgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIHNjcmlwdCB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZXhlY3V0ZVNjcmlwdChzY3JpcHQ6IHsgZmlsZT86IHN0cmluZzsgY29kZT86IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0cyBDU1MgaW50byB0aGUgSW5BcHBCcm93c2VyIHdpbmRvdy5cbiAgICogQHBhcmFtIGNzcyB7T2JqZWN0fSBEZXRhaWxzIG9mIHRoZSBzY3JpcHQgdG8gcnVuLCBzcGVjaWZ5aW5nIGVpdGhlciBhIGZpbGUgb3IgY29kZSBrZXkuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgaW5zZXJ0Q1NTKGNzczogeyBmaWxlPzogc3RyaW5nOyBjb2RlPzogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7SW5BcHBCcm93c2VyRXZlbnRUeXBlfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogSW5BcHBCcm93c2VyRXZlbnRUeXBlKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIG1ldGhvZCB0aGF0IGFsbG93cyB5b3UgdG8gbGlzdGVuIHRvIGV2ZW50cyBoYXBwZW5pbmcgaW4gdGhlIGJyb3dzZXIuXG4gICAqIEBwYXJhbSBldmVudCB7c3RyaW5nfSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD59IFJldHVybnMgYmFjayBhbiBvYnNlcnZhYmxlIHRoYXQgd2lsbCBsaXN0ZW4gdG8gdGhlIGV2ZW50IG9uIHN1YnNjcmliZSwgYW5kIHdpbGwgc3RvcCBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50IG9uIHVuc3Vic2NyaWJlLlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxJbkFwcEJyb3dzZXJFdmVudD4oXG4gICAgICAob2JzZXJ2ZXI6IE9ic2VydmVyPEluQXBwQnJvd3NlckV2ZW50PikgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcilcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEBuYW1lIEluIEFwcCBCcm93c2VyXG4gKiBAZGVzY3JpcHRpb24gTGF1bmNoZXMgaW4gYXBwIEJyb3dzZXJcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgSW5BcHBCcm93c2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaWFiOiBJbkFwcEJyb3dzZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYnJvd3NlciA9IHRoaXMuaWFiLmNyZWF0ZSgnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vJyk7XG4gKlxuICogYnJvd3Nlci5leGVjdXRlU2NyaXB0KC4uLik7XG4gKlxuICogYnJvd3Nlci5pbnNlcnRDU1MoLi4uKTtcbiAqIGJyb3dzZXIub24oJ2xvYWRzdG9wJykuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAqICAgIGJyb3dzZXIuaW5zZXJ0Q1NTKHsgY29kZTogXCJib2R5e2NvbG9yOiByZWQ7XCIgfSk7XG4gKiB9KTtcbiAqXG4gKiBicm93c2VyLmNsb3NlKCk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogSW5BcHBCcm93c2VyT2JqZWN0XG4gKiBAaW50ZXJmYWNlc1xuICogSW5BcHBCcm93c2VyRXZlbnRcbiAqIEluQXBwQnJvd3Nlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcEJyb3dzZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbmFwcGJyb3dzZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLkluQXBwQnJvd3NlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWluYXBwYnJvd3NlcicsXG4gIHBsYXRmb3JtczogWydBbWF6b25GaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwQnJvd3NlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIE9wZW5zIGEgVVJMIGluIGEgbmV3IEluQXBwQnJvd3NlciBpbnN0YW5jZSwgdGhlIGN1cnJlbnQgYnJvd3NlciBpbnN0YW5jZSwgb3IgdGhlIHN5c3RlbSBicm93c2VyLlxuICAgKiBAcGFyYW0gIHVybCB7c3RyaW5nfSAgICAgVGhlIFVSTCB0byBsb2FkLlxuICAgKiBAcGFyYW0gIHRhcmdldCB7c3RyaW5nfSAgVGhlIHRhcmdldCBpbiB3aGljaCB0byBsb2FkIHRoZSBVUkwsIGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIF9zZWxmLlxuICAgKiBAcGFyYW0gIG9wdGlvbnMge3N0cmluZ30gT3B0aW9ucyBmb3IgdGhlIEluQXBwQnJvd3Nlci4gT3B0aW9uYWwsIGRlZmF1bHRpbmcgdG86IGxvY2F0aW9uPXllcy5cbiAgICogICAgICAgICAgICAgICAgIFRoZSBvcHRpb25zIHN0cmluZyBtdXN0IG5vdCBjb250YWluIGFueSBibGFuayBzcGFjZSwgYW5kIGVhY2ggZmVhdHVyZSdzXG4gICAqICAgICAgICAgICAgICAgICBuYW1lL3ZhbHVlIHBhaXJzIG11c3QgYmUgc2VwYXJhdGVkIGJ5IGEgY29tbWEuIEZlYXR1cmUgbmFtZXMgYXJlIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEByZXR1cm5zIHtJbkFwcEJyb3dzZXJPYmplY3R9XG4gICAqL1xuICBjcmVhdGUoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgdGFyZ2V0Pzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBzdHJpbmcgfCBJbkFwcEJyb3dzZXJPcHRpb25zXG4gICk6IEluQXBwQnJvd3Nlck9iamVjdCB7XG4gICAgcmV0dXJuIG5ldyBJbkFwcEJyb3dzZXJPYmplY3QodXJsLCB0YXJnZXQsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=

    /***/

  },

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


    __webpack_exports__["default"] = "<div class=\"biblestudy-container\">\n\n  <ng-container *ngFor=\"let item of data; let i = index;\">\n    <div class=\"animated fadeInUp faster\" [ngStyle]=\"{'animation-delay': (i * (110 + (i / 100))) + 'ms'}\">\n      <ion-row>\n        <img [src]=\"getImage(item.image.url)\" />\n      </ion-row>\n      <ion-row>\n        <ion-card class=\"container-card\">\n          <ion-card-content class=\"container-content\">\n            <ion-row>\n              <ion-col [size]=\"7\">\n                <h3>{{ item.title }}</h3>\n                <p>Salvation</p>\n              </ion-col>\n              <ion-col [size]=\"5\">\n                <ion-button (click)=\"viewFile(item)\"><ion-icon name=\"cloud-download-outline\"></ion-icon></ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-row>\n    </div>\n  </ng-container>\n  \n</div>";
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
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var BiblestudyComponent = /*#__PURE__*/function () {
      function BiblestudyComponent(bibleStudyService, helperService, inAppBrowser) {
        _classCallCheck(this, BiblestudyComponent);

        this.bibleStudyService = bibleStudyService;
        this.helperService = helperService;
        this.inAppBrowser = inAppBrowser;
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
          var options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes'
          };
          console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].IMG_URL + url);
          var browser = this.inAppBrowser.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].IMG_URL + url, '_blank', options);
        }
      }]);

      return BiblestudyComponent;
    }();

    BiblestudyComponent.ctorParameters = function () {
      return [{
        type: _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_2__["BiblestudyService"]
      }, {
        type: src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
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
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_biblestudy_service__WEBPACK_IMPORTED_MODULE_2__["BiblestudyService"], src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], BiblestudyComponent);
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
          var _this2 = this;

          if (this.currentPlaying && this.isElementInView(this.currentPlaying)) {
            return;
          }

          if (this.currentPlaying && !this.isElementInView(this.currentPlaying)) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
          }

          this.videoPlayers.forEach(function (player) {
            var nativeElement = player.nativeElement;

            var inView = _this2.isElementInView(nativeElement);

            if (_this2.currentPlaying) {
              return;
            }

            if (inView) {
              _this2.currentPlaying = nativeElement;
              _this2.currentPlaying.muted = true;

              _this2.currentPlaying.play();
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
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var ConnectPageModule = function ConnectPageModule() {
      _classCallCheck(this, ConnectPageModule);
    };

    ConnectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      providers: [_services_social_service__WEBPACK_IMPORTED_MODULE_11__["SocialService"], _services_biblestudy_service__WEBPACK_IMPORTED_MODULE_12__["BiblestudyService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_13__["InAppBrowser"]],
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
          var _this3 = this;

          this.socialService.fetchFBFeed().subscribe(function (val) {
            _this3.fbFeedData = val['posts'];
          });
          this.bibleStudyService.fetchAllStudies().subscribe(function (val) {
            _this3.bStudies = val;
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
          var options = {
            location: 'no',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes'
          };
          console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].IMG_URL + url);
          var browser = this.inAppBrowser.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].IMG_URL + url, '_blank');
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