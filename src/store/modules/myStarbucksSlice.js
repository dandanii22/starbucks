// 2. 비동기 X
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    tabMenus: [],
    level: null,
    isShow: { isReward: true, isCard: true, isFre: true, isMenu: true, isShowEx: true, isBarcode: false },
};

// user가 존재하고 myMenus가 정의된 경우에만 필터링
if (initialState.user && initialState.user.myMenus) {
    initialState.tabMenus = initialState.user.myMenus.filter((menu) => menu.cate === 1);
}

export const myStarbucksSlice = createSlice({
    name: 'myStar',
    initialState,
    reducers: {
        rewards: (state, action) => {
            const { stars } = action.payload;
            if (stars < 5) {
                state.level = 'Welcome';
            } else if (stars < 30) {
                state.level = 'Green';
            } else {
                state.level = 'Gold';
            }
        },
        onToggle: (state, action) => {
            const { key } = action.payload;
            state.isShow[key] = !state.isShow[key];
        },
        myMenuChange: (state, action) => {
            state.tabMenus = state.user.myMenus.filter((menu) => menu.cate === parseInt(action.payload));
        },
        myMenuDel: (state, action) => {
            state.tabMenus = state.tabMenus.filter((menu) => {
                return !action.payload.some((pay) => menu.id === pay.id && menu.kor === pay.kor);
            });

            if (state.user) {
                state.user.myMenus = state.user.myMenus.filter((menu) => {
                    return !action.payload.some((pay) => menu.id === pay.id && menu.kor === pay.kor);
                });
            }
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        updateCardNickname: (state, action) => {
            const { id, newNickName } = action.payload;
            const card = state.user.myCard.find((card) => card.id === id);
            if (card) {
                card.cardNicname = newNickName;
            }
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        rechargeCard: (state, action) => {
            const { id, amount } = action.payload;
            const card = state.user.myCard.find((card) => card.id === id);
            if (card) {
                card.recharge += amount;
                localStorage.setItem('user', JSON.stringify(state.user));
            }
        },
    },
});

export const { rewards, onToggle, myMenuChange, myMenuDel, updateCardNickname, rechargeCard } = myStarbucksSlice.actions;
export default myStarbucksSlice.reducer;
