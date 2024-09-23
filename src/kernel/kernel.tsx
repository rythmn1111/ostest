import Image from "next/image";
import React from "react";

export default function MainDeliver() {
  return <div>Medical Records App</div>;
}

export function WindowDeliver() {
  return <div>Medical Records App</div>;
}

export function TaskBarDeliver() {
  return <div>Medical Records App</div>;
}

export function TestingMenu(){
  return <>
      <div style={{display: "flex",marginBottom:"10px"}} className="menu">
        <div><Image src="/report_upload.svg" alt="Logo" width={40} height={40}  style={{marginLeft:"10px"} } className="menu-svg" /></div>
        <div style={{marginLeft: "10px", marginTop: "5px",marginRight:"10px"}} className="menu"> upload/view report</div>
      </div>
  </>
}