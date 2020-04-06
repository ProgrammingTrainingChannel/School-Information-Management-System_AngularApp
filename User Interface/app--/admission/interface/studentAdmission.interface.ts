export interface IStudentAdmission {
    ID: number,
    AdmissionDate: Date,

    GradeID: number,
    GradeSectionID: number,
    StudentID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdateBy: string,
    UpdatedDate: Date,
}