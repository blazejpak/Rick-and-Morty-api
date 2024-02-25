import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.grid}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
