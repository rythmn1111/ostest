import React, { useState } from "react";
import Image from "next/image";

function directory(){
    alert("App Directory");
}

export default function AppDirectory(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="app-directory-container">
        <Image src="/app_directory.svg" alt="Logo" width={40} height={40} style={{}} onClick={toggleMenu} className="app-directory" />
        {isMenuOpen && (<div className="app-directory-menu">
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
        </div>)}
        </div>
    )
    
}