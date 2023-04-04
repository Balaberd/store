import { FC, useState } from "react";
import { FilterByProductProp } from "./FilterItem/FilterByProductProp";
import { PriceFIlter } from "./PriceFIlter/PriceFIlter";
import cn from "classnames";
import styles from "./GenaralFilters.module.scss";
import { useDispatch } from "react-redux";
import { getUniqValuesInProduct } from "../../../../store/selectors";
import {
  activateGeneralFilteres,
  resetFilteres,
  toggleBrandFilterValue,
  toggleProducerСountryFilterValue,
} from "../../../../store/reducers/filteresSlice";
import { Icon } from "../../../ui/Icon/Icon";
import { useAppSelector } from "../../../../store/hooks/redux";

export const GenaralFilters: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const onChangeVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { brands, producerСountries } = getUniqValuesInProduct();
  const isGeneralFilteresActive = useAppSelector(
    (state) => state.filteres.isGeneralFiltersActive
  );

  const dispatch = useDispatch();

  const resetFilteresHandler = () => {
    dispatch(resetFilteres());
  };
  const toggleBrandHandler = (value: string) => {
    dispatch(toggleBrandFilterValue(value));
  };
  const toggleProducerСountriesHandler = (value: string) => {
    dispatch(toggleProducerСountryFilterValue(value));
  };
  const activateGeneralFilteresHandler = () => {
    dispatch(activateGeneralFilteres());
  };

  return (
    <div className={styles._}>
      <div className={styles.title}>
        ПОДБОР ПО ПАРАМЕТРАМ
        <button
          onClick={onChangeVisibility}
          className={cn(styles.dropdownTrigger, {
            [styles.dropdownTrigger_close]: !isVisible,
          })}
        >
          <Icon iconName="arrowDown" />
        </button>
      </div>
      {isVisible && (
        <div className={styles.content}>
          <PriceFIlter />

          <FilterByProductProp
            prop="brands"
            uniqPropValues={brands}
            onToggle={toggleBrandHandler}
          />

          <FilterByProductProp
            prop="producerСountries"
            uniqPropValues={producerСountries}
            onToggle={toggleProducerСountriesHandler}
          />

          <div className={styles.buttonsBlock}>
            <button
              className={cn(styles.applyFilteres, {
                [styles.applyFilteres_active]: isGeneralFilteresActive,
              })}
              onClick={activateGeneralFilteresHandler}
            >
              Показать
            </button>
            <button
              className={styles.resetFilters}
              onClick={resetFilteresHandler}
            >
              <Icon iconName="bin" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
