import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Order } from "./types";
import { CartItem } from "../cart/types";

interface OrderState {
  history: Order[];
}

const initialState: OrderState = {
  history: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    placeOrder: (
      state,
      action: PayloadAction<{ id: string; items: CartItem[]; total: number }>
    ) => {
      state.history.push({
        id: action.payload.id,
        date: new Date().toLocaleString(),
        items: action.payload.items,
        total: action.payload.total,
      });
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
