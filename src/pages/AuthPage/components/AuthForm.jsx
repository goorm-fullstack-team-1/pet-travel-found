import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";

const AuthFrom = ({ textInfo, children, onSubmit }) => {
  const { title, description, lastMessage } = textInfo;

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{description}</p>
      <div className={styles.fields}>{children}</div>
      <p className={styles.footer_text}>
        {lastMessage}{" "}
        {title === "로그인" ? (
          <Link to="/auth/register">회원가입</Link>
        ) : (
          <Link to="/auth/login">로그인</Link>
        )}
      </p>
    </form>
  );
};

export default AuthFrom;
