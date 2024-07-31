import { createSlice } from "@reduxjs/toolkit";

export const counter1Slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        increment2: (state) => {
            state.value += 2
        },
        decrement2: (state) => {
            state.value -= 2
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        subcrementByAmount: (state, action) => {
            state.value -= action.payload;
        },
        mulcrementByAmount: (state, action) => {
            state.value *= action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value /= action.payload;
        },
        threemul: (state, action) => {
            state.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplithird;
        },
    },
})

export const { increment, decrement,
    increment2, decrement2, incrementByAmount
    , decrementByAmount, subcrementByAmount
    , mulcrementByAmount, threemul }
    = counter1Slice.actions
export default counter1Slice.reducer