function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./node_modules/ion2-calendar/dist/calendar.controller.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/calendar.controller.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistCalendarControllerJs(module, exports, __webpack_require__) {
    "use strict";

    var __assign = this && this.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var angular_1 = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var calendar_modal_1 = __webpack_require__(
    /*! ./components/calendar.modal */
    "./node_modules/ion2-calendar/dist/components/calendar.modal.js");

    var calendar_service_1 = __webpack_require__(
    /*! ./services/calendar.service */
    "./node_modules/ion2-calendar/dist/services/calendar.service.js");

    var CalendarController =
    /** @class */
    function () {
      function CalendarController(modalCtrl, calSvc) {
        this.modalCtrl = modalCtrl;
        this.calSvc = calSvc;
      }
      /**
       * @deprecated
       * @param {CalendarModalOptions} calendarOptions
       * @param {ModalOptions} modalOptions
       * @returns {any}
       */


      CalendarController.prototype.openCalendar = function (calendarOptions, modalOptions) {
        if (modalOptions === void 0) {
          modalOptions = {};
        }

        var options = this.calSvc.safeOpt(calendarOptions);
        return this.modalCtrl.create(__assign({
          component: calendar_modal_1.CalendarModal,
          componentProps: {
            options: options
          }
        }, modalOptions)).then(function (calendarModal) {
          calendarModal.present();
          return calendarModal.onDidDismiss().then(function (event) {
            return event.data ? Promise.resolve(event.data) : Promise.reject('cancelled');
          });
        });
      };

      CalendarController = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [angular_1.ModalController, calendar_service_1.CalendarService])], CalendarController);
      return CalendarController;
    }();

    exports.CalendarController = CalendarController; //# sourceMappingURL=calendar.controller.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/calendar.model.js":
  /*!***********************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/calendar.model.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistCalendarModelJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var CalendarMonth =
    /** @class */
    function () {
      function CalendarMonth() {}

      return CalendarMonth;
    }();

    exports.CalendarMonth = CalendarMonth;

    var CalendarResult =
    /** @class */
    function () {
      function CalendarResult() {}

      return CalendarResult;
    }();

    exports.CalendarResult = CalendarResult;

    var CalendarComponentMonthChange =
    /** @class */
    function () {
      function CalendarComponentMonthChange() {}

      return CalendarComponentMonthChange;
    }();

    exports.CalendarComponentMonthChange = CalendarComponentMonthChange; //# sourceMappingURL=calendar.model.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/calendar.module.js":
  /*!************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/calendar.module.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistCalendarModuleJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var angular_1 = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var calendar_controller_1 = __webpack_require__(
    /*! ./calendar.controller */
    "./node_modules/ion2-calendar/dist/calendar.controller.js");

    var calendar_service_1 = __webpack_require__(
    /*! ./services/calendar.service */
    "./node_modules/ion2-calendar/dist/services/calendar.service.js");

    var index_1 = __webpack_require__(
    /*! ./components/index */
    "./node_modules/ion2-calendar/dist/components/index.js");

    function calendarController(modalCtrl, calSvc) {
      return new calendar_controller_1.CalendarController(modalCtrl, calSvc);
    }

    exports.calendarController = calendarController;

    var CalendarModule =
    /** @class */
    function () {
      function CalendarModule() {}

      CalendarModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule, angular_1.IonicModule, forms_1.FormsModule],
        declarations: index_1.CALENDAR_COMPONENTS,
        exports: index_1.CALENDAR_COMPONENTS,
        entryComponents: index_1.CALENDAR_COMPONENTS,
        providers: [calendar_service_1.CalendarService, {
          provide: calendar_controller_1.CalendarController,
          useFactory: calendarController,
          deps: [angular_1.ModalController, calendar_service_1.CalendarService]
        }],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
      })], CalendarModule);
      return CalendarModule;
    }();

    exports.CalendarModule = CalendarModule; //# sourceMappingURL=calendar.module.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/calendar-week.component.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/calendar-week.component.js ***!
    \*******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsCalendarWeekComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    var CalendarWeekComponent =
    /** @class */
    function () {
      function CalendarWeekComponent() {
        this._weekArray = config_1.defaults.WEEKS_FORMAT;
        this._displayWeekArray = this._weekArray;
        this._weekStart = 0;
        this.color = config_1.defaults.COLOR;
      }

      Object.defineProperty(CalendarWeekComponent.prototype, "weekArray", {
        set: function set(value) {
          if (value && value.length === 7) {
            this._weekArray = value.slice();
            this.adjustSort();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CalendarWeekComponent.prototype, "weekStart", {
        set: function set(value) {
          if (value === 0 || value === 1) {
            this._weekStart = value;
            this.adjustSort();
          }
        },
        enumerable: true,
        configurable: true
      });

      CalendarWeekComponent.prototype.adjustSort = function () {
        if (this._weekStart === 1) {
          var cacheWeekArray = this._weekArray.slice();

          cacheWeekArray.push(cacheWeekArray.shift());
          this._displayWeekArray = cacheWeekArray.slice();
        } else if (this._weekStart === 0) {
          this._displayWeekArray = this._weekArray.slice();
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", String)], CalendarWeekComponent.prototype, "color", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], CalendarWeekComponent.prototype, "weekArray", null);

      __decorate([core_1.Input(), __metadata("design:type", Number), __metadata("design:paramtypes", [Number])], CalendarWeekComponent.prototype, "weekStart", null);

      CalendarWeekComponent = __decorate([core_1.Component({
        selector: 'ion-calendar-week',
        template: "\n    <ion-toolbar [class]=\"'week-toolbar ' + color\" no-border-top>\n      <ul [class]=\"'week-title ' + color\">\n        <li *ngFor=\"let w of _displayWeekArray\">{{ w }}</li>\n      </ul>\n    </ion-toolbar>\n  ",
        styles: [":host .toolbar-background-md,\n:host .toolbar-background-ios {\n  background: transparent; }\n\n:host .week-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-top: 0; }\n  :host .week-toolbar.primary {\n    --background: var(--ion-color-primary); }\n  :host .week-toolbar.secondary {\n    --background: var(--ion-color-secondary); }\n  :host .week-toolbar.danger {\n    --background: var(--ion-color-danger); }\n  :host .week-toolbar.dark {\n    --background: var(--ion-color-dark); }\n  :host .week-toolbar.light {\n    --background: var(--ion-color-light); }\n  :host .week-toolbar.transparent {\n    --background: transparent; }\n  :host .week-toolbar.toolbar-md {\n    min-height: 44px; }\n\n:host .week-title {\n  margin: 0;\n  height: 44px;\n  width: 100%;\n  padding: 15px 0;\n  color: #fff;\n  font-size: 0.9em; }\n  :host .week-title.light, :host .week-title.transparent {\n    color: #9e9e9e; }\n  :host .week-title li {\n    list-style-type: none;\n    display: block;\n    float: left;\n    width: 14%;\n    text-align: center; }\n  :host .week-title li:nth-of-type(7n),\n  :host .week-title li:nth-of-type(7n + 1) {\n    width: 15%; }\n"]
      }), __metadata("design:paramtypes", [])], CalendarWeekComponent);
      return CalendarWeekComponent;
    }();

    exports.CalendarWeekComponent = CalendarWeekComponent; //# sourceMappingURL=calendar-week.component.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/calendar.component.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/calendar.component.js ***!
    \**************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsCalendarComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var calendar_service_1 = __webpack_require__(
    /*! ../services/calendar.service */
    "./node_modules/ion2-calendar/dist/services/calendar.service.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var moment = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    exports.ION_CAL_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return CalendarComponent;
      }),
      multi: true
    };

    var CalendarComponent =
    /** @class */
    function () {
      function CalendarComponent(calSvc) {
        this.calSvc = calSvc;
        this._view = 'days';
        this._calendarMonthValue = [null, null];
        this._showToggleButtons = true;
        this._showMonthPicker = true;
        this.format = config_1.defaults.DATE_FORMAT;
        this.type = 'string';
        this.readonly = false;
        this.change = new core_1.EventEmitter();
        this.monthChange = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.selectStart = new core_1.EventEmitter();
        this.selectEnd = new core_1.EventEmitter();

        this._onChanged = function () {};

        this._onTouched = function () {};
      }

      Object.defineProperty(CalendarComponent.prototype, "showToggleButtons", {
        get: function get() {
          return this._showToggleButtons;
        },
        set: function set(value) {
          this._showToggleButtons = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CalendarComponent.prototype, "showMonthPicker", {
        get: function get() {
          return this._showMonthPicker;
        },
        set: function set(value) {
          this._showMonthPicker = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(CalendarComponent.prototype, "options", {
        get: function get() {
          return this._options;
        },
        set: function set(value) {
          this._options = value;
          this.initOpt();

          if (this.monthOpt && this.monthOpt.original) {
            this.monthOpt = this.createMonth(this.monthOpt.original.time);
          }
        },
        enumerable: true,
        configurable: true
      });

      CalendarComponent.prototype.ngOnInit = function () {
        this.initOpt();
        this.monthOpt = this.createMonth(new Date().getTime());
      };

      CalendarComponent.prototype.getViewDate = function () {
        return this._handleType(this.monthOpt.original.time);
      };

      CalendarComponent.prototype.setViewDate = function (value) {
        this.monthOpt = this.createMonth(this._payloadToTimeNumber(value));
      };

      CalendarComponent.prototype.switchView = function () {
        this._view = this._view === 'days' ? 'month' : 'days';
      };

      CalendarComponent.prototype.prev = function () {
        if (this._view === 'days') {
          this.backMonth();
        } else {
          this.prevYear();
        }
      };

      CalendarComponent.prototype.next = function () {
        if (this._view === 'days') {
          this.nextMonth();
        } else {
          this.nextYear();
        }
      };

      CalendarComponent.prototype.prevYear = function () {
        if (moment(this.monthOpt.original.time).year() === 1970) return;
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'year').valueOf();
        this.monthOpt = this.createMonth(backTime);
      };

      CalendarComponent.prototype.nextYear = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'year').valueOf();
        this.monthOpt = this.createMonth(nextTime);
      };

      CalendarComponent.prototype.nextMonth = function () {
        var nextTime = moment(this.monthOpt.original.time).add(1, 'months').valueOf();
        this.monthChange.emit({
          oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
          newMonth: this.calSvc.multiFormat(nextTime)
        });
        this.monthOpt = this.createMonth(nextTime);
      };

      CalendarComponent.prototype.canNext = function () {
        if (!this._d.to || this._view !== 'days') return true;
        return this.monthOpt.original.time < moment(this._d.to).valueOf();
      };

      CalendarComponent.prototype.backMonth = function () {
        var backTime = moment(this.monthOpt.original.time).subtract(1, 'months').valueOf();
        this.monthChange.emit({
          oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
          newMonth: this.calSvc.multiFormat(backTime)
        });
        this.monthOpt = this.createMonth(backTime);
      };

      CalendarComponent.prototype.canBack = function () {
        if (!this._d.from || this._view !== 'days') return true;
        return this.monthOpt.original.time > moment(this._d.from).valueOf();
      };

      CalendarComponent.prototype.monthOnSelect = function (month) {
        this._view = 'days';
        var newMonth = moment(this.monthOpt.original.time).month(month).valueOf();
        this.monthChange.emit({
          oldMonth: this.calSvc.multiFormat(this.monthOpt.original.time),
          newMonth: this.calSvc.multiFormat(newMonth)
        });
        this.monthOpt = this.createMonth(newMonth);
      };

      CalendarComponent.prototype.onChanged = function ($event) {
        switch (this._d.pickMode) {
          case config_1.pickModes.SINGLE:
            var date = this._handleType($event[0].time);

            this._onChanged(date);

            this.change.emit(date);
            break;

          case config_1.pickModes.RANGE:
            if ($event[0] && $event[1]) {
              var rangeDate = {
                from: this._handleType($event[0].time),
                to: this._handleType($event[1].time)
              };

              this._onChanged(rangeDate);

              this.change.emit(rangeDate);
            }

            break;

          case config_1.pickModes.MULTI:
            var dates = [];

            for (var i = 0; i < $event.length; i++) {
              if ($event[i] && $event[i].time) {
                dates.push(this._handleType($event[i].time));
              }
            }

            this._onChanged(dates);

            this.change.emit(dates);
            break;

          default:
        }
      };

      CalendarComponent.prototype.swipeEvent = function ($event) {
        var isNext = $event.deltaX < 0;

        if (isNext && this.canNext()) {
          this.nextMonth();
        } else if (!isNext && this.canBack()) {
          this.backMonth();
        }
      };

      CalendarComponent.prototype._payloadToTimeNumber = function (value) {
        var date;

        if (this.type === 'string') {
          date = moment(value, this.format);
        } else {
          date = moment(value);
        }

        return date.valueOf();
      };

      CalendarComponent.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
      };

      CalendarComponent.prototype.initOpt = function () {
        if (this._options && typeof this._options.showToggleButtons === 'boolean') {
          this.showToggleButtons = this._options.showToggleButtons;
        }

        if (this._options && typeof this._options.showMonthPicker === 'boolean') {
          this.showMonthPicker = this._options.showMonthPicker;

          if (this._view !== 'days' && !this.showMonthPicker) {
            this._view = 'days';
          }
        }

        this._d = this.calSvc.safeOpt(this._options || {});
      };

      CalendarComponent.prototype.createMonth = function (date) {
        return this.calSvc.createMonthsByPeriod(date, 1, this._d)[0];
      };

      CalendarComponent.prototype._createCalendarDay = function (value) {
        return this.calSvc.createCalendarDay(this._payloadToTimeNumber(value), this._d);
      };

      CalendarComponent.prototype._handleType = function (value) {
        var date = moment(value);

        switch (this.type) {
          case 'string':
            return date.format(this.format);

          case 'js-date':
            return date.toDate();

          case 'moment':
            return date;

          case 'time':
            return date.valueOf();

          case 'object':
            return date.toObject();
        }

        return date;
      };

      CalendarComponent.prototype.writeValue = function (obj) {
        this._writeValue(obj);

        if (obj) {
          if (this._calendarMonthValue[0]) {
            this.monthOpt = this.createMonth(this._calendarMonthValue[0].time);
          } else {
            this.monthOpt = this.createMonth(new Date().getTime());
          }
        }
      };

      CalendarComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
      };

      CalendarComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
      };

      CalendarComponent.prototype._writeValue = function (value) {
        var _this = this;

        if (!value) {
          this._calendarMonthValue = [null, null];
          return;
        }

        switch (this._d.pickMode) {
          case 'single':
            this._calendarMonthValue[0] = this._createCalendarDay(value);
            break;

          case 'range':
            if (value.from) {
              this._calendarMonthValue[0] = value.from ? this._createCalendarDay(value.from) : null;
            }

            if (value.to) {
              this._calendarMonthValue[1] = value.to ? this._createCalendarDay(value.to) : null;
            }

            break;

          case 'multi':
            if (Array.isArray(value)) {
              this._calendarMonthValue = value.map(function (e) {
                return _this._createCalendarDay(e);
              });
            } else {
              this._calendarMonthValue = [null, null];
            }

            break;

          default:
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", String)], CalendarComponent.prototype, "format", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], CalendarComponent.prototype, "type", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], CalendarComponent.prototype, "readonly", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "change", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "monthChange", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "select", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "selectStart", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], CalendarComponent.prototype, "selectEnd", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], CalendarComponent.prototype, "options", null);

      CalendarComponent = __decorate([core_1.Component({
        selector: 'ion-calendar',
        providers: [exports.ION_CAL_VALUE_ACCESSOR],
        template: "\n    <div class=\"title\">\n      <ng-template [ngIf]=\"_showMonthPicker\" [ngIfElse]=\"title\">\n        <ion-button type=\"button\"\n                fill=\"clear\"\n                class=\"switch-btn\"\n                (click)=\"switchView()\">\n          {{ _monthFormat(monthOpt.original.time) }}\n          <ion-icon class=\"arrow-dropdown\"\n                    [name]=\"_view === 'days' ? 'md-arrow-dropdown' : 'md-arrow-dropup'\"></ion-icon>\n        </ion-button>\n      </ng-template>\n      <ng-template #title>\n        <div class=\"switch-btn\">\n          {{ _monthFormat(monthOpt.original.time) }}\n        </div>\n      </ng-template>\n      <ng-template [ngIf]=\"_showToggleButtons\">\n        <ion-button type=\"button\" fill=\"clear\" class=\"back\" [disabled]=\"!canBack()\" (click)=\"prev()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" name=\"ios-arrow-back\"></ion-icon>\n        </ion-button>\n        <ion-button type=\"button\" fill=\"clear\" class=\"forward\" [disabled]=\"!canNext()\" (click)=\"next()\">\n          <ion-icon slot=\"icon-only\" size=\"small\" name=\"ios-arrow-forward\"></ion-icon>\n        </ion-button>\n      </ng-template>\n    </div>\n    <ng-template [ngIf]=\"_view === 'days'\" [ngIfElse]=\"monthPicker\">\n      <ion-calendar-week color=\"transparent\"\n                         [weekArray]=\"_d.weekdays\"\n                         [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n      <ion-calendar-month class=\"component-mode\"\n                          [(ngModel)]=\"_calendarMonthValue\"\n                          [month]=\"monthOpt\"\n                          [readonly]=\"readonly\"\n                          (change)=\"onChanged($event)\"\n                          (swipe)=\"swipeEvent($event)\"\n                          (select)=\"select.emit($event)\"\n                          (selectStart)=\"selectStart.emit($event)\"\n                          (selectEnd)=\"selectEnd.emit($event)\"\n                          [pickMode]=\"_d.pickMode\"\n                          [color]=\"_d.color\">\n      </ion-calendar-month>\n    </ng-template>\n\n    <ng-template #monthPicker>\n      <ion-calendar-month-picker [color]=\"_d.color\"\n                                 [monthFormat]=\"_options?.monthPickerFormat\"\n                                 (select)=\"monthOnSelect($event)\"\n                                 [month]=\"monthOpt\">\n      </ion-calendar-month-picker>\n    </ng-template>\n  ",
        styles: [":host {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%; }\n  :host .title {\n    padding: 0 40px 0 40px;\n    overflow: hidden; }\n    :host .title .back,\n    :host .title .forward,\n    :host .title .switch-btn {\n      display: block;\n      position: relative;\n      float: left;\n      min-height: 32px;\n      margin: 0;\n      padding: 0;\n      --padding-start: 0;\n      --padding-end: 0;\n      font-size: 15px; }\n    :host .title .back,\n    :host .title .forward {\n      color: #757575; }\n    :host .title .back {\n      margin-left: -100%;\n      left: -40px;\n      width: 40px; }\n    :host .title .forward {\n      margin-left: -40px;\n      right: -40px;\n      width: 40px; }\n    :host .title .switch-btn {\n      --margin-top: 0;\n      --margin-bottom: 0;\n      --margin-start: auto;\n      --margin-end: auto;\n      width: 100%;\n      text-align: center;\n      line-height: 32px;\n      color: #757575; }\n      :host .title .switch-btn .arrow-dropdown {\n        margin-left: 5px; }\n  :host .days.between .days-btn.is-last,\n  :host .days.between .days-btn.is-first {\n    border-radius: 0; }\n  :host .component-mode .days.startSelection.is-last-wrap::after {\n    border-radius: 0; }\n  :host .component-mode .days.endSelection.is-first-wrap::after {\n    border-radius: 0; }\n"]
      }), __metadata("design:paramtypes", [calendar_service_1.CalendarService])], CalendarComponent);
      return CalendarComponent;
    }();

    exports.CalendarComponent = CalendarComponent; //# sourceMappingURL=calendar.component.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/calendar.modal.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/calendar.modal.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsCalendarModalJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var angular_1 = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var calendar_service_1 = __webpack_require__(
    /*! ../services/calendar.service */
    "./node_modules/ion2-calendar/dist/services/calendar.service.js");

    var moment = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    var NUM_OF_MONTHS_TO_CREATE = 3;

    var CalendarModal =
    /** @class */
    function () {
      function CalendarModal(_renderer, _elementRef, params, modalCtrl, ref, calSvc) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.calSvc = calSvc;
        this.ionPage = true;
        this.datesTemp = [null, null];
        this._scrollLock = true;
      }

      CalendarModal.prototype.ngOnInit = function () {
        this.init();
        this.initDefaultDate();
      };

      CalendarModal.prototype.ngAfterViewInit = function () {
        this.findCssClass();
        if (this._d.canBackwardsSelected) this.backwardsMonth();
        this.scrollToDefaultDate();
      };

      CalendarModal.prototype.init = function () {
        this._d = this.calSvc.safeOpt(this.options);
        this._d.showAdjacentMonthDay = false;
        this.step = this._d.step;

        if (this.step < this.calSvc.DEFAULT_STEP) {
          this.step = this.calSvc.DEFAULT_STEP;
        }

        this.calendarMonths = this.calSvc.createMonthsByPeriod(moment(this._d.from).valueOf(), this.findInitMonthNumber(this._d.defaultScrollTo) + this.step, this._d);
      };

      CalendarModal.prototype.initDefaultDate = function () {
        var _this = this;

        var _a = this._d,
            pickMode = _a.pickMode,
            defaultDate = _a.defaultDate,
            defaultDateRange = _a.defaultDateRange,
            defaultDates = _a.defaultDates;

        switch (pickMode) {
          case config_1.pickModes.SINGLE:
            if (defaultDate) {
              this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDate), this._d);
            }

            break;

          case config_1.pickModes.RANGE:
            if (defaultDateRange) {
              if (defaultDateRange.from) {
                this.datesTemp[0] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.from), this._d);
              }

              if (defaultDateRange.to) {
                this.datesTemp[1] = this.calSvc.createCalendarDay(this._getDayTime(defaultDateRange.to), this._d);
              }
            }

            break;

          case config_1.pickModes.MULTI:
            if (defaultDates && defaultDates.length) {
              this.datesTemp = defaultDates.map(function (e) {
                return _this.calSvc.createCalendarDay(_this._getDayTime(e), _this._d);
              });
            }

            break;

          default:
            this.datesTemp = [null, null];
        }
      };

      CalendarModal.prototype.findCssClass = function () {
        var _this = this;

        var cssClass = this._d.cssClass;

        if (cssClass) {
          cssClass.split(' ').forEach(function (_class) {
            if (_class.trim() !== '') _this._renderer.addClass(_this._elementRef.nativeElement, _class);
          });
        }
      };

      CalendarModal.prototype.onChange = function (data) {
        var _a = this._d,
            pickMode = _a.pickMode,
            autoDone = _a.autoDone;
        this.datesTemp = data;
        this.ref.detectChanges();

        if (pickMode !== config_1.pickModes.MULTI && autoDone && this.canDone()) {
          this.done();
        }

        this.repaintDOM();
      };

      CalendarModal.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel');
      };

      CalendarModal.prototype.done = function () {
        var pickMode = this._d.pickMode;
        this.modalCtrl.dismiss(this.calSvc.wrapResult(this.datesTemp, pickMode), 'done');
      };

      CalendarModal.prototype.canDone = function () {
        if (!Array.isArray(this.datesTemp)) {
          return false;
        }

        var pickMode = this._d.pickMode;

        switch (pickMode) {
          case config_1.pickModes.SINGLE:
            return !!(this.datesTemp[0] && this.datesTemp[0].time);

          case config_1.pickModes.RANGE:
            return !!(this.datesTemp[0] && this.datesTemp[1]) && !!(this.datesTemp[0].time && this.datesTemp[1].time);

          case config_1.pickModes.MULTI:
            return this.datesTemp.length > 0 && this.datesTemp.every(function (e) {
              return !!e && !!e.time;
            });

          default:
            return false;
        }
      };

      CalendarModal.prototype.nextMonth = function (event) {
        var _a;

        var len = this.calendarMonths.length;
        var _final = this.calendarMonths[len - 1];
        var nextTime = moment(_final.original.time).add(NUM_OF_MONTHS_TO_CREATE, 'M').valueOf();
        var rangeEnd = this._d.to ? moment(this._d.to).subtract(1, 'M') : 0;

        if (len <= 0 || rangeEnd !== 0 && moment(_final.original.time).isAfter(rangeEnd)) {
          event.target.disabled = true;
          return;
        }

        (_a = this.calendarMonths).push.apply(_a, this.calSvc.createMonthsByPeriod(nextTime, NUM_OF_MONTHS_TO_CREATE, this._d));

        event.target.complete();
        this.repaintDOM();
      };

      CalendarModal.prototype.backwardsMonth = function () {
        var _a;

        var first = this.calendarMonths[0];

        if (first.original.time <= 0) {
          this._d.canBackwardsSelected = false;
          return;
        }

        var firstTime = this.actualFirstTime = moment(first.original.time).subtract(NUM_OF_MONTHS_TO_CREATE, 'M').valueOf();

        (_a = this.calendarMonths).unshift.apply(_a, this.calSvc.createMonthsByPeriod(firstTime, NUM_OF_MONTHS_TO_CREATE, this._d));

        this.ref.detectChanges();
        this.repaintDOM();
      };

      CalendarModal.prototype.scrollToDate = function (date) {
        var _this = this;

        var defaultDateIndex = this.findInitMonthNumber(date);
        var monthElement = this.monthsEle.nativeElement.children["month-" + defaultDateIndex];
        var domElemReadyWaitTime = 300;
        setTimeout(function () {
          var defaultDateMonth = monthElement ? monthElement.offsetTop : 0;

          if (defaultDateIndex !== -1 && defaultDateMonth !== 0) {
            _this.content.scrollByPoint(0, defaultDateMonth, 128);
          }
        }, domElemReadyWaitTime);
      };

      CalendarModal.prototype.scrollToDefaultDate = function () {
        this.scrollToDate(this._d.defaultScrollTo);
      };

      CalendarModal.prototype.onScroll = function ($event) {
        var _this = this;

        if (!this._d.canBackwardsSelected) return;
        var detail = $event.detail;

        if (detail.scrollTop <= 200 && detail.velocityY < 0 && this._scrollLock) {
          this.content.getScrollElement().then(function (scrollElem) {
            _this._scrollLock = !1;
            var heightBeforeMonthPrepend = scrollElem.scrollHeight;

            _this.backwardsMonth();

            setTimeout(function () {
              var heightAfterMonthPrepend = scrollElem.scrollHeight;

              _this.content.scrollByPoint(0, heightAfterMonthPrepend - heightBeforeMonthPrepend, 0).then(function () {
                _this._scrollLock = !0;
              });
            }, 180);
          });
        }
      };
      /**
       * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
       * shadowRoot descendants don't cause a browser repaint.
       * See for more details: https://github.com/Polymer/polymer/issues/4701
       */


      CalendarModal.prototype.repaintDOM = function () {
        var _this = this;

        return this.content.getScrollElement().then(function (scrollElem) {
          // Update scrollElem to ensure that height of the container changes as Months are appended/prepended
          scrollElem.style.zIndex = '2';
          scrollElem.style.zIndex = 'initial'; // Update monthsEle to ensure selected state is reflected when tapping on a day

          _this.monthsEle.nativeElement.style.zIndex = '2';
          _this.monthsEle.nativeElement.style.zIndex = 'initial';
        });
      };

      CalendarModal.prototype.findInitMonthNumber = function (date) {
        var startDate = this.actualFirstTime ? moment(this.actualFirstTime) : moment(this._d.from);
        var defaultScrollTo = moment(date);
        var isAfter = defaultScrollTo.isAfter(startDate);
        if (!isAfter) return -1;

        if (this.showYearPicker) {
          startDate = moment(new Date(this.year, 0, 1));
        }

        return defaultScrollTo.diff(startDate, 'month');
      };

      CalendarModal.prototype._getDayTime = function (date) {
        return moment(moment(date).format('YYYY-MM-DD')).valueOf();
      };

      CalendarModal.prototype._monthFormat = function (date) {
        return moment(date).format(this._d.monthFormat.replace(/y/g, 'Y'));
      };

      CalendarModal.prototype.trackByIndex = function (index, momentDate) {
        return momentDate.original ? momentDate.original.time : index;
      };

      __decorate([core_1.ViewChild(angular_1.IonContent), __metadata("design:type", angular_1.IonContent)], CalendarModal.prototype, "content", void 0);

      __decorate([core_1.ViewChild('months'), __metadata("design:type", core_1.ElementRef)], CalendarModal.prototype, "monthsEle", void 0);

      __decorate([core_1.HostBinding('class.ion-page'), __metadata("design:type", Object)], CalendarModal.prototype, "ionPage", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], CalendarModal.prototype, "options", void 0);

      CalendarModal = __decorate([core_1.Component({
        selector: 'ion-calendar-modal',
        template: "\n    <ion-header>\n      <ion-toolbar [color]=\"_d.color\">\n          <ion-buttons slot=\"start\">\n              <ion-button type='button' slot=\"icon-only\" fill=\"clear\" (click)=\"onCancel()\">\n              <span *ngIf=\"_d.closeLabel !== '' && !_d.closeIcon\">{{ _d.closeLabel }}</span>\n              <ion-icon *ngIf=\"_d.closeIcon\" name=\"close\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n\n          <ion-title>{{ _d.title }}</ion-title>\n\n          <ion-buttons slot=\"end\">\n            <ion-button type='button' slot=\"icon-only\" *ngIf=\"!_d.autoDone\" fill=\"clear\" [disabled]=\"!canDone()\" (click)=\"done()\">\n              <span *ngIf=\"_d.doneLabel !== '' && !_d.doneIcon\">{{ _d.doneLabel }}</span>\n              <ion-icon *ngIf=\"_d.doneIcon\" name=\"checkmark\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n      </ion-toolbar>\n\n      <ng-content select=\"[sub-header]\"></ng-content>\n\n      <ion-calendar-week\n        [color]=\"_d.color\"\n        [weekArray]=\"_d.weekdays\"\n        [weekStart]=\"_d.weekStart\">\n      </ion-calendar-week>\n\n    </ion-header>\n\n    <ion-content (ionScroll)=\"onScroll($event)\" class=\"calendar-page\" [scrollEvents]=\"true\"\n                 [ngClass]=\"{'multi-selection': _d.pickMode === 'multi'}\">\n\n      <div #months>\n        <ng-template ngFor let-month [ngForOf]=\"calendarMonths\" [ngForTrackBy]=\"trackByIndex\" let-i=\"index\">\n          <div class=\"month-box\" [attr.id]=\"'month-' + i\">\n            <h4 class=\"text-center month-title\">{{ _monthFormat(month.original.date) }}</h4>\n            <ion-calendar-month [month]=\"month\"\n                                [pickMode]=\"_d.pickMode\"\n                                [isSaveHistory]=\"_d.isSaveHistory\"\n                                [id]=\"_d.id\"\n                                [color]=\"_d.color\"\n                                (change)=\"onChange($event)\"\n                                [(ngModel)]=\"datesTemp\">\n            </ion-calendar-month>\n          </div>\n        </ng-template>\n\n      </div>\n\n      <ion-infinite-scroll threshold=\"25%\" (ionInfinite)=\"nextMonth($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n\n    </ion-content>\n  ",
        styles: [":host ion-select {\n  max-width: unset; }\n  :host ion-select .select-icon > .select-icon-inner,\n  :host ion-select .select-text {\n    color: #fff !important; }\n  :host ion-select.select-ios {\n    max-width: unset; }\n\n:host .calendar-page {\n  background-color: #fbfbfb; }\n\n:host .month-box {\n  display: inline-block;\n  width: 100%;\n  padding-bottom: 1em;\n  border-bottom: 1px solid #f1f1f1; }\n\n:host h4 {\n  font-weight: 400;\n  font-size: 1.1rem;\n  display: block;\n  text-align: center;\n  margin: 1rem 0 0;\n  color: #929292; }\n"]
      }), __metadata("design:paramtypes", [core_1.Renderer2, core_1.ElementRef, angular_1.NavParams, angular_1.ModalController, core_1.ChangeDetectorRef, calendar_service_1.CalendarService])], CalendarModal);
      return CalendarModal;
    }();

    exports.CalendarModal = CalendarModal; //# sourceMappingURL=calendar.modal.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsIndexJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var calendar_modal_1 = __webpack_require__(
    /*! ./calendar.modal */
    "./node_modules/ion2-calendar/dist/components/calendar.modal.js");

    var calendar_week_component_1 = __webpack_require__(
    /*! ./calendar-week.component */
    "./node_modules/ion2-calendar/dist/components/calendar-week.component.js");

    var month_component_1 = __webpack_require__(
    /*! ./month.component */
    "./node_modules/ion2-calendar/dist/components/month.component.js");

    var calendar_component_1 = __webpack_require__(
    /*! ./calendar.component */
    "./node_modules/ion2-calendar/dist/components/calendar.component.js");

    var month_picker_component_1 = __webpack_require__(
    /*! ./month-picker.component */
    "./node_modules/ion2-calendar/dist/components/month-picker.component.js");

    exports.CALENDAR_COMPONENTS = [calendar_modal_1.CalendarModal, calendar_week_component_1.CalendarWeekComponent, month_component_1.MonthComponent, calendar_component_1.CalendarComponent, month_picker_component_1.MonthPickerComponent]; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/month-picker.component.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/month-picker.component.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsMonthPickerComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var calendar_model_1 = __webpack_require__(
    /*! ../calendar.model */
    "./node_modules/ion2-calendar/dist/calendar.model.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    var MonthPickerComponent =
    /** @class */
    function () {
      function MonthPickerComponent() {
        this.color = config_1.defaults.COLOR;
        this.select = new core_1.EventEmitter();
        this._thisMonth = new Date();
        this._monthFormat = config_1.defaults.MONTH_FORMAT;
      }

      Object.defineProperty(MonthPickerComponent.prototype, "monthFormat", {
        get: function get() {
          return this._monthFormat;
        },
        set: function set(value) {
          if (Array.isArray(value) && value.length === 12) {
            this._monthFormat = value;
          }
        },
        enumerable: true,
        configurable: true
      });

      MonthPickerComponent.prototype._onSelect = function (month) {
        this.select.emit(month);
      };

      __decorate([core_1.Input(), __metadata("design:type", calendar_model_1.CalendarMonth)], MonthPickerComponent.prototype, "month", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], MonthPickerComponent.prototype, "color", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthPickerComponent.prototype, "select", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Array), __metadata("design:paramtypes", [Array])], MonthPickerComponent.prototype, "monthFormat", null);

      MonthPickerComponent = __decorate([core_1.Component({
        selector: 'ion-calendar-month-picker',
        template: "\n    <div [class]=\"'month-picker ' + color\">\n      <div class=\"month-packer-item\"\n           [class.this-month]=\" i === _thisMonth.getMonth() && month.original.year === _thisMonth.getFullYear()\"\n           *ngFor=\"let item of _monthFormat; let i = index\">\n        <button type=\"button\" (click)=\"_onSelect(i)\">{{ item }}</button>\n      </div>\n    </div>\n  ",
        styles: [":host .month-picker {\n  margin: 20px 0;\n  display: inline-block;\n  width: 100%; }\n\n:host .month-packer-item {\n  width: 25%;\n  box-sizing: border-box;\n  float: left;\n  height: 50px;\n  padding: 5px; }\n  :host .month-packer-item button {\n    border-radius: 32px;\n    width: 100%;\n    height: 100%;\n    font-size: 0.9em;\n    background-color: transparent; }\n\n:host .month-picker.primary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-primary); }\n\n:host .month-picker.primary .month-packer-item.active button {\n  background-color: var(--ion-color-primary);\n  color: #fff; }\n\n:host .month-picker.secondary .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-secondary); }\n\n:host .month-picker.secondary .month-packer-item.active button {\n  background-color: var(--ion-color-secondary);\n  color: #fff; }\n\n:host .month-picker.danger .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-danger); }\n\n:host .month-picker.danger .month-packer-item.active button {\n  background-color: var(--ion-color-danger);\n  color: #fff; }\n\n:host .month-picker.dark .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-dark); }\n\n:host .month-picker.dark .month-packer-item.active button {\n  background-color: var(--ion-color-dark);\n  color: #fff; }\n\n:host .month-picker.light .month-packer-item.this-month button {\n  border: 1px solid var(--ion-color-light); }\n\n:host .month-picker.light .month-packer-item.active button {\n  background-color: var(--ion-color-light);\n  color: #9e9e9e; }\n\n:host .month-picker.transparent {\n  background-color: transparent; }\n  :host .month-picker.transparent .month-packer-item.this-month button {\n    border: 1px solid var(--ion-color-light); }\n  :host .month-picker.transparent .month-packer-item.active button {\n    background-color: var(--ion-color-light);\n    color: #9e9e9e; }\n\n:host .month-picker.cal-color .month-packer-item.this-month button {\n  border: 1px solid; }\n\n:host .month-picker.cal-color .month-packer-item.active button {\n  color: #fff; }\n"]
      }), __metadata("design:paramtypes", [])], MonthPickerComponent);
      return MonthPickerComponent;
    }();

    exports.MonthPickerComponent = MonthPickerComponent; //# sourceMappingURL=month-picker.component.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/components/month.component.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/components/month.component.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistComponentsMonthComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var forms_1 = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var calendar_model_1 = __webpack_require__(
    /*! ../calendar.model */
    "./node_modules/ion2-calendar/dist/calendar.model.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    exports.MONTH_VALUE_ACCESSOR = {
      provide: forms_1.NG_VALUE_ACCESSOR,
      useExisting: core_1.forwardRef(function () {
        return MonthComponent;
      }),
      multi: true
    };

    var MonthComponent =
    /** @class */
    function () {
      function MonthComponent(ref) {
        this.ref = ref;
        this.readonly = false;
        this.color = config_1.defaults.COLOR;
        this.change = new core_1.EventEmitter();
        this.select = new core_1.EventEmitter();
        this.selectStart = new core_1.EventEmitter();
        this.selectEnd = new core_1.EventEmitter();
        this._date = [null, null];
        this._isInit = false;
      }

      Object.defineProperty(MonthComponent.prototype, "_isRange", {
        get: function get() {
          return this.pickMode === config_1.pickModes.RANGE;
        },
        enumerable: true,
        configurable: true
      });

      MonthComponent.prototype.ngAfterViewInit = function () {
        this._isInit = true;
      };

      Object.defineProperty(MonthComponent.prototype, "value", {
        get: function get() {
          return this._date;
        },
        enumerable: true,
        configurable: true
      });

      MonthComponent.prototype.writeValue = function (obj) {
        if (Array.isArray(obj)) {
          this._date = obj;
        }
      };

      MonthComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
      };

      MonthComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
      };

      MonthComponent.prototype.trackByTime = function (index, item) {
        return item ? item.time : index;
      };

      MonthComponent.prototype.isEndSelection = function (day) {
        if (!day) return false;

        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[1] === null) {
          return false;
        }

        return this._date[1].time === day.time;
      };

      MonthComponent.prototype.isBetween = function (day) {
        if (!day) return false;

        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit) {
          return false;
        }

        if (this._date[0] === null || this._date[1] === null) {
          return false;
        }

        var start = this._date[0].time;
        var end = this._date[1].time;
        return day.time < end && day.time > start;
      };

      MonthComponent.prototype.isStartSelection = function (day) {
        if (!day) return false;

        if (this.pickMode !== config_1.pickModes.RANGE || !this._isInit || this._date[0] === null) {
          return false;
        }

        return this._date[0].time === day.time && this._date[1] !== null;
      };

      MonthComponent.prototype.isSelected = function (time) {
        if (Array.isArray(this._date)) {
          if (this.pickMode !== config_1.pickModes.MULTI) {
            if (this._date[0] !== null) {
              return time === this._date[0].time;
            }

            if (this._date[1] !== null) {
              return time === this._date[1].time;
            }
          } else {
            return this._date.findIndex(function (e) {
              return e !== null && e.time === time;
            }) !== -1;
          }
        } else {
          return false;
        }
      };

      MonthComponent.prototype.onSelected = function (item) {
        if (this.readonly) return;
        item.selected = true;
        this.select.emit(item);

        if (this.pickMode === config_1.pickModes.SINGLE) {
          this._date[0] = item;
          this.change.emit(this._date);
          return;
        }

        if (this.pickMode === config_1.pickModes.RANGE) {
          if (this._date[0] === null) {
            this._date[0] = item;
            this.selectStart.emit(item);
          } else if (this._date[1] === null) {
            if (this._date[0].time < item.time) {
              this._date[1] = item;
              this.selectEnd.emit(item);
            } else {
              this._date[1] = this._date[0];
              this.selectEnd.emit(this._date[0]);
              this._date[0] = item;
              this.selectStart.emit(item);
            }
          } else {
            this._date[0] = item;
            this.selectStart.emit(item);
            this._date[1] = null;
          }

          this.change.emit(this._date);
          return;
        }

        if (this.pickMode === config_1.pickModes.MULTI) {
          var index = this._date.findIndex(function (e) {
            return e !== null && e.time === item.time;
          });

          if (index === -1) {
            this._date.push(item);
          } else {
            this._date.splice(index, 1);
          }

          this.change.emit(this._date.filter(function (e) {
            return e !== null;
          }));
        }
      };

      __decorate([core_1.Input(), __metadata("design:type", calendar_model_1.CalendarMonth)], MonthComponent.prototype, "month", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], MonthComponent.prototype, "pickMode", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Boolean)], MonthComponent.prototype, "isSaveHistory", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], MonthComponent.prototype, "id", void 0);

      __decorate([core_1.Input(), __metadata("design:type", Object)], MonthComponent.prototype, "readonly", void 0);

      __decorate([core_1.Input(), __metadata("design:type", String)], MonthComponent.prototype, "color", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "change", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "select", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "selectStart", void 0);

      __decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], MonthComponent.prototype, "selectEnd", void 0);

      MonthComponent = __decorate([core_1.Component({
        selector: 'ion-calendar-month',
        providers: [exports.MONTH_VALUE_ACCESSOR],
        template: "\n    <div [class]=\"color\">\n      <ng-template [ngIf]=\"!_isRange\" [ngIfElse]=\"rangeBox\">\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{ day.title }}</p>\n                  <small *ngIf=\"day.subTitle\">{{ day?.subTitle }}</small>\n                </button>\n              </ng-container>\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n\n      <ng-template #rangeBox>\n        <div class=\"days-box\">\n          <ng-template ngFor let-day [ngForOf]=\"month.days\" [ngForTrackBy]=\"trackByTime\">\n            <div class=\"days\"\n                 [class.startSelection]=\"isStartSelection(day)\"\n                 [class.endSelection]=\"isEndSelection(day)\"\n                 [class.is-first-wrap]=\"day?.isFirst\"\n                 [class.is-last-wrap]=\"day?.isLast\"\n                 [class.between]=\"isBetween(day)\">\n              <ng-container *ngIf=\"day\">\n                <button type='button'\n                        [class]=\"'days-btn ' + day.cssClass\"\n                        [class.today]=\"day.isToday\"\n                        (click)=\"onSelected(day)\"\n                        [class.marked]=\"day.marked\"\n                        [class.last-month-day]=\"day.isLastMonth\"\n                        [class.next-month-day]=\"day.isNextMonth\"\n                        [class.is-first]=\"day.isFirst\"\n                        [class.is-last]=\"day.isLast\"\n                        [class.on-selected]=\"isSelected(day.time)\"\n                        [disabled]=\"day.disable\">\n                  <p>{{ day.title }}</p>\n                  <small *ngIf=\"day.subTitle\">{{ day?.subTitle }}</small>\n                </button>\n              </ng-container>\n\n            </div>\n          </ng-template>\n        </div>\n      </ng-template>\n    </div>\n  ",
        styles: [":host {\n  display: inline-block;\n  width: 100%; }\n  :host .days-box {\n    padding: 0.5rem; }\n  :host .days:nth-of-type(7n),\n  :host .days:nth-of-type(7n + 1) {\n    width: 15%; }\n  :host .days {\n    width: 14%;\n    float: left;\n    text-align: center;\n    height: 36px;\n    margin-bottom: 5px; }\n  :host .days .marked p {\n    font-weight: 500; }\n  :host .days .on-selected {\n    border: none; }\n    :host .days .on-selected p {\n      font-size: 1.3em; }\n  :host button.days-btn {\n    border-radius: 36px;\n    width: 36px;\n    display: block;\n    margin: 0 auto;\n    padding: 0;\n    height: 36px;\n    background-color: transparent;\n    position: relative;\n    z-index: 2;\n    outline: 0; }\n  :host button.days-btn p {\n    margin: 0;\n    font-size: 1.2em;\n    color: #333;\n    text-align: center; }\n  :host button.days-btn[disabled] p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host button.days-btn.on-selected small {\n    transition: bottom 0.3s;\n    bottom: -14px; }\n  :host button.days-btn small {\n    overflow: hidden;\n    display: block;\n    left: 0;\n    right: 0;\n    bottom: -5px;\n    position: absolute;\n    z-index: 1;\n    text-align: center;\n    font-weight: 200; }\n  :host .primary button.days-btn small,\n  :host .primary .days .marked p,\n  :host .primary .days .today p {\n    color: var(--ion-color-primary); }\n  :host .primary .days .today p {\n    font-weight: 700; }\n  :host .primary .days .last-month-day p,\n  :host .primary .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .primary .days .today.on-selected p,\n  :host .primary .days .marked.on-selected p {\n    color: #fff; }\n  :host .primary .days .on-selected,\n  :host .primary .startSelection button.days-btn,\n  :host .primary .endSelection button.days-btn {\n    background-color: var(--ion-color-primary);\n    color: #fff; }\n  :host .primary .startSelection {\n    position: relative; }\n    :host .primary .startSelection:before, :host .primary .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .primary .startSelection:before {\n      background-color: var(--ion-color-primary); }\n    :host .primary .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .primary .endSelection {\n    position: relative; }\n    :host .primary .endSelection:before, :host .primary .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .primary .endSelection:before {\n      background-color: var(--ion-color-primary); }\n    :host .primary .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .primary .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .primary .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .primary .between button.days-btn {\n    background-color: var(--ion-color-primary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .primary .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .primary .between button.days-btn p {\n      color: #fff; }\n  :host .primary .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .primary .endSelection button.days-btn p {\n      color: #fff; }\n  :host .primary .days.startSelection:nth-child(7n):before,\n  :host .primary .days.between:nth-child(7n) button.days-btn,\n  :host .primary button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .primary .days.startSelection:nth-child(7n):before.on-selected,\n    :host .primary .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .primary button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .primary .days.endSelection:nth-child(7n + 1):before,\n  :host .primary .days.between:nth-child(7n + 1) button.days-btn,\n  :host .primary .days.between.is-first-wrap button.days-btn.is-first,\n  :host .primary button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .primary .startSelection button.days-btn.is-first,\n  :host .primary .endSelection button.days-btn.is-first,\n  :host .primary button.days-btn.is-first.on-selected,\n  :host .primary button.days-btn.is-last.on-selected,\n  :host .primary .startSelection button.days-btn.is-last,\n  :host .primary .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .primary .startSelection.is-last-wrap::before, :host .primary .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .primary .endSelection.is-first-wrap::before, :host .primary .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .primary .days .on-selected p {\n    color: #fff; }\n  :host .primary .startSelection button.days-btn,\n  :host .primary .endSelection button.days-btn,\n  :host .primary .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .secondary button.days-btn small,\n  :host .secondary .days .marked p,\n  :host .secondary .days .today p {\n    color: var(--ion-color-secondary); }\n  :host .secondary .days .today p {\n    font-weight: 700; }\n  :host .secondary .days .last-month-day p,\n  :host .secondary .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .secondary .days .today.on-selected p,\n  :host .secondary .days .marked.on-selected p {\n    color: #fff; }\n  :host .secondary .days .on-selected,\n  :host .secondary .startSelection button.days-btn,\n  :host .secondary .endSelection button.days-btn {\n    background-color: var(--ion-color-secondary);\n    color: #fff; }\n  :host .secondary .startSelection {\n    position: relative; }\n    :host .secondary .startSelection:before, :host .secondary .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .secondary .startSelection:before {\n      background-color: var(--ion-color-secondary); }\n    :host .secondary .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .secondary .endSelection {\n    position: relative; }\n    :host .secondary .endSelection:before, :host .secondary .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .secondary .endSelection:before {\n      background-color: var(--ion-color-secondary); }\n    :host .secondary .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .secondary .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .secondary .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .secondary .between button.days-btn {\n    background-color: var(--ion-color-secondary);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .secondary .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .secondary .between button.days-btn p {\n      color: #fff; }\n  :host .secondary .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .secondary .endSelection button.days-btn p {\n      color: #fff; }\n  :host .secondary .days.startSelection:nth-child(7n):before,\n  :host .secondary .days.between:nth-child(7n) button.days-btn,\n  :host .secondary button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .secondary .days.startSelection:nth-child(7n):before.on-selected,\n    :host .secondary .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .secondary button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .secondary .days.endSelection:nth-child(7n + 1):before,\n  :host .secondary .days.between:nth-child(7n + 1) button.days-btn,\n  :host .secondary .days.between.is-first-wrap button.days-btn.is-first,\n  :host .secondary button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .secondary .startSelection button.days-btn.is-first,\n  :host .secondary .endSelection button.days-btn.is-first,\n  :host .secondary button.days-btn.is-first.on-selected,\n  :host .secondary button.days-btn.is-last.on-selected,\n  :host .secondary .startSelection button.days-btn.is-last,\n  :host .secondary .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .secondary .startSelection.is-last-wrap::before, :host .secondary .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .secondary .endSelection.is-first-wrap::before, :host .secondary .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .secondary .days .on-selected p {\n    color: #fff; }\n  :host .secondary .startSelection button.days-btn,\n  :host .secondary .endSelection button.days-btn,\n  :host .secondary .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .danger button.days-btn small,\n  :host .danger .days .marked p,\n  :host .danger .days .today p {\n    color: var(--ion-color-danger); }\n  :host .danger .days .today p {\n    font-weight: 700; }\n  :host .danger .days .last-month-day p,\n  :host .danger .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .danger .days .today.on-selected p,\n  :host .danger .days .marked.on-selected p {\n    color: #fff; }\n  :host .danger .days .on-selected,\n  :host .danger .startSelection button.days-btn,\n  :host .danger .endSelection button.days-btn {\n    background-color: var(--ion-color-danger);\n    color: #fff; }\n  :host .danger .startSelection {\n    position: relative; }\n    :host .danger .startSelection:before, :host .danger .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .danger .startSelection:before {\n      background-color: var(--ion-color-danger); }\n    :host .danger .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .danger .endSelection {\n    position: relative; }\n    :host .danger .endSelection:before, :host .danger .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .danger .endSelection:before {\n      background-color: var(--ion-color-danger); }\n    :host .danger .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .danger .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .danger .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .danger .between button.days-btn {\n    background-color: var(--ion-color-danger);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .danger .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .danger .between button.days-btn p {\n      color: #fff; }\n  :host .danger .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .danger .endSelection button.days-btn p {\n      color: #fff; }\n  :host .danger .days.startSelection:nth-child(7n):before,\n  :host .danger .days.between:nth-child(7n) button.days-btn,\n  :host .danger button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .danger .days.startSelection:nth-child(7n):before.on-selected,\n    :host .danger .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .danger button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .danger .days.endSelection:nth-child(7n + 1):before,\n  :host .danger .days.between:nth-child(7n + 1) button.days-btn,\n  :host .danger .days.between.is-first-wrap button.days-btn.is-first,\n  :host .danger button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .danger .startSelection button.days-btn.is-first,\n  :host .danger .endSelection button.days-btn.is-first,\n  :host .danger button.days-btn.is-first.on-selected,\n  :host .danger button.days-btn.is-last.on-selected,\n  :host .danger .startSelection button.days-btn.is-last,\n  :host .danger .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .danger .startSelection.is-last-wrap::before, :host .danger .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .danger .endSelection.is-first-wrap::before, :host .danger .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .danger .days .on-selected p {\n    color: #fff; }\n  :host .danger .startSelection button.days-btn,\n  :host .danger .endSelection button.days-btn,\n  :host .danger .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .dark button.days-btn small,\n  :host .dark .days .marked p,\n  :host .dark .days .today p {\n    color: var(--ion-color-dark); }\n  :host .dark .days .today p {\n    font-weight: 700; }\n  :host .dark .days .last-month-day p,\n  :host .dark .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .dark .days .today.on-selected p,\n  :host .dark .days .marked.on-selected p {\n    color: #fff; }\n  :host .dark .days .on-selected,\n  :host .dark .startSelection button.days-btn,\n  :host .dark .endSelection button.days-btn {\n    background-color: var(--ion-color-dark);\n    color: #fff; }\n  :host .dark .startSelection {\n    position: relative; }\n    :host .dark .startSelection:before, :host .dark .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .dark .startSelection:before {\n      background-color: var(--ion-color-dark); }\n    :host .dark .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .dark .endSelection {\n    position: relative; }\n    :host .dark .endSelection:before, :host .dark .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .dark .endSelection:before {\n      background-color: var(--ion-color-dark); }\n    :host .dark .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .dark .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .dark .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .dark .between button.days-btn {\n    background-color: var(--ion-color-dark);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .dark .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .dark .between button.days-btn p {\n      color: #fff; }\n  :host .dark .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .dark .endSelection button.days-btn p {\n      color: #fff; }\n  :host .dark .days.startSelection:nth-child(7n):before,\n  :host .dark .days.between:nth-child(7n) button.days-btn,\n  :host .dark button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .dark .days.startSelection:nth-child(7n):before.on-selected,\n    :host .dark .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .dark button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .dark .days.endSelection:nth-child(7n + 1):before,\n  :host .dark .days.between:nth-child(7n + 1) button.days-btn,\n  :host .dark .days.between.is-first-wrap button.days-btn.is-first,\n  :host .dark button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .dark .startSelection button.days-btn.is-first,\n  :host .dark .endSelection button.days-btn.is-first,\n  :host .dark button.days-btn.is-first.on-selected,\n  :host .dark button.days-btn.is-last.on-selected,\n  :host .dark .startSelection button.days-btn.is-last,\n  :host .dark .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .dark .startSelection.is-last-wrap::before, :host .dark .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .dark .endSelection.is-first-wrap::before, :host .dark .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .dark .days .on-selected p {\n    color: #fff; }\n  :host .dark .startSelection button.days-btn,\n  :host .dark .endSelection button.days-btn,\n  :host .dark .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .light button.days-btn small,\n  :host .light .days .marked p,\n  :host .light .days .today p {\n    color: var(--ion-color-light); }\n  :host .light .days .today p {\n    font-weight: 700; }\n  :host .light .days .last-month-day p,\n  :host .light .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .light .days .today.on-selected p,\n  :host .light .days .marked.on-selected p {\n    color: #a0a0a0; }\n  :host .light .days .on-selected,\n  :host .light .startSelection button.days-btn,\n  :host .light .endSelection button.days-btn {\n    background-color: var(--ion-color-light);\n    color: #a0a0a0; }\n  :host .light .startSelection {\n    position: relative; }\n    :host .light .startSelection:before, :host .light .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .light .startSelection:before {\n      background-color: var(--ion-color-light); }\n    :host .light .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .light .endSelection {\n    position: relative; }\n    :host .light .endSelection:before, :host .light .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .light .endSelection:before {\n      background-color: var(--ion-color-light); }\n    :host .light .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .light .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .light .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .light .between button.days-btn {\n    background-color: var(--ion-color-light);\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .light .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .light .between button.days-btn p {\n      color: #a0a0a0; }\n  :host .light .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .light .endSelection button.days-btn p {\n      color: #a0a0a0; }\n  :host .light .days.startSelection:nth-child(7n):before,\n  :host .light .days.between:nth-child(7n) button.days-btn,\n  :host .light button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .light .days.startSelection:nth-child(7n):before.on-selected,\n    :host .light .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .light button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .light .days.endSelection:nth-child(7n + 1):before,\n  :host .light .days.between:nth-child(7n + 1) button.days-btn,\n  :host .light .days.between.is-first-wrap button.days-btn.is-first,\n  :host .light button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .light .startSelection button.days-btn.is-first,\n  :host .light .endSelection button.days-btn.is-first,\n  :host .light button.days-btn.is-first.on-selected,\n  :host .light button.days-btn.is-last.on-selected,\n  :host .light .startSelection button.days-btn.is-last,\n  :host .light .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .light .startSelection.is-last-wrap::before, :host .light .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .light .endSelection.is-first-wrap::before, :host .light .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .light .days .on-selected p {\n    color: #a0a0a0; }\n  :host .light .startSelection button.days-btn,\n  :host .light .endSelection button.days-btn,\n  :host .light .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n  :host .light .days .today p {\n    color: #565656; }\n  :host .cal-color .days .today p {\n    font-weight: 700; }\n  :host .cal-color .days .last-month-day p,\n  :host .cal-color .days .next-month-day p {\n    color: rgba(0, 0, 0, 0.25); }\n  :host .cal-color .days .today.on-selected p,\n  :host .cal-color .days .marked.on-selected p {\n    color: #fff; }\n  :host .cal-color .days .on-selected,\n  :host .cal-color .startSelection button.days-btn,\n  :host .cal-color .endSelection button.days-btn {\n    color: #fff; }\n  :host .cal-color .startSelection {\n    position: relative; }\n    :host .cal-color .startSelection:before, :host .cal-color .startSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: block; }\n    :host .cal-color .startSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .cal-color .endSelection {\n    position: relative; }\n    :host .cal-color .endSelection:before, :host .cal-color .endSelection:after {\n      height: 36px;\n      width: 50%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block; }\n    :host .cal-color .endSelection:after {\n      background-color: white;\n      opacity: 0.25; }\n  :host .cal-color .startSelection.endSelection:after {\n    background-color: transparent; }\n  :host .cal-color .startSelection button.days-btn {\n    border-radius: 50%; }\n  :host .cal-color .between button.days-btn {\n    width: 100%;\n    border-radius: 0;\n    position: relative; }\n    :host .cal-color .between button.days-btn:after {\n      height: 36px;\n      width: 100%;\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      display: block;\n      background-color: white;\n      opacity: 0.25; }\n    :host .cal-color .between button.days-btn p {\n      color: #fff; }\n  :host .cal-color .endSelection button.days-btn {\n    border-radius: 50%; }\n    :host .cal-color .endSelection button.days-btn p {\n      color: #fff; }\n  :host .cal-color .days.startSelection:nth-child(7n):before,\n  :host .cal-color .days.between:nth-child(7n) button.days-btn,\n  :host .cal-color button.days-btn.is-last {\n    border-radius: 0 36px 36px 0; }\n    :host .cal-color .days.startSelection:nth-child(7n):before.on-selected,\n    :host .cal-color .days.between:nth-child(7n) button.days-btn.on-selected,\n    :host .cal-color button.days-btn.is-last.on-selected {\n      border-radius: 50%; }\n  :host .cal-color .days.endSelection:nth-child(7n + 1):before,\n  :host .cal-color .days.between:nth-child(7n + 1) button.days-btn,\n  :host .cal-color .days.between.is-first-wrap button.days-btn.is-first,\n  :host .cal-color button.days-btn.is-first {\n    border-radius: 36px 0 0 36px; }\n  :host .cal-color .startSelection button.days-btn.is-first,\n  :host .cal-color .endSelection button.days-btn.is-first,\n  :host .cal-color button.days-btn.is-first.on-selected,\n  :host .cal-color button.days-btn.is-last.on-selected,\n  :host .cal-color .startSelection button.days-btn.is-last,\n  :host .cal-color .endSelection button.days-btn.is-last {\n    border-radius: 50%; }\n  :host .cal-color .startSelection.is-last-wrap::before, :host .cal-color .startSelection.is-last-wrap::after {\n    border-radius: 0 36px 36px 0; }\n  :host .cal-color .endSelection.is-first-wrap::before, :host .cal-color .endSelection.is-first-wrap::after {\n    border-radius: 36px 0 0 36px; }\n  :host .cal-color .days .on-selected p {\n    color: #fff; }\n  :host .cal-color .startSelection button.days-btn,\n  :host .cal-color .endSelection button.days-btn,\n  :host .cal-color .between button.days-btn {\n    -webkit-transition-property: background-color;\n    -moz-transition-property: background-color;\n    -ms-transition-property: background-color;\n    -o-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: 180ms;\n    -moz-transition-duration: 180ms;\n    -ms-transition-duration: 180ms;\n    -o-transition-duration: 180ms;\n    transition-duration: 180ms;\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    -ms-transition-timing-function: ease-out;\n    -o-transition-timing-function: ease-out;\n    transition-timing-function: ease-out; }\n"]
      }), __metadata("design:paramtypes", [core_1.ChangeDetectorRef])], MonthComponent);
      return MonthComponent;
    }();

    exports.MonthComponent = MonthComponent; //# sourceMappingURL=month.component.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/config.js":
  /*!***************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/config.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaults = {
      DATE_FORMAT: 'YYYY-MM-DD',
      COLOR: 'primary',
      WEEKS_FORMAT: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      MONTH_FORMAT: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    };
    exports.pickModes = {
      SINGLE: 'single',
      RANGE: 'range',
      MULTI: 'multi'
    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistIndexJs(module, exports, __webpack_require__) {
    "use strict";

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    __export(__webpack_require__(
    /*! ./calendar.model */
    "./node_modules/ion2-calendar/dist/calendar.model.js"));

    var calendar_modal_1 = __webpack_require__(
    /*! ./components/calendar.modal */
    "./node_modules/ion2-calendar/dist/components/calendar.modal.js");

    exports.CalendarModal = calendar_modal_1.CalendarModal;

    var calendar_week_component_1 = __webpack_require__(
    /*! ./components/calendar-week.component */
    "./node_modules/ion2-calendar/dist/components/calendar-week.component.js");

    exports.CalendarWeekComponent = calendar_week_component_1.CalendarWeekComponent;

    var month_component_1 = __webpack_require__(
    /*! ./components/month.component */
    "./node_modules/ion2-calendar/dist/components/month.component.js");

    exports.MonthComponent = month_component_1.MonthComponent;

    var calendar_component_1 = __webpack_require__(
    /*! ./components/calendar.component */
    "./node_modules/ion2-calendar/dist/components/calendar.component.js");

    exports.CalendarComponent = calendar_component_1.CalendarComponent;

    var calendar_module_1 = __webpack_require__(
    /*! ./calendar.module */
    "./node_modules/ion2-calendar/dist/calendar.module.js");

    exports.CalendarModule = calendar_module_1.CalendarModule;

    var calendar_controller_1 = __webpack_require__(
    /*! ./calendar.controller */
    "./node_modules/ion2-calendar/dist/calendar.controller.js");

    exports.CalendarController = calendar_controller_1.CalendarController; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ion2-calendar/dist/services/calendar.service.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/ion2-calendar/dist/services/calendar.service.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIon2CalendarDistServicesCalendarServiceJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var moment = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");

    var config_1 = __webpack_require__(
    /*! ../config */
    "./node_modules/ion2-calendar/dist/config.js");

    var isBoolean = function isBoolean(input) {
      return input === true || input === false;
    };

    var ɵ0 = isBoolean;
    exports.ɵ0 = ɵ0;

    var CalendarService =
    /** @class */
    function () {
      function CalendarService() {}

      Object.defineProperty(CalendarService.prototype, "DEFAULT_STEP", {
        get: function get() {
          return 12;
        },
        enumerable: true,
        configurable: true
      });

      CalendarService.prototype.safeOpt = function (calendarOptions) {
        if (calendarOptions === void 0) {
          calendarOptions = {};
        }

        var _disableWeeks = [];
        var _daysConfig = [];

        var _a = calendarOptions || {},
            _b = _a.from,
            from = _b === void 0 ? new Date() : _b,
            _c = _a.to,
            to = _c === void 0 ? 0 : _c,
            _d = _a.weekStart,
            weekStart = _d === void 0 ? 0 : _d,
            _e = _a.step,
            step = _e === void 0 ? this.DEFAULT_STEP : _e,
            _f = _a.id,
            id = _f === void 0 ? '' : _f,
            _g = _a.cssClass,
            cssClass = _g === void 0 ? '' : _g,
            _h = _a.closeLabel,
            closeLabel = _h === void 0 ? 'CANCEL' : _h,
            _j = _a.doneLabel,
            doneLabel = _j === void 0 ? 'DONE' : _j,
            _k = _a.monthFormat,
            monthFormat = _k === void 0 ? 'MMM YYYY' : _k,
            _l = _a.title,
            title = _l === void 0 ? 'CALENDAR' : _l,
            _m = _a.defaultTitle,
            defaultTitle = _m === void 0 ? '' : _m,
            _o = _a.defaultSubtitle,
            defaultSubtitle = _o === void 0 ? '' : _o,
            _p = _a.autoDone,
            autoDone = _p === void 0 ? false : _p,
            _q = _a.canBackwardsSelected,
            canBackwardsSelected = _q === void 0 ? false : _q,
            _r = _a.closeIcon,
            closeIcon = _r === void 0 ? false : _r,
            _s = _a.doneIcon,
            doneIcon = _s === void 0 ? false : _s,
            _t = _a.showYearPicker,
            showYearPicker = _t === void 0 ? false : _t,
            _u = _a.isSaveHistory,
            isSaveHistory = _u === void 0 ? false : _u,
            _v = _a.pickMode,
            pickMode = _v === void 0 ? config_1.pickModes.SINGLE : _v,
            _w = _a.color,
            color = _w === void 0 ? config_1.defaults.COLOR : _w,
            _x = _a.weekdays,
            weekdays = _x === void 0 ? config_1.defaults.WEEKS_FORMAT : _x,
            _y = _a.daysConfig,
            daysConfig = _y === void 0 ? _daysConfig : _y,
            _z = _a.disableWeeks,
            disableWeeks = _z === void 0 ? _disableWeeks : _z,
            _0 = _a.showAdjacentMonthDay,
            showAdjacentMonthDay = _0 === void 0 ? true : _0;

        return {
          id: id,
          from: from,
          to: to,
          pickMode: pickMode,
          autoDone: autoDone,
          color: color,
          cssClass: cssClass,
          weekStart: weekStart,
          closeLabel: closeLabel,
          closeIcon: closeIcon,
          doneLabel: doneLabel,
          doneIcon: doneIcon,
          canBackwardsSelected: canBackwardsSelected,
          isSaveHistory: isSaveHistory,
          disableWeeks: disableWeeks,
          monthFormat: monthFormat,
          title: title,
          weekdays: weekdays,
          daysConfig: daysConfig,
          step: step,
          showYearPicker: showYearPicker,
          defaultTitle: defaultTitle,
          defaultSubtitle: defaultSubtitle,
          defaultScrollTo: calendarOptions.defaultScrollTo || from,
          defaultDate: calendarOptions.defaultDate || null,
          defaultDates: calendarOptions.defaultDates || null,
          defaultDateRange: calendarOptions.defaultDateRange || null,
          showAdjacentMonthDay: showAdjacentMonthDay
        };
      };

      CalendarService.prototype.createOriginalCalendar = function (time) {
        var date = new Date(time);
        var year = date.getFullYear();
        var month = date.getMonth();
        var firstWeek = new Date(year, month, 1).getDay();
        var howManyDays = moment(time).daysInMonth();
        return {
          year: year,
          month: month,
          firstWeek: firstWeek,
          howManyDays: howManyDays,
          time: new Date(year, month, 1).getTime(),
          date: new Date(time)
        };
      };

      CalendarService.prototype.findDayConfig = function (day, opt) {
        if (opt.daysConfig.length <= 0) return null;
        return opt.daysConfig.find(function (n) {
          return day.isSame(n.date, 'day');
        });
      };

      CalendarService.prototype.createCalendarDay = function (time, opt, month) {
        var _time = moment(time);

        var date = moment(time);
        var isToday = moment().isSame(_time, 'days');
        var dayConfig = this.findDayConfig(_time, opt);

        var _rangeBeg = moment(opt.from).valueOf();

        var _rangeEnd = moment(opt.to).valueOf();

        var isBetween = true;
        var disableWee = opt.disableWeeks.indexOf(_time.toDate().getDay()) !== -1;

        if (_rangeBeg > 0 && _rangeEnd > 0) {
          if (!opt.canBackwardsSelected) {
            isBetween = !_time.isBetween(_rangeBeg, _rangeEnd, 'days', '[]');
          } else {
            isBetween = moment(_time).isBefore(_rangeBeg) ? false : isBetween;
          }
        } else if (_rangeBeg > 0 && _rangeEnd === 0) {
          if (!opt.canBackwardsSelected) {
            var _addTime = _time.add(1, 'day');

            isBetween = !_addTime.isAfter(_rangeBeg);
          } else {
            isBetween = false;
          }
        }

        var _disable = false;

        if (dayConfig && isBoolean(dayConfig.disable)) {
          _disable = dayConfig.disable;
        } else {
          _disable = disableWee || isBetween;
        }

        var title = new Date(time).getDate().toString();

        if (dayConfig && dayConfig.title) {
          title = dayConfig.title;
        } else if (opt.defaultTitle) {
          title = opt.defaultTitle;
        }

        var subTitle = '';

        if (dayConfig && dayConfig.subTitle) {
          subTitle = dayConfig.subTitle;
        } else if (opt.defaultSubtitle) {
          subTitle = opt.defaultSubtitle;
        }

        return {
          time: time,
          isToday: isToday,
          title: title,
          subTitle: subTitle,
          selected: false,
          isLastMonth: date.month() < month,
          isNextMonth: date.month() > month,
          marked: dayConfig ? dayConfig.marked || false : false,
          cssClass: dayConfig ? dayConfig.cssClass || '' : '',
          disable: _disable,
          isFirst: date.date() === 1,
          isLast: date.date() === date.daysInMonth()
        };
      };

      CalendarService.prototype.createCalendarMonth = function (original, opt) {
        var days = new Array(6).fill(null);
        var len = original.howManyDays;

        for (var i = original.firstWeek; i < len + original.firstWeek; i++) {
          var itemTime = new Date(original.year, original.month, i - original.firstWeek + 1).getTime();
          days[i] = this.createCalendarDay(itemTime, opt);
        }

        var weekStart = opt.weekStart;

        if (weekStart === 1) {
          if (days[0] === null) {
            days.shift();
          } else {
            days.unshift.apply(days, new Array(6).fill(null));
          }
        }

        if (opt.showAdjacentMonthDay) {
          var _booleanMap = days.map(function (e) {
            return !!e;
          });

          var thisMonth = moment(original.time).month();
          var startOffsetIndex = _booleanMap.indexOf(true) - 1;
          var endOffsetIndex = _booleanMap.lastIndexOf(true) + 1;

          for (startOffsetIndex; startOffsetIndex >= 0; startOffsetIndex--) {
            var dayBefore = moment(days[startOffsetIndex + 1].time).clone().subtract(1, 'd');
            days[startOffsetIndex] = this.createCalendarDay(dayBefore.valueOf(), opt, thisMonth);
          }

          if (!(_booleanMap.length % 7 === 0 && _booleanMap[_booleanMap.length - 1])) {
            for (endOffsetIndex; endOffsetIndex < days.length + endOffsetIndex % 7; endOffsetIndex++) {
              var dayAfter = moment(days[endOffsetIndex - 1].time).clone().add(1, 'd');
              days[endOffsetIndex] = this.createCalendarDay(dayAfter.valueOf(), opt, thisMonth);
            }
          }
        }

        return {
          days: days,
          original: original
        };
      };

      CalendarService.prototype.createMonthsByPeriod = function (startTime, monthsNum, opt) {
        var _array = [];

        var _start = new Date(startTime);

        var _startMonth = new Date(_start.getFullYear(), _start.getMonth(), 1).getTime();

        for (var i = 0; i < monthsNum; i++) {
          var time = moment(_startMonth).add(i, 'M').valueOf();
          var originalCalendar = this.createOriginalCalendar(time);

          _array.push(this.createCalendarMonth(originalCalendar, opt));
        }

        return _array;
      };

      CalendarService.prototype.wrapResult = function (original, pickMode) {
        var _this = this;

        var result;

        switch (pickMode) {
          case config_1.pickModes.SINGLE:
            result = this.multiFormat(original[0].time);
            break;

          case config_1.pickModes.RANGE:
            result = {
              from: this.multiFormat(original[0].time),
              to: this.multiFormat(original[1].time)
            };
            break;

          case config_1.pickModes.MULTI:
            result = original.map(function (e) {
              return _this.multiFormat(e.time);
            });
            break;

          default:
            result = original;
        }

        return result;
      };

      CalendarService.prototype.multiFormat = function (time) {
        var _moment = moment(time);

        return {
          time: _moment.valueOf(),
          unix: _moment.unix(),
          dateObj: _moment.toDate(),
          string: _moment.format(config_1.defaults.DATE_FORMAT),
          years: _moment.year(),
          months: _moment.month() + 1,
          date: _moment.date()
        };
      };

      CalendarService = __decorate([core_1.Injectable(), __metadata("design:paramtypes", [])], CalendarService);
      return CalendarService;
    }();

    exports.CalendarService = CalendarService; //# sourceMappingURL=calendar.service.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <app-navigation></app-navigation>\n</ion-header>\n\n<ion-content>\n  <div class=\"heading fixed\">\n    <app-icon-bar [icon]=\"'calendar-outline'\" [title]=\"'Events'\"></app-icon-bar>\n  </div>\n  <ion-card class=\"top fixed animated fadeIn faster\">\n    <ion-card-content>\n      <ion-row class=\"calendar-container\" style=\"width: 100%\">\n        <ion-button class=\"ion-activatable ripple-parent left-button controls\" (click)=\"onPrev()\">\n          <ion-icon name=\"chevron-back-outline\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-button>\n        <ion-button class=\"ion-activatable ripple-parent right-button controls\" (click)=\"onNext()\">\n          <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          <ion-ripple-effect></ion-ripple-effect>\n        </ion-button>\n        <ion-calendar #cal [(ngModel)]=\"date\"\n                (change)=\"onSelect($event)\"\n                [format]=\"'YYYY-MM-DD'\">\n        </ion-calendar>\n      </ion-row>\n      \n    </ion-card-content>\n  </ion-card>\n  <ion-row class=\"empty-row animated fadeIn faster\" *ngIf=\"events.length === 0\">\n    <ion-icon name=\"sad-outline\"></ion-icon>\n    <p style=\"text-align: center; padding-top: 5%\">No Events</p>\n  </ion-row>\n  <ion-row>\n    <app-list-card-item [type]=\"'events'\" [items]=\"events\" [detailPage]=\"'event-details'\" (detailNavigate)=\"navigationToDetail($event)\"></app-list-card-item>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/events/EventConstant.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/EventConstant.ts ***!
    \*****************************************/

  /*! exports provided: EventConstant */

  /***/
  function srcAppEventsEventConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventConstant", function () {
      return EventConstant;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var EventConstant = function EventConstant() {
      _classCallCheck(this, EventConstant);
    };

    EventConstant.DATE_FORMAT = 'YYYY-MM-DDThh:mm';
    EventConstant.EVENT_URL = 'events';
    /***/
  },

  /***/
  "./src/app/events/event.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/event.service.ts ***!
    \*****************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppEventsEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
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


    var _core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/helper.service */
    "./src/app/core/helper.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _EventConstant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./EventConstant */
    "./src/app/events/EventConstant.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EventService = /*#__PURE__*/function () {
      function EventService(httpClient, helperService) {
        _classCallCheck(this, EventService);

        this.httpClient = httpClient;
        this.helperService = helperService;
        this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.event$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.event_day$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
      }

      _createClass(EventService, [{
        key: "fetchEventsByMonth",
        value: function fetchEventsByMonth(date) {
          var _this2 = this;

          var url = this.helperService.getResourceUrl(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].EVENT_URL + this.getMonthFilter(date));
          this.httpClient.get(url).subscribe(function (val) {
            return _this2.events$.next(val);
          });
        }
      }, {
        key: "fetchEventByDate",
        value: function fetchEventByDate(date) {
          var _this3 = this;

          var url = this.helperService.getResourceUrl(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].EVENT_URL + this.getDayFilter(date));
          this.httpClient.get(url).subscribe(function (val) {
            return _this3.event_day$.next(val);
          });
        }
      }, {
        key: "fetchEvent",
        value: function fetchEvent(id) {
          var _this4 = this;

          var url = this.helperService.getResourceUrl("".concat(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].EVENT_URL, "/").concat(id), false);
          return this.httpClient.get(url).subscribe(function (val) {
            return _this4.event$.next(val);
          });
        }
      }, {
        key: "getMonthFilter",
        value: function getMonthFilter(date) {
          return '?_sort=date:ASC&date_gte=' + moment__WEBPACK_IMPORTED_MODULE_4__(date).startOf('month').format(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].DATE_FORMAT) + '&date_lt=' + moment__WEBPACK_IMPORTED_MODULE_4__(date).add(1, 'M').startOf('month').format(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].DATE_FORMAT);
        }
      }, {
        key: "getDayFilter",
        value: function getDayFilter(date) {
          console.log(moment__WEBPACK_IMPORTED_MODULE_4__(date).startOf('day').format(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].DATE_FORMAT));
          return '?_sort=date:asc&date_gte=' + moment__WEBPACK_IMPORTED_MODULE_4__(date).startOf('day').format(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].DATE_FORMAT) + '&date_lt=' + moment__WEBPACK_IMPORTED_MODULE_4__(date).add(1, 'days').startOf('day').format(_EventConstant__WEBPACK_IMPORTED_MODULE_5__["EventConstant"].DATE_FORMAT);
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]
      }];
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])], EventService);
    /***/
  },

  /***/
  "./src/app/events/events-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
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


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");

    var routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }, {
      path: 'event-details/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | event-details-event-details-module */
        "event-details-event-details-module").then(__webpack_require__.bind(null,
        /*! ./event-details/event-details.module */
        "./src/app/events/event-details/event-details.module.ts")).then(function (m) {
          return m.EventDetailsPageModule;
        });
      }
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

    EventsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/events/events.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/events.module.ts ***!
    \*****************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
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


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ion2-calendar */
    "./node_modules/ion2-calendar/dist/index.js");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/events/event.service.ts");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ion2_calendar__WEBPACK_IMPORTED_MODULE_8__["CalendarModule"]],
      providers: [_event_service__WEBPACK_IMPORTED_MODULE_9__["EventService"]],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/events/events.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/events/events.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card.top {\n  margin-top: 20% !important;\n}\n\nion-card.bottom {\n  min-height: 50%;\n}\n\nion-button.controls {\n  --background: transparent !important;\n  --background-activated: #f3f3f3 !important;\n  --background-activated-opacity: 0.8;\n  position: absolute;\n}\n\nion-button.left-button {\n  left: 5%;\n  top: 0%;\n}\n\nion-button.right-button {\n  right: 5%;\n  top: 0%;\n}\n\nion-icon {\n  color: var(--ion-color-primary);\n}\n\n:host ::ng-deep .days {\n  height: 30px !important;\n}\n\n:host ::ng-deep .back, :host ::ng-deep .forward {\n  display: none !important;\n}\n\n.forward-icon {\n  color: #E02E2E !important;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n:host ::ng-deep ion-calendar ion-icon {\n  display: none !important;\n}\n\n:host ::ng-deep ion-calendar {\n  padding-top: 0px !important;\n}\n\nion-row.empty-row {\n  margin: 0% 10vh;\n  position: relative;\n  top: 5% !important;\n  color: #929292;\n}\n\nion-row.empty-row ion-icon {\n  width: 100%;\n  font-size: 3em;\n  color: #9292928c;\n}\n\nion-row.empty-row p {\n  text-align: center;\n  padding-top: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGl6YWJldGhoYXJyaXMvRG9jdW1lbnRzL3Byb2plY3RzL2ZhaXRoLW1vYmlsZS9zcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksUUFBQTtFQUNBLE9BQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxPQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLnRvcCB7XG4gICAgbWFyZ2luLXRvcDogMjAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkLmJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogNTAlO1xufVxuXG5pb24tYnV0dG9uLmNvbnRyb2xzIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogI2YzZjNmMyAhaW1wb3J0YW50O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQtb3BhY2l0eTogMC44O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWJ1dHRvbi5sZWZ0LWJ1dHRvbiB7XG4gICAgbGVmdDogNSU7XG4gICAgdG9wOiAwJTtcbn1cblxuaW9uLWJ1dHRvbi5yaWdodC1idXR0b24ge1xuICAgIHJpZ2h0OiA1JTtcbiAgICB0b3A6IDAlO1xufVxuXG5pb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXlzIHtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iYWNrLCA6aG9zdCA6Om5nLWRlZXAgLmZvcndhcmQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcndhcmQtaWNvbiB7XG4gICAgY29sb3I6ICNFMDJFMkUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jYWxlbmRhciBpb24taWNvbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhbGVuZGFyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cuZW1wdHktcm93IHtcbiAgICBtYXJnaW46IDAlIDEwdmg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNSUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzkyOTI5MjtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBjb2xvcjogIzkyOTI5MjhjO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsImlvbi1jYXJkLnRvcCB7XG4gIG1hcmdpbi10b3A6IDIwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC5ib3R0b20ge1xuICBtaW4taGVpZ2h0OiA1MCU7XG59XG5cbmlvbi1idXR0b24uY29udHJvbHMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNmM2YzZjMgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZC1vcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLWJ1dHRvbi5sZWZ0LWJ1dHRvbiB7XG4gIGxlZnQ6IDUlO1xuICB0b3A6IDAlO1xufVxuXG5pb24tYnV0dG9uLnJpZ2h0LWJ1dHRvbiB7XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiAwJTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRheXMge1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5iYWNrLCA6aG9zdCA6Om5nLWRlZXAgLmZvcndhcmQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb3J3YXJkLWljb24ge1xuICBjb2xvcjogI0UwMkUyRSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhbGVuZGFyIGlvbi1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhbGVuZGFyIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tcm93LmVtcHR5LXJvdyB7XG4gIG1hcmdpbjogMCUgMTB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjOTI5MjkyO1xufVxuaW9uLXJvdy5lbXB0eS1yb3cgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiAjOTI5MjkyOGM7XG59XG5pb24tcm93LmVtcHR5LXJvdyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/events/events.page.ts":
  /*!***************************************!*\
    !*** ./src/app/events/events.page.ts ***!
    \***************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
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


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ion2-calendar */
    "./node_modules/ion2-calendar/dist/index.js");
    /* harmony import */


    var ion2_calendar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/events/event.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(eventService, navController) {
        _classCallCheck(this, EventsPage);

        this.eventService = eventService;
        this.navController = navController;
        this.date = null;
        this.events = [];
        this.daySelected = false;
        this.previousSelDate = null;
        this.daysConfig = [];
      }

      _createClass(EventsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.getMonthEvents(new Date());
          this.eventService.events$.subscribe(function (data) {
            _this5.events = data;

            _this5.initializeCalendar(data);
          });
          this.eventService.event_day$.subscribe(function (data) {
            _this5.events = data;
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(date) {
          this.getDayEvents(date);

          if (this.date === this.previousSelDate) {
            console.log(this.date + ' firing');
            this.previousSelDate = null;
            this.unSelectDate();
            return;
          }

          this.previousSelDate = date;
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this.cal.next();
          this.getMonthEvents(this.cal.getViewDate());
        }
      }, {
        key: "onPrev",
        value: function onPrev() {
          this.cal.prev();
          this.getMonthEvents(this.cal.getViewDate());
        }
      }, {
        key: "unSelectDate",
        value: function unSelectDate() {
          this.daySelected = false;
          this.date = null;
          this.getMonthEvents(this.cal.getViewDate());
        }
      }, {
        key: "initializeCalendar",
        value: function initializeCalendar(data) {
          this.animateAwayDates();

          for (var i = 0; i < data.length; i++) {
            this.daysConfig.push({
              date: data[i].date,
              cssClass: 'day-style animated fadeIn faster'
            });
          }

          var options = {
            daysConfig: this.daysConfig,
            canBackwardsSelected: true
          };
          this.cal.options = options;
        }
      }, {
        key: "animateAwayDates",
        value: function animateAwayDates() {
          console.log(this.daysConfig.length);

          if (this.daysConfig.length > 0) {
            this.daysConfig.forEach(function (val) {
              setTimeout(function () {
                val.cssClass = 'day-style animated fadeOut faster';
              }, 500);
            });
            this.daysConfig = [];
          }
        }
      }, {
        key: "getTime",
        value: function getTime(date) {
          return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('hh:mm a');
        }
      }, {
        key: "getWeekDayAndDay",
        value: function getWeekDayAndDay(date) {
          return "".concat(moment__WEBPACK_IMPORTED_MODULE_4__(date).format('dd'), " : ").concat(moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD'));
        }
      }, {
        key: "navigationToDetail",
        value: function navigationToDetail(url) {
          this.navController.navigateForward(url);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.eventService.event$.next(null);
        }
      }, {
        key: "getMonthEvents",
        value: function getMonthEvents(date) {
          this.eventService.fetchEventsByMonth(date);
        }
      }, {
        key: "getDayEvents",
        value: function getDayEvents(date) {
          this.eventService.fetchEventByDate(date);
        }
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: _event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cal', null), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ion2_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarComponent"])], EventsPage.prototype, "cal", void 0);
    EventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/events/events.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], EventsPage);
    /***/
  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map