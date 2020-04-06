import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { academicQuarterService } from '../services/academicQuarter.service';



import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';




@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/academicQuarter.component.html',
    styleUrls: ['/app/menus/menu.component.css'],


})
export class academicQuarterComponent implements OnInit {
    //dtOptions: { pagingType: string; serverSide: boolean; processing: boolean; ajax: (dataTablesParameters: any, callback: any) => void; columns: { data: string; }[]; };
    private _academicQuarterService: academicQuarterService;
    private _alertService: AlertService;
    constructor(_academicQuarterService: academicQuarterService, _alertService: AlertService, ) {
        this._academicQuarterService = _academicQuarterService;
        this._alertService = _alertService;
        this.LoadAcademicQuarters();
        this.academicQuarter.ID = 0;
        this.academicQuarter.Name = '';
        this.academicQuarter.Description = '';

        this.academicQuarter.CreatedBy = 'abenezer';
        this.academicQuarter.CreatedDate = new Date();

        setTimeout(function () {
            $(document).ready(function () {
                $('#example').DataTable({
                    dom: 'Bfrtip',
                    select: {
                        style: 'multi'
                    },
                    buttons: [
                        //'copy', 'csv', 'excel', 'pdf', 'print'
                        { extend: 'copy', text: 'Copy to clipboard' },
                        { extend: 'csv', text: 'Copy to csv' },
                        { extend: 'excel', text: 'Export to excel' },
                        {
                            extend: 'pdf', text: 'Export to pdf', exportOptions: {
                                rows: { selected: false }
                            }
                        },
                        { extend: 'print', text: 'print' },
                        /* {
                        'sExtends': 'xls',
                        'sButtonText': 'Save to Excel',
                        'sFileName': 'Data.xls'
                    },*/
                    ]/*,"lengthMenu": [50, 100, 200]*/
                });

            });
        }, 2000);

    }

    ListOfAcademicQuarters: IMasterData[] = [];

    academicQuarter: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),

    };

    ngOnInit() {


        //$(function () {
        //    $('#example').DataTable({

        //    });
        //});



    }


    SelectedAcademicQuarterID: number;

    LoadAcademicQuarters(): void {
        this._academicQuarterService.getAcademicQuarters()
            .subscribe(resultData => {
                this.ListOfAcademicQuarters = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getAcademicQuarters failed');
            });

    };


    LoadSingleAcademicQuarter(SelectedAcademicQuarter: IMasterData): void {
        this.academicQuarter = SelectedAcademicQuarter;
    };

    SaveUpdateAcademicQuarter(): void {
        if (this.academicQuarter.ID == 0) {
            this._academicQuarterService.saveAcademicQuarter(this.academicQuarter)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadAcademicQuarters();
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
            this._academicQuarterService.updateAcademicQuarter(this.academicQuarter)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadAcademicQuarters();
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

    DeleteAcademicQuarter(academicQuarter: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._academicQuarterService.deleteAcademicQuarter(academicQuarter)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadAcademicQuarters();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}

