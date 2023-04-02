import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProductSetBlock.module.scss";

const APPLICATION_TYPES_TRANSLATE = {
  body: "Средство за уходом тела",
  face: "Средство за уходом лица",
  hands: "Средство за уходом рук",
  wash: "Средство для стирки",
  cosmetics: "Косметика",
  hair: "Средство за уходом за волосами",
  feet: "Средство за уходом ног",
};

export const ProductSetBlock = ({
  productFofSetting,
  closeBlockHandler,
  applyProductChanges,
}) => {
  const [nameValue, setNameValue] = useState("");
  const [sizeType, setSizeType] = useState(productFofSetting.sizeType);
  const [size, setSize] = useState();
  const [producingСountries, setProducingСountries] = useState("");
  const [brand, setBrand] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productTypesOfApplication, setProductTypesOfApplication] = useState({
    body: productFofSetting.typesOfApplication.includes("body"),
    face: productFofSetting.typesOfApplication.includes("face"),
    hands: productFofSetting.typesOfApplication.includes("hands"),
    wash: productFofSetting.typesOfApplication.includes("wash"),
    cosmetics: productFofSetting.typesOfApplication.includes("cosmetics"),
    hair: productFofSetting.typesOfApplication.includes("hair"),
    feet: productFofSetting.typesOfApplication.includes("feet"),
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

  const applyChanges = () => {
    const newProduct = {
      id: productFofSetting.id,
      name: nameValue.trim() ? nameValue.trim() : productFofSetting.name,
      sizeType: sizeType,
      size: size ? size : productFofSetting.size,
      producingСountries: producingСountries
        ? producingСountries
        : productFofSetting.producingСountries,
      brand: brand ? brand : productFofSetting.brand,
      description: productDescription.trim()
        ? productDescription.trim()
        : productFofSetting.description,
      price: price ? price : productFofSetting.price,
      typesOfApplication: Object.values(productTypesOfApplication),
      url: imageIrl.trim() ? imageIrl.trim() : productFofSetting.url,
    };
    localStorage.setItem("products", JSON.stringify(newProduct));
    applyChanges(newProduct);
  };

  return (
    <div className={styles.productSetBlock}>
      <div className={styles.actionBlock}>
        <button
          onClick={applyChanges}
          className={cn(styles.actionButton, styles.actionButton_apply)}
        >
          ПРИМЕНИТЬ
        </button>

        <button
          className={cn(styles.actionButton, styles.actionButton_cancel)}
          onClick={closeBlockHandler}
        >
          ОТМЕНИТЬ ИЗМЕНЕНИЯ
        </button>
      </div>

      <div className={styles.optionsWrapper}>
        <div>
          <div>
            <span className={styles.subtitle}>ID: </span>
            {productFofSetting.id}
          </div>
        </div>

        <div>
          <div>
            <span className={styles.subtitle}>Наименование: </span>
            {productFofSetting.name}
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
            {productFofSetting.sizeType === "weight" ? "Вес" : "Объем"}
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
            {productFofSetting.size}
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
            {productFofSetting.price}
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
            {productFofSetting.producingСountries}
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
            {productFofSetting.brand}
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
            {productFofSetting.description}
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
            <ul>
              {productFofSetting.typesOfApplication.map((type) => (
                <li>{APPLICATION_TYPES_TRANSLATE[type]}</li>
              ))}
            </ul>
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
            {productFofSetting.url}
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
