import { FC } from "react";
import { Icon } from "../../shared/Icon/Icon";
import styles from "./Footer.module.scss";
import { Input } from "../../shared/Input/Input";
import cn from "classnames";

export const Footer: FC = () => {
    return (
        <footer className={styles._}>
            <div className={styles.wrapper}>

                <div className={cn(styles.column, styles.promoBlock)}>

                    <div className={styles.firtsRow}>
                        <Icon className={styles.logo} iconName="sultanLogoWhite" />

                        <button className={styles.downloadButton}>
                            Прайс-лист <Icon iconName="download" />
                        </button>
                    </div>

                    <p className={styles.storeDescription}>
                        Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области
                    </p>

                    <label className={styles.subscription}>
                        Подпишись на скидки и акции
                        <Input
                            className={styles.input}
                            placeholder="Введите ваш E-mail"
                            postfix={
                                <button className={styles.inputButton}>
                                    <Icon iconName="vectorToRight" />
                                </button>
                            }
                        />
                    </label>
                </div>

                <div className={cn(styles.column, styles.menuBlock)}>
                    <h5 className={styles.title}>Меню сайта:</h5>
                    <ul className={styles.itemsList}>
                        <li><a className={styles.item} href="#">
                            О компании
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Доставка и оплата
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Возврат
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Контакты
                        </a></li>
                    </ul>
                </div>

                <div className={cn(styles.column, styles.categoryBlock)}>
                    <h5 className={styles.title}>Категории:</h5>
                    <ul className={styles.itemsList}>
                        <li><a className={styles.item} href="#">
                            Бытовая химия
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Косметика и гигена
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Товары для дома
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Товары для детей и мам
                        </a></li>
                        <li><a className={styles.item} href="#">
                            Посуда
                        </a></li>
                    </ul>
                </div>

                <div className={cn(styles.column, styles.messagersBlock)}>
                    <h5 className={styles.title}>Скачать прайс-лист:</h5>
                    <div className={styles.itemsList}>
                        <button className={styles.downloadButton}>
                            Прайс-лист <Icon iconName="download" />
                        </button>

                        <div className={styles.messagersBlock}>
                            Связь в меседжерах:
                            <div className={styles.linksWrapper}>
                                <a href="#"><Icon iconName="whatsap" /></a>
                                <a href="#"><Icon iconName="telegram" /></a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={cn(styles.column, styles.contactsBlock)}>
                    <h5 className={styles.title}>Контакты:</h5>

                    <div className={styles.contact}>
                        <span className={styles.subtitle}>
                            + 7 (777) 490-00-91
                        </span>
                        <span className={styles.description}>
                            время работы: 9:00-20:00
                        </span>
                        <a className={styles.link} href="#">
                            Заказать звонок
                        </a>
                    </div>

                    <div className={styles.contact}>
                        <span className={styles.subtitle}>
                            opt.sultan@mail.ru
                        </span>
                        <span className={styles.description}>
                            На связи в любое время
                        </span>
                    </div>

                    <div className={styles.linksWrapper}>
                        <Icon iconName="visa" />
                        <Icon iconName="master" />
                    </div>


                </div>

            </div>
        </footer>
    )
}