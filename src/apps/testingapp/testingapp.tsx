import React from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";



export default function MedicalRecordsApp() {
  return <>
    {/* <Image src="/report.png" alt="Logo" width={800} height={500} style={{marginLeft:"200px",marginTop:"100px"}} /> */}
    <WindowStructure windowId={110}>
        <h1>hello</h1>
    </WindowStructure>
</>
}