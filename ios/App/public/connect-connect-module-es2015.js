(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  biblestudy works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  contact works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"social-container\">\r\n  <ng-container>\r\n    <ion-row *ngFor=\"let item of data['data']; let i = index;\">\r\n      <ion-card class=\"container-card\" *ngIf=\"(getMedia(item) && getMedia(item).type === 'photo') || (getMedia(item) && getMedia(item).type === 'video')\">\r\n        <ion-card-content class=\"container-content\">\r\n          <ng-container *ngIf=\"getMedia(item) && getMedia(item).type === 'photo'\">\r\n          <img [src]=\"getMedia(item).image.src\" />\r\n        </ng-container>\r\n        <ng-container *ngIf=\"getMedia(item) && getMedia(item).type === 'video'\">\r\n          <video #player controls [poster]=\"getMedia(item).image.src\">\r\n            <source [src]=\"getMedia(item).media_source\" type=\"video/mp4\">\r\n          </video>\r\n        </ng-container>\r\n        </ion-card-content>\r\n        <ion-card-header>\r\n          <ion-card-subtitle>{{ convertToLocalDate(item.created_time) }}</ion-card-subtitle>\r\n          <ion-card-title *ngIf=\"item.message\">{{ item.message }}</ion-card-title>\r\n        </ion-card-header>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ng-container>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <app-navigation></app-navigation>\r\n</ion-header>\r\n\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\r\n  <div class=\"heading\">\r\n    <app-icon-bar [icon]=\"'chatbubbles-outline'\" [title]=\"'Connect'\"></app-icon-bar>\r\n    <ion-row class=\"fixed\">\r\n      <ion-col size=\"12\">\r\n        <ion-segment id=\"segment\" class=\"segment\" mode=\"md\" (ionChange)=\"segmentChanged()\" [(ngModel)]=\"segment\">\r\n          <ion-segment-button *ngFor=\"let val of segments\" [value]=\"val.value\">\r\n            <ion-label>{{ val.name }}</ion-label>\r\n          </ion-segment-button>\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <ion-slides #slides (ionSlideDidChange)=\"slideChanged()\">\r\n    <ion-slide>\r\n      <ng-container>\r\n        <app-social [data]=\"fbFeedData\" [scrolling]=\"scrolling\" [view]=\"view\"></app-social>\r\n      </ng-container>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ng-container>\r\n        <app-biblestudy></app-biblestudy>\r\n      </ng-container>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <ng-container>\r\n        <app-contact></app-contact>\r\n      </ng-container>\r\n    </ion-slide>\r\n  </ion-slides>\r\n  <!-- <video width=\"320\" height=\"240\" controls>\r\n    <source src=\"https://video-dfw5-2.xx.fbcdn.net/v/t42.9040-2/10000000_169484051004398_2075530602055991296_n.mp4?_nc_cat=104&_nc_sid=985c63&efg=eyJybHIiOjMwMCwicmxhIjozMjQwLCJ2ZW5jb2RlX3RhZyI6ImxlZ2FjeV9zZCJ9&_nc_ohc=cg_1gi5hlMgAX_PWULl&rl=300&vabr=129&_nc_ht=video-dfw5-2.xx&oh=78aeee24db44bffdca51e229b9e34d7b&oe=5EAB85C9\" type=\"video/mp4\">\r\n  </video> -->\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/connect/components/biblestudy/biblestudy.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/connect/components/biblestudy/biblestudy.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9iaWJsZXN0dWR5L2JpYmxlc3R1ZHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/connect/components/biblestudy/biblestudy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/connect/components/biblestudy/biblestudy.component.ts ***!
  \***********************************************************************/
/*! exports provided: BiblestudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblestudyComponent", function() { return BiblestudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BiblestudyComponent = class BiblestudyComponent {
    constructor() { }
    ngOnInit() { }
};
BiblestudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-biblestudy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./biblestudy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/biblestudy/biblestudy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./biblestudy.component.scss */ "./src/app/connect/components/biblestudy/biblestudy.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BiblestudyComponent);



/***/ }),

