import React from "react";

interface FooterSectionProps {
    title: string;
    links: { href: string, label: string }[];
    baseWidth?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, baseWidth = "w-1/5" }) => {
    return (
        <div className={`${baseWidth} flex-none-auto`}>
            <div className="px-8 flex flex-col items-start gap-2">
                <div className={"pb-2"}>
                    <span className="text-base text-secondary-dark font-bold uppercase leading-normal select-none">
                        { title }
                    </span>
                </div>
                <ul className={"flex flex-col gap-2"}>
                    { links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                <span className="text-sm text-primary-darker font-normal leading-normal">
                                  { link.label }
                                </span>
                            </a>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );
};

export default FooterSection;