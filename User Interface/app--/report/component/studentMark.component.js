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
var course_service_1 = require("../../masterData/services/course.service");
var student_service_1 = require("../../admission/service/student.service");
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var academicQuarter_service_1 = require("../../masterData/services/academicQuarter.service");
var examType_service_1 = require("../../masterData/services/examType.service");
var studentMark_service_1 = require("../../grading/service/studentMark.service");
var index_1 = require("../../_services/index");
var studentMarkComponent = /** @class */ (function () {
    function studentMarkComponent(_studentMarkService, _academicQuarterService, _courseService, _examTypeService, _gradeService, _gradeSectionService, _studentService, _alertService) {
        this.ListOfStudentMarks = [];
        this.ListOfGrades = [];
        this.ListOfCourses = [];
        this.ListOfStudents = [];
        this.ListOfGradeSections = [];
        this.ListOfExamTypes = [];
        this.ListOfAcademicQuarters = [];
        this.studentMark = {
            ID: 0,
            StudentID: 0,
            GradeID: 0,
            GradeSectionID: 0,
            CourseID: 0,
            ExamTypeID: 0,
            AcademicQuarterID: 0,
            OutOfTotal: 0,
            MarkObtained: 0,
            AcademicYear: 0,
            Remark: '',
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date(),
        };
        this._courseService = _courseService;
        this._alertService = _alertService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._examTypeService = _examTypeService;
        this._studentMarkService = _studentMarkService;
        this._academicQuarterService = _academicQuarterService;
    }
    studentMarkComponent.prototype.ngOnInit = function () {
        this.studentMark.ID = 0;
        this.studentMark.StudentID = 0;
        this.studentMark.GradeSectionID = 0;
        this.studentMark.GradeID = 0;
        this.studentMark.CourseID = 0;
        this.studentMark.ExamTypeID = 0;
        this.studentMark.AcademicQuarterID = 0;
        this.studentMark.OutOfTotal = 0;
        this.studentMark.MarkObtained = 0;
        this.studentMark.AcademicYear = 0;
        this.studentMark.Remark = null;
        this.studentMark.CreatedBy = 'abenezer';
        this.studentMark.CreatedDate = new Date();
        this.LoadGrades();
        this.LoadCourses();
        this.LoadExamTypes();
        this.LoadAcademicQuarters();
        this.LoadStudentMarks();
    };
    studentMarkComponent.prototype.LoadAcademicQuarters = function () {
        var _this = this;
        this._academicQuarterService.getAcademicQuarters()
            .subscribe(function (resultData) {
            _this.ListOfAcademicQuarters = resultData;
        }, function (error) {
            alert('getAcademicQuarters failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadStudentMarks = function () {
        var _this = this;
        this._studentMarkService.getStudentMarks()
            .subscribe(function (resultData) {
            _this.ListOfStudentMarks = resultData;
        }, function (error) {
            alert('getStudentMarks failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadExamTypes = function () {
        var _this = this;
        this._examTypeService.getExamTypes()
            .subscribe(function (resultData) {
            _this.ListOfExamTypes = resultData;
        }, function (error) {
            alert('getExamTypes failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadCourses = function () {
        var _this = this;
        this._courseService.getCourses()
            .subscribe(function (resultData) {
            _this.ListOfCourses = resultData;
        }, function (error) {
            alert('getCourses failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentMarkComponent.prototype.LoadGradeSections = function () {
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
    studentMarkComponent.prototype.LoadSingleStudentMark = function (SelectedStudentMark) {
        this.studentMark = SelectedStudentMark;
        this.SelectedGradeID = this.studentMark.GradeID;
        this.SelectedGradeSectionID = this.studentMark.GradeSectionID;
        this.SelectedExamTypeID = this.studentMark.ExamTypeID;
        this.SelectedCourseID = this.studentMark.CourseID;
        this.SelectedAcademicQuarterID = this.studentMark.AcademicQuarterID;
        this.SelectedStudentID = this.studentMark.StudentID;
    };
    ;
    studentMarkComponent.prototype.SaveUpdateStudentMark = function () {
        var _this = this;
        this.studentMark.GradeID = this.SelectedGradeID;
        this.studentMark.GradeSectionID = this.SelectedGradeSectionID;
        this.studentMark.ExamTypeID = this.SelectedExamTypeID;
        this.studentMark.CourseID = this.SelectedCourseID;
        this.studentMark.StudentID = this.SelectedStudentID;
        this.studentMark.AcademicQuarterID = this.SelectedAcademicQuarterID;
        if (this.studentMark.ID == 0) {
            this._studentMarkService.saveStudentMark(this.studentMark)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadStudentMarks();
                    //return true;
                }
                else {
                    _this._alertService.error("Failed To Save");
                    //return false;
                }
            }, function (error) {
                _this._alertService.error("Save Failed");
            });
        }
        else {
            this._studentMarkService.updateStudentMark(this.studentMark)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadStudentMarks();
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
    studentMarkComponent.prototype.DeleteStudentMark = function (SelectedStudentMark) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentMarkService.deleteStudentMark(SelectedStudentMark)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadStudentMarks();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentMarkComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/grading/template/studentMark.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [studentMark_service_1.studentMarkService, academicQuarter_service_1.academicQuarterService, course_service_1.courseService, examType_service_1.examTypeService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, student_service_1.studentService, index_1.AlertService])
    ], studentMarkComponent);
    return studentMarkComponent;
}());
exports.studentMarkComponent = studentMarkComponent;
//# sourceMappingURL=studentMark.component.js.map