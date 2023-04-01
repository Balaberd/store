import { FC } from "react";
import cn from "classnames";
import styles from "./Basket.module.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store/hooks/redux";
import { Icon } from "../../../ui/Icon/Icon";

interface Props {
    className?: string;
}

export const Basket: FC<Props> = ({ className }) => {

    const products = useAppSelector(state => state.products);
    const basket = useAppSelector(state => state.basket);
    const produtsIdInBasket = Object.keys(basket).map(el => +el);

    const productsInBasket = products.filter(el => produtsIdInBasket.includes(el.id));

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