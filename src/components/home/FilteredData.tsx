import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import styles from "./FilteredData.module.scss";

const FilteredData = () => {
  const data = useAppSelector((state) => state.dataSlice.data);

  return (
    <ul className={styles.container}>
      {data &&
        data.results.map((item) => (
          <NavLink
            key={item.id}
            className={styles.list}
            to={`/detailCharacter/${item.id}`}
          >
            <div className={styles.image}>
              <img
                aria-placeholder={item.name}
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className={styles.content}>
              <div>
                <p>Name:</p>
                <h2>{item.name}</h2>
              </div>
              <div>
                <p>Species:</p>
                <h3>{item.species}</h3>
              </div>

              <h4>Click to get more information</h4>
            </div>
          </NavLink>
        ))}
    </ul>
  );
};

export default FilteredData;
