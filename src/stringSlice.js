import { createSlice } from "@reduxjs/toolkit";

export const stringSlice = createSlice({
    name: 'str',
    initialState: {
        value: "小貓你可以吃起司漢堡囉",
    },
    reducers: {
        changeByH1: (state, action) => {
            state.value = action.payload;
        },
    },
})

export const { changeByH1 } = stringSlice.actions
export default stringSlice.reducer