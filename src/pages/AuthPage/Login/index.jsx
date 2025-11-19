import styles from "./Login.module.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import AuthFrom from "../components/AuthForm";

const Login = () => {
  const textInfo = {
    title: "로그인",
    description: "Pet Travel Found에 오신 것을 환영합니다.",
    lastMessage: "계정이 없으신가요?",
  };

  return (
    <AuthFrom textInfo={textInfo}>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        placeholder="이메일"
        className={styles.auth_input}
        id="email"
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.auth_input}
        id="password"
      />
      <Button>로그인</Button>
    </AuthFrom>
  );
};

export default Login;
