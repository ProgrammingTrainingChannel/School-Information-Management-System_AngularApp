import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ILookup } from '../../shared/interfaces/lookup.interface';

@Injectable()
export class lookupService {

    constructor(private _http: Http) { }

    getGenders(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getAllGenders')
            .map((response: Response) => <ILookup[]>response.json());
    };

    saveUpdateGender(gender: ILookup): Observable<ILookup[]> {
        let bodyString = JSON.stringify(gender); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:57812/api/Shared/SaveUpdateGender", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    deleteGender(gender: ILookup): Observable<ILookup[]> {
        let bodyString = JSON.stringify(gender); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post("http://localhost:57812/api/Shared/DeleteGender", bodyString, options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 

    getAbsenceReasons(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getAbsenceReasons')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getAllowanceTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getAllowanceTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getDeductionTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getDeductionTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getDepartments(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getDepartments')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getDisabilityTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getDisabilityTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEducationLevels(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getEducationLevels')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEducationTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getEducationTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEmployementTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getEmployementTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getJobPositions(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getJobPositions')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEthincities(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getEthincities')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getLanguages(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getLanguages')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getLeaveTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getLeaveTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getMaritalStatuses(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getMaritalStatuses')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getNationalities(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getNationalities')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getPenaltyTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getPenaltyTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getRelationshipTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getRelationshipTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getTermintionReasons(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getTermintionReasons')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getTransferReasons(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getTransferReasons')
            .map((response: Response) => <ILookup[]>response.json());
    };

    //
    getRegions(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getRegions')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getCities(regionID: number): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getCities?regionID=' + regionID)
            .map((response: Response) => <ILookup[]>response.json());
    };

    getWoredas(cityID: number): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getWoredas?cityID=' + cityID)
            .map((response: Response) => <ILookup[]>response.json());
    };

    getKebeles(woredaID: number): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getKebeles?woredaID=' + woredaID)
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEfficiencyLevels(): Observable<ILookup[]> {
        return this._http.get('http://localhost:57812/api/Shared/getEfficiencyLevels')
            .map((response: Response) => <ILookup[]>response.json());
    };

}