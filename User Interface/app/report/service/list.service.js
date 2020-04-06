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
var listService = /** @class */ (function () {
    function listService(_http) {
        this._http = _http;
    }
    listService.prototype.getStudentList = function () {
        return this._http.get("http://localhost:5570/api/Report/GetStudentList")
            .map(function (response) { return response.json(); });
    };
    ;
    listService.prototype.getStudentAttendanceList = function () {
        return this._http.get("http://localhost:5570/api/Report/GetStudentAttendanceList")
            .map(function (response) { return response.json(); });
    };
    ;
    listService.prototype.getStudentPaymentList = function () {
        return this._http.get("http://localhost:5570/api/Report/GetStudentPaymentList")
            .map(function (response) { return response.json(); });
    };
    ;
    listService.prototype.getTeacherList = function () {
        return this._http.get("http://localhost:5570/api/Report/GetTeacherList")
            .map(function (response) { return response.json(); });
    };
    ;
    listService.prototype.getTeacherAttendanceList = function () {
        return this._http.get("http://localhost:5570/api/Report/GetTeacherAttendanceList")
            .map(function (response) { return response.json(); });
    };
    ;
    listService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], listService);
    return listService;
}());
exports.listService = listService;
//# sourceMappingURL=list.service.js.map