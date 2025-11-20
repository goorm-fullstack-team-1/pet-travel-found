import styles from "./Login.module.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useState } from "react";
import { login } from "../../../services/auth/authService";

const Login = () => {
  const textInfo = {
    title: "로그인",
    description: "Pet Travel Found에 오신 것을 환영합니다.",
    lastMessage: "계정이 없으신가요?",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password })
      .then(() => {
        alert("로그인 성공!");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(`로그인 실패: ${error.message}`);
      });
  };

  return (
    <AuthForm textInfo={textInfo} onSubmit={handleSubmit}>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        placeholder="이메일"
        className={styles.auth_input}
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호"
        className={styles.auth_input}
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">로그인</Button>
    </AuthForm>
  );
};

export default Login;
