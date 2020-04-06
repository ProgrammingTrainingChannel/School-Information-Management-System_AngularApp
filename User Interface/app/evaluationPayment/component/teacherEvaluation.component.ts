import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { teacherEvaluationService } from '../../evaluationPayment/service/teacherEvaluation.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { ITeacher } from '../../shared/interfaces/teacher.interface';
import { ITeacherEvaluation } from '../../evaluationPayment/interface/teacherEvaluation.interface';
import { ITeacherEvaluationCriteria } from '../../evaluationPayment/interface/teacherEvaluationCriteria.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/evaluationPayment/template/teacherEvaluation.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class teacherEvaluationComponent {
    private _lookupService: lookupService;
    private _teacherEvaluationService: teacherEvaluationService;
    private _alertService: AlertService;

    constructor(_alertService: AlertService, _lookupService: lookupService, _teacherEvaluationService: teacherEvaluationService) {
        this._lookupService = _lookupService;
        this._teacherEvaluationService = _teacherEvaluationService;
        this._alertService = _alertService;
    }

    ListOfDepartments: ILookup[] = [];
    ListOfCampuses: ILookup[] = [];
    ListOfAcademicQuarters: ILookup[] = [];
    ListOfTeachers: ITeacher[] = [];

    ListOfEvaluationCriterias: ITeacherEvaluationCriteria[] = [];

    ListOfTeacherEvaluations: ITeacherEvaluation[] = [];

    teacherEvaluation: ITeacherEvaluation = {
        ID: 0,
        Mark: '',
        AcademicQuarterID: 0,
        EvaluationCriteriaID: 0,
        TeacherID: 0,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.teacherEvaluation.ID = 0;
        this.teacherEvaluation.Mark = '';

        this.teacherEvaluation.AcademicQuarterID = 0;
        this.teacherEvaluation.EvaluationCriteriaID = 0;
        this.teacherEvaluation.TeacherID = 0;

        this.teacherEvaluation.CreatedBy = 'abenezer';
        this.teacherEvaluation.CreatedDate = new Date();
        this.teacherEvaluation.UpdatedBy = 'abenezer';
        this.teacherEvaluation.UpdatedDate = new Date();


        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadTeachers();
        this.LoadAcademicQuarters();
        this.LoadEvaluationCriterias();

        this.LoadTeacherEvaluations();

    };
    LoadDepartments(): void {
        this._lookupService.getDepartments()
            .subscribe(resultData => {
                this.ListOfDepartments = resultData;
            }, error => {
                alert('getDepartments failed!');
            });
    };

    LoadCampuses(): void {
        this._lookupService.getCampuses()
            .subscribe(resultData => {
                this.ListOfCampuses = resultData;
            }, error => {
                alert('getCampuses failed!');
            });
    };

    LoadTeachers(): void {
        this._lookupService.getTeachers()
            .subscribe(resultData => {
                this.ListOfTeachers = resultData;
            }, error => {
                alert('getTeachers failed!');
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

    LoadEvaluationCriterias(): void {
        this._teacherEvaluationService.getEvaluationCriterias()
            .subscribe(resultData => {
                this.ListOfEvaluationCriterias = resultData;
            }, error => {
                alert('getEvaluationCriterias failed!');
            });
    };

    LoadTeacherEvaluations(): void {
        this._teacherEvaluationService.getAllTeacherEvaluations()
            .subscribe(resultData => {
                this.ListOfTeacherEvaluations = resultData;
            }, error => {
                alert('getAllTeacherEvaluations failed!');
            });
    };

    LoadSingleTeacherEvaluation(SelectedTeacherEvaluation: ITeacherEvaluation): void {
        this.teacherEvaluation = SelectedTeacherEvaluation;
        this.SelectedAcademicQuarterID = this.teacherEvaluation.AcademicQuarterID;
        this.SelectedEvaluationCriteriaID = this.teacherEvaluation.EvaluationCriteriaID;
        this.SelectedTeacherID = this.teacherEvaluation.TeacherID;
    };

    IsValid(teacherEvaluation: ITeacherEvaluation): boolean {
        if (teacherEvaluation.Mark == "") {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (teacherEvaluation.AcademicQuarterID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else if (teacherEvaluation.EvaluationCriteriaID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else if (teacherEvaluation.TeacherID == 0) {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    }

    SelectedAcademicQuarterID: number;
    SelectedEvaluationCriteriaID: number;
    SelectedTeacherID: number;

    SaveUpdateTeacherEvaluation(): void {
        this.teacherEvaluation.AcademicQuarterID = this.SelectedAcademicQuarterID;
        this.teacherEvaluation.EvaluationCriteriaID = this.SelectedEvaluationCriteriaID;
        this.teacherEvaluation.TeacherID = this.SelectedTeacherID;

        if (this.IsValid(this.teacherEvaluation) == true) {
            if (this.teacherEvaluation.ID == 0) {
                this._teacherEvaluationService.saveTeacherEvaluation(this.teacherEvaluation)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadTeacherEvaluations();
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
                this._teacherEvaluationService.updateTeacherEvaluation(this.teacherEvaluation)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadTeacherEvaluations();
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

    DeleteTeacherEvaluation(teacherEvaluation: ITeacherEvaluation): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherEvaluationService.deleteTeacherEvaluation(teacherEvaluation)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadTeacherEvaluations();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}