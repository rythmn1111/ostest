import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import dayjs from "dayjs";


interface DesktopProps {
    children: React.ReactNode;
  }


export default function Desktop({children}: DesktopProps) {
return <div className="main-desktop-container">
     {children}
    </div>
};

export function Playground({children}: {children: React.ReactNode}) {
    return <div className="playground">{children}</div>
}

export function TaskBar({children}: {children: React.ReactNode}) {
    
    return <div className="task-bar">
        <div className="app-div">{children}</div>
        <div className="time-div">
            {/* <Clock format={"h:mma"} className="time-div" ticking={true}></Clock> */}
            <DateTimeDisplay />
            </div>
        </div>
}

function DateTimeDisplay() {
    const [dateTime, setDateTime] = React.useState(dayjs());
  
    React.useEffect(() => {
      const timer = setInterval(() => setDateTime(dayjs()), 1000);
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div style={{marginRight:"8px"}}>
        <div style={{fontSize:"17px", marginBottom:"3px"}}>{dateTime.format('h:mmA')}</div>
        <div style={{fontSize:"12px"}}>{dateTime.format('D/MM/YYYY')}</div>
      </div>
    );
  }