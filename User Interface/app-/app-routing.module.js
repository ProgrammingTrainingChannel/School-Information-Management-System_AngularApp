"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'home', component: app_component_1.AppComponent },
                    { path: 'admissionStudentInformation', component: admissionStudentInformation_component_1.admissionStudentInformationComponent },
                    { path: 'admissionStudentAdmission', component: admissionStudentAdmission_component_1.admissionStudentAdmissionComponent },
                    { path: 'admissionTeacherInformation', component: admissionTeacherInformation_component_1.admissionTeacherInformationComponent },
                    { path: 'attendanceStudentAttendance', component: attendanceStudentAttendance_component_1.attendanceStudentAttendanceComponent },
                    { path: 'attendanceStudentDiscipline', component: attendanceStudentDiscipline_component_1.attendanceStudentDisciplineComponent },
                    { path: 'attendanceTeacherAttendance', component: attendanceTeacherAttendance_component_1.attendanceTeacherAttendanceComponent },
                    { path: 'gradingSubmitGrade', component: gradingSubmitGrade_component_1.gradingSubmitGradeComponent },
                    { path: 'gradingStudentTranscript', component: gradingStudentTranscript_component_1.gradingStudentTranscriptComponent },
                    { path: 'gradingStudentGradeReport', component: gradingStudentGradeReport_component_1.gradingStudentGradeReportComponent },
                    { path: 'learningScheduleClassInformation', component: learningScheduleClassInformation_component_1.learningScheduleClassInformationComponent },
                    { path: 'learningScheduleAssignTeacher', component: learningScheduleAssignTeacher_component_1.learningScheduleAssignTeacherComponent },
                    { path: 'evaluationPaymentTeacherEvaluation', component: evaluationPaymentTeacherEvaluation_component_1.evaluationPaymentTeacherEvaluationComponent },
                    { path: 'evaluationPaymentStudentPayment', component: evaluationPaymentStudentPayment_component_1.evaluationPaymentStudentPaymentComponent }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map