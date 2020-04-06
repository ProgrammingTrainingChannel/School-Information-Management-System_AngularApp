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
var teacherAttendance_service_1 = require("../app/attendance/service/teacherAttendance.service");
var student_service_1 = require("../app/admission/service/student.service");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_studentService, _teacherAttendanceService) {
        this.ListOfTeacherAttendances = [];
        this.ListOfStudents = [];
        this.ListOfStudentSummaryByCampusAndGrades = [];
        this._teacherAttendanceService = _teacherAttendanceService;
        this._studentService = _studentService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.LoadTeacherAttendances();
        this.LoadStudents();
    };
    ;
    DashboardComponent.prototype.LoadTeacherAttendances = function () {
        var _this = this;
        this._teacherAttendanceService.getTeacherAttendances()
            .subscribe(function (resultData) {
            _this.ListOfTeacherAttendances = resultData;
            console.log(_this.ListOfTeacherAttendances);
        }, function (error) {
            alert('getTeacherAttendances failed!');
        });
    };
    ;
    DashboardComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    DashboardComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/dashboard.component.html',
        }),
        __metadata("design:paramtypes", [student_service_1.studentService, teacherAttendance_service_1.teacherAttendanceService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map