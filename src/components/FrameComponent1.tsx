import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.innerDiv}>
          <div className={styles.content}>
            <div className={styles.title}>
              <b className={styles.letsShiftYour}>Let’s shift your business</b>
              <h1 className={styles.shiftYourBusiness}>
                Empower your business with The Healers.
              </h1>
            </div>
            <div className={styles.withLotsOf}>
              Unlock Your Healing Potential, Connect with Clients, and Flourish
              in Your Practice with The Healers App – Your Trusted Partner in
              Holistic Health and Wellness.
            </div>
            <button className={styles.button}>
              <div className={styles.iconWrapper}>
                <img className={styles.wrapperIcon} alt="" />
              </div>
              <b className={styles.text}>Join as Practitioner</b>
            </button>
          </div>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
