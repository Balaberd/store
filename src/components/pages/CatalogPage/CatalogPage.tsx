import { FC } from "react";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { Sorter } from "../../blocks/catalog/Sorter/Sorter";
import { FilterByApply } from "../../blocks/catalog/FilterByApply/FilterByApply";
import { ProductList } from "../../widgets/ProductList/ProductList";
import { MainFilteres } from "../../widgets/MainFilteres/MainFilteres";
import styles from "./CatalogPage.module.scss";


export const CatalogPage: FC = () => {
  return (
    <div className={styles._}>
      <Breadcrumbs />

      <div className={styles.titleRow}>
        <h1 className={styles.title}>Каталог</h1>
        <Sorter className={styles.sorter} />
      </div>

      <FilterByApply />

      <div className={styles.contentWrapper}>

        <div className={styles.filteresBlock}>
          <MainFilteres />
          <FilterByApply isColumnList />
          <Sorter className={styles.mobileSorter} />
        </div>

        <ProductList />

      </div>
    </div>
  );
};
