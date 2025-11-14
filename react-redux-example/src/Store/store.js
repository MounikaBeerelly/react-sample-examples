import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/counterSlice';
import countReducer from '../redux/countSlice';
import userReducer from '../redux/userSlice';

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        count : countReducer,
        users : userReducer
    }
});