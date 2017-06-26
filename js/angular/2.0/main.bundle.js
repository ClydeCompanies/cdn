webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CryptoJS = __webpack_require__(461);
var MenuService = (function () {
    function MenuService(_http) {
        this._http = _http;
        this.userLoginName = "training10@clydeinc.com";
        this.systemUserKey = "i:0h.f|membership|1003bffd8a289327@live.com";
        this.userId = "874";
        // //needed config for CORS
        // app.config(['$httpProvider', function($httpProvider) {
        //   $httpProvider.defaults.withCredentials = true;
        // }]);
        //here is the service we use to generate the correct token
        this.urlClydeWebService = 'https://cciportal.clydeinc.com/webservices/json/ClydeWebServices';
    }
    MenuService.prototype.getIp = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.urlClydeWebService + '/GetIP';
        return this._http.post(url, null, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .throw(error.json().error || "Server error"); });
    };
    MenuService.prototype.getToken = function (address) {
        var key = this.generateToken(this.userLoginName, this.systemUserKey, this.userId, address);
        var body = JSON.stringify({ Email: this.userLoginName, Key: key });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var url = this.urlClydeWebService + '/GetToken';
        return this._http.post(url, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .throw(error.json().error || "Server error"); });
    };
    MenuService.prototype.generateToken = function (code, salt, account, address) {
        // Set the key to a hash of the user's password + salt + username.
        var hashedPassword = CryptoJS.enc.Base64.stringify(CryptoJS.PBKDF2(code, salt, { hasher: CryptoJS.algo.SHA256, iterations: 1500, keySize: 8 }));
        var key = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256([hashedPassword, salt, account].join(':'), salt));
        // Get the (C# compatible) ticks to use as a timestamp. //http://stackoverflow.com/a/7968483/2596404
        var date = new Date();
        var ticks = ((date.getTime() * 10000) + 621355968000000000);
        // Construct the hash body by concatenating the username, ip, and userAgent.
        var message = [account, address.Ip, address.UserAgent, ticks].join(':');
        // Hash the body, using the key.
        var hash = CryptoJS.HmacSHA256(message, key);
        // Base64-encode the hash to get the resulting token.
        var token = CryptoJS.enc.Base64.stringify(hash);
        // Include the username and timestamp on the end of the token, so the server can validate.
        var tokenId = [account, ticks].join(':');
        // Base64-encode the final resulting token.
        var tokenStr = CryptoJS.enc.Utf8.parse([token, tokenId].join(':'));
        return CryptoJS.enc.Base64.stringify(tokenStr);
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], MenuService);

var _a;
//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecureLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SecureLoginService = (function () {
    function SecureLoginService(_http) {
        this._http = _http;
        this._URL = "https://clydelink.sharepoint.com/apps/_api/Web/CurrentUser";
    }
    SecureLoginService.prototype.logIn = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ "Authorization": "Basic " + btoa("training10@clydeinc.com" + ":" + "trainingxlr8") });
        headers.append("Content-Type", "json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        console.log(headers);
        return this._http.get(this._URL, options).map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .throw(error.json().error || "Server Error"); });
    };
    return SecureLoginService;
}());
SecureLoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SecureLoginService);

