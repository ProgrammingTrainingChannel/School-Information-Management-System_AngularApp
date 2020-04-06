import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';

import { scheduleService } from '../../meeting/service/meetingSchedule.service';
import { followupService } from '../../meeting/service/meetingFollowup.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IMeetingSchedule } from '../../meeting/interface/meetingSchedule.interface';
import { IMeetingFollowup } from '../../meeting/interface/meetingFollowup.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/meeting/template/followup.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class followupComponent {
    private _lookupService: lookupService;
    private _meetingScheduleService: scheduleService;
    private _meetingFollowupService: followupService;
    private _alertService: AlertService;
    private _router: Router;

    constructor(private route: ActivatedRoute, private router: Router, _lookupService: lookupService, _meetingScheduleService: scheduleService, _meetingFollowupService: followupService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._meetingScheduleService = _meetingScheduleService;
        this._meetingFollowupService = _meetingFollowupService;
        this._alertService = _alertService;
        this._router = router;
    }

    ListOfMeetingSchedules: IMeetingSchedule[] = [];

    ListOfMeetingFollowups: IMeetingFollowup[] = [];

    meetingFollowup: IMeetingFollowup = {
        ID: 0,
        MeetingScheduleID: 0,
        DetailMinute: '',

        CreatedBy: 'bereket',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: null
    };

    ngOnInit() {
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

    SelectedMeetingScheduleID: number;

    LoadMeetingSchedules(): void {
        this._meetingScheduleService.getMeetingSchedules()
            .subscribe(resultData => {
                this.ListOfMeetingSchedules = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadMeetingFollowups(): void {
        this._meetingFollowupService.getMeetingFollowups()
            .subscribe(resultData => {
                this.ListOfMeetingFollowups = resultData;
            }, error => {
                if (error.status == 401) {
                    let link = ['/login'];
                    this._router.navigate(link);
                }
                else {
                    this._alertService.error("Something went wrong. Please try again.");
                }
            });
    };

    LoadSingleMeetingFollowup(SelectedMeetingFollowup: IMeetingFollowup): void {
        this.meetingFollowup = SelectedMeetingFollowup;

        this.SelectedMeetingScheduleID = this.meetingFollowup.MeetingScheduleID;
    };

    IsValid(meetingFollowup: IMeetingFollowup): boolean {
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
    }

    SaveUpdateMeetingFollowup(): void {
        this.meetingFollowup.MeetingScheduleID = this.SelectedMeetingScheduleID;

        if (this.IsValid(this.meetingFollowup) == true) {
            if (this.meetingFollowup.ID == 0) {
                this._meetingFollowupService.saveMeetingFollowup(this.meetingFollowup)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadMeetingFollowups();
                            //return true;
                        }
                        else {
                            this._alertService.success("Save Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
            else {
                this._meetingFollowupService.updateMeetingFollowup(this.meetingFollowup)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadMeetingFollowups();
                            //return true;
                        }
                        else {
                            this._alertService.success("Update Failed");
                            //return false;
                        }
                    }, error => {
                        if (error.status == 401) {
                            let link = ['/login'];
                            this._router.navigate(link);
                        }
                        else {
                            this._alertService.error("Something went wrong. Please try again.");
                        }
                    });
            }
        }
    };

    DeleteMeetingFollowup(SelectedMeetingFollowup: IMeetingFollowup): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._meetingFollowupService.deleteMeetingFollowup(SelectedMeetingFollowup)
                .subscribe(result => {
                    this.LoadMeetingFollowups();
                }, error => {
                    if (error.status == 401) {
                        let link = ['/login'];
                        this._router.navigate(link);
                    }
                    else {
                        this._alertService.error("Something went wrong. Please try again.");
                    }
                });
        }
    };
}