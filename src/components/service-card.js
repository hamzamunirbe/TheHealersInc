import { useMemo } from "react";

const ServiceCard = ({
  featuredImage,
  yoga,
  theStarStudio,
  unwindAndRejuvenateWithOu,
  propMinWidth,
  propMinWidth1,
}) => {
  const yogaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const theStarStudioStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch shadow-[-1px_0px_0px_#d9d9d9_inset,_0px_1px_0px_#d9d9d9_inset,_0px_-1px_0px_#d9d9d9_inset] flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-5xl text-neutral-11 font-web-primary-h2-primary-dm-sans mq1050:flex-wrap">
      <img
        className="h-[250px] w-[312px] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl object-cover min-h-[250px] mq1050:flex-1"
        loading="lazy"
        alt=""
        src={featuredImage}
      />
      <div className="flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-neutral-1 flex flex-col items-start justify-start py-4 px-6 box-border gap-[8px] min-w-[411px] max-w-full mq750:min-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[295.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
            <h2
              className="m-0 relative text-inherit leading-[36px] font-bold font-inherit inline-block min-w-[56px] mq450:text-lgi mq450:leading-[29px]"
              style={yogaStyle}
            >
              {yoga}
            </h2>
            <div
              className="relative text-base leading-[24px] font-semibold text-neutral-8 inline-block min-w-[119px]"
              style={theStarStudioStyle}
            >
              {theStarStudio}
            </div>
          </div>
          <b className="relative text-13xl leading-[48px] inline-block min-w-[62px] whitespace-nowrap mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            $30
          </b>
        </div>
        <div className="self-stretch relative text-base leading-[24px] text-neutral-8 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {unwindAndRejuvenateWithOu}
        </div>
        <div className="self-stretch flex flex-row items-center justify-center py-4 px-0 gap-[16px] text-center text-sm text-neutral-10 mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-center py-0 px-5 box-border gap-[8px] min-w-[185px]">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
              alt=""
              src="/icons.svg"
            />
            <div className="w-11 relative leading-[22px] font-semibold inline-block min-w-[44px]">
              Online
            </div>
          </div>
          <div className="flex-[0.6721] flex flex-col items-center justify-center py-0 pr-5 pl-[100px] box-border gap-[8px] min-w-[185px] text-left mq450:flex-1">
            <img
              className="w-6 h-6 relative overflow-hidden shrink-0"
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

export default ServiceCard;
