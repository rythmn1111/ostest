import React from "react";
import WindowStructure from "@/components/window";
import Image from "next/image";

interface TestingAppProps {
  id: number;
}

export default function TestingApp({ id }: TestingAppProps) {
  return <>
    {/* <Image src="/report.png" alt="Logo" width={800} height={500} style={{marginLeft:"200px",marginTop:"100px"}} /> */}
    <WindowStructure windowId={id}>
        <h1>helloqwdqwdwq</h1>
    </WindowStructure>
</>
}