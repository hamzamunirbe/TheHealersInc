import { useMemo } from "react";

const ServiceCard1 = ({ featuredImage, yoga, prop, propMinWidth }) => {
  const yoga1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start max-w-full text-left text-lg text-neutral-11 font-web-primary-h2-primary-dm-sans">
      <img
        className="self-stretch h-[154px] relative rounded-t-xl rounded-b-none max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={featuredImage}
      />
      <div className="self-stretch rounded-t-none rounded-b-xl bg-neutral-1 flex flex-col items-start justify-start p-4 box-border gap-[8px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <b
            className="relative leading-[28px] inline-block min-w-[42px]"
            style={yoga1Style}
          >
            {yoga}
          </b>
          <b className="relative leading-[28px] inline-block min-w-[35px] whitespace-nowrap">
            {prop}
          </b>
        </div>
        <div className="self-stretch relative text-xs text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          Unwind and rejuvenate with our calming yoga class, designed to
          cultivate strength, flexibility, and inner peace. Led by experienced
          instructors, this class offers a harmonious blend of gentle movements,
          mindful breathing, and relaxation techniques to leave you feeling
          refreshed and centered."
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 box-border [row-gap:20px] max-w-full gap-[0px] text-center text-sm text-neutral-10 mq750:flex-wrap">
          <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/icons.svg"
            />
            <div className="w-11 relative leading-[22px] font-semibold inline-block min-w-[44px]">
              Online
            </div>
          </div>
          <div className="w-[345px] flex flex-row items-center justify-center py-0 px-5 box-border gap-[8px] max-w-full text-left">
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

export default ServiceCard1;
