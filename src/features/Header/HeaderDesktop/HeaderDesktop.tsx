import { FC } from "react";
import { Icon } from "../../../shared/Icon/Icon";
import { Basket } from "../components/Basket/Basket";
import { CallbackOrder } from "../components/CallbackOrder/CallbackOrder";
import { NavigateMenu } from "../components/NavigateMenu/NavigateMenu";
import { CatalogAndSearch } from "../components/CatalogAndSearch/CatalogAndSearch";
import { ContactItem } from "../components/ContactItem/ContactItem";
import cn from "classnames";
import styles from "./HeaderDesktop.module.scss";

interface Props {
    className?: string;
}

export const HeaderDesktop: FC<Props> = ({ className }) => {
    return (
        <header className={cn(styles._, className)}>
            <div className={styles.firstRow}>
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
            </div>
            <div className={styles.secondRow}>
                <Icon className={styles.logo} iconName="sultanLogo" />
                <CatalogAndSearch />
                <div className={styles.rightList}>
                    <CallbackOrder className={styles.callbackOrderBlock} />

                    <button
                        className={styles.buttonDownload}
                    >
                        Прайс-лист <Icon iconName="download" />
                    </button>
                    <Basket className={styles.basket} />
                </div>
            </div>
        </header>
    )
}