import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import styles from "./ConsumerSignIn.module.css";

const ConsumerSignIn: FunctionComponent = () => {
  return (
    <div className={styles.consumerSignIn}>
      <img className={styles.consumerSignInChild} alt="" src="/group-52.svg" />
      <div className={styles.consumerSignInInner}>
        <FrameComponent3 />
      </div>
      <FrameComponent2
        theHealersLogo="/the-healers-logo3.svg"
        theHealers="/the-healers3.svg"
      />
    </div>
  );
};

export default ConsumerSignIn;
