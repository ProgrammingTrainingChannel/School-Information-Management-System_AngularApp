import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentList } from '../interface/studentList.interface';
import { IStudentAttendanceList } from '../interface/studentAttendanceList.interface';
import { IStudentPaymentList } from '../interface/studentPaymentList.interface';
import { ITeacherList } from '../interface/teacherList.interface';
import { ITeacherAttendanceList } from '../interface/teacherAttendanceList.interface';

@Injectable()
export class listService {

    constructor(private _http: Http) { }

    getStudentList(): Observable<IStudentList[]> {
        return this._http.get("http://localhost:5570/api/Report/GetStudentList")
            .map((response: Response) => <IStudentList[]>response.json());
    };

    getStudentAttendanceList(): Observable<IStudentAttendanceList[]> {
        return this._http.get("http://localhost:5570/api/Report/GetStudentAttendanceList")
            .map((response: Response) => <IStudentAttendanceList[]>response.json());
    };

    getStudentPaymentList(): Observable<IStudentPaymentList[]> {
        return this._http.get("http://localhost:5570/api/Report/GetStudentPaymentList")
            .map((response: Response) => <IStudentPaymentList[]>response.json());
    };

    getTeacherList(): Observable<ITeacherList[]> {
        return this._http.get("http://localhost:5570/api/Report/GetTeacherList")
            .map((response: Response) => <ITeacherList[]>response.json());
    };

    getTeacherAttendanceList(): Observable<ITeacherAttendanceList[]> {
        return this._http.get("http://localhost:5570/api/Report/GetTeacherAttendanceList")
            .map((response: Response) => <ITeacherAttendanceList[]>response.json());
    };
}
