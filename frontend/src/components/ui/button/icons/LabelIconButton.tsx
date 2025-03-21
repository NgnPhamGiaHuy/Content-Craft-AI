import React from "react";

interface LabelIconButtonProps {
    onClick?: () => void;
    icon?: React.ReactNode;
    label?: string;
    size?: "sm" | "md" | "lg";
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    className?: string;
}

const LabelIconButton: React.FC<LabelIconButtonProps> = ({
                                                             onClick,
                                                             icon,
                                                             label,
                                                             size = "md",
                                                             bgColor = "",
                                                             textColor = "text-black",
                                                             borderColor = "",
                                                             className = "",
                                                         }) => {
    const baseStyle = "flex-center flex-row flex-1 basis-0 gap-2 rounded-lg border border-solid cursor-pointer";
    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-lg px-4 py-2",
        lg: "text-xl px-6 py-3",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyle} ${sizeClasses[size]} ${bgColor} ${textColor} ${borderColor} ${className}`}
        >
            {icon}
            {label && <span className="font-medium leading-normal">{label}</span>}
        </button>
    );
};

export default LabelIconButton;
