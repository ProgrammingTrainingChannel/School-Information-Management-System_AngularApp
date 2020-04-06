import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IEmergencyContact } from '../interface/emergencyContact.interface';

@Injectable()
export class emergencyContactService {

    constructor(private _http: Http) { }

    getEmergencyContacts(): Observable<IEmergencyContact[]> {
        return this._http.get('http://localhost:5570/api/EmergencyContact/GetEmergencyContact')
            .map((response: Response) => <IEmergencyContact[]>response.json());
    };

    saveEmergencyContact(emergencyContact: IEmergencyContact): Observable<any> {
        let bodyString = JSON.stringify(emergencyContact); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/EmergencyContact/SaveEmergencyContact", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    updateEmergencyContact(emergencyContact: IEmergencyContact): Observable<any> {
        let bodyString = JSON.stringify(emergencyContact); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/EmergencyContact/UpdateEmergencyContact", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };

    deleteEmergencyContact(emergencyContact: IEmergencyContact): Observable<any> {
        let bodyString = JSON.stringify(emergencyContact); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:5570/api/EmergencyContact/DeleteEmergencyContact", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    };
}
