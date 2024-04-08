import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.heroSectionParent}>
      <div className={styles.heroSection}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <b className={styles.caption}>Caption</b>
            <h1 className={styles.mainHeadline}>
              Ready to transform your life?
            </h1>
            <div className={styles.secondaryHeadline}>Headline Two</div>
          </div>
          <h3 className={styles.paragraph}>
            Join The Healers today and take the first step towards a healthier,
            happier you.
          </h3>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.theHealersLogo}
            loading="lazy"
            alt=""
            src="/the-healers-logo.svg"
          />
          <div className={styles.practitionerButton}>
            <img
              className={styles.theHealersIcon}
              loading="lazy"
              alt=""
              src="/the-healers.svg"
            />
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent;
