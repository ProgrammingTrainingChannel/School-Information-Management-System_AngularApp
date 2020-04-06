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
var router_1 = require("@angular/router");
var meetingSchedule_service_1 = require("../../meeting/service/meetingSchedule.service");
var index_1 = require("../../_services/index");
var scheduleComponent = /** @class */ (function () {
    function scheduleComponent(route, router, _lookupService, _scheduleService, _alertService) {
        this.route = route;
        this.router = router;
        this.ListOfMeetingTypes = [];
        this.ListOfMeetingSchedules = [];
        this.meetingSchedule = {
            ID: 0,
            MeetingTypeID: 0,
            Title: '',
            Description: '',
            StartDate: new Date(),
            StartTime: '',
            EndDate: new Date(),
            EndTime: '',
            GeneralAgenda: '',
            Organizer: '',
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: null
        };
        this._lookupService = _lookupService;
        this._scheduleService = _scheduleService;
        this._alertService = _alertService;
        this._router = router;
    }
    scheduleComponent.prototype.ngOnInit = function () {
        this.meetingSchedule.ID = 0;
        this.meetingSchedule.MeetingTypeID = 0;
        this.meetingSchedule.Title = '';
        this.meetingSchedule.Description = '';
        this.meetingSchedule.StartDate = new Date();
        this.meetingSchedule.StartTime = '';
        this.meetingSchedule.EndDate = new Date();
        this.meetingSchedule.EndTime = '';
        this.meetingSchedule.GeneralAgenda = '';
        this.meetingSchedule.Organizer = '';
        this.meetingSchedule.CreatedBy = 'bereket';
        this.meetingSchedule.CreatedDate = new Date();
        this.meetingSchedule.UpdatedBy = '';
        this.meetingSchedule.UpdatedDate = null;
        this.LoadMeetingTypes();
        this.LoadMeetingSchedules();
    };
    ;
    scheduleComponent.prototype.LoadMeetingTypes = function () {
        var _this = this;
        this._lookupService.getMeetingTypes()
            .subscribe(function (resultData) {
            _this.ListOfMeetingTypes = resultData;
        }, function (error) {
            if (error.status == 401) {
                var link = ['/login'];
                _this._router.navigate(link);
            }
            else {
                _this._alertService.error("Something went wrong. Please try again.");
            }
        });
    };
    ;
    scheduleComponent.prototype.LoadMeetingSchedules = function () {
        var _this = this;
        this._scheduleService.getMeetingSchedules()
            .subscribe(function (resultData) {
            _this.ListOfMeetingSchedules = resultData;
        }, function (error) {
            if (error.status == 401) {
                var link = ['/login'];
                _this._router.navigate(link);
            }
            else {
                _this._alertService.error("Something went wrong. Please try again.");
            }
        });
    };
    ;
    scheduleComponent.prototype.LoadSingleMeetingSchedule = function (SelectedMeetingSchedule) {
        this.meetingSchedule = SelectedMeetingSchedule;
        this.SelectedMeetingTypeID = this.meetingSchedule.MeetingTypeID;
    };
    ;
    scheduleComponent.prototype.IsValid = function (meetingSchedule) {
        if (meetingSchedule.Description == "") {
            this._alertService.error("Please enter Description.");
            return false;
        }
        else if (meetingSchedule.EndDate == null) {
            this._alertService.error("Please enter End Date.");
            return false;
        }
        else if (meetingSchedule.EndTime == "") {
            this._alertService.error("Please enter End Time.");
            return false;
        }
        else if (meetingSchedule.GeneralAgenda == "") {
            this._alertService.error("Please enter General Agenda.");
            return false;
        }
        else if (meetingSchedule.MeetingTypeID == 0) {
            this._alertService.error("Please select Meeting Type.");
            return false;
        }
        else if (meetingSchedule.Organizer == "") {
            this._alertService.error("Please enter Organizer.");
            return false;
        }
        else if (meetingSchedule.StartDate == null) {
            this._alertService.error("Please enter Start Date.");
            return false;
        }
        else if (meetingSchedule.StartDate > meetingSchedule.EndDate) {
            this._alertService.error("The startdate can not be greater than end date.");
            return false;
        }
        else if (meetingSchedule.StartTime == "") {
            this._alertService.error("Please enter Start Time.");
            return false;
        }
        else if (meetingSchedule.Title == "") {
            this._alertService.error("Please enter Title.");
            return false;
        }
        else {
            return true;
        }
    };
    scheduleComponent.prototype.SaveUpdateMeetingSchedule = function () {
        var _this = this;
        this.meetingSchedule.MeetingTypeID = this.SelectedMeetingTypeID;
        if (this.IsValid(this.meetingSchedule) == true) {
            if (this.meetingSchedule.ID == 0) {
                this._scheduleService.saveMeetingSchedule(this.meetingSchedule)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadMeetingSchedules();
                        //return true;
                    }
                    else {
                        _this._alertService.success("Save Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
            else {
                this._scheduleService.updateMeetingSchedule(this.meetingSchedule)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadMeetingSchedules();
                        //return true;
                    }
                    else {
                        _this._alertService.success("Update Failed");
                        //return false;
                    }
                }, function (error) {
                    if (error.status == 401) {
                        var link = ['/login'];
                        _this._router.navigate(link);
                    }
                    else {
                        _this._alertService.error("Something went wrong. Please try again.");
                    }
                });
            }
        }
    };
    ;
    scheduleComponent.prototype.DeleteMeetingSchedule = function (SelectedMeetingSchedule) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._scheduleService.deleteMeetingSchedule(SelectedMeetingSchedule)
                .subscribe(function (result) {
                _this.LoadMeetingSchedules();
            }, function (error) {
                if (error.status == 401) {
                    var link = ['/login'];
                    _this._router.navigate(link);
                }
                else {
                    _this._alertService.error("Something went wrong. Please try again.");
                }
            });
        }
    };
    ;
    scheduleComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/meeting/template/schedule.component.html',
            styleUrls: ['/app/attendance/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, lookup_service_1.lookupService, meetingSchedule_service_1.scheduleService, index_1.AlertService])
    ], scheduleComponent);
    return scheduleComponent;
}());
exports.scheduleComponent = scheduleComponent;
//# sourceMappingURL=schedule.component.js.map