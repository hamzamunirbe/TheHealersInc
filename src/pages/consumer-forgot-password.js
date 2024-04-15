import MainFRAME from "../components/main-f-r-a-m-e";
import FrameComponent1 from "../components/frame-component1";

const ConsumerForgotPassword = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[193px] leading-[normal] tracking-[normal] mq750:gap-[96px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq450:gap-[48px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="w-[404px] flex flex-col items-start justify-start pt-[275px] px-0 pb-0 box-border min-w-[404px] max-w-full mq750:pt-[179px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <MainFRAME />
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <FrameComponent1
        theHealersLogo="/the-healers-logo.svg"
        theHealers="/the-healers.svg"
      />
    </div>
  );
};

export default ConsumerForgotPassword;
