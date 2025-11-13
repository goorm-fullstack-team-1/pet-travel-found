import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import AuthIcon from "../../assets/images/icons/auth_icon.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header>
      <div className="header_inner">
        <div className="logo_area">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav">
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
              <Button>
                <img src={AuthIcon} alt="auth-icon" title="auth-icon" />
                로그인
                {/* TODO: 추후에는 로그인 상태에 따라 동적으로 '로그인' 또는 '로그아웃' 텍스트가 보이도록 수정해야함. */}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
