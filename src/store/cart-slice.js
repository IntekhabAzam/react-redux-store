import { createSlice } from "@reduxjs/toolkit";
import storeItems from "../data/items.json";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialCartState = {
  cartItems: items,
  storeItems,
  isOpen: false,
};

const setItemsInLocalStorage = (item) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    increaseCartQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      setItemsInLocalStorage(state.cartItems);
    },

    decreaseCartQuantity: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        itemInCart.quantity--;
      }

      setItemsInLocalStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      setItemsInLocalStorage(state.cartItems);
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
