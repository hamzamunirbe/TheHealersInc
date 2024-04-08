import { FunctionComponent } from "react";
import styles from "./SectionText.module.css";

const SectionText: FunctionComponent = () => {
  return (
    <div className={styles.sectionText}>
      <div className={styles.top}>
        <b className={styles.caption}>Testimonials</b>
        <div className={styles.mainHeadline}>
          Unlimited ideas for your projects
        </div>
        <h1 className={styles.secondaryHeadline}>
          Optimize Your Healing Practices
        </h1>
      </div>
      <div className={styles.paragraph}>
        Maximize your potential as a practitioner with our dedicated mobile app.
        Streamline your operations, manage your products, and connect with
        customers—all from the convenience of your smartphone or tablet. Whether
        you're on the go or in your studio, our app empowers you to stay
        organized, responsive, and in control of your business.
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.button1}>
          <img className={styles.iconJamIconsOutlineL} alt="" />
          <div className={styles.textContainer}>
            <div className={styles.buttonText}>Button Text</div>
          </div>
          <img className={styles.iconJamIconsOutlineL1} alt="" />
        </div>
        <div className={styles.button2}>
          <img className={styles.iconJamIconsOutlineL2} alt="" />
          <div className={styles.textContainer1}>
            <div className={styles.buttonText1}>Button Text</div>
          </div>
          <img className={styles.iconJamIconsOutlineL3} alt="" />
        </div>
        <div className={styles.button3}>
          <img className={styles.iconJamIconsOutlineL4} alt="" />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>Button Text</div>
          </div>
          <img className={styles.iconJamIconsOutlineL5} alt="" />
          <div className={styles.badge}>
            <div className={styles.text}>9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionText;
