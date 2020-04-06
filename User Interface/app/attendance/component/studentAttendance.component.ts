import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { studentService } from '../../admission/service/student.service';
import { studentAttendanceService } from '../service/studentAttendance.service';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';
import { IStudent } from '../../admission/interface/student.interface';
import { IStudentAttendance } from '../interface/studentAttendance.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/attendance/template/studentAttendance.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class studentAttendanceComponent {
    private _lookupService: lookupService;
    private _studentService: studentService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _studentAttendanceService: studentAttendanceService;
    private _alertService: AlertService;

    constructor(_studentService: studentService, _lookupService: lookupService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _studentAttendanceService: studentAttendanceService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._studentAttendanceService = _studentAttendanceService;
        this._alertService = _alertService;
    }

    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfPermissionTypes: ILookup[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfStudentAttendances: IStudentAttendance[] = [];

    studentAttendance: IStudentAttendance = {
        ID: 0,
        AbsensenceDuration: 0,
        PermitedBy: '',
        Remark: '',

        StudentID: null,
        PermissionTypeID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdateBy: '',
        UpdateDate: new Date(),
    };

    ngOnInit() {
        this.studentAttendance.ID = 0;
        this.studentAttendance.AbsensenceDuration = 0;
        this.studentAttendance.PermitedBy = '';
        this.studentAttendance.Remark = '';

        this.studentAttendance.StudentID = 0;
        this.studentAttendance.PermissionTypeID = 0;

        this.studentAttendance.CreatedBy = 'abenezer';
        this.studentAttendance.CreatedDate = new Date();


        this.LoadGrades();
        this.LoadPermissionTypes();
        this.LoadStudentAttendances();

    };

    SelectedGradeID: number;
    SelectedGradeSectionID: number;
    SelectedStudentID: number;
    SelectedPermissionTypeID: number;

    LoadStudentAttendances(): void {
        this._studentAttendanceService.getStudentAttendances()
            .subscribe(resultData => {
                this.ListOfStudentAttendances = resultData;

                console.log(this.ListOfStudentAttendances);
            }, error => {
                alert('getStudentAttendances failed!');
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

    LoadAllStudents(): void {
        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
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

    LoadPermissionTypes(): void {
        this._lookupService.getPermissionTypes()
            .subscribe(resultData => {
                this.ListOfPermissionTypes = resultData;
            }, error => {
                alert('getPermissionTypes failed!');
            });
    };

    LoadSingleStudentAttendance(SelectedStudentAttendance: IStudentAttendance): void {
        this.studentAttendance = SelectedStudentAttendance;

        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;

                this.SelectedStudentID = this.studentAttendance.StudentID;
                this.SelectedPermissionTypeID = this.studentAttendance.PermissionTypeID;
            }, error => {
                
            });
    };

    IsValid(studentAttendance: IStudentAttendance): boolean {
        if (studentAttendance.AbsensenceDuration == 0) {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (studentAttendance.PermitedBy == "") {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudentAttendance(): void {
        this.studentAttendance.StudentID = this.SelectedStudentID;
        this.studentAttendance.PermissionTypeID = this.SelectedPermissionTypeID;

        if (this.IsValid(this.studentAttendance) == true) {
            if (this.studentAttendance.ID == 0) {
                this._studentAttendanceService.saveStudentAttendance(this.studentAttendance)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadStudentAttendances();
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
                this._studentAttendanceService.updateStudentAttendance(this.studentAttendance)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadStudentAttendances();
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
        }
    };

    DeleteStudentAttendance(studentAttendance: IStudentAttendance): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentAttendanceService.deleteStudentAttendance(studentAttendance)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadStudentAttendances();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}