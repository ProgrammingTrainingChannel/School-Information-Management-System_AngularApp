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
var lookupService = /** @class */ (function () {
    function lookupService(_http) {
        this._http = _http;
    }
    lookupService.prototype.getGenders = function () {
        return this._http.get('http://localhost:57812/api/Shared/getAllGenders')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.saveUpdateGender = function (gender) {
        var bodyString = JSON.stringify(gender); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:57812/api/Shared/SaveUpdateGender", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    lookupService.prototype.deleteGender = function (gender) {
        var bodyString = JSON.stringify(gender); // Stringify payload
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_2.RequestOptions({ headers: headers }); // Create a request option
        return this._http.post("http://localhost:57812/api/Shared/DeleteGender", bodyString, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    lookupService.prototype.getAbsenceReasons = function () {
        return this._http.get('http://localhost:57812/api/Shared/getAbsenceReasons')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getAllowanceTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getAllowanceTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getDeductionTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getDeductionTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getDepartments = function () {
        return this._http.get('http://localhost:57812/api/Shared/getDepartments')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getDisabilityTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getDisabilityTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEducationLevels = function () {
        return this._http.get('http://localhost:57812/api/Shared/getEducationLevels')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEducationTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getEducationTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEmployementTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getEmployementTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getJobPositions = function () {
        return this._http.get('http://localhost:57812/api/Shared/getJobPositions')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEthincities = function () {
        return this._http.get('http://localhost:57812/api/Shared/getEthincities')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getLanguages = function () {
        return this._http.get('http://localhost:57812/api/Shared/getLanguages')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getLeaveTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getLeaveTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getMaritalStatuses = function () {
        return this._http.get('http://localhost:57812/api/Shared/getMaritalStatuses')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getNationalities = function () {
        return this._http.get('http://localhost:57812/api/Shared/getNationalities')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getPenaltyTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getPenaltyTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getRelationshipTypes = function () {
        return this._http.get('http://localhost:57812/api/Shared/getRelationshipTypes')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getTermintionReasons = function () {
        return this._http.get('http://localhost:57812/api/Shared/getTermintionReasons')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getTransferReasons = function () {
        return this._http.get('http://localhost:57812/api/Shared/getTransferReasons')
            .map(function (response) { return response.json(); });
    };
    ;
    //
    lookupService.prototype.getRegions = function () {
        return this._http.get('http://localhost:57812/api/Shared/getRegions')
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getCities = function (regionID) {
        return this._http.get('http://localhost:57812/api/Shared/getCities?regionID=' + regionID)
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getWoredas = function (cityID) {
        return this._http.get('http://localhost:57812/api/Shared/getWoredas?cityID=' + cityID)
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getKebeles = function (woredaID) {
        return this._http.get('http://localhost:57812/api/Shared/getKebeles?woredaID=' + woredaID)
            .map(function (response) { return response.json(); });
    };
    ;
    lookupService.prototype.getEfficiencyLevels = function () {
        return this._http.get('http://localhost:57812/api/Shared/getEfficiencyLevels')
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