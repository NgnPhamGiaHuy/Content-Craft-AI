import React from "react";

import { AuthBannerProps, AuthDecorProps } from "@/types";
import { AuthContent, AuthFooter, AuthHeader } from "@/components";

interface AuthLayoutProps {
    children: React.ReactNode;
    banner: AuthBannerProps;
    decor: AuthDecorProps;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, banner, decor }) => {
    return (
        <div className={"min-h-screen flex flex-col"}>
            <AuthHeader/>
                <AuthContent banner={banner} decor={decor}>
                    { children }
                </AuthContent>
            <AuthFooter/>
        </div>
    );
};

export default AuthLayout;