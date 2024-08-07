import React, { use, useRef } from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from 'react-redux'
import { openWindow, closeWindow, toggleWindow } from "@/redux/windowOpen/windowOpen";





export default function AppList(){
   const isOpen = useSelector((state: RootState) => state.windowOpen.value)
    const dispatch = useDispatch()

   return <>
    <div className="taskbar-elements" onClick={() => dispatch(toggleWindow())}>
        <Image src="/medical_record.svg" alt="Logo" width={40} height={40} style={{}} />
    </div>
    </>
}