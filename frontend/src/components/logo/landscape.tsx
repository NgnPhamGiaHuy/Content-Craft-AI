"use client"

import React from "react";
import Image from "next/image";

interface LandscapeProps {
    logoPath: string;
    logoName: string;
    logoSize?: string;
    titleSize?: string;
    className?: string;
    children?: React.ReactNode;
}

const Landscape: React.FC<LandscapeProps> = ({ logoPath, logoName, logoSize = "w-16 h-16", titleSize = "text-4xl", className = "", children }) => {
    return (
        <div className={className}>
            <div className="gap-2 flex-center">
                {/* Logo */}
                <div className={`${logoSize} relative`}>
                    <Image src={logoPath} alt="logo" fill className="object-contain" />
                </div>
                {/* Title */}
                <span className={`${titleSize} text-primary-darker select-none font-medium uppercase leading-normal`}>
                    { logoName }
                </span>
                {/* Custom Content */}
                { children}
            </div>
        </div>
    );
};

export default Landscape;