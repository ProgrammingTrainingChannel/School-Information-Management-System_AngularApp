import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { subcityService } from '../services/subcity.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/subcity.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class subcityComponent {
    private _subcityService: subcityService;
    private _alertService: AlertService;

    constructor(_subcityService: subcityService, _alertService: AlertService) {
        this._subcityService = _subcityService;
        this._alertService = _alertService;
    }

    ListOfSubcitys: IMasterData[] = [];

    subcity: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.subcity.ID = 0;
        this.subcity.Name = '';
        this.subcity.Description = '';

        this.subcity.CreatedBy = 'bereket';
        this.subcity.CreatedDate = new Date();

        this.LoadSubcitys();
    }

    SelectedSubcityID: number;

    LoadSubcitys(): void {
        this._subcityService.getSubcitys()
            .subscribe(resultData => {
                this.ListOfSubcitys = resultData;
            }, error => {
                this._alertService.error("Loaded");
            });
    };

    LoadSingleSubcity(SelectedSubcity: IMasterData): void {
        this.subcity = SelectedSubcity;
    };

    SaveUpdateSubcity(): void {
        if (this.subcity.ID == 0) {
            this._subcityService.saveSubcity(this.subcity)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadSubcitys();
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
            this._subcityService.updateSubcity(this.subcity)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadSubcitys();
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

    DeleteSubcity(SelectedSubcity: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this.subcity = SelectedSubcity;

            this._subcityService.deleteSubcity(this.subcity)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadSubcitys();
                }, error => {
                    this._alertService.error("Delete failed");
                    alert('Delete failed');
                });
        }
    };
}