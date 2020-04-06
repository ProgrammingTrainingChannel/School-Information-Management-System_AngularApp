import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IMasterData } from '../interface/masterData.interface';
import { campusService } from '../services/campus.service';
import { regionService } from '../services/region.service';
import { woredaService } from '../services/woreda.service';
import { subcityService } from '../services/subcity.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { ICampus } from '../interface/campusData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/campus.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class campusComponent {
    private _campusService: campusService;
    private _regionService: regionService;
    private _woredaService: woredaService;
    private _subcityService: subcityService;
    private _alertService: AlertService;

    constructor(_campusService: campusService, _regionService: regionService, _subcityService: subcityService, _woredaService: woredaService, _alertService: AlertService) {
        this._campusService = _campusService;
        this._regionService = _regionService;
        this._subcityService = _subcityService;
        this._woredaService = _woredaService;
        this._alertService = _alertService;
    }

    ListOfRegions: IMasterData[] = [];
    ListOfSubcities: IMasterData[] = [];
    ListOfWoredas: IMasterData[] = [];
    ListOfCampuses: ICampus[] = [];

    campus: ICampus = {
        ID: 0,
        Name: '',
        PhoneNumber: '',
        Email: '',
        RegionID: null,
        WoredaID: null,
        SubCityID: null,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.campus.ID = 0;
        this.campus.Name = '';
        this.campus.PhoneNumber = '';
        this.campus.Email = '';
        this.campus.RegionID = null;
        this.campus.WoredaID = null;
        this.campus.SubCityID = null;

        this.campus.CreatedBy = 'abenezer';
        this.campus.CreatedDate = new Date();

        this.LoadRegions();
        this.LoadWoredas();
        this.LoadSubcities();

        this.LoadCampuses();
    }

    SelectedCampusID: number;
    SelectedRegionID: number;
    SelectedWoredaID: number;
    SelectedSubcityID: number;

    LoadRegions(): void {
        this._regionService.getRegions()
            .subscribe(resultData => {
                this.ListOfRegions = resultData;
            }, error => {
                alert('getRegions failed!');
            });
    };

    LoadSubcities(): void {
        this._subcityService.getSubcitys()
            .subscribe(resultData => {
                this.ListOfSubcities = resultData;
            }, error => {
                alert('getSubcities failed!');
            });
    };


    LoadWoredas(): void {
        this._woredaService.getWoredas()
            .subscribe(resultData => {
                this.ListOfWoredas = resultData;
            }, error => {
                alert('getWoredas failed!');
            });
    };

    LoadCampuses(): void {
        this._campusService.getCampuses()
            .subscribe(resultData => {
                this.ListOfCampuses = resultData;

                console.log(this.ListOfCampuses);
            }, error => {
                this._alertService.error("Loaded");
                alert('getCampuses failed');
            });
    };

    LoadSingleCampus(SelectedCampus: ICampus): void {
        this.campus = SelectedCampus;

        this.SelectedRegionID = this.campus.RegionID;
        this.SelectedWoredaID = this.campus.WoredaID;
        this.SelectedSubcityID = this.campus.SubCityID;
    };

    SaveUpdateCampus(): void {
        this.campus.RegionID = this.SelectedRegionID;
        this.campus.SubCityID = this.SelectedSubcityID;
        this.campus.WoredaID = this.SelectedWoredaID;

        if (this.campus.ID == 0) {
            this._campusService.saveCampus(this.campus)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadCampuses();
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
            this._campusService.updateCampus(this.campus)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadCampuses();
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

    DeleteCampus(SelectedCampus: ICampus): void {
        this.campus = SelectedCampus;

        if (confirm("Are you sure you want to delete this record?")) {
            this._campusService.deleteCampus(this.campus)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadCampuses();
                }, error => {
                    this._alertService.error("Delete failed");
                    alert('Delete failed');
                });
        }
    };
}
