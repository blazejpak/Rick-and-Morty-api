import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";

import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useAppDispatch();

  const [searchInput, setSearchInput] = useState("");

  const searchSubmit = (event: any) => {
    event.preventDefault();

    dispatch({
      type: "getData/editURI",
      payload: `https://rickandmortyapi.com/api/character/?name=${searchInput}`,
    });
    if (!searchInput)
      dispatch({
        type: "getData/editURI",
        payload: `https://rickandmortyapi.com/api/character`,
      });
  };
  return (
    <form onSubmit={searchSubmit} className={styles.form}>
      <input
        className={styles.input}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for a character..."
      />
    </form>
  );
};

export default Search;
