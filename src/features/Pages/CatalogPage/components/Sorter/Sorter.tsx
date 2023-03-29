import { FC, useState } from "react";
import { Icon } from "../../../../../shared/Icon/Icon";
import cn from "classnames";
import styles from "./Sorter.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { changeSortType, toggleSortDirection } from "../../../../../store/reducers/filteresSlice";
import { TSorterType } from "../../../../../types/types";


interface Props {
  className?: string;
}

export const Sorter: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dispatch = useAppDispatch();

  const { sortBy, isIncreaseSorting } = useAppSelector(state => state.filteres);


  const handleChangeSortSettings = (newType: TSorterType) => {
    if (newType === sortBy) {
      dispatch(toggleSortDirection())
    } else {
      dispatch(changeSortType(newType));
    }
  }

  const translatedSortTypeName = sortBy === "name" ? "Название" : "Цена";

  return (
    <div className={cn(styles._, className)}>
      <h4 className={styles.title}>Сортировка: </h4>
      <button
        onClick={onToggleDropdown}
        className={styles.dropdownTriggerButton}
      >
        {translatedSortTypeName}
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
                handleChangeSortSettings("name");
                onToggleDropdown();
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
