import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { admissionStudentInformationComponent } from './admission/component/admissionStudentInformation.component';
import { admissionStudentAdmissionComponent } from './admission/component/admissionStudentAdmission.component';
import { admissionTeacherInformationComponent } from './admission/component/admissionTeacherInformation.component';

import { attendanceStudentAttendanceComponent } from './attendance/component/attendanceStudentAttendance.component';
import { attendanceStudentDisciplineComponent } from './attendance/component/attendanceStudentDiscipline.component';
import { attendanceTeacherAttendanceComponent } from './attendance/component/attendanceTeacherAttendance.component';

import { gradingSubmitGradeComponent } from './grading/component/gradingSubmitGrade.component';
import { gradingStudentTranscriptComponent } from './grading/component/gradingStudentTranscript.component';
import { gradingStudentGradeReportComponent } from './grading/component/gradingStudentGradeReport.component';

import { learningScheduleClassInformationComponent } from './learningSchedule/component/learningScheduleClassInformation.component';
import { learningScheduleAssignTeacherComponent } from './learningSchedule/component/learningScheduleAssignTeacher.component';

import { evaluationPaymentTeacherEvaluationComponent } from './evaluationPayment/component/evaluationPaymentTeacherEvaluation.component';
import { evaluationPaymentStudentPaymentComponent } from './evaluationPayment/component/evaluationPaymentStudentPayment.component';

import { PageNotFoundComponent } from './shared/pageNotFound.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,

        admissionStudentInformationComponent,
        admissionStudentAdmissionComponent,
        admissionTeacherInformationComponent,

        attendanceStudentAttendanceComponent,
        attendanceStudentDisciplineComponent,
        attendanceTeacherAttendanceComponent,

        gradingSubmitGradeComponent,
        gradingStudentTranscriptComponent,
        gradingStudentGradeReportComponent,

        learningScheduleClassInformationComponent,
        learningScheduleAssignTeacherComponent,

        evaluationPaymentTeacherEvaluationComponent,
        evaluationPaymentStudentPaymentComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }