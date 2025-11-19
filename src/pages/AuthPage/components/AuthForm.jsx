import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";

const AuthFrom = ({ textInfo, children }) => {
  const { title, description, lastMessage } = textInfo;

  return (
    <form className={styles.form}>
      <p>{title}</p>
      <p>{description}</p>
      <div className={styles.fields}>{children}</div>
      <p>
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
