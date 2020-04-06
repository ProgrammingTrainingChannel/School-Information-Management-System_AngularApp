import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ITeacherEvaluation } from '../../evaluationPayment/interface/teacherEvaluation.interface';
import { ITeacherEvaluationCriteria } from '../../evaluationPayment/interface/teacherEvaluationCriteria.interface';

@Injectable()
export class teacherEvaluationService {

    constructor(private _http: Http) { }

    getEvaluationCriterias(): Observable<ITeacherEvaluationCriteria[]> {
        return this._http.get('http://localhost:5570/api/EvaluationCriteria/GetEvaluationCriterias')
            .map((response: Response) => <ITeacherEvaluationCriteria[]>response.json());
    };

    getAllTeacherEvaluations(): Observable<ITeacherEvaluation[]> {
        return this._http.get('http://localhost:5570/api/TeacherEvaluation/GetTeacherEvaluations')
            .map((response: Response) => <ITeacherEvaluation[]>response.json());
    };

    saveTeacherEvaluation(TeacherEvaluation: ITeacherEvaluation): Observable<any> {
        let bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeacherEvaluation/SaveTeacherEvaluation", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateTeacherEvaluation(TeacherEvaluation: ITeacherEvaluation): Observable<any> {
        let bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeacherEvaluation/UpdateTeacherEvaluation", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteTeacherEvaluation(TeacherEvaluation: ITeacherEvaluation): Observable<any> {
        let bodyString = JSON.stringify(TeacherEvaluation); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/TeacherEvaluation/DeleteTeacherEvaluation", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
