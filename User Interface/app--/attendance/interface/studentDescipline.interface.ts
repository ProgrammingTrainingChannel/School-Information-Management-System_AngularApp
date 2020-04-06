export interface IStudentDescipline {
    ID: number;
    InformedBy: string;
    Remark: string;

    StudentID: number;
    CaseTypeID: number;
    PenalityTypeID: number;
    EmergencyContactID: number;
    
    CreatedBy: string;
    CreatedDate: Date;
    UpdateBy: string;
    UpdateDate: Date;
}