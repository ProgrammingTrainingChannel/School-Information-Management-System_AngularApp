"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lookup_service_1 = require("../../shared/services/lookup.service");
var emergencyContact_service_1 = require("../../admission/service/emergencyContact.service");
var index_1 = require("../../_services/index");
var emergencyContactComponent = /** @class */ (function () {
    function emergencyContactComponent(_lookupService, _emergencyContactService, _alertService) {
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfRelationshipTypes = [];
        this.ListOfStudents = [];
        this.ListOfEmergencyContacts = [];
        this.emergencyContact = {
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
        this._lookupService = _lookupService;
        this._emergencyContactService = _emergencyContactService;
        this._alertService = _alertService;
    }
    emergencyContactComponent.prototype.ngOnInit = function () {
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
    ;
    emergencyContactComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._lookupService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    emergencyContactComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        this._lookupService.getGradeSections()
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getGradeSections failed!');
        });
    };
    ;
    emergencyContactComponent.prototype.LoadRelationshipTypes = function () {
        var _this = this;
        this._lookupService.getRelationshipTypes()
            .subscribe(function (resultData) {
            _this.ListOfRelationshipTypes = resultData;
        }, function (error) {
            alert('getRelationshipTypes failed!');
        });
    };
    ;
    emergencyContactComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._lookupService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    emergencyContactComponent.prototype.LoadEmergencyContacts = function () {
        var _this = this;
        this._lookupService.getEmergencyContacts()
            .subscribe(function (resultData) {
            _this.ListOfEmergencyContacts = resultData;
        }, function (error) {
            alert('getEmergencyContacts failed!');
        });
    };
    ;
    emergencyContactComponent.prototype.LoadSingleEmergencyContact = function (SelectedEmergencyContact) {
        this.emergencyContact = SelectedEmergencyContact;
    };
    ;
    emergencyContactComponent.prototype.IsValid = function (emergencyContact) {
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
    };
    emergencyContactComponent.prototype.SaveUpdateEmergencyContact = function () {
        var _this = this;
        this.emergencyContact.RelationshipTypeID = this.SelectedRelationshipTypeID;
        this.emergencyContact.StudentID = this.SelectedStudentID;
        if (this.IsValid(this.emergencyContact) == true) {
            if (this.emergencyContact.ID == 0) {
                this._emergencyContactService.saveEmergencyContact(this.emergencyContact)
                    .subscribe(function (result) {
                    _this._alertService.success("Saved Successfully");
                    _this.LoadEmergencyContacts();
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._emergencyContactService.updateEmergencyContact(this.emergencyContact)
                    .subscribe(function (result) {
                    _this._alertService.success("Updated Successfully");
                    _this.LoadEmergencyContacts();
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    emergencyContactComponent.prototype.DeleteEmergencyContact = function (emergencyContact) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._emergencyContactService.deleteEmergencyContact(emergencyContact)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    emergencyContactComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/admission/template/emergencyContact.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, emergencyContact_service_1.emergencyContactService, index_1.AlertService])
    ], emergencyContactComponent);
    return emergencyContactComponent;
}());
exports.emergencyContactComponent = emergencyContactComponent;
//# sourceMappingURL=emergencyContact.component.js.map