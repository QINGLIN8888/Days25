import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter1Slice';
import strReducer from './stringSlice';
import counter_add_Reducer from './addSlice';
import counter_mul_Reducer from './mulSlice';
import counter_sub_Reducer from './subSlice';
import counter_dev_Reducer from './devSlice';
import changeReducer from './HW/exchange'

export default configureStore({
    reducer: {
        counter: counterReducer,
        str: strReducer,
        counter_add: counter_add_Reducer,
        counter_mul: counter_mul_Reducer,
        counter_sub: counter_sub_Reducer,
        counter_dev: counter_dev_Reducer,
        change: changeReducer,
    },
})