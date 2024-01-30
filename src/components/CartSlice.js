import { createSlice } from "@reduxjs/toolkit";

const cartItem = JSON.parse(localStorage.getItem("cartList"))
  ? JSON.parse(localStorage.getItem("cartList"))
  : [];
const totalQuantity = JSON.parse(localStorage.getItem("Quantity"))
  ? JSON.parse(localStorage.getItem("Quantity"))
  : 0;
const totalAmount = JSON.parse(localStorage.getItem("Amount"))
  ? JSON.parse(localStorage.getItem("Amount"))
  : 0;

const initialState = {
  cartItem,
  totalQuantity,
  totalAmount,
};

function setLocalStorage(cartArray, totalItem, totalPrice) {
  localStorage.setItem("cartList", JSON.stringify(cartArray));
  localStorage.setItem("Quantity", JSON.stringify(totalItem));
  localStorage.setItem("Amount", JSON.stringify(totalPrice));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantity++;
      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setLocalStorage(state.cartItem, state.totalQuantity, state.totalAmount);
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item, i) => item.id !== existingItem.id
        );
      }
      state.totalQuantity--;
      existingItem.quantity--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setLocalStorage(state.cartItem, state.totalQuantity, state.totalAmount);
    },

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItem.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== existingItem.id
      );
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setLocalStorage(state.cartItem, state.totalQuantity, state.totalAmount);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
