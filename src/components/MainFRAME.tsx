import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./MainFRAME.module.css";

const MainFRAME: FunctionComponent = () => {
  return (
    <div className={styles.mainFRAME}>
      <div className={styles.forgotPasswordParent}>
        <b className={styles.forgotPassword}>Forgot Password?</b>
        <div className={styles.donWorry}>
          Don’ Worry ! It happens. Please enter your registered email below to
          reset your password.
        </div>
      </div>
      <div className={styles.textfield}>
        <div className={styles.input}>
          <div className={styles.label}>Email</div>
          <input
            className={styles.content}
            placeholder="user@email.com"
            type="text"
          />
          <div className={styles.buttonInstance} />
        </div>
        <div className={styles.formhelpertext}>
          <div className={styles.helperText}>Helper text</div>
        </div>
      </div>
      <Button
        wrapper="pending_I6336:23288;1304:10666;96528:163581"
        button="Submit"
        propWidth="64px"
        propMinWidth="64px"
      />
      <div className={styles.button}>
        <div className={styles.wrapperFRAME}>
          <div className={styles.iconWrapper}>
            <img
              className={styles.wrapperIcon}
              alt=""
              src="/wrapper-2@2x.png"
            />
          </div>
        </div>
        <b className={styles.subtractFR}>Back to Sign In</b>
      </div>
    </div>
  );
};

export default MainFRAME;
