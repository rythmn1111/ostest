import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function directory(){
    alert("App Directory");
}

export default function AppDirectory(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (e: React.MouseEvent) => {
        // e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="app-directory-container" ref={menuRef}>
        <Image src="/app_directory.svg" alt="Logo" width={40} height={40} style={{}} onClick={toggleMenu} className="app-directory" />
        {isMenuOpen && (<div className="app-directory-menu">
            <div>Menu Item 1</div>
            <div>Menu Item 2</div>
            <div>Menu Item 3</div>
        </div>)}
        </div>
    )
    
}