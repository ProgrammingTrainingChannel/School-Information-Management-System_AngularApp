export interface IStudentPayment {
    ID: number;
    RecieptNumber: string;
    CashierName: string;
    PaidBy: string;
    IsFullyPaid: string;

    StudentID: number;
    PaymentPeriodID: number;
    PaymentReasonID: number;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}
