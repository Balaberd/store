import { FC } from "react";
import { productsMock } from "../../../MOCK/MOCK";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { IProduct } from "../../../types/types";
import { IBasket } from "../../App";
import styles from "./BasketPage.module.scss";
import { BasketProductItem } from "./BasketProductItem/BasketProductItem";

interface Props {
    basket: IBasket;
    setBasket: (state: IBasket) => void;
}

export const BasketPage: FC<Props> = ({ basket, setBasket }) => {

    const productsIdInBasket = Object.keys(basket).map(el => +el);
    const productsInBasket = productsMock.filter(el => productsIdInBasket.includes(el.id))

    return (
        <div className={styles._}>
            <Breadcrumbs />
            <h1 className={styles.title}>КОРЗИНА</h1>

            <div className={styles.itemsList}>
                {productsInBasket.map((product: IProduct) => (
                    <BasketProductItem product={product} basket={basket} setBasket={setBasket} />
                ))}
            </div>
        </div>
    )
}