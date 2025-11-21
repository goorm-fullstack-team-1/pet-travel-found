import styles from "./UserInfo.module.css";
import userIcon from "../../../assets/images/icons/user_icon.svg";
import Button from "../../../components/Button/Button";
import {
  getUserName,
  getLoggedInUserEmail,
} from "../../../services/auth/authService";

const UserInfo = () => {
  return (
    <div className={styles["user-info"]}>
      {/* 추후 데이터 연동 필요 */}
      <div className={styles["user-info__header"]}>
        <img src={userIcon} alt="user icon" />
        <h1>회원 정보</h1>
      </div>
      <div className={styles["user-info__block"]}>
        <h2>{getUserName()}</h2>
        <p>{getLoggedInUserEmail()}</p>
      </div>
      <div className={styles["user-info__block"]}>
        <p>예약 내역</p>
        <h2>5</h2>
      </div>
      <Button className={styles["user-info__button"]}>로그아웃</Button>
    </div>
  );
};

export default UserInfo;
