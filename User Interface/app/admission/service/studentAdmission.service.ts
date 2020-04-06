import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentAdmission } from '../interface/studentAdmission.interface';

@Injectable()
export class studentAdmissionService {

    constructor(private _http: Http) { }

    getStudentAdmissions(): Observable<IStudentAdmission[]> {
        return this._http.get('http://localhost:5570/api/StudentAdmission/GetStudentAdmissions')
            .map((response: Response) => <IStudentAdmission[]>response.json());
    };

    saveStudentAdmission(studentAdmission: IStudentAdmission): Observable<any> {
        let bodyString = JSON.stringify(studentAdmission); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAdmission/SaveStudentAdmission", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentAdmission(studentAdmission: IStudentAdmission): Observable<any> {
        let bodyString = JSON.stringify(studentAdmission); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAdmission/UpdateStudentAdmission", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentAdmission(studentAdmission: IStudentAdmission): Observable<any> {
        let bodyString = JSON.stringify(studentAdmission); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentAdmission/DeleteStudentAdmission", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
