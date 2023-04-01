import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CatalogAndSearch.module.scss";
import cn from "classnames";
import { Icon } from "../../../ui/Icon/Icon";
import { Input } from "../../../ui/Input/Input";

interface Props {
    className?: string;
}

export const CatalogAndSearch: FC<Props> = ({ className }) => {
    const [isActive, setIsActive] = useState(false);

    const onInputActivate = () => {
        setIsActive(true);
    }

    const onInputDeactivate = () => {
        setIsActive(false);
    }

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
                {!isActive && (
                    <button
                        onClick={onInputActivate}
                        className={cn(styles.triggerForInput,
                            { [styles.isInputActive]: !isActive })}
                    >
                        Поиск <Icon iconName="search" />
                    </button>
                )}

                {isActive && (
                    <input onBlur={onInputDeactivate} type="text" className={styles.input} />
                )}
            </div>

        </div>

    )
}