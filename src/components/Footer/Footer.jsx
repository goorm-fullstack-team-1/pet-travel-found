import styles from "./Footer.module.css";
import { getImage } from "../../utils/getImage";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.logo} src={getImage("logo")} alt="logo" />
      <p>© 2025 Pet Travel Found. All rights reserved.</p>
    </div>
  );
};
export default Footer;
