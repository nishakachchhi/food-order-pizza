import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import cartSliceUi from "./CartSliceUi";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, cartUi: cartSliceUi.reducer },
});

export default store;
