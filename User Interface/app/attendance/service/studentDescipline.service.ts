import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentDescipline } from '../interface/StudentDescipline.interface';

@Injectable()
export class studentDesciplineService {

    constructor(private _http: Http) { }

    getStudentDesciplines(): Observable<IStudentDescipline[]> {
        return this._http.get("http://localhost:5570/api/StudentDiscipline/GetAllDisciplines")
            .map((response: Response) => <IStudentDescipline[]>response.json());
    };

    saveStudentDescipline(StudentDescipline: IStudentDescipline): Observable<any> {
        let bodyString = JSON.stringify(StudentDescipline); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentDiscipline/SaveStudentDiscipline", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentDescipline(StudentDescipline: IStudentDescipline): Observable<any> {
        let bodyString = JSON.stringify(StudentDescipline); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentDiscipline/UpdateStudentDiscipline", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentDescipline(StudentDescipline: IStudentDescipline): Observable<any> {
        let bodyString = JSON.stringify(StudentDescipline); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentDiscipline/DeleteStudentDiscipline", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
