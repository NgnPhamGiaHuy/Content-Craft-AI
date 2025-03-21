"use client"

import React from "react";

interface RoundedIconButtonProps {
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    icon: React.ReactNode;
    size?: "sm" | "md" | "lg";
}

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({ onClick, className = "", disabled = false, icon, size = "md" }) => {
    const baseStyle = "flex items-center justify-center rounded-full bg-secondary-dark cursor-pointer";
    const sizeClasses = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-10 h-10",
        xl: "w-12 h-12",
    };

    return (
        <button onClick={onClick} disabled={disabled}
            className={`${baseStyle} ${sizeClasses[size]} ${className} ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            }`}
        >
            {icon}
        </button>
    );
};
export default RoundedIconButton;