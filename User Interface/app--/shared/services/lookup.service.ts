import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { IStudent } from '../../shared/interfaces/student.interface';
import { ITeacher } from '../../shared/interfaces/teacher.interface';
import { IEmergencyContact } from '../../admission/interface/emergencyContact.interface';

@Injectable()
export class lookupService {

    constructor(private _http: Http) { }

    getRelationshipTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/RelationshipType/GetRelationshipTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEvaluationCriterias(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/EvaluationCriteria/GetEvaluationCriterias')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getExamTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/ExamType/GetExamTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getEmergencyContacts(): Observable<IEmergencyContact[]> {
        return this._http.get('http://localhost:5570/api/EmergencyContact/GetEmergencyContact')
            .map((response: Response) => <IEmergencyContact[]>response.json());
    };

    getPermissionTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/PermissionType/GetPermissionTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getMeetingTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/MeetingType/GetMeetingTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getAcademicQuarters(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/AcademicQuarter/GetAcademicQuarters')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getMaritalStatuses(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/MaritalStatus/GetMaritalStatuses')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getDepartments(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Departement/GetDepartements')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getPenaltyTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/PenaltyType/GetPenaltyTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getCaseTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/CaseType/GetCaseTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getrelationTypes(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/RelationType/GetRelationTypes')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getGenders(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Gender/GetGenders')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getCampuses(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Campus/GetCampuses')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getRegions(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Region/GetRegions')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getSubcitys(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Subcity/GetSubcitys')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getWoredas(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Woreda/GetWoredas')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getCourses(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Course/GetCourses')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getGrades(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/Grade/GetGrades')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getPaymentReasons(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/PaymentReason/GetPaymentReasons')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getPaymentPeriods(): Observable<ILookup[]> {
        return this._http.get('http://localhost:5570/api/PaymentPeriod/GetPaymentPeriods')
            .map((response: Response) => <ILookup[]>response.json());
    };

    getGradeSections(): Observable<IGradeSection[]> {
        return this._http.get('http://localhost:5570/api/GradeSection/GetAllGradeSections')
            .map((response: Response) => <IGradeSection[]>response.json());
    };

    getStudents(): Observable<IStudent[]> {
        return this._http.get('http://localhost:5570/api/Student/GetAllStudents')
            .map((response: Response) => <IStudent[]>response.json());
    };

    getTeachers(): Observable<ITeacher[]> {
        return this._http.get('http://localhost:5570/api/Teacher/GetTeachers')
            .map((response: Response) => <ITeacher[]>response.json());
    };
}
