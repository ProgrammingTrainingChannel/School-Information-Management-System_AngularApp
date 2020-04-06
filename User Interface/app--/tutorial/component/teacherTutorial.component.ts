import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { teacherService } from '../../admission/service/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

import { teacherTutorialService } from '../../tutorial/service/teacherTutorial.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { ITeacher } from '../../admission/interface/teacher.interface';
import { ITeacherTutorial } from '../../tutorial/interface/teacherTutorial.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/tutorial/template/teacherTutorial.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class teacherTutorialComponent {
    private _lookupService: lookupService;
    private _teacherService: teacherService;
    private _teacherTutorialService: teacherTutorialService;
    private _alertService: AlertService;
    private _router: Router;

    constructor(private route: ActivatedRoute, private router: Router, _lookupService: lookupService, _teacherService: teacherService, _teacherTutorialService: teacherTutorialService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._teacherService = _teacherService;
        this._teacherTutorialService = _teacherTutorialService;
        this._alertService = _alertService;
        this._router = router;
    }

    ListOfDepartments: ILookup[] = [];
    ListOfCampuses: ILookup[] = [];
    ListOfTeachers: ITeacher[] = [];

    ListOfTeacherTutorials: ITeacherTutorial[] = [];

    teacherTutorial: ITeacherTutorial = {
        ID: 0,
        TeacherID: 0,

        AcademicYear: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: null
    };

    ngOnInit() {
        this.teacherTutorial.ID = 0;
        this.teacherTutorial.TeacherID = 0;

        this.teacherTutorial.AcademicYear = 0;

        this.teacherTutorial.CreatedBy = 'bereket';
        this.teacherTutorial.CreatedDate = new Date();
        this.teacherTutorial.UpdatedBy = '';
        this.teacherTutorial.UpdatedDate = null;

        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadTeachers();

        this.LoadTeacherTutorials();
    };

    SelectedTeacherID: number;

    LoadDepartments(): void {
        this._lookupService.getDepartments()
            .subscribe(resultData => {
                this.ListOfDepartments = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadCampuses(): void {
        this._lookupService.getCampuses()
            .subscribe(resultData => {
                this.ListOfCampuses = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadTeachers(): void {
        this._teacherService.getTeachers()
            .subscribe(resultData => {
                this.ListOfTeachers = resultData;
            }, error => {
                this._alertService.error("Loaded");
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadTeacherTutorials(): void {
        this._teacherTutorialService.getTeacherTutorials()
            .subscribe(resultData => {
                this.ListOfTeacherTutorials = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadSingleTeacherTutorial(SelectedTeacherTutorial: ITeacherTutorial): void {
        this.teacherTutorial = SelectedTeacherTutorial;

        this.SelectedTeacherID = this.teacherTutorial.TeacherID;
    };

    IsValid(teacherTutorial: ITeacherTutorial): boolean {
        if (teacherTutorial.AcademicYear == 0) {
            this._alertService.error("Please enter Academic Year.");
            return false;
        }
        else if (teacherTutorial.TeacherID == 0) {
            this._alertService.error("Please select Teacher.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateTeacherTutorial(): void {
        this.teacherTutorial.TeacherID = this.SelectedTeacherID;

        if (this.IsValid(this.teacherTutorial) == true) {
            if (this.teacherTutorial.ID == 0) {
                this._teacherTutorialService.saveTeacherTutorial(this.teacherTutorial)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadTeacherTutorials();
                            //return true;
                        }
                        else {
                            this._alertService.error("Save Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
            else {
                this._teacherTutorialService.updateTeacherTutorial(this.teacherTutorial)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadTeacherTutorials();
                            //return true;
                        }
                        else {
                            this._alertService.error("Update Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
        }
    };

    DeleteTeacherTutorial(SelectedTeacherTutorial: ITeacherTutorial): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._teacherTutorialService.deleteTeacherTutorial(SelectedTeacherTutorial)
                .subscribe(result => {
                    this.LoadTeacherTutorials();
                }, error => {
                    if (error.status == 401) {
                        let link = ['/login'];
                        this._router.navigate(link);
                    }
                    else {
                        this._alertService.error("Something went wrong. Please try again.");
                    }
                });
        }
    };
}