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
var dashboard_component_1 = require("./dashboard.component");
var login_component_1 = require("./login.component");
var app_component_1 = require("./app.component");
var student_component_1 = require("./admission/component/student.component");
var studentAdmission_component_1 = require("./admission/component/studentAdmission.component");
var teacher_component_1 = require("./admission/component/teacher.component");
var studentAttendance_component_1 = require("./attendance/component/studentAttendance.component");
var studentDiscipline_component_1 = require("./attendance/component/studentDiscipline.component");
var teacherAttendance_component_1 = require("./attendance/component/teacherAttendance.component");
var studentMark_component_1 = require("./grading/component/studentMark.component");
var studentTranscript_component_1 = require("./grading/component/studentTranscript.component");
var studentGradeReport_component_1 = require("./grading/component/studentGradeReport.component");
var gradeCourse_component_1 = require("./learningSchedule/component/gradeCourse.component");
var teacherEvaluation_component_1 = require("./evaluationPayment/component/teacherEvaluation.component");
var studentPayment_component_1 = require("./evaluationPayment/component/studentPayment.component");
var activity_component_1 = require("./extraCurricular/component/activity.component");
var schedule_component_1 = require("./meeting/component/schedule.component");
var followup_component_1 = require("./meeting/component/followup.component");
var studentTutorial_component_1 = require("./tutorial/component/studentTutorial.component");
var teacherTutorial_component_1 = require("./tutorial/component/teacherTutorial.component");
var grade_component_1 = require("./masterData/component/grade.component");
var academicQuarter_component_1 = require("./masterData/component/academicQuarter.component");
var examType_component_1 = require("./masterData/component/examType.component");
var gradeSection_component_1 = require("./masterData/component/gradeSection.component");
var course_component_1 = require("./masterData/component/course.component");
var region_component_1 = require("./masterData/component/region.component");
var subcity_component_1 = require("./masterData/component/subcity.component");
var woreda_component_1 = require("./masterData/component/woreda.component");
var paymentPeriod_component_1 = require("./masterData/component/paymentPeriod.component");
var paymentReason_component_1 = require("./masterData/component/paymentReason.component");
var caseType_component_1 = require("./masterData/component/caseType.component");
var penaltyType_component_1 = require("./masterData/component/penaltyType.component");
var campus_component_1 = require("./masterData/component/campus.component");
var gender_component_1 = require("./masterData/component/gender.component");
var relationshipType_component_1 = require("./masterData/component/relationshipType.component");
var studentList_component_1 = require("./report/component/studentList.component");
var studentAttendanceList_component_1 = require("./report/component/studentAttendanceList.component");
var studentPaymentList_component_1 = require("./report/component/studentPaymentList.component");
var teacherList_component_1 = require("./report/component/teacherList.component");
var teacherAttendanceList_component_1 = require("./report/component/teacherAttendanceList.component");
var user_component_1 = require("./meeting/component/user.component");
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: 'home', component: app_component_1.AppComponent },
                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'student', component: student_component_1.studentComponent },
                    { path: 'studentAdmission', component: studentAdmission_component_1.studentAdmissionComponent },
                    { path: 'teacher', component: teacher_component_1.teacherComponent },
                    { path: 'studentAttendance', component: studentAttendance_component_1.studentAttendanceComponent },
                    { path: 'studentDiscipline', component: studentDiscipline_component_1.studentDisciplineComponent },
                    { path: 'teacherAttendance', component: teacherAttendance_component_1.teacherAttendanceComponent },
                    { path: 'studentMark', component: studentMark_component_1.studentMarkComponent },
                    { path: 'studentTranscript', component: studentTranscript_component_1.studentTranscriptComponent },
                    { path: 'studentGradeReport', component: studentGradeReport_component_1.studentGradeReportComponent },
                    { path: 'gradeCourse', component: gradeCourse_component_1.gradeCourseComponent },
                    { path: 'teacherEvaluation', component: teacherEvaluation_component_1.teacherEvaluationComponent },
                    { path: 'studentPayment', component: studentPayment_component_1.studentPaymentComponent },
                    { path: 'activity', component: activity_component_1.activityComponent },
                    { path: 'schedule', component: schedule_component_1.scheduleComponent },
                    { path: 'followup', component: followup_component_1.followupComponent },
                    { path: 'studentTutorial', component: studentTutorial_component_1.studentTutorialComponent },
                    { path: 'teacherTutorial', component: teacherTutorial_component_1.teacherTutorialComponent },
                    { path: 'Grade', component: grade_component_1.gradeComponent },
                    { path: 'AcademicQuarter', component: academicQuarter_component_1.academicQuarterComponent },
                    { path: 'ExamType', component: examType_component_1.examTypeComponent },
                    { path: 'GradeSection', component: gradeSection_component_1.gradeSectionComponent },
                    { path: 'Course', component: course_component_1.courseComponent },
                    { path: 'Region', component: region_component_1.regionComponent },
                    { path: 'Subcity', component: subcity_component_1.subcityComponent },
                    { path: 'Woreda', component: woreda_component_1.woredaComponent },
                    { path: 'PaymentPeriod', component: paymentPeriod_component_1.paymentPeriodComponent },
                    { path: 'PaymentReason', component: paymentReason_component_1.paymentReasonComponent },
                    { path: 'CaseType', component: caseType_component_1.caseTypeComponent },
                    { path: 'Reason', component: penaltyType_component_1.penaltyTypeComponent },
                    { path: 'PenaltyType', component: penaltyType_component_1.penaltyTypeComponent },
                    { path: 'Campus', component: campus_component_1.campusComponent },
                    { path: 'Gender', component: gender_component_1.genderComponent },
                    { path: 'RelationshipType', component: relationshipType_component_1.relationshipTypeComponent },
                    { path: 'studentList', component: studentList_component_1.studentListComponent },
                    { path: 'studentAttendanceList', component: studentAttendanceList_component_1.studentAttendanceListComponent },
                    { path: 'studentPaymentList', component: studentPaymentList_component_1.studentPaymentListComponent },
                    { path: 'teacherList', component: teacherList_component_1.teacherListComponent },
                    { path: 'teacherAttendanceList', component: teacherAttendanceList_component_1.teacherAttendanceListComponent },
                    { path: 'user', component: user_component_1.userComponent }
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