var _a;
//# sourceMappingURL=secure-login.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(403);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(525),
        styles: [__webpack_require__(486)],
        providers: [__WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__["a" /* HttpPostService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_fallback__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_img_fallback___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_img_fallback__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tree_branch_tree_branch_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tree_leaf_tree_leaf_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_secure_login_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_menu_service__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_loader_loader_component__ = __webpack_require__(400);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Import Angular Modules




//Import 3rd Party Modules


//Import User Modules







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__tree_branch_tree_branch_component__["a" /* TreeBranchComponent */],
            __WEBPACK_IMPORTED_MODULE_8__nav_bar_nav_bar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__tree_leaf_tree_leaf_component__["a" /* TreeLeafComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_loader_loader_component__["a" /* LoaderComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ng2_img_fallback__["Ng2ImgFallbackModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10_app_secure_login_service__["a" /* SecureLoginService */],
            __WEBPACK_IMPORTED_MODULE_11_app_menu_service__["a" /* MenuService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "nav-bar",
        template: __webpack_require__(526),
        styles: []
    })
], NavbarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoaderComponent.prototype, "loading", void 0);
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(527),
        styles: [__webpack_require__(487)]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_secure_login_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_menu_service__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeBranchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeBranchComponent = (function () {
    function TreeBranchComponent(_httpPostService, _loginService, _menuService) {
        this._httpPostService = _httpPostService;
        this._loginService = _loginService;
        this._menuService = _menuService;
        //MARK: Variables
        this.treed = true;
        this.userInfo = { 'SupervisorId': 'rweaver' };
        this.loading = false;
        this.imageURL = "https://cciportal.clydeinc.com/images/Small/";
        this.placeholderImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/500px-No_image_available.svg.png";
    }
    //MARK: Functions
    TreeBranchComponent.prototype.toggleClick = function (employee) {
        employee.isClicked = !employee.isClicked;
    };
    TreeBranchComponent.prototype.changeUserSubmitted = function (newUser) {
        var _this = this;
        this.loading = true;
        this.userInfo = { 'SupervisorId': newUser };
        var employees = [];
        this.isButtonClicked = true;
        this._httpPostService.getDownline(this.userInfo)
            .subscribe(function (data) {
            if (data != null) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var employee = data_1[_i];
                    if (newUser === employee.UserProfile.UserName) {
                        {
                            employee.isClicked = false;
                            employees.push(employee);
                        }
                    }
                }
                _this.loading = false;
            }
            else {
                console.log("No data returned");
                _this.loading = false;
            } //, error => this.errorMessage = <any>error);
        }, function (error) {
            console.log("We got an error: ", error);
            _this.loading = false;
        });
        this.employeesInIt = employees;
    };
    TreeBranchComponent.prototype.changeUserClicked = function (newUser) {
        var _this = this;
        this.loading = true;
        this.userInfo = { 'SupervisorId': newUser };
        var employees = [];
        this._httpPostService.getDownline(this.userInfo)
            .subscribe(function (data) {
            if (data != null) {
                for (var _i = 0, _a = _this.employeesInIt; _i < _a.length; _i++) {
                    var employee = _a[_i];
                    if (newUser === employee.UserProfile.UserName) {
                        employee.Children = [];
                        for (var _b = 0, data_2 = data; _b < data_2.length; _b++) {
                            var emp = data_2[_b];
                            if (emp.UserProfile.SupervisorUserName === newUser) {
                                emp.isClicked = false;
                                employee.Children.push(emp);
                            }
                        }
                        _this.toggleClick(employee);
                    }
                }
                _this.loading = false;
            }
            else {
                console.log("No data returned");
                _this.loading = false;
            } //, error => this.errorMessage = <any>error);
        }, function (error) {
            _this.loading = false;
            console.log("We got an error: ", error);
        });
    };
    TreeBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuService.getIp()
            .subscribe(function (data) {
            if (data != null) {
                var address = data;
                _this._menuService.getToken(address)
                    .subscribe(function (myData) {
                    if (myData != null) {
                        _this.generatedToken = myData;
                    }
                    else {
                        console.log("No data returned");
                    }
                }, function (myError) {
                    console.log("We got an error: ", myError);
                });
            }
            else {
                console.log("No data returned");
            }
        }, function (error) {
            console.log("We got an error: ", error);
        });
    };
    return TreeBranchComponent;
}());
TreeBranchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tree-branch',
        template: __webpack_require__(528),
        styles: [__webpack_require__(488)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__["a" /* HttpPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__["a" /* HttpPostService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_secure_login_service__["a" /* SecureLoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_secure_login_service__["a" /* SecureLoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_menu_service__["a" /* MenuService */]) === "function" && _c || Object])
], TreeBranchComponent);

