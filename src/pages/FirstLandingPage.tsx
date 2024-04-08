import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import PractionerAndVendorDiv from "../components/PractionerAndVendorDiv";
import WhyChooseUs from "../components/WhyChooseUs";
import TheHealersApp from "../components/TheHealersApp";
import Footer from "../components/Footer";
import styles from "./FirstLandingPage.module.css";

const FirstLandingPage: FunctionComponent = () => {
  return (
    <div className={styles.firstLandingPage}>
      <FrameComponent />
      <PractionerAndVendorDiv />
      <WhyChooseUs />
      <TheHealersApp />
      <Footer />
    </div>
  );
};

export default FirstLandingPage;
