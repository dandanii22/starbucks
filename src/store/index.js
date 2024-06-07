import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/modules/authSlice';
import myStar from './modules/myStarbucksSlice';
import drinkMenu from "./modules/drinkMenuSlice";
import noticeR from './modules/noticeSlice';

export const store = configureStore({
    reducer: {
        authR: authReducer,
        drinkMenu,
         noticeR,
          myStar,
    },
});
