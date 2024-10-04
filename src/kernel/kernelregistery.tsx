import MedicalRecordsApp from "@/apps/medical_records/medical_records_app";
import React from "react";
import TestingApp from "@/apps/testingapp/testingapp";

export interface AppDetails {
    id: number;
  tempId: number;
    name: string;
  icon: string;
  multipleWindowsAllowed: boolean;
  shortWindow: boolean;
  isHidden: boolean;
  appCode: React.ComponentType<{ id: number }>;
}

export interface AppCollection {
  [appKey: number]: Omit<AppDetails, "id">;  // Exclude `id` here
}

// Registry without `id` - it will be added dynamically
export const apps: AppCollection = {
  1: {
    tempId:1,
    name: "test_app",
    icon: "/report_upload.svg",
    multipleWindowsAllowed: true,
    shortWindow: false,
    isHidden: false,
    appCode: TestingApp
  },
  2: {
    tempId:2,
    name: "test_app2",
    icon: "/medical_record.svg",
    multipleWindowsAllowed: true,
    shortWindow: false,
    isHidden: false,
    appCode: MedicalRecordsApp
  }
};
