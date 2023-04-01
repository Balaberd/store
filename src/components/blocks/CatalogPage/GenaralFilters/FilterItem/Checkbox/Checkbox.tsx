import { FC } from "react";
import styles from "./Checkbox..module.scss";

interface Props {
    title: string;
    onChange: (type: string) => void;
    checked: boolean;
}

export const Checkbox: FC<Props> = ({ title, onChange, checked }) => {
    return (
        <label className={styles._}>
            <input checked={checked} type="checkbox" onChange={() => onChange(title)} />
            {title}
        </label>
    )
}