import { FC } from "react";
import { IProduct } from "../../../../lib/types/types";
import cn from "classnames";
import styles from "./ProductItem.module.scss";


interface Props {
    product: IProduct;
    startProductSet: () => void;
    isDisabled: boolean;
    removeProduct: (num: number)=>void;
}

export const ProductItem: FC<Props> = ({ product, startProductSet, isDisabled, removeProduct }) => {

    return (
        <div className={styles._}>
            <span>
                {product.id} {product.name}
            </span>

            <div className={styles.actionBlock}>
                <button
                    disabled={isDisabled}
                    onClick={startProductSet}
                    className={cn(styles.actionButton, styles.actionButton_set)}
                >
                    SET
                </button>

                <button
                    disabled={isDisabled}
                    onClick={() => removeProduct(product.id)}
                    className={cn(
                        styles.actionButton,
                        styles.actionButton_delete
                    )}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}