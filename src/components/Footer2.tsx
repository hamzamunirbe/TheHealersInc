import { FunctionComponent } from "react";
import styles from "./Footer2.module.css";

const Footer2: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.dataCombinerX}>
        <div className={styles.inputSelectorX}>
          <div className={styles.logo}>
            <img
              className={styles.theHealersLogo}
              loading="lazy"
              alt=""
              src="/the-healers-logo-12.svg"
            />
            <div className={styles.valueSequencerX}>
              <img
                className={styles.theHealersIcon}
                loading="lazy"
                alt=""
                src="/the-healers-12.svg"
              />
            </div>
          </div>
          <div className={styles.withLotsOf}>
            Your all-in-one platform for effortless wellness, connecting you
            with curated fitness, wellness services and personalized
            recommendations.
          </div>
        </div>
        <div className={styles.errorForwarder}>
          <div className={styles.company}>Company</div>
          <div className={styles.aboutUsContact}>About us</div>
          <div className={styles.aboutUsContact1}>Contact us</div>
          <div className={styles.aboutUsContact2}>Privacy Policy</div>
          <div className={styles.aboutUsContact3}>Terms and Conditions</div>
        </div>
        <div className={styles.errorForwarder1}>
          <div className={styles.company1}>Services</div>
          <div className={styles.aboutUsContact4}>Mind</div>
          <div className={styles.aboutUsContact5}>Body</div>
          <div className={styles.aboutUsContact6}>Medicine</div>
          <div className={styles.aboutUsContact7}>
            Psychologists and Counselors
          </div>
        </div>
        <div className={styles.errorForwarder2}>
          <div className={styles.company2}>Links</div>
          <div className={styles.aboutUsContact8}>Sitemap</div>
          <div className={styles.aboutUsContact9}>Security</div>
          <div className={styles.aboutUsContact10}>Support Center</div>
          <div className={styles.aboutUsContact11}>Cookie Preferences</div>
        </div>
        <div className={styles.resultProcessor}>
          <div className={styles.button}>
            <img
              className={styles.appStoreFilled}
              loading="lazy"
              alt=""
              src="/app-store--filled1.svg"
            />
          </div>
          <div className={styles.button1}>
            <div className={styles.googlePlay}>
              <img
                className={styles.shapeAssemblerIcon}
                alt=""
                src="/vector.svg"
              />
              <img
                className={styles.shapeAssemblerIcon1}
                alt=""
                src="/vector-1.svg"
              />
              <div className={styles.layoutOrganizer}>
                <img
                  className={styles.dataMergeIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
              <div className={styles.conditionChecker}>
                <div className={styles.getItOn}>GET IT ON</div>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector-4.svg" />
              <img className={styles.vectorIcon2} alt="" src="/vector-51.svg" />
              <img className={styles.vectorIcon3} alt="" src="/vector-61.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.lineCopyIcon}
        loading="lazy"
        alt=""
        src="/line-copy.svg"
      />
      <div className={styles.div}>
        <div className={styles.copyrightAl}>
          © 2024 Copyright, All Right Reserved.
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.social}>
            <img
              className={styles.logoTwitterIcon}
              loading="lazy"
              alt=""
              src="/logotwitter.svg"
            />
            <img
              className={styles.logoFacebookIcon}
              loading="lazy"
              alt=""
              src="/logofacebook.svg"
            />
            <img
              className={styles.logoInstagramIcon}
              loading="lazy"
              alt=""
              src="/logoinstagram@2x.png"
            />
            <img
              className={styles.logoLinkedinIcon}
              alt=""
              src="/logolinkedin@2x.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
