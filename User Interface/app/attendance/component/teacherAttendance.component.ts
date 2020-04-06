import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { teacherService } from '../../admission/service/teacher.service';
import { teacherAttendanceService } from '../service/teacherAttendance.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { ITeacher } from '../../admission/interface/teacher.interface';
import { ITeacherAttendance } from '../interface/teacherAttendance.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/attendance/template/teacherAttendance.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class teacherAttendanceComponent {
    private _lookupService: lookupService;
    private _teacherService: teacherService;
    private _teacherAttendanceService: teacherAttendanceService;
    private _alertService: AlertService;

    constructor(_teacherService: teacherService, _lookupService: lookupService, _teacherAttendanceService: teacherAttendanceService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._teacherService = _teacherService;
        this._teacherAttendanceService = _teacherAttendanceService;
        this._alertService = _alertService;
    }

    ListOfDepartments: ILookup[] = [];
    ListOfCampuses: ILookup[] = [];
    ListOfPermissionTypes: ILookup[] = [];
    ListOfTeachers: ITeacher[] = [];
    ListOfTeacherAttendances: ITeacherAttendance[] = [];

    teacherAttendance: ITeacherAttendance = {
        ID: 0,
        AbsencenceDuration: 0,
        PermitedBy: '',
        Remark: '',

        TeacherID: null,
        PermissionTypeID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdateBy: '',
        UpdateDate: new Date(),
    };

    ngOnInit() {
        this.teacherAttendance.ID = 0;
        this.teacherAttendance.AbsencenceDuration = 0;
        this.teacherAttendance.PermitedBy = '';
        this.teacherAttendance.Remark = '';

        this.teacherAttendance.TeacherID = 0;
        this.teacherAttendance.PermissionTypeID = 0;

        this.teacherAttendance.CreatedBy = 'abenezer';
        this.teacherAttendance.CreatedDate = new Date();


        this.LoadDepartments();
        this.LoadCampuses();
        this.LoadPermissionTypes();
        this.LoadTeachers();
        this.LoadTeacherAttendances();

    };

    SelectedCampusID: number;
    SelectedTeacherID: number;
    SelectedPermissionTypeID: number;

    LoadTeacherAttendances(): void {
        this._teacherAttendanceService.getTeacherAttendances()
            .subscribe(resultData => {
                this.ListOfTeacherAttendances = resultData;
            }, error => {
                alert('getTeacherAttendances failed!');
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

    LoadDepartments(): void {
        this._lookupService.getDepartments()
            .subscribe(resultData => {
                this.ListOfDepartments = resultData;
            }, error => {
                alert('getDepartments failed!');
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

    LoadCampuses(): void {
        this._lookupService.getCampuses()
            .subscribe(resultData => {
                this.ListOfCampuses = resultData;
            }, error => {
                alert('getCampuses failed!');
            });
    };

    LoadSingleTeacherAttendance(SelectedteacherAttendance: ITeacherAttendance): void {
        this.teacherAttendance = SelectedteacherAttendance;

        this.SelectedTeacherID = this.teacherAttendance.TeacherID;
        this.SelectedPermissionTypeID = this.teacherAttendance.PermissionTypeID;
    };

    IsValid(teacherAttendance: ITeacherAttendance): boolean {
        if (teacherAttendance.AbsencenceDuration == 0) {
            this._alertService.error("Please enter Absence duration.");
            return false;
        }
        else if (teacherAttendance.PermitedBy == "") {
            this._alertService.error("Please enter Permitted by.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateTeacherAttendance(): void {
        this.teacherAttendance.TeacherID = this.SelectedTeacherID;
        this.teacherAttendance.PermissionTypeID = this.SelectedPermissionTypeID;

        if (this.IsValid(this.teacherAttendance) == true) {
            if (this.teacherAttendance.ID == 0) {
                this._teacherAttendanceService.saveTeacherAttendance(this.teacherAttendance)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadTeacherAttendances();
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
                this._teacherAttendanceService.updateTeacherAttendance(this.teacherAttendance)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadTeacherAttendances();
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

    DeleteTeacherAttendance(teacherAttendance: ITeacherAttendance): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherAttendanceService.deleteTeacherAttendance(teacherAttendance)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadTeacherAttendances();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}