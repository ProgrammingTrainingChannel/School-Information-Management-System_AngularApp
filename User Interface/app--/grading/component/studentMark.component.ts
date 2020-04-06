import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IMasterData } from '../../masterData/interface/masterData.interface';
import { IStudentMark } from '..//interface/studentMark.interface';
import { courseService } from '../../masterData/services/course.service';
import { studentService } from '../../admission/service/student.service';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';
import { academicQuarterService } from '../../masterData/services/academicQuarter.service';
import { examTypeService } from '../../masterData/services/examType.service';
import { studentMarkService } from '../../grading/service/studentMark.service';

import { AlertService } from '../../_services/index';
import { IStudent } from '../../admission/interface/student.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/grading/template/studentMark.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})

export class studentMarkComponent {
    private _courseService: courseService;
    private _alertService: AlertService;
    private _studentService: studentService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _examTypeService: examTypeService;
    private _studentMarkService: studentMarkService;
    private _academicQuarterService: academicQuarterService;

    constructor(_studentMarkService: studentMarkService, _academicQuarterService: academicQuarterService, _courseService: courseService, _examTypeService: examTypeService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _studentService: studentService, _alertService: AlertService) {
        this._courseService = _courseService;
        this._alertService = _alertService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._examTypeService = _examTypeService;
        this._studentMarkService = _studentMarkService;
        this._academicQuarterService = _academicQuarterService;
    }

    ListOfStudentMarks: IStudentMark[] = [];
    ListOfGrades: IMasterData[] = [];
    ListOfCourses: IMasterData[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfExamTypes: IMasterData[] = [];
    ListOfAcademicQuarters: IMasterData[] = [];


    studentMark: IStudentMark = {
        ID: 0,
        StudentID: 0,
        GradeID: 0,
        GradeSectionID: 0,
        CourseID: 0,
        ExamTypeID: 0,
        AcademicQuarterID: 0,
        OutOfTotal: 0,
        MarkObtained: 0,
        AcademicYear: 0,
        Remark: '',

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.studentMark.ID = 0;
        this.studentMark.StudentID = 0;
        this.studentMark.GradeSectionID = 0;
        this.studentMark.GradeID = 0;
        this.studentMark.CourseID = 0;
        this.studentMark.ExamTypeID = 0;
        this.studentMark.AcademicQuarterID = 0;
        this.studentMark.OutOfTotal = 0;
        this.studentMark.MarkObtained = 0;
        this.studentMark.AcademicYear = 0;
        this.studentMark.Remark = null;

        this.studentMark.CreatedBy = 'abenezer';
        this.studentMark.CreatedDate = new Date();

        this.LoadGrades();
        this.LoadCourses();        
        this.LoadExamTypes();
        this.LoadAcademicQuarters();

        this.LoadStudentMarks();
    }

    SelectedGradeID: number;
    SelectedExamTypeID: number;
    SelectedGradeSectionID: number;
    SelectedCourseID: number;
    SelectedStudentID: number;
    SelectedAcademicQuarterID: number;

    LoadAcademicQuarters(): void {
        this._academicQuarterService.getAcademicQuarters()
            .subscribe(resultData => {
                this.ListOfAcademicQuarters = resultData;
            }, error => {
                alert('getAcademicQuarters failed!');
            });
    };

    LoadStudentMarks(): void {
        this._studentMarkService.getStudentMarks()
            .subscribe(resultData => {
                this.ListOfStudentMarks = resultData;
            }, error => {
                alert('getStudentMarks failed!');
            });
    };

    LoadExamTypes(): void {
        this._examTypeService.getExamTypes()
            .subscribe(resultData => {
                this.ListOfExamTypes = resultData;
            }, error => {
                alert('getExamTypes failed!');
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

    LoadCourses(): void {
        this._courseService.getCourses()
            .subscribe(resultData => {
                this.ListOfCourses = resultData;
            }, error => {
                alert('getCourses failed!');
            });
    };

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

    LoadSingleStudentMark(SelectedStudentMark: IStudentMark): void {
        this.studentMark = SelectedStudentMark;

        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;

                this.SelectedGradeID = this.studentMark.GradeID;
                this.SelectedGradeSectionID = this.studentMark.GradeSectionID;
                this.SelectedExamTypeID = this.studentMark.ExamTypeID;
                this.SelectedCourseID = this.studentMark.CourseID;
                this.SelectedAcademicQuarterID = this.studentMark.AcademicQuarterID;
                this.SelectedStudentID = this.studentMark.StudentID;
            }, error => {
                alert('getStudents failed!');
            });
    };

    SaveUpdateStudentMark(): void {
        this.studentMark.GradeID = this.SelectedGradeID;
        this.studentMark.GradeSectionID = this.SelectedGradeSectionID;
        this.studentMark.ExamTypeID = this.SelectedExamTypeID;
        this.studentMark.CourseID = this.SelectedCourseID;
        this.studentMark.StudentID = this.SelectedStudentID;
        this.studentMark.AcademicQuarterID = this.SelectedAcademicQuarterID;

        if (this.studentMark.ID == 0) {
            this._studentMarkService.saveStudentMark(this.studentMark)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadStudentMarks();
                        //return true;
                    }
                    else {
                        this._alertService.error("Failed To Save");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._studentMarkService.updateStudentMark(this.studentMark)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadStudentMarks();
                        //return true;
                    }
                    else {
                        this._alertService.error("Update Failed");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };


    DeleteStudentMark(SelectedStudentMark: IStudentMark): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentMarkService.deleteStudentMark(SelectedStudentMark)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadStudentMarks();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };

}
