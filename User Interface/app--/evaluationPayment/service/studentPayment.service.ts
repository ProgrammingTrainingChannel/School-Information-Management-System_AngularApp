import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IStudentPayment } from '../../evaluationPayment/interface/studentPayment.interface';

@Injectable()
export class studentPaymentService {

    constructor(private _http: Http) { }

    getAllStudentPayments(): Observable<IStudentPayment[]> {
        return this._http.get('http://localhost:5570/api/StudentPayment/GetAllStudentPayments')
            .map((response: Response) => <IStudentPayment[]>response.json());
    };

    saveStudentPayment(StudentPayment: IStudentPayment): Observable<any> {
        let bodyString = JSON.stringify(StudentPayment); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentPayment/SaveStudentPayment", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateStudentPayment(StudentPayment: IStudentPayment): Observable<any> {
        let bodyString = JSON.stringify(StudentPayment); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentPayment/UpdateStudentPayment", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteStudentPayment(StudentPayment: IStudentPayment): Observable<any> {
        let bodyString = JSON.stringify(StudentPayment); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/StudentPayment/DeleteStudentPayment", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };}
