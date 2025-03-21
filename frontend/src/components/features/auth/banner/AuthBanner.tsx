"use client"

import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

import { AuthBannerProps } from "@/types";

const AuthBanner : React.FC<AuthBannerProps> = ({ title, subtitle, bgGradient, imgSrc, imgAlt, imgPosition, imgClassName, className}) => {
    return (
        <div className={`w-full h-full p-8 flex-center rounded-l-xl overflow-hidden relative ${bgGradient} ${className}`}>
            <div className={"flex flex-col"}>
                <h1 className={"text-6xl text-white font-bold leading-14"}>{ title }</h1>
                <span className={"text-lg text-white font-bold leading-14"}>{ subtitle }</span>
            </div>
            <RiArrowRightLine className="absolute bottom-0 right-0 w-72 h-72 opacity-20" aria-hidden="true" />
            { imgSrc && imgAlt && (
                <div className={`w-full h-full absolute ${imgPosition}`}>
                    <div className={"w-full h-full relative"}>
                        <Image src={imgSrc} alt={imgAlt} fill={true} className={imgClassName} />
                    </div>
                </div>
            ) }
        </div>
    );
};

export default AuthBanner;