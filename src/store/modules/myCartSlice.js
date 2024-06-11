import { createSlice } from "@reduxjs/toolkit";
import { onToggle } from "../../../../09_react/day15_project2/src/store/modules/cartSlice";

const initialState = {
  cart: [],
  chkCart: [],
  totalNum: 0,
  totalPrice: 0,
};

export const myCartSlice = createSlice({
  name: "myCart",
  initialState,
  reducers: {
    CheckCart: (state, action) => {
      state.chkCart = [];
      state.chkCart = state.cart.filter((item) => item.isChk === true);
    },
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
    delCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.idx !== action.payload);
    },
    numChange: (state, action) => {
      state.cart = state.cart.map((data) =>
        data.idx === action.payload.idx ? action.payload : data
      );
    },
    totalCart: (state, action) => {
      state.chkCart
        ? (state.totalPrice = state.chkCart.reduce(
            (acc, curr) => acc + curr.price * curr.num,
            0
          ))
        : 0;
    },
    totalNumber: (state, action) => {
      state.chkCart
        ? (state.totalNum = state.chkCart.reduce(
            (acc, curr) => acc + Number(curr.num),
            0
          ))
        : 0;
    },
    delAll: (state, action) => {
      state.cart = [];
    },
    onChkToggle: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.idx === action.payload ? { ...item, isChk: !item.isChk } : item
      );
      state.chkCart = state.chkCart.map((item) =>
        item.idx === action.payload ? null : item
      );
    },
    onChkAll: (state, action) => {
      action.payload
        ? (state.cart = state.cart.map((item) =>
            item.isChk ? { ...item, isChk: false } : item
          ))
        : (state.cart = state.cart.map((item) =>
            item.isChk ? item : { ...item, isChk: true }
          ));
    },
  },
});

export const {
  addCart,
  delCart,
  numChange,
  totalCart,
  totalNumber,
  delAll,
  onChkToggle,
  onChkAll,
  CheckCart,
} = myCartSlice.actions;
export default myCartSlice.reducer;