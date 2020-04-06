"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_service_1 = require("../app/login.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginService, route, router) {
        this.route = route;
        this.router = router;
        this._route = route;
        this._router = router;
        this._loginService = _loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('access_token')) {
            this.IsLoggedIn = true;
        }
        ;
    };
    ;
    LoginComponent.prototype.UserLogin = function () {
        var _this = this;
        this._loginService.login(this.username, this.password)
            .subscribe(function (result) {
            if (result.access_token) {
                _this.IsLoggedIn = true;
                sessionStorage.setItem('access_token', result.access_token);
            }
            else {
                _this.LoginFailed = true;
                _this.IsLoggedIn = false;
                sessionStorage.removeItem("access_token");
            }
        }, function (error) {
            _this.LoginFailed = true;
            _this.IsLoggedIn = false;
            sessionStorage.removeItem("access_token");
            //console.log(error);
            //this._alertService.success("Save Failed");
        });
    };
    ;
    LoginComponent.prototype.UserLogout = function () {
        this.IsLoggedIn = false;
        sessionStorage.removeItem("access_token");
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/login.component.html',
        }),
        __metadata("design:paramtypes", [login_service_1.loginService, router_1.ActivatedRoute, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map