import { configureStore } from "@reduxjs/toolkit";
import  loginInfoReducer  from "./loginSlice/loginSlice"
import userInfoReducer from "./userInfoSlice/userInfoSlice"

export const store = configureStore({
    reducer: {
        loginInfo: loginInfoReducer,
        userInfo: userInfoReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;