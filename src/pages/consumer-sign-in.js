import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";

const ConsumerSignIn = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[127px] leading-[normal] tracking-[normal] mq1125:flex-wrap mq450:gap-[32px] mq450:pl-5 mq450:box-border mq750:gap-[63px] mq750:pl-[81px] mq750:pr-10 mq750:box-border">
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-521.svg"
      />
      <div className="w-[470px] flex flex-col items-start justify-start pt-[114px] px-0 pb-0 box-border min-w-[470px] max-w-full mq1125:flex-1 mq750:pt-[74px] mq750:box-border mq750:min-w-full">
        <FrameComponent2 />
      </div>
      <FrameComponent1
        theHealersLogo="/the-healers-logo3.svg"
        theHealers="/the-healers3.svg"
      />
    </div>
  );
};

export default ConsumerSignIn;
