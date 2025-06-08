import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/features/cart/cartSlice";
import orderReducer from "@/features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
  },
});

store.subscribe(() => {
  console.log("Redux State Updated:", store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
