import { useState } from "react";
import cn from "classnames";
import styles from "./ProductCreateBlock.module.scss";

const APPLICATION_TYPES_TRANSLATE = {
  body: "Средство за уходом тела",
  face: "Средство за уходом лица",
  hands: "Средство за уходом рук",
  wash: "Средство для стирки",
  cosmetics: "Косметика",
  hair: "Средство за уходом за волосами",
  feet: "Средство за уходом ног",
};

export const ProductCreateBlock = ({
  stopCreatingProductHandler,
  createNewProduct,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [sizeType, setSizeType] = useState("volume");
  const [size, setSize] = useState();
  const [producingСountries, setProducingСountries] = useState("");
  const [brand, setBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productTypesOfApplication, setProductTypesOfApplication] = useState({
    body: false,
    face: false,
    hands: false,
    wash: false,
    cosmetics: false,
    hair: false,
    feet: false,
  });
  const [imageIrl, setImageUrl] = useState("");
  const [price, setPrice] = useState();

  const changePriceHandler = ({ target: { value } }) => {
    setPrice(value);
  };
  const handleChangeApplyType = (type) => {
    setProductTypesOfApplication({
      ...productTypesOfApplication,
      [type]: !productTypesOfApplication[type],
    });
  };

  const changeNameHandler = ({ target: { value } }) => {
    setNameValue(value);
  };
  const toggleSizeTypeHandler = (newType) => {
    setSizeType(newType);
  };
  const changeSizeHandler = ({ target: { value } }) => {
    setSize(+value);
  };
  const changeProducingСountriesHandler = ({ target: { value } }) => {
    setProducingСountries(value);
  };
  const changeBrandHandler = ({ target: { value } }) => {
    setBrand(value);
  };
  const changeProductDescriptionHandler = ({ target: { value } }) => {
    setProductDescription(value);
  };
  const changeImageUrlHandler = ({ target: { value } }) => {
    setImageUrl(value);
  };

  const createNewProductHandler = () => {
    const newProduct = {
      name: nameValue,
      sizeType: sizeType,
      size: size,
      producingСountries: producingСountries,
      brand: brand,
      description: productDescription,
      price: price,
      typesOfApplication: Object.entries(productTypesOfApplication)
        .filter((el) => el[1])
        .map((el) => el[0]),
      url: imageIrl,
    };

    console.log(newProduct);

    createNewProduct(newProduct);
  };

  return (
    <div className={styles._}>
      <h2 className={styles.title}>ДОБАВИТЬ НОВЫЙ ПРОДУКТ</h2>

      <div className={styles.actionBlock}>
        <button
          onClick={createNewProductHandler}
          className={cn(styles.actionButton, styles.actionButton_apply)}
        >
          СОЗДАТЬ
        </button>

        <button
          className={cn(styles.actionButton, styles.actionButton_cancel)}
          onClick={stopCreatingProductHandler}
        >
          ОТМЕНА
        </button>
      </div>

      <div className={styles.optionsWrapper}>
        <div>
          <div>
            <span className={styles.subtitle}>Наименование: </span>
          </div>
          <input
            onChange={changeNameHandler}
            className={styles.input}
            type="text"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Тип размера продукта: </span>
          </div>

          <div className={styles.radios}>
            <label
              className={cn(styles.radio, {
                [styles.radio_active]: sizeType === "weight",
              })}
            >
              <input
                onChange={() => toggleSizeTypeHandler("weight")}
                type="radio"
                checked={sizeType === "weight"}
              />
              <span>Вес (гр.)</span>
            </label>

            <label
              className={cn(styles.radio, {
                [styles.radio_active]: sizeType === "volume",
              })}
            >
              <input
                onChange={() => toggleSizeTypeHandler("volume")}
                type="radio"
                checked={sizeType === "volume"}
              />
              <span>Объем (мл.)</span>
            </label>
          </div>
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Размер: </span>
          </div>
          <input
            onChange={changeSizeHandler}
            className={styles.input}
            type="number"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Цена: </span>
          </div>
          <input
            onChange={changePriceHandler}
            className={styles.input}
            type="number"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Страна-производитель: </span>
          </div>
          <input
            onChange={changeProducingСountriesHandler}
            className={styles.input}
            type="text"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Брэнд: </span>
          </div>
          <input
            onChange={changeBrandHandler}
            className={styles.input}
            type="text"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Описание: </span>
          </div>
          <input
            onChange={changeProductDescriptionHandler}
            className={styles.input}
            type="text"
            placeholder="введите новое значение"
          />
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Типы применения: </span>
          </div>

          <div className={styles.checkboxes}>
            {Object.keys(productTypesOfApplication).map((type) => (
              <label
                className={cn(styles.checkbox, {
                  [styles.checkbox_active]: productTypesOfApplication[type],
                })}
              >
                <input
                  onChange={() => handleChangeApplyType(type)}
                  type="checkbox"
                  checked={productTypesOfApplication[type]}
                />
                <span>{APPLICATION_TYPES_TRANSLATE[type]}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Ссылка на изображение: </span>
          </div>
          <input
            onChange={changeImageUrlHandler}
            className={styles.input}
            type="text"
            placeholder="введите новое значение"
          />
        </div>
      </div>
    </div>
  );
};
