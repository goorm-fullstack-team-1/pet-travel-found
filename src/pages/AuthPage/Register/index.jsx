import Button from "../../../components/Button/Button";
import styles from "./Register.module.css";
import AuthForm from "../components/AuthForm";
import { useState } from "react";
import { setUser } from "../../../services/auth/authService";

const Register = () => {
  const textInfo = {
    title: "회원가입",
    description: "계정을 생성하고 반려동물과 함께하는 여행을 시작하세요",
    lastMessage: "이미 계정이 있으신가요?",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email, password })
      .then(() => {
        alert("회원가입 성공! 로그인 페이지로 이동합니다.");
        window.location.href = "/auth/login";
      })
      .catch((error) => {
        alert(`회원가입 실패: ${error.message}`);
      });
  };

  return (
    <AuthForm textInfo={textInfo} onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        placeholder="이름"
        className={styles.auth_input}
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button type="submit">회원가입</Button>
    </AuthForm>
  );
};

export default Register;
