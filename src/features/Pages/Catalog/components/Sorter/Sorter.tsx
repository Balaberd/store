import { FC, useState } from "react";
import { Icon } from "../../../../../shared/Icon/Icon";
import cn from "classnames";
import styles from "./Sorter.module.scss";


interface SortType {
  sortBy: string;
  isIncreaseSorting: boolean;
}

interface Props {
  handleChangeSortSettings: (type: "name" | "price") => void;
  sortSettings: SortType;
  className?: string;
}

export const Sorter: FC<Props> = ({ className, handleChangeSortSettings, sortSettings }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { sortBy, isIncreaseSorting } = sortSettings;

  const sortTranslatedName = sortBy === "name" ? "Название" : "Цена";

  return (
    <div className={cn(styles._, className)}>
      <h4 className={styles.title}>Сортировка: </h4>
      <button
        onClick={onToggleDropdown}
        className={styles.dropdownTriggerButton}
      >
        {sortTranslatedName}
        <Icon
          iconName="arrowDown"
          className={cn({ [styles.isIncrease]: isIncreaseSorting })}
        />
      </button>

      {isOpen && (
        <div className={styles.dropdownWrapper}>
          <label className={styles.dropdownItem}>
            <input
              className={styles.radio}
              type="radio"
              name="sort-type"
              checked={sortBy === "name"}
              onClick={() => {
                handleChangeSortSettings("name")
                onToggleDropdown()
              }}
            />
            <span className={styles.dropdownItemText}>Наименование</span>
          </label>
          <label className={styles.dropdownItem}>
            <input
              className={styles.radio}
              type="radio"
              name="sort-type"
              checked={sortBy === "price"}
              onClick={() => {
                handleChangeSortSettings("price")
                onToggleDropdown()
              }}
            />
            <span className={styles.dropdownItemText}>Цена</span>
          </label>
        </div>
      )}
    </div>
  );
};
