import HeroSection from "../components/hero-section";
import PractionerAndVendorDiv from "../components/practioner-and-vendor-div";
import WhyChooseUs1 from "../components/why-choose-us1";
import TheHealersApp from "../components/the-healers-app";
import Footer2 from "../components/footer2";

const FirstLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <HeroSection />
      <PractionerAndVendorDiv />
      <WhyChooseUs1 />
      <TheHealersApp />
      <Footer2 />
    </div>
  );
};

export default FirstLandingPage;
