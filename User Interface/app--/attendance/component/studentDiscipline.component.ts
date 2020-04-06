import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { studentService } from '../../admission/service/student.service';
import { studentDesciplineService } from '../service/studentDescipline.service';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';
import { IStudent } from '../../admission/interface/student.interface';
import { IEmergencyContact } from '../../admission/interface/emergencyContact.interface';
import { IStudentDescipline } from '../interface/studentDescipline.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/attendance/template/studentDiscipline.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class studentDisciplineComponent {
    private _lookupService: lookupService;
    private _studentService: studentService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _studentDesciplineService: studentDesciplineService;
    private _alertService: AlertService;

    constructor(_studentService: studentService, _lookupService: lookupService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _studentDesciplineService: studentDesciplineService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._studentDesciplineService = _studentDesciplineService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }

    ListOfGradeSections: IGradeSection[] = [];
    ListOfGrades: ILookup[] = [];
    ListOfCaseTypes: ILookup[] = [];
    ListOfPenaltyTypes: ILookup[] = [];
    ListOfEmergencyContacts: IEmergencyContact[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfStudentDesciplines: IStudentDescipline[] = [];

    studentDescipline: IStudentDescipline = {
        ID: 0,
        InformedBy: '',
        Remark: '',

        StudentID: null,
        CaseTypeID: null,
        PenalityTypeID: null,
        EmergencyContactID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdateBy: '',
        UpdateDate: new Date(),
    };

    ngOnInit() {
        this.studentDescipline.ID = 0;
        this.studentDescipline.InformedBy = '';
        this.studentDescipline.Remark = '';

        this.studentDescipline.StudentID = 0;
        this.studentDescipline.CaseTypeID = 0;
        this.studentDescipline.PenalityTypeID = 0;
        this.studentDescipline.EmergencyContactID = 0;

        this.studentDescipline.CreatedBy = 'abenezer';
        this.studentDescipline.CreatedDate = new Date();


        this.LoadGrades();
        this.LoadCaseTypes();
        this.LoadPenaltyTypes();
        this.LoadEmergencyContacts();
        
        this.LoadStudentDesciplines();

    };

    SelectedGradeID: number;
    SelectedGradeSectionID: number;
    SelectedStudentID: number;
    SelectedCaseTypeID: number;
    SelectedPenaltyTypeID: number;
    SelectedEmergencyContactID: number;

    LoadStudentDesciplines(): void {
        this._studentDesciplineService.getStudentDesciplines()
            .subscribe(resultData => {
                this.ListOfStudentDesciplines = resultData;
            }, error => {
                alert('getStudentDesciplines failed!');
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
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                alert('getGradeSectionsByGrade failed!');
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

    LoadCaseTypes(): void {
        this._lookupService.getCaseTypes()
            .subscribe(resultData => {
                this.ListOfCaseTypes = resultData;
            }, error => {
                alert('getCaseTypes failed!');
            });
    };

    LoadPenaltyTypes(): void {
        this._lookupService.getPenaltyTypes()
            .subscribe(resultData => {
                this.ListOfPenaltyTypes = resultData;
            }, error => {
                alert('getPenaltyTypes failed!');
            });
    };

    LoadEmergencyContacts(): void {
        this._lookupService.getEmergencyContacts()
            .subscribe(resultData => {
                this.ListOfEmergencyContacts = resultData;
            }, error => {
                alert('getEmergencyContacts failed!');
            });
    };

    LoadSingleStudentDescipline(SelectedStudentDescipline: IStudentDescipline): void {
        this.studentDescipline = SelectedStudentDescipline;

        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;

                this.SelectedStudentID = this.studentDescipline.StudentID;
                this.SelectedCaseTypeID = this.studentDescipline.CaseTypeID;
                this.SelectedPenaltyTypeID = this.studentDescipline.PenalityTypeID;
                this.SelectedEmergencyContactID = this.studentDescipline.EmergencyContactID;
            }, error => {
                
            });
    };

    IsValid(studentDescipline: IStudentDescipline): boolean {
        if (studentDescipline.InformedBy == "") {
            this._alertService.error("Please enter Informed by.");
            return false;
        }
        else if (studentDescipline.StudentID == 0) {
            this._alertService.error("Please select student.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudentDescipline (): void {
        this.studentDescipline.StudentID = this.SelectedStudentID;
        this.studentDescipline.CaseTypeID = this.SelectedCaseTypeID;
        this.studentDescipline.PenalityTypeID = this.SelectedPenaltyTypeID;
        this.studentDescipline.EmergencyContactID = this.SelectedEmergencyContactID;

        if (this.IsValid(this.studentDescipline) == true) {
            if (this.studentDescipline.ID == 0) {
                this._studentDesciplineService.saveStudentDescipline(this.studentDescipline)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadStudentDesciplines();
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
                this._studentDesciplineService.updateStudentDescipline(this.studentDescipline)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadStudentDesciplines();
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

    DeleteStudentAttendance(studentDescipline: IStudentDescipline): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentDesciplineService.deleteStudentDescipline(studentDescipline)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadStudentDesciplines();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}