import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { teacherService } from '../service/teacher.service';
import { lookupService } from '../../shared/services/lookup.service';

import { ITeacher } from '../interface/teacher.interface';
import { ILookup } from '../../shared/interfaces/lookup.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/admission/template/teacher.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class teacherComponent {
    private _teacherService: teacherService;
    private _lookupService: lookupService;
    private _alertService: AlertService;

    constructor(_teacherService: teacherService, _lookupService: lookupService, _alertService: AlertService) {
        this._teacherService = _teacherService;
        this._lookupService = _lookupService;

        this._alertService = _alertService;
    }

    ListOfGenders: ILookup[] = [];
    ListOfRegions: ILookup[] = [];
    ListOfSubCitys: ILookup[] = [];
    ListOfWoredas: ILookup[] = [];
    ListOfCampuses: ILookup[] = [];
    ListOfDepartments: ILookup[] = [];
    ListOfMaritalStatuses: ILookup[] = [];

    ListOfTeachers: ITeacher[] = [];

    teacher: ITeacher = {
        ID: 0,
        Fullname: '',
        MotherName: '',
        BirthDate: new Date(),
        PhoneNumber: '',
        Email: '',
        FieldOfStudy: '',
        YearOfExperience: 0,
        SkillDescription: '',
        HouseNo: '',
        HiredDate: new Date(),
        Status: 'Approved',

        GenderID: 0,
        CampusID: 0,
        RegionID: 0,
        SubCityID: 0,
        WoredaID: 0,
        DepartmentID: 0,
        MartialStatusID: 0,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.teacher.ID = 0;
        this.teacher.Fullname = '';
        this.teacher.MotherName = '';
        this.teacher.BirthDate = new Date();
        this.teacher.PhoneNumber = '';
        this.teacher.Email = '';
        this.teacher.FieldOfStudy = '';
        this.teacher.YearOfExperience = 0;
        this.teacher.SkillDescription = '';
        this.teacher.HouseNo = '';
        this.teacher.HiredDate = new Date();
        this.teacher.Status = '';

        this.teacher.GenderID = 0;
        this.teacher.CampusID = 0;
        this.teacher.RegionID = 0;
        this.teacher.SubCityID = 0;
        this.teacher.WoredaID = 0;
        this.teacher.DepartmentID = 0;
        this.teacher.MartialStatusID = 0;

        this.teacher.CreatedBy = 'bereket';
        this.teacher.CreatedDate = new Date();
        this.teacher.UpdatedBy = '';
        this.teacher.UpdatedDate = null;

        this.LoadGenders();
        this.LoadCampuses();
        this.LoadRegions();
        this.LoadSubCitys();
        this.LoadWoredas();

        this.LoadDepartments();
        this.LoadMaritalStatuses();

        this.LoadTeachers();
    }

    SelectedGenderID: number;
    SelectedCampusID: number;
    SelectedRegionID: number;
    SelectedSubCityID: number;
    SelectedWoredaID: number;

    SelectedDepartmentID: number;
    SelectedMaritalStatusID: number;

    LoadGenders(): void {
        this._lookupService.getGenders()
            .subscribe(resultData => {
                this.ListOfGenders = resultData;
            }, error => {
                alert('getGenders failed!');
            });
    };

    LoadRegions(): void {
        this._lookupService.getRegions()
            .subscribe(resultData => {
                this.ListOfRegions = resultData;
            }, error => {
                alert('getRegions failed!');
            });
    };

    LoadSubCitys(): void {
        this._lookupService.getSubcitys()
            .subscribe(resultData => {
                this.ListOfSubCitys = resultData;
            }, error => {
                alert('getSubCitys failed!');
            });
    };

    LoadWoredas(): void {
        this._lookupService.getWoredas()
            .subscribe(resultData => {
                this.ListOfWoredas = resultData;
            }, error => {
                alert('getWoredas failed!');
            });
    };

    LoadCampuses(): void {
        this._lookupService.getCampuses()
            .subscribe(resultData => {
                this.ListOfCampuses = resultData;
            }, error => {
                alert('getCampuses failed!');
            });
    };

    LoadDepartments(): void {
        this._lookupService.getDepartments()
            .subscribe(resultData => {
                this.ListOfDepartments = resultData;
            }, error => {
                alert('getDepartments failed!');
            });
    };

    LoadMaritalStatuses(): void {
        this._lookupService.getMaritalStatuses()
            .subscribe(resultData => {
                this.ListOfMaritalStatuses = resultData;
            }, error => {
                alert('getMaritalStatuses failed!');
            });
    };

    LoadTeachers(): void {
        this._teacherService.getTeachers()
            .subscribe(resultData => {
                this.ListOfTeachers = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getTeachers failed');
            });
    };

    LoadSingleTeacher(SelectedTeacher: ITeacher): void {
        this.teacher = SelectedTeacher;

        this.SelectedGenderID = this.teacher.GenderID;
        this.SelectedCampusID = this.teacher.CampusID;
        this.SelectedRegionID = this.teacher.RegionID;
        this.SelectedSubCityID = this.teacher.SubCityID;
        this.SelectedWoredaID = this.teacher.WoredaID;
        this.SelectedDepartmentID = this.teacher.DepartmentID;
        this.SelectedMaritalStatusID = this.teacher.MartialStatusID;
    };

    IsValid(teacher: ITeacher): boolean {
        if (teacher.BirthDate == null) {
            this._alertService.error("Please enter Birth Date.");
            return false;
        }
        else if (teacher.CampusID == 0) {
            this._alertService.error("Please select Campus.");
            return false;
        }
        else if (teacher.DepartmentID == 0) {
            this._alertService.error("Please select Department.");
            return false;
        }
        else if (teacher.Email == "") {
            this._alertService.error("Please enter Email.");
            return false;
        }
        else if (teacher.FieldOfStudy == "") {
            this._alertService.error("Please enter Field of Study.");
            return false;
        }
        else if (teacher.Fullname == "") {
            this._alertService.error("Please enter Fullname.");
            return false;
        }
        else if (teacher.GenderID == 0) {
            this._alertService.error("Please select Gender.");
            return false;
        }
        else if (teacher.HiredDate == null) {
            this._alertService.error("Please enter Hired Date.");
            return false;
        }
        else if (teacher.HouseNo == "") {
            this._alertService.error("Please enter House No.");
            return false;
        }
        else if (teacher.MartialStatusID == 0) {
            this._alertService.error("Please select Martial Status.");
            return false;
        }
        else if (teacher.MotherName == "") {
            this._alertService.error("Please enter Mother Name.");
            return false;
        }
        else if (teacher.PhoneNumber == "") {
            this._alertService.error("Please enter Phone Number.");
            return false;
        }
        else if (teacher.RegionID == 0) {
            this._alertService.error("Please select Region.");
            return false;
        }
        else if (teacher.SubCityID == 0) {
            this._alertService.error("Please select Sub City.");
            return false;
        }
        else if (teacher.WoredaID == 0) {
            this._alertService.error("Please select Woreda.");
            return false;
        }
        else if (teacher.SkillDescription == "") {
            this._alertService.error("Please enter Skill Description.");
            return false;
        }
        else if (teacher.YearOfExperience == 0) {
            this._alertService.error("Please enter Year of Experience.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateTeacher(): void {
        this.teacher.GenderID = this.SelectedGenderID;
        this.teacher.CampusID = this.SelectedCampusID;
        this.teacher.RegionID = this.SelectedRegionID;
        this.teacher.SubCityID = this.SelectedSubCityID;
        this.teacher.WoredaID = this.SelectedWoredaID;
        this.teacher.DepartmentID = this.SelectedDepartmentID;
        this.teacher.MartialStatusID = this.SelectedMaritalStatusID;

        if (this.IsValid(this.teacher) == true) {
            if (this.teacher.ID == 0) {
                this._teacherService.saveTeacher(this.teacher)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadTeachers();
                            //return true;
                        }
                        else {
                            this._alertService.error("Save Failed");
                            //return false;
                        }
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._teacherService.updateTeacher(this.teacher)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadTeachers();
                            //return true;
                        }
                        else {
                            this._alertService.error("Update Failed");
                            //return false;
                        }
                    }, error => {
                        this._alertService.error("Update Failed");
                    });
            }
        }
    };

    DeleteTeacher(SelectedTeacher: ITeacher): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherService.deleteTeacher(SelectedTeacher)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadTeachers();
                }, error => {
                    this._alertService.error("Delete failed");
                    alert('Delete failed');
                });
        }
    };
}
