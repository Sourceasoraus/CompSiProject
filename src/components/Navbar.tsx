import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Civics Hub</div>
      <ul className={styles.navLinks}>
        <li className={location.pathname === "/" ? styles.active : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? styles.active : ""}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === "/faq" ? styles.active : ""}>
          <Link to="/faq">FAQ</Link>
        </li>
        <li className={location.pathname === "/getinfo" ? styles.active : ""}>
          <Link to="/getinfo">Get Info</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
