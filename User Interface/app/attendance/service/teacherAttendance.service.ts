import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ITeacherAttendance } from '../interface/TeacherAttendance.interface';

@Injectable()
export class teacherAttendanceService {

    constructor(private _http: Http) { }

    getTeacherAttendances(): Observable<ITeacherAttendance[]> {
        return this._http.get("http://localhost:5570/api/TeachersAttendance/GetTeachersAttendances")
            .map((response: Response) => <ITeacherAttendance[]>response.json());
    };

    saveTeacherAttendance(TeacherAttendance: ITeacherAttendance): Observable<any> {
        let bodyString = JSON.stringify(TeacherAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeachersAttendance/SaveTeacherAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateTeacherAttendance(TeacherAttendance: ITeacherAttendance): Observable<any> {
        let bodyString = JSON.stringify(TeacherAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeachersAttendance/UpdateTeachersAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteTeacherAttendance(TeacherAttendance: ITeacherAttendance): Observable<any> {
        let bodyString = JSON.stringify(TeacherAttendance); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeachersAttendance/DeleteTeachersAttendance", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
