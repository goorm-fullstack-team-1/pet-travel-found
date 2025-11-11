import styles from "./Button.module.css";

export default function Button({
  children,
  btnClassName = "button",
  btnType = "button",
  ...props
}) {
  return (
    <button
      className={btnClassName === "button" ? styles.button : btnClassName}
      type={btnType}
      {...props}
    >
      {children}
    </button>
  );
}
