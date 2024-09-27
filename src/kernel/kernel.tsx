import Image from "next/image";
import React, { useState } from "react";
import { AppCollection, AppDetails, apps } from "./kernelregistery";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { addProcess, removeProcess } from "@/redux/kernel/kernel";
import { RootState } from "@/redux/store"; // Import RootState

// Array to keep track of the currently working apps
const currentlyWorkingThread: AppDetails[] = [];


export default function MainDeliver() {
    return <div>Medical Records App</div>;
}

// WindowDeliver will render the app's component dynamically based on currently selected app
export function WindowDeliver() {
    const processes = useSelector((state: RootState) => state.process.process);
    return (
        <>
            {processes.map((app: AppDetails) => {
                const AppComponent = app.appCode;
                return <AppComponent key={app.id} />;
            })}
        </>
    );
}

export function A() {
    return <div>qwdwq</div>;
}

export function TaskBarDeliver() {
    return <div>Medical Records App</div>;
}



export function TestingMenu() {
    const dispatch = useDispatch();
    const handelClick = (item: AppDetails) => {
        dispatch(addProcess(item));
    };
    
    return (
        <>
            {Object.values(apps).map((item: AppDetails) => (
                <React.Fragment key={item.id}>
                    <div style={{ display: "flex", marginBottom: "10px" }} className="menu" onClick={() => handelClick(item)}>
                        <div>
                            <Image src={item.icon} alt="Logo" width={40} height={40} style={{ marginLeft: "10px" }} className="menu-svg" />
                        </div>
                        <div style={{ marginLeft: "10px", marginTop: "5px", marginRight: "10px" }} className="menu">{item.name}</div>
                    </div>
                    <hr />
                </React.Fragment>
            ))}
        </>
    );
}
