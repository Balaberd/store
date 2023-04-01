import { FC } from "react";
import cn from "classnames";
import { Icon } from "../../ui/Icon/Icon";
import { TSizeType } from "../../../lib/types/types";
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
            <span className={styles.title}>{value} {type === "weight" ? "гр" : "мл"}</span>
        </div>
    )
}