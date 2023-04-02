import { FC, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./AdminPage.module.scss";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/reducers/productsSlice";
import { ProductSetBlock } from "../../blocks/AdminPage/ProductSetBlock/ProductSetBlock";
import { ProductCreateBlock } from "../../blocks/AdminPage/ProductCreateBlock/ProductCreateBlock";

const getLocalStorageProducts = () => {
  let localStorageProducts = localStorage.getItem("products");
  if (localStorageProducts === null) {
    localStorage.setItem("products", JSON.stringify([]));
    localStorageProducts = localStorage.getItem("products");
  }
  return JSON.parse(localStorageProducts);
};

const deleteProduct = (id) => {
  const products = getLocalStorageProducts().filter(
    (product) => product.id !== id
  );
  localStorage.setItem("products", JSON.stringify(products));
};

export const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [productFofSetting, setProductForSetting] = useState();
  const [isProductCreatorActive, setIsProductCreatorActive] = useState(false);

  useEffect(() => {
    setProducts(getLocalStorageProducts());
  }, []);

  const deleteProductHandler = (id) => {
    deleteProduct(id);
    setProducts(getLocalStorageProducts());
  };

  const startSettingProduct = (id) => {
    if (isProductCreatorActive) {
      return;
    }
    setProductForSetting(products.find((product) => product.id === id));
  };

  const closeBlockHandler = () => {
    setProductForSetting(null);
  };

  const dispatch = useDispatch();
  const applyProductChanges = (chanchedProduct) => {
    const index = products.findIndex(
      (product) => product.id === chanchedProduct.id
    );

    const newProducts = [...products];
    newProducts[index] = chanchedProduct;

    localStorage.setItem("products", JSON.stringify(newProducts));

    dispatch(getProducts());

    setProducts(newProducts);
    closeBlockHandler();
  };

  const startCreatingNewProduct = () => {
    if (productFofSetting) {
      return;
    }
    setIsProductCreatorActive(true);
  };

  const stopCreatingProductHandler = () => {
    setIsProductCreatorActive(false);
  };

  const createNewProduct = (newProduct) => {

    const newProducts = [...products, newProduct];

    newProducts[newProducts.length - 1].id = newProducts[newProducts.length - 2].id + 1;

    localStorage.setItem("products", JSON.stringify(newProducts));

    setProducts(getLocalStorageProducts());

    dispatch(getProducts());
    stopCreatingProductHandler();
  };

  return (
    <div className={styles._}>
      <button
        onClick={startCreatingNewProduct}
        className={cn(styles.actionButton, styles.actionButton_add)}
      >
        ADD NEW
      </button>

      <div className={styles.wrapper}>
        <div className={styles.productsList}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
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
                  className={cn(
                    styles.actionButton,
                    styles.actionButton_delete
                  )}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>

        {productFofSetting && !isProductCreatorActive && (
          <ProductSetBlock
            productFofSetting={productFofSetting}
            closeBlockHandler={closeBlockHandler}
            applyProductChanges={applyProductChanges}
          />
        )}

        {isProductCreatorActive && !productFofSetting && (
          <ProductCreateBlock
            stopCreatingProductHandler={stopCreatingProductHandler}
            createNewProduct={createNewProduct}
          />
        )}
      </div>
    </div>
  );
};
