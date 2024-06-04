import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/modules/authSlice';

export const store = configureStore({
    reducer: {
        authR: authReducer,
    },
});
