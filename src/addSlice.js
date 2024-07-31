import { createSlice } from "@reduxjs/toolkit";

export const addSlcie = createSlice({
    name: 'counter_add',
    initialState: {
        value1: 0,
    },
    reducers: {
        add: (state, action) => {
            state.value1 = Number(action.payload.addend)
                + Number(action.payload.summand);
        },
    },
})

export const { add } = addSlcie.actions
export default addSlcie.reducer