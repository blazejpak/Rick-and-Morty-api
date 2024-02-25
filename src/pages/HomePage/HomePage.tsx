import { useEffect } from "react";
import styles from "./HomePage.module.scss";
import FilteredData from "../../components/home/FilteredData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Search from "../../components/UI/Search";
import ChangePage from "../../components/home/ChangePage";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.dataSlice.data);
  const URI = useAppSelector((state) => state.dataSlice.URI);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(URI);
      const response = await data.json();
      dispatch({ type: "getData/changeData", payload: response });
      return response;
    };
    fetchData();
  }, [URI]);

  return (
    <main className={styles.page}>
      <Search />
      {data?.results?.length > 0 && <FilteredData />}
      <ChangePage />
    </main>
  );
};

export default HomePage;
