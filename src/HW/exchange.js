import { createSlice } from "@reduxjs/toolkit";

export const exchange = createSlice({
    name: 'change',
    initialState: {
        money: 0,
    },
    reducers: {
        Deposit: (state, action) => {
            state.money += action.payload
        },
        takeout: (state, action) => {
            state.money -= action.payload
        },
        allout: (state) => {
            state.money = 0
        },
    },
})

export const { Deposit, takeout, allout } = exchange.actions
export default exchange.reducer