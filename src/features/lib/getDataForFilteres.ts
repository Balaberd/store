import { IDataForFilteres, IProduct, TProductTypesByApply } from "../../types/types";


export const getDataForFilteres = (products: IProduct[]): IDataForFilteres => {
  const brands: Set<string> = new Set();
  const manufacturerСountrys: Set<string> = new Set();
  const typesByApply:Set<TProductTypesByApply> = new Set();

  products.forEach((product: IProduct) => {
    brands.add(product.brand);
    manufacturerСountrys.add(product.manufacturerСountry);
    product.applying.forEach((el: TProductTypesByApply) => {
      typesByApply.add(el);
    });
  });

  return {
    brandsList: Array.from(brands),
    manufacturerСountrysList: Array.from(manufacturerСountrys),
    productTypesByApply: Array.from(typesByApply),
  };
};
