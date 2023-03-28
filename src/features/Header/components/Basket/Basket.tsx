import { FC } from "react";
import { productsMock } from "../../../../MOCK/MOCK";
import { Icon } from "../../../../shared/Icon/Icon";
import { IBasket } from "../../../App";
import cn from "classnames";
import styles from "./Basket.module.scss";
import { Link } from "react-router-dom";

interface Props {
    className?: string;
    basket: IBasket;
}

export const Basket: FC<Props> = ({ className, basket }) => {

    const produtsIdInBasket = Object.keys(basket).map(el => +el);

    const productsInBasket = productsMock.filter(el => produtsIdInBasket.includes(el.id));

    const sumPrice = productsInBasket.reduce((acc, el) => {
        return acc + (el.price * basket[el.id])
    }, 0)

    let numberOfGoods = productsInBasket.reduce((acc, el) => {
        return acc + basket[el.id]
    }, 0)

    return (
        <div className={cn(styles.basket, className)}>

            <Link to={"/basket"} className={styles.buttonBasket}>
                <Icon
                    iconName="basket"
                />
                <div className={cn(styles.goodsCount, { [styles.goodsCount_visible]: !!productsInBasket.length })}>
                    {numberOfGoods}
                </div>
            </Link>

            <div className={styles.description}>
                <span className={styles.title}>Корзина</span>
                <span className={styles.sum}>{sumPrice}</span>
            </div>
        </div>
    )
}