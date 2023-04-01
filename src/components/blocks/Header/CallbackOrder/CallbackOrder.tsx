import { FC } from "react";
import styles from "./CallbackOrder.module.scss";
import cn from "classnames";

interface Props {
    className?: string;
}

export const CallbackOrder: FC<Props> = ({ className }) => {
    return (
        <div className={cn(styles.callbackOrder, className)}>
            <div className={styles.descriptionBlock}>
                <span className={styles.phoneNumber}>
                    +7 (777) 490-00-91
                </span>
                <span className={styles.workTime}>
                    время работы: 9:00-20:00
                </span>
                <a className={styles.linkToOrder} href="#">
                    Заказать звонок
                </a>
            </div>
            <div className={styles.image}>
            </div>
        </div>
    )
}