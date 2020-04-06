import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMasterData } from '../interface/masterData.interface';

@Injectable()
export class subcityService {

    constructor(private _http: Http) { }

    getSubcitys(): Observable<IMasterData[]> {
        return this._http.get('http://localhost:5570/api/Subcity/GetSubcitys')
            .map((response: Response) => <IMasterData[]>response.json());
    };

    saveSubcity(subcity: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(subcity); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Subcity/SaveSubcity", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateSubcity(subcity: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(subcity); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Subcity/UpdateSubcity", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteSubcity(subcity: IMasterData): Observable<any> {
        let bodyString = JSON.stringify(subcity); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/Subcity/DeleteSubcity", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
