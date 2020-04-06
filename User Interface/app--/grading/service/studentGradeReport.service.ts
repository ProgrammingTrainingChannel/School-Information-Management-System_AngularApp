import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentGradeReport } from '../interface/studentGradeReport.interface';

@Injectable()
export class studentGradeReportService {

    constructor(private _http: Http) { }

    getStudentGradeReports(): Observable<IStudentGradeReport[]> {
        return this._http.get("http://localhost:5570/api/StudentGradeReport/GetGradeReports")
            .map((response: Response) => <IStudentGradeReport[]>response.json());
    };

    getStudentGradeReportByStudentID(studentID: number, academicYear: number, grade: string, academicQuarter: string): Observable<IStudentGradeReport[]> {
        return this._http.get("http://localhost:5570/api/StudentGradeReport/GetGradeReportByStudentID?studentID=" + studentID + "&academicYear=" + academicYear + "&grade=" + grade + "&academicQuarter=" + academicQuarter)
            .map((response: Response) => <IStudentGradeReport[]>response.json());
    };
}
