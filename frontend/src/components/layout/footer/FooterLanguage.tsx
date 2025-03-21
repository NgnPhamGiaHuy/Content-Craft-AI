import React from "react";

import { LanguageSelect } from "@/components";

interface FooterLanguageProps {
    languages: { label: string; value: string }[];
    selectedLanguage: string;
    onChange: (value: string) => void;
}

const FooterLanguage : React.FC<FooterLanguageProps> = ({ languages, selectedLanguage, onChange }) => {
    return (
        <LanguageSelect languages={languages} selectedLanguage={selectedLanguage} onChange={onChange}/>
    );
};

export default FooterLanguage;