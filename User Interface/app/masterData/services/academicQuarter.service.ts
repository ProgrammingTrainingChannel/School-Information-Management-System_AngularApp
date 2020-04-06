import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMasterData } from '../interface/masterData.interface';

@Injectable()
export class academicQuarterService {

    constructor(private _http: Http) { }

    getAcademicQuarters(): Observable<IMasterData[]> {
        return this._http.get('http://localhost:5570/api/AcademicQuarter/GetAcademicQuarters')
            .map((response: Response) => <IMasterData[]>response.json());
    };

    saveAcademicQuarter(academicQuarter: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(academicQuarter); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/AcademicQuarter/SaveAcademicQuarter", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateAcademicQuarter(academicQuarter: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(academicQuarter); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/AcademicQuarter/UpdateAcademicQuarter", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteAcademicQuarter(academicQuarter: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(academicQuarter); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/AcademicQuarter/DeleteAcademicQuarter", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
