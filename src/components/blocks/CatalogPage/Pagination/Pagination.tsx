import { FC } from "react";
import cn from "classnames";
import styles from "./Pagination.module.scss";
import { useAppDispatch } from "../../../../store/hooks/redux";
import { changeCurrentPage } from "../../../../store/reducers/filteresSlice";
import { Icon } from "../../../ui/Icon/Icon";

interface Props {
  numberOfPages: number;
  currentPage: number;
}

export const Pagination: FC<Props> = ({ numberOfPages, currentPage }) => {
  const dispatch = useAppDispatch();

  const changeCurrentPageHandler = (newPageNumber: number) => {
    if (
      newPageNumber > numberOfPages ||
      newPageNumber < 1 ||
      newPageNumber === currentPage
    ) {
      return;
    } else {
      dispatch(changeCurrentPage(newPageNumber));
    }
  };

  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(
      <button
        onClick={() => changeCurrentPageHandler(i)}
        className={cn(styles.pageButton, {
          [styles.pageButton_active]: i === currentPage,
        })}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={styles._}>
      <button
        onClick={() => changeCurrentPageHandler(currentPage - 1)}
        className={styles.actionButton}
      >
        <Icon iconName="paginationArrow" />
      </button>

      <div className={styles.pages}>{pages}</div>

      <button
        onClick={() => changeCurrentPageHandler(currentPage + 1)}
        className={styles.actionButton}
      >
        <Icon iconName="paginationArrow" className={styles.turned} />
      </button>
    </div>
  );
};
