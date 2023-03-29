import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { addItemToBasket, refreshLocalStorageBasket } from "../../../../../store/reducers/basketSlice";
import { getFilteredAndSortedProducts } from "../../../../../store/selectors";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductList.module.scss";


export const ProductList: FC = () => {

  const products = getFilteredAndSortedProducts();
  const basket = useAppSelector(state => state.basket);
  const productsIdInBasket = Object.keys(basket).map(el => +el);

  const dispatch = useAppDispatch();
  const addItemToBasketHandler = (id: number) => {
    dispatch(addItemToBasket((String(id))));
    dispatch(refreshLocalStorageBasket());
  }

  return (
    <div className={styles._}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          hasInBasket={productsIdInBasket.includes(product.id)}
          onButtonClick={addItemToBasketHandler}
        />
      ))}
    </div>
  );
};
