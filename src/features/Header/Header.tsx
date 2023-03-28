import { FC } from "react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import styles from "./Header.module.scss";
import { IBasket } from "../App";

interface Props {
    basket: IBasket;
}

export const Header: FC<Props> = ({ basket }) => {
    return (
        <>
            <HeaderDesktop className={styles.desktop} basket={basket} />
            <HeaderMobile className={styles.mobile} basket={basket} />
        </>
    )
}