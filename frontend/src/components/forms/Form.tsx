import React from 'react';
import {FcGoogle} from "react-icons/fc";

import {LabelIconButton, Landscape, SecondaryButton} from "@/components";

interface FormProps {
    form: React.ReactNode;
    title: string;
    subtitle?: string;
    buttonText: string;
}

const Form : React.FC<FormProps> = ({ form, title, subtitle, buttonText }) => {
    return (
        <div className={"flex flex-col gap-4"}>
            <Landscape logoPath="/logo.png" logoName="IMAJIN" className="flex items-start" logoSize="w-12 h-12" titleSize="text-3xl"/>
            <div>
                <h2 className={"text-2xl text-left text-primary-darker font-semibold leading-normal"}>
                    { title }
                </h2>
                { subtitle && (
                    <p className={"text-base text-primary-dark font-normal leading-normal"}>
                        { subtitle }
                    </p>
                ) }
            </div>
            <div className={"w-full flex flex-row flex-wrap gap-6 justify-between"}>
                <LabelIconButton icon={<FcGoogle/>} label={"Continue with Google"} borderColor={"text-primary-darker"} />
            </div>
            <div className={"w-full my-4"}>
                <div className={"w-full flex whitespace-nowrap flex-center text-center before:w-full before:border-b-1 before:border-solid before:border-gray-500 after:w-full after:border-b-1 after:border-solid after:border-gray-500"}>
                    <span className={"mx-8 text-base text-gray-500 font-normal leading-normal"}>
                        Or login with email
                    </span>
                </div>
            </div>
            { form }
            <SecondaryButton onClick={() => {}} size={"md"} className={"w-full h-12 my-4"}>
                { buttonText }
            </SecondaryButton>
        </div>
    );
};

export default Form;