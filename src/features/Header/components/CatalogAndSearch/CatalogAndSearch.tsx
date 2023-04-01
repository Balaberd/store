import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../../../shared/Icon/Icon";
import { Input } from "../../../../shared/Input/Input";
import styles from "./CatalogAndSearch.module.scss";
import cn from "classnames";

interface Props {
    className?: string;
}

export const CatalogAndSearch: FC<Props> = ({ className }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={cn(styles.catalogAndSerachBlock, className)}>
            <Link to={"/catalog"} className={styles.buttonCatalog}>
                Каталог <Icon iconName="catalog" />
            </Link>
            <Input
                className={styles.search}
                placeholder="Поиск..."
            />

            <div className={styles.search_mobile}>
                <button className={styles.triggerForInput}>
                    Поиск <Icon iconName="search" />
                </button>
                {isActive && <input type="text" className={styles.input} />}
            </div>

        </div>

    )
}