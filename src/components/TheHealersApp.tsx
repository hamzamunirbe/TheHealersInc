import { FunctionComponent } from "react";
import styles from "./TheHealersApp.module.css";

const TheHealersApp: FunctionComponent = () => {
  return (
    <section className={styles.theHealersApp}>
      <div className={styles.frameParent}>
        <div className={styles.whyChooseUsParent}>
          <b className={styles.whyChooseUs}>The Healers app</b>
          <h1 className={styles.organizeRemoteTeam}>
            Experience Wellness On the Go
          </h1>
        </div>
        <div className={styles.weShareCommon}>
          Take your wellness journey with you wherever you go with our mobile
          app. Seamlessly access our services, schedule appointments, and stay
          connected with your practitioner—all from the palm of your hand. With
          user-friendly navigation and convenient features, our app makes it
          easy to prioritize your well-being, no matter how busy life gets.
        </div>
      </div>
      <div className={styles.theHealersAppInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseWrapper}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.bookingMadeSimpleContainer}>
              <p className={styles.bookingMade}>{`Booking Made `}</p>
              <p className={styles.simple}>Simple</p>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.rectangleParent}>
                <div className={styles.rectangle} />
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-101@2x.png"
                />
                <div className={styles.wrapperGroup5}>
                  <img
                    className={styles.wrapperGroup5Child}
                    loading="lazy"
                    alt=""
                    src="/group-5@2x.png"
                  />
                </div>
              </div>
              <div className={styles.copyrightSymbolContainer}>
                <div className={styles.copyrightSymbolContainerInner}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                </div>
                <div className={styles.general}>Best Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHealersApp;
