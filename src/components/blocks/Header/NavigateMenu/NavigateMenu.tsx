import styles from "./NavigateMenu.module.scss";
import { FC } from 'react';

interface Props {
    className?: string;
}

export const NavigateMenu: FC<Props> = ({ className }) => {
    return (
        <nav className={className}>
            <h4 className={styles.title}>Меню сайта</h4>
            <ul className={styles.menuList}>
                <li className={styles.listItem}>
                    <a className={styles.link} href="#">О компании</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.link} href="#">Доставка и оплата</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.link} href="#">Возврат</a>
                </li>
                <li className={styles.listItem}>
                    <a className={styles.link} href="#">Контакты</a>
                </li>
            </ul>
        </nav>
    )
}