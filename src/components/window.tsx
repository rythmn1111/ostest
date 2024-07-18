import React, { use, useEffect, useRef, useState } from "react";
import Image from 'next/image'
import Draggable, {DraggableCore,DraggableEvent, DraggableData} from 'react-draggable';
import { Resizable } from 're-resizable';
import { init } from "next/dist/compiled/webpack/webpack";


function minimizeControl(){
    alert("clicked")
}
function closeControl(){
    alert("clicked")
}

export default function WindowStructure() {
    const ref = useRef<HTMLElement | null>(null);
    const refLeft = useRef<HTMLDivElement | null>(null);
    const refTop = useRef<HTMLDivElement | null>(null);
    const refRight = useRef<HTMLDivElement | null>(null);
    const refBottom = useRef<HTMLDivElement | null>(null);
    const refTopLeft = useRef<HTMLDivElement | null>(null);
    const refTopRight = useRef<HTMLDivElement | null>(null);
    const refBottomLeft = useRef<HTMLDivElement | null>(null);
    const refBottomRight = useRef<HTMLDivElement | null>(null);


    const [isMaximize, setMaximize] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: 150 });
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(400);
    const [left, setLeft] = useState("");
    useEffect(()=>{
        const resizable = ref.current as HTMLElement;

        const style = window.getComputedStyle(resizable);
        // Rest of the code using the style object
        const styles = window.getComputedStyle(resizable);
        let width = parseInt(styles.width, 10);
        let height = parseInt(styles.height, 10);
        let x =0;
        let y =0;

        // resizable.style.top = '0px'
        // resizable.style.left = '0px'
        // resizable.style.right = '0px'
        // right resizing
        const onMouseMoveRightResize = (event: MouseEvent) => {
            const dx = event.clientX - x;
            x = event.clientX;
            const newWidth = Math.max(width + dx, 300);
            width = newWidth;
            resizable.style.width = `${width}px`;
            setWidth(width);
            
          };

        const onMouseUpRightResize = (event: MouseEvent) => {
            window.removeEventListener('mousemove', onMouseMoveRightResize);
          
        }

        const onMouseDownRightResize = (event: MouseEvent) => {
            x = event.clientX;
            setLeft(styles.left);
            resizable.style.left = styles.left;
            resizable.style.right = "";
            window.addEventListener('mousemove', onMouseMoveRightResize);
            window.addEventListener('mouseup', onMouseUpRightResize);
        
        }
        // left resizing
        const  onMouseDownLeftResize = (event: MouseEvent) => {
            x = event.clientX;
            resizable.style.right = styles.right;
            resizable.style.left = "";
            window.addEventListener('mousemove', onMouseMoveLeftResize);
            window.addEventListener('mouseup', onMouseUpLeftResize);
        }
        const onMouseUpLeftResize = (event: MouseEvent) => {
            window.removeEventListener('mousemove', onMouseMoveLeftResize);
        }
        const onMouseMoveLeftResize = (event: MouseEvent) => {
            const dx = event.clientX - x;
            x = event.clientX;
            const newWidth = Math.max(width - dx, 300);
            width = newWidth;
            resizable.style.width = `${width}px`;
            setWidth(width);
        }

        


        //resize eventListener
        const resizerRight = refRight.current;
        if (resizerRight) {
          resizerRight.addEventListener('mousedown', onMouseDownRightResize);
        }
        const resizerLeft = refLeft.current;
        if (resizerLeft) {
          resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);
        }

        return () => {
            if(resizerRight){
                resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
            }
            if(resizerLeft){
                resizerLeft.removeEventListener("mousedown", onMouseDownLeftResize);
            }
        };

        
    },[])


    function maximizeControl() {
        setMaximize(!isMaximize);
    
     }

    function minimizeControl(){
        alert("clicked")
    }
    function closeControl(){
        alert("clicked")
    }

    // const resizable1 = ref.current as HTMLElement;
    return (
    <>
    {/* <div className="os-div"> */}
    <Draggable handle= ".wb-header" bounds="parent" position={isMaximize ? { x: 0, y: 0 } : position}
    onDrag={(e: DraggableEvent | TouchEvent, data: DraggableData) => {
        if (isMaximize) {
          setMaximize(!isMaximize);
          const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
          const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
          setPosition({ x: clientX - 100, y: clientY });
        }
    }}
    onStop={(e, data) => {
        if (!isMaximize) {
          setPosition({ x: data.x, y: data.y });
        }
      }}
    >

      
    {/* top: isMaximize ? '0' : '30px', left: isMaximize ? '0' : '30px' , */}
    <div ref={ref as React.RefObject<HTMLDivElement>} className="winbox" style={{ left: isMaximize?'0px':left ,height: isMaximize ? '100%' : height, width: isMaximize ? '100%' : width} }>
        <div className="wb-header">
            <div className="wb-drag" onDoubleClick={maximizeControl}>
                {/* <div className="wb-ic9on"></div> */}
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
        {/* <div className="wb-sizeable"> */}
        <div ref={refTop} className="wb-top"></div>
        <div ref={refBottom} className="wb-bottom"></div>
        <div ref={refRight} className="wb-right"></div>
        <div ref={refLeft} className="wb-left"></div>
        <div ref={refTopLeft} className="wb-top-left"></div>
        <div ref={refTopRight} className="wb-top-right"></div>
        <div ref={refBottomLeft} className="wb-bottom-left"></div>
        <div ref={refBottomRight} className="wb-bottom-right"></div>
        {/* </div> */}
    </div>
                    
        </Draggable>
        {/* </div> */}

    </>
  );
}