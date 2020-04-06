import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IGradeCourse } from '../interface/gradeCourse.interface';

@Injectable()
export class gradeCourseService {

    constructor(private _http: Http) { }

    getGradeCourses(): Observable<IGradeCourse[]> {
        return this._http.get("http://localhost:5570/api/GradeCourse/GetGradeCourses")
            .map((response: Response) => <IGradeCourse[]>response.json());
    };

    saveGradeCourse(GradeCourse: IGradeCourse): Observable<any> {
        let bodyString = JSON.stringify(GradeCourse); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/GradeCourse/SaveGradeCourse", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateGradeCourse(GradeCourse: IGradeCourse): Observable<any> {
        let bodyString = JSON.stringify(GradeCourse); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/GradeCourse/UpdateGradeCourse", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteGradeCourse(GradeCourse: IGradeCourse): Observable<any> {
        let bodyString = JSON.stringify(GradeCourse); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/GradeCourse/DeleteGradeCourse", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

}
