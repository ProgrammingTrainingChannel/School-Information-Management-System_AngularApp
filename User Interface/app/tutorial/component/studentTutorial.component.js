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
var router_1 = require("@angular/router");
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var student_service_1 = require("../../admission/service/student.service");
var studentTutorial_service_1 = require("../../tutorial/service/studentTutorial.service");
var index_1 = require("../../_services/index");
var studentTutorialComponent = /** @class */ (function () {
    function studentTutorialComponent(route, router, _studentService, _gradeService, _gradeSectionService, _lookupService, _studentTutorialService, _alertService) {
        this.route = route;
        this.router = router;
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfStudents = [];
        this.ListOfStudentTutorials = [];
        this.studentTutorial = {
            ID: 0,
            StudentID: 0,
            AcadamicYear: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: null
        };
        this._lookupService = _lookupService;
        this._studentTutorialService = _studentTutorialService;
        this._alertService = _alertService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._router = router;
    }
    studentTutorialComponent.prototype.ngOnInit = function () {
        this.studentTutorial.ID = 0;
        this.studentTutorial.StudentID = 0;
        this.studentTutorial.AcadamicYear = 0;
        this.studentTutorial.CreatedBy = 'bereket';
        this.studentTutorial.CreatedDate = new Date();
        this.studentTutorial.UpdatedBy = '';
        this.studentTutorial.UpdatedDate = null;
        this.LoadGrades();
        this.LoadStudentTutorials();
    };
    ;
    studentTutorialComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._gradeService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentTutorialComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        console.log('done');
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getGradeSectionsByGrade failed!');
        });
    };
    ;
    studentTutorialComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            if (error.status == 401) {
                var link = ['/login'];
                _this._router.navigate(link);
            }
            else {
                _this._alertService.error("Something went wrong. Please try again.");
            }
        });
    };
    ;
    studentTutorialComponent.prototype.LoadStudentTutorials = function () {
        var _this = this;
        this._studentTutorialService.getStudentTutorials()
            .subscribe(function (resultData) {
            _this.ListOfStudentTutorials = resultData;
            console.log(_this.ListOfStudentTutorials);
        }, function (error) {
            if (error.status == 401) {
                var link = ['/login'];
                _this._router.navigate(link);
            }
            else {
                _this._alertService.error("Something went wrong. Please try again.");
            }
        });
    };
    ;
    studentTutorialComponent.prototype.LoadSingleStudentTutorial = function (SelectedStudentTutorial) {
        var _this = this;
        this.studentTutorial = SelectedStudentTutorial;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
            _this.SelectedStudentID = _this.studentTutorial.StudentID;
        }, function (error) {
        });
    };
    ;
    studentTutorialComponent.prototype.IsValid = function (studentTutorial) {
        if (studentTutorial.AcadamicYear == 0) {
            this._alertService.error("Please enter Academic Year.");
            return false;
        }
        else if (studentTutorial.StudentID == 0) {
            this._alertService.error("Please select Student.");
            return false;
        }
        else {
            return true;
        }
    };
    studentTutorialComponent.prototype.SaveUpdateStudentTutorial = function () {
        var _this = this;
        this.studentTutorial.StudentID = this.SelectedStudentID;
        if (this.IsValid(this.studentTutorial) == true) {
            if (this.studentTutorial.ID == 0) {
                this._studentTutorialService.saveStudentTutorial(this.studentTutorial)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadStudentTutorials();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Save Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
            else {
                this._studentTutorialService.updateStudentTutorial(this.studentTutorial)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadStudentTutorials();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Update Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
        }
    };
    ;
    studentTutorialComponent.prototype.DeleteStudentTutorial = function (SelectedStudentTutorial) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._studentTutorialService.deleteStudentTutorial(SelectedStudentTutorial)
                .subscribe(function (result) {
                _this.LoadStudentTutorials();
            }, function (error) {
                if (error.status == 401) {
                    var link = ['/login'];
                    _this._router.navigate(link);
                }
                else {
                    _this._alertService.error("Something went wrong. Please try again.");
                }
            });
        }
    };
    ;
    studentTutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/tutorial/template/studentTutorial.component.html',
            styleUrls: ['/app/attendance/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, student_service_1.studentService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, lookup_service_1.lookupService, studentTutorial_service_1.studentTutorialService, index_1.AlertService])
    ], studentTutorialComponent);
    return studentTutorialComponent;
}());
exports.studentTutorialComponent = studentTutorialComponent;
//# sourceMappingURL=studentTutorial.component.js.map