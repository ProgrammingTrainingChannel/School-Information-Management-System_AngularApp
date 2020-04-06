import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { studentAdmissionService } from '../service/studentAdmission.service'
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { IStudent } from '../../shared/interfaces/student.interface';
import { IStudentAdmission } from '../../admission/interface/studentAdmission.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/admission/template/studentAdmission.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class studentAdmissionComponent {
    private _lookupService: lookupService;
    private _studentAdmissionService: studentAdmissionService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _alertService: AlertService, _studentAdmissionService: studentAdmissionService) {
        this._lookupService = _lookupService;
        this._studentAdmissionService = _studentAdmissionService;
        this._alertService = _alertService;
    }

    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfStudentAdmissions: IStudentAdmission[] = [];

    studentAdmission: IStudentAdmission = {
        ID: 0,
        AdmissionDate: new Date(),

        GradeID: 0,
        GradeSectionID: 0,
        StudentID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdateBy: '',
        UpdatedDate: new Date()
    };

    ngOnInit() {
        this.studentAdmission.ID = 0;
        this.studentAdmission.AdmissionDate = new Date();

        this.studentAdmission.GradeID = 0;
        this.studentAdmission.GradeSectionID = 0;
        this.studentAdmission.StudentID = 0;

        this.studentAdmission.CreatedBy = 'bereket';
        this.studentAdmission.CreatedDate = new Date();
        this.studentAdmission.UpdateBy = '';
        this.studentAdmission.UpdatedDate = null;

        this.LoadGrades();
        this.LoadGradeSections();
        this.LoadStudents();

        this.LoadStudentAdmissions();
    };

    SelectedOldGradeID: number;
    SelectedOldGradeSectionID: number;
    SelectedNewGradeID: number;
    SelectedNewGradeSectionID: number;

    SelectedStudentID: number;

    LoadGrades(): void {
        this._lookupService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadGradeSections(): void {
        this._lookupService.getGradeSections()
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                alert('getGradeSections failed!');
            });
    };

    LoadStudents(): void {
        this._lookupService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };

    LoadStudentAdmissions(): void {
        this._studentAdmissionService.getStudentAdmissions()
            .subscribe(resultData => {
                this.ListOfStudentAdmissions = resultData;

                console.log(this.ListOfStudentAdmissions);
            }, error => {
                this._alertService.error("getStudentAdmissions Failed");
            });
    };

    LoadSingleStudentAdmission(SelectedStudentAdmission: IStudentAdmission): void {
        this.studentAdmission = SelectedStudentAdmission;

        this.SelectedNewGradeID = this.studentAdmission.GradeID;
        this.SelectedNewGradeSectionID = this.studentAdmission.GradeSectionID;
        this.SelectedStudentID = this.studentAdmission.StudentID;
    };

    IsValid(studentAdmission: IStudentAdmission): boolean {
        if (studentAdmission.AdmissionDate == null) {
            this._alertService.error("Please enter Admission Date.");
            return false;
        }
        else if (studentAdmission.GradeID == 0) {
            this._alertService.error("Please select Grade.");
            return false;
        }
        else if (studentAdmission.GradeSectionID == 0) {
            this._alertService.error("Please select Grade Section.");
            return false;
        }
        else if (studentAdmission.StudentID == 0) {
            this._alertService.error("Please select Student.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudentAdmission(): void {
        this.studentAdmission.GradeID = this.SelectedNewGradeID;
        this.studentAdmission.GradeSectionID = this.SelectedNewGradeSectionID;
        this.studentAdmission.StudentID = this.SelectedStudentID;

        if (this.IsValid(this.studentAdmission) == true) {
            if (this.studentAdmission.ID == 0) {
                this._studentAdmissionService.saveStudentAdmission(this.studentAdmission)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadStudentAdmissions();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._studentAdmissionService.updateStudentAdmission(this.studentAdmission)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadStudentAdmissions();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteStudentAdmission(studentAdmission: IStudentAdmission): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._studentAdmissionService.deleteStudentAdmission(studentAdmission)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadStudentAdmissions();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}