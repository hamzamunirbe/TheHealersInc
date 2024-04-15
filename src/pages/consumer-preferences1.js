import FrameComponent5 from "../components/frame-component5";

const ConsumerPreferences1 = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-13xl text-gray-400 font-web-primary-h3-primary-dm-sans mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch bg-neutral-1 shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-center py-6 px-5 gap-[704px] top-[0] z-[99] sticky text-left text-base text-m3-black font-web-primary-h3-primary-dm-sans border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
        <div className="w-[236px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[12.4px]">
            <img
              className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo3.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers3.svg"
              />
            </div>
          </div>
        </div>
        <div className="rounded-13xl bg-neutral-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-4 gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-center">
              <img
                className="h-[41px] w-[41px] relative object-cover"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
            <div className="relative leading-[24px] font-semibold inline-block min-w-[95px] whitespace-nowrap">
              John Adams
            </div>
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/keyboard-arrow-down.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="w-[963px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="flex flex-row items-start justify-center gap-[56px] max-w-full mq750:flex-wrap mq750:gap-[28px]">
          <FrameComponent5 />
          <div className="flex flex-col items-start justify-start gap-[32px] min-w-[487px] max-w-full mq750:flex-1 mq750:gap-[16px] mq750:min-w-full">
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                What is your gender?
              </h1>
              <div className="relative text-base leading-[24px]">
                To provide you the best experience we need to know your gender.
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-center gap-[44px] text-base mq450:gap-[22px]">
              <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-4 px-8 gap-[8px]">
                <img
                  className="w-16 h-16 relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/image-102@2x.png"
                />
                <div className="relative leading-[24px] inline-block min-w-[33px]">
                  ‏Male
                </div>
              </div>
              <div className="rounded-lg bg-ghostwhite-200 overflow-hidden flex flex-col items-center justify-start py-4 px-8 gap-[8px]">
                <img
                  className="w-16 h-16 relative object-cover"
                  alt=""
                  src="/image-102-1@2x.png"
                />
                <div className="relative leading-[24px] inline-block min-w-[49px]">
                  Female
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerPreferences1;
