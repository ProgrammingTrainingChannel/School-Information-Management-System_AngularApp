import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentAttendance } from '../interface/StudentAttendance.interface';

@Injectable()
export class studentAttendanceService {

    constructor(private _http: Http) { }

    getStudentAttendances(): Observable<IStudentAttendance[]> {
        return this._http.get("http://localhost:5570/api/StudentAttendance/GetAllAttendances")
            .map((response: Response) => <IStudentAttendance[]>response.json());
    };

    saveStudentAttendance(StudentAttendance: IStudentAttendance): Observable<any> {
        let bodyString = JSON.stringify(StudentAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAttendance/SaveStudentAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentAttendance(StudentAttendance: IStudentAttendance): Observable<any> {
        let bodyString = JSON.stringify(StudentAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAttendance/UpdateStudentAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentAttendance(StudentAttendance: IStudentAttendance): Observable<any> {
        let bodyString = JSON.stringify(StudentAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAttendance/DeleteStudentAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
