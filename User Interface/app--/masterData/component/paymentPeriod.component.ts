import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { paymentPeriodService } from '../services/paymentPeriod.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/paymentPeriod.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class paymentPeriodComponent {
    private _paymentPeriodService: paymentPeriodService;
    private _alertService: AlertService;

    constructor(_paymentPeriodService: paymentPeriodService, _alertService: AlertService) {
        this._paymentPeriodService = _paymentPeriodService;
        this._alertService = _alertService;
    }

    ListOfPaymentPeriods: IMasterData[] = [];

    paymentPeriod: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.paymentPeriod.ID = 0;
        this.paymentPeriod.Name = '';
        this.paymentPeriod.Description = '';

        this.paymentPeriod.CreatedBy = 'bereket';
        this.paymentPeriod.CreatedDate = new Date();

        this.LoadPaymentPeriods();
    }

    SelectedPaymentPeriodID: number;

    LoadPaymentPeriods(): void {
        this._paymentPeriodService.getPaymentPeriods()
            .subscribe(resultData => {
                this.ListOfPaymentPeriods = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getPaymentPeriods failed');
            });
    };

    LoadSinglePaymentPeriod(SelectedPaymentPeriod: IMasterData): void {
        this.paymentPeriod = SelectedPaymentPeriod;
    };

    SaveUpdatePaymentPeriod(): void {
        if (this.paymentPeriod.ID == 0) {
            this._paymentPeriodService.savePaymentPeriod(this.paymentPeriod)
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
            this._paymentPeriodService.updatePaymentPeriod(this.paymentPeriod)
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

    DeletePaymentPeriod(): void {
        this._paymentPeriodService.deletePaymentPeriod(this.paymentPeriod)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
            }, error => {
                this._alertService.error("Delete failed");
                alert('Delete failed');
            });
    };
}