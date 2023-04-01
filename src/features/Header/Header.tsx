import { FC } from "react";
import { Icon } from "../../shared/Icon/Icon";
import { Basket } from "./components/Basket/Basket";
import { CallbackOrder } from "./components/CallbackOrder/CallbackOrder";
import { CatalogAndSearch } from "./components/CatalogAndSearch/CatalogAndSearch";
import { ContactItem } from "./components/ContactItem/ContactItem";
import { MenuDropdown } from "./components/MenuDropdown/MenuDropdown";
import { NavigateMenu } from "./components/NavigateMenu/NavigateMenu";
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