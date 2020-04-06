﻿import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentMark } from '../interface/studentMark.interface';

@Injectable()
export class studentMarkService {

    constructor(private _http: Http) { }

    getStudentMarks(): Observable<IStudentMark[]> {
        return this._http.get("http://localhost:5570/api/StudentMark/GetStudentMarks")
            .map((response: Response) => <IStudentMark[]>response.json());
    };

    saveStudentMark(studentMark: IStudentMark): Observable<any> {
        let bodyString = JSON.stringify(studentMark); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentMark/SaveStudentMark", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentMark(studentMark: IStudentMark): Observable<any> {
        let bodyString = JSON.stringify(studentMark); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentMark/UpdateStudentMark", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentMark(studentMark: IStudentMark): Observable<any> {
        let bodyString = JSON.stringify(studentMark); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentMark/DeleteStudentMark", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
