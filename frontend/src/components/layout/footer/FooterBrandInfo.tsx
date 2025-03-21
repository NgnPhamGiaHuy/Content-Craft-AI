"use client"

import React from 'react';

import { Landscape } from "@/components";

interface FooterBrandInfoProps {
    baseWidth?: string;
}

const FooterBrandInfo : React.FC<FooterBrandInfoProps> = ({ baseWidth }) => {
    return (
        <div className={`${baseWidth} flex-none-auto`}>
            <div className={"flex flex-col gap-2 items-start"}>
                <Landscape logoPath="/logo.png" logoName="IMAJIN" className="flex-center" logoSize="w-10 h-10" titleSize="text-2xl"/>
                <div>
                    <span className={"text-sm text-primary-darker font-normal leading-normal select-none"}>
                        Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
                    </span>
                </div>
                <div>
                    <span className={"text-sm text-primary-darker font-normal leading-normal select-none"}>
                        © Imajin Theme 2021
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FooterBrandInfo;