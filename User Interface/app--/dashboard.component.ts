import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { teacherAttendanceService } from '../app/attendance/service/teacherAttendance.service';
import { studentService } from '../app/admission/service/student.service';

import { ITeacherAttendance } from '../app/attendance/interface/teacherAttendance.interface';
import { IStudent } from '../app/admission/interface/student.interface';
import { IStudentSummary } from '../app/admission/interface/studentSummary.interface';

@Component({
    templateUrl: '/app/dashboard.component.html',
})

export class DashboardComponent {
    private _teacherAttendanceService: teacherAttendanceService;
    private _studentService: studentService;

    constructor(_studentService: studentService, _teacherAttendanceService: teacherAttendanceService) {
        this._teacherAttendanceService = _teacherAttendanceService;
        this._studentService = _studentService;
    }

    ListOfTeacherAttendances: ITeacherAttendance[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfStudentSummaryByCampusAndGrades: IStudentSummary[] = [];

    ngOnInit() {
        this.LoadTeacherAttendances();
        this.LoadStudents();
    };

    LoadTeacherAttendances(): void {
        this._teacherAttendanceService.getTeacherAttendances()
            .subscribe(resultData => {
                this.ListOfTeacherAttendances = resultData;

                console.log(this.ListOfTeacherAttendances);
            }, error => {
                alert('getTeacherAttendances failed!');
            });
    };

    LoadStudents(): void {
        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };
}