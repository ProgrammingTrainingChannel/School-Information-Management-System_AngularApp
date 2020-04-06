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
var teacher_service_1 = require("../../admission/service/teacher.service");
var gradeSection_service_1 = require("../services/gradeSection.service");
var index_1 = require("../../_services/index");
var gradeSectionComponent = /** @class */ (function () {
    function gradeSectionComponent(_gradeService, _teacherService, _gradeSectionService, _alertService) {
        this.ListOfGrades = [];
        this.ListOfTeachers = [];
        this.ListOfGradeSections = [];
        this.gradeSection = {
            ID: 0,
            Name: '',
            GradeID: 0,
            RoomTeacherID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date()
        };
        this._gradeService = _gradeService;
        this._teacherService = _teacherService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }
    gradeSectionComponent.prototype.ngOnInit = function () {
        this.gradeSection.ID = 0;
        this.gradeSection.Name = '';
        this.gradeSection.GradeID = 0;
        this.gradeSection.RoomTeacherID = 0;
        this.gradeSection.CreatedBy = 'bereket';
        this.gradeSection.CreatedDate = new Date();
        this.gradeSection.UpdatedBy = '';
        this.gradeSection.UpdatedDate = null;
        this.LoadGrades();
        this.LoadTeachers();
        this.LoadGradeSections();
    };
    gradeSectionComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    gradeSectionComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._teacherService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            alert('getTeachers failed!');
        });
    };
    ;
    gradeSectionComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        this._gradeSectionService.getGradeSections()
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getGradeSections failed');
        });
    };
    ;
    gradeSectionComponent.prototype.LoadSingleGradeSection = function (SelectedGradeSection) {
        this.gradeSection = SelectedGradeSection;
        this.SelectedGradeID = this.gradeSection.GradeID;
        this.SelectedTeacherID = this.gradeSection.RoomTeacherID;
    };
    ;
    gradeSectionComponent.prototype.SaveUpdateGradeSection = function () {
        var _this = this;
        this.gradeSection.GradeID = this.SelectedGradeID;
        this.gradeSection.RoomTeacherID = this.SelectedTeacherID;
        if (this.gradeSection.ID == 0) {
            this._gradeSectionService.saveGradeSection(this.gradeSection)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadGradeSections();
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
            this._gradeSectionService.updateGradeSection(this.gradeSection)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadGradeSections();
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
    gradeSectionComponent.prototype.DeleteGradeSection = function (SelectedGradeSection) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this.gradeSection = SelectedGradeSection;
            this._gradeSectionService.deleteGradeSection(this.gradeSection)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadGradeSections();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    gradeSectionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/gradeSection.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [grade_service_1.gradeService, teacher_service_1.teacherService, gradeSection_service_1.gradeSectionService, index_1.AlertService])
    ], gradeSectionComponent);
    return gradeSectionComponent;
}());
exports.gradeSectionComponent = gradeSectionComponent;
//# sourceMappingURL=gradeSection.component.js.map