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
//import { DataTableDirective } from 'angular-datatables';
//import { DataTablesModule } from 'angular-datatables';
var index_1 = require("./_directives/index");
var index_2 = require("./_services/index");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard.component");
var login_component_1 = require("./login.component");
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
var teacher_service_1 = require("./admission/service/teacher.service");
var teacherAttendance_service_1 = require("./attendance/service/teacherAttendance.service");
var student_service_1 = require("./admission/service/student.service");
var studentAttendance_service_1 = require("./attendance/service/studentAttendance.service");
var studentDescipline_service_1 = require("./attendance/service/studentDescipline.service");
var studentAdmission_service_1 = require("./admission/service/studentAdmission.service");
var gradeCourse_service_1 = require("./learningSchedule/service/gradeCourse.service");
var teacherEvaluation_service_1 = require("./evaluationPayment/service/teacherEvaluation.service");
var lookup_service_1 = require("../app/shared/services/lookup.service");
var login_service_1 = require("../app/login.service");
var list_service_1 = require("./report/service/list.service");
var studentPayment_service_1 = require("../app/evaluationPayment/service/studentPayment.service");
var meetingFollowup_service_1 = require("../app/meeting/service/meetingFollowup.service");
var meetingSchedule_service_1 = require("../app/meeting/service/meetingSchedule.service");
var studentMark_service_1 = require("./grading/service/studentMark.service");
var studentTranscript_service_1 = require("./grading/service/studentTranscript.service");
var studentGradeReport_service_1 = require("./grading/service/studentGradeReport.service");
var studentTutorial_service_1 = require("./tutorial/service/studentTutorial.service");
var teacherTutorial_service_1 = require("./tutorial/service/teacherTutorial.service");
var grade_service_1 = require("../app/masterData/services/grade.service");
var academicQuarter_service_1 = require("../app/masterData/services/academicQuarter.service");
var examType_service_1 = require("../app/masterData/services/examType.service");
var gradeSection_service_1 = require("../app/masterData/services/gradeSection.service");
var course_service_1 = require("../app/masterData/services/course.service");
var region_service_1 = require("../app/masterData/services/region.service");
var subcity_service_1 = require("../app/masterData/services/subcity.service");
var woreda_service_1 = require("../app/masterData/services/woreda.service");
var paymentPeriod_service_1 = require("../app/masterData/services/paymentPeriod.service");
var paymentReason_service_1 = require("../app/masterData/services/paymentReason.service");
var caseType_service_1 = require("../app/masterData/services/caseType.service");
var penaltyType_service_1 = require("../app/masterData/services/penaltyType.service");
var campus_service_1 = require("../app/masterData/services/campus.service");
var gender_service_1 = require("../app/masterData/services/gender.service");
var relationshipType_service_1 = require("../app/masterData/services/relationshipType.service");
var user_service_1 = require("./meeting/service/user.service");
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
                //DataTablesModule,
                //DataTableDirective,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.LoginComponent,
                pageNotFound_component_1.PageNotFoundComponent,
                student_component_1.studentComponent,
                studentAdmission_component_1.studentAdmissionComponent,
                teacher_component_1.teacherComponent,
                studentAttendance_component_1.studentAttendanceComponent,
                studentDiscipline_component_1.studentDisciplineComponent,
                teacherAttendance_component_1.teacherAttendanceComponent,
                studentMark_component_1.studentMarkComponent,
                studentTranscript_component_1.studentTranscriptComponent,
                studentGradeReport_component_1.studentGradeReportComponent,
                gradeCourse_component_1.gradeCourseComponent,
                teacherEvaluation_component_1.teacherEvaluationComponent,
                studentPayment_component_1.studentPaymentComponent,
                activity_component_1.activityComponent,
                schedule_component_1.scheduleComponent,
                followup_component_1.followupComponent,
                studentTutorial_component_1.studentTutorialComponent,
                teacherTutorial_component_1.teacherTutorialComponent,
                grade_component_1.gradeComponent,
                academicQuarter_component_1.academicQuarterComponent,
                examType_component_1.examTypeComponent,
                gradeSection_component_1.gradeSectionComponent,
                course_component_1.courseComponent,
                region_component_1.regionComponent,
                subcity_component_1.subcityComponent,
                woreda_component_1.woredaComponent,
                paymentPeriod_component_1.paymentPeriodComponent,
                paymentReason_component_1.paymentReasonComponent,
                caseType_component_1.caseTypeComponent,
                penaltyType_component_1.penaltyTypeComponent,
                studentList_component_1.studentListComponent,
                studentAttendanceList_component_1.studentAttendanceListComponent,
                studentPaymentList_component_1.studentPaymentListComponent,
                teacherList_component_1.teacherListComponent,
                teacherAttendanceList_component_1.teacherAttendanceListComponent,
                campus_component_1.campusComponent,
                gender_component_1.genderComponent,
                relationshipType_component_1.relationshipTypeComponent,
                user_component_1.userComponent,
                index_1.AlertComponent
            ],
            providers: [
                student_service_1.studentService,
                studentAttendance_service_1.studentAttendanceService,
                studentDescipline_service_1.studentDesciplineService,
                teacher_service_1.teacherService,
                teacherAttendance_service_1.teacherAttendanceService,
                studentAdmission_service_1.studentAdmissionService,
                gradeCourse_service_1.gradeCourseService,
                lookup_service_1.lookupService,
                login_service_1.loginService,
                studentPayment_service_1.studentPaymentService,
                grade_service_1.gradeService,
                academicQuarter_service_1.academicQuarterService,
                examType_service_1.examTypeService,
                gradeSection_service_1.gradeSectionService,
                course_service_1.courseService,
                region_service_1.regionService,
                subcity_service_1.subcityService,
                woreda_service_1.woredaService,
                paymentPeriod_service_1.paymentPeriodService,
                paymentReason_service_1.paymentReasonService,
                studentMark_service_1.studentMarkService,
                studentGradeReport_service_1.studentGradeReportService,
                studentTranscript_service_1.studentTranscriptService,
                teacherEvaluation_service_1.teacherEvaluationService,
                studentTutorial_service_1.studentTutorialService,
                teacherTutorial_service_1.teacherTutorialService,
                meetingSchedule_service_1.scheduleService,
                meetingFollowup_service_1.followupService,
                caseType_service_1.caseTypeService,
                penaltyType_service_1.penaltyTypeService,
                campus_service_1.campusService,
                gender_service_1.genderService,
                relationshipType_service_1.relationshipTypeService,
                list_service_1.listService,
                user_service_1.userService,
                index_2.AlertService
            ],
            bootstrap: [
                login_component_1.LoginComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map