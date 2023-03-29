import { FC } from "react";
import { APPLYING_TYPES_TRANSLATE, listOfProductApplicationTypes } from "../../../../lib/const";
import cn from "classnames";
import styles from "./FilterProductByApply.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { TTypeOfProductApplications } from "../../../../../types/types";
import { toggleApplicationFilterValue } from "../../../../../store/reducers/filteresSlice";

interface Props {
  className?: string;
  isColumnList?: boolean
}

export const FilterProductByApply: FC<Props> = ({
  className,
  isColumnList,
}) => {

  const dispatch = useAppDispatch();

  const activeFiterTypesOfApplication = useAppSelector(state => state.filteres.productApplyingTypes);

  const onChangeFilterByApply = (type: TTypeOfProductApplications) => {
    dispatch(toggleApplicationFilterValue(type));
  }

  return (
    <div className={cn(styles._, className, { [styles.isColumn]: isColumnList })}>
      {listOfProductApplicationTypes.map((el) => (
        <label className={styles.item} key={el}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={activeFiterTypesOfApplication.includes(el)}
            onChange={() => onChangeFilterByApply(el)}
          />
          <span className={styles.title}>{APPLYING_TYPES_TRANSLATE[el]}</span>
        </label>
      ))}
    </div>
  );
};
