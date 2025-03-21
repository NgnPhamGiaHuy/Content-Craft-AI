"use client"

import React from "react";

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    icon?: React.ReactNode;
    size?: "sm" | "md" | "lg";
}

const PrimaryButton : React.FC<ButtonProps> = ({ onClick, children, className = "", disabled = false, icon, size = "md" }) => {
    const baseStyle = "flex items-center gap-2 text-primary-darker font-semibold uppercase leading-normal cursor-pointer";
    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <button onClick={onClick} disabled={disabled}
            className={`${baseStyle} ${sizeClasses[size]} ${className} ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
            }`}
        >
            { icon && <span>{ icon }</span> }
            { children }
        </button>
    );
};

export default PrimaryButton;