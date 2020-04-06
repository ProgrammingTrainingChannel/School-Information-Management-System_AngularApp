import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/grading/template/gradingStudentTranscript.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class gradingStudentTranscriptComponent {
    attendanceMenus: any[] = [
        {
            code: '001', title: 'Leave Information', route: 'leave'
        },
        {
            code: '002', title: 'Absence Information', route: 'absence'
        }
    ];
}