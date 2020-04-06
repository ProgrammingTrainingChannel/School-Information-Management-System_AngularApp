"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var lookup_service_1 = require("../../shared/services/lookup.service");
var studentPayment_service_1 = require("../../evaluationPayment/service/studentPayment.service");
var index_1 = require("../../_services/index");
var grade_service_1 = require("../../masterData/services/grade.service");
var gradeSection_service_1 = require("../../masterData/services/gradeSection.service");
var student_service_1 = require("../../admission/service/student.service");
var studentPaymentComponent = /** @class */ (function () {
    function studentPaymentComponent(_alertService, _lookupService, _studentPaymentService, _gradeService, _gradeSectionService, _studentService) {
        this.ListOfGrades = [];
        this.ListOfGradeSections = [];
        this.ListOfStudents = [];
        this.ListOfPaymentReasons = [];
        this.ListOfPaymentPeriods = [];
        this.ListOfStudentPayments = [];
        this.studentPayment = {
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
        this._lookupService = _lookupService;
        this._studentPaymentService = _studentPaymentService;
        this._alertService = _alertService;
        this._gradeService = _gradeService;
        this._gradeSectionService = _gradeSectionService;
        this._studentService = _studentService;
    }
    studentPaymentComponent.prototype.ngOnInit = function () {
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
    ;
    studentPaymentComponent.prototype.LoadGrades = function () {
        var _this = this;
        this._lookupService.getGrades()
            .subscribe(function (resultData) {
            _this.ListOfGrades = resultData;
        }, function (error) {
            alert('getGrades failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadGradeSections = function () {
        var _this = this;
        console.log('done');
        this._gradeSectionService.getGradeSectionsByGrade(this.SelectedGradeID)
            .subscribe(function (resultData) {
            _this.ListOfGradeSections = resultData;
        }, function (error) {
            alert('getCourses failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadStudents = function () {
        var _this = this;
        this._studentService.getStudentsByGradeSection(this.SelectedGradeSectionID)
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadPaymentReasons = function () {
        var _this = this;
        this._lookupService.getPaymentReasons()
            .subscribe(function (resultData) {
            _this.ListOfPaymentReasons = resultData;
        }, function (error) {
            alert('getPaymentReasons failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadPaymentPeriods = function () {
        var _this = this;
        this._lookupService.getPaymentPeriods()
            .subscribe(function (resultData) {
            _this.ListOfPaymentPeriods = resultData;
        }, function (error) {
            alert('getPaymentPeriods failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadStudentPayments = function () {
        var _this = this;
        this._studentPaymentService.getAllStudentPayments()
            .subscribe(function (resultData) {
            _this.ListOfStudentPayments = resultData;
        }, function (error) {
            alert('getAllStudentPayments failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.LoadSingleStudentPayment = function (SelectedStudentPayment) {
        var _this = this;
        this.studentPayment = SelectedStudentPayment;
        this._studentService.getStudents()
            .subscribe(function (resultData) {
            _this.ListOfStudents = resultData;
            _this.SelectedStudentID = _this.studentPayment.StudentID;
            _this.SelectedPaymentReasonID = _this.studentPayment.PaymentReasonID;
            _this.SelectedPaymentPeriodID = _this.studentPayment.PaymentPeriodID;
        }, function (error) {
            alert('getStudents failed!');
        });
    };
    ;
    studentPaymentComponent.prototype.IsValid = function (studentPayment) {
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
    };
    studentPaymentComponent.prototype.SaveUpdateStudentPayment = function () {
        var _this = this;
        this.studentPayment.StudentID = this.SelectedStudentID;
        this.studentPayment.PaymentPeriodID = this.SelectedPaymentPeriodID;
        this.studentPayment.PaymentReasonID = this.SelectedPaymentReasonID;
        if (this.IsValid(this.studentPayment) == true) {
            if (this.studentPayment.ID == 0) {
                this._studentPaymentService.saveStudentPayment(this.studentPayment)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Saved Successfully");
                        _this.LoadStudentPayments();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Failed To Save");
                        //return false;
                    }
                }, function (error) {
                    _this._alertService.error("Save Failed");
                });
            }
            else {
                this._studentPaymentService.updateStudentPayment(this.studentPayment)
                    .subscribe(function (result) {
                    if (result.Status == true) {
                        _this._alertService.success("Updated Successfully");
                        _this.LoadStudentPayments();
                        //return true;
                    }
                    else {
                        _this._alertService.error("Update Failed");
                        //return false;
                    }
                }, function (error) {
                    _this._alertService.error("Update Failed");
                });
            }
        }
    };
    ;
    studentPaymentComponent.prototype.DeleteStudentPayment = function (studentPayment) {
        var _this = this;
        if (confirm("Are you sure you want to delete this record?")) {
            this._studentPaymentService.deleteStudentPayment(studentPayment)
                .subscribe(function (result) {
                _this._alertService.success("Deleted Successsfully");
                _this.LoadStudentPayments();
            }, function (error) {
                _this._alertService.error("Delete failed");
            });
        }
    };
    ;
    studentPaymentComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/evaluationPayment/template/studentPayment.component.html',
            styleUrls: ['/app/menus/menu.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AlertService, lookup_service_1.lookupService, studentPayment_service_1.studentPaymentService, grade_service_1.gradeService, gradeSection_service_1.gradeSectionService, student_service_1.studentService])
    ], studentPaymentComponent);
    return studentPaymentComponent;
}());
exports.studentPaymentComponent = studentPaymentComponent;
//# sourceMappingURL=studentPayment.component.js.map