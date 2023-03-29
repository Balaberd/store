import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasket } from "../../types/types";

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
      if(quantity === 1) {
        delete state[id]
      } else {
        state[id] = --state[id];
      }
    },
    removeProductFromBasket(state,  action: PayloadAction<string>) {
      delete state[action.payload]
    }
  },
});

export const { getBasketFromLocalStorage, addItemToBasket, refreshLocalStorageBasket, removeItemFromBasket, removeProductFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
