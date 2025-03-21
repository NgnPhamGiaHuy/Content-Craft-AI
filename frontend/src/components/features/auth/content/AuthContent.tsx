"use client"

import React from "react";
import Image from "next/image";

import { AuthBanner } from "@/components";
import { AuthContentProps } from "@/types";

const AuthContent : React.FC<AuthContentProps> = ({ children, banner, decor }) => {
    return (
        <main className={"flex-1"}>
            <div className={"w-270 mx-auto"}>
                <div className={"w-full flex flex-col md:flex-row bg-white/90 shadow-[0px_3px_49px_9px_rgba(0,0,0,0.06)] rounded-2xl relative"}>
                    <Image src={decor.right.imgSrc} alt={decor.right.imgAlt} width={decor.right.width} height={decor.right.height} className={decor.right.className}/>
                    <Image src={decor.left.imgSrc} alt={decor.left.imgAlt} width={decor.left.width} height={decor.left.height} className={decor.left.className}/>
                    <div className={"w-full md:w-[55%]"}>
                        <AuthBanner { ...banner } />
                    </div>
                    <div className={"w-full md:w-[45%] p-8"}>
                        { children }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AuthContent;