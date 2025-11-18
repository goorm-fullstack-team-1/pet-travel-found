import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import AuthIcon from "../../assets/images/icons/auth_icon.svg";
import Button from "../Button/Button";
import { removeStorageItem } from "../../services/storage/localStorageService";

const Header = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <header>
      <div className={styles.header_inner}>
        <div className={styles.logo_area}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link to="/">메인페이지</Link>
            </li>
            <li>
              <Link to="/list-page">숙소 리스트</Link>
            </li>
            <li>
              <Link to="/my-page">마이페이지</Link>
            </li>
            <li>
              <Button
                className={styles.auth_button}
                onClick={() => {
                  removeStorageItem("token");
                  window.location.href = isLoggedIn ? "/" : "/auth/login";
                }}
              >
                <img src={AuthIcon} alt="auth-icon" title="auth-icon" />
                {isLoggedIn ? "로그아웃" : "로그인"}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
