import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { paymentReasonService } from '../services/paymentReason.service';

import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';

@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/paymentReason.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class paymentReasonComponent {
    private _paymentReasonService: paymentReasonService;
    private _alertService: AlertService;

    constructor(_paymentReasonService: paymentReasonService, _alertService: AlertService) {
        this._paymentReasonService = _paymentReasonService;
        this._alertService = _alertService;
    }

    ListOfPaymentReasons: IMasterData[] = [];

    paymentReason: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),
    };

    ngOnInit() {
        this.paymentReason.ID = 0;
        this.paymentReason.Name = '';
        this.paymentReason.Description = '';

        this.paymentReason.CreatedBy = 'bereket';
        this.paymentReason.CreatedDate = new Date();

        this.LoadPaymentReasons();
    }

    SelectedPaymentReasonID: number;

    LoadPaymentReasons(): void {
        this._paymentReasonService.getPaymentReasons()
            .subscribe(resultData => {
                this.ListOfPaymentReasons = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getPaymentReasons failed');
            });
    };

    LoadSinglePaymentReason(SelectedPaymentReason: IMasterData): void {
        this.paymentReason = SelectedPaymentReason;
    };

    SaveUpdatePaymentReason(): void {
        if (this.paymentReason.ID == 0) {
            this._paymentReasonService.savePaymentReason(this.paymentReason)
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
            this._paymentReasonService.updatePaymentReason(this.paymentReason)
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

    DeletePaymentReason(): void {
        this._paymentReasonService.deletePaymentReason(this.paymentReason)
            .subscribe(result => {
                this._alertService.success("Deleted Successfully");
            }, error => {
                this._alertService.error("Delete failed");
                alert('Delete failed');
            });
    };
}