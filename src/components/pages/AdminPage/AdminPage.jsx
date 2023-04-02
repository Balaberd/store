import { FC, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./AdminPage.module.scss";
import { ProductSetBlock } from "../../blocks/AdminPage/ProductSetBlock";

const getProducts = () => {
  let localStorageProducts = localStorage.getItem("products");
  if (localStorageProducts === null) {
    localStorage.setItem("products", JSON.stringify([]));
    localStorageProducts = localStorage.getItem("products");
  }
  return JSON.parse(localStorageProducts);
};

const deleteProduct = (id) => {
  const products = getProducts().filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
};

export const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [productFofSetting, setProductForSetting] = useState();

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const deleteProductHandler = (id) => {
    deleteProduct(id);
    setProducts(getProducts());
  };

  const startSettingProduct = (id) => {
    setProductForSetting(products.find((product) => product.id === id));
  };

  const closeBlockHandler = () => {
    setProductForSetting(null);
  };

  const applyProductChanges = (chanchedProduct) => {
    const index = products.findIndex(
      (product) => product.id === chanchedProduct.id
    );
    const newProducts = [...products];
    newProducts[index] = chanchedProduct;
    setProducts(newProducts);
    closeBlockHandler();
  };

  return (
    <div className={styles._}>
      <div className={styles.productsList}>
        {products.map((product) => (
          <div className={styles.product}>
            <span>
              {product.id} {product.name}
            </span>

            <div className={styles.actionBlock}>
              <button
                onClick={() => startSettingProduct(product.id)}
                className={cn(styles.actionButton, styles.actionButton_set)}
              >
                SET
              </button>

              <button
                disabled={!!productFofSetting}
                onClick={() => deleteProductHandler(product.id)}
                className={cn(styles.actionButton, styles.actionButton_delete)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>

      {productFofSetting && (
        <ProductSetBlock
          productFofSetting={productFofSetting}
          closeBlockHandler={closeBlockHandler}
          applyProductChanges={applyProductChanges}
        />
      )}
    </div>
  );
};
