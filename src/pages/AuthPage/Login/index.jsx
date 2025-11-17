import styles from "./Login.module.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <p className={styles.title}>로그인</p>
      <p className={styles.description}>
        Pet Travel Found에 오신 것을 환영합니다.
      </p>

      <form className={styles.auth_form}>
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="이메일"
          className={styles.auth_input}
          id="email"
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.auth_input}
          id="password"
        />
        <Button>로그인</Button>
      </form>
      <p className={styles.footer_text}>
        계정이 없으신가요? <Link to="/auth/register">회원가입</Link>
      </p>
    </>
  );
};

export default Login;
