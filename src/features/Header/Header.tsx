import { FC } from "react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <>
            <HeaderDesktop className={styles.desktop} />
            <HeaderMobile className={styles.mobile} />
        </>
    )
}