var _a, _b, _c;
//# sourceMappingURL=tree-branch.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeLeafComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeLeafComponent = (function () {
    function TreeLeafComponent(_httpPostService) {
        this._httpPostService = _httpPostService;
        this.loading = false;
        this.imageURL = "https://cciportal.clydeinc.com/images/Small/";
        this.placeholderImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/500px-No_image_available.svg.png";
    }
    TreeLeafComponent.prototype.toggleClick = function (employee) {
        employee.isClicked = !employee.isClicked;
    };
    TreeLeafComponent.prototype.changeUserClickedTree = function (newUser) {
        var _this = this;
        this.loading = true;
        this.userInfo = { 'SupervisorId': newUser.UserProfile.UserName };
        var parentUserInfo = { 'SupervisorId': this.parent.UserProfile.UserName };
        this.toggleClick(newUser);
        if (newUser.isClicked) {
            this._httpPostService.getDownline(this.userInfo)
                .subscribe(function (data) {
                if (data != null) {
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var emp = data_1[_i];
                        if (emp.UserProfile.SupervisorUserName === newUser.UserProfile.UserName) {
                            emp.isClicked = false;
                            newUser.Children.push(emp);
                        }
                    }
                    if (_this.parent.Children.length != 0 && newUser.Children.length) {
                        var childrenLength = _this.parent.Children.length;
                        for (var i = 0; i < childrenLength; i++) {
                            if (_this.parent.Children[i].UserProfile.UserName !== newUser.UserProfile.UserName) {
                                _this.parent.Children.splice(i, 1);
                                i--;
                                childrenLength--;
                            }
                        }
                    }
                    _this.loading = false;
                }
                else {
                    console.log("No data returned");
                    _this.loading = false;
                } //, error => this.errorMessage = <any>error);
            }, function (error) {
                console.log("We got an error: ", error);
                _this.loading = false;
            });
        }
        else {
            this.parent.Children = [];
            console.log("Before reset: ");
            console.log(this.parent.Children);
            this._httpPostService.getDownline(parentUserInfo)
                .subscribe(function (data) {
                if (data != null) {
                    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                        var emp = data_2[_i];
                        if (emp.UserProfile.SupervisorUserName === _this.parent.UserProfile.UserName) {
                            emp.isClicked = false;
                            _this.parent.Children.push(emp);
                        }
                    }
                    _this.loading = false;
                }
                else {
                    console.log("No data returned");
                    _this.loading = false;
                } //, error => this.errorMessage = <any>error);
            }, function (error) {
                console.log("We got an error: ", error);
                _this.loading = false;
            });
            newUser.Children = [];
            console.log("After reset: ");
            console.log(this.parent.Children);
        }
    };
    TreeLeafComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.userInfo = { 'SupervisorId': this.parent.UserProfile.UserName };
        var employees = [];
        this._httpPostService.getDownline(this.userInfo)
            .subscribe(function (data) {
            if (data != null) {
                for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                    var employee = data_3[_i];
                    if (_this.parent.UserProfile.UserName === employee.UserProfile.SupervisorUserName) {
                        {
                            employee.isClicked = false;
                            employee.Children = [];
                            employees.push(employee);
                        }
                    }
                }
                _this.loading = false;
                _this.parent.Children = employees;
            }
            else {
                console.log("No DATA returned");
                _this.loading = false;
            } //, error => this.errorMessage = <any>error);
        }, function (error) {
            console.log("We got an error: ", error);
            _this.loading = false;
        });
    };
    return TreeLeafComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreeLeafComponent.prototype, "parent", void 0);
TreeLeafComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tree-leaf',
        template: __webpack_require__(529),
        styles: [__webpack_require__(489)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__["a" /* HttpPostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_shared_http_post_service__["a" /* HttpPostService */]) === "function" && _a || Object])
], TreeLeafComponent);

