import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudent } from '../interface/student.interface';

@Injectable()
export class studentService {

    constructor(private _http: Http) { }

    getStudents(): Observable<IStudent[]> {
        return this._http.get("http://localhost:5570/api/Student/GetStudents")
            .map((response: Response) => <IStudent[]>response.json());
    };

    getStudentsByGradeSection(gradeSectionID:number): Observable<IStudent[]> {
        return this._http.get("http://localhost:5570/api/Student/GetStudentsByGradeSection?gradeSectionID=" + gradeSectionID)
            .map((response: Response) => <IStudent[]>response.json());
    };

    saveStudent(student: IStudent): Observable<any> {
        let bodyString = JSON.stringify(student); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Student/SaveStudent", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudent(student: IStudent): Observable<any> {
        let bodyString = JSON.stringify(student); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Student/UpdateStudent", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudent(student: IStudent): Observable<any> {
        let bodyString = JSON.stringify(student); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Student/DeleteStudent", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
