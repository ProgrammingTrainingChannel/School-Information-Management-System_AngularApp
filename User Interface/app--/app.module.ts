import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { DataTableDirective } from 'angular-datatables';
//import { DataTablesModule } from 'angular-datatables';

import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

import { studentComponent } from './admission/component/student.component';
import { studentAdmissionComponent } from './admission/component/studentAdmission.component';
import { teacherComponent } from './admission/component/teacher.component';

import { studentAttendanceComponent } from './attendance/component/studentAttendance.component';
import { studentDisciplineComponent } from './attendance/component/studentDiscipline.component';
import { teacherAttendanceComponent } from './attendance/component/teacherAttendance.component';

import { studentMarkComponent } from './grading/component/studentMark.component';
import { studentTranscriptComponent } from './grading/component/studentTranscript.component';
import { studentGradeReportComponent } from './grading/component/studentGradeReport.component';

import { gradeCourseComponent } from './learningSchedule/component/gradeCourse.component';

import { teacherEvaluationComponent } from './evaluationPayment/component/teacherEvaluation.component';
import { studentPaymentComponent } from './evaluationPayment/component/studentPayment.component';

import { activityComponent } from './extraCurricular/component/activity.component';
import { scheduleComponent } from './meeting/component/schedule.component';
import { followupComponent } from './meeting/component/followup.component';

import { studentTutorialComponent } from './tutorial/component/studentTutorial.component';
import { teacherTutorialComponent } from './tutorial/component/teacherTutorial.component';

import { gradeComponent } from './masterData/component/grade.component';
import { academicQuarterComponent } from './masterData/component/academicQuarter.component';
import { examTypeComponent } from './masterData/component/examType.component';
import { gradeSectionComponent } from './masterData/component/gradeSection.component';
import { courseComponent } from './masterData/component/course.component';
import { regionComponent } from './masterData/component/region.component';
import { subcityComponent } from './masterData/component/subcity.component';
import { woredaComponent } from './masterData/component/woreda.component';
import { paymentPeriodComponent } from './masterData/component/paymentPeriod.component';
import { paymentReasonComponent } from './masterData/component/paymentReason.component';

import { caseTypeComponent } from './masterData/component/caseType.component';
import { penaltyTypeComponent } from './masterData/component/penaltyType.component';

import { campusComponent } from './masterData/component/campus.component';
import { genderComponent } from './masterData/component/gender.component';
import { relationshipTypeComponent } from './masterData/component/relationshipType.component';

import { studentListComponent } from './report/component/studentList.component';
import { studentAttendanceListComponent } from './report/component/studentAttendanceList.component';
import { studentPaymentListComponent } from './report/component/studentPaymentList.component';
import { teacherListComponent } from './report/component/teacherList.component';
import { teacherAttendanceListComponent } from './report/component/teacherAttendanceList.component';
import { userComponent } from './meeting/component/user.component';

import { teacherService } from './admission/service/teacher.service';
import { teacherAttendanceService } from './attendance/service/teacherAttendance.service';
import { studentService } from './admission/service/student.service';
import { studentAttendanceService } from './attendance/service/studentAttendance.service';
import { studentDesciplineService } from './attendance/service/studentDescipline.service';
import { studentAdmissionService } from './admission/service/studentAdmission.service';
import { gradeCourseService } from './learningSchedule/service/gradeCourse.service';
import { teacherEvaluationService } from './evaluationPayment/service/teacherEvaluation.service';

import { lookupService } from '../app/shared/services/lookup.service';
import { loginService } from '../app/login.service';
import { listService } from './report/service/list.service';

import { studentPaymentService } from '../app/evaluationPayment/service/studentPayment.service';
import { followupService } from '../app/meeting/service/meetingFollowup.service';
import { scheduleService } from '../app/meeting/service/meetingSchedule.service';

import { studentMarkService } from './grading/service/studentMark.service';
import { studentTranscriptService } from './grading/service/studentTranscript.service';
import { studentGradeReportService } from './grading/service/studentGradeReport.service';

import { studentTutorialService } from './tutorial/service/studentTutorial.service';
import { teacherTutorialService } from './tutorial/service/teacherTutorial.service';

import { gradeService } from '../app/masterData/services/grade.service';
import { academicQuarterService } from '../app/masterData/services/academicQuarter.service';
import { examTypeService } from '../app/masterData/services/examType.service';
import { gradeSectionService } from '../app/masterData/services/gradeSection.service';
import { courseService } from '../app/masterData/services/course.service';
import { regionService } from '../app/masterData/services/region.service';
import { subcityService } from '../app/masterData/services/subcity.service';
import { woredaService } from '../app/masterData/services/woreda.service';
import { paymentPeriodService } from '../app/masterData/services/paymentPeriod.service';
import { paymentReasonService } from '../app/masterData/services/paymentReason.service';

import { caseTypeService } from '../app/masterData/services/caseType.service';
import { penaltyTypeService } from '../app/masterData/services/penaltyType.service';

import { campusService } from '../app/masterData/services/campus.service';
import { genderService } from '../app/masterData/services/gender.service';
import { relationshipTypeService } from '../app/masterData/services/relationshipType.service';
import { userService } from './meeting/service/user.service';

import { PageNotFoundComponent } from './shared/pageNotFound.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        //DataTablesModule,
        //DataTableDirective,
        FormsModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,

        PageNotFoundComponent,

        studentComponent,
        studentAdmissionComponent,
        teacherComponent,

        studentAttendanceComponent,
        studentDisciplineComponent,
        teacherAttendanceComponent,

        studentMarkComponent,
        studentTranscriptComponent,
        studentGradeReportComponent,

        gradeCourseComponent,

        teacherEvaluationComponent,
        studentPaymentComponent,

        activityComponent,
        scheduleComponent,
        followupComponent,

        studentTutorialComponent,
        teacherTutorialComponent,

        gradeComponent,
        academicQuarterComponent,
        examTypeComponent,
        gradeSectionComponent,
        courseComponent,
        regionComponent,
        subcityComponent,
        woredaComponent,
        paymentPeriodComponent,
        paymentReasonComponent,

        caseTypeComponent,
        penaltyTypeComponent,

        studentListComponent,
        studentAttendanceListComponent,
        studentPaymentListComponent,
        teacherListComponent,
        teacherAttendanceListComponent,

        campusComponent,
        genderComponent,
        relationshipTypeComponent,
        userComponent,
        AlertComponent
    ],
    providers: [
        studentService,
        studentAttendanceService,
        studentDesciplineService,
        teacherService,
        teacherAttendanceService,
        studentAdmissionService,
        gradeCourseService,

        lookupService,
        loginService,
        studentPaymentService,

        gradeService,
        academicQuarterService,
        examTypeService,
        gradeSectionService,
        courseService,
        regionService,
        subcityService,
        woredaService,
        paymentPeriodService,
        paymentReasonService,

        studentMarkService,
        studentGradeReportService,
        studentTranscriptService,
        teacherEvaluationService,

        studentTutorialService,
        teacherTutorialService,

        scheduleService,
        followupService,

        caseTypeService,
        penaltyTypeService,

        campusService,
        genderService,
        relationshipTypeService,

        listService,
        userService,
        AlertService
    ],
    bootstrap: [
        LoginComponent
    ]
})
export class AppModule { }