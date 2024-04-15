const WhyChooseUs1 = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center py-14 px-5 box-border gap-[56px] max-w-full text-center text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq750:gap-[28px] mq750:pt-9 mq750:pb-9 mq750:box-border">
      <div className="w-[589px] overflow-hidden flex flex-col items-center justify-start gap-[24px] max-w-full">
        <b className="self-stretch relative tracking-[1.63px] uppercase">
          Why choose us
        </b>
        <h1 className="m-0 w-[521px] relative text-17xl tracking-[-1.2px] leading-[48px] font-bold font-inherit text-gray-300 inline-block max-w-full mq450:text-3xl mq450:leading-[29px] mq750:text-10xl mq750:leading-[38px]">
          People choose us because we serve the best for everyone
        </h1>
      </div>
      <div className="w-[1240px] flex flex-row flex-wrap items-start justify-center py-0 px-[147px] box-border gap-[56px] min-h-[236px] max-w-full text-left text-2xl text-gray-300 mq750:gap-[28px] mq750:pl-9 mq750:pr-9 mq750:box-border mq1225:pl-[73px] mq1225:pr-[73px] mq1225:box-border">
        <div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
          <img
            className="h-20 w-20 relative"
            loading="lazy"
            alt=""
            src="/icon2.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
              Global Reach, Local Connection
            </b>
            <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 inline-block mix-blend-normal">
              Expand globally, connect locally, reach diverse customers
              effortlessly
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
          <img
            className="h-[79px] w-[79px] relative"
            alt=""
            src="/icon-11.svg"
          />
          <div className="flex flex-col items-start justify-start max-w-full">
            <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
              Effortless Setup and Management
            </b>
            <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 inline-block mix-blend-normal">
              Streamlined setup, simple management, user-friendly.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
          <img
            className="h-[79px] w-[79px] relative"
            alt=""
            src="/icon-11.svg"
          />
          <div className="flex flex-col items-start justify-start max-w-full">
            <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
              Marketing and Promotion Support
            </b>
            <div className="w-[300px] relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 inline-block mix-blend-normal">
              Boost sales, enhance visibility, targeted marketing for increased
              exposure.
            </div>
          </div>
        </div>
        <div className="w-[445px] flex flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[32px] max-w-full mq450:gap-[16px] mq750:flex-wrap">
          <img
            className="h-[79px] w-[79px] relative"
            alt=""
            src="/icon-11.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
            <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
              Actionable Insights for Growth
            </b>
            <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
              Track trends, optimize strategy, data-driven decisions for
              business success.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs1;
