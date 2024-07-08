import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../img/logo.svg";
import styles from "./Header.module.css";

function Logo() {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.logo_bg}>
      <div className={styles.logo_flex}>
        <Link to="#main">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.logo_main_tx_box}>
          <span className={styles.logo_text}>Generations. Technology.</span>
          <span className={styles.logo_text}>Environment. Hashrate.</span>
        </div>
      </div>
      <button onClick={openMenu} className={styles.burger_btn}>
        {isOpen ? "X" : "="}
      </button>
      <div>
        <div className={`${styles.main_box} ${isOpen ? styles.show : ""}`}>
          <Link to="#unit" onClick={openMenu} className={styles.link}>
            Advantages
          </Link>
          <Link to="#statistic" onClick={openMenu} className={styles.link}>
            Pool statistics
          </Link>
          <Link to="#team" onClick={openMenu} className={styles.link}>
            Team
          </Link>
          <Link to="#partners" onClick={openMenu} className={styles.link}>
            Partners
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Logo;