var _a;
//# sourceMappingURL=tree-leaf.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes spinner {\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n \n@keyframes spinner {\n  to {-webkit-transform: rotate(360deg);transform: rotate(360deg);}\n}\n \n.spinner:before {\n  content: '';\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 30px;\n  height: 30px;\n  margin-top: -15px;\n  margin-left: -15px;\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  border-top-color: #07d;\n  -webkit-animation: spinner .6s linear infinite;\n          animation: spinner .6s linear infinite;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "/*Now the CSS*/\n\nimg {\n\tmax-width: 75px;\n}\n\n* {margin: 0; padding: 0;}\n\n#treeholder {\n\ttext-align: center;\n\tposition:relative;\n\toverflow:hidden;\n}\n\n#innertreeholder {\n\tmargin:100px auto;\n\tdisplay: inline-block;\n\tposition:relative;\n\toverflow:hidden;\n}\n\n#usernameholder {\n\tdisplay:inline-block;\n\twidth:auto;\n\tclear:both;\n}\n\n.tree ul {\n\tpadding-top: 20px; \n\tmargin: 200px, auto;\n\tposition: relative;\n\tdisplay:block;\n\tfloat:both;\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n.tree li { \n\tdisplay:inline-block;\n\ttext-align: center;\n\tlist-style-type: none;\n\tposition: relative;\n\tpadding: 20px 5px 0 5px;\n\t\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n/*We will use ::before and ::after to draw the connectors*/\n\n.tree li::before, .tree li::after{\n\tcontent: '';\n\tposition: absolute; top: 0; right: 50%;\n\tborder-top: 1px solid #ccc;\n\twidth: 50%; height: 20px;\n}\n.tree li::after{\n\tright: auto; left: 50%;\n\tborder-left: 1px solid #ccc;\n}\n\n/*We need to remove left-right connectors from elements without \nany siblings*/\n.tree li:only-child::after, .tree li:only-child::before {\n\tdisplay: none;\n}\n\n/*Remove space from the top of single children*/\n.tree li:only-child{ padding-top: 0;}\n\n/*Remove left connector from first child and \nright connector from last child*/\n.tree li:first-child::before, .tree li:last-child::after{\n\tborder: 0 none;\n}\n/*Adding back the vertical connector to the last nodes*/\n.tree li:last-child::before{\n\tborder-right: 1px solid #ccc;\n\tborder-radius: 0 5px 0 0;\n\t-webkit-border-radius: 0 5px 0 0;\n\t-moz-border-radius: 0 5px 0 0;\n}\n.tree li:first-child::after{\n\tborder-radius: 5px 0 0 0;\n\t-webkit-border-radius: 5px 0 0 0;\n\t-moz-border-radius: 5px 0 0 0;\n}\n\n/*Time to add downward connectors from parents*/\n.tree ul ul::before{\n\tcontent: '';\n\tposition: absolute; top: 0; left: 50%;\n\tborder-left: 1px solid #ccc;\n\twidth: 0; height: 20px;\n}\n\n.tree li a{\n\tborder: 1px solid #ccc;\n\tpadding: 5px 10px;\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-family: arial, verdana, tahoma;\n\tfont-size: 11px;\n\tdisplay: inline-block;\n\t\n\tborder-radius: 5px;\n\t-webkit-border-radius: 5px;\n\t-moz-border-radius: 5px;\n\t\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n.tree li a:hover, .tree li a:hover+ul li a {\n\tbackground: #c8e4f8; color: #000; border: 1px solid #94a0b4;\n}\n/*Connector styles on hover*/\n.tree li a:hover+ul li::after, \n.tree li a:hover+ul li::before, \n.tree li a:hover+ul::before, \n.tree li a:hover+ul ul::before{\n\tborder-color:  #94a0b4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(42)(false);
// imports


