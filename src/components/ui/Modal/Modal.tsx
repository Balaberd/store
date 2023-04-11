import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./Modal.module.scss";

const rootElement = document.querySelector("#root");

interface Props {
    children: any;
    classNames?: string;
    onModalClose?: () => void;
}

export const Modal: FC<Props> = ({ children, classNames, onModalClose }) => {

    const element = useMemo(() => document.createElement("div"), []);

    useEffect(() => {
        rootElement?.appendChild(element);
        return () => {
            rootElement?.removeChild(element)
        }
    })
    return createPortal(
        <div onClick={onModalClose} className={styles.modalBackground}>
            <div className={cn(styles.modalCard, classNames)}>{children}</div>
        </div>
        , element);
}