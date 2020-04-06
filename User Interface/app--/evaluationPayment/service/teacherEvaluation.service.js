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
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var teacherEvaluationService = /** @class */ (function () {
    function teacherEvaluationService(_http) {
        this._http = _http;
    }
    teacherEvaluationService.prototype.getEvaluationCriterias = function () {
        return this._http.get('http://localhost:5570/api/EvaluationCriteria/GetEvaluationCriterias')
            .map(function (response) { return response.json(); });
    };
    ;
    teacherEvaluationService.prototype.getAllTeacherEvaluations = function () {
        return this._http.get('http://localhost:5570/api/TeacherEvaluation/GetTeacherEvaluations')
            .map(function (response) { return response.json(); });
    };
    ;
    teacherEvaluationService.prototype.saveTeacherEvaluation = function (TeacherEvaluation) {
        var bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/TeacherEvaluation/SaveTeacherEvaluation", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    teacherEvaluationService.prototype.updateTeacherEvaluation = function (TeacherEvaluation) {
        var bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/TeacherEvaluation/UpdateTeacherEvaluation", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    teacherEvaluationService.prototype.deleteTeacherEvaluation = function (TeacherEvaluation) {
        var bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/TeacherEvaluation/DeleteTeacherEvaluation", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    teacherEvaluationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], teacherEvaluationService);
    return teacherEvaluationService;
}());
exports.teacherEvaluationService = teacherEvaluationService;
//# sourceMappingURL=teacherEvaluation.service.js.map