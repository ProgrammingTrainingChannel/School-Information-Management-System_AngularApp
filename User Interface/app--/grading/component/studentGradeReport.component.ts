import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IMasterData } from '../../masterData/interface/masterData.interface';
import { IStudent } from '../../admission/interface/student.interface';
import { ILookup } from '../../shared/interfaces/lookup.interface';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';

import { lookupService } from '../../shared/services/lookup.service';
import { studentService } from '../../admission/service/student.service';
import { AlertService } from '../../_services/index';
import { studentGradeReportService } from '../service/studentGradeReport.service';
import { IStudentGradeReport } from '../interface/studentGradeReport.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/grading/template/studentGradeReport.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})

export class studentGradeReportComponent {
    private _lookupService: lookupService;
    private _studentService: studentService;
    private _studentGradeReportService: studentGradeReportService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _alertService: AlertService;

    constructor(_studentService: studentService, _lookupService: lookupService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _studentGradeReportService: studentGradeReportService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._studentGradeReportService = _studentGradeReportService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }

    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfAcademicQuarters: ILookup[] = [];
    ListOfStudentGradeReports: IStudentGradeReport[] = [];

    studentMark: IStudentGradeReport = {
        ID: 0,
        Fullname: '',
        Gender: '',
        Campus: '',
        Department: '',
        Grade: '',
        AcademicQuarter: '',
        AcademicYear: 0,
        ExamType: '',
        OutOfTotal: 0,
        MarkObtained: 0
    };

    ngOnInit() {
        this.studentMark.ID = 0;
        this.studentMark.Fullname = '';
        this.studentMark.Gender = '';
        this.studentMark.Campus = '';
        this.studentMark.Department = '';
        this.studentMark.Grade = '';
        this.studentMark.AcademicQuarter = '';
        this.studentMark.AcademicYear = 0;
        this.studentMark.ExamType = '';
        this.studentMark.OutOfTotal = 0;
        this.studentMark.MarkObtained = 0;

        this.LoadGrades();
        this.LoadAcademicQuarters();
    }

    SelectedGradeID: number;
    SelectedGradeSectionID: number;
    SelectedStudentID: number;

    SelectedAcademicYearID: number;
    SelectedGradeName: string;
    SelectedAcademicQuarterID: string;

    LoadGrades(): void {
        this._gradeService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadGradeSections(): void {
        console.log('done');
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                alert('getCourses failed!');
            });
    };

    LoadStudents(): void {
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };

    LoadAcademicQuarters(): void {
        this._lookupService.getAcademicQuarters()
            .subscribe(resultData => {
                this.ListOfAcademicQuarters = resultData;
            }, error => {
                alert('getAcademicQuarters failed!');
            });
    };

    LoadStudentGradeReport(): void {
        this._studentGradeReportService.getStudentGradeReportByStudentID(this.SelectedStudentID, this.SelectedAcademicYearID, this.SelectedGradeName, this.SelectedAcademicQuarterID)
            .subscribe(resultData => {
                this.ListOfStudentGradeReports = resultData;
            }, error => {
                alert('getStudentGradeReportByStudentID failed!');
            });
    };
}
