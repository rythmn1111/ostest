import React from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";



export default function MedicalRecordsApp() {
  return <>
    {/* <Image src="/report.png" alt="Logo" width={800} height={500} style={{marginLeft:"200px",marginTop:"100px"}} /> */}
    <WindowStructure windowId={10}>
        <Image src="/waiting.svg" alt="Logo" width={300} height={300} style={{marginLeft:"150px"}} />
    </WindowStructure>
</>
}