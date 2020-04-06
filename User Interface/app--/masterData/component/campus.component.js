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
var campus_service_1 = require("../services/campus.service");
var region_service_1 = require("../services/region.service");
var woreda_service_1 = require("../services/woreda.service");
var subcity_service_1 = require("../services/subcity.service");
var index_1 = require("../../_services/index");
var campusComponent = /** @class */ (function () {
    function campusComponent(_campusService, _regionService, _subcityService, _woredaService, _alertService) {
        this.ListOfRegions = [];
        this.ListOfSubcities = [];
        this.ListOfWoredas = [];
        this.ListOfCampuses = [];
        this.campus = {
            ID: 0,
            Name: '',
            PhoneNumber: '',
            Email: '',
            RegionID: null,
            WoredaID: null,
            SubCityID: null,
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date(),
        };
        this._campusService = _campusService;
        this._regionService = _regionService;
        this._subcityService = _subcityService;
        this._woredaService = _woredaService;
        this._alertService = _alertService;
    }
    campusComponent.prototype.ngOnInit = function () {
        this.campus.ID = 0;
        this.campus.Name = '';
        this.campus.PhoneNumber = '';
        this.campus.Email = '';
        this.campus.RegionID = null;
        this.campus.WoredaID = null;
        this.campus.SubCityID = null;
        this.campus.CreatedBy = 'abenezer';
        this.campus.CreatedDate = new Date();
        this.LoadRegions();
        this.LoadWoredas();
        this.LoadSubcities();
        this.LoadCampuses();
    };
    campusComponent.prototype.LoadRegions = function () {
        var _this = this;
        this._regionService.getRegions()
            .subscribe(function (resultData) {
            _this.ListOfRegions = resultData;
        }, function (error) {
            alert('getRegions failed!');
        });
    };
    ;
    campusComponent.prototype.LoadSubcities = function () {
        var _this = this;
        this._subcityService.getSubcitys()
            .subscribe(function (resultData) {
            _this.ListOfSubcities = resultData;
        }, function (error) {
            alert('getSubcities failed!');
        });
    };
    ;
    campusComponent.prototype.LoadWoredas = function () {
        var _this = this;
        this._woredaService.getWoredas()
            .subscribe(function (resultData) {
            _this.ListOfWoredas = resultData;
        }, function (error) {
            alert('getWoredas failed!');
        });
    };
    ;
    campusComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._campusService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
            console.log(_this.ListOfCampuses);
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getCampuses failed');
        });
    };
    ;
    campusComponent.prototype.LoadSingleCampus = function (SelectedCampus) {
        this.campus = SelectedCampus;
        this.SelectedRegionID = this.campus.RegionID;
        this.SelectedWoredaID = this.campus.WoredaID;
        this.SelectedSubcityID = this.campus.SubCityID;
    };
    ;
    campusComponent.prototype.SaveUpdateCampus = function () {
        var _this = this;
        this.campus.RegionID = this.SelectedRegionID;
        this.campus.SubCityID = this.SelectedSubcityID;
        this.campus.WoredaID = this.SelectedWoredaID;
        if (this.campus.ID == 0) {
            this._campusService.saveCampus(this.campus)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadCampuses();
                    //return true;
                }
                else {
                    _this._alertService.error("Failed To Save");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._campusService.updateCampus(this.campus)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadCampuses();
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
    campusComponent.prototype.DeleteCampus = function (SelectedCampus) {
        var _this = this;
        this.campus = SelectedCampus;
        if (confirm("Are you sure you want to delete this record?")) {
            this._campusService.deleteCampus(this.campus)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadCampuses();
            }, function (error) {
                _this._alertService.error("Delete failed");
                alert('Delete failed');
            });
        }
    };
    ;
    campusComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/campus.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [campus_service_1.campusService, region_service_1.regionService, subcity_service_1.subcityService, woreda_service_1.woredaService, index_1.AlertService])
    ], campusComponent);
    return campusComponent;
}());
exports.campusComponent = campusComponent;
//# sourceMappingURL=campus.component.js.map