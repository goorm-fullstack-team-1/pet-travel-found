import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import AuthIcon from "../../assets/images/icons/auth_icon.svg";
import Button from "../Button/Button";
import { isAuthenticated, logout } from "../../services/auth/authService";

const Header = () => {
  const isLoggedIn = isAuthenticated();

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
                  if (isLoggedIn) {
                    logout();
                    window.location.href = "/";
                  } else {
                    window.location.href = "/auth/login";
                  }
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
