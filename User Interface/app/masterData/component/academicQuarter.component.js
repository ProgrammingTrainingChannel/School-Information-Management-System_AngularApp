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
var academicQuarter_service_1 = require("../services/academicQuarter.service");
var index_1 = require("../../_services/index");
var academicQuarterComponent = /** @class */ (function () {
    function academicQuarterComponent(_academicQuarterService, _alertService) {
        this.ListOfAcademicQuarters = [];
        this.academicQuarter = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._academicQuarterService = _academicQuarterService;
        this._alertService = _alertService;
        this.LoadAcademicQuarters();
        this.academicQuarter.ID = 0;
        this.academicQuarter.Name = '';
        this.academicQuarter.Description = '';
        this.academicQuarter.CreatedBy = 'abenezer';
        this.academicQuarter.CreatedDate = new Date();
        //setTimeout(function () {
        //    $(document).ready(function () {
        //        $('#example').DataTable({
        //            dom: 'Bfrtip',
        //            select: {
        //                style: 'multi'
        //            },
        //            buttons: [
        //                //'copy', 'csv', 'excel', 'pdf', 'print'
        //                { extend: 'copy', text: 'Copy to clipboard' },
        //                { extend: 'csv', text: 'Copy to csv' },
        //                { extend: 'excel', text: 'Export to excel' },
        //                {
        //                    extend: 'pdf', text: 'Export to pdf', exportOptions: {
        //                        rows: { selected: false }
        //                    }
        //                },
        //                { extend: 'print', text: 'print' },
        //                /* {
        //                'sExtends': 'xls',
        //                'sButtonText': 'Save to Excel',
        //                'sFileName': 'Data.xls'
        //            },*/
        //            ]/*,"lengthMenu": [50, 100, 200]*/
        //        });
        //    });
        //}, 2000);
    }
    academicQuarterComponent.prototype.ngOnInit = function () {
        //$(function () {
        //    $('#example').DataTable({
        //    });
        //});
    };
    academicQuarterComponent.prototype.LoadAcademicQuarters = function () {
        var _this = this;
        this._academicQuarterService.getAcademicQuarters()
            .subscribe(function (resultData) {
            _this.ListOfAcademicQuarters = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getAcademicQuarters failed');
        });
    };
    ;
    academicQuarterComponent.prototype.LoadSingleAcademicQuarter = function (SelectedAcademicQuarter) {
        this.academicQuarter = SelectedAcademicQuarter;
    };
    ;
    academicQuarterComponent.prototype.SaveUpdateAcademicQuarter = function () {
        var _this = this;
        if (this.academicQuarter.ID == 0) {
            this._academicQuarterService.saveAcademicQuarter(this.academicQuarter)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadAcademicQuarters();
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
            this._academicQuarterService.updateAcademicQuarter(this.academicQuarter)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadAcademicQuarters();
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
    academicQuarterComponent.prototype.DeleteAcademicQuarter = function (academicQuarter) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._academicQuarterService.deleteAcademicQuarter(academicQuarter)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadAcademicQuarters();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    academicQuarterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/academicQuarter.component.html',
            styleUrls: ['/app/menus/menu.component.css'],
        }),
        __metadata("design:paramtypes", [academicQuarter_service_1.academicQuarterService, index_1.AlertService])
    ], academicQuarterComponent);
    return academicQuarterComponent;
}());
exports.academicQuarterComponent = academicQuarterComponent;
//# sourceMappingURL=academicQuarter.component.js.map