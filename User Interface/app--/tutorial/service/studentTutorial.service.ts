import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentTutorial } from '../../tutorial/interface/studentTutorial.interface';

@Injectable()
export class studentTutorialService {

    constructor(private _http: Http) { }

    getStudentTutorials(): Observable<IStudentTutorial[]> {
        return this._http.get('http://localhost:5570/api/StudentTutorial/GetStudentTutorials')
            .map((response: Response) => <IStudentTutorial[]>response.json());
    };

    saveStudentTutorial(teacherEvaluation: IStudentTutorial): Observable<any> {
        let bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentTutorial/SaveStudentTutorial", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentTutorial(teacherEvaluation: IStudentTutorial): Observable<any> {
        let bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentTutorial/UpdateStudentTutorial", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentTutorial(teacherEvaluation: IStudentTutorial): Observable<any> {
        let bodyString = JSON.stringify(teacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentTutorial/DeleteStudentTutorial", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
