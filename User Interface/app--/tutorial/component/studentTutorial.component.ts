import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';
import { studentService } from '../../admission/service/student.service';

import { studentTutorialService } from '../../tutorial/service/studentTutorial.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IStudent } from '../../admission/interface/student.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';
import { IStudentTutorial } from '../../tutorial/interface/studentTutorial.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/tutorial/template/studentTutorial.component.html',
    styleUrls: ['/app/attendance/menu.component.css']
})
export class studentTutorialComponent {
    private _lookupService: lookupService;
    private _studentService: studentService;
    private _studentTutorialService: studentTutorialService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _alertService: AlertService;
    private _router: Router;

    constructor(private route: ActivatedRoute, private router: Router, _studentService: studentService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _lookupService: lookupService, _studentTutorialService: studentTutorialService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._studentTutorialService = _studentTutorialService;
        this._alertService = _alertService;
        this._studentService = _studentService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._router = router;
    }

    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfStudents: IStudent[] = [];

    ListOfStudentTutorials: IStudentTutorial[] = [];

    studentTutorial: IStudentTutorial = {
        ID: 0,
        StudentID: 0,

        AcadamicYear: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: null
    };

    ngOnInit() {
        this.studentTutorial.ID = 0;
        this.studentTutorial.StudentID = 0;

        this.studentTutorial.AcadamicYear = 0;

        this.studentTutorial.CreatedBy = 'bereket';
        this.studentTutorial.CreatedDate = new Date();
        this.studentTutorial.UpdatedBy = '';
        this.studentTutorial.UpdatedDate = null;

        this.LoadGrades();

        this.LoadStudentTutorials();
    };

    SelectedStudentID: number;
    SelectedGradeID: number;
    SelectedGradeSectionID: number;

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
                alert('getGradeSectionsByGrade failed!');
            });
    };

    LoadStudents(): void {
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
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

    LoadStudentTutorials(): void {
        this._studentTutorialService.getStudentTutorials()
            .subscribe(resultData => {
                this.ListOfStudentTutorials = resultData;

                console.log(this.ListOfStudentTutorials);
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

    LoadSingleStudentTutorial(SelectedStudentTutorial: IStudentTutorial): void {
        this.studentTutorial = SelectedStudentTutorial;

        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(resultData => {
                this.ListOfStudents = resultData;

                this.SelectedStudentID = this.studentTutorial.StudentID;
            }, error => {

            });
    };

    IsValid(studentTutorial: IStudentTutorial): boolean {
        if (studentTutorial.AcadamicYear == 0) {
            this._alertService.error("Please enter Academic Year.");
            return false;
        }
        else if (studentTutorial.StudentID == 0) {
            this._alertService.error("Please select Student.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudentTutorial(): void {
        this.studentTutorial.StudentID = this.SelectedStudentID;

        if (this.IsValid(this.studentTutorial) == true) {
            if (this.studentTutorial.ID == 0) {
                this._studentTutorialService.saveStudentTutorial(this.studentTutorial)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadStudentTutorials();
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
                this._studentTutorialService.updateStudentTutorial(this.studentTutorial)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadStudentTutorials();
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

    DeleteStudentTutorial(SelectedStudentTutorial: IStudentTutorial): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._studentTutorialService.deleteStudentTutorial(SelectedStudentTutorial)
                .subscribe(result => {
                    this.LoadStudentTutorials();
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