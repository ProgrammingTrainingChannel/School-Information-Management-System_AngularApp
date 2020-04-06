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
var paymentPeriod_service_1 = require("../services/paymentPeriod.service");
var index_1 = require("../../_services/index");
var paymentPeriodComponent = /** @class */ (function () {
    function paymentPeriodComponent(_paymentPeriodService, _alertService) {
        this.ListOfPaymentPeriods = [];
        this.paymentPeriod = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._paymentPeriodService = _paymentPeriodService;
        this._alertService = _alertService;
    }
    paymentPeriodComponent.prototype.ngOnInit = function () {
        this.paymentPeriod.ID = 0;
        this.paymentPeriod.Name = '';
        this.paymentPeriod.Description = '';
        this.paymentPeriod.CreatedBy = 'bereket';
        this.paymentPeriod.CreatedDate = new Date();
        this.LoadPaymentPeriods();
    };
    paymentPeriodComponent.prototype.LoadPaymentPeriods = function () {
        var _this = this;
        this._paymentPeriodService.getPaymentPeriods()
            .subscribe(function (resultData) {
            _this.ListOfPaymentPeriods = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getPaymentPeriods failed');
        });
    };
    ;
    paymentPeriodComponent.prototype.LoadSinglePaymentPeriod = function (SelectedPaymentPeriod) {
        this.paymentPeriod = SelectedPaymentPeriod;
    };
    ;
    paymentPeriodComponent.prototype.SaveUpdatePaymentPeriod = function () {
        var _this = this;
        if (this.paymentPeriod.ID == 0) {
            this._paymentPeriodService.savePaymentPeriod(this.paymentPeriod)
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
            this._paymentPeriodService.updatePaymentPeriod(this.paymentPeriod)
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
    paymentPeriodComponent.prototype.DeletePaymentPeriod = function () {
        var _this = this;
        this._paymentPeriodService.deletePaymentPeriod(this.paymentPeriod)
            .subscribe(function (result) {
            _this._alertService.success("Deleted Successfully");
        }, function (error) {
            _this._alertService.error("Delete failed");
            alert('Delete failed');
        });
    };
    ;
    paymentPeriodComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/paymentPeriod.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [paymentPeriod_service_1.paymentPeriodService, index_1.AlertService])
    ], paymentPeriodComponent);
    return paymentPeriodComponent;
}());
exports.paymentPeriodComponent = paymentPeriodComponent;
//# sourceMappingURL=paymentPeriod.component.js.map