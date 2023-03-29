import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/redux";
import { changeFilterPriceFrom, changeFilterPriceTo } from "../../../../../../store/reducers/filteresSlice";
import styles from "./PriceFIlter.module.scss";


type Event = React.ChangeEvent<HTMLInputElement>;

export const PriceFIlter: FC = () => {

    const { priceFrom, priceTo } = useAppSelector(state => state.filteres);
    const priceFromForInput = priceFrom ? priceFrom : "";
    const priceToForInput = priceTo ? priceTo : "";

    const dispatch = useAppDispatch();
    const onChangeFilterPriceFrom = ({ target: { value } }: Event) => {
        dispatch(changeFilterPriceFrom(+value))
    }
    const onChangeFilterPriceTo = ({ target: { value } }: Event) => {
        dispatch(changeFilterPriceTo(+value))
    }

    return (
        <div className={styles._}>
            <h4 className={styles.title}>Цена Р</h4>

            <div className={styles.inputsWrapper}>

                <input
                    onChange={onChangeFilterPriceFrom}
                    value={priceFromForInput}
                    className={styles.input}
                    type="number"
                />
                -
                <input
                    onChange={onChangeFilterPriceTo}
                    value={priceToForInput}
                    className={styles.input}
                    type="number"
                />

            </div>

        </div >
    )
}