/***/ "./src/app/connect/components/contact/contact.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/connect/components/contact/contact.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/connect/components/contact/contact.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/connect/components/contact/contact.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() { }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/connect/components/contact/contact.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/connect/components/social/social.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/connect/components/social/social.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.social-container {\n  height: auto;\n  margin-top: 20vh;\n}\n\nimg {\n  border-radius: 0px !important;\n  width: 100%;\n  margin: auto;\n}\n\nvideo {\n  border-radius: 0px !important;\n  width: 100%;\n  margin: auto;\n}\n\nion-card-content {\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\nion-card {\n  margin: auto !important;\n  position: relative;\n  bottom: 2em !important;\n  min-height: 15vh;\n  margin: 10% 5% 0% 5% !important;\n}\n\n.bar {\n  z-index: 2;\n  width: 100%;\n  text-align: center;\n  transform: translate(0%, -100%);\n  background-image: url('grey-gradient.jpg');\n}\n\nion-icon {\n  color: #516065 !important;\n}\n\nion-card-title {\n  font-size: 13px !important;\n}\n\nion-card-subtitle {\n  font-size: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdC9jb21wb25lbnRzL3NvY2lhbC9DOlxcVXNlcnNcXGR0YXRrXFxQcm9qZWN0c1xcZmFpdGgtbW9iaWxlL3NyY1xcYXBwXFxjb25uZWN0XFxjb21wb25lbnRzXFxzb2NpYWxcXHNvY2lhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29ubmVjdC9jb21wb25lbnRzL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5zb2NpYWwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwdmg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMTV2aDtcclxuICAgIG1hcmdpbjogMTAlIDUlIDAlIDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xMDAlKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmV5LWdyYWRpZW50LmpwZycpO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzUxNjA2NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJkaXYuc29jaWFsLWNvbnRhaW5lciB7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbnZpZGVvIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDJlbSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAxNXZoO1xuICBtYXJnaW46IDEwJSA1JSAwJSA1JSAhaW1wb3J0YW50O1xufVxuXG4uYmFyIHtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC0xMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmV5LWdyYWRpZW50LmpwZ1wiKTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogIzUxNjA2NSAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/connect/components/social/social.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/connect/components/social/social.component.ts ***!
  \***************************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let SocialComponent = class SocialComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.data);
    }
    ngOnChanges(changes) {
        if (this.scrolling) {
            this.viewDidScroll();
        }
        if (this.view && this.view !== 0) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
        }
    }
    viewDidScroll() {
        if (this.currentPlaying && this.isElementInView(this.currentPlaying)) {
            return;
        }
        if (this.currentPlaying && !this.isElementInView(this.currentPlaying)) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
        }
        this.videoPlayers.forEach(player => {
            const nativeElement = player.nativeElement;
            const inView = this.isElementInView(nativeElement);
            if (this.currentPlaying) {
                return;
            }
            if (inView) {
                this.currentPlaying = nativeElement;
                this.currentPlaying.muted = true;
                this.currentPlaying.play();
            }
        });
    }
    getMedia(item) {
        if (item.attachments) {
            const data = item.attachments.data[0];
            return { type: data.media_type, media_source: data.media ? data.media.source : '', image: data.media ? data.media.image : '' };
        }
        return null;
    }
    isElementInView(el) {
        const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    convertToLocalDate(date) {
        return date ? moment__WEBPACK_IMPORTED_MODULE_2__(date).format('dddd, MMMM Do YYYY') : '';
    }
    ngOnDestroy() {
        if (this.currentPlaying) {
            this.currentPlaying.pause();
            this.currentPlaying = null;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SocialComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('scrolling'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialComponent.prototype, "scrolling", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('view'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SocialComponent.prototype, "view", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('player'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], SocialComponent.prototype, "videoPlayers", void 0);
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/components/social/social.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.component.scss */ "./src/app/connect/components/social/social.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SocialComponent);



/***/ }),

/***/ "./src/app/connect/connect-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/connect/connect-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ConnectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageRoutingModule", function() { return ConnectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _connect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect.page */ "./src/app/connect/connect.page.ts");




const routes = [
    {
        path: '',
        component: _connect_page__WEBPACK_IMPORTED_MODULE_3__["ConnectPage"]
    }
];
let ConnectPageRoutingModule = class ConnectPageRoutingModule {
};
ConnectPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnectPageRoutingModule);



/***/ }),

/***/ "./src/app/connect/connect.constant.ts":
/*!*********************************************!*\
  !*** ./src/app/connect/connect.constant.ts ***!
  \*********************************************/
/*! exports provided: ConnectConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectConstant", function() { return ConnectConstant; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ConnectConstant {
}
ConnectConstant.FB_FEED = 'https://graph.facebook.com/v6.0/107643457281903?fields=posts%7Battachments%7Bdescription%2Cmedia%2Cmedia_type%2Ctitle%7D%2Cmessage%2Ccreated_time%7D&access_token=EAADGQ0IHbkYBALk8HdWZCpnrRnlwlSkFwoO2P1OpTgu9N5PdXZCruyQxAKzI9ZCJT7A3uh2ZCBLl19og6BEy5uLg2TSKz6UgtAVCqdZBMoELRKOI3x1C3U8T2vcoQqwNj22BzmpTHn8cGZAbrY2kvH9XtKbioDibYVVZAh56oX1ZBAZDZD';


/***/ }),

