import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { lookupService } from '../../shared/services/lookup.service';
import { studentPaymentService } from '../../evaluationPayment/service/studentPayment.service';
import { AlertService } from '../../_services/index';
import { gradeService } from '../../masterData/services/grade.service';
import { gradeSectionService } from '../../masterData/services/gradeSection.service';
import { studentService } from '../../admission/service/student.service';

import { ILookup } from '../../shared/interfaces/lookup.interface';
import { IGradeSection } from '../../masterData/interface/gradeSection.interface';
import { IStudent } from '../../admission/interface/student.interface';
import { IStudentPayment } from '../../evaluationPayment/interface/studentPayment.interface';

@Component({
    selector: 'my-app',
    templateUrl: 'app/evaluationPayment/template/studentPayment.component.html',
    styleUrls: ['/app/menus/menu.component.css']
})
export class studentPaymentComponent {
    private _lookupService: lookupService;
    private _studentPaymentService: studentPaymentService;
    private _alertService: AlertService;
    private _gradeService: gradeService;
    private _gradeSectionService: gradeSectionService;
    private _studentService: studentService;

    constructor(_alertService: AlertService, _lookupService: lookupService, _studentPaymentService: studentPaymentService, _gradeService: gradeService, _gradeSectionService: gradeSectionService, _studentService: studentService) {
        this._lookupService = _lookupService;
        this._studentPaymentService = _studentPaymentService;
        this._alertService = _alertService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._studentService = _studentService;
    }
    
    ListOfGrades: ILookup[] = [];
    ListOfGradeSections: IGradeSection[] = [];
    ListOfStudents: IStudent[] = [];
    ListOfPaymentReasons: ILookup[] = [];
    ListOfPaymentPeriods: ILookup[] = [];

    ListOfStudentPayments: IStudentPayment[] = [];

    studentPayment: IStudentPayment = {
        ID: 0,
        RecieptNumber: '',
        CashierName: '',
        PaidBy: '',
        IsFullyPaid: '',

        StudentID: 0,
        PaymentPeriodID: 0,
        PaymentReasonID: 0,

        CreatedBy: '',
        CreatedDate: new Date(),
        UpdatedBy: '',
        UpdatedDate: new Date(),
    };

    ngOnInit() {
        this.studentPayment.ID = 0;
        this.studentPayment.RecieptNumber = '';
        this.studentPayment.CashierName = '';
        this.studentPayment.PaidBy = '';
        this.studentPayment.IsFullyPaid = 'false';

        this.studentPayment.StudentID = 0;
        this.studentPayment.PaymentPeriodID = 0;
        this.studentPayment.PaymentReasonID = 0;

        this.studentPayment.CreatedBy = 'abenezer';
        this.studentPayment.CreatedDate = new Date();
        this.studentPayment.UpdatedBy = 'abenezer';
        this.studentPayment.UpdatedDate = new Date();


        this.LoadGrades();
        this.LoadPaymentReasons();
        this.LoadPaymentPeriods();

        this.LoadStudentPayments();
    };

    LoadGrades(): void {
        this._lookupService.getGrades()
            .subscribe(resultData => {
                this.ListOfGrades = resultData;
            }, error => {
                alert('getGrades failed!');
            });
    };

    LoadGradeSections(): void {
        console.log('done');
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(resultData => {
                this.ListOfGradeSections = resultData;
            }, error => {
                alert('getCourses failed!');
            });
    };

    LoadStudents(): void {
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(resultData => {
                this.ListOfStudents = resultData;
            }, error => {
                alert('getStudents failed!');
            });
    };

    LoadPaymentReasons(): void {
        this._lookupService.getPaymentReasons()
            .subscribe(resultData => {
                this.ListOfPaymentReasons = resultData;
            }, error => {
                alert('getPaymentReasons failed!');
            });
    };

    LoadPaymentPeriods(): void {
        this._lookupService.getPaymentPeriods()
            .subscribe(resultData => {
                this.ListOfPaymentPeriods = resultData;
            }, error => {
                alert('getPaymentPeriods failed!');
            });
    };

    LoadStudentPayments(): void {
        this._studentPaymentService.getAllStudentPayments()
            .subscribe(resultData => {
                this.ListOfStudentPayments = resultData;
            }, error => {
                alert('getAllStudentPayments failed!');
            });
    };

    SelectedGradeID: number;
    SelectedGradeSectionID: number;
    SelectedStudentID: number;
    SelectedPaymentReasonID: number;
    SelectedPaymentPeriodID: number;

    LoadSingleStudentPayment(SelectedStudentPayment: IStudentPayment): void {
        this.studentPayment = SelectedStudentPayment;

        this._studentService.getStudents()
            .subscribe(resultData => {
                this.ListOfStudents = resultData;

                this.SelectedStudentID = this.studentPayment.StudentID;
                this.SelectedPaymentReasonID = this.studentPayment.PaymentReasonID;
                this.SelectedPaymentPeriodID = this.studentPayment.PaymentPeriodID;
            }, error => {
                alert('getStudents failed!');
            });
    };

    IsValid(studentPayment: IStudentPayment): boolean {
        if (studentPayment.CashierName == "") {
            this._alertService.error("Please enter cashier name.");
            return false;
        }
        else if (studentPayment.IsFullyPaid == "") {
            this._alertService.error("Please enter is fully paid.");
            return false;
        }
        else if (studentPayment.PaidBy == "") {
            this._alertService.error("Please enter paid by.");
            return false;
        }
        else if (studentPayment.RecieptNumber == "") {
            this._alertService.error("Please enter reciept number.");
            return false;
        }
        else if (studentPayment.StudentID == 0) {
            this._alertService.error("Please enter student.");
            return false;
        }
        else if (studentPayment.PaymentPeriodID == 0) {
            this._alertService.error("Please enter payment period.");
            return false;
        }
        else if (studentPayment.PaymentReasonID == 0) {
            this._alertService.error("Please enter paymenr reason.");
            return false;
        }
        else {
            return true;
        }
    }

    SaveUpdateStudentPayment(): void {
        this.studentPayment.StudentID = this.SelectedStudentID;
        this.studentPayment.PaymentPeriodID = this.SelectedPaymentPeriodID;
        this.studentPayment.PaymentReasonID = this.SelectedPaymentReasonID;

        if (this.IsValid(this.studentPayment) == true) {
            if (this.studentPayment.ID == 0) {
                this._studentPaymentService.saveStudentPayment(this.studentPayment)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Saved Successfully");
                            this.LoadStudentPayments();
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
                this._studentPaymentService.updateStudentPayment(this.studentPayment)
                    .subscribe(result => {
                        if (result.Status == true) {
                            this._alertService.success("Updated Successfully");
                            this.LoadStudentPayments();
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
        }
    };

    DeleteStudentPayment(studentPayment: IStudentPayment): void {
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentPaymentService.deleteStudentPayment(studentPayment)
                .subscribe(result => {
                    this._alertService.success("Deleted Successsfully");
                    this.LoadStudentPayments();
                }, error => {
                    this._alertService.error("Delete failed");
                });
        }
    };
}