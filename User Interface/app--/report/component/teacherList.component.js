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
var list_service_1 = require("../service/list.service");
var index_1 = require("../../_services/index");
var teacherListComponent = /** @class */ (function () {
    function teacherListComponent(_listService, _alertService) {
        this.ListOfTeacherList = [];
        this._listService = _listService;
        this._alertService = _alertService;
    }
    teacherListComponent.prototype.ngOnInit = function () {
        this.LoadTeacherList();
    };
    teacherListComponent.prototype.LoadTeacherList = function () {
        var _this = this;
        this._listService.getTeacherList()
            .subscribe(function (resultData) {
            _this.ListOfTeacherList = resultData;
        }, function (error) {
            alert('getTeacherList failed!');
        });
    };
    ;
    teacherListComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/report/template/teacherList.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [list_service_1.listService, index_1.AlertService])
    ], teacherListComponent);
    return teacherListComponent;
}());
exports.teacherListComponent = teacherListComponent;
//# sourceMappingURL=teacherList.component.js.map