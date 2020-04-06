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
var student_service_1 = require("../service/student.service");
var index_1 = require("../../_services/index");
var studentComponent = /** @class */ (function () {
    function studentComponent(_lookupService, _studentService, _alertService) {
        this.ListOfGenders = [];
        this.ListOfGradeSections = [];
        this.ListOfRegions = [];
        this.ListOfSubCitys = [];
        this.ListOfWoredas = [];
        this.ListOfCampuses = [];
        this.ListOfStudents = [];
        this.student = {
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
        this._lookupService = _lookupService;
        this._studentService = _studentService;
        this._alertService = _alertService;
    }
    studentComponent.prototype.ngOnInit = function () {
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
    ;
    studentComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentComponent.prototype.LoadGenders = function () {
        var _this = this;
        this._lookupService.getGenders()
            .subscribe(function (resultData) {
            _this.ListOfGenders = resultData;
        }, function (error) {
            alert('getGenders failed!');
        });
    };
    ;
    studentComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        this._lookupService.getGradeSections()
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getGradeSections failed!');
        });
    };
    ;
    studentComponent.prototype.LoadRegions = function () {
        var _this = this;
        this._lookupService.getRegions()
            .subscribe(function (resultData) {
            _this.ListOfRegions = resultData;
        }, function (error) {
            alert('getRegions failed!');
        });
    };
    ;
    studentComponent.prototype.LoadSubCitys = function () {
        var _this = this;
        this._lookupService.getSubcitys()
            .subscribe(function (resultData) {
            _this.ListOfSubCitys = resultData;
        }, function (error) {
            alert('getSubCitys failed!');
        });
    };
    ;
    studentComponent.prototype.LoadWoredas = function () {
        var _this = this;
        this._lookupService.getWoredas()
            .subscribe(function (resultData) {
            _this.ListOfWoredas = resultData;
        }, function (error) {
            alert('getWoredas failed!');
        });
    };
    ;
    studentComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._lookupService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
        }, function (error) {
            alert('getCampuses failed!');
        });
    };
    ;
    studentComponent.prototype.LoadSingleStudent = function (SelectedStudent) {
        this.student = SelectedStudent;
        this.SelectedGenderID = this.student.GenderID;
        this.SelectedRegionID = this.student.RegionID;
        this.SelectedSubcityID = this.student.SubCityID;
        this.SelectedWoredaID = this.student.WoredaID;
        this.SelectedCampusID = this.student.CampusID;
        this.SelectedGradeSectionID = this.student.GradeSectionID;
    };
    ;
    studentComponent.prototype.IsValid = function (student) {
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
    };
    studentComponent.prototype.SaveUpdateStudent = function () {
        var _this = this;
        this.student.GradeSectionID = this.SelectedGradeSectionID;
        this.student.GenderID = this.SelectedGenderID;
        this.student.CampusID = this.SelectedCampusID;
        this.student.RegionID = this.SelectedRegionID;
        this.student.SubCityID = this.SelectedSubcityID;
        this.student.WoredaID = this.SelectedWoredaID;
        if (this.IsValid(this.student) == true) {
            if (this.student.ID == 0) {
                this._studentService.saveStudent(this.student)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadStudents();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Failed To Save");
                        //return false;
                    }
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._studentService.updateStudent(this.student)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadStudents();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Update Failed");
                        //return false;
                    }
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    studentComponent.prototype.DeleteStudent = function (student) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentService.deleteStudent(student)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadStudents();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/admission/template/student.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [lookup_service_1.lookupService, student_service_1.studentService, index_1.AlertService])
    ], studentComponent);
    return studentComponent;
}());
exports.studentComponent = studentComponent;
//# sourceMappingURL=student.component.js.map