import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      // Deep clone to avoid mutation of read-only/frozen payload
      const payloadClone = JSON.parse(JSON.stringify(action.payload));

      const exists = state.items.find(
        (item) => item.uniqueGeneratedID === payloadClone.uniqueGeneratedID
      );

      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...payloadClone, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.uniqueGeneratedID !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find(
        (item) => item.uniqueGeneratedID === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
