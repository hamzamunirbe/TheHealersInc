import { useMemo } from "react";

const DataRouter = ({ propDebugCommit }) => {
  const dataRouterStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  return (
    <div
      className="self-stretch h-[142px] bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[12px] [debug_commit:f6aba90] text-left text-base text-neutral-8 font-web-primary-h3-primary-dm-sans"
      style={dataRouterStyle}
    >
      <div className="relative leading-[24px] font-semibold inline-block min-w-[64px]">
        Applied:
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[61px] pl-0 gap-[8px] mq450:pr-5 mq450:box-border">
        <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/left-icon.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <b className="w-[35px] relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[35px]">
              Yoga
            </b>
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0"
              alt=""
              src="/cancel.svg"
            />
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/left-icon.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <b className="w-[46px] relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[46px]">
              5 Miles
            </b>
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0"
              alt=""
              src="/cancel.svg"
            />
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-0.5 px-1 bg-highlight-lightest rounded-3xl flex flex-row items-center justify-center gap-[4px]">
          <img
            className="h-3 w-3 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/left-icon.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 px-1">
            <b className="w-[123px] relative text-xs leading-[20px] uppercase inline-block font-web-primary-h3-primary-dm-sans text-highlight-darkest text-center min-w-[123px] whitespace-nowrap">
              08:00 AM - 12:00 PM
            </b>
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-3 h-3 relative overflow-hidden shrink-0"
              alt=""
              src="/cancel.svg"
            />
          </div>
        </button>
      </div>
      <div className="rounded overflow-hidden flex flex-row items-center justify-center py-1 px-2 gap-[8px] text-center text-sm text-consumer-colors-complemantary">
        <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
            alt=""
            src="/wrapper-12@2x.png"
          />
        </div>
        <div className="w-[54px] relative [text-decoration:underline] leading-[22px] inline-block min-w-[54px]">
          Clear All
        </div>
      </div>
    </div>
  );
};

export default DataRouter;
