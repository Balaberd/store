import { FC } from "react";
import { MenuDropdown } from "../../blocks/Header/MenuDropdown/MenuDropdown";
import { ContactItem } from "../../blocks/Header/ContactItem/ContactItem";
import { NavigateMenu } from "../../blocks/Header/NavigateMenu/NavigateMenu";
import { Icon } from "../../ui/Icon/Icon";
import { CatalogAndSearch } from "../../blocks/Header/CatalogAndSearch/CatalogAndSearch";
import { CallbackOrder } from "../../blocks/Header/CallbackOrder/CallbackOrder";
import { Basket } from "../../blocks/Header/Basket/Basket";
import styles from "./Header.module.scss";

export const Header: FC = () => {
    return (
        <header className={styles._}>

            <MenuDropdown className={styles.dropdown} />

            <div className={styles.contactsBlock}>
                <ContactItem
                    iconName="location"
                    title="г. Кокчетав, ул. Ж. Ташенова 129Б"
                    description="(Рынок Восточный)"
                />
                <ContactItem
                    iconName="mail"
                    title="opt.sultan@mail.ru "
                    description="На связи в любое время"
                />
            </div>

            <NavigateMenu className={styles.navigateMenu} />

            <Icon iconName="sultanLogo" className={styles.logo} />

            <CatalogAndSearch className={styles.catalogAndSearch} />

            <CallbackOrder className={styles.callback} />

            <button className={styles.buttonDownload} >
                Прайс-лист
                <Icon className={styles.icon} iconName="download" />
            </button>

            <Basket className={styles.basket} />

        </header>
    )
}