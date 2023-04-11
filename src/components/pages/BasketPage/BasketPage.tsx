import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/redux";
import { addItemToBasket, refreshLocalStorageBasket, removeAllItems, removeItemFromBasket, removeProductFromBasket } from "../../../store/reducers/basketSlice";
import { getProdcutsIdInBasket } from "../../../store/selectors";
import { IProduct } from "../../../lib/types/types";
import styles from "./BasketPage.module.scss";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { Modal } from "../../ui/Modal/Modal";
import { Icon } from "../../ui/Icon/Icon";
import { BasketItem } from "../../blocks/basket/BasketProductItem/BasketItem";

export const BasketPage: FC = () => {

    const productsInBasket = getProdcutsIdInBasket();
    const basket = useAppSelector(state => state.basket);
    const [isModalActive, setIsModalActive] = useState(false);

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

    const placeOnOrderHandler = () => {
        dispatch(removeAllItems());
        dispatch(refreshLocalStorageBasket());
        setIsModalActive(true);
    }


    return (
        <div className={styles._}>
            <Breadcrumbs />

            {isModalActive && (
                <Modal classNames={styles.modal} onModalClose={() => setIsModalActive(false)}>
                    <Icon className={styles.modalIcon} iconName="doubleArrow" />
                    <h5 className={styles.modalTitle}>СПАСИБО ЗА ЗАКАЗ</h5>
                    <span className={styles.modalSubtitle}>
                        Наш менеджер свяжется с вами в ближайшее время
                    </span>
                    <button onClick={() => setIsModalActive(false)} className={styles.modalCloseButton}>
                        <Icon iconName="close" />
                    </button>
                </Modal>
            )}

            <h1 className={styles.title}>КОРЗИНА</h1>

            {!productsInBasket.length && (
                <h2 className={styles.emptyBasket}>Корзина пуста</h2>
            )}

            {!!productsInBasket.length && (
                <>
                    <div className={styles.itemsList}>
                        {productsInBasket.map((product: IProduct) => (
                            <BasketItem
                                product={product}
                                increaseItemHandler={increaseItemHandler}
                                decreaseItemHandler={decreaseItemHandler}
                                removeProductFromBasketHandler={removeProductFromBasketHandler}
                            />
                        ))}
                    </div>

                    <div className={styles.sumPriceBlock}>
                        <button onClick={placeOnOrderHandler} className={styles.placeAnOrderButton}>
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