import { FC } from "react";
import { IProduct } from "../../../../../types/types";
import { IBasket } from "../../../../App";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

interface Props {
  products: IProduct[];
  basket: IBasket;
  setBasket: (state: IBasket) => void;

}

export const ProductList: FC<Props> = ({ products, basket, setBasket }) => {

  const addProductToBasket = (id: number) => {
    const newValue = basket[id] ? ++basket[id] : 1;
    const newState = { ...basket, [id]: newValue }
    setBasket(newState)
  }

  const productsInBasket = Object.keys(basket).map(el => +el);

  return (
    <div className={styles._}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addProductToBasket={addProductToBasket}
          isInBasket={productsInBasket.includes(product.id)}
        />
      ))}
    </div>
  );
};
