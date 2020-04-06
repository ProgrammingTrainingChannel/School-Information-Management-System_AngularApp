export interface IStudentMark {
    ID: number;
    StudentID: number;
    GradeID: number;
    GradeSectionID: number;
    CourseID: number;
    ExamTypeID: number;
    AcademicQuarterID: number;
    OutOfTotal: number;
    MarkObtained: number;
    AcademicYear: number;
    Remark: string;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}