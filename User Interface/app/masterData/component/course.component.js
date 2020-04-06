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
var course_service_1 = require("../services/course.service");
var index_1 = require("../../_services/index");
var courseComponent = /** @class */ (function () {
    function courseComponent(_courseService, _alertService) {
        this.ListOfCourses = [];
        this.course = {
            ID: 0,
            Name: '',
            Description: '',
            CreatedBy: '',
            CreatedDate: new Date(),
        };
        this._courseService = _courseService;
        this._alertService = _alertService;
    }
    courseComponent.prototype.ngOnInit = function () {
        this.course.ID = 0;
        this.course.Name = '';
        this.course.Description = '';
        this.course.CreatedBy = 'bereket';
        this.course.CreatedDate = new Date();
        this.LoadCourses();
    };
    courseComponent.prototype.LoadCourses = function () {
        var _this = this;
        this._courseService.getCourses()
            .subscribe(function (resultData) {
            _this.ListOfCourses = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getCourses failed');
        });
    };
    ;
    courseComponent.prototype.LoadSingleCourse = function (SelectedCourse) {
        this.course = SelectedCourse;
    };
    ;
    courseComponent.prototype.SaveUpdateCourse = function () {
        var _this = this;
        if (this.course.ID == 0) {
            this._courseService.saveCourse(this.course)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadCourses();
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
            this._courseService.updateCourse(this.course)
                .subscribe(function (result) {
                if (result.Status == true) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadCourses();
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
    courseComponent.prototype.DeleteCourse = function (SelectedCourse) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._courseService.deleteCourse(SelectedCourse)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadCourses();
            }, function (error) {
                _this._alertService.error("Delete failed");
                alert('Delete failed');
            });
        }
    };
    ;
    courseComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/masterData/template/course.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [course_service_1.courseService, index_1.AlertService])
    ], courseComponent);
    return courseComponent;
}());
exports.courseComponent = courseComponent;
//# sourceMappingURL=course.component.js.map