import React from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa6";

import { LabelIconButton } from "@/components";

const OAuthLogin : React.FC = () => {
    const icons = [
        { icon: <FaFacebookF />, label: "Facebook", bgColor: "bg-blue-900" },
        { icon: <FaGoogle />, label: "Google", bgColor: "bg-red-600" },
        { icon: <FaApple />, label: "Apple", bgColor: "bg-black" },
    ]
    
    return (
        <div className={"w-full flex flex-row flex-wrap gap-6 justify-between"}>
            { icons.map((icon, i) => (
                <LabelIconButton key={i} icon={icon.icon} label={icon.label} bgColor={icon.bgColor}/>
            )) }
        </div>
    );
};

export default OAuthLogin;