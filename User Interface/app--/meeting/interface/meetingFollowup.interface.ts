export interface IMeetingFollowup {
    ID: number;
    MeetingScheduleID: number;

    DetailMinute: string;

    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}
