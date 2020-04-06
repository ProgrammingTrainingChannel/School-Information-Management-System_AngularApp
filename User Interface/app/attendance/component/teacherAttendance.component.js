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
var teacherAttendance_service_1 = require("../service/teacherAttendance.service");
var index_1 = require("../../_services/index");
var teacherAttendanceComponent = /** @class */ (function () {
    function teacherAttendanceComponent(_teacherService, _lookupService, _teacherAttendanceService, _alertService) {
        this.ListOfDepartments = [];
        this.ListOfCampuses = [];
        this.ListOfPermissionTypes = [];
        this.ListOfTeachers = [];
        this.ListOfTeacherAttendances = [];
        this.teacherAttendance = {
            ID: 0,
            AbsencenceDuration: 0,
            PermitedBy: '',
            Remark: '',
            TeacherID: null,
            PermissionTypeID: null,
            CreatedBy: '',
            CreatedDate: new Date(),
            UpdateBy: '',
            UpdateDate: new Date(),
        };
        this._lookupService = _lookupService;
        this._teacherService = _teacherService;
        this._teacherAttendanceService = _teacherAttendanceService;
        this._alertService = _alertService;
    }
    teacherAttendanceComponent.prototype.ngOnInit = function () {
        this.teacherAttendance.ID = 0;
        this.teacherAttendance.AbsencenceDuration = 0;
        this.teacherAttendance.PermitedBy = '';
        this.teacherAttendance.Remark = '';
        this.teacherAttendance.TeacherID = 0;
        this.teacherAttendance.PermissionTypeID = 0;
        this.teacherAttendance.CreatedBy = 'abenezer';
        this.teacherAttendance.CreatedDate = new Date();
        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadPermissionTypes();
        this.LoadTeachers();
        this.LoadTeacherAttendances();
    };
    ;
    teacherAttendanceComponent.prototype.LoadTeacherAttendances = function () {
        var _this = this;
        this._teacherAttendanceService.getTeacherAttendances()
            .subscribe(function (resultData) {
            _this.ListOfTeacherAttendances = resultData;
        }, function (error) {
            alert('getTeacherAttendances failed!');
        });
    };
    ;
    teacherAttendanceComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._teacherService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            alert('getTeachers failed!');
        });
    };
    ;
    teacherAttendanceComponent.prototype.LoadDepartments = function () {
        var _this = this;
        this._lookupService.getDepartments()
            .subscribe(function (resultData) {
            _this.ListOfDepartments = resultData;
        }, function (error) {
            alert('getDepartments failed!');
        });
    };
    ;
    teacherAttendanceComponent.prototype.LoadPermissionTypes = function () {
        var _this = this;
        this._lookupService.getPermissionTypes()
            .subscribe(function (resultData) {
            _this.ListOfPermissionTypes = resultData;
        }, function (error) {
            alert('getPermissionTypes failed!');
        });
    };
    ;
    teacherAttendanceComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._lookupService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
        }, function (error) {
            alert('getCampuses failed!');
        });
    };
    ;
    teacherAttendanceComponent.prototype.LoadSingleTeacherAttendance = function (SelectedteacherAttendance) {
        this.teacherAttendance = SelectedteacherAttendance;
        this.SelectedTeacherID = this.teacherAttendance.TeacherID;
        this.SelectedPermissionTypeID = this.teacherAttendance.PermissionTypeID;
    };
    ;
    teacherAttendanceComponent.prototype.IsValid = function (teacherAttendance) {
        if (teacherAttendance.AbsencenceDuration == 0) {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (teacherAttendance.PermitedBy == "") {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    };
    teacherAttendanceComponent.prototype.SaveUpdateTeacherAttendance = function () {
        var _this = this;
        this.teacherAttendance.TeacherID = this.SelectedTeacherID;
        this.teacherAttendance.PermissionTypeID = this.SelectedPermissionTypeID;
        if (this.IsValid(this.teacherAttendance) == true) {
            if (this.teacherAttendance.ID == 0) {
                this._teacherAttendanceService.saveTeacherAttendance(this.teacherAttendance)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadTeacherAttendances();
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
                this._teacherAttendanceService.updateTeacherAttendance(this.teacherAttendance)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadTeacherAttendances();
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
    teacherAttendanceComponent.prototype.DeleteTeacherAttendance = function (teacherAttendance) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherAttendanceService.deleteTeacherAttendance(teacherAttendance)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadTeacherAttendances();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    teacherAttendanceComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/attendance/template/teacherAttendance.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [teacher_service_1.teacherService, lookup_service_1.lookupService, teacherAttendance_service_1.teacherAttendanceService, index_1.AlertService])
    ], teacherAttendanceComponent);
    return teacherAttendanceComponent;
}());
exports.teacherAttendanceComponent = teacherAttendanceComponent;
//# sourceMappingURL=teacherAttendance.component.js.map