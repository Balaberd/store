import { FC, useState } from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { NavigateMenu } from "../NavigateMenu/NavigateMenu";
import { Icon } from "../../../../shared/Icon/Icon";
import cn from "classnames";
import styles from "./MenuDropdown.module.scss";

interface Props {
    className?: string;
}

export const MenuDropdown: FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleVisibility = () => setIsOpen(!isOpen);

    return (
        <div className={cn(styles._, className)}>
            <button
                className={styles.triggerButton}
                onClick={toggleVisibility}
            >
                {!isOpen && <Icon iconName="burgerMenu" />}
                {isOpen && <Icon iconName="close" />}
            </button>
            {isOpen && (
                <div className={styles.menu}>
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
                        <ContactItem
                            iconName="phone"
                            title="Отдел продаж"
                            description="+7 (777) 490-00-91"
                            additionalDescription="время работы: 9:00-20:00"
                        />
                    </div>
                    <NavigateMenu />

                    <button
                        className={styles.downloadButton}
                    >
                        Прайс-лист <Icon iconName="download" />
                    </button>
                </div>
            )}
        </div>
    )
}