import { FC, useState } from "react";
import { Icon } from "../../../../../shared/Icon/Icon";
import { FilterByProductProp } from "./FilterItem/FilterByProductProp";
import { PriceFIlter } from "./PriceFIlter/PriceFIlter";
import cn from "classnames";
import styles from "./GenaralFilters.module.scss";
import { useDispatch } from "react-redux";
import { resetFilteres, toggleBrandFilterValue, toggleProducerСountryFilterValue } from "../../../../../store/reducers/filteresSlice";
import { getUniqValuesInProduct } from "../../../../../store/selectors";



export const GenaralFilters: FC = () => {
    const [isVisible, setIsVisible] = useState(true);
    const onChangeVisibility = () => {
        setIsVisible(!isVisible)
    }

    const { brands, producerСountries } = getUniqValuesInProduct()


    const dispatch = useDispatch();
    const onResetFilteres = () => {
        dispatch(resetFilteres());
    }

    const handleToggleBrand = (value: string) => {
        dispatch(toggleBrandFilterValue(value))
    }

    const handleToggleProducerСountries = (value: string) => {
        dispatch(toggleProducerСountryFilterValue(value))
    }

    return (
        <div className={styles._}>

            <div className={styles.title}>
                ПОДБОР ПО ПАРАМЕТРАМ
                <button
                    onClick={onChangeVisibility}
                    className={cn(styles.dropdownTrigger, { [styles.dropdownTrigger_close]: !isVisible })}
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
                        onToggle={handleToggleBrand}
                    />

                    <FilterByProductProp

                        prop="producerСountries"
                        uniqPropValues={producerСountries}
                        onToggle={handleToggleProducerСountries}

                    />

                    <div className={styles.buttonsBlock}>
                        <button className={styles.applyFilteres}>Показать</button>
                        <button
                            className={styles.resetFilters}
                            onClick={onResetFilteres}
                        >
                            <Icon iconName="bin" />
                        </button>
                    </div>
                </div>
            )}


        </div>
    )
}