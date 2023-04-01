import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { addItemToBasket, refreshLocalStorageBasket, removeItemFromBasket, removeProductFromBasket } from "../../../store/reducers/basketSlice";
import { getProdcutsIdInBasket } from "../../../store/selectors";
import { IProduct } from "../../../lib/types/types";
import styles from "./BasketPage.module.scss";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { BasketProductItem } from "../../blocks/BasketPage/BasketProductItem/BasketProductItem";

export const BasketPage: FC = () => {

    const productsInBasket = getProdcutsIdInBasket();
    const basket = useAppSelector(state => state.basket);

    const sumPrice = productsInBasket.reduce((acc, product) => {
        return acc + (product.price * basket[product.id])
    }, 0)

    const dispatch = useAppDispatch();

    const increaseItemHandler = (id: number) => {
        dispatch(addItemToBasket(String(id)));
        dispatch(refreshLocalStorageBasket());
    }
    const decreaseItemHandler = (id: number) => {
        dispatch(removeItemFromBasket(String(id)));
        dispatch(refreshLocalStorageBasket());
    }
    const removeProductFromBasketHandler = (id: number) => {
        dispatch(removeProductFromBasket(String(id)));
        dispatch(refreshLocalStorageBasket());
    }

    return (
        <div className={styles._}>
            <Breadcrumbs />

            <h1 className={styles.title}>КОРЗИНА</h1>

            {!productsInBasket.length && (
                <h2 className={styles.emptyBasket}>Корзина пуста</h2>
            )}

            {!!productsInBasket.length && (
                <>
                    <div className={styles.itemsList}>
                        {productsInBasket.map((product: IProduct) => (
                            <BasketProductItem
                                product={product}
                                increaseItemHandler={increaseItemHandler}
                                decreaseItemHandler={decreaseItemHandler}
                                removeProductFromBasketHandler={removeProductFromBasketHandler}
                            />
                        ))}
                    </div>

                    <div className={styles.sumPriceBlock}>
                        <button className={styles.placeAnOrderButton}>
                            Оформить заказ
                        </button>

                        <span className={styles.sumPrice}>
                            {sumPrice} Р
                        </span>
                    </div>
                </>
            )}

        </div>
    )
}