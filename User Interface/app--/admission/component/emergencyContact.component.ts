import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { emergencyContactService } from '../../admission/service/emergencyContact.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { IStudent } from '../../shared/interfaces/student.interface';
import { IEmergencyContact } from '../../admission/interface/emergencyContact.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/admission/template/emergencyContact.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class emergencyContactComponent {
    private _lookupService: lookupService;
    private _emergencyContactService: emergencyContactService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _emergencyContactService: emergencyContactService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._emergencyContactService = _emergencyContactService;
        this._alertService = _alertService;
    }

    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfRelationshipTypes: ILookup[] = [];
    ListOfStudents: IStudent[] = [];

    ListOfEmergencyContacts: IEmergencyContact[] = [];

    emergencyContact: IEmergencyContact = {
        ID: 0,
        Fullname: '',
        PhoneNumber: '',
        Email: '',

        StudentID: 0,
        RelationshipTypeID: 0,

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date()
    };

    ngOnInit() {
        this.emergencyContact.ID = 0;
        this.emergencyContact.Fullname = '';
        this.emergencyContact.PhoneNumber = '';
        this.emergencyContact.Email = '';

        this.emergencyContact.StudentID = 0;
        this.emergencyContact.RelationshipTypeID = 0;

        this.emergencyContact.CreatedBy = 'bereket';
        this.emergencyContact.CreatedDate = new Date();
        this.emergencyContact.UpdatedBy = '';
        this.emergencyContact.UpdatedDate = null;

        this.LoadGrades();
        this.LoadGradeSections();
        this.LoadRelationshipTypes();
        this.LoadStudents();

        this.LoadEmergencyContacts();
    };

    SelectedRelationshipTypeID: number;
    SelectedStudentID: number;

    LoadGrades(): void {
        this._lookupService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadGradeSections(): void {
        this._lookupService.getGradeSections()
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                alert('getGradeSections failed!');
            });
    };

    LoadRelationshipTypes(): void {
        this._lookupService.getRelationshipTypes()
            .subscribe(resultData => {
                this.ListOfRelationshipTypes = resultData;
            }, error => {
                alert('getRelationshipTypes failed!');
            });
    };

    LoadStudents(): void {
        this._lookupService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };

    LoadEmergencyContacts(): void {
        this._lookupService.getEmergencyContacts()
            .subscribe(resultData => {
                this.ListOfEmergencyContacts = resultData;
            }, error => {
                alert('getEmergencyContacts failed!');
            });
    };

    LoadSingleEmergencyContact(SelectedEmergencyContact: IEmergencyContact): void {
        this.emergencyContact = SelectedEmergencyContact;
    };

    IsValid(emergencyContact: IEmergencyContact): boolean {
        if (emergencyContact.Email == "") {
            this._alertService.error("Please enter Email.");
            return false;
        }
        else if (emergencyContact.Fullname == "") {
            this._alertService.error("Please enter Fullname.");
            return false;
        }
        else if (emergencyContact.PhoneNumber == "") {
            this._alertService.error("Please enter Phone Number.");
            return false;
        }
        else if (emergencyContact.RelationshipTypeID == 0) {
            this._alertService.error("Please select Relationship Type.");
            return false;
        }
        else if (emergencyContact.StudentID == 0) {
            this._alertService.error("Please select Student.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateEmergencyContact(): void {
        this.emergencyContact.RelationshipTypeID = this.SelectedRelationshipTypeID;
        this.emergencyContact.StudentID = this.SelectedStudentID;

        if (this.IsValid(this.emergencyContact) == true) {
            if (this.emergencyContact.ID == 0) {
                this._emergencyContactService.saveEmergencyContact(this.emergencyContact)
                    .subscribe(result => {
                        this._alertService.success("Saved Successfully");
                        this.LoadEmergencyContacts();
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._emergencyContactService.updateEmergencyContact(this.emergencyContact)
                    .subscribe(result => {
                        this._alertService.success("Updated Successfully");
                        this.LoadEmergencyContacts();
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteEmergencyContact(emergencyContact: IEmergencyContact): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._emergencyContactService.deleteEmergencyContact(emergencyContact)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}