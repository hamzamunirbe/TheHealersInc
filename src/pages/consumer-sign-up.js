import FrameComponent3 from "../components/frame-component3";

const ConsumerSignUp = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[165px] leading-[normal] tracking-[normal] text-left text-smi text-m3-black font-poppins mq1125:flex-wrap mq450:gap-[41px] mq450:pl-5 mq450:box-border mq750:gap-[82px] mq750:pl-[81px] mq750:pr-10 mq750:box-border">
      <div className="h-[47px] w-[236px] relative hidden z-[0]">
        <img
          className="absolute h-full w-[20.08%] top-[0%] right-[79.92%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/the-healers-logo3.svg"
        />
        <img
          className="absolute h-[47.87%] w-[74.66%] top-[26.17%] right-[0%] bottom-[25.96%] left-[25.34%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/the-healers3.svg"
        />
      </div>
      <div className="h-[57.5px] w-[404px] hidden flex-col items-start justify-start max-w-full z-[1]">
        <div className="w-10 flex flex-row items-start justify-start">
          <div className="h-5 flex-1 relative font-medium inline-block">
            Name
          </div>
        </div>
        <div className="self-stretch h-8 rounded-3xs box-border overflow-hidden shrink-0 border-[1px] border-solid border-neutral-5" />
      </div>
      <div className="w-[432px] flex flex-col items-start justify-start pt-[62.6px] px-0 pb-0 box-border min-w-[432px] max-w-full mq1050:pt-[41px] mq1050:box-border mq1125:flex-1 mq450:pt-[27px] mq450:box-border mq750:min-w-full">
        <FrameComponent3 />
      </div>
      <div className="h-[864px] flex-1 relative min-w-[390px] max-w-full text-29xl font-web-primary-h2-primary-dm-sans mq750:min-w-full">
        <img
          className="absolute top-[0px] left-[0px] rounded-2xl w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src="/subtract.svg"
        />
        <h1 className="m-0 absolute top-[123px] left-[40px] text-inherit leading-[64px] font-bold font-inherit inline-block w-[520px] z-[2] mq1050:text-19xl mq1050:leading-[51px] mq450:text-10xl mq450:leading-[38px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[3]"
        alt=""
        src="/group-522.svg"
      />
    </div>
  );
};

export default ConsumerSignUp;
