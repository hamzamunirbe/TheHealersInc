import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import WhyChooseUs1 from "../components/WhyChooseUs1";
import SectionText from "../components/SectionText";
import Footer1 from "../components/Footer1";
import styles from "./PractitionerLandingPage.module.css";

const PractitionerLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.practitionerLandingPage}>
      <Header />
      <FrameComponent1 />
      <div className={styles.googlePlayButton}>
        <div className={styles.getItOnButton}>
          <b className={styles.ourStory}>KNow more about us</b>
          <h1 className={styles.weKnowHow}>
            We're Here to Help You Grow Your Healing Practice: Explore The
            Healers Marketplace
          </h1>
        </div>
      </div>
      <section className={styles.practitionerLandingPageInner}>
        <div className={styles.imgParent}>
          <img
            className={styles.imgIcon}
            loading="lazy"
            alt=""
            src="/img@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.imagesParent}>
              <img
                className={styles.imagesIcon}
                loading="lazy"
                alt=""
                src="/images@2x.png"
              />
              <div className={styles.weShareCommon}>
                Welcome to The Healers Marketplace, where healing meets
                innovation. Our platform is a vibrant ecosystem connecting
                healers, practitioners, and seekers from around the globe.
                Whether you're a seasoned healer or just beginning your journey,
                our marketplace offers a diverse range of services and
                modalities to support your holistic well-being.
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs1 />
      <section className={styles.theHealersApp}>
        <div className={styles.content}>
          <b className={styles.whyChooseUs}>The Healers app</b>
          <SectionText />
        </div>
        <div className={styles.wrapperImage}>
          <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default PractitionerLandingPage;
