import { FC } from "react";
import { Input } from "../../../../../../shared/Input/Input";
import { IDataForFilteres, IFilteres, TFilterTypes } from "../../../../../../types/types";
import { Checkbox } from "./Checkbox/Checkbox";
import styles from "./FilterItem.module.scss";


const FILTER_TYPE_TRANSLATE = {
    brand: "Брэнд",
    manufacturerСountry: "Страна производитель"
}

interface Props {
    filteres: IFilteres;
    handleChangeFilters: (newValue: IFilteres) => void;
    dataForFilteres: IDataForFilteres;
    filtrationType: TFilterTypes;
}

export const FilterItem: FC<Props> = ({
    filteres,
    handleChangeFilters,
    dataForFilteres,
    filtrationType,
}) => {
    const keyForType = filtrationType === "brand" ? "brandsList" : "manufacturerСountrysList";
    const listOfTypes = dataForFilteres[keyForType];


    const toggleValueInFilterHandler = (value: string) => {
        if (filteres[filtrationType].includes(value)) {
            const newValue = filteres[filtrationType].filter(el => el !== value);
            handleChangeFilters({ ...filteres, [filtrationType]: newValue })
        } else {
            handleChangeFilters({ ...filteres, [filtrationType]: [...filteres[filtrationType], value] })
        }
    }

    return (
        <div className={styles._}>
            <label>
                <h5 className={styles.title}>{FILTER_TYPE_TRANSLATE[filtrationType]}</h5>
                <Input className={styles.input} placeholder="Поиск..." />
            </label>
            <div className={styles.checkboxList}>
                {listOfTypes.map((type) => (
                    <Checkbox
                        key={type}
                        checked={filteres[filtrationType].includes(type)}
                        title={type}
                        onChange={toggleValueInFilterHandler}
                    />
                ))}
            </div>
            <div className={styles.title}></div>
        </div >
    )
}