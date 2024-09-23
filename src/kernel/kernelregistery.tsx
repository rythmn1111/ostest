import MedicalRecordsApp from "@/apps/medical_records/medical_records_app";
import React from "react";

interface AppDetails {
    name: string,
    icon: string,
    multipleWindowsAllowed: boolean,
    shortWindow: boolean,
    isHidden: boolean,
    appCode: React.ComponentType<any>;
}

interface AppCollection {
    [appId: string]: AppDetails;
}

const apps: AppCollection = {
    "1":{
        name: "test_app",
        icon: "",
        multipleWindowsAllowed: true,
        shortWindow: false,
        isHidden: false,
        appCode: MedicalRecordsApp
    },
};