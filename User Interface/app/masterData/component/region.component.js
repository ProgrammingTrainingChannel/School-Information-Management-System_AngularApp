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
var region_service_1 = require("../services/region.service");
var index_1 = require("../../_services/index");
var regionComponent = /** @class */ (function () {
    function regionComponent(_regionService, _alertService) {
        this.ListOfRegions = [];
        this.region = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._regionService = _regionService;
        this._alertService = _alertService;
    }
    regionComponent.prototype.ngOnInit = function () {
        this.region.ID = 0;
        this.region.Name = '';
        this.region.Description = '';
        this.region.CreatedBy = 'bereket';
        this.region.CreatedDate = new Date();
        this.LoadRegions();
    };
    regionComponent.prototype.LoadRegions = function () {
        var _this = this;
        this._regionService.getRegions()
            .subscribe(function (resultData) {
            _this.ListOfRegions = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getRegions failed');
        });
    };
    ;
    regionComponent.prototype.LoadSingleRegion = function (SelectedRegion) {
        this.region = SelectedRegion;
    };
    ;
    regionComponent.prototype.SaveUpdateRegion = function () {
        var _this = this;
        if (this.region.ID == 0) {
            this._regionService.saveRegion(this.region)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
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
            this._regionService.updateRegion(this.region)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
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
    regionComponent.prototype.DeleteRegion = function () {
        var _this = this;
        this._regionService.deleteRegion(this.region)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
        }, function (error) {
            _this._alertService.error("Delete failed");
            alert('Delete failed');
        });
    };
    ;
    regionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/region.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [region_service_1.regionService, index_1.AlertService])
    ], regionComponent);
    return regionComponent;
}());
exports.regionComponent = regionComponent;
//# sourceMappingURL=region.component.js.map