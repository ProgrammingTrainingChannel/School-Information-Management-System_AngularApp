"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var gradingStudentTranscriptComponent = /** @class */ (function () {
    function gradingStudentTranscriptComponent() {
        this.attendanceMenus = [
            {
                code: '001', title: 'Leave Information', route: 'leave'
            },
            {
                code: '002', title: 'Absence Information', route: 'absence'
            }
        ];
    }
    gradingStudentTranscriptComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/grading/template/gradingStudentTranscript.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        })
    ], gradingStudentTranscriptComponent);
    return gradingStudentTranscriptComponent;
}());
exports.gradingStudentTranscriptComponent = gradingStudentTranscriptComponent;
//# sourceMappingURL=gradingStudentTranscript.component.js.map