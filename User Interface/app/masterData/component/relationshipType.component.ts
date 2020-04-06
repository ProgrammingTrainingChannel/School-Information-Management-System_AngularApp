import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { relationshipTypeService } from '../services/relationshipType.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/relationType.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class relationshipTypeComponent implements OnInit {
    private _relationTypesService: relationshipTypeService;
    private _alertService: AlertService;

    constructor(_relationTypesService: relationshipTypeService, _alertService: AlertService) {
        this._relationTypesService = _relationTypesService;
        this._alertService = _alertService;
    }

    ListOfrelationTypes: IMasterData[] = [];

    relationTypes: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.relationTypes.ID = 0;
        this.relationTypes.Name = '';
        this.relationTypes.Description = '';

        this.relationTypes.CreatedBy = 'abenezer';
        this.relationTypes.CreatedDate = new Date();


        this.LoadrelationTypes();
    }

    SelectedrelationTypesID: number;

    LoadrelationTypes(): void {
        this._relationTypesService.getrelationTypes()
            .subscribe(resultData => {
                this.ListOfrelationTypes = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getrelationTypes failed');
            });
    };

    LoadSinglerelationTypes(SelectedrelationTypes: IMasterData): void {
        this.relationTypes = SelectedrelationTypes;
    };

    SaveUpdaterelationTypes(): void {
        if (this.relationTypes.ID == 0) {
            this._relationTypesService.saverelationTypes(this.relationTypes)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadrelationTypes();
                        //return true;
                    }
                    else {
                        this._alertService.error("Save Failed");
                        //return false;
                    }
                }, error => {
                    this._alertService.error("Failed To Save");
                });
        }
        else {
            this._relationTypesService.updaterelationTypes(this.relationTypes)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadrelationTypes();
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

    DeleterelationTypes(SelectedrelationTypes: IMasterData): void {
        this.relationTypes = SelectedrelationTypes;

        if (confirm("Are you sure you want to delete this record?")) {
            this._relationTypesService.deleterelationTypes(this.relationTypes)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadrelationTypes();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}