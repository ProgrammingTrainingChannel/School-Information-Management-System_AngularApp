import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/attendance/template/attendanceStudentAttendance.component.html',
    styleUrls: ['/app/attendance/menu.component.css']
})
export class attendanceStudentAttendanceComponent {
    attendanceMenus: any[] = [
        {
            code: '001', title: 'Leave Information', route: 'leave'
        },
        {
            code: '002', title: 'Absence Information', route: 'absence'
        }
    ];
}