﻿export interface ITeacher {
    ID: number,
    Fullname: string,
    MotherName: string,
    BirthDate: Date,
    PhoneNumber: string,
    Email: string,
    FieldOfStudy: string,
    YearOfExperience: number,
    SkillDescription: string,
    HiredDate: Date,
    Status: string,

    GenderID: number,
    CampusID: number,
    RegionID: number,
    SubCityID: number,
    WoredaID: number,
    HouseNo: string,
    DepartmentID: number,
    MartialStatusID: number,

    CreatedBy: string,
    CreatedDate: Date,
    UpdatedBy: string,
    UpdatedDate: Date,
}