import { FC } from "react";
import { useLocation } from "react-router-dom";
import { productsMock } from "../../../MOCK/MOCK";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { Icon } from "../../../shared/Icon/Icon";
import { ICON_NAME_MAP } from "../CatalogPage/components/ProductList/ProductCard/ProductCard";
import styles from "./ProductPage.module.scss";


export const ProductPage: FC = () => {
    const id = useLocation().state.productId

    const productData = productsMock.find(product => product.id === +id);

    if (productData) {
        return (
            <div className={styles._}>
                <Breadcrumbs />
                <div className={styles.wrapper}>

                    <img
                        className={styles.image}
                        alt={productData.description}
                        src={productData.url}
                    />

                    <div className={styles.productInfo}>
                        <div className={styles.title}>
                            {productData?.name} {productData.brand} {productData.description}
                        </div>

                        <div className={styles.sizeBlock}>
                            <Icon iconName={ICON_NAME_MAP[productData.sizeType]} />
                            <span className={styles.size}>{productData.size}</span>
                        </div>

                        <div className={styles.descriptionBlock}>
                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Страна производитель: </span>
                                <span className={styles.content}>{productData.manufacturerСountry}</span>
                            </div>

                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Брэнд: </span>
                                <span className={styles.content}>{productData.brand}</span>
                            </div>

                            <div className={styles.descriptionItem}>
                                <span className={styles.descriptionTitle}>Описание: </span>
                                <span className={styles.content}>{productData.description}</span>
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