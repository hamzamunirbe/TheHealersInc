import { FunctionComponent } from "react";
import styles from "./WhyChooseUs1.module.css";

const WhyChooseUs1: FunctionComponent = () => {
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
          <div className={styles.organizedTasksParent}>
            <b className={styles.organizedTasks}>
              Global Reach, Local Connection
            </b>
            <div className={styles.withLotsOf}>
              Expand globally, connect locally, reach diverse customers
              effortlessly
            </div>
          </div>
        </div>
        <div className={styles.reason02}>
          <img className={styles.icon1} alt="" src="/icon-1.svg" />
          <div className={styles.organizedTasksGroup}>
            <b className={styles.organizedTasks1}>
              Effortless Setup and Management
            </b>
            <div className={styles.withLotsOf1}>
              Streamlined setup, simple management, user-friendly.
            </div>
          </div>
        </div>
        <div className={styles.reason03}>
          <img className={styles.icon2} alt="" src="/icon-1.svg" />
          <div className={styles.organizedTasksContainer}>
            <b className={styles.organizedTasks2}>
              Marketing and Promotion Support
            </b>
            <div className={styles.withLotsOf2}>
              Boost sales, enhance visibility, targeted marketing for increased
              exposure.
            </div>
          </div>
        </div>
        <div className={styles.reason04}>
          <img className={styles.icon3} alt="" src="/icon-1.svg" />
          <div className={styles.frameDiv}>
            <b className={styles.organizedTasks3}>
              Actionable Insights for Growth
            </b>
            <div className={styles.withLotsOf3}>
              Track trends, optimize strategy, data-driven decisions for
              business success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
