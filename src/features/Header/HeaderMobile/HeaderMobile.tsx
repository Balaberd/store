import React from "react";
import { Icon } from "../../../shared/Icon/Icon";
import { Basket } from "../components/Basket/Basket";
import { MenuDropdown } from "../components/MenuDropdown/MenuDropdown";
import styles from "./HeaderMobile.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

interface Props {
    className?: string;
}

export const HeaderMobile: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn(styles._, className)}>
            <div className={styles.firstRow}>
                <MenuDropdown />
                <Icon className={styles.logo} iconName="sultanLogo" />
                <Basket />
            </div>

            <div className={styles.secondRow}>
                <Link to={"/catalog"} className={cn(styles.catalogBlock, styles.secondRow__item)}>
                    Каталог
                </Link>
                <div className={cn(styles.searchBlock, styles.secondRow__item)}>
                    Поиск
                </div>
            </div>
        </header>
    )
}