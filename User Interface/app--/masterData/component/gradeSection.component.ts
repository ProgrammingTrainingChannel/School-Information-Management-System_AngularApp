import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { gradeService } from '../services/grade.service';
import { teacherService } from '../../admission/service/teacher.service';
import { gradeSectionService } from '../services/gradeSection.service';

import { ITeacher } from '../../admission/interface/teacher.interface';
import { IMasterData } from '../interface/masterData.interface';
import { IGradeSection } from '../interface/gradeSection.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/gradeSection.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class gradeSectionComponent {
    private _gradeService: gradeService;
    private _teacherService: teacherService;
    private _gradeSectionService: gradeSectionService;
    private _alertService: AlertService;

    constructor(_gradeService: gradeService, _teacherService: teacherService, _gradeSectionService: gradeSectionService, _alertService: AlertService) {
        this._gradeService = _gradeService;
        this._teacherService = _teacherService;
        this._gradeSectionService = _gradeSectionService;
        this._alertService = _alertService;
    }

    ListOfGrades: IMasterData[] = [];
    ListOfTeachers: ITeacher[] = [];
    ListOfGradeSections: IGradeSection[] = [];

    gradeSection: IGradeSection = {
        ID: 0,
        Name: '',
        GradeID: 0,
        RoomTeacherID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    ngOnInit() {
        this.gradeSection.ID = 0;
        this.gradeSection.Name = '';
        this.gradeSection.GradeID = 0;
        this.gradeSection.RoomTeacherID = 0;

        this.gradeSection.CreatedBy = 'bereket';
        this.gradeSection.CreatedDate = new Date();
        this.gradeSection.UpdatedBy = '';
        this.gradeSection.UpdatedDate = null;

        this.LoadGrades();
        this.LoadTeachers();
        this.LoadGradeSections();
    }

    SelectedGradeID: number;
    SelectedTeacherID: number;
    SelectedGradeSectionID: number;

    LoadGrades(): void {
        this._gradeService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadTeachers(): void {
        this._teacherService.getTeachers()
            .subscribe(resultData => {
                this.ListOfTeachers = resultData;
            }, error => {
                alert('getTeachers failed!');
            });
    };

    LoadGradeSections(): void {
        this._gradeSectionService.getGradeSections()
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getGradeSections failed');
            });
    };

    LoadSingleGradeSection(SelectedGradeSection: IGradeSection): void {
        this.gradeSection = SelectedGradeSection;

        this.SelectedGradeID = this.gradeSection.GradeID;
        this.SelectedTeacherID = this.gradeSection.RoomTeacherID;
    };

    SaveUpdateGradeSection(): void {
        this.gradeSection.GradeID = this.SelectedGradeID;
        this.gradeSection.RoomTeacherID = this.SelectedTeacherID;

        if (this.gradeSection.ID == 0) {
            this._gradeSectionService.saveGradeSection(this.gradeSection)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadGradeSections();
                        //return true;
                    }
                    else {
                        this._alertService.error("Save Failed");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._gradeSectionService.updateGradeSection(this.gradeSection)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadGradeSections();
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

    DeleteGradeSection(SelectedGradeSection: IGradeSection): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this.gradeSection = SelectedGradeSection;

            this._gradeSectionService.deleteGradeSection(this.gradeSection)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadGradeSections();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}