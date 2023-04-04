import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IFilteres,
  TSorterType,
  TTypeOfProductApplications,
} from "../../lib/types/types";

const initialState: IFilteres = {
  isGeneralFiltersActive: false,
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
      let newApplyingTypesList;
      if (state.productApplyingTypes.includes(action.payload)) {
        newApplyingTypesList = state.productApplyingTypes.filter(
          (types) => types !== action.payload
        );
      } else {
        newApplyingTypesList = [...state.productApplyingTypes, action.payload];
      }
      return {
        ...state,
        isGeneralFiltersActive: false,
        productApplyingTypes: newApplyingTypesList,
      };
    },
    toggleBrandFilterValue(state: IFilteres, action: PayloadAction<string>) {
      let newBrandsList;
      if (state.brands.includes(action.payload)) {
        newBrandsList = state.brands.filter(
          (types) => types !== action.payload
        );
      } else {
        newBrandsList = [...state.brands, action.payload];
      }
      return { ...state, isGeneralFiltersActive: false, brands: newBrandsList };
    },
    toggleProducerСountryFilterValue(
      state: IFilteres,
      action: PayloadAction<string>
    ) {
      let newCountriesList;
      if (state.producerСountries.includes(action.payload)) {
        newCountriesList = state.producerСountries.filter(
          (types) => types !== action.payload
        );
      } else {
        newCountriesList = [...state.producerСountries, action.payload];
      }
      return {
        ...state,
        isGeneralFiltersActive: false,
        producerСountries: newCountriesList,
      };
    },
    resetFilteres() {
      return initialState;
    },
    changeFilterPriceFrom(state: IFilteres, action: PayloadAction<number>) {
      return {
        ...state,
        isGeneralFiltersActive: false,
        priceFrom: action.payload,
      };
    },
    changeFilterPriceTo(state: IFilteres, action: PayloadAction<number>) {
      return {
        ...state,
        isGeneralFiltersActive: false,
        priceTo: action.payload,
      };
    },
    toggleSortDirection(state) {
      state.isIncreaseSorting = !state.isIncreaseSorting;
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    activateGeneralFilteres(state) {
      state.isGeneralFiltersActive = true;
    },
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
  changeCurrentPage,
  activateGeneralFilteres,
} = filtersSlice.actions;

export default filtersSlice.reducer;
