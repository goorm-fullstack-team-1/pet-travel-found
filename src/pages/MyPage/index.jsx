import UserInfo from "./components/UserInfo";
import BookingLists from "./components/BookingLists";
import styles from "./MyPage.module.css";

const MyPage = () => {
  return (
    <div className={styles["mypage-container"]}>
      <UserInfo></UserInfo>
      <BookingLists></BookingLists>
    </div>
  );
};

export default MyPage;
