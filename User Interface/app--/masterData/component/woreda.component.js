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
var woreda_service_1 = require("../services/woreda.service");
var index_1 = require("../../_services/index");
var woredaComponent = /** @class */ (function () {
    function woredaComponent(_woredaService, _alertService) {
        this.ListOfWoredas = [];
        this.woreda = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._woredaService = _woredaService;
        this._alertService = _alertService;
    }
    woredaComponent.prototype.ngOnInit = function () {
        this.woreda.ID = 0;
        this.woreda.Name = '';
        this.woreda.Description = '';
        this.woreda.CreatedBy = 'bereket';
        this.woreda.CreatedDate = new Date();
        this.LoadWoredas();
    };
    woredaComponent.prototype.LoadWoredas = function () {
        var _this = this;
        this._woredaService.getWoredas()
            .subscribe(function (resultData) {
            _this.ListOfWoredas = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getWoredas failed');
        });
    };
    ;
    woredaComponent.prototype.LoadSingleWoreda = function (SelectedWoreda) {
        this.woreda = SelectedWoreda;
    };
    ;
    woredaComponent.prototype.SaveUpdateWoreda = function () {
        var _this = this;
        if (this.woreda.ID == 0) {
            this._woredaService.saveWoreda(this.woreda)
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
            this._woredaService.updateWoreda(this.woreda)
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
    woredaComponent.prototype.DeleteWoreda = function () {
        var _this = this;
        this._woredaService.deleteWoreda(this.woreda)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
        }, function (error) {
            _this._alertService.error("Delete failed");
            alert('Delete failed');
        });
    };
    ;
    woredaComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/woreda.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [woreda_service_1.woredaService, index_1.AlertService])
    ], woredaComponent);
    return woredaComponent;
}());
exports.woredaComponent = woredaComponent;
//# sourceMappingURL=woreda.component.js.map