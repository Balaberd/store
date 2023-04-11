import { FC } from "react";
import { useParams } from "react-router-dom";
import { getNumberOfProductsInBasket, getProductById } from "../../../store/selectors";
import styles from "./ProductPage.module.scss";
import { Breadcrumbs } from "../../widgets/Breadcrumbs/Breadcrumbs";
import { ProductSize } from "../../ui/ProductSize/ProductSize";
import { Icon } from "../../ui/Icon/Icon";
import { LandingPage } from "../LandingPage/LandingPage";
import { useAppDispatch } from "../../../store/hooks/redux";
import { addItemToBasket, refreshLocalStorageBasket, removeItemFromBasket } from "../../../store/reducers/basketSlice";

export const ProductPage: FC = () => {

    const { id } = useParams();
    const product = getProductById(id);
    const numberOfProducts = getNumberOfProductsInBasket(id);

    const dispatch = useAppDispatch();

    const addItemProduct = (prodId: any) => {
        dispatch(addItemToBasket(String(prodId)));
        dispatch(refreshLocalStorageBasket());
    }

    const removeItemProduct = (prodId: any) => {
        dispatch(removeItemFromBasket(String(prodId)))
        dispatch(refreshLocalStorageBasket());
    }

    if (product) {
        return (
            <div className={styles._}>
                <Breadcrumbs />
                <div className={styles.wrapper}>

                    <img
                        className={styles.image}
                        alt={product.description}
                        src={product.url}
                    />

                    <div className={styles.productInfo}>
                        <div className={styles.title}>
                            {product?.name} {product.brand} {product.description}
                        </div>

                        <ProductSize className={styles.sizeBlock} type={product.sizeType} value={product.size} />

                        <div className={styles.actionsBlock}>

                            <span className={styles.price}>{product.price} Р</span>

                            <div className={styles.increaseAndDecreaseBlock}>
                                <button onClick={() => removeItemProduct(product.id)} className={styles.actionButton}>-</button>
                                <span className={styles.count}>{numberOfProducts}</span>
                                <button onClick={() => addItemProduct(product.id)} className={styles.actionButton}>+</button>
                            </div>

                            <button className={styles.addToBasketButton}>
                                В корзину <Icon iconName="basketButton" />
                            </button>

                            <button className={styles.share}>
                                <Icon iconName="share" />
                            </button>

                            <div className={styles.promo}>
                                При покупке от <strong>10 000 ₸</strong> бесплатная доставка по Кокчетаву и области
                            </div>

                            <button className={styles.download}>
                                Прайс-лист <Icon iconName="download" />
                            </button>
                        </div>

                        <div className={styles.descriptionBlock}>

                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Страна производитель: </span>
                                <span className={styles.content}>{product.producingСountries}</span>
                            </div>

                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Брэнд: </span>
                                <span className={styles.content}>{product.brand}</span>
                            </div>

                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Описание: </span>
                                <span className={styles.content}>{product.description}</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    } else {
        return <LandingPage />
    }

}