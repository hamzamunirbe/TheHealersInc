import { FunctionComponent } from "react";
import MainFRAME from "../components/MainFRAME";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./ConsumerForgotPassword.module.css";

const ConsumerForgotPassword: FunctionComponent = () => {
  return (
    <div className={styles.consumerForgotPassword}>
      <div className={styles.mainFRAMEWrapper}>
        <MainFRAME />
      </div>
      <img
        className={styles.consumerForgotPasswordChild}
        alt=""
        src="/group-52.svg"
      />
      <FrameComponent2
        theHealersLogo="/the-healers-logo4.svg"
        theHealers="/the-healers4.svg"
      />
    </div>
  );
};

export default ConsumerForgotPassword;
