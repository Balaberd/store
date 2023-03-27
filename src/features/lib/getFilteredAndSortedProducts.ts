import {
  IFilteres,
  IProduct,
  ISorter,
  TypesOfSort,
  TProductTypesByApply,
} from "../../types/types";

const getSortedListByType = (
  a: IProduct,
  b: IProduct,
  sortBy: TypesOfSort,
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

const checkHasSameElements = (
  productValues: string[],
  filterValues: TProductTypesByApply[]
): boolean => {
  for (let i = 0; i <= filterValues.length - 1; i++) {
    if (!productValues.includes(filterValues[i])) {
      return false;
    }
  }
  return true;
};

export const getFilteredAndSortedProducts = (
  filters: IFilteres,
  products: IProduct[],
  sorter: ISorter
) => {
  let result = [];
  const { sortBy, isIncreaseSorting } = sorter;

  const isApplyingFilterActive = filters.applying.length > 0;
  const isBrandFilterActive = filters.brand.length > 0;
  const isCountryesFilterActive = filters.manufacturerСountry.length > 0;

  const isPriceFilterActive =
    filters.price.from !== null || filters.price.from !== null;

  if (
    !isBrandFilterActive &&
    !isPriceFilterActive &&
    !isApplyingFilterActive &&
    !isCountryesFilterActive
  ) {
    return products.sort((a, b) =>
      getSortedListByType(a, b, sortBy, isIncreaseSorting)
    );
  }

  for (let i = 0; i < products.length; i++) {

    const priceFrom = filters.price.from ? filters.price.from : 0;
    const priceTo = filters.price.to ?  filters.price.to : Infinity;
    
    const conditionForPriceFilter = isPriceFilterActive
      ? products[i].price > priceFrom &&
        products[i].price < priceTo
      : true;

    const conditionForBrandFilter = isBrandFilterActive
      ? filters.brand.includes(products[i].brand)
      : true;

    const productApplyList = products[i].applying;

    const conditionForTypeApplyFilter = isApplyingFilterActive
      ? checkHasSameElements(productApplyList, filters.applying)
      : true;

    const conditionForCountryesFilter = isCountryesFilterActive
      ? filters.manufacturerСountry.includes(products[i].manufacturerСountry)
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

  return result.sort((a, b) =>
    getSortedListByType(a, b, sortBy, isIncreaseSorting)
  );
};
