import { createSlice } from "@reduxjs/toolkit";
import { productsMock } from "../../lib/mock/mock";
import { IProduct } from "../../lib/types/types";

const initialState: IProduct[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts() {
      const localStorageProducts = localStorage.getItem("products");
      if (
        localStorageProducts &&
        JSON.parse(localStorageProducts).length !== 0
      ) {
        return JSON.parse(localStorageProducts);
      } else {
        localStorage.setItem("products", JSON.stringify(productsMock));
        return productsMock;
      }
    },
    addProduct(state, action) {
      state.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state));
    },
    setProduct(state, action) {
      const changedProductIndex = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[changedProductIndex] = action.payload;
      localStorage.setItem("products", JSON.stringify(state));
    },
    removeProduct(state, action) {
      state = state.filter((product) => product.id !== action.payload);
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export const { getProducts, addProduct, setProduct, removeProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
