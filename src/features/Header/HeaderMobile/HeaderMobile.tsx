import React from "react";
import { Icon } from "../../../shared/Icon/Icon";
import { Basket } from "../components/Basket/Basket";
import { MenuDropdown } from "../components/MenuDropdown/MenuDropdown";
import styles from "./HeaderMobile.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { IBasket } from "../../App";

interface Props {
    className?: string;
    basket: IBasket;
}

export const HeaderMobile: React.FC<Props> = ({ className, basket }) => {
    return (
        <header className={cn(styles._, className)}>
            <div className={styles.firstRow}>
                <MenuDropdown />
                <Icon className={styles.logo} iconName="sultanLogo" />
                <Basket basket={basket} />
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