import { createSlice } from "@reduxjs/toolkit";

export const mulSlcie = createSlice({
    name: 'counter_mul',
    initialState: {
        value2: 0,
    },
    reducers: {
        mul: (state, action) => {
            state.value2 = Number(action.payload.mulend)
                * Number(action.payload.muland);
        },
    },
})

export const { mul } = mulSlcie.actions
export default mulSlcie.reducer