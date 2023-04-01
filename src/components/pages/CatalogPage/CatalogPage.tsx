import { FC } from "react";

import styles from "./CatalogPage.module.scss";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { Sorter } from "../../blocks/CatalogPage/Sorter/Sorter";
import { FilterProductByApply } from "../../blocks/CatalogPage/FilterProductByApply/FilterProductByApply";
import { GenaralFilters } from "../../blocks/CatalogPage/GenaralFilters/GenaralFilters";
import { ProductList } from "../../blocks/CatalogPage/ProductList/ProductList";



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
