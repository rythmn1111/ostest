import MedicalRecordsApp from "@/apps/medical_records/medical_records_app";
import React from "react";
import TestingApp from "@/apps/testingapp/testingapp";

export interface AppDetails {
    id: string,
    name: string,
    icon: string,
    multipleWindowsAllowed: boolean,
    shortWindow: boolean,
    isHidden: boolean,
    appCode: React.ComponentType<any>;
}

export interface AppCollection {
    [appId: string]: AppDetails;
}

export const apps: AppCollection = {
    "1":{
        id:"1",
        name: "test_app",
        icon: "/report_upload.svg",
        multipleWindowsAllowed: true,
        shortWindow: false,
        isHidden: false,
        appCode: TestingApp
    },
    "2":{
        id:"2",
        name: "test_app2",
        icon: "/medical_record.svg",
        multipleWindowsAllowed: true,
        shortWindow: false,
        isHidden: false,
        appCode: MedicalRecordsApp
    },
};