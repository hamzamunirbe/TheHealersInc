import { FunctionComponent } from "react";
import styles from "./WhyChooseUs.module.css";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.title}>
        <b className={styles.whyChooseUs1}>Why choose us</b>
        <h1 className={styles.peopleChooseUs}>
          People choose us because we serve the best for everyone
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.reason01}>
          <img className={styles.icon} loading="lazy" alt="" src="/icon.svg" />
          <div className={styles.text}>
            <b className={styles.organizedTasks}>Booking and Scheduling</b>
            <div className={styles.withLotsOf}>
              Book appointments with confidence using our secure booking system.
            </div>
          </div>
        </div>
        <div className={styles.reason02}>
          <img
            className={styles.icon1}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <div className={styles.text1}>
            <b className={styles.organizedTasks1}>Rating and Reviews</b>
            <div className={styles.withLotsOf1}>
              Make informed decisions by reading reviews and ratings from other
              users.
            </div>
          </div>
        </div>
        <div className={styles.reason03}>
          <img
            className={styles.icon2}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <div className={styles.text2}>
            <b className={styles.organizedTasks2}>Vendor Dashboard</b>
            <div className={styles.withLotsOf2}>
              Access a comprehensive dashboard to manage bookings, track
              earnings.
            </div>
          </div>
        </div>
        <div className={styles.reason04}>
          <img
            className={styles.icon3}
            loading="lazy"
            alt=""
            src="/icon-1.svg"
          />
          <div className={styles.text3}>
            <b className={styles.organizedTasks3}>
              Personalized Recommendations
            </b>
            <div className={styles.withLotsOf3}>
              Receive recommendations based on your past bookings and interests.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
