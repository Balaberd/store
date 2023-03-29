import { FC } from "react";
import { TSizeType } from "../../types/types";
import { Icon } from "../Icon/Icon";
import cn from "classnames";
import styles from "./ProductSize.module.scss";


const ICON_NAME_MAP = {
    weight: "box",
    volume: "bottle",
}

interface Props {
    className?: string;
    type: TSizeType;
    value: number;
}

export const ProductSize: FC<Props> = ({ className, type, value }) => {
    return (
        <div className={cn(styles._, className)}>
            <Icon iconName={ICON_NAME_MAP[type]} />
            <span className={styles.title}>{value}</span>
        </div>
    )
}