﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { IStudentList } from '../interface/studentList.interface';
import { IStudentAttendanceList } from '../interface/studentAttendanceList.interface';
import { IStudentPaymentList } from '../interface/studentPaymentList.interface';
import { ITeacherList } from '../interface/teacherList.interface';
import { ITeacherAttendanceList } from '../interface/teacherAttendanceList.interface';

import { listService } from '../service/list.service';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/report/template/teacherAttendanceList.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})

export class teacherAttendanceListComponent {
    private _listService: listService;
    private _alertService: AlertService;

    constructor(_listService: listService, _alertService: AlertService) {
        this._listService = _listService;
        this._alertService = _alertService;
    }

    ListOfTeacherAttendanceList: ITeacherAttendanceList[] = [];

    ngOnInit() {
        this.LoadTeacherAttendanceList();
    }

    LoadTeacherAttendanceList(): void {
        this._listService.getTeacherAttendanceList()
            .subscribe(resultData => {
                this.ListOfTeacherAttendanceList = resultData;
            }, error => {
                alert('getTeacherAttendanceList failed!');
            });
    };
}
