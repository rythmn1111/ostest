import Image from "next/image";
import React, { useState } from "react";
import { AppCollection, AppDetails, apps } from "./kernelregistery";

// Array to keep track of the currently working apps
const currentlyWorkingThread: AppDetails[] = [];

export default function MainDeliver() {
    return <div>Medical Records App</div>;
}

// WindowDeliver will render the app's component dynamically based on currently selected app
export function WindowDeliver() {
    return (
        <div>
            {currentlyWorkingThread.length > 0 ? (
                currentlyWorkingThread.map((app, index) => {
                    const AppCode = app.appCode;  // Extract the component
                    return (
                        <div key={index}>
                            <AppCode />  {/* Render the component dynamically */}
                        </div>
                    );
                })
            ) : (
                <div>No apps open</div>
            )}
        </div>
    );
}

export function A() {
    return <div>qwdwq</div>;
}

export function TaskBarDeliver() {
    return <div>Medical Records App</div>;
}


const handelClick = (item: AppDetails) => {
    // Check if the app allows multiple windows or if it's already in the thread
    // if (item.multipleWindowsAllowed || !currentlyWorkingThread.some(app => app.id === item.id)) {
        currentlyWorkingThread.push(item);
        console.log(currentlyWorkingThread)  // Add to the working thread
    
};

export function TestingMenu() {
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
