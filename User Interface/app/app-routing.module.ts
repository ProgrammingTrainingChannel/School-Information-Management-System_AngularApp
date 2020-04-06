import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

import { AppComponent } from './app.component';
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

import { PageNotFoundComponent } from './shared/pageNotFound.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: AppComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'login', component: LoginComponent },
            { path: 'student', component: studentComponent },
            { path: 'studentAdmission', component: studentAdmissionComponent },
            { path: 'teacher', component: teacherComponent },

            { path: 'studentAttendance', component: studentAttendanceComponent },
            { path: 'studentDiscipline', component: studentDisciplineComponent },
            { path: 'teacherAttendance', component: teacherAttendanceComponent },

            { path: 'studentMark', component: studentMarkComponent },
            { path: 'studentTranscript', component: studentTranscriptComponent },
            { path: 'studentGradeReport', component: studentGradeReportComponent },

            { path: 'gradeCourse', component: gradeCourseComponent },

            { path: 'teacherEvaluation', component: teacherEvaluationComponent },
            { path: 'studentPayment', component: studentPaymentComponent },

            { path: 'activity', component: activityComponent },
            { path: 'schedule', component: scheduleComponent },
            { path: 'followup', component: followupComponent },

            { path: 'studentTutorial', component: studentTutorialComponent },
            { path: 'teacherTutorial', component: teacherTutorialComponent },

            { path: 'Grade', component: gradeComponent },
            { path: 'AcademicQuarter', component: academicQuarterComponent },
            { path: 'ExamType', component: examTypeComponent },
            { path: 'GradeSection', component: gradeSectionComponent },
            { path: 'Course', component: courseComponent },
            { path: 'Region', component: regionComponent },
            { path: 'Subcity', component: subcityComponent },
            { path: 'Woreda', component: woredaComponent },
            { path: 'PaymentPeriod', component: paymentPeriodComponent },
            { path: 'PaymentReason', component: paymentReasonComponent },

            { path: 'CaseType', component: caseTypeComponent },
            { path: 'Reason', component: penaltyTypeComponent },
            { path: 'PenaltyType', component: penaltyTypeComponent },

            { path: 'Campus', component: campusComponent },
            { path: 'Gender', component: genderComponent },
            { path: 'RelationshipType', component: relationshipTypeComponent },

            { path: 'studentList', component: studentListComponent },
            { path: 'studentAttendanceList', component: studentAttendanceListComponent },
            { path: 'studentPaymentList', component: studentPaymentListComponent },
            { path: 'teacherList', component: teacherListComponent },
            { path: 'teacherAttendanceList', component: teacherAttendanceListComponent },

            { path: 'user', component: userComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
