import HeroSection from "../components/hero-section";
import PractionerAndVendorDiv from "../components/practioner-and-vendor-div";
import WhyChooseUs from "../components/why-choose-us1";
import TheHealersApp from "../components/the-healers-app";
import Footer from "../components/footer2";

const FirstLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeroSection />
      <PractionerAndVendorDiv />
      <WhyChooseUs />
      <TheHealersApp group2="/group-21.svg" />
      <Footer />
    </div>
  );
};

export default FirstLandingPage;
