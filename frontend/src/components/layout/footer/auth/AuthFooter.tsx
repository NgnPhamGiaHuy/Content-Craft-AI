"use client"

import React, { useState } from "react";

import { FooterBrandInfo, FooterLanguage, FooterSection, FooterSocials } from "@/components";

const AuthFooter: React.FC = () => {
    const baseWidth = "w-1/4";
    
    const companyLinks = [
        { href: "#", label: "Donec dignissim" },
        { href: "#", label: "Curabitur eu" },
        { href: "#", label: "Vestibulum ante" },
    ];

    const languages = [
        { label: "English", value: "en" },
        { label: "Tiếng Việt", value: "vi" },
    ];

    const [selectedLanguage, setSelectedLanguage] = useState("en");
    
    return (
        <footer>
            <div className={"w-270 mx-auto px-8 pt-4 pb-8 flex items-center"}>
                <div className={"w-full h-full flex flex-wrap"}>
                    <FooterBrandInfo baseWidth={"w-1/4"} />
                    <div className={"w-3/4 h-full flex flex-wrap justify-end"}>
                        {[1, 2, 3].map((item, i) => (
                            <FooterSection key={i} title="COMPANY" links={companyLinks} baseWidth={baseWidth} />
                        ))}
                        <div className={`${baseWidth} flex-none-auto`}>
                            <div className={"px-4 flex flex-col gap-4"}>
                                <FooterSocials />
                                <FooterLanguage
                                    languages={languages}
                                    selectedLanguage={selectedLanguage}
                                    onChange={(value) => setSelectedLanguage(value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AuthFooter;