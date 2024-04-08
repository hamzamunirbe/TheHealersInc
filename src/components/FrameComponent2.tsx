import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  theHealersLogo?: string;
  theHealers?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  theHealersLogo,
  theHealers,
}) => {
  return (
    <div className={styles.subtractParent}>
      <img className={styles.subtractIcon} alt="" src="/subtract.svg" />
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img
            className={styles.theHealersLogo}
            loading="lazy"
            alt=""
            src={theHealersLogo}
          />
          <div className={styles.theHealersWrapper}>
            <img
              className={styles.theHealersIcon}
              loading="lazy"
              alt=""
              src={theHealers}
            />
          </div>
        </div>
      </div>
      <h1 className={styles.exploreLocalOfferings}>
        Explore Local offerings in fitness, and wellness services.
      </h1>
    </div>
  );
};

export default FrameComponent2;
