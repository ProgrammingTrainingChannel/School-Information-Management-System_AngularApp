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
var router_1 = require("@angular/router");
var teacherTutorial_service_1 = require("../../tutorial/service/teacherTutorial.service");
var index_1 = require("../../_services/index");
var teacherTutorialComponent = /** @class */ (function () {
    function teacherTutorialComponent(route, router, _lookupService, _teacherService, _teacherTutorialService, _alertService) {
        this.route = route;
        this.router = router;
        this.ListOfDepartments = [];
        this.ListOfCampuses = [];
        this.ListOfTeachers = [];
        this.ListOfTeacherTutorials = [];
        this.teacherTutorial = {
            ID: 0,
            TeacherID: 0,
            AcademicYear: 0,
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: null
        };
        this._lookupService = _lookupService;
        this._teacherService = _teacherService;
        this._teacherTutorialService = _teacherTutorialService;
        this._alertService = _alertService;
        this._router = router;
    }
    teacherTutorialComponent.prototype.ngOnInit = function () {
        this.teacherTutorial.ID = 0;
        this.teacherTutorial.TeacherID = 0;
        this.teacherTutorial.AcademicYear = 0;
        this.teacherTutorial.CreatedBy = 'bereket';
        this.teacherTutorial.CreatedDate = new Date();
        this.teacherTutorial.UpdatedBy = '';
        this.teacherTutorial.UpdatedDate = null;
        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadTeachers();
        this.LoadTeacherTutorials();
    };
    ;
    teacherTutorialComponent.prototype.LoadDepartments = function () {
        var _this = this;
        this._lookupService.getDepartments()
            .subscribe(function (resultData) {
            _this.ListOfDepartments = resultData;
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
    teacherTutorialComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._lookupService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
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
    teacherTutorialComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._teacherService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
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
    teacherTutorialComponent.prototype.LoadTeacherTutorials = function () {
        var _this = this;
        this._teacherTutorialService.getTeacherTutorials()
            .subscribe(function (resultData) {
            _this.ListOfTeacherTutorials = resultData;
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
    teacherTutorialComponent.prototype.LoadSingleTeacherTutorial = function (SelectedTeacherTutorial) {
        this.teacherTutorial = SelectedTeacherTutorial;
        this.SelectedTeacherID = this.teacherTutorial.TeacherID;
    };
    ;
    teacherTutorialComponent.prototype.IsValid = function (teacherTutorial) {
        if (teacherTutorial.AcademicYear == 0) {
            this._alertService.error("Please enter Academic Year.");
            return false;
        }
        else if (teacherTutorial.TeacherID == 0) {
            this._alertService.error("Please select Teacher.");
            return false;
        }
        else {
            return true;
        }
    };
    teacherTutorialComponent.prototype.SaveUpdateTeacherTutorial = function () {
        var _this = this;
        this.teacherTutorial.TeacherID = this.SelectedTeacherID;
        if (this.IsValid(this.teacherTutorial) == true) {
            if (this.teacherTutorial.ID == 0) {
                this._teacherTutorialService.saveTeacherTutorial(this.teacherTutorial)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadTeacherTutorials();
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
                this._teacherTutorialService.updateTeacherTutorial(this.teacherTutorial)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadTeacherTutorials();
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
    teacherTutorialComponent.prototype.DeleteTeacherTutorial = function (SelectedTeacherTutorial) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._teacherTutorialService.deleteTeacherTutorial(SelectedTeacherTutorial)
                .subscribe(function (result) {
                _this.LoadTeacherTutorials();
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
    teacherTutorialComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/tutorial/template/teacherTutorial.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, lookup_service_1.lookupService, teacher_service_1.teacherService, teacherTutorial_service_1.teacherTutorialService, index_1.AlertService])
    ], teacherTutorialComponent);
    return teacherTutorialComponent;
}());
exports.teacherTutorialComponent = teacherTutorialComponent;
//# sourceMappingURL=teacherTutorial.component.js.map