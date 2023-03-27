import { FC, useState } from "react";
import { Icon } from "../../../../../shared/Icon/Icon";
import { IDataForFilteres, IFilteres } from "../../../../../types/types";
import { defaultFiltersState } from "../../Catalog";
import { FilterItem } from "./FilterItem/FilterItem";
import { PriceFIlter } from "./PriceFIlter/PriceFIlter";
import cn from "classnames";
import styles from "./GenaralFilters.module.scss";


interface Props {
    filteres: IFilteres;
    handleChangeFilters: (newValue: IFilteres) => void;
    dataForFilteres: IDataForFilteres;
}

export const GenaralFilters: FC<Props> = ({ filteres, handleChangeFilters, dataForFilteres }) => {
    const [isVisible, setIsVisible] = useState(true);

    const onChangeVisibility = () => {
        setIsVisible(!isVisible)
    }


    const onResetFilteres = () => {
        handleChangeFilters(defaultFiltersState)
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
                    <PriceFIlter
                        filteres={filteres}
                        handleChangeFilters={handleChangeFilters}
                    />

                    <FilterItem
                        filteres={filteres}
                        handleChangeFilters={handleChangeFilters}
                        dataForFilteres={dataForFilteres}
                        filtrationType="brand"
                    />

                    <FilterItem
                        filteres={filteres}
                        handleChangeFilters={handleChangeFilters}
                        dataForFilteres={dataForFilteres}
                        filtrationType="manufacturerСountry"
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