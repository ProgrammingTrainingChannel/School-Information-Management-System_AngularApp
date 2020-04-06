export interface IMeetingSchedule {
    ID: number;
    MeetingTypeID: number;

    Title: string;
    Description: string;
    StartDate: Date;
    StartTime: string;
    EndDate: Date;
    EndTime: string;

    GeneralAgenda: string;
    Organizer: string;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}
