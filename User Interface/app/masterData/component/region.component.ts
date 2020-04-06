import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { regionService } from '../services/region.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/region.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class regionComponent {
    private _regionService: regionService;
    private _alertService: AlertService;

    constructor(_regionService: regionService, _alertService: AlertService) {
        this._regionService = _regionService;
        this._alertService = _alertService;
    }

    ListOfRegions: IMasterData[] = [];

    region: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.region.ID = 0;
        this.region.Name = '';
        this.region.Description = '';

        this.region.CreatedBy = 'bereket';
        this.region.CreatedDate = new Date();

        this.LoadRegions();
    }

    SelectedRegionID: number;

    LoadRegions(): void {
        this._regionService.getRegions()
            .subscribe(resultData => {
                this.ListOfRegions = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getRegions failed');
            });
    };

    LoadSingleRegion(SelectedRegion: IMasterData): void {
        this.region = SelectedRegion;
    };

    SaveUpdateRegion(): void {
        if (this.region.ID == 0) {
            this._regionService.saveRegion(this.region)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
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
            this._regionService.updateRegion(this.region)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
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

    DeleteRegion(): void {
        this._regionService.deleteRegion(this.region)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
            }, error => {
                this._alertService.error("Delete failed");
                alert('Delete failed');
            });
    };
}