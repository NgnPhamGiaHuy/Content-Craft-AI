import React from "react";

interface CheckBoxLinkProps {
    id?: string;
    label?: string;
    onClick?: () => void;
}

const CheckBoxLink : React.FC<CheckBoxLinkProps> = ({ id, label, onClick }) => {
    return (
        <div className={"flex flex-row items-center gap-2"} onClick={onClick}>
            <input type="checkbox" id={id} className={"w-4 h-4 rounded-full"}/>
            <label htmlFor={id} className={"text-base font-normal leading-normal"}>
                { label }
            </label>
        </div>
    );
};

export default CheckBoxLink;