// module
exports.push([module.i, "/*Now the CSS*/\n* {margin: 0; padding: 0;}\n\n\nimg {\n\tmax-width: 75px;\n}\n\n  ul {\n\tpadding-top: 20px; \n\tposition: relative;\n\tdisplay:block;\n\tmargin:0,auto;\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n  li {\n\tfloat: left; text-align: center;\n\tlist-style-type: none;\n\tposition: relative;\n\tpadding: 20px 5px 0 5px;\n\t\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n/*We will use ::before and ::after to draw the connectors*/\n\n  li::before,   li::after{\n\tcontent: '';\n\tposition: absolute; top: 0; right: 50%;\n\tborder-top: 1px solid #ccc;\n\twidth: 50%; height: 20px;\n}\n  li::after{\n\tright: auto; left: 50%;\n\tborder-left: 1px solid #ccc;\n}\n\n/*We need to remove left-right connectors from elements without \nany siblings*/\n  li:only-child::after,   li:only-child::before {\n\tdisplay: none;\n}\n\n/*Remove space from the top of single children*/\n  li:only-child{ padding-top: 0;}\n\n/*Remove left connector from first child and \nright connector from last child*/\n  li:first-child::before,   li:last-child::after{\n\tborder: 0 none;\n}\n/*Adding back the vertical connector to the last nodes*/\n  li:last-child::before{\n\tborder-right: 1px solid #ccc;\n\tborder-radius: 0 5px 0 0;\n\t-webkit-border-radius: 0 5px 0 0;\n\t-moz-border-radius: 0 5px 0 0;\n}\n  li:first-child::after{\n\tborder-radius: 5px 0 0 0;\n\t-webkit-border-radius: 5px 0 0 0;\n\t-moz-border-radius: 5px 0 0 0;\n}\n\n/*Time to add downward connectors from parents*/\n  ul ul::before{\n\tcontent: '';\n\tposition: absolute; top: 0; left: 50%;\n\tborder-left: 1px solid #ccc;\n\twidth: 0; height: 20px;\n}\n\n  li a{\n\tborder: 1px solid #ccc;\n\tpadding: 5px 10px;\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-family: arial, verdana, tahoma;\n\tfont-size: 11px;\n\tdisplay: inline-block;\n\t\n\tborder-radius: 5px;\n\t-webkit-border-radius: 5px;\n\t-moz-border-radius: 5px;\n\t\n\ttransition: all 0.5s;\n\t-webkit-transition: all 0.5s;\n\t-moz-transition: all 0.5s;\n}\n\n  li a:hover,   li a:hover+ul li a {\n\tbackground: #c8e4f8; color: #000; border: 1px solid #94a0b4;\n}\n/*Connector styles on hover*/\n  li a:hover+ul li::after, \n  li a:hover+ul li::before, \n  li a:hover+ul::before, \n  li a:hover+ul ul::before{\n\tborder-color:  #94a0b4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 167,
	"./af.js": 167,
	"./ar": 174,
	"./ar-dz": 168,
	"./ar-dz.js": 168,
	"./ar-kw": 169,
	"./ar-kw.js": 169,
	"./ar-ly": 170,
	"./ar-ly.js": 170,
	"./ar-ma": 171,
	"./ar-ma.js": 171,
	"./ar-sa": 172,
	"./ar-sa.js": 172,
	"./ar-tn": 173,
	"./ar-tn.js": 173,
	"./ar.js": 174,
	"./az": 175,
	"./az.js": 175,
	"./be": 176,
	"./be.js": 176,
	"./bg": 177,
	"./bg.js": 177,
	"./bn": 178,
	"./bn.js": 178,
	"./bo": 179,
	"./bo.js": 179,
	"./br": 180,
	"./br.js": 180,
	"./bs": 181,
	"./bs.js": 181,
	"./ca": 182,
	"./ca.js": 182,
	"./cs": 183,
	"./cs.js": 183,
	"./cv": 184,
	"./cv.js": 184,
	"./cy": 185,
	"./cy.js": 185,
	"./da": 186,
	"./da.js": 186,
	"./de": 189,
	"./de-at": 187,
	"./de-at.js": 187,
	"./de-ch": 188,
	"./de-ch.js": 188,
	"./de.js": 189,
	"./dv": 190,
	"./dv.js": 190,
	"./el": 191,
	"./el.js": 191,
	"./en-au": 192,
	"./en-au.js": 192,
	"./en-ca": 193,
	"./en-ca.js": 193,
	"./en-gb": 194,
	"./en-gb.js": 194,
	"./en-ie": 195,
	"./en-ie.js": 195,
	"./en-nz": 196,
	"./en-nz.js": 196,
	"./eo": 197,
	"./eo.js": 197,
	"./es": 199,
	"./es-do": 198,
	"./es-do.js": 198,
	"./es.js": 199,
	"./et": 200,
	"./et.js": 200,
	"./eu": 201,
	"./eu.js": 201,
	"./fa": 202,
	"./fa.js": 202,
	"./fi": 203,
	"./fi.js": 203,
	"./fo": 204,
	"./fo.js": 204,
	"./fr": 207,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 207,
	"./fy": 208,
	"./fy.js": 208,
	"./gd": 209,
	"./gd.js": 209,
	"./gl": 210,
	"./gl.js": 210,
	"./gom-latn": 211,
	"./gom-latn.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mr": 236,
	"./mr.js": 236,
	"./ms": 238,
	"./ms-my": 237,
	"./ms-my.js": 237,
	"./ms.js": 238,
	"./my": 239,
	"./my.js": 239,
	"./nb": 240,
	"./nb.js": 240,
	"./ne": 241,
	"./ne.js": 241,
	"./nl": 243,
	"./nl-be": 242,
	"./nl-be.js": 242,
	"./nl.js": 243,
	"./nn": 244,
	"./nn.js": 244,
	"./pa-in": 245,
	"./pa-in.js": 245,
	"./pl": 246,
	"./pl.js": 246,
	"./pt": 248,
	"./pt-br": 247,
	"./pt-br.js": 247,
	"./pt.js": 248,
	"./ro": 249,
	"./ro.js": 249,
	"./ru": 250,
	"./ru.js": 250,
	"./sd": 251,
	"./sd.js": 251,
	"./se": 252,
	"./se.js": 252,
	"./si": 253,
	"./si.js": 253,
	"./sk": 254,
	"./sk.js": 254,
	"./sl": 255,
	"./sl.js": 255,
	"./sq": 256,
	"./sq.js": 256,
	"./sr": 258,
	"./sr-cyrl": 257,
	"./sr-cyrl.js": 257,
	"./sr.js": 258,
	"./ss": 259,
	"./ss.js": 259,
	"./sv": 260,
	"./sv.js": 260,
	"./sw": 261,
	"./sw.js": 261,
	"./ta": 262,
	"./ta.js": 262,
	"./te": 263,
	"./te.js": 263,
	"./tet": 264,
	"./tet.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 271,
	"./tzm-latn": 270,
	"./tzm-latn.js": 270,
	"./tzm.js": 271,
	"./uk": 272,
	"./uk.js": 272,
	"./ur": 273,
	"./ur.js": 273,
	"./uz": 275,
	"./uz-latn": 274,
	"./uz-latn.js": 274,
	"./uz.js": 275,
	"./vi": 276,
	"./vi.js": 276,
	"./x-pseudo": 277,
	"./x-pseudo.js": 277,
	"./yo": 278,
	"./yo.js": 278,
	"./zh-cn": 279,
	"./zh-cn.js": 279,
	"./zh-hk": 280,
	"./zh-hk.js": 280,
	"./zh-tw": 281,
	"./zh-tw.js": 281
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 494;


/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-tree-branch></app-tree-branch>\n<div>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Brand</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\">Link</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf=\"loading\">\n</div>"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n        ClydeSearch\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"col-md-4\">\n            <input type=\"text\" #userNameInput (keyup.enter)=\"changeUserSubmitted(userNameInput.value)\">\n            <button type=\"submit\" (click)=\"changeUserSubmitted(userNameInput.value)\"> Display Tree Downline</button>\n            <div *ngIf=\"submitted\">\n                <h5>Click on a name to display their downline</h5>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"tree\" id=\"treeholder\">\n    <div id=\"innertreeholder\">\n        <p></p>\n        <ul>\n            <li>\n                <a *ngIf=\"isButtonClicked\" id=\"usernameholder\">\n                Displaying Downline for: {{userNameInput?.value}}\n            </a>\n\n                <ul>\n                    <li *ngFor=\"let employee of employeesInIt\">\n                        <a (click)=\"changeUserClicked(employee.UserProfile.UserName);\">\n                        {{employee.UserProfile.FullName}}\n                        <br />\n                        {{employee.UserProfile.JobTitle}}\n                        <br />\n                        <img [src]=\"imageURL + employee.UserProfile.PicLocation\" [src-fallback]=\"placeholderImg\" />\n                    </a>\n                        <tree-leaf *ngIf=\"employee.isClicked\" [parent]=\"employee\">\n                            <ul>\n                                <li>Loading</li>\n                            </ul>\n                        </tree-leaf>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n        <app-loader [loading]=\"loading\"></app-loader>\n    </div>\n</div>"

/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li *ngFor=\"let child of parent.Children\">\n        <a (click)=\"changeUserClickedTree(child)\">\n            {{child?.UserProfile?.FullName}}\n            <br />\n            {{child?.UserProfile?.JobTitle}}\n            <br />\n            <img [src]=\"imageURL + child?.UserProfile?.PicLocation\" [src-fallback]=\"placeholderImg\" />\n        </a>\n        <tree-leaf [parent]=\"child\" *ngIf=\"child.isClicked && child.Children != 0\"></tree-leaf>\n    </li>\n</ul>\n<app-loader [loading]=\"loading\"></app-loader>"

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(394);
module.exports = __webpack_require__(390);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpPostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpPostService = (function () {
    function HttpPostService(_http) {
        this._http = _http;
        this._downlineURL = "https://cciportal.clydeinc.com/webservices/json/ClydeWebServices/GetAllDownline";
        this._getUserURL = "https://cciportal.clydeinc.com/webservices/json/ClydeWebServices/GetUserProfile";
    }
    HttpPostService.prototype.getDownline = function (body) {
        var bodyString = JSON.stringify(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._downlineURL, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .throw(error.json().error || 'Server error'); });
    };
    HttpPostService.prototype.getUserProfile = function (currentUser) {
        var bodyString = JSON.stringify(currentUser);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._getUserURL, bodyString, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .throw(error.json().error || "Server Error"); });
    };
    return HttpPostService;
}());
HttpPostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpPostService);

var _a;
//# sourceMappingURL=http-post.service.js.map

/***/ })

},[836]);
//# sourceMappingURL=main.bundle.js.map
