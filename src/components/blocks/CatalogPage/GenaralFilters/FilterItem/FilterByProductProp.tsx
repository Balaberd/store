import { FC, useState } from "react";
import { Checkbox } from "./Checkbox/Checkbox";
import cn from "classnames";
import styles from "./FilterByProductProp.module.scss";
import { useAppSelector } from "../../../../../store/hooks/redux";
import { Input } from "../../../../ui/Input/Input";
import { Icon } from "../../../../ui/Icon/Icon";


const FILTER_TYPE_TRANSLATE = {
    brands: "Брэнд",
    producerСountries: "Страна производитель"
}

type TProp = "brands" | "producerСountries";
interface Props {
    uniqPropValues: string[];
    prop: TProp;
    onToggle: (type: string) => void;
}

export const FilterByProductProp: FC<Props> = ({ uniqPropValues, prop, onToggle }) => {
    const [isAllValuesShown, setIsAllValuesShown] = useState(false);

    const showAllValuesHandler = () => {
        setIsAllValuesShown(!isAllValuesShown);
    }
    const filterValuesByProp = useAppSelector(state => state.filteres[prop]);

    const uniqPropValuesToRender = isAllValuesShown ? uniqPropValues : uniqPropValues.slice(0, 4);

    return (
        <div className={styles._}>
            <label>
                <h5 className={styles.title}>{FILTER_TYPE_TRANSLATE[prop]}</h5>
                <Input className={styles.input} placeholder="Поиск..." />
            </label>
            <div className={styles.checkboxList}>
                {uniqPropValuesToRender.map((value) => (
                    <Checkbox
                        key={value}
                        checked={filterValuesByProp.includes(value)}
                        title={value}
                        onChange={() => onToggle(value)}
                    />
                ))}
            </div>
            {uniqPropValues.length > 4 && (
                <button onClick={showAllValuesHandler} className={styles.showAllValuesButton}>
                    Показать все <Icon className={cn({ [styles.upside]: !isAllValuesShown })} iconName="arrowDown" />
                </button>
            )}

        </div >
    )
}