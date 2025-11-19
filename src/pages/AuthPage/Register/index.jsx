import Button from "../../../components/Button/Button";
import styles from "./Register.module.css";
import AuthFrom from "../components/AuthForm";

const Register = () => {
  const textInfo = {
    title: "회원가입",
    description: "계정을 생성하고 반려동물과 함께하는 여행을 시작하세요",
    lastMessage: "이미 계정이 있으신가요?",
  };
  return (
    <AuthFrom textInfo={textInfo}>
      <label htmlFor="name"></label>
      <input
        type="text"
        placeholder="이름"
        className={styles.auth_input}
        id="name"
      />
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
      <Button>회원가입</Button>
    </AuthFrom>
  );
};

export default Register;
