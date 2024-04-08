import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PractionerAndVendorDiv from "../components/PractionerAndVendorDiv";
import WhyChooseUs1 from "../components/WhyChooseUs1";
import TheHealersApp from "../components/TheHealersApp";
import Footer1 from "../components/Footer1";
import styles from "./FirstLandingPage.module.css";

const FirstLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.firstLandingPage}>
      <FrameComponent1 />
      <PractionerAndVendorDiv />
      <WhyChooseUs1 />
      <TheHealersApp />
      <Footer1 />
    </div>
  );
};

export default FirstLandingPage;
