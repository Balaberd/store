import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "../../lib/types/types";

export const initialState: IBasket = {};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getBasketFromLocalStorage() {
      let localState = localStorage.getItem("basket");
      if (!localState) {
        localState = JSON.stringify({});
      }
      return JSON.parse(localState);
    },
    refreshLocalStorageBasket(state) {
      localStorage.setItem("basket", JSON.stringify(state))
    },
    addItemToBasket(state, action: PayloadAction<string>) {
      const id = action.payload;
      state[id] = state[id] ? ++state[id] : 1;
    },
    removeItemFromBasket(state, action: PayloadAction<string>) {
      const id = action.payload;
      const quantity = state[id]
      if(quantity < 1) {
        return
      } else {
        state[id] = --state[id];
      }
    },
    removeProductFromBasket(state,  action: PayloadAction<string>) {
      delete state[action.payload]
    },
    removeAllItems() {
      localStorage.setItem("basket", JSON.stringify({}));
      return initialState;
    }
  },
});

export const { getBasketFromLocalStorage, addItemToBasket, refreshLocalStorageBasket, removeItemFromBasket, removeProductFromBasket, removeAllItems } = basketSlice.actions;

export default basketSlice.reducer;
