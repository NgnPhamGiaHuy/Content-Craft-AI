"use client"

import React from "react";
import { SiGmail } from "react-icons/si";
import { FaApple, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import { RoundedIconButton } from "@/components";

const FooterSocials : React.FC = () => {
    const socialIcons = [
        { id: "facebook", icon: <FaFacebookF className="w-4 h-4 text-white" /> },
        { id: "gmail", icon: <SiGmail className="w-4 h-4 text-white" /> },
        { id: "apple", icon: <FaApple className="w-4 h-4 text-white" /> },
        { id: "twitter", icon: <FaXTwitter className="w-4 h-4 text-white" /> }
    ];
    
    return (
        <div className={"flex flex-row items-center justify-between"}>
            { socialIcons.map(({ id, icon }) => (
                <RoundedIconButton key={id} icon={icon} />
            )) }
        </div>
    );
};

export default FooterSocials;