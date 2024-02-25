import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>The Rick and Morty API</h1>
    </header>
  );
};

export default Header;
