import { FC, useState, useEffect } from "react";
import { productsMock } from "../../../MOCK/MOCK";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { IFilteres, IProduct, ISorter, TypesOfSort } from "../../../types/types";
import { getDataForFilteres } from "../../lib/getDataForFilteres";
import { getFilteredAndSortedProducts } from "../../lib/getFilteredAndSortedProducts";
import styles from "./Catalog.module.scss";
import { FilterProductByApply } from "./components/FilterProductByApply/FilterProductByApply";
import { GenaralFilters } from "./components/GenaralFilters/GenaralFilters";
import { ProductList } from "./components/ProductList/ProductList";
import { Sorter } from "./components/Sorter/Sorter";

export const defaultFiltersState: IFilteres = {
  price: {
    from: null,
    to: null,
  },
  brand: [],
  applying: [],
  manufacturerСountry: [],
}

export const Catalog: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [sortSettings, setSorterSettings] = useState<ISorter>({
    sortBy: "name",
    isIncreaseSorting: true,
  });
  const [filteres, setFilteres] = useState<IFilteres>(defaultFiltersState);

  useEffect(() => {
    setProducts(productsMock);
  }, []);

  const handleChangeSortSettings = (newSortType: TypesOfSort) => {
    if (newSortType === sortSettings.sortBy) {
      setSorterSettings({
        ...sortSettings,
        isIncreaseSorting: !sortSettings.isIncreaseSorting,
      });
    } else {
      setSorterSettings({ sortBy: newSortType, isIncreaseSorting: true });
    }
  };
  const handleChangeFilters = (newFilter: IFilteres) => {
    setFilteres(newFilter);
  };

  const dataForFilteres = getDataForFilteres(products);

  const filteredAndSorted = getFilteredAndSortedProducts(
    filteres,
    products,
    sortSettings
  );

  return (
    <div className={styles._}>
      <Breadcrumbs />

      <div className={styles.titleRow}>
        <h1 className={styles.title}>Каталог</h1>
        <Sorter
          handleChangeSortSettings={handleChangeSortSettings}
          sortSettings={sortSettings}
        />
      </div>

      <FilterProductByApply
        filteres={filteres}
        handleChangeFilters={handleChangeFilters}
        productTypesByApply={dataForFilteres.productTypesByApply}
      />

      <div className={styles.contentWrapper}>

        <div className={styles.filteresBlock}>
          <GenaralFilters
            filteres={filteres}
            handleChangeFilters={handleChangeFilters}
            dataForFilteres={dataForFilteres}
          />

          <FilterProductByApply
            filteres={filteres}
            handleChangeFilters={handleChangeFilters}
            productTypesByApply={dataForFilteres.productTypesByApply}
            isColumnList={true}
          />

          <Sorter
            handleChangeSortSettings={handleChangeSortSettings}
            sortSettings={sortSettings}
            className={styles.mobileSorter}
          />
        </div>

        <ProductList products={filteredAndSorted} />

      </div>
    </div>
  );
};
