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
var studentAttendance_service_1 = require("../service/studentAttendance.service");
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var index_1 = require("../../_services/index");
var studentAttendanceComponent = /** @class */ (function () {
    function studentAttendanceComponent(_studentService, _lookupService, _gradeService, _gradeSectionService, _studentAttendanceService, _alertService) {
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfPermissionTypes = [];
        this.ListOfStudents = [];
        this.ListOfStudentAttendances = [];
        this.studentAttendance = {
            ID: 0,
            AbsensenceDuration: 0,
            PermitedBy: '',
            Remark: '',
            StudentID: null,
            PermissionTypeID: null,
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdateBy: '',
            UpdateDate: new Date(),
        };
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._studentAttendanceService = _studentAttendanceService;
        this._alertService = _alertService;
    }
    studentAttendanceComponent.prototype.ngOnInit = function () {
        this.studentAttendance.ID = 0;
        this.studentAttendance.AbsensenceDuration = 0;
        this.studentAttendance.PermitedBy = '';
        this.studentAttendance.Remark = '';
        this.studentAttendance.StudentID = 0;
        this.studentAttendance.PermissionTypeID = 0;
        this.studentAttendance.CreatedBy = 'abenezer';
        this.studentAttendance.CreatedDate = new Date();
        this.LoadGrades();
        this.LoadPermissionTypes();
        this.LoadStudentAttendances();
    };
    ;
    studentAttendanceComponent.prototype.LoadStudentAttendances = function () {
        var _this = this;
        this._studentAttendanceService.getStudentAttendances()
            .subscribe(function (resultData) {
            _this.ListOfStudentAttendances = resultData;
            console.log(_this.ListOfStudentAttendances);
        }, function (error) {
            alert('getStudentAttendances failed!');
        });
    };
    ;
    studentAttendanceComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentAttendanceComponent.prototype.LoadGradeSections = function () {
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
    studentAttendanceComponent.prototype.LoadAllStudents = function () {
        var _this = this;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentAttendanceComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentAttendanceComponent.prototype.LoadPermissionTypes = function () {
        var _this = this;
        this._lookupService.getPermissionTypes()
            .subscribe(function (resultData) {
            _this.ListOfPermissionTypes = resultData;
        }, function (error) {
            alert('getPermissionTypes failed!');
        });
    };
    ;
    studentAttendanceComponent.prototype.LoadSingleStudentAttendance = function (SelectedStudentAttendance) {
        var _this = this;
        this.studentAttendance = SelectedStudentAttendance;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
            _this.SelectedStudentID = _this.studentAttendance.StudentID;
            _this.SelectedPermissionTypeID = _this.studentAttendance.PermissionTypeID;
        }, function (error) {
        });
    };
    ;
    studentAttendanceComponent.prototype.IsValid = function (studentAttendance) {
        if (studentAttendance.AbsensenceDuration == 0) {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (studentAttendance.PermitedBy == "") {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    };
    studentAttendanceComponent.prototype.SaveUpdateStudentAttendance = function () {
        var _this = this;
        this.studentAttendance.StudentID = this.SelectedStudentID;
        this.studentAttendance.PermissionTypeID = this.SelectedPermissionTypeID;
        if (this.IsValid(this.studentAttendance) == true) {
            if (this.studentAttendance.ID == 0) {
                this._studentAttendanceService.saveStudentAttendance(this.studentAttendance)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadStudentAttendances();
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
                this._studentAttendanceService.updateStudentAttendance(this.studentAttendance)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadStudentAttendances();
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
    studentAttendanceComponent.prototype.DeleteStudentAttendance = function (studentAttendance) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentAttendanceService.deleteStudentAttendance(studentAttendance)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadStudentAttendances();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/attendance/template/studentAttendance.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [student_service_1.studentService, lookup_service_1.lookupService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, studentAttendance_service_1.studentAttendanceService, index_1.AlertService])
    ], studentAttendanceComponent);
    return studentAttendanceComponent;
}());
exports.studentAttendanceComponent = studentAttendanceComponent;
//# sourceMappingURL=studentAttendance.component.js.map