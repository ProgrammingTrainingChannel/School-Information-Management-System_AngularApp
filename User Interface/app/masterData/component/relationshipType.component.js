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
var relationshipType_service_1 = require("../services/relationshipType.service");
var index_1 = require("../../_services/index");
var relationshipTypeComponent = /** @class */ (function () {
    function relationshipTypeComponent(_relationTypesService, _alertService) {
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
    relationshipTypeComponent.prototype.ngOnInit = function () {
        this.relationTypes.ID = 0;
        this.relationTypes.Name = '';
        this.relationTypes.Description = '';
        this.relationTypes.CreatedBy = 'abenezer';
        this.relationTypes.CreatedDate = new Date();
        this.LoadrelationTypes();
    };
    relationshipTypeComponent.prototype.LoadrelationTypes = function () {
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
    relationshipTypeComponent.prototype.LoadSinglerelationTypes = function (SelectedrelationTypes) {
        this.relationTypes = SelectedrelationTypes;
    };
    ;
    relationshipTypeComponent.prototype.SaveUpdaterelationTypes = function () {
        var _this = this;
        if (this.relationTypes.ID == 0) {
            this._relationTypesService.saverelationTypes(this.relationTypes)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadrelationTypes();
                    //return true;
                }
                else {
                    _this._alertService.error("Save Failed");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Failed To Save");
            });
        }
        else {
            this._relationTypesService.updaterelationTypes(this.relationTypes)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadrelationTypes();
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
    relationshipTypeComponent.prototype.DeleterelationTypes = function (SelectedrelationTypes) {
        var _this = this;
        this.relationTypes = SelectedrelationTypes;
        if (confirm("Are you sure you want to delete this record?")) {
            this._relationTypesService.deleterelationTypes(this.relationTypes)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadrelationTypes();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    relationshipTypeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/relationType.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [relationshipType_service_1.relationshipTypeService, index_1.AlertService])
    ], relationshipTypeComponent);
    return relationshipTypeComponent;
}());
exports.relationshipTypeComponent = relationshipTypeComponent;
//# sourceMappingURL=relationshipType.component.js.map