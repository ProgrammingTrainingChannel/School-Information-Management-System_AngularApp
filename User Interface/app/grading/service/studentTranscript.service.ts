import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentGradeReport } from '../interface/studentGradeReport.interface';

@Injectable()
export class studentTranscriptService {

    constructor(private _http: Http) { }
    
    getGradeTranscriptByStudentID(studentID: number, academicYear: number, gradeName: string): Observable<IStudentGradeReport[]> {
        return this._http.get("http://localhost:5570/api/StudentGradeReport/GetGradeTranscriptByStudentID?studentID=" + studentID + "&academicYear=" + academicYear + "&grade=" + gradeName)
            .map((response: Response) => <IStudentGradeReport[]>response.json());
    };
}
