import { FC, ReactNode } from "react";
import styles from './Input.module.scss';
import cn from "classnames";
import { Icon } from "../Icon/Icon";

const noop = (): void => { }

interface Props {
  className?: string;
  placeholder?: string;
  postfix?: ReactNode;
  onInput?: () => void;
}

export const Input: FC<Props> = ({ className, placeholder, postfix, onInput = noop }) => {

  const defaultPostfix = (
    <button
      onClick={onInput}
      className={styles.defaultButton}>
      <Icon iconName="search" />
    </button>
  )

  return (
    <div className={cn(styles._, className)}>
      <input
        onInput={onInput}
        className={styles.input}
        placeholder={placeholder}
      />
      {postfix || defaultPostfix}
    </div>
  );
}
