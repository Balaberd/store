import { FC } from "react";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { FilterProductByApply } from "./components/FilterProductByApply/FilterProductByApply";
import { GenaralFilters } from "./components/GenaralFilters/GenaralFilters";
import { ProductList } from "./components/ProductList/ProductList";
import { Sorter } from "./components/Sorter/Sorter";
import styles from "./CatalogPage.module.scss";



export const CatalogPage: FC = () => {
  return (
    <div className={styles._}>
      <Breadcrumbs />

      <div className={styles.titleRow}>
        <h1 className={styles.title}>Каталог</h1>
        <Sorter />
      </div>

      <FilterProductByApply />

      <div className={styles.contentWrapper}>

        <div className={styles.filteresBlock}>
          <GenaralFilters />
          <FilterProductByApply isColumnList />
          <Sorter className={styles.mobileSorter} />
        </div>

        <ProductList />

      </div>
    </div>
  );
};
