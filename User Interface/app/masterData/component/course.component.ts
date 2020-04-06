import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { courseService } from '../services/course.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/course.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class courseComponent {
    private _courseService: courseService;
    private _alertService: AlertService;

    constructor(_courseService: courseService, _alertService: AlertService) {
        this._courseService = _courseService;
        this._alertService = _alertService;
    }

    ListOfCourses: IMasterData[] = [];
    
    course: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.course.ID = 0;
        this.course.Name = '';
        this.course.Description = '';

        this.course.CreatedBy = 'bereket';
        this.course.CreatedDate = new Date();

        this.LoadCourses();
    }

    SelectedCourseID: number;

    LoadCourses(): void {
        this._courseService.getCourses()
            .subscribe(resultData => {
                this.ListOfCourses = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getCourses failed');
            });
    };

    LoadSingleCourse(SelectedCourse: IMasterData): void {
        this.course = SelectedCourse;
    };

    SaveUpdateCourse(): void {
        if (this.course.ID == 0) {
            this._courseService.saveCourse(this.course)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadCourses();
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
            this._courseService.updateCourse(this.course)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadCourses();
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

    DeleteCourse(SelectedCourse: IMasterData): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._courseService.deleteCourse(SelectedCourse)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadCourses();
                }, error => {
                    this._alertService.error("Delete failed");
                    alert('Delete failed');
                });
        }

    };
}
