import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class loginService {

    constructor(private _http: Http) { }

    login(userName: string, password: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = 'http://localhost:5570/token';

        return this._http.post(url, 'username=' + userName + '&password=' + password + '&grant_type=password', options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => error.json().error || 'Server error'); //...errors if any
    };

}