/***/ "./src/app/connect/connect.module.ts":
/*!*******************************************!*\
  !*** ./src/app/connect/connect.module.ts ***!
  \*******************************************/
/*! exports provided: ConnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function() { return ConnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect-routing.module */ "./src/app/connect/connect-routing.module.ts");
/* harmony import */ var _connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect.page */ "./src/app/connect/connect.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_social_social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/social/social.component */ "./src/app/connect/components/social/social.component.ts");
/* harmony import */ var _components_biblestudy_biblestudy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/biblestudy/biblestudy.component */ "./src/app/connect/components/biblestudy/biblestudy.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/connect/components/contact/contact.component.ts");
/* harmony import */ var _services_social_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/social.service */ "./src/app/connect/services/social.service.ts");












let ConnectPageModule = class ConnectPageModule {
};
ConnectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [
            _services_social_service__WEBPACK_IMPORTED_MODULE_11__["SocialService"]
        ],
        declarations: [_connect_page__WEBPACK_IMPORTED_MODULE_6__["ConnectPage"], _components_social_social_component__WEBPACK_IMPORTED_MODULE_8__["SocialComponent"], _components_biblestudy_biblestudy_component__WEBPACK_IMPORTED_MODULE_9__["BiblestudyComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]]
    })
], ConnectPageModule);



/***/ }),

/***/ "./src/app/connect/connect.page.scss":
/*!*******************************************!*\
  !*** ./src/app/connect/connect.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  margin: 0px 5%;\n  border-bottom: 1px solid #3171e05c;\n}\n\nion-slide {\n  height: auto;\n}\n\n.segment {\n  scroll-behavior: smooth;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdC9DOlxcVXNlcnNcXGR0YXRrXFxQcm9qZWN0c1xcZmFpdGgtbW9iaWxlL3NyY1xcYXBwXFxjb25uZWN0XFxjb25uZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29ubmVjdC9jb25uZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3QvY29ubmVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xyXG4gICAgbWFyZ2luOiAwcHggNSU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxNzFlMDVjO1xyXG59XHJcblxyXG5pb24tc2xpZGUge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufSIsImlvbi1pbnB1dCB7XG4gIG1hcmdpbjogMHB4IDUlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxNzFlMDVjO1xufVxuXG5pb24tc2xpZGUge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWdtZW50IHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59Il19 */");

/***/ }),

/***/ "./src/app/connect/connect.page.ts":
/*!*****************************************!*\
  !*** ./src/app/connect/connect.page.ts ***!
  \*****************************************/
/*! exports provided: ConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPage", function() { return ConnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/social.service */ "./src/app/connect/services/social.service.ts");




let ConnectPage = class ConnectPage {
    constructor(socialService) {
        this.socialService = socialService;
        this.segments = [{ name: 'Social', value: 0 }, { name: 'Bible Studies', value: 1 }, { name: 'Contact', value: 2 }];
        this.segment = 0;
        this.fbFeedData = [];
    }
    ngOnInit() {
        this.socialService.fetchFBFeed().subscribe(val => { this.fbFeedData = val['posts']; });
    }
    segmentChanged() {
        this.slider.slideTo(this.segment, 500);
    }
    slideChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.segment = yield this.slider.getActiveIndex();
            this.view = this.segment;
        });
    }
    onScroll(event) {
        this.scrolling = event;
    }
};
ConnectPage.ctorParameters = () => [
    { type: _services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], ConnectPage.prototype, "slider", void 0);
ConnectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connect',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./connect.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./connect.page.scss */ "./src/app/connect/connect.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"]])
], ConnectPage);



/***/ }),

/***/ "./src/app/connect/services/social.service.ts":
/*!****************************************************!*\
  !*** ./src/app/connect/services/social.service.ts ***!
  \****************************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helper.service */ "./src/app/core/helper.service.ts");
/* harmony import */ var _connect_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../connect.constant */ "./src/app/connect/connect.constant.ts");





let SocialService = class SocialService {
    constructor(httpClient, helperService) {
        this.httpClient = httpClient;
        this.helperService = helperService;
    }
    fetchFBFeed() {
        const url = _connect_constant__WEBPACK_IMPORTED_MODULE_4__["ConnectConstant"].FB_FEED;
        return this.httpClient.get(url);
    }
};
SocialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
SocialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_core_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
], SocialService);



/***/ })

}]);
//# sourceMappingURL=connect-connect-module-es2015.js.map