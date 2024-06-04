import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList: localStorage.getItem('dataList') ? JSON.parse(localStorage.getItem('dataList')) : '',
    user: {
        num: 1,
        id: '',
        password: '',
        passcheck: '',
        name: '',
        tel: '',
        email: '',
    },
    authed: false,
    name: null,
};
let no = initialState.dataList.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { id, password } = action.payload;
            const newItem = state.dataList.find((item) => item.id === id);
            if (newItem && newItem.password === password) {
                state.user = newItem;
                state.authed = true;
            } else {
                alert('비밀번호를 잘못 입력하였습니다.');
                state.authed = false;
            }
        },
        logout: (state, action) => {
            state.user = null;
            state.authed = false;
        },
        join: (state, action) => {
            state.dataList = [...state.dataList, { num: no++, ...action.payload }];
            localStorage.setItem('dataList', JSON.stringify(state.dataList));

            state.name = action.payload.name;
        },
    },
});

export const { login, logout, join } = authSlice.actions;
export default authSlice.reducer;
