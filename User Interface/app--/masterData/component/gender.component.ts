import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { genderService } from '../services/gender.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/gender.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class genderComponent {
    private _genderService: genderService;
    private _alertService: AlertService;

    constructor(_genderService: genderService, _alertService: AlertService) {
        this._genderService = _genderService;
        this._alertService = _alertService;
    }

    ListOfGenders: IMasterData[] = [];

    gender: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.gender.ID = 0;
        this.gender.Name = '';
        this.gender.Description = '';

        this.gender.CreatedBy = 'abenezer';
        this.gender.CreatedDate = new Date();

        this.LoadGenders();
    }

    SelectedGenderID: number;

    LoadGenders(): void {
        this._genderService.getGenders()
            .subscribe(resultData => {
                this.ListOfGenders = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getGenders failed');
            });
    };

    LoadSingleGender(SelectedGender: IMasterData): void {
        this.gender = SelectedGender;
    };

    SaveUpdateGender(): void {
        if (this.gender.ID == 0) {
            this._genderService.saveGender(this.gender)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadGenders();
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
            this._genderService.updateGender(this.gender)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadGenders();
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
    };

    DeleteGender(gender: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._genderService.deleteGender(gender)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadGenders();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}