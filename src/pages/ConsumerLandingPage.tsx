import { FunctionComponent } from "react";
import ButtonBusinessCard from "../components/ButtonBusinessCard";
import Footer2 from "../components/Footer2";
import styles from "./ConsumerLandingPage.module.css";

const ConsumerLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.consumerLandingPage}>
      <section className={styles.crouselParent}>
        <div className={styles.crousel}>
          <img className={styles.imagesIcon} alt="" src="/images@2x.png" />
          <div className={styles.crouselChild} />
        </div>
        <header className={styles.header}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <img
                className={styles.theHealersLogo}
                loading="lazy"
                alt=""
                src="/the-healers-logo2.svg"
              />
              <div className={styles.theHealersWrapper}>
                <img
                  className={styles.theHealersIcon}
                  loading="lazy"
                  alt=""
                  src="/the-healers2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>
                <div className={styles.iconWrapper}>
                  <img className={styles.wrapperIcon} alt="" />
                </div>
                <b className={styles.text}>Login</b>
              </button>
            </div>
            <button className={styles.button1}>
              <div className={styles.iconWrapper1}>
                <img className={styles.wrapperIcon1} alt="" />
              </div>
              <b className={styles.text1}>Sign Up Now</b>
            </button>
          </div>
        </header>
        <div className={styles.subtree}>
          <div className={styles.branchingOutwards}>
            <div className={styles.findADreamJobThaParent}>
              <h1 className={styles.findADream}>
                Find an ideal healing experience.
              </h1>
              <div className={styles.withLotsOf}>
                Explore a world of wellness options and embark on your journey
                to healing.
              </div>
            </div>
            <div className={styles.search}>
              <div className={styles.inputParent}>
                <div className={styles.input}>
                  <div className={styles.inputName}>Search for anything</div>
                </div>
                <button className={styles.dropdownItem}>
                  <div className={styles.name}>
                    <div className={styles.vancouverCanada}>
                      Vancouver, Canada
                    </div>
                    <img
                      className={styles.iconoutlinelocationMarker}
                      alt=""
                      src="/iconoutlinelocationmarker.svg"
                    />
                  </div>
                </button>
                <button className={styles.button2}>
                  <div className={styles.iconWrapper2}>
                    <img className={styles.wrapperIcon2} alt="" />
                  </div>
                  <b className={styles.text2}>Search</b>
                </button>
              </div>
              <div className={styles.bottom}>
                <div className={styles.tryProductDesigner}>
                  Try Yoga, Meditation etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
        <div className={styles.contentRight}>
          <div className={styles.title}>
            <h1 className={styles.h2}>Your Path to Holistic Wellness</h1>
            <div className={styles.paragraph}>
              People choose us because we serve the best for everyone.
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.iconParent}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.h5Parent}>
                <b className={styles.h5}>Diverse Healing Modalities</b>
                <div className={styles.paragraph1}>
                  Explore varied healing options for your holistic well-being.
                </div>
              </div>
            </div>
            <div className={styles.iconGroup}>
              <img
                className={styles.icon1}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.h5Group}>
                <b className={styles.h51}>Instant Notifications</b>
                <div className={styles.paragraph2}>
                  Receive instant notifications for appointment reminders.
                </div>
              </div>
            </div>
            <div className={styles.iconContainer}>
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.h5Container}>
                <b className={styles.h52}>Expert Practitioners</b>
                <div className={styles.paragraph3}>
                  Connect with skilled practitioners for personalized wellness
                  guidance.
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <img
                className={styles.icon3}
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className={styles.h5Parent1}>
                <b className={styles.h53}>Personalized Experiences</b>
                <div className={styles.paragraph4}>
                  Tailored services to meet your unique wellness needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.exploreBestPractitionersParent}>
        <h2 className={styles.exploreBestPractitioners}>
          Explore Best Practitioners
        </h2>
        <div className={styles.buttonbusinessCardParent}>
          <div className={styles.buttonbusinessCard}>
            <div className={styles.mediaTextContent}>
              <div className={styles.header1}>
                <div className={styles.content1}>
                  <img
                    className={styles.monogramIcon}
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className={styles.text3}>
                    <b className={styles.header2}>The Star Studio</b>
                    <div className={styles.subhead}>Yoga, Meditation</div>
                  </div>
                </div>
              </div>
              <div className={styles.media}>
                <img
                  className={styles.mediaIcon}
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className={styles.textContent}>
                <div className={styles.valueMultiplier}>
                  Howe Street, Vancouver
                </div>
                <div className={styles.actions}>
                  <div className={styles.secondaryAction}>
                    <div className={styles.stateLayer}>
                      <div className={styles.labelText}>Enabled</div>
                    </div>
                  </div>
                  <div className={styles.primaryAction}>
                    <div className={styles.stateLayer1}>
                      <div className={styles.labelText1}>Enabled</div>
                    </div>
                  </div>
                </div>
                <div className={styles.texttitle}>
                  <div className={styles.dataSorter}>1 mile</div>
                  <div className={styles.iconWrapper3}>
                    <img
                      className={styles.nearMeIcon}
                      loading="lazy"
                      alt=""
                      src="/near-me.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonBusinessCard monogram="/monogram@2x.png" />
          <ButtonBusinessCard monogram="/monogram@2x.png" propMinWidth="44px" />
          <ButtonBusinessCard monogram="/monogram@2x.png" propMinWidth="44px" />
          <ButtonBusinessCard
            monogram="/monogram-4@2x.png"
            propMinWidth="unset"
          />
          <ButtonBusinessCard
            monogram="/monogram-5@2x.png"
            propMinWidth="unset"
          />
          <ButtonBusinessCard
            monogram="/monogram-5@2x.png"
            propMinWidth="unset"
          />
        </div>
      </section>
      <section className={styles.dataSpliter}>
        <h2 className={styles.exploreCategories}>Explore Categories</h2>
        <div className={styles.dataTransformer}>
          <div className={styles.dataFilter}>
            <h2 className={styles.psychologistsAndCounselors}>
              Psychologists and Counselors
            </h2>
          </div>
          <div className={styles.dataFilter1}>
            <h2 className={styles.mind}>Mind</h2>
          </div>
          <div className={styles.dataFilter2}>
            <h2 className={styles.body}>Body</h2>
          </div>
          <div className={styles.dataFilter3}>
            <h2 className={styles.medicine}>Medicine</h2>
          </div>
        </div>
      </section>
      <section className={styles.theHealersApp}>
        <div className={styles.dataExtractor}>
          <div className={styles.dataValidator}>
            <b className={styles.whyChooseUs}>The Healers app</b>
            <h1 className={styles.h21}>Experience Wellness On the Go</h1>
          </div>
          <div className={styles.weShareCommon}>
            Take your wellness journey with you wherever you go with our mobile
            app. Seamlessly access our services, schedule appointments, and stay
            connected with your practitioner—all from the palm of your hand.
            With user-friendly navigation and convenient features, our app makes
            it easy to prioritize your well-being, no matter how busy life gets.
          </div>
        </div>
        <div className={styles.valueCalculator}>
          <div className={styles.inputSelector}>
            <div className={styles.outputFilter}>
              <div className={styles.errorHandlerX}>
                <div className={styles.parentSplitter} />
              </div>
              <div className={styles.bookingMadeSimpleContainer}>
                <p className={styles.bookingMade}>{`Booking Made `}</p>
                <p className={styles.simple}>Simple</p>
              </div>
            </div>
            <div className={styles.dataRouther}>
              <div className={styles.valueTransformer}>
                <div className={styles.conditionMerger}>
                  <div className={styles.inputMapper} />
                  <img
                    className={styles.conditionMergerChild}
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
                <div className={styles.dataRearranger}>
                  <div className={styles.valueSorter}>
                    <img
                      className={styles.valueSorterChild}
                      loading="lazy"
                      alt=""
                      src="/group-21.svg"
                    />
                  </div>
                  <div className={styles.general}>Best Practitioners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </div>
  );
};

export default ConsumerLandingPage;
