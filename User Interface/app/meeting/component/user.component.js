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
var user_service_1 = require("../service/user.service");
var index_1 = require("../../_services/index");
var userComponent = /** @class */ (function () {
    function userComponent(route, router, _userService, _alertService) {
        this.route = route;
        this.router = router;
        this.ListOfUsers = [];
        this.user = {
            ID: 0,
            Username: '',
            Password: ''
        };
        this._userService = _userService;
        this._alertService = _alertService;
        this._router = router;
    }
    userComponent.prototype.ngOnInit = function () {
        this.user.ID = 0;
        this.user.Username = '';
        this.user.Password = '';
        this.LoadUsers();
    };
    ;
    userComponent.prototype.LoadUsers = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (resultData) {
            _this.ListOfUsers = resultData;
        }, function (error) {
            if (error.status == 401) {
                var link = ['/login'];
                _this._router.navigate(link);
            }
            else {
                _this._alertService.error("Something went wrong. Please try again.");
            }
        });
    };
    ;
    userComponent.prototype.LoadSingleUser = function (SelectedUser) {
        this.user = SelectedUser;
    };
    ;
    userComponent.prototype.IsValid = function (user) {
        if (user.Username == "") {
            this._alertService.error("Please enter username.");
            return false;
        }
        else if (user.Password == '') {
            this._alertService.error("Please enter password.");
            return false;
        }
        else {
            return true;
        }
    };
    userComponent.prototype.SaveUpdateUser = function () {
        var _this = this;
        if (this.IsValid(this.user) == true) {
            if (this.user.ID == 0) {
                this._userService.saveUser(this.user)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadUsers();
                        //return true;
                    }
                    else {
                        _this._alertService.success("Save Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
            else {
                this._userService.updateUser(this.user)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadUsers();
                        //return true;
                    }
                    else {
                        _this._alertService.success("Update Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
        }
    };
    ;
    userComponent.prototype.DeleteUser = function (SelectedUser) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._userService.deleteUser(SelectedUser)
                .subscribe(function (result) {
                _this.LoadUsers();
            }, function (error) {
                if (error.status == 401) {
                    var link = ['/login'];
                    _this._router.navigate(link);
                }
                else {
                    _this._alertService.error("Something went wrong. Please try again.");
                }
            });
        }
    };
    ;
    userComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/meeting/template/user.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, user_service_1.userService, index_1.AlertService])
    ], userComponent);
    return userComponent;
}());
exports.userComponent = userComponent;
//# sourceMappingURL=user.component.js.map