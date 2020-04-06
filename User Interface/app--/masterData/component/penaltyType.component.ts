import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { penaltyTypeService } from '../services/penaltyType.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/penaltyType.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class penaltyTypeComponent {
    private _penaltyTypeService: penaltyTypeService;
    private _alertService: AlertService;

    constructor(_penaltyTypeService: penaltyTypeService, _alertService: AlertService) {
        this._penaltyTypeService = _penaltyTypeService;
        this._alertService = _alertService;
    }

    ListOfPenaltyTypes: IMasterData[] = [];

    penaltyType: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.penaltyType.ID = 0;
        this.penaltyType.Name = '';
        this.penaltyType.Description = '';

        this.penaltyType.CreatedBy = 'bereket';
        this.penaltyType.CreatedDate = new Date();

        this.LoadPenaltyTypes();
    }

    SelectedpenaltyTypeID: number;

    LoadPenaltyTypes(): void {
        this._penaltyTypeService.getPenaltyTypes()
            .subscribe(resultData => {
                this.ListOfPenaltyTypes = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getPenaltyType failed');
            });
    };

    LoadSinglePenaltyType(SelectedPenaltyType: IMasterData): void {
        this.penaltyType = SelectedPenaltyType;
    };

    SaveUpdatePenaltyType(): void {
        if (this.penaltyType.ID == 0) {
            this._penaltyTypeService.savePenaltyType(this.penaltyType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadPenaltyTypes();
                        //return true;
                    }
                    else {
                        this._alertService.error("Save Failed 22");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Save Failed 33");
                });
        }
        else {
            this._penaltyTypeService.updatePenaltyType(this.penaltyType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadPenaltyTypes();
                        //return true;
                    }
                    else {
                        this._alertService.error("Update Failed 22");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Update Failed 33");
                });
        }
    };

    DeletePenaltyType(): void {
        this._penaltyTypeService.deletePenaltyType(this.penaltyType)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
            }, error => {
                this._alertService.error("Delete failed");
                alert('Delete failed');
            });
    };
}
