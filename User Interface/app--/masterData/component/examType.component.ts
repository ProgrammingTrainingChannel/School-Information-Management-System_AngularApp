import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { examTypeService } from '../services/examType.service';



import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';




@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/examType.component.html',
    styleUrls: ['/app/menus/menu.component.css'],


})
export class examTypeComponent implements OnInit {
    private _examTypeService: examTypeService;
    private _alertService: AlertService;
    constructor(_examTypeService: examTypeService, _alertService: AlertService, ) {
        this._examTypeService = _examTypeService;
        this._alertService = _alertService;
        this.LoadExamTypes();
        this.examType.ID = 0;
        this.examType.Name = '';
        this.examType.Description = '';

        this.examType.CreatedBy = 'abenezer';
        this.examType.CreatedDate = new Date();



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

    ListOfExamTypes: IMasterData[] = [];

    examType: IMasterData = {
        ID: 0,
        Name: '',
        Description: '',

        CreatedBy: '',
        CreatedDate: new Date(),

    };

    ngOnInit() {
    }


    SelectedExamType: number;

    LoadExamTypes(): void {
        this._examTypeService.getExamTypes()
            .subscribe(resultData => {
                this.ListOfExamTypes = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getExamTypes failed');
            });

    };


    LoadSingleExamType(SelectedExamType: IMasterData): void {
        this.examType = SelectedExamType;
    };

    SaveUpdateExamType(): void {
        if (this.examType.ID == 0) {
            this._examTypeService.saveExamType(this.examType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadExamTypes();
                    }
                    else {
                        this._alertService.error("Save Failed");
                    }
                }, error => {
                    this._alertService.error("Save Failed");
                });
        }
        else {
            this._examTypeService.updateExamType(this.examType)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadExamTypes();
                    }
                    else {
                        this._alertService.error("Update Failed");
                    }
                }, error => {
                    this._alertService.error("Update Failed");
                });
        }
    };

    DeleteExamType(examType: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._examTypeService.deleteExamType(examType)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadExamTypes();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}

