import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { Icon } from "../../../shared/Icon/Icon";
import { ProductSize } from "../../../shared/ProductSize/ProductSize";
import { getProductById } from "../../../store/selectors";
import styles from "./ProductPage.module.scss";


export const ProductPage: FC = () => {
    const id = useLocation().state.productId;
    const product = getProductById(+id);

    let numberOfProducts = useAppSelector(state => state.basket[id]);
    numberOfProducts = numberOfProducts ? numberOfProducts : 0;

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

                        <ProductSize type={product.sizeType} value={product.size} />


                        <div className={styles.actionsBlock}>

                            <span className={styles.price}>{product.price} Р</span>

                            <div className={styles.increaseAndDecreaseBlock}>
                                <button className={styles.actionButton}>-</button>
                                <span className={styles.count}>{numberOfProducts}</span>
                                <button className={styles.actionButton}>+</button>
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
        return <></>
    }

}