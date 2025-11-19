import styles from "./AuthForm.module.css";

const AuthFrom = ({ textInfo, children }) => {
  const { title, description, lastMessage } = textInfo;

  return (
    <form>
      <p>{title}</p>
      <p>{description}</p>
      <div className={styles.fields}>{children}</div>
      <p>
        {lastMessage}{" "}
        <span>{title === "회원가입" ? "로그인" : "회원가입"}</span>
      </p>
    </form>
  );
};

export default AuthFrom;
