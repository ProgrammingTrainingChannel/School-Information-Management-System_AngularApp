import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { ActivatedRoute, Router } from '@angular/router';

import { scheduleService } from '../../meeting/service/meetingSchedule.service';
import { AlertService } from '../../_services/index';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IMeetingSchedule } from '../../meeting/interface/meetingSchedule.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/meeting/template/schedule.component.html',
    styleUrls: ['/app/attendance/menu.component.css']
})
export class scheduleComponent {
    private _lookupService: lookupService;
    private _scheduleService: scheduleService;
    private _alertService: AlertService;
    private _router: Router;

    constructor(private route: ActivatedRoute, private router: Router, _lookupService: lookupService, _scheduleService: scheduleService, _alertService: AlertService) {
        this._lookupService = _lookupService;
        this._scheduleService = _scheduleService;
        this._alertService = _alertService;
        this._router = router;
    }

    ListOfMeetingTypes: ILookup[] = [];

    ListOfMeetingSchedules: IMeetingSchedule[] = [];

    meetingSchedule: IMeetingSchedule = {
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

    ngOnInit() {
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

    SelectedMeetingTypeID: number;

    LoadMeetingTypes(): void {
        this._lookupService.getMeetingTypes()
            .subscribe(resultData => {
                this.ListOfMeetingTypes = resultData;
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

    LoadMeetingSchedules(): void {
        this._scheduleService.getMeetingSchedules()
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

    LoadSingleMeetingSchedule(SelectedMeetingSchedule: IMeetingSchedule): void {
        this.meetingSchedule = SelectedMeetingSchedule;
        
        this.SelectedMeetingTypeID = this.meetingSchedule.MeetingTypeID;
    };

    IsValid(meetingSchedule: IMeetingSchedule): boolean {
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
    }

    SaveUpdateMeetingSchedule(): void {
        this.meetingSchedule.MeetingTypeID = this.SelectedMeetingTypeID;

        if (this.IsValid(this.meetingSchedule) == true) {
            if (this.meetingSchedule.ID == 0) {
                this._scheduleService.saveMeetingSchedule(this.meetingSchedule)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadMeetingSchedules();
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
                this._scheduleService.updateMeetingSchedule(this.meetingSchedule)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadMeetingSchedules();
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

    DeleteMeetingSchedule(SelectedMeetingSchedule: IMeetingSchedule): void {
        if (confirm('Are you sure you want to delete this record?')) {
            this._scheduleService.deleteMeetingSchedule(SelectedMeetingSchedule)
                .subscribe(result => {
                    this.LoadMeetingSchedules();
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