import { NgModule } from '@angular/core';
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

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: AppComponent },
            { path: 'admissionStudentInformation', component: admissionStudentInformationComponent },
            { path: 'admissionStudentAdmission', component: admissionStudentAdmissionComponent },
            { path: 'admissionTeacherInformation', component: admissionTeacherInformationComponent },
            { path: 'attendanceStudentAttendance', component: attendanceStudentAttendanceComponent },
            { path: 'attendanceStudentDiscipline', component: attendanceStudentDisciplineComponent },
            { path: 'attendanceTeacherAttendance', component: attendanceTeacherAttendanceComponent },
            { path: 'gradingSubmitGrade', component: gradingSubmitGradeComponent },
            { path: 'gradingStudentTranscript', component: gradingStudentTranscriptComponent },
            { path: 'gradingStudentGradeReport', component: gradingStudentGradeReportComponent },
            { path: 'learningScheduleClassInformation', component: learningScheduleClassInformationComponent },
            { path: 'learningScheduleAssignTeacher', component: learningScheduleAssignTeacherComponent },
            { path: 'evaluationPaymentTeacherEvaluation', component: evaluationPaymentTeacherEvaluationComponent },
            { path: 'evaluationPaymentStudentPayment', component: evaluationPaymentStudentPaymentComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
