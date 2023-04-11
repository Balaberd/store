import { FC, useState } from "react";
import cn from "classnames";
import styles from "./AdminPage.module.scss";
import { ProductCreateBlock } from "../../blocks/admin/ProductCreateBlock/ProductCreateBlock";
import { ProductItem } from "../../blocks/admin/ProductItem/ProductItem";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { IProduct } from "../../../lib/types/types";
import {
  addProduct,
  getProducts,
  removeProduct,
  setProduct,
} from "../../../store/reducers/productsSlice";
import { ProductSetBlock } from "../../blocks/admin/ProductSetBlock/ProductSetBlock";

export const AdminPage: FC = () => {
  const [settingsProduct, setSettingsProduct] = useState<IProduct | null>(null);
  const [isProductCreateActive, setIsProductCreateActive] = useState(false);

  const dispatch = useAppDispatch();
  const createNewProduct = (newProduct: IProduct) => {
    dispatch(addProduct(newProduct));
    setIsProductCreateActive(false);
  };
  const setProductHandler = (newProduct: IProduct) => {
    dispatch(setProduct(newProduct));
    setSettingsProduct(null);
  };
  const removeProductHandler = (id: number) => {
    dispatch(removeProduct(id));
    dispatch(getProducts());
  };

  const createHandlerStartProductSet = (product: IProduct) => () => {
    setSettingsProduct(product);
  };

  const products = useAppSelector((state) => state.products);

  return (
    <div className={styles._}>
      <button
        onClick={() => setIsProductCreateActive(true)}
        className={cn(styles.actionButton, styles.actionButton_add)}
      >
        ADD NEW
      </button>

      <div className={styles.wrapper}>
        <div className={styles.productsList}>
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              removeProduct={removeProductHandler}
              startProductSet={createHandlerStartProductSet(product)}
              isDisabled={!!settingsProduct || !!isProductCreateActive}
            />
          ))}
        </div>

        {settingsProduct && !isProductCreateActive && (
          <ProductSetBlock
            product={settingsProduct}
            setProduct={setProductHandler}
            cancelSetings={() => setSettingsProduct(null)}
          />
        )}

        {isProductCreateActive && !settingsProduct && (
          <ProductCreateBlock
            stopProductCreate={() => setIsProductCreateActive(false)}
            newProductId={products.length + 1}
            createNewProduct={createNewProduct}
          />
        )}
      </div>
    </div>
  );
};
