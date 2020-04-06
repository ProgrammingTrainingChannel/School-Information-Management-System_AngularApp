export interface ITeacherAttendance {
    ID: number;
    AbsencenceDuration: number;
    PermitedBy: string;
    Remark: string;

    TeacherID: number;
    PermissionTypeID: number;
    
    CreatedBy: string;
    CreatedDate: Date;
    UpdateBy: string;
    UpdateDate: Date;
}