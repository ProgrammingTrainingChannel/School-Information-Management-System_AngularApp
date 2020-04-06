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
var relationTypes_service_1 = require("../services/relationTypes.service");
var index_1 = require("../../_services/index");
var relationTypesComponent = /** @class */ (function () {
    function relationTypesComponent(_relationTypesService, _alertService) {
        this.ListOfrelationTypes = [];
        this.relationTypes = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._relationTypesService = _relationTypesService;
        this._alertService = _alertService;
    }
    relationTypesComponent.prototype.ngOnInit = function () {
        this.relationTypes.ID = 0;
        this.relationTypes.Name = '';
        this.relationTypes.Description = '';
        this.relationTypes.CreatedBy = 'abenezer';
        this.relationTypes.CreatedDate = new Date();
        //this.LoadrelationTypess();
    };
    relationTypesComponent.prototype.LoadrelationTypes = function () {
        var _this = this;
        this._relationTypesService.getrelationTypes()
            .subscribe(function (resultData) {
            _this.ListOfrelationTypes = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getrelationTypes failed');
        });
    };
    ;
    relationTypesComponent.prototype.LoadSinglerelationTypes = function (SelectedrelationTypes) {
        this.relationTypes = SelectedrelationTypes;
    };
    ;
    relationTypesComponent.prototype.SaveUpdaterelationTypes = function () {
        var _this = this;
        if (this.relationTypes.ID == 0) {
            this._relationTypesService.saverelationTypes(this.relationTypes)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    //return true;
                }
                else {
                    _this._alertService.success("Save Failed");
                    //return false;
                }
            }, function (error) {
                _this._alertService.success("Save Failed");
            });
        }
        else {
            this._relationTypesService.updaterelationTypes(this.relationTypes)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    //return true;
                }
                else {
                    _this._alertService.success("Update Failed");
                    //return false;
                }
            }, function (error) {
                _this._alertService.success("Update Failed");
            });
        }
    };
    ;
    relationTypesComponent.prototype.DeleterelationTypes = function () {
        var _this = this;
        this._relationTypesService.deleterelationTypes(this.relationTypes)
            .subscribe(function (result) {
            alert(result);
        }, function (error) {
            _this._alertService.success("Delete failed");
            alert('Delete failed');
        });
    };
    ;
    relationTypesComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/relationTypes.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [relationTypes_service_1.relationTypesService, index_1.AlertService])
    ], relationTypesComponent);
    return relationTypesComponent;
}());
exports.relationTypesComponent = relationTypesComponent;
//# sourceMappingURL=relationTypes.component.js.map