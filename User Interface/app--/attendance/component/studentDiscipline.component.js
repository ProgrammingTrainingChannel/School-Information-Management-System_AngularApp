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
var lookup_service_1 = require("../../shared/services/lookup.service");
var student_service_1 = require("../../admission/service/student.service");
var studentDescipline_service_1 = require("../service/studentDescipline.service");
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var index_1 = require("../../_services/index");
var studentDisciplineComponent = /** @class */ (function () {
    function studentDisciplineComponent(_studentService, _lookupService, _gradeService, _gradeSectionService, _studentDesciplineService, _alertService) {
        this.ListOfGradeSections = [];
        this.ListOfGrades = [];
        this.ListOfCaseTypes = [];
        this.ListOfPenaltyTypes = [];
        this.ListOfEmergencyContacts = [];
        this.ListOfStudents = [];
        this.ListOfStudentDesciplines = [];
        this.studentDescipline = {
            ID: 0,
            InformedBy: '',
            Remark: '',
            StudentID: null,
            CaseTypeID: null,
            PenalityTypeID: null,
            EmergencyContactID: null,
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdateBy: '',
            UpdateDate: new Date(),
        };
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._studentDesciplineService = _studentDesciplineService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }
    studentDisciplineComponent.prototype.ngOnInit = function () {
        this.studentDescipline.ID = 0;
        this.studentDescipline.InformedBy = '';
        this.studentDescipline.Remark = '';
        this.studentDescipline.StudentID = 0;
        this.studentDescipline.CaseTypeID = 0;
        this.studentDescipline.PenalityTypeID = 0;
        this.studentDescipline.EmergencyContactID = 0;
        this.studentDescipline.CreatedBy = 'abenezer';
        this.studentDescipline.CreatedDate = new Date();
        this.LoadGrades();
        this.LoadCaseTypes();
        this.LoadPenaltyTypes();
        this.LoadEmergencyContacts();
        this.LoadStudentDesciplines();
    };
    ;
    studentDisciplineComponent.prototype.LoadStudentDesciplines = function () {
        var _this = this;
        this._studentDesciplineService.getStudentDesciplines()
            .subscribe(function (resultData) {
            _this.ListOfStudentDesciplines = resultData;
        }, function (error) {
            alert('getStudentDesciplines failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getGradeSectionsByGrade failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadCaseTypes = function () {
        var _this = this;
        this._lookupService.getCaseTypes()
            .subscribe(function (resultData) {
            _this.ListOfCaseTypes = resultData;
        }, function (error) {
            alert('getCaseTypes failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadPenaltyTypes = function () {
        var _this = this;
        this._lookupService.getPenaltyTypes()
            .subscribe(function (resultData) {
            _this.ListOfPenaltyTypes = resultData;
        }, function (error) {
            alert('getPenaltyTypes failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadEmergencyContacts = function () {
        var _this = this;
        this._lookupService.getEmergencyContacts()
            .subscribe(function (resultData) {
            _this.ListOfEmergencyContacts = resultData;
        }, function (error) {
            alert('getEmergencyContacts failed!');
        });
    };
    ;
    studentDisciplineComponent.prototype.LoadSingleStudentDescipline = function (SelectedStudentDescipline) {
        var _this = this;
        this.studentDescipline = SelectedStudentDescipline;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
            _this.SelectedStudentID = _this.studentDescipline.StudentID;
            _this.SelectedCaseTypeID = _this.studentDescipline.CaseTypeID;
            _this.SelectedPenaltyTypeID = _this.studentDescipline.PenalityTypeID;
            _this.SelectedEmergencyContactID = _this.studentDescipline.EmergencyContactID;
        }, function (error) {
        });
    };
    ;
    studentDisciplineComponent.prototype.IsValid = function (studentDescipline) {
        if (studentDescipline.InformedBy == "") {
            this._alertService.error("Please enter Informed by.");
            return false;
        }
        else if (studentDescipline.StudentID == 0) {
            this._alertService.error("Please select student.");
            return false;
        }
        else {
            return true;
        }
    };
    studentDisciplineComponent.prototype.SaveUpdateStudentDescipline = function () {
        var _this = this;
        this.studentDescipline.StudentID = this.SelectedStudentID;
        this.studentDescipline.CaseTypeID = this.SelectedCaseTypeID;
        this.studentDescipline.PenalityTypeID = this.SelectedPenaltyTypeID;
        this.studentDescipline.EmergencyContactID = this.SelectedEmergencyContactID;
        if (this.IsValid(this.studentDescipline) == true) {
            if (this.studentDescipline.ID == 0) {
                this._studentDesciplineService.saveStudentDescipline(this.studentDescipline)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadStudentDesciplines();
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
                this._studentDesciplineService.updateStudentDescipline(this.studentDescipline)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadStudentDesciplines();
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
        }
    };
    ;
    studentDisciplineComponent.prototype.DeleteStudentAttendance = function (studentDescipline) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentDesciplineService.deleteStudentDescipline(studentDescipline)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadStudentDesciplines();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentDisciplineComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/attendance/template/studentDiscipline.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [student_service_1.studentService, lookup_service_1.lookupService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, studentDescipline_service_1.studentDesciplineService, index_1.AlertService])
    ], studentDisciplineComponent);
    return studentDisciplineComponent;
}());
exports.studentDisciplineComponent = studentDisciplineComponent;
//# sourceMappingURL=studentDiscipline.component.js.map