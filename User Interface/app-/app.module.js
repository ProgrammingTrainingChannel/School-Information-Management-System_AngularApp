"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var admissionStudentInformation_component_1 = require("./admission/component/admissionStudentInformation.component");
var admissionStudentAdmission_component_1 = require("./admission/component/admissionStudentAdmission.component");
var admissionTeacherInformation_component_1 = require("./admission/component/admissionTeacherInformation.component");
var attendanceStudentAttendance_component_1 = require("./attendance/component/attendanceStudentAttendance.component");
var attendanceStudentDiscipline_component_1 = require("./attendance/component/attendanceStudentDiscipline.component");
var attendanceTeacherAttendance_component_1 = require("./attendance/component/attendanceTeacherAttendance.component");
var gradingSubmitGrade_component_1 = require("./grading/component/gradingSubmitGrade.component");
var gradingStudentTranscript_component_1 = require("./grading/component/gradingStudentTranscript.component");
var gradingStudentGradeReport_component_1 = require("./grading/component/gradingStudentGradeReport.component");
var learningScheduleClassInformation_component_1 = require("./learningSchedule/component/learningScheduleClassInformation.component");
var learningScheduleAssignTeacher_component_1 = require("./learningSchedule/component/learningScheduleAssignTeacher.component");
var evaluationPaymentTeacherEvaluation_component_1 = require("./evaluationPayment/component/evaluationPaymentTeacherEvaluation.component");
var evaluationPaymentStudentPayment_component_1 = require("./evaluationPayment/component/evaluationPaymentStudentPayment.component");
var pageNotFound_component_1 = require("./shared/pageNotFound.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                admissionStudentInformation_component_1.admissionStudentInformationComponent,
                admissionStudentAdmission_component_1.admissionStudentAdmissionComponent,
                admissionTeacherInformation_component_1.admissionTeacherInformationComponent,
                attendanceStudentAttendance_component_1.attendanceStudentAttendanceComponent,
                attendanceStudentDiscipline_component_1.attendanceStudentDisciplineComponent,
                attendanceTeacherAttendance_component_1.attendanceTeacherAttendanceComponent,
                gradingSubmitGrade_component_1.gradingSubmitGradeComponent,
                gradingStudentTranscript_component_1.gradingStudentTranscriptComponent,
                gradingStudentGradeReport_component_1.gradingStudentGradeReportComponent,
                learningScheduleClassInformation_component_1.learningScheduleClassInformationComponent,
                learningScheduleAssignTeacher_component_1.learningScheduleAssignTeacherComponent,
                evaluationPaymentTeacherEvaluation_component_1.evaluationPaymentTeacherEvaluationComponent,
                evaluationPaymentStudentPayment_component_1.evaluationPaymentStudentPaymentComponent
            ],
            providers: [],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map