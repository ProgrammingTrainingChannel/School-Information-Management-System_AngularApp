import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { caseTypeService } from '../services/caseType.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/caseType.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class caseTypeComponent {
    private _caseTypeService: caseTypeService;
    private _alertService: AlertService;

    constructor(_caseTypeService: caseTypeService, _alertService: AlertService) {
        this._caseTypeService = _caseTypeService;
        this._alertService = _alertService;
    }

    ListOfCaseTypes: IMasterData[] = [];
    
    caseType: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.caseType.ID = 0;
        this.caseType.Name = '';
        this.caseType.Description = '';

        this.caseType.CreatedBy = 'bereket';
        this.caseType.CreatedDate = new Date();

        this.LoadCaseTypes();
    }

    SelectedcaseTypeID: number;

    LoadCaseTypes(): void {
        this._caseTypeService.getCaseTypes()
            .subscribe(resultData => {
                this.ListOfCaseTypes = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getCaseType failed');
            });
    };

    LoadSingleCaseType(SelectedCaseType: IMasterData): void {
        this.caseType = SelectedCaseType;
    };

    SaveUpdateCaseType(): void {
        if (this.caseType.ID == 0) {
            this._caseTypeService.saveCaseType(this.caseType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadCaseTypes();
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
            this._caseTypeService.updateCaseType(this.caseType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadCaseTypes();
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

    DeleteCaseType(SelectedCaseType: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this.caseType = SelectedCaseType;

            this._caseTypeService.deleteCaseType(this.caseType)
                .subscribe(result => {
                    this._alertService.success("Deleted Successfully");
                    this.LoadCaseTypes();
                }, error => {
                    this._alertService.error("Delete failed");
                    alert('Delete failed');
                });
        }
    };
}
