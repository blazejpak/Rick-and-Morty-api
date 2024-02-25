import { MdOutlineContactEmergency } from "react-icons/md";
import styles from "./Footer.module.scss";
import Github from "./Github";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.label}>More on:</p>
      <Github fill="#abb2bf" icon={styles.icon} />
      <a href="https://portfolio-blazejpak.vercel.app/" className={styles.icon}>
        <MdOutlineContactEmergency
          className={styles.contact}
          size={30}
          color="#abb2bf"
        />
      </a>
    </footer>
  );
};

export default Footer;
