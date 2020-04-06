import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/attendance/template/attendanceStudentDiscipline.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class attendanceStudentDisciplineComponent {
    attendanceMenus: any[] = [
        {
            code: '001', title: 'Leave Information', route: 'leave'
        },
        {
            code: '002', title: 'Absence Information', route: 'absence'
        }
    ];
}