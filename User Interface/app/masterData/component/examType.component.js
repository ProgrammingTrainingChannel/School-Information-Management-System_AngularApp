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
var examType_service_1 = require("../services/examType.service");
var index_1 = require("../../_services/index");
var examTypeComponent = /** @class */ (function () {
    function examTypeComponent(_examTypeService, _alertService) {
        this.ListOfExamTypes = [];
        this.examType = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._examTypeService = _examTypeService;
        this._alertService = _alertService;
        this.LoadExamTypes();
        this.examType.ID = 0;
        this.examType.Name = '';
        this.examType.Description = '';
        this.examType.CreatedBy = 'abenezer';
        this.examType.CreatedDate = new Date();
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
    examTypeComponent.prototype.ngOnInit = function () {
    };
    examTypeComponent.prototype.LoadExamTypes = function () {
        var _this = this;
        this._examTypeService.getExamTypes()
            .subscribe(function (resultData) {
            _this.ListOfExamTypes = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getExamTypes failed');
        });
    };
    ;
    examTypeComponent.prototype.LoadSingleExamType = function (SelectedExamType) {
        this.examType = SelectedExamType;
    };
    ;
    examTypeComponent.prototype.SaveUpdateExamType = function () {
        var _this = this;
        if (this.examType.ID == 0) {
            this._examTypeService.saveExamType(this.examType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadExamTypes();
                }
                else {
                    _this._alertService.error("Save Failed");
                }
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._examTypeService.updateExamType(this.examType)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadExamTypes();
                }
                else {
                    _this._alertService.error("Update Failed");
                }
            }, function (error) {
                _this._alertService.error("Update Failed");
            });
        }
    };
    ;
    examTypeComponent.prototype.DeleteExamType = function (examType) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._examTypeService.deleteExamType(examType)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadExamTypes();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    examTypeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/examType.component.html',
            styleUrls: ['/app/menus/menu.component.css'],
        }),
        __metadata("design:paramtypes", [examType_service_1.examTypeService, index_1.AlertService])
    ], examTypeComponent);
    return examTypeComponent;
}());
exports.examTypeComponent = examTypeComponent;
//# sourceMappingURL=examType.component.js.map