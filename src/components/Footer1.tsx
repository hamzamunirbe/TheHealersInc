import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

const Footer1: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.companyFooter}>
        <div className={styles.div}>
          <div className={styles.logo}>
            <img
              className={styles.theHealersLogo}
              alt=""
              src="/the-healers-logo-11.svg"
            />
            <div className={styles.theHealersWrapper}>
              <img
                className={styles.theHealersIcon}
                alt=""
                src="/the-healers-11.svg"
              />
            </div>
          </div>
          <div className={styles.withLotsOf}>
            Your all-in-one platform for effortless wellness, connecting you
            with curated fitness, wellness services and personalized
            recommendations.
          </div>
        </div>
        <div className={styles.socialIcons}>
          <div className={styles.company}>Company</div>
          <div className={styles.aboutUsContact}>About us</div>
          <div className={styles.aboutUsContact1}>Contact us</div>
          <div className={styles.aboutUsContact2}>Privacy Policy</div>
          <div className={styles.aboutUsContact3}>Terms and Conditions</div>
        </div>
        <div className={styles.socialIcons1}>
          <div className={styles.company1}>Services</div>
          <div className={styles.aboutUsContact4}>Mind</div>
          <div className={styles.aboutUsContact5}>Body</div>
          <div className={styles.aboutUsContact6}>Medicine</div>
          <div className={styles.aboutUsContact7}>
            Psychologists and Counselors
          </div>
        </div>
        <div className={styles.socialIcons2}>
          <div className={styles.company2}>Links</div>
          <div className={styles.aboutUsContact8}>Sitemap</div>
          <div className={styles.aboutUsContact9}>Security</div>
          <div className={styles.aboutUsContact10}>Support Center</div>
          <div className={styles.aboutUsContact11}>Cookie Preferences</div>
        </div>
        <div className={styles.googlePlayIcon}>
          <div className={styles.button}>
            <img
              className={styles.appStoreFilled}
              loading="lazy"
              alt=""
              src="/app-store--filled.svg"
            />
          </div>
          <div className={styles.button1}>
            <div className={styles.googlePlay}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className={styles.uniqueReasons}>
                <div className={styles.getItOn}>GET IT ON</div>
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
              <img
                className={styles.organizedTasksIcon}
                alt=""
                src="/vector-4.svg"
              />
              <img className={styles.vectorIcon4} alt="" src="/vector-2.svg" />
              <img className={styles.getItOnLabel} alt="" src="/vector-6.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.lineCopyIcon}
        loading="lazy"
        alt=""
        src="/line-copy1.svg"
      />
      <div className={styles.div1}>
        <div className={styles.copyrightAl}>
          © 2024 Copyright, All Right Reserved.
        </div>
        <div className={styles.logotwitter}>
          <div className={styles.social}>
            <img
              className={styles.logoTwitterIcon}
              loading="lazy"
              alt=""
              src="/logotwitter1.svg"
            />
            <img
              className={styles.logoFacebookIcon}
              loading="lazy"
              alt=""
              src="/logofacebook1.svg"
            />
            <img
              className={styles.logoInstagramIcon}
              loading="lazy"
              alt=""
              src="/logoinstagram1@2x.png"
            />
            <img
              className={styles.logoLinkedinIcon}
              loading="lazy"
              alt=""
              src="/logolinkedin1@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
