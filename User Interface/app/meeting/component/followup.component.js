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
var meetingFollowup_service_1 = require("../../meeting/service/meetingFollowup.service");
var index_1 = require("../../_services/index");
var followupComponent = /** @class */ (function () {
    function followupComponent(route, router, _lookupService, _meetingScheduleService, _meetingFollowupService, _alertService) {
        this.route = route;
        this.router = router;
        this.ListOfMeetingSchedules = [];
        this.ListOfMeetingFollowups = [];
        this.meetingFollowup = {
            ID: 0,
            MeetingScheduleID: 0,
            DetailMinute: '',
            CreatedBy: 'bereket',
            CreatedDate: new Date(),
            UpdatedBy: '',
            UpdatedDate: null
        };
        this._lookupService = _lookupService;
        this._meetingScheduleService = _meetingScheduleService;
        this._meetingFollowupService = _meetingFollowupService;
        this._alertService = _alertService;
        this._router = router;
    }
    followupComponent.prototype.ngOnInit = function () {
        this.meetingFollowup.ID = 0;
        this.meetingFollowup.MeetingScheduleID = 0;
        this.meetingFollowup.DetailMinute = '';
        this.meetingFollowup.CreatedBy = 'bereket';
        this.meetingFollowup.CreatedDate = new Date();
        this.meetingFollowup.UpdatedBy = '';
        this.meetingFollowup.UpdatedDate = null;
        this.LoadMeetingSchedules();
        this.LoadMeetingFollowups();
    };
    ;
    followupComponent.prototype.LoadMeetingSchedules = function () {
        var _this = this;
        this._meetingScheduleService.getMeetingSchedules()
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
    followupComponent.prototype.LoadMeetingFollowups = function () {
        var _this = this;
        this._meetingFollowupService.getMeetingFollowups()
            .subscribe(function (resultData) {
            _this.ListOfMeetingFollowups = resultData;
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
    followupComponent.prototype.LoadSingleMeetingFollowup = function (SelectedMeetingFollowup) {
        this.meetingFollowup = SelectedMeetingFollowup;
        this.SelectedMeetingScheduleID = this.meetingFollowup.MeetingScheduleID;
    };
    ;
    followupComponent.prototype.IsValid = function (meetingFollowup) {
        if (meetingFollowup.DetailMinute == "") {
            this._alertService.error("Please enter Detail Minute.");
            return false;
        }
        else if (meetingFollowup.MeetingScheduleID == 0) {
            this._alertService.error("Please select Meeting Schedule.");
            return false;
        }
        else {
            return true;
        }
    };
    followupComponent.prototype.SaveUpdateMeetingFollowup = function () {
        var _this = this;
        this.meetingFollowup.MeetingScheduleID = this.SelectedMeetingScheduleID;
        if (this.IsValid(this.meetingFollowup) == true) {
            if (this.meetingFollowup.ID == 0) {
                this._meetingFollowupService.saveMeetingFollowup(this.meetingFollowup)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadMeetingFollowups();
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
                this._meetingFollowupService.updateMeetingFollowup(this.meetingFollowup)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadMeetingFollowups();
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
    followupComponent.prototype.DeleteMeetingFollowup = function (SelectedMeetingFollowup) {
        var _this = this;
        if (confirm('Are you sure you want to delete this record?')) {
            this._meetingFollowupService.deleteMeetingFollowup(SelectedMeetingFollowup)
                .subscribe(function (result) {
                _this.LoadMeetingFollowups();
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
    followupComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/meeting/template/followup.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, lookup_service_1.lookupService, meetingSchedule_service_1.scheduleService, meetingFollowup_service_1.followupService, index_1.AlertService])
    ], followupComponent);
    return followupComponent;
}());
exports.followupComponent = followupComponent;
//# sourceMappingURL=followup.component.js.map