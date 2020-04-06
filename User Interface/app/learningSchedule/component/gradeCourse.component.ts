import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { teacherService } from '../../admission/service/teacher.service';
import { gradeCourseService } from '../service/gradeCourse.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { ITeacher } from '../../admission/interface/teacher.interface';
import { IGradeCourse } from '../interface/gradeCourse.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/learningSchedule/template/gradeCourse.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class gradeCourseComponent {
    private _lookupService: lookupService;
    private _teacherService: teacherService;
    private _gradeCourseService: gradeCourseService;
    private _alertService: AlertService;

    constructor(_teacherService: teacherService, _gradeCourseService: gradeCourseService, _lookupService: lookupService, _alertService: AlertService) {
        this._teacherService = _teacherService;
        this._gradeCourseService = _gradeCourseService;
        this._lookupService = _lookupService;
        this._alertService = _alertService;
    }

    ListOfTeachers: ITeacher[] = [];
    ListOfGrades: ILookup[] = [];
    ListOfCourses: ILookup[] = [];
    ListOfGradeCourses: IGradeCourse[] = [];

    gradeCourse: IGradeCourse = {
        ID: 0,

        CourseID: null,
        GradeID: null,
        TeacherID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.gradeCourse.ID = 0;

        this.gradeCourse.CourseID = 0;
        this.gradeCourse.GradeID = 0;
        this.gradeCourse.TeacherID = 0;

        this.gradeCourse.CreatedBy = 'abenezer';
        this.gradeCourse.CreatedDate = new Date();


        this.LoadTeachers();
        this.LoadGrades();
        this.LoadCourses();
        this.LoadGradeCourses();
    };

    SelectedTeacherID: number;
    SelectedGradeID: number;
    SelectedCourseID: number;

    LoadTeachers(): void {
        this._teacherService.getTeachers()
            .subscribe(resultData => {
                this.ListOfTeachers = resultData;
            }, error => {
                alert('getTeachers failed!');
            });
    };

    LoadGrades(): void {
        this._lookupService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadCourses(): void {
        this._lookupService.getCourses()
            .subscribe(resultData => {
                this.ListOfCourses = resultData;
            }, error => {
                alert('getCourses failed!');
            });
    };

    LoadGradeCourses(): void {
        this._gradeCourseService.getGradeCourses()
            .subscribe(resultData => {
                this.ListOfGradeCourses = resultData;
            }, error => {
                alert('getGradeCourses failed!');
            });
    };

    LoadSingleGradeCourse(SelectedGradeCourse: IGradeCourse): void {
        this.gradeCourse = SelectedGradeCourse;

        this.SelectedTeacherID = this.gradeCourse.TeacherID;
        this.SelectedCourseID = this.gradeCourse.CourseID;
        this.SelectedGradeID = this.gradeCourse.GradeID;
    };

    IsValid(gradeCourse: IGradeCourse): boolean {
        if (gradeCourse.CourseID == 0) {
            this._alertService.error("Please select course.");
            return false;
        }
        else if (gradeCourse.GradeID ==0) {
            this._alertService.error("Please select grade.");
            return false;
        }
        else if (gradeCourse.TeacherID ==0) {
            this._alertService.error("Please select teacher.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateGradeCourse(): void {
        this.gradeCourse.TeacherID = this.SelectedTeacherID;
        this.gradeCourse.CourseID = this.SelectedCourseID;
        this.gradeCourse.GradeID = this.SelectedGradeID;

        if (this.IsValid(this.gradeCourse) == true) {
            if (this.gradeCourse.ID == 0) {
                this._gradeCourseService.saveGradeCourse(this.gradeCourse)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadGradeCourses();
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
                this._gradeCourseService.updateGradeCourse(this.gradeCourse)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadGradeCourses();
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

    DeleteGradeCourse(gradeCourse: IGradeCourse): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._gradeCourseService.deleteGradeCourse(gradeCourse)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadGradeCourses();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}