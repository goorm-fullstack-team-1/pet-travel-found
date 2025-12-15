import styles from "./Footer.module.css";
import { getImage } from "../../utils/getImage";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_inner}>
        <img className={styles.logo} src={getImage("logo")} alt="logo" />
        <p>© 2025 Pet Travel Found. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
