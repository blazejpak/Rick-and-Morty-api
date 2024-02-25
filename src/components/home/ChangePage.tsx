import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../UI/Button";

import styles from "./ChangePage.module.scss";

const ChangePage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.dataSlice.data);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const memoNumber = useMemo(() => pageNumber, [pageNumber]);

  const prevPageHandler = () => {
    dispatch({
      type: "getData/editURI",
      payload: data.info.prev,
    });

    setPageNumber((prevState) => (prevState = prevState - 1));
    if (!data.info.prev) setPageNumber(1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const nextPageHandler = () => {
    dispatch({
      type: "getData/editURI",
      payload: data.info.next,
    });
    setPageNumber((prevState) => (prevState = prevState + 1));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.buttons}>
      {data?.info?.prev && (
        <Button onClick={prevPageHandler}>Previous Page</Button>
      )}
      <p>{memoNumber}</p>
      {data?.info?.next && <Button onClick={nextPageHandler}>Next Page</Button>}
    </div>
  );
};

export default ChangePage;
