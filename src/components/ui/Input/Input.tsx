import { FC, ReactNode } from "react";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import styles from './Input.module.scss';


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
