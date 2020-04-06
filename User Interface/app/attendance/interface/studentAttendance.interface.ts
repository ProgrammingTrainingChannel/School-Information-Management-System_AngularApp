export interface IStudentAttendance {
    ID: number;
    AbsensenceDuration: number;
    PermitedBy: string;
    Remark: string;

    StudentID: number;
    PermissionTypeID: number;
    
    CreatedBy: string;
    CreatedDate: Date;
    UpdateBy: string;
    UpdateDate: Date;
}