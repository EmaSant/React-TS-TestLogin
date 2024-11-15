import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//State slice variables
interface userInfoState {
    user: string;
    email: string;
    imgUrl: string;
};

//State variables default values.
const initialState: userInfoState = {
    user: "",
    email: "",
    imgUrl: "",
};

//Using Redux to initialize the slice and set custom reducers to perform actions il the app later.
const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        setUser: (state,action: PayloadAction<string>) => {
            state.user = action.payload;
        },
        setEmail: (state,action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setImgUrl: (state,action: PayloadAction<string>) => {
            state.imgUrl = action.payload;
        }
    },

});

export const { setUser, setEmail,setImgUrl } = userInfoSlice.actions;

export default userInfoSlice.reducer;