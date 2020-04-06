export interface ITeacherEvaluation {
    ID: number;
    Mark: string;
    AcademicQuarterID: number;
    EvaluationCriteriaID: number;
    TeacherID: number;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}
