import { FC } from "react";
import { Icon } from "../../../../shared/Icon/Icon";
import { IProduct } from "../../../../types/types";
import { IBasket } from "../../../App";
import styles from "./BasketProductItem.module.scss";

export const ICON_NAME_MAP: any = {
    weight: "box",
    volume: "bottle",
}

interface Props {
    basket: IBasket;
    product: IProduct;
    setBasket: (state: IBasket) => void;
}


export const BasketProductItem: FC<Props> = ({ product, basket, setBasket }) => {

    const removeProductHandler = () => {
        const newBasket = { ...basket };
        delete newBasket[product.id]
        setBasket(newBasket)
    }

    const inreaseProductCountHandler = () => {
        setBasket({ ...basket, [product.id]: ++basket[product.id] })
    }

    const decreaseProductCountHandler = () => {
        if (basket[product.id] > 1) {
            setBasket({ ...basket, [product.id]: --basket[product.id] })
        } else {
            removeProductHandler()
        }
    }



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
                    <button onClick={decreaseProductCountHandler} className={styles.button}>
                        -
                    </button>
                    {basket[product.id]}
                    <button onClick={inreaseProductCountHandler} className={styles.button}>
                        +
                    </button>
                </div>

                <div className={styles.price}>
                    {product.price} Р
                </div>

                <button onClick={removeProductHandler} className={styles.removeWithoutBasket}>
                    <Icon iconName="bin" />
                </button>

            </div>

        </div>
    )
}