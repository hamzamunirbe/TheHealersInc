const ServiceCard2 = () => {
  return (
    <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-5xl text-neutral-11 font-web-primary-h2-primary-dm-sans mq750:flex-wrap">
      <img
        className="h-[172px] w-[166px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[172px]"
        loading="lazy"
        alt=""
        src="/featured-image2@2x.png"
      />
      <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[318px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]">
            Yoga
          </h1>
          <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
            $30
          </b>
        </div>
        <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          Unwind and rejuvenate with our calming yoga class, designed to
          cultivate strength, flexibility, and inner peace. Led by experienced
          instructors, this class offers a harmonious blend of gentle movements,
          mindful breathing, and relaxation techniques to leave you feeling
          refreshed and centered."
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 gap-[0px] [row-gap:20px] text-center text-sm text-neutral-10 mq750:flex-wrap">
          <div className="w-[221px] flex flex-row items-center justify-center py-0 px-[72.5px] box-border gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icons.svg"
            />
            <div className="flex-1 relative leading-[22px] font-semibold inline-block min-w-[44px]">
              Online
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-0 px-[52.5px] gap-[8px] text-left">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/timezone-1.svg"
            />
            <div className="relative leading-[22px] font-semibold inline-block min-w-[84px] whitespace-nowrap">
              GMT -05:00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
