import React from "react";

import { useDispatch } from "react-redux";

import { AuthInput, CheckBoxLink } from "@/components";
import { RootState, useAppSelector } from "@/redux/store";
import { setEmail, setPassword } from "@/redux/slices/authSlice";

const LoginForm : React.FC = () => {
    const dispatch = useDispatch();
    const { email, password } = useAppSelector((state: RootState) => state.auth);
    
    return (
        <div className={"flex flex-col gap-5"}>
            <div className={"flex flex-col gap-4"}>
                <AuthInput label={"Email"} type={"text"} placeholder={"Email"} value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
                <AuthInput label={"Password"} type={"password"} placeholder={"Enter password"} value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
            </div>
            <div className={"flex flex-row justify-between"} >
                <CheckBoxLink id={"checkbox"} label={"Remember me"}/>
                <span className={"text-base text-secondary-dark font-normal leading-normal"}>
                    Forgot password?
                </span>
            </div>
        </div>
    );
};

export default LoginForm;