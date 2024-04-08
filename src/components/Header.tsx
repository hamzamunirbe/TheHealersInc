import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoInstance}>
        <div className={styles.logo}>
          <img
            className={styles.theHealersLogo}
            loading="lazy"
            alt=""
            src="/the-healers-logo.svg"
          />
          <div className={styles.theHealersWrapper}>
            <img
              className={styles.theHealersIcon}
              loading="lazy"
              alt=""
              src="/the-healers.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>
            <div className={styles.iconWrapper}>
              <img className={styles.wrapperIcon} alt="" />
            </div>
            <b className={styles.shiftYourBusiness}>Login</b>
          </button>
        </div>
        <button className={styles.button1}>
          <div className={styles.iconWrapper1}>
            <img className={styles.wrapperIcon1} alt="" />
          </div>
          <b className={styles.text}>Sign Up Now</b>
        </button>
      </div>
    </header>
  );
};

export default Header;
