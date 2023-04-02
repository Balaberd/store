import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import cn from "classnames";
import { productsMock } from "../../../lib/mock/mock";
import { getProductById } from "../../../store/selectors";
import { Icon } from "../../ui/Icon/Icon";

const CRUMBS_TRANSLATE_MAP = {
  catalog: "Каталог",
  basket: "Корзина",
  name: "",
};

const CRUMBS_MAP = {
  catalog: "/catalog",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  // console.log("location", location);
  // console.log("navigate", navigate);
  // console.log("params", params);

  const crumbs = location.pathname.split("/").filter((el) => !!el);

  const lastElement = crumbs[crumbs.length - 1];
  if (+lastElement) {
    const productName = getProductById(+lastElement).name;
    CRUMBS_TRANSLATE_MAP.name = productName;
    crumbs[crumbs.length - 1] = "name";
  }

  const renderPath = (crumb, index, arr) => {
    if (index === arr.length - 1) {
      return (
        <span key={index} className={cn(styles.crumb, styles.crumb_last)}>
          {CRUMBS_TRANSLATE_MAP[crumb]}
        </span>
      );
    } else {
      return (
        <Link key={index} to={CRUMBS_MAP[crumb]} className={styles.crumb}>
          {CRUMBS_TRANSLATE_MAP[crumb]}
        </Link>
      );
    }
  };

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={cn(styles._)}>
      <div className={styles.breadcrumbs}>
        <Link to="/" className={styles.crumb}>
          Главная
        </Link>
        {crumbs.map((crumb, ind, arr) => renderPath(crumb, ind, arr))}
      </div>

      <button className={styles.goBackButton} onClick={goBackHandler}>
        <div className={styles.icon}>
          <Icon iconName="goBack"  />
        </div>
        НАЗАД
      </button>
    </div>
  );
};
