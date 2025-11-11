import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
