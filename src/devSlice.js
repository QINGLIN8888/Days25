import { createSlice } from "@reduxjs/toolkit";

export const devSlice = createSlice({
    name: 'counter_dev',
    initialState: {
        value4: 0,
    },
    reducers: {
        dev: (state, action) => {
            state.value4 = Number(action.payload.devand)
                / Number(action.payload.devend);
        },
    },
})

export const { dev } = devSlice.actions
export default devSlice.reducer