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
var grade_service_1 = require("../services/grade.service");
var index_1 = require("../../_services/index");
var gradeComponent = /** @class */ (function () {
    function gradeComponent(_gradeService, _alertService) {
        this.ListOfGrades = [];
        this.grade = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._gradeService = _gradeService;
        this._alertService = _alertService;
        this.LoadGrades();
        this.grade.ID = 0;
        this.grade.Name = '';
        this.grade.Description = '';
        this.grade.CreatedBy = 'bereket';
        this.grade.CreatedDate = new Date();
        //buttons: [
        //    { 'copy'}, { 'csv'}, { 'excel'}, { 'pdf'}, { 'print'}
        //    /* {
        //    'sExtends': 'xls',
        //    'sButtonText': 'Save to Excel',
        //    'sFileName': 'Data.xls'
        //},*/
        //]
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
        //                    } },
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
    gradeComponent.prototype.ngOnInit = function () {
        //$(function () {
        //    $('#example').DataTable({
        //    });
        //});
    };
    gradeComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getGrades failed');
        });
    };
    ;
    gradeComponent.prototype.LoadSingleGrade = function (SelectedGrade) {
        this.grade = SelectedGrade;
    };
    ;
    gradeComponent.prototype.SaveUpdateGrade = function () {
        var _this = this;
        if (this.grade.ID == 0) {
            this._gradeService.saveGrade(this.grade)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadGrades();
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
            this._gradeService.updateGrade(this.grade)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadGrades();
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
    gradeComponent.prototype.DeleteGrade = function (grade) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._gradeService.deleteGrade(grade)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadGrades();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    gradeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/grade.component.html',
            styleUrls: ['/app/menus/menu.component.css'],
        }),
        __metadata("design:paramtypes", [grade_service_1.gradeService, index_1.AlertService])
    ], gradeComponent);
    return gradeComponent;
}());
exports.gradeComponent = gradeComponent;
//setTimeout(function () {
//    $(document).ready(function () {
//        //var table = $(document).ready(function ();
//        //var tableTools = new $.fn.dataTable.TableTools(table);
//        //$(tableTools.fnContainer()).insertBefore('#datatable_wrapper');
//        var table = $('#example').DataTable(
//            //{
//            //    dom: 'Bfrtip',
//            //    buttons:['copy']
//            //}
//        );
//        //var tableTools = new $.fn.DataTable.tableTools(table);
//        var tableTools = new $.fn.DataTable.TableTools(table);
//        $(tableTools.fnContainer()).insertBefore('#datatable_wrapper');
//    });
//}, 2000);
//# sourceMappingURL=grade.component.js.map