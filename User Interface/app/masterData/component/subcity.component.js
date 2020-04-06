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
var subcity_service_1 = require("../services/subcity.service");
var index_1 = require("../../_services/index");
var subcityComponent = /** @class */ (function () {
    function subcityComponent(_subcityService, _alertService) {
        this.ListOfSubcitys = [];
        this.subcity = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._subcityService = _subcityService;
        this._alertService = _alertService;
    }
    subcityComponent.prototype.ngOnInit = function () {
        this.subcity.ID = 0;
        this.subcity.Name = '';
        this.subcity.Description = '';
        this.subcity.CreatedBy = 'bereket';
        this.subcity.CreatedDate = new Date();
        this.LoadSubcitys();
    };
    subcityComponent.prototype.LoadSubcitys = function () {
        var _this = this;
        this._subcityService.getSubcitys()
            .subscribe(function (resultData) {
            _this.ListOfSubcitys = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
        });
    };
    ;
    subcityComponent.prototype.LoadSingleSubcity = function (SelectedSubcity) {
        this.subcity = SelectedSubcity;
    };
    ;
    subcityComponent.prototype.SaveUpdateSubcity = function () {
        var _this = this;
        if (this.subcity.ID == 0) {
            this._subcityService.saveSubcity(this.subcity)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadSubcitys();
                    //return true;
                }
                else {
                    _this._alertService.error("Save Failed");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._subcityService.updateSubcity(this.subcity)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadSubcitys();
                    //return true;
                }
                else {
                    _this._alertService.error("Update Failed");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    subcityComponent.prototype.DeleteSubcity = function (SelectedSubcity) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this.subcity = SelectedSubcity;
            this._subcityService.deleteSubcity(this.subcity)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadSubcitys();
            }, function (error) {
                _this._alertService.error("Delete failed");
                alert('Delete failed');
            });
        }
    };
    ;
    subcityComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/subcity.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [subcity_service_1.subcityService, index_1.AlertService])
    ], subcityComponent);
    return subcityComponent;
}());
exports.subcityComponent = subcityComponent;
//# sourceMappingURL=subcity.component.js.map