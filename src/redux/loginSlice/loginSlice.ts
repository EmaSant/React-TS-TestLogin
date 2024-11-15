import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Declaring State slice variables
interface loginInfoState {
    email: string;
    password: string;
    error: string;
    isLoading: boolean;
    authStatus: string;
};

//Default state variables values.
const initialState: loginInfoState = {
    email: "",
    password: "",
    error: "",
    isLoading: false,
    authStatus: ""
};

//Using Redux to initialize the slice and set custom reducers to perform actions il the app later.
const loginInfoSlice = createSlice({
    name: "loginInfo",
    initialState,
    reducers: {
        setEmail: (state,action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state,action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setError: (state,action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setIsLoading: (state,action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setAuthStatus: (state,action: PayloadAction<string>) => {
            state.authStatus = action.payload;
        }
    },

});

export const { setEmail, setPassword,setError,setIsLoading,setAuthStatus } = loginInfoSlice.actions;

export default loginInfoSlice.reducer;