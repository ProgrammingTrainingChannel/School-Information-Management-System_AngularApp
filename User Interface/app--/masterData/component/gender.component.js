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
var gender_service_1 = require("../services/gender.service");
var index_1 = require("../../_services/index");
var genderComponent = /** @class */ (function () {
    function genderComponent(_genderService, _alertService) {
        this.ListOfGenders = [];
        this.gender = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._genderService = _genderService;
        this._alertService = _alertService;
    }
    genderComponent.prototype.ngOnInit = function () {
        this.gender.ID = 0;
        this.gender.Name = '';
        this.gender.Description = '';
        this.gender.CreatedBy = 'abenezer';
        this.gender.CreatedDate = new Date();
        this.LoadGenders();
    };
    genderComponent.prototype.LoadGenders = function () {
        var _this = this;
        this._genderService.getGenders()
            .subscribe(function (resultData) {
            _this.ListOfGenders = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getGenders failed');
        });
    };
    ;
    genderComponent.prototype.LoadSingleGender = function (SelectedGender) {
        this.gender = SelectedGender;
    };
    ;
    genderComponent.prototype.SaveUpdateGender = function () {
        var _this = this;
        if (this.gender.ID == 0) {
            this._genderService.saveGender(this.gender)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadGenders();
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
            this._genderService.updateGender(this.gender)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadGenders();
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
    genderComponent.prototype.DeleteGender = function (gender) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._genderService.deleteGender(gender)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadGenders();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    genderComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/gender.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [gender_service_1.genderService, index_1.AlertService])
    ], genderComponent);
    return genderComponent;
}());
exports.genderComponent = genderComponent;
//# sourceMappingURL=gender.component.js.map