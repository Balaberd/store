import { FC } from "react";
import { Input } from "../../shared/Input/Input";
import styles from "./Header.module.scss";

export const Header: FC = () => {

    return (
        <div className={styles._}>
            HEADER
            <Input />
        </div>
    )
}