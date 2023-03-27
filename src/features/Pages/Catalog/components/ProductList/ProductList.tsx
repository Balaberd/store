import { FC } from "react";
import { IProduct } from "../../../../../types/types";
import { ProductCard } from "./ProductCard/ProductCard";
import styles from "./ProductList.module.scss";

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <div className={styles._}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
