import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
    name: 'counter_sub',
    initialState: {
        value3: 0,
    },
    reducers: {
        sub: (state, action) => {
            state.value3 = Number(action.payload.suband)
                - Number(action.payload.subend);
        },
    },
})

export const { sub } = subSlice.actions
export default subSlice.reducer
