/* eslint-disable react-hooks/rules-of-hooks */
import { useAppSelector } from "../hooks/redux";
import {
  IProduct,
  TSorterType,
  TTypeOfProductApplications,
} from "../../lib/types/types";

export const getUniqValuesInProduct = () => {
  const products = useAppSelector((state) => state.products);

  const brands: Set<string> = new Set();
  const producerСountries: Set<string> = new Set();
  const productApplicationTypes: Set<TTypeOfProductApplications> = new Set();

  products.forEach((product) => {
    brands.add(product.brand);

    producerСountries.add(product.producingСountries);

    product.typesOfApplication.forEach((el) => {
      productApplicationTypes.add(el);
    });
  });

  return {
    brands: Array.from(brands),
    producerСountries: Array.from(producerСountries),
    productApplicationTypes: Array.from(productApplicationTypes),
  };
};

export const getProductById = (id: number) => {
  return useAppSelector((state) =>
    state.products.find((product) => product.id === id)
  );
};

export const getProdcutsIdInBasket = () => {
  const basket = useAppSelector((state) => state.basket);
  const productsIdInBasket = Object.keys(basket).map((el) => +el);
  return useAppSelector((state) =>
    state.products.filter((product) => productsIdInBasket.includes(product.id))
  );
};

const sortByProp = (
  a: IProduct,
  b: IProduct,
  sortBy: TSorterType,
  isIncreaseSortDirecrion: boolean
) => {
  if (a[sortBy] < b[sortBy]) {
    return isIncreaseSortDirecrion ? -1 : 1;
  }
  if (a[sortBy] > b[sortBy]) {
    return isIncreaseSortDirecrion ? 1 : -1;
  }
  return 0;
};

const checkHaveSameElements = (
  productValues: string[],
  filterValues: TTypeOfProductApplications[]
): boolean => {
  for (let i = 0; i <= filterValues.length - 1; i++) {
    if (!productValues.includes(filterValues[i])) {
      return false;
    }
  }
  return true;
};

export const getFilteredAndSortedProducts = () => {
  let result = [];

  const { filteres, products } = useAppSelector((state) => state);
  const { sortBy, isIncreaseSorting } = filteres;

  const isApplyingFilterActive = filteres.productApplyingTypes.length > 0;
  const isBrandFilterActive = filteres.brands.length > 0;
  const isCountryesFilterActive = filteres.producerСountries.length > 0;
  const isPriceFilterActive =
    filteres.priceFrom !== null || filteres.priceTo !== null;

  if (
    !isBrandFilterActive &&
    !isPriceFilterActive &&
    !isApplyingFilterActive &&
    !isCountryesFilterActive
  ) {
    return [...products].sort((a, b) => sortByProp(a, b, sortBy, isIncreaseSorting));
  }

  for (let i = 0; i < products.length; i++) {
    const priceFrom = filteres.priceFrom ? filteres.priceFrom : 0;
    const priceTo = filteres.priceTo ? filteres.priceTo : Infinity;

    const conditionForPriceFilter = isPriceFilterActive
      ? products[i].price > priceFrom && products[i].price < priceTo
      : true;

    const conditionForBrandFilter = isBrandFilterActive
      ? filteres.brands.includes(products[i].brand)
      : true;

    const productApplyList = products[i].typesOfApplication;

    const conditionForTypeApplyFilter = isApplyingFilterActive
      ? checkHaveSameElements(productApplyList, filteres.productApplyingTypes)
      : true;

    const conditionForCountryesFilter = isCountryesFilterActive
      ? filteres.producerСountries.includes(products[i].producingСountries)
      : true;

    if (
      conditionForPriceFilter &&
      conditionForBrandFilter &&
      conditionForTypeApplyFilter &&
      conditionForCountryesFilter
    ) {
      result.push(products[i]);
    } else {
      continue;
    }
  }

  return result.sort((a, b) => sortByProp(a, b, sortBy, isIncreaseSorting));
};


export const getProductCountInBasket = (id: number) => {
  return useAppSelector(state => state.basket[String(id)])
}
