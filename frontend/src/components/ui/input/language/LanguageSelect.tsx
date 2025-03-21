"use client"

import React, {useState} from "react";
import { FaChevronDown } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

interface LanguageSelectProps {
    languages: { label: string; value: string }[];
    selectedLanguage: string;
    onChange: (value: string) => void;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
}

const LanguageSelect : React.FC<LanguageSelectProps> = ({ languages = [], selectedLanguage, onChange, className = "", disabled = false, size = "md" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selected = languages?.find((lang) => lang.value === selectedLanguage) || languages[0];

    const baseStyle = "w-full flex-between gap-2 border border-solid border-primary-darker text-primary-darker rounded-xl cursor-pointer";
    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <div className={`w-full relative ${className}`}>
            <button onClick={() => !disabled && setIsOpen((prevState) => !prevState)}
                    disabled={disabled}
                    className={`${baseStyle} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}`}
            >
                <AiOutlineGlobal className="w-5 h-5" />
                <div className={"h-5 flex-center"}>
                    <span className={"text-base font-normal leading-normal"}>
                        { selected?.label }
                    </span>
                </div>
                <FaChevronDown className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
            </button>
            { isOpen && (
                <ul className="w-full max-h-32 mt-1 bg-white border border-primary-darker rounded-lg shadow-lg overflow-y-auto absolute z-10">
                    {languages.map((lang) => (
                        <li key={lang.value}
                            onClick={() => {
                                onChange(lang.value);
                                setIsOpen(false);
                            }}
                            className={`px-4 py-2 text-primary-darker cursor-pointer hover:bg-secondary-dark hover:text-white transition-all ${selectedLanguage === lang.value ? "font-bold" : ""}`}
                        >
                            { lang.label }
                        </li>
                    ))}
                </ul>
            ) }
        </div>
    );
};

export default LanguageSelect;