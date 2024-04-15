import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";

const ConsumerResetPassword = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[197px] leading-[normal] tracking-[normal] text-center text-lg text-character-disabled-placeholder-25 font-web-primary-h3-primary-dm-sans mq750:gap-[98px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq450:gap-[49px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="h-2 w-2 relative overflow-hidden shrink-0 hidden z-[0]" />
      <div className="h-[60px] w-[400px] rounded bg-neutral-3 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] box-border hidden flex-row items-center justify-center py-3 px-[30px] gap-[10px] max-w-full z-[1] border-[1px] border-solid border-neutral-5">
        <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/wrapper21@2x.png"
          />
        </div>
        <b className="relative leading-[26px]">Update Password</b>
      </div>
      <div className="w-[400px] flex flex-col items-start justify-start pt-[90.5px] px-0 pb-0 box-border min-w-[400px] max-w-full mq750:min-w-full mq450:pt-[38px] mq450:box-border mq1050:pt-[59px] mq1050:box-border mq1125:flex-1">
        <FrameComponent9 />
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[2]"
        alt=""
        src="/group-523.svg"
      />
      <FrameComponent8 />
    </div>
  );
};

export default ConsumerResetPassword;
