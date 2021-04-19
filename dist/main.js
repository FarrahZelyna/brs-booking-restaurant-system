(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-public/footer-public.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-public/footer-public.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- Site footer -->\n<footer class=\"site-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\" style=\"float:right; padding-right:10% !important;\">\n        <h6>About BRS</h6>\n        <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. \n          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n        </span>\n      </div>\n\n      <div class=\"col-xs-6 col-md-3\">\n        <h6>Contact Us</h6>\n        <span><i class=\"fas fa-envelope text-black\"></i>&nbsp;&nbsp;general@brs.com.my</span><br />\n        <span><i class=\"fas fa-phone text-brown\"></i>&nbsp;&nbsp;Tel: 603-8179 4400 </span><br />\n        <span><i class=\"fas fa-phone text-brown\"></i>&nbsp;&nbsp;Faks: 603-8005 9446</span><br />\n      </div>\n\n      <div class=\"col-xs-6 col-md-3\">\n        <h6>Office Address</h6>\n        <span>\n          <i class=\"fas fa-map-marker-alt text-white\"></i>&nbsp;&nbsp;Pejabat\n          Malaysian BRS Tech<br />\n          No 6, Persiaran Institusi,<br />\n          Bandar Baru Bangi,<br />\n          43000 Kajang,<br />\n          Selangor Darul Ehsan.\n        </span>\n      </div>\n    </div>\n    <hr>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-6 col-xs-12\">\n        <p class=\"copyright-text\">Copyright &copy; 2021 All Rights Reserved by\n          <a href=\"#\" class=\"font-weight-bold\">BRS - Booking Restaurant System</a>.\n        </p>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6 col-xs-12\">\n        <ul class=\"social-icons\">\n          <li><a class=\"facebook\" href=\"#\"><i class=\"fab fa-facebook text-blue\"></i></a></li>\n          <li><a class=\"twitter\" href=\"#\"><i class=\"fab fa-twitter text-info\"></i></a></li>\n          <li><a class=\"dribbble\" href=\"#\"><i class=\"fab fa-instagram text-pink\"></i></a></li>\n          <li><a class=\"linkedin\" href=\"#\"><i class=\"fab fa-linkedin text-blue\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <footer class=\"footer\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          All rights reserved ©\n          <a href=\"#\" class=\"font-weight-bold ml-1\">\n            BRS - Booking Restaurant System\n          </a>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar-public/navbar-public.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar-public/navbar-public.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\t<nav class=\"mt-4 navbar navbar-top navbar-expand-sm bg-transparent border-bottom\" id=\"navbar-main\">\n\t\t<div class=\"container-fluid\">\n\n\t\t\t<div class=\"collapse navbar-collapse justify-content-around\" id=\"navbarSupportedContent\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<a (click)=\"navigatePage('pages/landing')\">\n\t\t\t\t\t\t\t<img src=\"assets/img/logo/logo-brs-1.png\" width=\"50\" height=\"50\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 100px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">HOME</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 100px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DELIVERY</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 180px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DINING VOUCHER</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 180px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DOWNLOAD APP</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-login text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"border: 1px solid white; border-radius: 0px; width: 100px; \"\n\t\t\t\t\t\t\t(click)=\"navigatePage('login')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">SIGN IN</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n\t<nav class=\"mt-4 navbar navbar-top navbar-expand-sm bg-transparent border-bottom\" id=\"navbar-main\">\n\t\t<div class=\"container-fluid\">\n\n\t\t\t<div class=\"collapse navbar-collapse justify-content-around\" id=\"navbarSupportedContent\">\n\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<a (click)=\"navigatePage('pages/landing')\">\n\t\t\t\t\t\t\t<img src=\"assets/img/logo/logo-brs-1.png\" width=\"50\" height=\"50\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf= \"isUser\" class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 100px; \" (click)=\"navigatePage('userhome')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">HOME</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li *ngIf= \"isAdmin\" class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 100px; \" (click)=\"navigatePage('adminhome')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">HOME</span>\n\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 100px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DELIVERY</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 180px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DINING VOUCHER</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 180px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">DOWNLOAD APP</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"isUser\" class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 220px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">MANAGE MY BOOKINGS</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li *ngIf=\"isAdmin\"  class=\"nav-item\" style=\"cursor: pointer;\">\n\t\t\t\t\t\t<button class=\"btn btn-li  text-sm btn-block text-white  \" routerLinkActive=\"active\"\n\t\t\t\t\t\t\tstyle=\"width: 180px; \" (click)=\"navigatePage('home')\">\n\t\t\t\t\t\t\t<span class=\"nav-link-inner--text\">BOOKING REPORT</span>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sidenav navbar navbar-vertical bg-white fixed-right navbar-expand-xs navbar-light\" id=\"sidenav-main\"\n  (mouseover)=\"onMouseEnterSidenav()\" (mouseout)=\"onMouseLeaveSidenav()\">\n  <perfect-scrollbar>\n    <div class=\"scrollbar-inner\">\n      <div class=\"sidenav-header d-flex align-items-center\">\n        <!-- <a class=\"navbar-brand\" [routerLink]=\"['/#']\">\n          <img [src]=\"imgLogo\" class=\"mb-2 mt-2\" alt=\"...\" (click)=\"navigatePage('home')\" />\n        </a> -->\n        <ul class=\"mt-4 navbar-nav align-items-center ml-auto ml-md-0\">\n          <li class=\"nav-item \">\n            <a class=\"nav-link pr-0 \">\n              <div class=\"media align-items-center\">\n                <span class=\"avatar avatar-sm rounded-circle\">\n                  <img alt=\"Image placeholder\" [src]=\"imgAvatar\" />\n                </span>\n                <div *ngIf = \"isUser\" class=\"media-body ml-2 d-none d-lg-block\" style=\"cursor: context-menu;\">\n                  <span class=\"mb-0 text-sm font-weight-bold\">Welcome User!</span>\n                </div>\n                <div *ngIf = \"isAdmin\" class=\"media-body ml-2 d-none d-lg-block\" style=\"cursor: context-menu;\">\n                  <span class=\"mb-0 text-sm font-weight-bold\">Welcome Admin!</span>\n                </div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <div class=\"ml-auto\">\n          <!-- Sidenav toggler -->\n          <div class=\"sidenav-toggler d-none d-xl-block\" data-action=\"sidenav-unpin\" data-target=\"#sidenav-main\"\n            (click)=\"minimizeSidebar()\">\n            <div class=\"sidenav-toggler-inner\">\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"navbar-inner\">\n        <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n          <!-- Collapse header -->\n          <ul class=\"navbar-nav\">\n            <li *ngFor=\"let menuitem of menuItems\" class=\"nav-item bg-white\">\n              <!--If is a single link-->\n              <a routerLinkActive=\"active\" [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\"\n                class=\"nav-link\">\n                <i class=\"ni {{ menuitem.icontype }}\"></i>\n                <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n              </a>\n              <!--If it have a submenu-->\n              <a data-toggle=\"collapse\" routerLinkActive=\"active\" *ngIf=\"menuitem.type === 'sub'\"\n                (click)=\"menuitem.isCollapsed = !menuitem.isCollapsed\" [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n                [attr.aria-controls]=\"menuitem.collapse\" class=\"nav-link\">\n                <i class=\"ni {{ menuitem.icontype }}\"></i>\n                <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n              </a>\n\n              <!--Display the submenu items-->\n              <div id=\"{{ menuitem.collapse }}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\"\n                [collapse]=\"menuitem.isCollapsed\" [isAnimated]=\"true\">\n                <ul class=\"nav nav-sm flex-column\">\n                  <li *ngFor=\"let childitems of menuitem.children\" class=\"nav-item\">\n                    <!--If is a single link-->\n                    <a routerLinkActive=\"active\" routerLinkActive=\"active\"\n                      [routerLink]=\"[menuitem.path, childitems.path]\" class=\"nav-link\"\n                      *ngIf=\"childitems.type === 'link'\">\n                      {{ childitems.title }}\n                    </a>\n                    <!--If it have a submenu-->\n                    <a routerLinkActive=\"active\" data-toggle=\"collapse\"\n                      (click)=\"childitems.isCollapsed = !childitems.isCollapsed\"\n                      [attr.aria-expanded]=\"!childitems.isCollapsed\" [attr.aria-controls]=\"childitems.collapse\"\n                      *ngIf=\"childitems.type === 'sub'\" class=\"nav-link\">\n                      {{ childitems.title }}\n                    </a>\n                    <!--Display the submenu items-->\n                    <div id=\"{{ childitems.collapse }}\" class=\"collapse\" *ngIf=\"childitems.type === 'sub'\"\n                      [collapse]=\"childitems.isCollapsed\" [isAnimated]=\"true\" routerLinkActive=\"active\">\n                      <ul class=\"nav\">\n                        <li *ngFor=\"let childitem of childitems.children\" class=\"nav-item\">\n                          <a routerLinkActive=\"active\" [routerLink]=\"[\n                              menuitem.path,\n                              childitems.path,\n                              childitem.path\n                            ]\" class=\"nav-link\">\n                            {{ childitem.title }}\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </li>\n          </ul>\n          <!-- Divider -->\n          <hr class=\"my-3\" />\n        </div>\n      </div>\n    </div>\n  </perfect-scrollbar>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-main navbar-expand-lg navbar-dark bg-danger\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"main-content\">\n  <!-- Header -->\n  <div class=\"header bg-danger pt-5 pb-7\">\n    <div class=\"container\">\n      <div class=\"header-body\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <div class=\"pr-5\">\n              <h1 class=\"display-2 text-white font-weight-bold mb-0\">\n                Argon Dashboard PRO Angular\n              </h1>\n              <h2 class=\"display-4 text-white font-weight-light\">\n                A beautiful premium dashboard for Bootstrap 4 and Angular.\n              </h2>\n              <p class=\"text-white mt-4\">\n                Argon perfectly combines reusable HTML and modular CSS with a\n                modern styling and beautiful markup throughout each HTML\n                template in the pack.\n              </p>\n              <div class=\"mt-5\">\n                <a\n                  [routerLink]=\"['/dashboards/dashboard']\"\n                  class=\"btn btn-neutral my-2\"\n                  >Explore Dashboard</a\n                >\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  class=\"btn btn-default my-2\"\n                  >Purchase now</a\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"row pt-5\">\n              <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Components</h5>\n                    <p>Argon comes with over 70 handcrafted components.</p>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Plugins</h5>\n                    <p>\n                      Fully integrated and extendable third-party plugins that\n                      you will love.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pt-lg-5 pt-4\">\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Pages</h5>\n                    <p>\n                      From simple to complex, you get a beautiful set of 15+\n                      page examples.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Documentation</h5>\n                    <p>You will love how easy is to to work with Argon.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <section class=\"py-6 pb-9 bg-default\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-md-6\">\n          <h2 class=\"display-3 text-white\">A complete HTML solution</h2>\n          <p class=\"lead text-white\">\n            Argon is a completly new product built on our newest re-built from\n            scratch framework structure that is meant to make our products more\n            intuitive, more adaptive and, needless to say, so much easier to\n            customize. Let Argon amaze you with its cool features and build tools\n            and get your project to a whole new level.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 mt--7\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-primary text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h4 class=\"h3 text-primary text-uppercase\">\n                    Based on Bootstrap 4\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon is built on top of the most popular open source\n                    toolkit for developing with HTML, CSS, and JS.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >bootstrap 4</span\n                    >\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >dashboard</span\n                    >\n                    <span class=\"badge badge-pill badge-primary\">template</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-success text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h4 class=\"h3 text-success text-uppercase\">\n                    Integrated build tools\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Use Argons's included npm and gulp scripts to compile source\n                    code, run tests, and more with just a few simple commands.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success mr-1\">npm</span>\n                    <span class=\"badge badge-pill badge-success mr-1\"\n                      >gulp</span\n                    >\n                    <span class=\"badge badge-pill badge-success\"\n                      >build tools</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-warning text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h4 class=\"h3 text-warning text-uppercase\">\n                    Full Sass support\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon makes customization easier than ever before. You get\n                    all the tools to make your website building process a\n                    breeze.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >sass</span\n                    >\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >design</span\n                    >\n                    <span class=\"badge badge-pill badge-warning\"\n                      >customize</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-1.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Awesome features</h1>\n            <p>\n              This dashboard comes with super cool features that are meant to\n              help in the process. Handcrafted components, page examples and\n              functional widgets are just a few things you will see and love at\n              first sight.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Carefully crafted components</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-html5\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Amazing page examples</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Super friendly support team</h4></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/theme/landing-2.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pr-md-5\">\n            <h1>Example pages</h1>\n            <p>\n              If you want to get inspiration or just show something directly to\n              your clients, you can jump start your development with our\n              pre-built example pages.\n            </p>\n            <a\n              [routerLink]=\"['/examples/profile']\"\n              class=\"font-weight-bold text-warning mt-5\"\n              >Explore pages</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-3.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Lovable widgets and cards</h1>\n            <p>\n              We love cards and everybody on the web seems to. We have gone\n              above and beyond with options for you to organise your\n              information. From cards designed for content, to pricing cards or\n              user profiles, you will have many options to choose from.\n            </p>\n            <a\n              [routerLink]=\"['/widgets']\"\n              class=\"font-weight-bold text-info mt-5\"\n              >Explore widgets</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7 section-nucleo-icons bg-white overflow-hidden\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Nucleo Icons</h2>\n          <p class=\"lead\">\n            The official package contains over 21.000 icons which are looking\n            great in combination with Argon Design System. Make sure you check\n            all of them and use those that you like the most.\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              [routerLink]=\"['/documentation/icons']\"\n              target=\"_blank\"\n              class=\"btn btn-primary\"\n              >View demo icons</a\n            >\n            <a\n              href=\"https://nucleoapp.com/?ref=1712\"\n              target=\"_blank\"\n              class=\"btn btn-default mt-3 mt-md-0\"\n              >View all icons</a\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"blur--hover\">\n        <a [routerLink]=\"['/documentation/icons']\">\n          <div class=\"icons-container blur-item mt-5\">\n            <!-- Center -->\n            <i class=\"icon ni ni-diamond\"></i>\n            <!-- Right 1 -->\n            <i class=\"icon icon-sm ni ni-album-2\"></i>\n            <i class=\"icon icon-sm ni ni-app\"></i>\n            <i class=\"icon icon-sm ni ni-atom\"></i>\n            <!-- Right 2 -->\n            <i class=\"icon ni ni-bag-17\"></i>\n            <i class=\"icon ni ni-bell-55\"></i>\n            <i class=\"icon ni ni-credit-card\"></i>\n            <!-- Left 1 -->\n            <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n            <i class=\"icon icon-sm ni ni-building\"></i>\n            <i class=\"icon icon-sm ni ni-button-play\"></i>\n            <!-- Left 2 -->\n            <i class=\"icon ni ni-calendar-grid-58\"></i>\n            <i class=\"icon ni ni-camera-compact\"></i>\n            <i class=\"icon ni ni-chart-bar-32\"></i>\n          </div>\n          <span class=\"blur-hidden h5 text-success\"\n            >Explore all the 21.000+ Nucleo Icons</span\n          >\n        </a>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">\n            Do you love this awesome\n            <span class=\"text-success\">Dashboard for Bootstrap 4?</span>\n          </h2>\n          <p class=\"lead\">\n            Cause if you do, it can be yours now. Hit the button below to\n            navigate to get the free version or purchase a license for your next\n            project. Build a new web app or give an old Bootstrap project a new\n            look!\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-neutral mb-3 mb-sm-0\"\n              target=\"_blank\"\n            >\n              <span class=\"btn-inner--text\">Get FREE version</span>\n            </a>\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-primary btn-icon mb-3 mb-sm-0\"\n            >\n              <span class=\"btn-inner--icon\"><i class=\"ni ni-basket\"></i></span>\n              <span class=\"btn-inner--text\">Purchase now</span>\n              <span\n                class=\"badge badge-md badge-pill badge-floating badge-danger border-white\"\n                >$89</span\n              >\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Angular - One framework. Mobile &amp; desktop\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Bootstrap 4 - Most popular front-end component library\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\"\n                    class=\"img-fluid rounded-circle shadow shadow-lg--hover\"\n                  />\n                </a>\n              </div>\n\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"React - A JavaScript library for building user interfaces\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Laravel - The PHP Framework For Web Artisans\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Vue.js - The progressive javascript framework\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Sketch - Digital design toolkit\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.adobe.com/products/photoshop.html?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\"\n                    class=\"img-fluid rounded-circle opacity-3\"\n                  />\n                </a>\n              </div>\n            </div>\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer -->\n<footer class=\"py-5\" id=\"footer-main\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<div class=\"\" (window:resize)=\"isMobile($event)\">\n  <app-sidebar\n    [ngClass]=\"{ 'sidenav fixed-right': isMobileResolution === false }\"\n  ></app-sidebar>\n  <div class=\"main-content\">\n    <!-- Top navbar -->\n    <app-navbar></app-navbar>\n    <!-- Pages -->\n    <router-outlet></router-outlet>\n    <app-footer-public></app-footer-public>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-auth-layout\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n-->\n<router-outlet></router-outlet>\n<!--\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/public-layout/public-layout.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/public-layout/public-layout.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<div class=\"\" (window:resize)=\"isMobile($event)\">\n  <div class=\"main-content\">\n    <!-- Top navbar -->\n    <app-navbar-public></app-navbar-public>\n    <!-- Pages -->\n    <router-outlet></router-outlet>\n    <app-footer-public></app-footer-public>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-portal-portal-module~073838a9",
		"auth-auth-module"
	],
	"./core/admin/admin.module": [
		"./src/app/core/admin/admin.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~791eac25",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~5f8aaf18",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-portal-portal-module~073838a9",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~22f340a2",
		"default~core-admin-admin-module~core-user-user-module",
		"core-admin-admin-module"
	],
	"./core/global/global.module": [
		"./src/app/core/global/global.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~791eac25",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-portal-portal-module~073838a9",
		"core-global-global-module"
	],
	"./core/portal/portal.module": [
		"./src/app/core/portal/portal.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~791eac25",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~5f8aaf18",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-portal-portal-module~073838a9",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~22f340a2",
		"core-portal-portal-module"
	],
	"./core/user/user.module": [
		"./src/app/core/user/user.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~791eac25",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~5f8aaf18",
		"default~auth-auth-module~core-admin-admin-module~core-global-global-module~core-portal-portal-module~073838a9",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~22f340a2",
		"default~core-admin-admin-module~core-user-user-module",
		"core-user-user-module"
	],
	"./examples/calendar/calendar.module": [
		"./src/app/examples/calendar/calendar.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~5f8aaf18",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~22f340a2"
	],
	"./examples/charts/charts.module": [
		"./src/app/examples/charts/charts.module.ts",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module~examples-widgets-widgets-module",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module",
		"examples-charts-charts-module"
	],
	"./examples/components/components.module": [
		"./src/app/examples/components/components.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~5ca64b56",
		"examples-components-components-module"
	],
	"./examples/dashboards/dashboards.module": [
		"./src/app/examples/dashboards/dashboards.module.ts",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module~examples-widgets-widgets-module",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module",
		"examples-dashboards-dashboards-module"
	],
	"./examples/examples/examples.module": [
		"./src/app/examples/examples/examples.module.ts",
		"examples-examples-examples-module"
	],
	"./examples/forms/forms.module": [
		"./src/app/examples/forms/forms.module.ts",
		"examples-forms-forms-module"
	],
	"./examples/maps/maps.module": [
		"./src/app/examples/maps/maps.module.ts",
		"examples-maps-maps-module"
	],
	"./examples/tables/tables.module": [
		"./src/app/examples/tables/tables.module.ts",
		"default~core-admin-admin-module~core-global-global-module~core-portal-portal-module~core-user-user-m~791eac25",
		"examples-tables-tables-module"
	],
	"./examples/widgets/widgets.module": [
		"./src/app/examples/widgets/widgets.module.ts",
		"default~core-admin-admin-module~core-portal-portal-module~core-user-user-module~examples-calendar-ca~5f8aaf18",
		"default~examples-charts-charts-module~examples-dashboards-dashboards-module~examples-widgets-widgets-module",
		"examples-widgets-widgets-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/public-layout/public-layout.component */ "./src/app/layouts/public-layout/public-layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/presentation/presentation.component */ "./src/app/examples/presentation/presentation.component.ts");









