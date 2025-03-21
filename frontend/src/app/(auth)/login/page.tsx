"use client"

import React from "react";

import { AuthLayout, Form, LoginForm } from "@/components";
import { RootState, useAppSelector } from "@/redux/store";
import { LOGIN_DECOR_OBJECT, LOGIN_BANNER } from "@/constants";

const LoginPage: React.FC = () => {
    const { email, password } = useAppSelector((state: RootState) => state.auth);
    console.log({ email, password });
    
    return (
        <AuthLayout banner={LOGIN_BANNER} decor={LOGIN_DECOR_OBJECT}>
            <Form form={<LoginForm />} title={"Login to your Account"} subtitle={"See what is going on with your business"} buttonText={"Continue"}/>
        </AuthLayout>
    );
};

export default LoginPage;