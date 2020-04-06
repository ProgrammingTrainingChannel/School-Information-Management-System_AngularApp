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
var teacherEvaluation_service_1 = require("../../evaluationPayment/service/teacherEvaluation.service");
var index_1 = require("../../_services/index");
var teacherEvaluationComponent = /** @class */ (function () {
    function teacherEvaluationComponent(_alertService, _lookupService, _teacherEvaluationService) {
        this.ListOfDepartments = [];
        this.ListOfCampuses = [];
        this.ListOfAcademicQuarters = [];
        this.ListOfTeachers = [];
        this.ListOfEvaluationCriterias = [];
        this.ListOfTeacherEvaluations = [];
        this.teacherEvaluation = {
            ID: 0,
            Mark: '',
            AcademicQuarterID: 0,
            EvaluationCriteriaID: 0,
            TeacherID: 0,
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: new Date(),
        };
        this._lookupService = _lookupService;
        this._teacherEvaluationService = _teacherEvaluationService;
        this._alertService = _alertService;
    }
    teacherEvaluationComponent.prototype.ngOnInit = function () {
        this.teacherEvaluation.ID = 0;
        this.teacherEvaluation.Mark = '';
        this.teacherEvaluation.AcademicQuarterID = 0;
        this.teacherEvaluation.EvaluationCriteriaID = 0;
        this.teacherEvaluation.TeacherID = 0;
        this.teacherEvaluation.CreatedBy = 'abenezer';
        this.teacherEvaluation.CreatedDate = new Date();
        this.teacherEvaluation.UpdatedBy = 'abenezer';
        this.teacherEvaluation.UpdatedDate = new Date();
        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadTeachers();
        this.LoadAcademicQuarters();
        this.LoadEvaluationCriterias();
        this.LoadTeacherEvaluations();
    };
    ;
    teacherEvaluationComponent.prototype.LoadDepartments = function () {
        var _this = this;
        this._lookupService.getDepartments()
            .subscribe(function (resultData) {
            _this.ListOfDepartments = resultData;
        }, function (error) {
            alert('getDepartments failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._lookupService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
        }, function (error) {
            alert('getCampuses failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._lookupService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            alert('getTeachers failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadAcademicQuarters = function () {
        var _this = this;
        this._lookupService.getAcademicQuarters()
            .subscribe(function (resultData) {
            _this.ListOfAcademicQuarters = resultData;
        }, function (error) {
            alert('getAcademicQuarters failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadEvaluationCriterias = function () {
        var _this = this;
        this._teacherEvaluationService.getEvaluationCriterias()
            .subscribe(function (resultData) {
            _this.ListOfEvaluationCriterias = resultData;
        }, function (error) {
            alert('getEvaluationCriterias failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadTeacherEvaluations = function () {
        var _this = this;
        this._teacherEvaluationService.getAllTeacherEvaluations()
            .subscribe(function (resultData) {
            _this.ListOfTeacherEvaluations = resultData;
        }, function (error) {
            alert('getAllTeacherEvaluations failed!');
        });
    };
    ;
    teacherEvaluationComponent.prototype.LoadSingleTeacherEvaluation = function (SelectedTeacherEvaluation) {
        this.teacherEvaluation = SelectedTeacherEvaluation;
        this.SelectedAcademicQuarterID = this.teacherEvaluation.AcademicQuarterID;
        this.SelectedEvaluationCriteriaID = this.teacherEvaluation.EvaluationCriteriaID;
        this.SelectedTeacherID = this.teacherEvaluation.TeacherID;
    };
    ;
    teacherEvaluationComponent.prototype.IsValid = function (teacherEvaluation) {
        if (teacherEvaluation.Mark == "") {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (teacherEvaluation.AcademicQuarterID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else if (teacherEvaluation.EvaluationCriteriaID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else if (teacherEvaluation.TeacherID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    };
    teacherEvaluationComponent.prototype.SaveUpdateTeacherEvaluation = function () {
        var _this = this;
        this.teacherEvaluation.AcademicQuarterID = this.SelectedAcademicQuarterID;
        this.teacherEvaluation.EvaluationCriteriaID = this.SelectedEvaluationCriteriaID;
        this.teacherEvaluation.TeacherID = this.SelectedTeacherID;
        if (this.IsValid(this.teacherEvaluation) == true) {
            if (this.teacherEvaluation.ID == 0) {
                this._teacherEvaluationService.saveTeacherEvaluation(this.teacherEvaluation)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadTeacherEvaluations();
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
                this._teacherEvaluationService.updateTeacherEvaluation(this.teacherEvaluation)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadTeacherEvaluations();
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
    teacherEvaluationComponent.prototype.DeleteTeacherEvaluation = function (teacherEvaluation) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherEvaluationService.deleteTeacherEvaluation(teacherEvaluation)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadTeacherEvaluations();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    teacherEvaluationComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/evaluationPayment/template/teacherEvaluation.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AlertService, lookup_service_1.lookupService, teacherEvaluation_service_1.teacherEvaluationService])
    ], teacherEvaluationComponent);
    return teacherEvaluationComponent;
}());
exports.teacherEvaluationComponent = teacherEvaluationComponent;
//# sourceMappingURL=teacherEvaluation.component.js.map