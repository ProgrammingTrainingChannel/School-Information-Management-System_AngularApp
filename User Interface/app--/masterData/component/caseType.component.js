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
var caseType_service_1 = require("../services/caseType.service");
var index_1 = require("../../_services/index");
var caseTypeComponent = /** @class */ (function () {
    function caseTypeComponent(_caseTypeService, _alertService) {
        this.ListOfCaseTypes = [];
        this.caseType = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._caseTypeService = _caseTypeService;
        this._alertService = _alertService;
    }
    caseTypeComponent.prototype.ngOnInit = function () {
        this.caseType.ID = 0;
        this.caseType.Name = '';
        this.caseType.Description = '';
        this.caseType.CreatedBy = 'bereket';
        this.caseType.CreatedDate = new Date();
        this.LoadCaseTypes();
    };
    caseTypeComponent.prototype.LoadCaseTypes = function () {
        var _this = this;
        this._caseTypeService.getCaseTypes()
            .subscribe(function (resultData) {
            _this.ListOfCaseTypes = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getCaseType failed');
        });
    };
    ;
    caseTypeComponent.prototype.LoadSingleCaseType = function (SelectedCaseType) {
        this.caseType = SelectedCaseType;
    };
    ;
    caseTypeComponent.prototype.SaveUpdateCaseType = function () {
        var _this = this;
        if (this.caseType.ID == 0) {
            this._caseTypeService.saveCaseType(this.caseType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadCaseTypes();
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
            this._caseTypeService.updateCaseType(this.caseType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadCaseTypes();
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
    caseTypeComponent.prototype.DeleteCaseType = function (SelectedCaseType) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this.caseType = SelectedCaseType;
            this._caseTypeService.deleteCaseType(this.caseType)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadCaseTypes();
            }, function (error) {
                _this._alertService.error("Delete failed");
                alert('Delete failed');
            });
        }
    };
    ;
    caseTypeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/caseType.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [caseType_service_1.caseTypeService, index_1.AlertService])
    ], caseTypeComponent);
    return caseTypeComponent;
}());
exports.caseTypeComponent = caseTypeComponent;
//# sourceMappingURL=caseType.component.js.map