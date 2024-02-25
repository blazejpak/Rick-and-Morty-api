import styles from "./Button.module.scss";

type Button = {
  onClick: any;
  children: any;
};
const Button = ({ onClick, children }: Button) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
