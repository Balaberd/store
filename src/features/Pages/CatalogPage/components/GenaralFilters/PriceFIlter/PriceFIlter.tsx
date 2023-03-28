import { FC } from "react";
import { IFilteres } from "../../../../../../types/types";
import styles from "./PriceFIlter.module.scss";

interface Props {
    filteres: IFilteres;
    handleChangeFilters: (newValue: IFilteres) => void;
}

type Event = React.ChangeEvent<HTMLInputElement>;

export const PriceFIlter: FC<Props> = ({ filteres, handleChangeFilters }) => {

    const priceFrom = filteres.price.from ? filteres.price.from : "";
    const priceTo = filteres.price.to ? filteres.price.to : "";

    const createOnChangeHandler = (fromOrTo: string) => {
        return ({ target: { value } }: Event) => {
            handleChangeFilters({ ...filteres, price: { ...filteres.price, [fromOrTo]: +value } })
        }
    }

    return (
        <div className={styles._}>
            <h4 className={styles.title}>Цена Р</h4>

            <div className={styles.inputsWrapper}>

                <input
                    onChange={createOnChangeHandler("from")}
                    value={priceFrom}
                    className={styles.input}
                    type="number"
                />
                -
                <input
                    onChange={createOnChangeHandler("to")}
                    value={priceTo}
                    className={styles.input}
                    type="number"
                />

            </div>

        </div >
    )
}