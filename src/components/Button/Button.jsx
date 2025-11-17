import styles from "./Button.module.css";

const Button = ({ children, className, type = "button", ...props }) => {
  const btnClassName =
    className === "" ? styles.button : `${styles.button} ${className}`;

  return (
    <button className={btnClassName} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
