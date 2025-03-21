"use client"

import React from "react";
import { useDispatch } from "react-redux";

import { AuthInput } from "@/components";
import { RootState, useAppSelector } from "@/redux/store";
import { setEmail, setPassword, setConfirmPassword } from "@/redux/slices/authSlice";

const RegisterForm : React.FC = () => {
    const dispatch = useDispatch();
    const { email, password, confirmPassword } = useAppSelector((state: RootState) => state.auth);
    
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"flex flex-col gap-4"}>
                <AuthInput label={"Email"} type={"text"} placeholder={"Email"} value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <AuthInput label={"Password"} type={"password"} placeholder={"Enter password"} value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
                <AuthInput label={"Confirm Password"} type={"password"} placeholder={"Confirm Password"} value={confirmPassword || ""} onChange={(e) => dispatch(setConfirmPassword(e.target.value))} />
            </div>
        </div>
    );
};

export default RegisterForm;