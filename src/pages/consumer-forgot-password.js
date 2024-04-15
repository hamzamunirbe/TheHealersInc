import MainFRAME from "../components/main-f-r-a-m-e";

const ConsumerForgotPassword = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-row items-start justify-start py-20 pr-20 pl-[163px] box-border gap-[193px] leading-[normal] tracking-[normal] text-left text-29xl text-m3-black font-web-primary-h3-primary-dm-sans mq750:gap-[96px] mq750:pl-[81px] mq750:pr-10 mq750:box-border mq450:gap-[48px] mq450:pl-5 mq450:box-border mq1125:flex-wrap">
      <div className="w-[404px] flex flex-col items-start justify-start pt-[275px] px-0 pb-0 box-border min-w-[404px] max-w-full mq750:pt-[179px] mq750:box-border mq750:min-w-full mq1125:flex-1">
        <MainFRAME />
      </div>
      <img
        className="h-[588.5px] w-[663.6px] absolute !m-[0] right-[42.4px] bottom-[-13px] z-[1]"
        alt=""
        src="/group-52.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[22px] pb-[485px] pr-0 pl-10 box-border relative gap-[54px] min-w-[390px] max-w-full mq750:gap-[27px] mq750:min-w-full mq450:pb-[205px] mq450:box-border mq1050:pt-5 mq1050:pb-[315px] mq1050:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/subtract.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="w-[236px] flex flex-row items-end justify-start gap-[12.4px] z-[1]">
            <img
              className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers1.svg"
              />
            </div>
          </div>
        </div>
        <h1 className="m-0 w-[520px] relative text-inherit leading-[64px] font-bold font-inherit inline-block max-w-full z-[1] mq450:text-10xl mq450:leading-[38px] mq1050:text-19xl mq1050:leading-[51px]">
          Explore Local offerings in fitness, and wellness services.
        </h1>
      </div>
    </div>
  );
};

export default ConsumerForgotPassword;
