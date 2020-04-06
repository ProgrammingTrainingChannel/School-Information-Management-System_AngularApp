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
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var lookup_service_1 = require("../../shared/services/lookup.service");
var student_service_1 = require("../../admission/service/student.service");
var index_1 = require("../../_services/index");
var studentTranscript_service_1 = require("../service/studentTranscript.service");
var studentTranscriptComponent = /** @class */ (function () {
    function studentTranscriptComponent(_studentService, _lookupService, _gradeService, _gradeSectionService, _studentTranscriptService, _alertService) {
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfStudents = [];
        this.ListOfStudentTranscripts = [];
        this.studentMark = {
            ID: 0,
            Fullname: '',
            Gender: '',
            Campus: '',
            Department: '',
            Grade: '',
            AcademicQuarter: '',
            AcademicYear: 0,
            ExamType: '',
            OutOfTotal: 0,
            MarkObtained: 0
        };
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._studentTranscriptService = _studentTranscriptService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }
    studentTranscriptComponent.prototype.ngOnInit = function () {
        this.studentMark.ID = 0;
        this.studentMark.Fullname = '';
        this.studentMark.Gender = '';
        this.studentMark.Campus = '';
        this.studentMark.Department = '';
        this.studentMark.Grade = '';
        this.studentMark.AcademicQuarter = '';
        this.studentMark.AcademicYear = 0;
        this.studentMark.ExamType = '';
        this.studentMark.OutOfTotal = 0;
        this.studentMark.MarkObtained = 0;
        this.LoadGrades();
    };
    studentTranscriptComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentTranscriptComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        console.log('done');
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getCourses failed!');
        });
    };
    ;
    studentTranscriptComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentTranscriptComponent.prototype.LoadStudentGradeReport = function () {
        var _this = this;
        this._studentTranscriptService.getGradeTranscriptByStudentID(this.SelectedStudentID, this.SelectedAcademicYearID, this.SelectedGradeName)
            .subscribe(function (resultData) {
            _this.ListOfStudentTranscripts = resultData;
        }, function (error) {
            alert('getGradeTranscriptByStudentID failed!');
        });
    };
    ;
    studentTranscriptComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/grading/template/studentTranscript.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [student_service_1.studentService, lookup_service_1.lookupService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, studentTranscript_service_1.studentTranscriptService, index_1.AlertService])
    ], studentTranscriptComponent);
    return studentTranscriptComponent;
}());
exports.studentTranscriptComponent = studentTranscriptComponent;
//# sourceMappingURL=studentTranscript.component.js.map