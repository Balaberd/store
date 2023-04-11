import { FC } from "react";
import { MenuDropdown } from "../../blocks/header/MenuDropdown/MenuDropdown";
import { ContactItem } from "../../blocks/header/ContactItem/ContactItem";
import { NavigateMenu } from "../../blocks/header/NavigateMenu/NavigateMenu";
import { Icon } from "../../ui/Icon/Icon";
import { CatalogAndSearch } from "../../blocks/header/CatalogAndSearch/CatalogAndSearch";
import { CallbackOrder } from "../../blocks/header/CallbackOrder/CallbackOrder";
import { Basket } from "../../blocks/header/Basket/Basket";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header: FC = () => {

    return (
        <header className={styles._}>

            <Link to={"/admin"} className={styles.adminLink}>
                ADMIN
            </Link>

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