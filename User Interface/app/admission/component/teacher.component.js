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
var teacher_service_1 = require("../service/teacher.service");
var lookup_service_1 = require("../../shared/services/lookup.service");
var index_1 = require("../../_services/index");
var teacherComponent = /** @class */ (function () {
    function teacherComponent(_teacherService, _lookupService, _alertService) {
        this.ListOfGenders = [];
        this.ListOfRegions = [];
        this.ListOfSubCitys = [];
        this.ListOfWoredas = [];
        this.ListOfCampuses = [];
        this.ListOfDepartments = [];
        this.ListOfMaritalStatuses = [];
        this.ListOfTeachers = [];
        this.teacher = {
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
        this._teacherService = _teacherService;
        this._lookupService = _lookupService;
        this._alertService = _alertService;
    }
    teacherComponent.prototype.ngOnInit = function () {
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
    };
    teacherComponent.prototype.LoadGenders = function () {
        var _this = this;
        this._lookupService.getGenders()
            .subscribe(function (resultData) {
            _this.ListOfGenders = resultData;
        }, function (error) {
            alert('getGenders failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadRegions = function () {
        var _this = this;
        this._lookupService.getRegions()
            .subscribe(function (resultData) {
            _this.ListOfRegions = resultData;
        }, function (error) {
            alert('getRegions failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadSubCitys = function () {
        var _this = this;
        this._lookupService.getSubcitys()
            .subscribe(function (resultData) {
            _this.ListOfSubCitys = resultData;
        }, function (error) {
            alert('getSubCitys failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadWoredas = function () {
        var _this = this;
        this._lookupService.getWoredas()
            .subscribe(function (resultData) {
            _this.ListOfWoredas = resultData;
        }, function (error) {
            alert('getWoredas failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadCampuses = function () {
        var _this = this;
        this._lookupService.getCampuses()
            .subscribe(function (resultData) {
            _this.ListOfCampuses = resultData;
        }, function (error) {
            alert('getCampuses failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadDepartments = function () {
        var _this = this;
        this._lookupService.getDepartments()
            .subscribe(function (resultData) {
            _this.ListOfDepartments = resultData;
        }, function (error) {
            alert('getDepartments failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadMaritalStatuses = function () {
        var _this = this;
        this._lookupService.getMaritalStatuses()
            .subscribe(function (resultData) {
            _this.ListOfMaritalStatuses = resultData;
        }, function (error) {
            alert('getMaritalStatuses failed!');
        });
    };
    ;
    teacherComponent.prototype.LoadTeachers = function () {
        var _this = this;
        this._teacherService.getTeachers()
            .subscribe(function (resultData) {
            _this.ListOfTeachers = resultData;
        }, function (error) {
            _this._alertService.error("Loaded");
            alert('getTeachers failed');
        });
    };
    ;
    teacherComponent.prototype.LoadSingleTeacher = function (SelectedTeacher) {
        this.teacher = SelectedTeacher;
        this.SelectedGenderID = this.teacher.GenderID;
        this.SelectedCampusID = this.teacher.CampusID;
        this.SelectedRegionID = this.teacher.RegionID;
        this.SelectedSubCityID = this.teacher.SubCityID;
        this.SelectedWoredaID = this.teacher.WoredaID;
        this.SelectedDepartmentID = this.teacher.DepartmentID;
        this.SelectedMaritalStatusID = this.teacher.MartialStatusID;
    };
    ;
    teacherComponent.prototype.IsValid = function (teacher) {
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
    };
    teacherComponent.prototype.SaveUpdateTeacher = function () {
        var _this = this;
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
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadTeachers();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Save Failed");
                        //return false;
                    }
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._teacherService.updateTeacher(this.teacher)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadTeachers();
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
    teacherComponent.prototype.DeleteTeacher = function (SelectedTeacher) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._teacherService.deleteTeacher(SelectedTeacher)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successfully");
                _this.LoadTeachers();
            }, function (error) {
                _this._alertService.error("Delete failed");
                alert('Delete failed');
            });
        }
    };
    ;
    teacherComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/admission/template/teacher.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [teacher_service_1.teacherService, lookup_service_1.lookupService, index_1.AlertService])
    ], teacherComponent);
    return teacherComponent;
}());
exports.teacherComponent = teacherComponent;
//# sourceMappingURL=teacher.component.js.map