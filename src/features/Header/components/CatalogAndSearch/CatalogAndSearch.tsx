import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../../../shared/Icon/Icon";
import { Input } from "../../../../shared/Input/Input";
import styles from "./CatalogAndSearch.module.scss";


export const CatalogAndSearch: FC = () => {

    return (
        <div className={styles.catalogAndSerachBlock}>
            <Link to={"/catalog"} className={styles.buttonCatalog}>
                Каталог <Icon iconName="catalog" />
            </Link>
            <Input
                className={styles.search}
                placeholder="Поиск..."
            />
        </div>

    )
}