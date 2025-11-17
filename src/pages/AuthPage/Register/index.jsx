import Button from "../../../components/Button/Button";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <p className={styles.title}>회원가입</p>
      <p className={styles.description}>
        계정을 생성하고 반려동물과 함께하는 여행을 시작하세요.
      </p>

      <form className={styles.auth_form}>
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
      </form>
    </>
  );
};

export default Register;
