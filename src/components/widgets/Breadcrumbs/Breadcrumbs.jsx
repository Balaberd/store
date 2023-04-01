import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import cn from "classnames";
import { productsMock } from "../../../lib/mock/mock";

const PATH_NAME_MAP = {
  catalog: "Каталог",
  basket: "Корзина",
  name: "",
};

const PATH_MAP = {
  catalog: "/catalog",
};

export const Breadcrumbs = () => {
  const location = useLocation();

  const path = location.pathname.split("/").filter((el) => !!el);

  console.log(path);

  // переделать позже
  const lastElement = path[path.length - 1];
  if (+lastElement) {
    const productName = productsMock.find(
      (product) => product.id === +lastElement
    ).name;

    PATH_NAME_MAP.name = productName;
    path[path.length - 1] = "name";
  }

  const renderPath = (el, index, arr) => {
    if (index === arr.length - 1) {
      return (
        <span key={index} className={cn(styles.link, styles.link_last)}>
          {PATH_NAME_MAP[el]}
        </span>
      );
    } else {
      return (
        <Link key={index} to={PATH_MAP[el]} className={styles.link}>
          {PATH_NAME_MAP[el]}
        </Link>
      );
    }
  };

  return (
    <div className={cn(styles._)}>
      <Link to="/" className={styles.link}>
        Главная
      </Link>
      {path.map((el, ind, arr) => renderPath(el, ind, arr))}
    </div>
  );
};
