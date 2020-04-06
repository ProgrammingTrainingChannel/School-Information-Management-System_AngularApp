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
var teacher_service_1 = require("../../admission/service/teacher.service");
var gradeCourse_service_1 = require("../service/gradeCourse.service");
var index_1 = require("../../_services/index");
var gradeCourseComponent = /** @class */ (function () {
    function gradeCourseComponent(_teacherService, _gradeCourseService, _lookupService, _alertService) {
        this.ListOfTeachers = [];
        this.ListOfGrades = [];
        this.ListOfCourses = [];
        this.ListOfGradeCourses = [];
        this.gradeCourse = {
            ID: 0,
            CourseID: null,
            GradeID: null,
            TeacherID: null,
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._teacherService = _teacherService;
        this._gradeCourseService = _gradeCourseService;
        this._lookupService = _lookupService;
        this._alertService = _alertService;
    }
    gradeCourseComponent.prototype.ngOnInit = function () {
        this.gradeCourse.ID = 0;
        this.gradeCourse.CourseID = 0;
        this.gradeCourse.GradeID = 0;
        this.gradeCourse.TeacherID = 0;
        this.gradeCourse.CreatedBy = 'abenezer';
        this.gradeCourse.CreatedDate = new Date();
        this.LoadTeachers();
        this.LoadGrades();
        this.LoadCourses();
        this.LoadGradeCourses();
    };
    ;
    gradeCourseComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._teacherService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            alert('getTeachers failed!');
        });
    };
    ;
    gradeCourseComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._lookupService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    gradeCourseComponent.prototype.LoadCourses = function () {
        var _this = this;
        this._lookupService.getCourses()
            .subscribe(function (resultData) {
            _this.ListOfCourses = resultData;
        }, function (error) {
            alert('getCourses failed!');
        });
    };
    ;
    gradeCourseComponent.prototype.LoadGradeCourses = function () {
        var _this = this;
        this._gradeCourseService.getGradeCourses()
            .subscribe(function (resultData) {
            _this.ListOfGradeCourses = resultData;
        }, function (error) {
            alert('getGradeCourses failed!');
        });
    };
    ;
    gradeCourseComponent.prototype.LoadSingleGradeCourse = function (SelectedGradeCourse) {
        this.gradeCourse = SelectedGradeCourse;
        this.SelectedTeacherID = this.gradeCourse.TeacherID;
        this.SelectedCourseID = this.gradeCourse.CourseID;
        this.SelectedGradeID = this.gradeCourse.GradeID;
    };
    ;
    gradeCourseComponent.prototype.IsValid = function (gradeCourse) {
        if (gradeCourse.CourseID == 0) {
            this._alertService.error("Please select course.");
            return false;
        }
        else if (gradeCourse.GradeID == 0) {
            this._alertService.error("Please select grade.");
            return false;
        }
        else if (gradeCourse.TeacherID == 0) {
            this._alertService.error("Please select teacher.");
            return false;
        }
        else {
            return true;
        }
    };
    gradeCourseComponent.prototype.SaveUpdateGradeCourse = function () {
        var _this = this;
        this.gradeCourse.TeacherID = this.SelectedTeacherID;
        this.gradeCourse.CourseID = this.SelectedCourseID;
        this.gradeCourse.GradeID = this.SelectedGradeID;
        if (this.IsValid(this.gradeCourse) == true) {
            if (this.gradeCourse.ID == 0) {
                this._gradeCourseService.saveGradeCourse(this.gradeCourse)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadGradeCourses();
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
                this._gradeCourseService.updateGradeCourse(this.gradeCourse)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadGradeCourses();
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
    gradeCourseComponent.prototype.DeleteGradeCourse = function (gradeCourse) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._gradeCourseService.deleteGradeCourse(gradeCourse)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadGradeCourses();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    gradeCourseComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/learningSchedule/template/gradeCourse.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [teacher_service_1.teacherService, gradeCourse_service_1.gradeCourseService, lookup_service_1.lookupService, index_1.AlertService])
    ], gradeCourseComponent);
    return gradeCourseComponent;
}());
exports.gradeCourseComponent = gradeCourseComponent;
//# sourceMappingURL=gradeCourse.component.js.map