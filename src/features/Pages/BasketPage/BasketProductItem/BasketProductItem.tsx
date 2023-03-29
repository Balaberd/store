import { FC } from "react";
import { Icon } from "../../../../shared/Icon/Icon";
import { getProductCountInBasket } from "../../../../store/selectors";
import { IProduct } from "../../../../types/types";
import styles from "./BasketProductItem.module.scss";

export const ICON_NAME_MAP: any = {
    weight: "box",
    volume: "bottle",
}

interface Props {
    product: IProduct;
    increaseItemHandler: (id: number) => void;
    decreaseItemHandler: (id: number) => void;
    removeProductFromBasketHandler: (id: number) => void;
}

export const BasketProductItem: FC<Props> = ({ product, increaseItemHandler, decreaseItemHandler, removeProductFromBasketHandler }) => {

    const productCount = getProductCountInBasket(product.id);
    const productSumPrice = productCount * product.price;

    return (
        <div className={styles._}>

            <div className={styles.imageWrapper}>
                <img className={styles.image} src={product.url} alt={product.name} />
            </div>

            <div className={styles.descriptionBlock}>
                <div className={styles.sizeBlock}>
                    <Icon iconName={ICON_NAME_MAP[product.sizeType]} />
                    <span className={styles.size}>{product.size}</span>
                </div>

                <div className={styles.nameBlock}>
                    {product.name} {product.brand}
                </div>

                <div className={styles.description}>
                    {product.description}
                </div>
            </div>

            <div className={styles.actionBlock}>

                <div className={styles.changeNumbers}>
                    <button onClick={() => decreaseItemHandler(product.id)} className={styles.button}>
                        -
                    </button>
                    {productCount}
                    <button onClick={() => increaseItemHandler(product.id)} className={styles.button}>
                        +
                    </button>
                </div>

                <span className={styles.price}>
                    {productSumPrice} Р
                </span>

                <button onClick={() => removeProductFromBasketHandler(product.id)} className={styles.removeWithoutBasket}>
                    <Icon iconName="bin" />
                </button>

            </div>

        </div>
    )
}