import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { woredaService } from '../services/woreda.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/woreda.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class woredaComponent {
    private _woredaService: woredaService;
    private _alertService: AlertService;

    constructor(_woredaService: woredaService, _alertService: AlertService) {
        this._woredaService = _woredaService;
        this._alertService = _alertService;
    }

    ListOfWoredas: IMasterData[] = [];

    woreda: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.woreda.ID = 0;
        this.woreda.Name = '';
        this.woreda.Description = '';

        this.woreda.CreatedBy = 'bereket';
        this.woreda.CreatedDate = new Date();

        this.LoadWoredas();
    }

    SelectedWoredaID: number;

    LoadWoredas(): void {
        this._woredaService.getWoredas()
            .subscribe(resultData => {
                this.ListOfWoredas = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getWoredas failed');
            });
    };

    LoadSingleWoreda(SelectedWoreda: IMasterData): void {
        this.woreda = SelectedWoreda;
    };

    SaveUpdateWoreda(): void {
        if (this.woreda.ID == 0) {
            this._woredaService.saveWoreda(this.woreda)
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
            this._woredaService.updateWoreda(this.woreda)
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

    DeleteWoreda(): void {
        this._woredaService.deleteWoreda(this.woreda)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
            }, error => {
                this._alertService.error("Delete failed");
                alert('Delete failed');
            });
    };
}