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
      if(localStorageProducts && JSON.parse(localStorageProducts).length !== 0) {
        return JSON.parse(localStorageProducts);
      } else {
        localStorage.setItem("products", JSON.stringify(productsMock));
        return productsMock;
      }
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
