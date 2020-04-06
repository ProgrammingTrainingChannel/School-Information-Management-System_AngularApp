export interface IEmergencyContact {
    ID: number,    
    StudentID: number,
    RelationshipTypeID: number,
    Fullname: string;
    PhoneNumber: string;
    Email: string;

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}