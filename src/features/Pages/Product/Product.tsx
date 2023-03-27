import { FC } from "react";
import { useLocation } from "react-router-dom";
import { productsMock } from "../../../MOCK/MOCK";
import { Breadcrumbs } from "../../../shared/Breadcrumbs/Breadcrumbs";
import { Icon } from "../../../shared/Icon/Icon";
import { ICON_NAME_MAP } from "../Catalog/components/ProductList/ProductCard/ProductCard";
import styles from "./Product.module.scss";


export const Product: FC = () => {
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

                    </div>

                </div>
            </div>
        ) 
    } else {
        return <></>
    }

}