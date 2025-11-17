import styles from "./AuthPage.module.css";
import Button from "../../components/Button/Button";
import { Outlet } from "react-router-dom";
const AuthPage = () => {
  return (
    <div className={styles.auth_page}>
      <div className={styles.auth_container}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