var routes = [
    {
        path: "",
        // redirectTo: "auth/login",
        redirectTo: "portal/landing",
        pathMatch: "full",
    },
    {
        path: "presentation",
        component: _examples_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__["PresentationComponent"],
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
        children: [
            {
                path: "admin",
                loadChildren: "./core/admin/admin.module#AdminModule",
            },
            {
                path: "user",
                loadChildren: "./core/user/user.module#UserModule",
            },
            {
                path: 'global',
                loadChildren: './core/global/global.module#GlobalModule'
            },
            {
                path: "dashboards",
                loadChildren: "./examples/dashboards/dashboards.module#DashboardsModule",
            },
            {
                path: "components",
                loadChildren: "./examples/components/components.module#ComponentsModule",
            },
            {
                path: "forms",
                loadChildren: "./examples/forms/forms.module#FormsModules",
            },
            {
                path: "tables",
                loadChildren: "./examples/tables/tables.module#TablesModule",
            },
            {
                path: "maps",
                loadChildren: "./examples/maps/maps.module#MapsModule",
            },
            {
                path: "widgets",
                loadChildren: "./examples/widgets/widgets.module#WidgetsModule",
            },
            {
                path: "charts",
                loadChildren: "./examples/charts/charts.module#ChartsModule",
            },
            {
                path: "calendar",
                loadChildren: "./examples/calendar/calendar.module#CalendarModule",
            },
            {
                path: "examples",
                loadChildren: "./examples/examples/examples.module#ExamplesModule",
            },
        ],
    },
    {
        path: '',
        component: _layouts_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicLayoutComponent"],
        children: [
            {
                path: 'portal',
                loadChildren: './core/portal/portal.module#PortalModule'
            }
        ],
    },
    {
        path: "",
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"],
        children: [
            {
                path: "auth",
                loadChildren: "./auth/auth.module#AuthModule",
            },
            {
                path: "examples",
                loadChildren: "./layouts/auth-layout/auth-layout.module#AuthLayoutModule",
            },
            {
                path: "global",
                loadChildren: "./core/global/global.module#GlobalModule",
            },
        ],
    },
    {
        path: "**",
        redirectTo: "dashboard",
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true,
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                window.scrollTo(0, 0);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    AppComponent.prototype.getToken = function (title) {
        console.log(title);
        return window.localStorage[title];
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/public-layout/public-layout.component */ "./src/app/layouts/public-layout/public-layout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/presentation/presentation.module */ "./src/app/examples/presentation/presentation.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_17__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot({
                    closeButton: true,
                    timeOut: 3000,
                    progressBar: true,
                    positionClass: "toast-top-right",
                }),
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_8__["LeafletModule"],
                _examples_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_14__["PresentationModule"],
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_12__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_13__["AuthLayoutComponent"], _layouts_public_layout_public_layout_component__WEBPACK_IMPORTED_MODULE_1__["PublicLayoutComponent"]],
            providers: [
            /* Uncomment this to use interceptor
            {
              provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true
            }
            */
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _footer_public_footer_public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-public/footer-public.component */ "./src/app/components/footer-public/footer-public.component.ts");
/* harmony import */ var _navbar_public_navbar_public_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-public/navbar-public.component */ "./src/app/components/navbar-public/navbar-public.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm5/ngx-perfect-scrollbar.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");







var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"].forRoot(),
                devextreme_angular__WEBPACK_IMPORTED_MODULE_11__["DxVectorMapModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _navbar_public_navbar_public_component__WEBPACK_IMPORTED_MODULE_2__["NavbarPublicComponent"],
                _footer_public_footer_public_component__WEBPACK_IMPORTED_MODULE_1__["FooterPublicComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _navbar_public_navbar_public_component__WEBPACK_IMPORTED_MODULE_2__["NavbarPublicComponent"],
                _footer_public_footer_public_component__WEBPACK_IMPORTED_MODULE_1__["FooterPublicComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer-public/footer-public.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/footer-public/footer-public.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-footer {\n  background-color: #1c2224;\n  padding: 45px 0 20px;\n  font-size: 15px;\n  line-height: 24px;\n  color: whitesmoke;\n}\n\n.site-footer hr {\n  border-top-color: #bbb;\n  opacity: 0.5;\n}\n\n.site-footer hr.small {\n  margin: 20px 0;\n}\n\n.site-footer h6 {\n  color: white;\n  font-size: 16px;\n  text-transform: uppercase;\n  margin-top: 5px;\n  letter-spacing: 2px;\n}\n\n.site-footer a {\n  color: #737373;\n}\n\n.site-footer a:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n\n.footer-links {\n  padding-left: 0;\n  list-style: none;\n}\n\n.footer-links li {\n  display: block;\n}\n\n.footer-links a {\n  color: #737373;\n}\n\n.footer-links a:active, .footer-links a:focus, .footer-links a:hover {\n  color: #3366cc;\n  text-decoration: none;\n}\n\n.footer-links.inline li {\n  display: inline-block;\n}\n\n.site-footer .social-icons {\n  text-align: right;\n}\n\n.site-footer .social-icons a {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin-left: 6px;\n  margin-right: 0;\n  border-radius: 100%;\n  background-color: #33353d;\n}\n\n.copyright-text {\n  margin: 0;\n}\n\n@media (max-width: 991px) {\n  .site-footer [class^=col-] {\n    margin-bottom: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .site-footer {\n    padding-bottom: 0;\n  }\n\n  .site-footer .copyright-text, .site-footer .social-icons {\n    text-align: center;\n  }\n}\n\n.social-icons {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.social-icons li {\n  display: inline-block;\n  margin-bottom: 4px;\n}\n\n.social-icons li.title {\n  margin-right: 15px;\n  text-transform: uppercase;\n  color: #96a2b2;\n  font-weight: 700;\n  font-size: 13px;\n}\n\n.social-icons a {\n  background-color: #eceeef;\n  color: #818a91;\n  font-size: 16px;\n  display: inline-block;\n  line-height: 44px;\n  width: 44px;\n  height: 44px;\n  text-align: center;\n  margin-right: 8px;\n  border-radius: 100%;\n  -webkit-transition: all 0.2s linear;\n  transition: all 0.2s linear;\n}\n\n.social-icons a:active, .social-icons a:focus, .social-icons a:hover {\n  color: #fff;\n  background-color: #29aafe;\n}\n\n.social-icons.size-sm a {\n  line-height: 34px;\n  height: 34px;\n  width: 34px;\n  font-size: 14px;\n}\n\n.social-icons a.facebook:hover {\n  background-color: #3b5998;\n}\n\n.social-icons a.twitter:hover {\n  background-color: #00aced;\n}\n\n.social-icons a.linkedin:hover {\n  background-color: #007bb6;\n}\n\n.social-icons a.dribbble:hover {\n  background-color: #ea4c89;\n}\n\n@media (max-width: 767px) {\n  .social-icons li.title {\n    display: block;\n    margin-right: 0;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItcHVibGljL0M6XFxVc2Vyc1xcSFVBV0VJXFxEb2N1bWVudHNcXHZhbmRld2llbGVcXGJycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyLXB1YmxpY1xcZm9vdGVyLXB1YmxpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXItcHVibGljL2Zvb3Rlci1wdWJsaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURJQTtFQUVFLHNCQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElBO0VBRUUsY0FBQTtBQ0ZGOztBRElBO0VBRUUsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBRElBO0VBRUUsY0FBQTtBQ0ZGOztBRElBO0VBRUUsY0FBQTtFQUNBLHFCQUFBO0FDRkY7O0FESUE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURJQTtFQUVFLGNBQUE7QUNGRjs7QURJQTtFQUVFLGNBQUE7QUNGRjs7QURJQTtFQUVFLGNBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBRElBO0VBRUUscUJBQUE7QUNGRjs7QURJQTtFQUVFLGlCQUFBO0FDRkY7O0FESUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBRElBO0VBRUUsU0FBQTtBQ0ZGOztBRElBO0VBRUU7SUFFRSxtQkFBQTtFQ0hGO0FBQ0Y7O0FES0E7RUFFRTtJQUVFLGlCQUFBO0VDTEY7O0VET0E7SUFFRSxrQkFBQTtFQ0xGO0FBQ0Y7O0FET0E7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFFBO0VBRUUscUJBQUE7RUFDQSxrQkFBQTtBQ05GOztBRFFBO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNORjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0FDTEY7O0FET0E7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUNMRjs7QURPQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTEY7O0FET0E7RUFFRSx5QkFBQTtBQ0xGOztBRE9BO0VBRUUseUJBQUE7QUNMRjs7QURPQTtFQUVFLHlCQUFBO0FDTEY7O0FET0E7RUFFRSx5QkFBQTtBQ0xGOztBRE9BO0VBRUU7SUFFRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyLXB1YmxpYy9mb290ZXItcHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG5cbi5zaXRlLWZvb3Rlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMxYzIyMjQ7XG4gIHBhZGRpbmc6NDVweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBsaW5lLWhlaWdodDoyNHB4O1xuICBjb2xvcjp3aGl0ZXNtb2tlO1xufVxuLnNpdGUtZm9vdGVyIGhyXG57XG4gIGJvcmRlci10b3AtY29sb3I6I2JiYjtcbiAgb3BhY2l0eTowLjVcbn1cbi5zaXRlLWZvb3RlciBoci5zbWFsbFxue1xuICBtYXJnaW46MjBweCAwXG59XG4uc2l0ZS1mb290ZXIgaDZcbntcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG4gIG1hcmdpbi10b3A6NXB4O1xuICBsZXR0ZXItc3BhY2luZzoycHhcbn1cbi5zaXRlLWZvb3RlciBhXG57XG4gIGNvbG9yOiM3MzczNzM7XG59XG4uc2l0ZS1mb290ZXIgYTpob3Zlclxue1xuICBjb2xvcjojMzM2NmNjO1xuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5mb290ZXItbGlua3NcbntcbiAgcGFkZGluZy1sZWZ0OjA7XG4gIGxpc3Qtc3R5bGU6bm9uZVxufVxuLmZvb3Rlci1saW5rcyBsaVxue1xuICBkaXNwbGF5OmJsb2NrXG59XG4uZm9vdGVyLWxpbmtzIGFcbntcbiAgY29sb3I6IzczNzM3M1xufVxuLmZvb3Rlci1saW5rcyBhOmFjdGl2ZSwuZm9vdGVyLWxpbmtzIGE6Zm9jdXMsLmZvb3Rlci1saW5rcyBhOmhvdmVyXG57XG4gIGNvbG9yOiMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGlcbntcbiAgZGlzcGxheTppbmxpbmUtYmxvY2tcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zXG57XG4gIHRleHQtYWxpZ246cmlnaHRcbn1cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGFcbntcbiAgd2lkdGg6NDBweDtcbiAgaGVpZ2h0OjQwcHg7XG4gIGxpbmUtaGVpZ2h0OjQwcHg7XG4gIG1hcmdpbi1sZWZ0OjZweDtcbiAgbWFyZ2luLXJpZ2h0OjA7XG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMzMzNTNkXG59XG4uY29weXJpZ2h0LXRleHRcbntcbiAgbWFyZ2luOjBcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KVxue1xuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXVxuICB7XG4gICAgbWFyZ2luLWJvdHRvbTozMHB4XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxue1xuICAuc2l0ZS1mb290ZXJcbiAge1xuICAgIHBhZGRpbmctYm90dG9tOjBcbiAgfVxuICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LC5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zXG4gIHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxuICB9XG59XG4uc29jaWFsLWljb25zXG57XG4gIHBhZGRpbmctbGVmdDowO1xuICBtYXJnaW4tYm90dG9tOjA7XG4gIGxpc3Qtc3R5bGU6bm9uZVxufVxuLnNvY2lhbC1pY29ucyBsaVxue1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTo0cHhcbn1cbi5zb2NpYWwtaWNvbnMgbGkudGl0bGVcbntcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgY29sb3I6Izk2YTJiMjtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6MTNweFxufVxuLnNvY2lhbC1pY29ucyBhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XG4gIGNvbG9yOiM4MThhOTE7XG4gIGZvbnQtc2l6ZToxNnB4O1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6NDRweDtcbiAgd2lkdGg6NDRweDtcbiAgaGVpZ2h0OjQ0cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6OHB4O1xuICBib3JkZXItcmFkaXVzOjEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcbiAgLW8tdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhclxufVxuLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSwuc29jaWFsLWljb25zIGE6Zm9jdXMsLnNvY2lhbC1pY29ucyBhOmhvdmVyXG57XG4gIGNvbG9yOiNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IzI5YWFmZVxufVxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGFcbntcbiAgbGluZS1oZWlnaHQ6MzRweDtcbiAgaGVpZ2h0OjM0cHg7XG4gIHdpZHRoOjM0cHg7XG4gIGZvbnQtc2l6ZToxNHB4XG59XG4uc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4XG59XG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjZWRcbn1cbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjZcbn1cbi5zb2NpYWwtaWNvbnMgYS5kcmliYmJsZTpob3Zlclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNlYTRjODlcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxue1xuICAuc29jaWFsLWljb25zIGxpLnRpdGxlXG4gIHtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDowO1xuICAgIGZvbnQtd2VpZ2h0OjYwMFxuICB9XG59IiwiLnNpdGUtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjIyNDtcbiAgcGFkZGluZzogNDVweCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uc2l0ZS1mb290ZXIgaHIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjYmJiO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5zaXRlLWZvb3RlciBoci5zbWFsbCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc2l0ZS1mb290ZXIgaDYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uc2l0ZS1mb290ZXIgYSB7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG4uc2l0ZS1mb290ZXIgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzM2NmNjO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXItbGlua3MgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3Rlci1saW5rcyBhIHtcbiAgY29sb3I6ICM3MzczNzM7XG59XG5cbi5mb290ZXItbGlua3MgYTphY3RpdmUsIC5mb290ZXItbGlua3MgYTpmb2N1cywgLmZvb3Rlci1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6ICMzMzY2Y2M7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTNkO1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICBtYXJnaW46IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaXRlLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cblxuICAuc2l0ZS1mb290ZXIgLmNvcHlyaWdodC10ZXh0LCAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uc29jaWFsLWljb25zIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc29jaWFsLWljb25zIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgbGkudGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjOTZhMmIyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zb2NpYWwtaWNvbnMgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VlZWY7XG4gIGNvbG9yOiAjODE4YTkxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSwgLnNvY2lhbC1pY29ucyBhOmZvY3VzLCAuc29jaWFsLWljb25zIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWFmZTtcbn1cblxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGEge1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFjZWQ7XG59XG5cbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiYjY7XG59XG5cbi5zb2NpYWwtaWNvbnMgYS5kcmliYmJsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTRjODk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc29jaWFsLWljb25zIGxpLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer-public/footer-public.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/footer-public/footer-public.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPublicComponent", function() { return FooterPublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterPublicComponent = /** @class */ (function () {
    function FooterPublicComponent() {
    }
    FooterPublicComponent.prototype.ngOnInit = function () {
    };
    FooterPublicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-public',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer-public.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer-public/footer-public.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer-public.component.scss */ "./src/app/components/footer-public/footer-public.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterPublicComponent);
    return FooterPublicComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar-public/navbar-public.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/navbar-public/navbar-public.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  font-weight: bold;\n  color: white !important;\n  display: inline-block !important;\n  width: 130px;\n  font-size: smaller !important;\n}\n\na.hover {\n  color: red !important;\n}\n\n.btn-login {\n  background-color: transparent;\n  font-size: smaller !important;\n  margin-left: 30%;\n}\n\n.btn-li {\n  background-color: transparent;\n  display: inline-block !important;\n  font-size: smaller !important;\n  border-color: transparent !important;\n}\n\n.navbar-item {\n  height: 50px;\n  align-content: center;\n  display: inline-block;\n  margin-top: 25%;\n  padding: 0px 10px;\n}\n\n.navbar {\n  height: 70px;\n}\n\nli {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: 0%;\n}\n\n.container-fluid {\n  padding: 0 !important;\n  background-image: url(\"/../assets/img/theme/restaurant-6.jpg\");\n  image-rendering: optimizeQuality;\n  overflow: hidden;\n  background-blend-mode: overlay;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItcHVibGljL0M6XFxVc2Vyc1xcSFVBV0VJXFxEb2N1bWVudHNcXHZhbmRld2llbGVcXGJycy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyLXB1YmxpY1xcbmF2YmFyLXB1YmxpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItcHVibGljL25hdmJhci1wdWJsaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FESUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0VBRUEsOERBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUlBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLXB1YmxpYy9uYXZiYXItcHVibGljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG59XG5cbmEuaG92ZXJ7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWxvZ2lue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OjMwJTtcbn1cblxuLmJ0bi1saXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbn1cblxuXG4ubmF2YmFyLWl0ZW17XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjUlO1xuICAgIC8vIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4ubmF2YmFye1xuICAgIGhlaWdodDogNzBweDtcbn1cblxubGl7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDAlO1xufVxuXG4uY29udGFpbmVyLWZsdWlke1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1nL3RoZW1lL3Jlc3RhdXJhbnQtNi5qcGdcIik7XG4gICAgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG5cbiIsImEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xufVxuXG5hLmhvdmVyIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uYnRuLWxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWl0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG5saSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi8uLi9hc3NldHMvaW1nL3RoZW1lL3Jlc3RhdXJhbnQtNi5qcGdcIik7XG4gIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVRdWFsaXR5O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG92ZXJsYXk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/navbar-public/navbar-public.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/navbar-public/navbar-public.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavbarPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarPublicComponent", function() { return NavbarPublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");








var NavbarPublicComponent = /** @class */ (function () {
    function NavbarPublicComponent(location, userService, jwtService, notifyService, element, router) {
        var _this = this;
        this.userService = userService;
        this.jwtService = jwtService;
        this.notifyService = notifyService;
        this.element = element;
        this.router = router;
        this.sidenavOpen = true;
        // Image
        this.imgAvatar = 'assets/img/default/avatar.png';
        this.images = ["assets/img/theme/mpob-web.jpg", "assets/img/theme/mpob-web5.jpg", "assets/img/theme/mpob-web.jpg"];
        this.user = this.userService.user;
        this.location = location;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Hide loading indicator
                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    _this.sidenavOpen = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    NavbarPublicComponent.prototype.ngOnInit = function () {
        console.log('as: ', this.user);
        this.listTitles = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarPublicComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarPublicComponent.prototype.navigatePage = function (path) {
        if (path == 'login') {
            return this.router.navigate(['/auth/login']);
        }
        else if (path == 'signup') {
            return this.router.navigate(['/auth/register']);
        }
        else if (path == 'home') {
            return this.router.navigate(['/pages/home']);
        }
    };
    NavbarPublicComponent.prototype.successMessage = function () {
        var title = 'Success';
        var message = 'Loging in right now';
        this.notifyService.openToastr(title, message);
    };
    NavbarPublicComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.navigatePage('home');
    };
    NavbarPublicComponent.prototype.openSearch = function () {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    };
    NavbarPublicComponent.prototype.closeSearch = function () {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    };
    NavbarPublicComponent.prototype.openSidebar = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarPublicComponent.prototype.toggleSidenav = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarPublicComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarPublicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar-public",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar-public.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar-public/navbar-public.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar-public.component.scss */ "./src/app/components/navbar-public/navbar-public.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"],
            src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_7__["JwtService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarPublicComponent);
    return NavbarPublicComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  font-weight: bold;\n  color: white !important;\n  display: inline-block !important;\n  width: 130px;\n  font-size: smaller !important;\n}\n\na.hover {\n  color: red !important;\n}\n\n.btn-login {\n  background-color: transparent;\n  font-size: smaller !important;\n  margin-left: 30%;\n}\n\n.btn-li {\n  background-color: transparent;\n  display: inline-block !important;\n  font-size: smaller !important;\n  border-color: transparent !important;\n}\n\n.navbar-item {\n  height: 50px;\n  align-content: center;\n  display: inline-block;\n  margin-top: 25%;\n  padding: 0px 10px;\n}\n\n.navbar {\n  height: 70px;\n}\n\nli {\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-left: 0%;\n}\n\n.container-fluid {\n  padding: 0 !important;\n  background-image: url(\"/../assets/img/theme/restaurant-6.jpg\");\n  image-rendering: optimizeQuality;\n  overflow: hidden;\n  background-blend-mode: overlay;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxIVUFXRUlcXERvY3VtZW50c1xcdmFuZGV3aWVsZVxcYnJzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBRElBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBRUEsaUJBQUE7QUNGSjs7QURLQTtFQUNJLFlBQUE7QUNGSjs7QURLQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxxQkFBQTtFQUVBLDhEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFJQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcbn1cblxuYS5ob3ZlcntcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbG9naW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6MzAlO1xufVxuXG4uYnRuLWxpe1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxufVxuXG5cbi5uYXZiYXItaXRlbXtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAyNSU7XG4gICAgLy8gd2lkdGg6IDUwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5uYXZiYXJ7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuXG5saXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMCU7XG59XG5cbi5jb250YWluZXItZmx1aWR7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWcvdGhlbWUvcmVzdGF1cmFudC02LmpwZ1wiKTtcbiAgICBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuIiwiYSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMzBweDtcbiAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG59XG5cbmEuaG92ZXIge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbi5idG4tbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGxlciAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDI1JTtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbi5uYXZiYXIge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbmxpIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWcvdGhlbWUvcmVzdGF1cmFudC02LmpwZ1wiKTtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVF1YWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/handler/notify/notify.service */ "./src/app/shared/handler/notify/notify.service.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");


// import { ROUTES } from "../../shared/menu/menu-items";





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, userService, jwtService, notifyService, element, router) {
        var _this = this;
        this.userService = userService;
        this.jwtService = jwtService;
        this.notifyService = notifyService;
        this.element = element;
        this.router = router;
        this.isAdmin = false;
        this.isUser = false;
        this.sidenavOpen = true;
        this.href = "";
        // Image
        this.imgAvatar = "assets/img/default/dp.jpg";
        this.user = this.userService.user;
        this.location = location;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    _this.sidenavOpen = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log("as: ", this.user);
        // this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.href = this.router.url.slice(0, 10);
        if (this.href.includes("/user/")) {
            this.isUser = true;
        }
        else if (this.href.includes("/admin/")) {
            this.isAdmin = true;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.navigatePage = function (path) {
        if (path == "notifications") {
            return this.router.navigate(["/global/notifications"]);
        }
        else if (path == "profile") {
            return this.router.navigate(["/global/profile"]);
        }
        else if (path == "settings") {
            return this.router.navigate(["/global/settings"]);
        }
        else if (path == "userhome") {
            return this.router.navigate(["/user/home"]);
        }
        else if (path == "adminhome") {
            return this.router.navigate(["/admin/home"]);
        }
        else if (path == "home") {
            return this.router.navigate(["/portal/landing"]);
        }
    };
    NavbarComponent.prototype.successMessage = function () {
        var title = "Success";
        var message = "Loging in right now";
        this.notifyService.openToastr(title, message);
    };
    NavbarComponent.prototype.logout = function () {
        this.jwtService.destroyToken();
        this.navigatePage("home");
    };
    NavbarComponent.prototype.openSearch = function () {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    };
    NavbarComponent.prototype.closeSearch = function () {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    };
    NavbarComponent.prototype.openSidebar = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.prototype.toggleSidenav = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
        { type: src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
        { type: src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            src_app_shared_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"],
            src_app_shared_handler_notify_notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu/menu-items */ "./src/app/shared/menu/menu-items.ts");
/* harmony import */ var src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/auth/auth.service */ "./src/app/shared/services/auth/auth.service.ts");





var misc = {
    sidebar_mini_active: true,
};
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.imgLogo = "assets/img/logo/logo-brs-1.png";
        this.href = "";
        this.isCollapsed = true;
        this.isAdmin = false;
        this.isUser = false;
        // Image
        this.imgAvatar = "assets/img/default/dp.jpg";
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.href = this.router.url.slice(0, 6);
        if (this.href == "/admin") {
            this.menu = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"];
            this.isAdmin = true;
        }
        else if (this.href == "/user/") {
            this.menu = _shared_menu_menu_items__WEBPACK_IMPORTED_MODULE_3__["ROUTESUSER"];
            this.isUser = true;
        }
        this.menuItems = this.menu.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.prototype.onMouseEnterSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.onMouseLeaveSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var sidenavToggler = document.getElementsByClassName("sidenav-toggler")[0];
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("g-sidenav-pinned")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("g-sidenav-pinned");
            body.classList.add("g-sidenav-hidden");
            sidenavToggler.classList.remove("active");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("g-sidenav-pinned");
            body.classList.remove("g-sidenav-hidden");
            sidenavToggler.classList.add("active");
            misc.sidebar_mini_active = true;
        }
    };
    SidebarComponent.prototype.navigatePage = function (path) {
        if (path == 'home') {
            return this.router.navigate(['/portal/landing']);
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn .badge-floating.badge:not(.badge-circle) {\n  -webkit-transform: translate(-30%, 50%);\n          transform: translate(-30%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZXMvcHJlc2VudGF0aW9uL0M6XFxVc2Vyc1xcSFVBV0VJXFxEb2N1bWVudHNcXHZhbmRld2llbGVcXGJycy9zcmNcXGFwcFxcZXhhbXBsZXNcXHByZXNlbnRhdGlvblxccHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtcGxlcy9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0UsdUNBQUE7VUFBQSwrQkFBQTtBQ0xOIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBCYWRnZSBmbG9hdGluZ1xuLy9cblxuLmJ0biB7XG4gIC5iYWRnZS1mbG9hdGluZyB7XG4gICAgJi5iYWRnZTpub3QoLmJhZGdlLWNpcmNsZSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwJSwgNTAlKTtcbiAgICB9XG4gIH1cbn1cbiIsIi5idG4gLmJhZGdlLWZsb2F0aW5nLmJhZGdlOm5vdCguYmFkZ2UtY2lyY2xlKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIDUwJSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/examples/presentation/presentation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.component.ts ***!
  \*****************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.test = new Date();
        this.isCollapsed = true;
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    PresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-presentation",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/presentation/presentation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation.component.scss */ "./src/app/examples/presentation/presentation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/examples/presentation/presentation.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/examples/presentation/presentation.module.ts ***!
  \**************************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation.component */ "./src/app/examples/presentation/presentation.component.ts");








var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()]
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    AdminLayoutComponent.prototype.isMobile = function (event) {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "isMobile", null);
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.add("navbar-light");
        // navbar.classList.add("navbar-transparent");
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
        // var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        // navbar.classList.remove("navbar-light");
        // navbar.classList.remove("navbar-transparent");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/public-layout/public-layout.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layouts/public-layout/public-layout.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcHVibGljLWxheW91dC9wdWJsaWMtbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/public-layout/public-layout.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/public-layout/public-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: PublicLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicLayoutComponent", function() { return PublicLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PublicLayoutComponent = /** @class */ (function () {
    function PublicLayoutComponent() {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    PublicLayoutComponent.prototype.isMobile = function (event) {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    };
    PublicLayoutComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], PublicLayoutComponent.prototype, "isMobile", null);
    PublicLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-layout',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./public-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/public-layout/public-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./public-layout.component.scss */ "./src/app/layouts/public-layout/public-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PublicLayoutComponent);
    return PublicLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/handler/jwt/jwt.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/handler/jwt/jwt.service.ts ***!
  \***************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function (title) {
        console.log(title);
        return window.localStorage[title];
    };
    JwtService.prototype.saveToken = function (title, token) {
        window.localStorage[title] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.clear();
    };
    JwtService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/shared/handler/notify/notify.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/handler/notify/notify.service.ts ***!
  \*********************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");



var NotifyService = /** @class */ (function () {
    function NotifyService(toastr) {
        this.toastr = toastr;
    }
    NotifyService.prototype.openToastrConnection = function () {
        var title = "Error";
        var message = "No connection";
        this.toastr.info(message, title);
    };
    NotifyService.prototype.openToastrHttp = function (title, message) {
        this.toastr.warning(title, message);
    };
    NotifyService.prototype.openToastr = function (title, message) {
        this.toastr.success(title, message);
    };
    NotifyService.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotifyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/shared/menu/menu-items.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/menu/menu-items.ts ***!
  \*******************************************/
/*! exports provided: USERPORTALROUTES, ROUTES, ROUTESUSER, PORTAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERPORTALROUTES", function() { return USERPORTALROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTESUSER", function() { return ROUTESUSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTAL", function() { return PORTAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// Menu Items
var USERPORTALROUTES = [
// {
//   path: "/user-portal/dashboard",
//   title: "Dashboard",
//   type: "link",
//   icontype: "fas fa-home text-default",
// },
];
var ROUTES = [
    {
        path: "/user/my-account",
        title: "My Acccount",
        type: "link",
        icontype: "fas fa-user text-dark",
    },
    {
        path: "/user/setting",
        title: "Setting",
        type: "link",
        icontype: "fas fa-cog text-dark",
    },
    {
        path: "/portal/landing",
        title: "Logout",
        type: "link",
        icontype: "fas fa-sign-out-alt text-dark",
    },
];
var ROUTESUSER = [
    {
        path: "/user/my-account",
        title: "My Acccount",
        type: "link",
        icontype: "fas fa-user text-dark",
    },
    {
        path: "/user/setting",
        title: "Setting",
        type: "link",
        icontype: "fas fa-cog text-dark",
    },
    {
        path: "/portal/landing",
        title: "Logout",
        type: "link",
        icontype: "fas fa-sign-out-alt text-dark",
    },
];
var PORTAL = [
    {
        path: "/portal/landing",
        title: "Home",
        type: "link",
        icontype: "fas fa-home text-default",
    },
];


/***/ }),

/***/ "./src/app/shared/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm5/auth0-angular-jwt.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../handler/jwt/jwt.service */ "./src/app/shared/handler/jwt/jwt.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(jwtService, http) {
        this.jwtService = jwtService;
        this.http = http;
        // URL
        this.urlRegister = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/registration/";
        this.urlPasswordChange = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/password/change/";
        this.urlPasswordReset = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/password/reset";
        this.urlTokenObtain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/obtain/";
        this.urlTokenRefresh = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/refresh/";
        this.urlTokenVerify = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/verify/";
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/users/";
        this.userRole = 1;
        this.retrievedUsers = [];
    }
    AuthService.prototype.register = function (body) {
        return this.http.post(this.urlRegister, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log("Registration: ", res);
        }));
    };
    AuthService.prototype.changePassword = function (body) {
        return this.http.post(this.urlPasswordChange, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log("Change password: ", res);
        }));
    };
    AuthService.prototype.resetPassword = function (body) {
        return this.http.post(this.urlPasswordReset, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log("Reset password: ", res);
        }));
    };
    AuthService.prototype.obtainToken = function (body) {
        var _this = this;
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        console.log("bosy =>", body);
        return this.http.post(this.urlTokenObtain, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.token = res;
            _this.tokenRefresh = res.refresh;
            _this.tokenAccess = res.access;
            var decodedToken = jwtHelper.decodeToken(_this.tokenAccess);
            _this.email = decodedToken.email;
            _this.username = decodedToken.username;
            _this.userID = decodedToken.user_id;
            // this.userType = decodedToken.user_type;
            // console.log(this.userType);
            console.log("Decoded token: ", decodedToken);
            // console.log('Post response: ', res)
            // console.log('Refresh token', this.tokenRefresh)
            // console.log('Access token', this.tokenAccess)
            // console.log('Token: ', this.token)
            // console.log('Email: ', this.email)
            // console.log('Username: ', this.username)
            // console.log('User ID: ', this.userID)
            // console.log('User type: ', this.userType)
            _this.jwtService.saveToken("accessToken", _this.tokenAccess);
            _this.jwtService.saveToken("refreshToken", _this.tokenRefresh);
        }));
    };
    AuthService.prototype.refreshToken = function () {
        var refreshToken = this.jwtService.getToken("refreshToken");
        var body = {
            refresh: refreshToken,
        };
        return this.http.post(this.urlTokenRefresh, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log("Token refresh: ", res);
        }));
    };
    AuthService.prototype.verifyToken = function (body) {
        return this.http.post(this.urlTokenVerify, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            console.log("Token verify: ", res);
        }));
    };
    AuthService.prototype.getUserDetail = function () {
        var _this = this;
        console.log("getuserdetail");
        var selfInformationUrl = this.urlUser + this.userID + "/";
        return this.http.get(selfInformationUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (res) {
            _this.userDetail = res;
            // console.log('User detail', this.userDetail)
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_handler_jwt_jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/users/users.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        // URL
        this.urlUser = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "v1/users/";
        this.urlUserAuth = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + "auth/registration/";
        this.users = [];
        this.usersFiltered = [];
    }
    UsersService.prototype.create = function (body) {
        return this.http.post(this.urlUserAuth, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("User: ", res);
        }));
    };
    UsersService.prototype.getAll = function () {
        return this.http.get(this.urlUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("Users: ", res);
        }));
    };
    UsersService.prototype.getOne = function (id) {
        var urlUserOne = this.urlUser + id + "/";
        console.log(urlUserOne, id);
        return this.http.get(urlUserOne).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("User: ", res);
        }));
    };
    UsersService.prototype.update = function (id, body) {
        var urlUserOne = this.urlUser + id + "/";
        console.log(urlUserOne);
        console.log(body);
        return this.http.put(urlUserOne, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("User", res);
        }));
    };
    UsersService.prototype.filter = function (field) {
        var urlFilter = this.urlUser + "?" + field + "/";
        console.log(urlFilter);
        console.log(field);
        return this.http.get(urlFilter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("Users", res);
        }));
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    // baseUrl: 'https://www.api.prototype.com.my/',
    baseUrl: "https://ijn-feedback.herokuapp.com/",
    mapbox: {
        accessToken: 'pk.eyJ1IjoiZmFycmFoemVseW5hIiwiYSI6ImNrZm0xZ2JsazBmcGgycnAyOGswMnRhYmIifQ.YcDLJucT0BT8DPycsbm4Ow',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Argon Dashboard PRO Angular - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HUAWEI\Documents\vandewiele\brs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map