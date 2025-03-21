import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    email: string;
    password: string;
    confirmPassword?: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action: PayloadAction<string>) => {
            state.confirmPassword = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        resetEmail: (state) => {
            state.email = "";
        },
        resetPassword: (state) => {
            state.password = "";
        },
        resetConfirmPassword: (state) => {
            state.confirmPassword = "";
        },
        resetIsLoading: (state) => {
            state.isLoading = false;
        },
        resetError: (state) => {
            state.error = null;  
        },
        resetAuth: (state) => {
            state.email = "";
            state.password = "";
            state.confirmPassword = "";
            state.isLoading = false;
            state.error = null;
        },
    },
});

export const { setEmail, setPassword, setConfirmPassword, setIsLoading, setError, resetEmail, resetPassword, resetConfirmPassword, resetIsLoading, resetError, resetAuth } = authSlice.actions;
export default authSlice.reducer;