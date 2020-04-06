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
var studentAdmission_service_1 = require("../service/studentAdmission.service");
var index_1 = require("../../_services/index");
var studentAdmissionComponent = /** @class */ (function () {
    function studentAdmissionComponent(_lookupService, _alertService, _studentAdmissionService) {
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfStudents = [];
        this.ListOfStudentAdmissions = [];
        this.studentAdmission = {
            ID: 0,
            AdmissionDate: new Date(),
            GradeID: 0,
            GradeSectionID: 0,
            StudentID: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdateBy: '',
            UpdatedDate: new Date()
        };
        this._lookupService = _lookupService;
        this._studentAdmissionService = _studentAdmissionService;
        this._alertService = _alertService;
    }
    studentAdmissionComponent.prototype.ngOnInit = function () {
        this.studentAdmission.ID = 0;
        this.studentAdmission.AdmissionDate = new Date();
        this.studentAdmission.GradeID = 0;
        this.studentAdmission.GradeSectionID = 0;
        this.studentAdmission.StudentID = 0;
        this.studentAdmission.CreatedBy = 'bereket';
        this.studentAdmission.CreatedDate = new Date();
        this.studentAdmission.UpdateBy = '';
        this.studentAdmission.UpdatedDate = null;
        this.LoadGrades();
        this.LoadGradeSections();
        this.LoadStudents();
        this.LoadStudentAdmissions();
    };
    ;
    studentAdmissionComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._lookupService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentAdmissionComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        this._lookupService.getGradeSections()
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getGradeSections failed!');
        });
    };
    ;
    studentAdmissionComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._lookupService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentAdmissionComponent.prototype.LoadStudentAdmissions = function () {
        var _this = this;
        this._studentAdmissionService.getStudentAdmissions()
            .subscribe(function (resultData) {
            _this.ListOfStudentAdmissions = resultData;
            console.log(_this.ListOfStudentAdmissions);
        }, function (error) {
            _this._alertService.error("getStudentAdmissions Failed");
        });
    };
    ;
    studentAdmissionComponent.prototype.LoadSingleStudentAdmission = function (SelectedStudentAdmission) {
        this.studentAdmission = SelectedStudentAdmission;
        this.SelectedNewGradeID = this.studentAdmission.GradeID;
        this.SelectedNewGradeSectionID = this.studentAdmission.GradeSectionID;
        this.SelectedStudentID = this.studentAdmission.StudentID;
    };
    ;
    studentAdmissionComponent.prototype.IsValid = function (studentAdmission) {
        if (studentAdmission.AdmissionDate == null) {
            this._alertService.error("Please enter Admission Date.");
            return false;
        }
        else if (studentAdmission.GradeID == 0) {
            this._alertService.error("Please select Grade.");
            return false;
        }
        else if (studentAdmission.GradeSectionID == 0) {
            this._alertService.error("Please select Grade Section.");
            return false;
        }
        else if (studentAdmission.StudentID == 0) {
            this._alertService.error("Please select Student.");
            return false;
        }
        else {
            return true;
        }
    };
    studentAdmissionComponent.prototype.SaveUpdateStudentAdmission = function () {
        var _this = this;
        this.studentAdmission.GradeID = this.SelectedNewGradeID;
        this.studentAdmission.GradeSectionID = this.SelectedNewGradeSectionID;
        this.studentAdmission.StudentID = this.SelectedStudentID;
        if (this.IsValid(this.studentAdmission) == true) {
            if (this.studentAdmission.ID == 0) {
                this._studentAdmissionService.saveStudentAdmission(this.studentAdmission)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadStudentAdmissions();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._studentAdmissionService.updateStudentAdmission(this.studentAdmission)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadStudentAdmissions();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    studentAdmissionComponent.prototype.DeleteStudentAdmission = function (studentAdmission) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._studentAdmissionService.deleteStudentAdmission(studentAdmission)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadStudentAdmissions();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentAdmissionComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/admission/template/studentAdmission.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, index_1.AlertService, studentAdmission_service_1.studentAdmissionService])
    ], studentAdmissionComponent);
    return studentAdmissionComponent;
}());
exports.studentAdmissionComponent = studentAdmissionComponent;
//# sourceMappingURL=studentAdmission.component.js.map