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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var lookupService = /** @class */ (function () {
    function lookupService(_http) {
        this._http = _http;
    }
    lookupService.prototype.getRelationshipTypes = function () {
        return this._http.get('http://localhost:5570/api/RelationshipType/GetRelationshipTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEvaluationCriterias = function () {
        return this._http.get('http://localhost:5570/api/EvaluationCriteria/GetEvaluationCriterias')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getExamTypes = function () {
        return this._http.get('http://localhost:5570/api/ExamType/GetExamTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEmergencyContacts = function () {
        return this._http.get('http://localhost:5570/api/EmergencyContact/GetEmergencyContact')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPermissionTypes = function () {
        return this._http.get('http://localhost:5570/api/PermissionType/GetPermissionTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getMeetingTypes = function () {
        return this._http.get('http://localhost:5570/api/MeetingType/GetMeetingTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getAcademicQuarters = function () {
        return this._http.get('http://localhost:5570/api/AcademicQuarter/GetAcademicQuarters')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getMaritalStatuses = function () {
        return this._http.get('http://localhost:5570/api/MaritalStatus/GetMaritalStatuses')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getDepartments = function () {
        return this._http.get('http://localhost:5570/api/Departement/GetDepartements')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPenaltyTypes = function () {
        return this._http.get('http://localhost:5570/api/PenaltyType/GetPenaltyTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getCaseTypes = function () {
        return this._http.get('http://localhost:5570/api/CaseType/GetCaseTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getrelationTypes = function () {
        return this._http.get('http://localhost:5570/api/RelationType/GetRelationTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getGenders = function () {
        return this._http.get('http://localhost:5570/api/Gender/GetGenders')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getCampuses = function () {
        return this._http.get('http://localhost:5570/api/Campus/GetCampuses')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getRegions = function () {
        return this._http.get('http://localhost:5570/api/Region/GetRegions')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getSubcitys = function () {
        return this._http.get('http://localhost:5570/api/Subcity/GetSubcitys')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getWoredas = function () {
        return this._http.get('http://localhost:5570/api/Woreda/GetWoredas')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getCourses = function () {
        return this._http.get('http://localhost:5570/api/Course/GetCourses')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getGrades = function () {
        return this._http.get('http://localhost:5570/api/Grade/GetGrades')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPaymentReasons = function () {
        return this._http.get('http://localhost:5570/api/PaymentReason/GetPaymentReasons')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPaymentPeriods = function () {
        return this._http.get('http://localhost:5570/api/PaymentPeriod/GetPaymentPeriods')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getGradeSections = function () {
        return this._http.get('http://localhost:5570/api/GradeSection/GetAllGradeSections')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getStudents = function () {
        return this._http.get('http://localhost:5570/api/Student/GetAllStudents')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getTeachers = function () {
        return this._http.get('http://localhost:5570/api/Teacher/GetTeachers')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], lookupService);
    return lookupService;
}());
exports.lookupService = lookupService;
//# sourceMappingURL=lookup.service.js.map