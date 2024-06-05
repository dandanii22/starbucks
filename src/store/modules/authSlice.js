import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logData: localStorage.getItem('logData')
        ? JSON.parse(localStorage.getItem('logData'))
        : [
              {
                  id: 1,
                  email: 'user1@naver.com',
                  nickName: '별명',
                  password: '123',
                  passwordchk: '123',
                  tel: '010-1111-1111',
                  myReward: {
                      stars: 1,
                      frequency: 1,
                  },
                  myCard: [],
                  myMenus: [],
              },
          ],
    user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : {
              id: 1,
              email: 'user1@naver.com',
              nickName: '별명',
              password: '123',
              passwordchk: '123',
              tel: '010-1111-1111',
              myReward: {
                  stars: 1,
                  frequency: 1,
              },
              myCard: [],
              myMenus: [],
          },
    authed: false,
    tabMenus: [],
    name: '',
    currentDate: '',
    keepData: localStorage.getItem('keepData') ? JSON.parse(localStorage.getItem('keepData')) : '',
    isChk: localStorage.getItem('isChk') ? JSON.parse(localStorage.getItem('isChk')) : false,
};

let no = initialState.logData.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const newItem = state.logData.find((item) => item.email === email);
            if (newItem && newItem.password === password) {
                state.user = newItem;
                state.authed = true;
            } else {
                alert('비밀번호를 잘못 입력하였습니다.');
                state.authed = false;
            }
        },

        logout: (state, action) => {
            // state.user = null;
            // state.authed = false;
            if (state.user) {
                // logData에서 현재 사용자 정보를 찾아 업데이트
                const updatedLogData = state.logData.map((item) =>
                    item.id === state.user.id ? { ...item, ...state.user } : item
                );
                // 로컬스토리지에 업데이트된 logData 저장
                localStorage.setItem('logData', JSON.stringify(updatedLogData));
                state.logData = updatedLogData;
            }
            state.user = null;
            state.authed = false;
            localStorage.removeItem('user'); // 로그인한 사용자 정보를 로컬스토리지에서 제거
        },
        join: (state, action) => {
            state.logData = [...state.logData, { id: no++, ...action.payload }];
            localStorage.setItem('dataList', JSON.stringify(state.logData));
            state.name = action.payload.nickName;
        },
        signUpDate: (state, action) => {
            const getDate = () => {
                const today = new Date();
                const month = today.getMonth() + 1;
                const year = today.getFullYear();
                const date = today.getDate();
                return `${year}-${month}-${date}`;
            };

            state.currentDate = getDate();
            console.log(state.currentDate);
        },
        keepID: (state, action) => {
            const { email, password } = action.payload;
            const keepLogId = state.logData.find((item) => item.email === email);
            state.keepData = keepLogId.email;
            localStorage.setItem('keepData', JSON.stringify(state.keepData));
        },
        keepChk: (state, action) => {
            state.isChk = action.payload;
            localStorage.setItem('isChk', JSON.stringify(action.payload));
        },
        removeKeep: (state, action) => {
            localStorage.removeItem('keepData');
        },
    },
});

export const { login, logout, join, signUpDate, keepID, keepChk, removeKeep } = authSlice.actions;
export default authSlice.reducer;
