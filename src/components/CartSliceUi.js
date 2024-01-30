import { createSlice } from "@reduxjs/toolkit";

const cartSliceUi = createSlice({
  name: "cartUi",
  initialState: {
    isCartVisible: false,
  },
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const cartUiActions = cartSliceUi.actions;
export default cartSliceUi;
