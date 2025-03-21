"use client"

import React from "react";

import { AuthLayout, Form, RegisterForm } from "@/components";
import { REGISTER_DECOR_OBJECT, REGISTER_BANNER } from "@/constants";

const RegisterPage: React.FC = () => {
    
    return (
        <AuthLayout banner={REGISTER_BANNER} decor={REGISTER_DECOR_OBJECT}>
            <Form form={<RegisterForm />} title={"Create Your Account"} buttonText={"Continue"}/>
        </AuthLayout>
    );
};

export default RegisterPage;