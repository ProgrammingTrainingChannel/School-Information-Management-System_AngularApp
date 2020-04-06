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
var scheduleService = /** @class */ (function () {
    function scheduleService(_http) {
        this._http = _http;
    }
    scheduleService.prototype.getMeetingSchedules = function () {
        return this._http.get('http://localhost:5570/api/MeetingSchedule/GetMeetingSchedules')
            .map(function (response) { return response.json(); });
    };
    ;
    scheduleService.prototype.saveMeetingSchedule = function (teacherEvaluation) {
        var bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/MeetingSchedule/SaveMeetingSchedule", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    scheduleService.prototype.updateMeetingSchedule = function (teacherEvaluation) {
        var bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/MeetingSchedule/UpdateMeetingSchedule", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    scheduleService.prototype.deleteMeetingSchedule = function (teacherEvaluation) {
        var bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:5570/api/MeetingSchedule/DeleteMeetingSchedule", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    ;
    scheduleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], scheduleService);
    return scheduleService;
}());
exports.scheduleService = scheduleService;
//# sourceMappingURL=meetingSchedule.service.js.map