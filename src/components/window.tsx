import React, { use, useEffect, useState } from "react";
import Image from 'next/image'
import Draggable, {DraggableCore} from 'react-draggable';
import { Resizable } from 're-resizable';


function minimizeControl(){
    alert("clicked")
}
function closeControl(){
    alert("clicked")
}

export default function WindowStructure() {
    const [isMaximize, setMaximize] = useState(false);
    // const [isMaximize, setMaximize] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });


    function maximizeControl() {
    setMaximize(!isMaximize);
    if (!isMaximize) {
      setPosition({ x: 0, y: 0 });
        }
     }

    function minimizeControl(){
        alert("clicked")
    }
    function closeControl(){
        alert("clicked")
    }


    return (
    <>
    {/* <div className="os-div"> */}
    <Draggable handle=".wb-header" bounds="parent" position={isMaximize ? { x: 0, y: 0 } : position}
    onStop={(e, data) => {
        if (!isMaximize) {
          setPosition({ x: data.x, y: data.y });
        }
      }}
    >
    
    <div className="winbox" style={{ top: isMaximize ? '0' : '50px', left: isMaximize ? '0' : '50px' ,height: isMaximize ? '100vh' : '400px', width: isMaximize ? '100vw' : '400px'} }>
        <div className="wb-header">
            <div className="wb-drag">
                {/* <div className="wb-icon"></div> */}
                <div className="wb-title">
                    <h2>Patient Report</h2>
                </div>
            </div>
            <div className="wb-control">
                    
                <span className="wb-min">
                
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgdmlld0JveD0iMCAwIDE2MCAxNjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjczIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEzLjI3MjciLz4KPGxpbmUgeDE9IjMzLjU0NTQiIHkxPSI5My4yNzI3IiB4Mj0iMTI2LjQ1NCIgeTI9IjkzLjI3MjciIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMTMuMjcyNyIvPgo8L3N2Zz4K"  
                    width={30} 
                    height={30} 
                    alt="min-icon"
                    onClick={minimizeControl}/>
                    
                </span>
                <span className="wb-full">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSI3LjUiIHk9IjcuNSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSI5LjUiIHk9IjkuNSIgd2lkdGg9IjYiIGhlaWdodD0iNiIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K" 
                    width={30} 
                    height={30} 
                    alt="max-icon"
                    onClick={maximizeControl}></Image>
                </span>
                <span className="wb-close">
                    <Image src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iNi4zNTM1NSIgeTE9IjUuNjQ2NDUiIHgyPSIxNi4zNTM2IiB5Mj0iMTUuNjQ2NCIgc3Ryb2tlPSJibGFjayIvPgo8bGluZSB4MT0iNS42NDY0NSIgeTE9IjE1LjY0NjQiIHgyPSIxNS42NDY0IiB5Mj0iNS42NDY0NSIgc3Ryb2tlPSJibGFjayIvPgo8L3N2Zz4K" 
                    width={30} 
                    height={30} 
                    alt="close-icon" 
                    onClick={closeControl}></Image>
                </span>
            </div>
        </div>
        <div className="wb-body">
            qwd
        </div>
        {/* <div className="wb-n"></div>
        <div className="wb-s"></div>
        <div className="wb-w"></div>
        <div className="wb-e"></div>
        <div className="wb-nw"></div>
        <div className="wb-ne"></div>
        <div className="wb-se"></div>
        <div className="wb-sw"></div> */}
    </div>
        </Draggable>
        {/* </div> */}

    </>
  );
}