import { FC } from "react";
import cn from "classnames";
import styles from "./FilterProductByApply.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/redux";
import { TTypeOfProductApplications } from "../../../../lib/types/types";
import { toggleApplicationFilterValue } from "../../../../store/reducers/filteresSlice";
import { APPLYING_TYPES_TRANSLATE, listOfProductApplicationTypes } from "../../../../lib/const";


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
