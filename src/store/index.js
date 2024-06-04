import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/modules/authSlice';
import myStar from './modules/myStarbucksSlice';


export const store = configureStore({
    reducer: {
        authR: authReducer,
    },
});
