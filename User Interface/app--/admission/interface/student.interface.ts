export interface IStudent {
    ID: number;
    Fullname: string;
    MotherName: string;
    HouseNo: string;
    IsSponsored: string;
    IsHandicaped: string;
    AdmissionYear: number;
    BirthDate: string;

    GenderID: number;
    CampusID: number;
    GradeSectionID: number;
    RegionID: number;
    WoredaID: number;
    SubCityID: number;
    
    CreatedBy: string;
    CreatedDate: Date;
    UpdatedBy: string;
    UpdatedDate: Date;
}