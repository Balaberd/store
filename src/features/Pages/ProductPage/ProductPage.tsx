import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { ProductSize } from "../../../shared/ProductSize/ProductSize";
import { getProductById } from "../../../store/selectors";
import styles from "./ProductPage.module.scss";


export const ProductPage: FC = () => {

    const id = useLocation().state.productId
    const product = getProductById(+id)

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