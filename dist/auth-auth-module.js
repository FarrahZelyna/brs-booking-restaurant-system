(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-loading-bar></ngx-loading-bar>\n<div class=\"main-content auth-content\">\n  <div class=\"container mt-8 pb-9\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-5 col-md-7\">\n        <div class=\"card bg-secondary border-0 mb-0\">\n          <div class=\"card-header bg-transparent\">\n            <div class=\"row\">\n              <div class=\"col clearfix\">\n                <h1 class=\" fa fa-times text-dark float-right\" (click)=\"navigatePage('home')\" style=\"cursor: pointer;\"></h1>\n              </div>\n            </div>\n\n            <div class=\"logo-box mb--1 text-center\">\n              <img class=\"logo pt-2 pb-2\" [src]=\"imgLogo\" />\n            </div>\n          </div>\n          <div class=\"card-body px-lg-5 py-lg-5\">\n            <form [formGroup]=\"loginForm\">\n              <div class=\"form-group mb-3\" [ngClass]=\"{ focused: focusUsername === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <input class=\"form-control\" placeholder=\"Email\" type=\"email\" formControlName=\"username\"\n                    (focus)=\"focusUsername = true\" (blur)=\"focusUsername = false\" />\n                </div>\n                <ng-container *ngFor=\"let message of loginFormMessages.username\">\n                  <div *ngIf=\"\n                      loginForm.get('username').hasError(message.type) &&\n                      (loginForm.get('username').dirty ||\n                        loginForm.get('username').touched)\n                    \">\n                    <p class=\"error-message\">\n                      <span>{{ message.message }}</span>\n                    </p>\n                  </div>\n                </ng-container>\n              </div>\n\n              <div class=\"form-group\" [ngClass]=\"{ focused: focusPassword === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <input class=\"form-control\" placeholder=\"Password\" type=\"password\" formControlName=\"password\"\n                    (focus)=\"focusPassword = true\" (blur)=\"focusPassword = false\" />\n                </div>\n                <div class=\"validation-errors\">\n                  <ng-container *ngFor=\"let message of loginFormMessages.password\">\n                    <div *ngIf=\"\n                        loginForm.get('password').hasError(message.type) &&\n                        (loginForm.get('password').dirty ||\n                          loginForm.get('password').touched)\n                      \">\n                      <p class=\"error-message\">\n                        <span>{{ message.message }}</span>\n                      </p>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                    <input class=\"custom-control-input\" id=\"customCheckLogin\" type=\"checkbox\" />\n                    <label class=\"custom-control-label\" for=\"customCheckLogin\">\n                      <span>Remember me?</span>\n                    </label>\n                  </div>\n                </div>\n                <div class=\"col-6 text-right\">\n                  <label class=\"forget-label\" (click)=\"navigatePage('forgot')\">\n                    <span>Forgot password</span>\n                  </label>\n                </div>\n              </div>\n            </form>\n\n            <div class=\"text-center\">\n              <button type=\"button\" class=\"btn  my-4 btn-block\" (click)=\"login()\">\n                Sign in\n              </button>\n            </div>\n\n            <div>\n              <button type=\"button\" class=\"btn btn-block my-2\">\n                Register\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"row mt-3\">\n          <div class=\"col-6\">\n            <a class=\"text-light\" href=\"javascript:void(0)\">\n              <small> Forgot password? </small>\n            </a>\n          </div>\n\n          <div class=\"col-6 text-right\">\n            <a class=\"text-light\" href=\"javascript:void(0)\">\n              <small> Create new account </small>\n            </a>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_7__["AuthRoutes"])
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");


var AuthRoutes = [
    {
        path: '',
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-box {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-box .logo {\n  max-height: 9rem;\n}\n.auth-content {\n  background-image: url('restaurant-6.jpg'), -webkit-gradient(linear, left top, left bottom, from(rgba(43, 46, 48, 0.3)), to(rgba(31, 29, 29, 0.3)));\n  background-image: url('restaurant-6.jpg'), linear-gradient(rgba(43, 46, 48, 0.3), rgba(31, 29, 29, 0.3));\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  background-blend-mode: overlay;\n}\n.forget-label {\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n.forget-label span {\n  position: relative;\n  top: 2px;\n}\n.custom-control-label {\n  vertical-align: none !important;\n}\n.error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.card {\n  background-color: white;\n}\n.btn {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  text-transform: uppercase;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 10px;\n  background-color: #ca162c;\n  border-left: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9DOlxcVXNlcnNcXEhVQVdFSVxcRG9jdW1lbnRzXFx2YW5kZXdpZWxlXFxicnMvc3JjXFxhcHBcXGF1dGhcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7QUNFSjtBREVBO0VBRUUsa0pBQUE7RUFBQSx3R0FBQTtFQUNBLDRCQUFBO0VBSUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FDQUY7QURJQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0RGO0FERUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNBSjtBRElBO0VBQ0UsK0JBQUE7QUNERjtBRElBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREtBO0VBRUUsdUJBQUE7QUNIRjtBRE9BO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAubG9nbyB7XG4gICAgbWF4LWhlaWdodDogOXJlbTtcbiAgfVxufVxuXG4uYXV0aC1jb250ZW50IHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGQjg1RDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy90aGVtZS9yZXN0YXVyYW50LTYuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQocmdiYSg0MywgNDYsIDQ4LCAwLjMpLHJnYmEoMzEsIDI5LCAyOSwgMC4zKSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG5cbn1cblxuLmZvcmdldC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgc3BhbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICB9XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIHZlcnRpY2FsLWFsaWduOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6ICNmNTM2NWM7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuXG4uY2FyZHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG59XG5cbi5idG4ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ExNjJjO1xuICBib3JkZXItbGVmdDpub25lICFpbXBvcnRhbnRcbiB9XG5cbiIsIi5sb2dvLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5sb2dvLWJveCAubG9nbyB7XG4gIG1heC1oZWlnaHQ6IDlyZW07XG59XG5cbi5hdXRoLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3RoZW1lL3Jlc3RhdXJhbnQtNi5qcGdcIiksIGxpbmVhci1ncmFkaWVudChyZ2JhKDQzLCA0NiwgNDgsIDAuMyksIHJnYmEoMzEsIDI5LCAyOSwgMC4zKSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG59XG5cbi5mb3JnZXQtbGFiZWwge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9yZ2V0LWxhYmVsIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjUzNjVjO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ExNjJjO1xuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/__ivy_ngcc__/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, notifyService, formBuilder, loadingBar, router) {
        this.authService = authService;
        this.notifyService = notifyService;
        this.formBuilder = formBuilder;
        this.loadingBar = loadingBar;
        this.router = router;
        // Image
        this.imgLogo = "assets/img/logo/logo-brs-1.png";
        this.loginFormMessages = {
            username: [
                { type: "required", message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
            ],
            password: [
                { type: "required", message: "Password is required" },
                {
                    type: "minLength",
                    message: "Password must have at least 8 characters",
                },
            ],
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])),
        });
    };
    LoginComponent.prototype.login = function () {
        // this.loadingBar.start();
        console.log(this.loginForm.value.username);
        this.successMessage();
        // this.navigatePage("dashboard-admin");
        if (this.loginForm.value.username == "admin" && this.loginForm.value.password == "admin") {
            this.navigatePage("dashboard-admin");
        }
        else if (this.loginForm.value.username == "user" && this.loginForm.value.password == "user") {
            this.navigatePage("dashboard-user");
        }
    };
    LoginComponent.prototype.navigatePage = function (path) {
        if (path == "login") {
            return this.router.navigate(["/auth/login"]);
        }
        else if (path == "forgot") {
            return this.router.navigate(["/auth/forgot"]);
        }
        else if (path == "register") {
            return this.router.navigate(["/auth/register"]);
        }
        else if (path == "dashboard-admin") {
            return this.router.navigate(["/admin/home"]);
        }
        else if (path == "dashboard-user") {
            return this.router.navigate(["/user/home"]);
        }
        else if (path == "dashboard-bus") {
            return this.router.navigate(["/bus/dashboard"]);
        }
        else if (path == "dashboard-bus") {
            return this.router.navigate(["/bus/dashboard"]);
        }
        else if (path == "home") {
            return this.router.navigate(["/portal/landing"]);
        }
    };
    LoginComponent.prototype.successMessage = function () {
        var title = "Log In";
        var message = "Logging in right now";
        this.notifyService.openToastr(title, message);
    };
    LoginComponent.prototype.errorMessage = function () {
        var title = "Error";
        var message = "Wrong Username or password.Please Try Again";
        this.notifyService.openToastrHttp(title, message);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map