import styles from "./UserInfo.module.css";
import userIcon from "../../../assets/images/icons/user_icon.svg";
import Button from "../../../components/Button/Button";
import {
  getUserName,
  getLoggedInUserEmail,
  logout,
} from "../../../services/auth/authService";
import { localStorageService } from "../../../services/storage/localStorageService";

const UserInfo = () => {
  const userName = getUserName();
  const userEmail = getLoggedInUserEmail();
  const payments = localStorageService.getStorageItem("payment") || [];

  const logoutHandler = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div className={styles["user-info"]}>
      <div className={styles["user-info__header"]}>
        <img src={userIcon} alt="user icon" />
        <h1>회원 정보</h1>
      </div>
      <div className={styles["user-info__block"]}>
        <h2>{userName}</h2>
        <p>{userEmail}</p>
      </div>
      <div className={styles["user-info__block"]}>
        <p>예약 내역</p>
        <h2>{payments.length}</h2>
      </div>
      <Button className={styles["user-info__button"]} onClick={logoutHandler}>
        로그아웃
      </Button>
    </div>
  );
};

export default UserInfo;
