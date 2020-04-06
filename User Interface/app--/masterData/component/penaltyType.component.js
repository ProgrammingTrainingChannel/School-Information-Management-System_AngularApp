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
var penaltyType_service_1 = require("../services/penaltyType.service");
var index_1 = require("../../_services/index");
var penaltyTypeComponent = /** @class */ (function () {
    function penaltyTypeComponent(_penaltyTypeService, _alertService) {
        this.ListOfPenaltyTypes = [];
        this.penaltyType = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._penaltyTypeService = _penaltyTypeService;
        this._alertService = _alertService;
    }
    penaltyTypeComponent.prototype.ngOnInit = function () {
        this.penaltyType.ID = 0;
        this.penaltyType.Name = '';
        this.penaltyType.Description = '';
        this.penaltyType.CreatedBy = 'bereket';
        this.penaltyType.CreatedDate = new Date();
        this.LoadPenaltyTypes();
    };
    penaltyTypeComponent.prototype.LoadPenaltyTypes = function () {
        var _this = this;
        this._penaltyTypeService.getPenaltyTypes()
            .subscribe(function (resultData) {
            _this.ListOfPenaltyTypes = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getPenaltyType failed');
        });
    };
    ;
    penaltyTypeComponent.prototype.LoadSinglePenaltyType = function (SelectedPenaltyType) {
        this.penaltyType = SelectedPenaltyType;
    };
    ;
    penaltyTypeComponent.prototype.SaveUpdatePenaltyType = function () {
        var _this = this;
        if (this.penaltyType.ID == 0) {
            this._penaltyTypeService.savePenaltyType(this.penaltyType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadPenaltyTypes();
                    //return true;
                }
                else {
                    _this._alertService.error("Save Failed 22");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Save Failed 33");
            });
        }
        else {
            this._penaltyTypeService.updatePenaltyType(this.penaltyType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadPenaltyTypes();
                    //return true;
                }
                else {
                    _this._alertService.error("Update Failed 22");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Update Failed 33");
            });
        }
    };
    ;
    penaltyTypeComponent.prototype.DeletePenaltyType = function () {
        var _this = this;
        this._penaltyTypeService.deletePenaltyType(this.penaltyType)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
        }, function (error) {
            _this._alertService.error("Delete failed");
            alert('Delete failed');
        });
    };
    ;
    penaltyTypeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/penaltyType.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [penaltyType_service_1.penaltyTypeService, index_1.AlertService])
    ], penaltyTypeComponent);
    return penaltyTypeComponent;
}());
exports.penaltyTypeComponent = penaltyTypeComponent;
//# sourceMappingURL=penaltyType.component.js.map