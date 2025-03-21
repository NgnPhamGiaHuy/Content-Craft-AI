"use client"

import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

import { Landscape, PrimaryButton, SecondaryButton } from "@/components";

const AuthHeader: React.FC = () => {
    return (
        <header>
            <div className={"w-270 h-20 mx-auto px-8 py-5 flex-between flex-row"}>
                <Landscape logoPath="/logo.png" logoName="IMAJIN" className="flex-center" logoSize="w-10 h-10" titleSize="text-2xl"/>
                <div className={"flex-center flex-row gap-6"}>
                    <PrimaryButton onClick={() => {}} size={"md"}>
                        Login
                    </PrimaryButton>
                    <SecondaryButton onClick={() => {}} size={"md"}>
                        Register
                    </SecondaryButton>
                    <div className={"w-1 h-6 bg-primary-darker rounded-2xl"}></div>
                    <div className={"flex-center"}>
                        <IoSettingsSharp className={"w-7 h-7 text-primary-darker"}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AuthHeader;