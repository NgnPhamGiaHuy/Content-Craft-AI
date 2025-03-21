import React from "react";
import { AuthBannerProps, AuthDecorProps } from "@/types";

export interface AuthContentProps {
    children: React.ReactNode;
    banner: AuthBannerProps;
    decor: AuthDecorProps;
}