import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filteres from "./reducers/filteresSlice";
import products from "./reducers/productsSlice";
import basket from "./reducers/basketSlice";

const rootReducer = combineReducers({
  filteres,
  products,
  basket,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
