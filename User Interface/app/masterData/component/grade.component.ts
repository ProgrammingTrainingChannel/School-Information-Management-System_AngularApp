import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { gradeService } from '../services/grade.service';


import { IMasterData } from '../interface/masterData.interface';
import { AlertService } from '../../_services/index';




@Component({
    selector: 'my-app',
    templateUrl: 'app/masterData/template/grade.component.html',
    styleUrls: ['/app/menus/menu.component.css'],


})
export class gradeComponent implements OnInit {
    //dtOptions: { pagingType: string; serverSide: boolean; processing: boolean; ajax: (dataTablesParameters: any, callback: any) => void; columns: { data: string; }[]; };
    private _gradeService: gradeService;
    private _alertService: AlertService;
    constructor(_gradeService: gradeService, _alertService: AlertService, ) {
        this._gradeService = _gradeService;
        this._alertService = _alertService;
        this.LoadGrades();
        this.grade.ID = 0;
        this.grade.Name = '';
        this.grade.Description = '';

        this.grade.CreatedBy = 'bereket';
        this.grade.CreatedDate = new Date();

        //buttons: [

        //    { 'copy'}, { 'csv'}, { 'excel'}, { 'pdf'}, { 'print'}

        //    /* {
        //    'sExtends': 'xls',
        //    'sButtonText': 'Save to Excel',
        //    'sFileName': 'Data.xls'
        //},*/
        //]



        //setTimeout(function () {
        //    $(document).ready(function () {
        //        $('#example').DataTable({
        //            dom: 'Bfrtip',
        //            select: {
        //                style: 'multi'
        //            },
        //            buttons: [
        //                //'copy', 'csv', 'excel', 'pdf', 'print'
        //                { extend: 'copy', text: 'Copy to clipboard' },
        //                { extend: 'csv', text: 'Copy to csv' },
        //                { extend: 'excel', text: 'Export to excel' },
        //                {
        //                    extend: 'pdf', text: 'Export to pdf', exportOptions: {
        //                        rows: { selected: false }
        //                    } },
        //                { extend: 'print', text: 'print' },
        //                /* {
        //                'sExtends': 'xls',
        //                'sButtonText': 'Save to Excel',
        //                'sFileName': 'Data.xls'
        //            },*/
        //            ]/*,"lengthMenu": [50, 100, 200]*/
        //        });

        //    });
        //}, 2000);

    }

    ListOfGrades: IMasterData[] = [];

    grade: IMasterData = {
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


    SelectedGradeID: number;

    LoadGrades(): void {
        this._gradeService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                this._alertService.error("Loaded");
                alert('getGrades failed');
            });

    };


    LoadSingleGrade(SelectedGrade: IMasterData): void {
        this.grade = SelectedGrade;
    };

    SaveUpdateGrade(): void {
        if (this.grade.ID == 0) {
            this._gradeService.saveGrade(this.grade)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Saved Successfully");
                        this.LoadGrades();
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
            this._gradeService.updateGrade(this.grade)
                .subscribe(result => {
                    if (result.Status == true) {
                        this._alertService.success("Updated Successfully");
                        this.LoadGrades();
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

    DeleteGrade(grade: IMasterData): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._gradeService.deleteGrade(grade)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadGrades();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
} 






//setTimeout(function () {
//    $(document).ready(function () {
//        //var table = $(document).ready(function ();
//        //var tableTools = new $.fn.dataTable.TableTools(table);
//        //$(tableTools.fnContainer()).insertBefore('#datatable_wrapper');
//        var table = $('#example').DataTable(
//            //{
//            //    dom: 'Bfrtip',
//            //    buttons:['copy']
//            //}
//        );
//        //var tableTools = new $.fn.DataTable.tableTools(table);
//        var tableTools = new $.fn.DataTable.TableTools(table);
//        $(tableTools.fnContainer()).insertBefore('#datatable_wrapper');

//    });
//}, 2000);
