import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../../../../../shared/Icon/Icon";
import styles from "./ProductCard.module.scss";
import cn from "classnames";
import { IProduct } from "../../../../../../types/types";


export const ICON_NAME_MAP: any = {
  weight: "box",
  volume: "bottle",
}

interface Props {
  product: IProduct
}

export const ProductCard: FC<Props> = ({
  product: {
    id,
    name,
    sizeType,
    size,
    manufacturerСountry,
    brand,
    description,
    price,
    applying,
    url,
  },
}) => {
  return (
    <div className={styles._}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={url}
          alt={`${name} ${description}`}
        />
      </div>

      <div className={styles.sizeBlock}>
        <Icon iconName={ICON_NAME_MAP[sizeType]} />
        <span className={styles.size}>{size}</span>
      </div>

      <Link to={"/catalog/" + id} state={{ productId: id }} className={styles.nameBlock}>
        {name} {description}  <span className={styles.brand}>{brand} </span>
      </Link>

      <div className={styles.infoBlock}>
        <div className={styles.infoItem}>
          <span className={styles.infoItem__title}>Штрихкод: </span>
          <span className={styles.infoItem__content}>{id}</span>
        </div>

        <div className={styles.infoItem}>
          <span className={styles.infoItem__title}>Производитель: </span>
          <span className={styles.infoItem__content}>
            {manufacturerСountry}
          </span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItem__title}>Бренд: </span>
          <span className={styles.infoItem__content}>{brand}</span>
        </div>
        <div className={cn(styles.infoItem, styles.testStyle)}>
          <span className={styles.infoItem__title}>Применение (для теста): </span>
          <span className={styles.infoItem__content}>{applying}</span>
        </div>
      </div>

      <div className={styles.actionBlock}>
        <span className={styles.price}>{price} Р</span>
        <button className={styles.button}>
          В КОРЗИНУ
          <Icon className={styles.icon} iconName="basketButton" />
        </button>
      </div>
    </div>
  );
};
