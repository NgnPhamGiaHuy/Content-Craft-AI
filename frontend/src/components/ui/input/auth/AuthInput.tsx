import React from 'react';

interface AuthBannerProps {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const AuthInput : React.FC<AuthBannerProps> = ({ label, type, placeholder, value, onChange, className }) => {
    return (
        <div className={"w-full flex flex-col items-start gap-2"}>
            <div>
                <span className={"text-base text-primary-darker font-normal leading-normal"}>
                    { label }
                </span>
            </div>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={" w-full h-12 px-4 py-3 outline-none rounded-lg border border-solid border-gray-500"}/>
        </div>
    );
};

export default AuthInput;