import { FC } from "react";
import { IFilteres, TProductTypesByApply } from "../../../../../types/types";
import { APPLYING_TYPES_TRANSLATE } from "../../../../lib/const";
import cn from "classnames";
import styles from "./FilterProductByApply.module.scss";

interface Props {
  filteres: IFilteres;
  handleChangeFilters: (arg: IFilteres) => void;
  productTypesByApply: Array<TProductTypesByApply>,
  className?: string;
  isColumnList?: boolean
}

export const FilterProductByApply: FC<Props> = ({
  filteres,
  handleChangeFilters,
  productTypesByApply,
  className,
  isColumnList,
}) => {

  const onChangeFilterByApply = (type: TProductTypesByApply) => {
    if (filteres.applying.includes(type)) {
      const newParams = [...filteres.applying].filter((el) => el !== type);

      handleChangeFilters({ ...filteres, applying: newParams });
    } else {
      handleChangeFilters({
        ...filteres,
        applying: [...filteres.applying, type],
      });
    }
  };

  return (
    <div className={cn(styles._, className, { [styles.isColumn]: isColumnList })}>
      {productTypesByApply.map((el: TProductTypesByApply) => (
        <label className={styles.item} key={el}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={filteres.applying.includes(el)}
            onChange={() => onChangeFilterByApply(el)}
          />
          <span className={styles.title}>{APPLYING_TYPES_TRANSLATE[el]}</span>
        </label>
      ))}
    </div>
  );
};
