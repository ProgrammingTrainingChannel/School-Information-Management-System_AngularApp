import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { lookupService } from '../../shared/services/lookup.service';
import { studentService } from '../service/student.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../shared/interfaces/gradeSection.interface';
import { IStudent } from '../interface/student.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/admission/template/student.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class studentComponent {
    private _lookupService: lookupService;
    private _studentService: studentService;
    private _alertService: AlertService;

    constructor(_lookupService: lookupService, _studentService: studentService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._alertService = _alertService;
    }

    ListOfGenders: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfRegions: ILookup[] = [];
    ListOfSubCitys: ILookup[] = [];
    ListOfWoredas: ILookup[] = [];
    ListOfCampuses: ILookup[] = [];
    ListOfStudents: IStudent[] = [];

    student: IStudent = {
        ID: 0,
        Fullname: '',
        MotherName: '',
        HouseNo: '',
        IsSponsored: '',
        IsHandicaped: '',
        AdmissionYear: 0,
        BirthDate: '',

        GenderID: null,
        CampusID: null,
        GradeSectionID: null,
        RegionID: null,
        WoredaID: null,
        SubCityID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.student.ID = 0;
        this.student.Fullname = '';
        this.student.MotherName = '';
        this.student.HouseNo = '';
        this.student.IsSponsored = '';
        this.student.IsHandicaped = '';
        this.student.AdmissionYear = 0;
        this.student.BirthDate = '';

        this.student.GenderID = 0;
        this.student.CampusID = 0;
        this.student.GradeSectionID = 0;
        this.student.RegionID = 0;
        this.student.WoredaID = 0;
        this.student.SubCityID = 0;

        this.student.CreatedBy = 'abenezer';
        this.student.CreatedDate = new Date();


        this.LoadGenders();
        this.LoadGradeSections();
        this.LoadRegions();
        this.LoadSubCitys();
        this.LoadWoredas();
        this.LoadCampuses();
        this.LoadStudents();
       
    };

    SelectedGenderID: number;
    SelectedCampusID: number;
    SelectedGradeSectionID: number;
    SelectedRegionID: number;
    SelectedWoredaID: number;
    SelectedSubcityID: number;

    LoadStudents(): void {
        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };

    LoadGenders(): void {
        this._lookupService.getGenders()
            .subscribe(resultData => {
                this.ListOfGenders = resultData;
            }, error => {
                alert('getGenders failed!');
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

    LoadSingleStudent(SelectedStudent: IStudent): void {
        this.student = SelectedStudent;

        this.SelectedGenderID = this.student.GenderID;
        this.SelectedRegionID = this.student.RegionID;
        this.SelectedSubcityID = this.student.SubCityID;
        this.SelectedWoredaID = this.student.WoredaID;
        this.SelectedCampusID = this.student.CampusID;
        this.SelectedGradeSectionID = this.student.GradeSectionID;
    };

    IsValid(student: IStudent): boolean {
        if (student.AdmissionYear == 0) {
            this._alertService.error("Please enter Admission Year.");
            return false;
        }
        else if (student.BirthDate == null) {
            this._alertService.error("Please enter BirthDate.");
            return false;
        }
        else if (student.CampusID == 0) {
            this._alertService.error("Please select Campus.");
            return false;
        }
        else if (student.Fullname == "") {
            this._alertService.error("Please enter Fullname.");
            return false;
        }
        else if (student.GenderID == 0) {
            this._alertService.error("Please select Gender.");
            return false;
        }
        else if (student.GradeSectionID == 0) {
            this._alertService.error("Please select Grade Section.");
            return false;
        }
        else if (student.HouseNo == "") {
            this._alertService.error("Please enter House No.");
            return false;
        }
        else if (student.MotherName == "") {
            this._alertService.error("Please enter Mother Name.");
            return false;
        }
        else if (student.RegionID == 0) {
            this._alertService.error("Please select Region.");
            return false;
        }
        else if (student.SubCityID == 0) {
            this._alertService.error("Please select SubCity.");
            return false;
        }
        else if (student.WoredaID == 0) {
            this._alertService.error("Please select Woreda.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudent(): void {
        this.student.GradeSectionID = this.SelectedGradeSectionID;
        this.student.GenderID = this.SelectedGenderID;
        this.student.CampusID = this.SelectedCampusID;
        this.student.RegionID = this.SelectedRegionID;
        this.student.SubCityID = this.SelectedSubcityID;
        this.student.WoredaID = this.SelectedWoredaID;

        if (this.IsValid(this.student) == true) {
            if (this.student.ID == 0) {
                this._studentService.saveStudent(this.student)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadStudents();
                            //return true;
                        }
                        else {
                            this._alertService.error("Failed To Save");
                            //return false;
                        }
                    }, error => {
                        this._alertService.error("Save Failed");
                    });
            }
            else {
                this._studentService.updateStudent(this.student)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadStudents();
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

    DeleteStudent(student: IStudent): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentService.deleteStudent(student)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadStudents();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}