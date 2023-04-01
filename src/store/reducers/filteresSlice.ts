import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IFilteres,
  TSorterType,
  TTypeOfProductApplications,
} from "../../lib/types/types";

const initialState: IFilteres = {
  priceFrom: null,
  priceTo: null,
  brands: [],
  productApplyingTypes: [],
  producerСountries: [],
  sortBy: "name",
  isIncreaseSorting: true,
  numberOfItemsPerPage: 6,
  currentPage: 1,
};

const filtersSlice = createSlice({
  name: "filteres",
  initialState,
  reducers: {
    changeSortType(state: IFilteres, action: PayloadAction<TSorterType>) {
      state.sortBy = action.payload;
    },
    toggleApplicationFilterValue(
      state: IFilteres,
      action: PayloadAction<TTypeOfProductApplications>
    ) {
      if (state.productApplyingTypes.includes(action.payload)) {
        state.productApplyingTypes = state.productApplyingTypes.filter(
          (types) => types !== action.payload
        );
      } else {
        state.productApplyingTypes = [
          ...state.productApplyingTypes,
          action.payload,
        ];
      }
    },
    toggleBrandFilterValue(state: IFilteres, action: PayloadAction<string>) {
      if (state.brands.includes(action.payload)) {
        state.brands = state.brands.filter((types) => types !== action.payload);
      } else {
        state.brands = [...state.brands, action.payload];
      }
    },
    toggleProducerСountryFilterValue(
      state: IFilteres,
      action: PayloadAction<string>
    ) {
      if (state.producerСountries.includes(action.payload)) {
        state.producerСountries = state.producerСountries.filter(
          (types) => types !== action.payload
        );
      } else {
        state.producerСountries = [...state.producerСountries, action.payload];
      }
    },
    resetFilteres() {
      return initialState;
    },
    changeFilterPriceFrom(state: IFilteres, action: PayloadAction<number>) {
      state.priceFrom = action.payload;
    },
    changeFilterPriceTo(state: IFilteres, action: PayloadAction<number>) {
      state.priceTo = action.payload;
    },
    toggleSortDirection(state) {
      state.isIncreaseSorting = !state.isIncreaseSorting;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
});

export const {
  changeSortType,
  toggleApplicationFilterValue,
  toggleBrandFilterValue,
  toggleProducerСountryFilterValue,
  resetFilteres,
  changeFilterPriceFrom,
  changeFilterPriceTo,
  toggleSortDirection,
  changeCurrentPage
} = filtersSlice.actions;

export default filtersSlice.reducer;
