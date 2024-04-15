import FrameComponent2 from "../components/frame-component2";
import About from "../components/about";
import FrameComponent1 from "../components/frame-component1";
import DataSpliter from "../components/data-spliter";
import TheHealersApp from "../components/the-healers-app";
import Footer11 from "../components/footer1";

const ConsumerLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start tracking-[normal] leading-[normal]">
      <FrameComponent2 />
      <About />
      <FrameComponent1 />
      <DataSpliter />
      <TheHealersApp
        group2="/group-2.svg"
        bookingMadeSimpleContaineLineHeight="21.6px"
        bookingMadeSimpleContaineDisplay="inline-block"
        bookingMadeSimpleContaineMinHeight="48px"
      />
      <Footer11 />
    </div>
  );
};

export default ConsumerLandingPage;
