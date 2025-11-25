import UserInfo from "./components/UserInfo";
import BookingLists from "./components/BookingLists";
import styles from "./MyPage.module.css";
import { isAuthenticated } from "../../services/auth/authService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const auth = isAuthenticated();
    setIsLoggedIn(auth);

    if (!auth) {
      alert("로그인이 필요합니다.");
      navigate("/auth/login");
    }
  }, [navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className={styles["mypage-container"]}>
      <UserInfo></UserInfo>
      <BookingLists></BookingLists>
    </div>
  );
};

export default MyPage;
