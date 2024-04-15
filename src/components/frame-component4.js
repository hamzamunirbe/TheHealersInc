import { useMemo } from "react";

const FrameComponent4 = ({
  subtitle1,
  section,
  divider,
  section1,
  propMinWidth,
  propWidth,
  propMinWidth1,
  propWidth1,
  propMinWidth2,
}) => {
  const subtitle1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const sectionStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propMinWidth1]);

  const section1Style = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth2,
    };
  }, [propWidth1, propMinWidth2]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-base text-gray-400 font-web-primary-h2-primary-dm-sans">
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
        <div
          className="relative leading-[24px] font-semibold inline-block min-w-[55px]"
          style={subtitle1Style}
        >
          {subtitle1}
        </div>
        <div className="rounded-3xl bg-neutral-light-light flex flex-row items-center justify-center p-1 text-center text-xs text-neutral-dark-light font-heading-h5">
          <button className="cursor-pointer [border:none] py-2 px-[20.5px] bg-neutral-1 rounded-9xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
            <b
              className="w-[15px] relative text-xs inline-block font-heading-h5 text-consumer-colors-primary text-center min-w-[15px]"
              style={sectionStyle}
            >
              {section}
            </b>
          </button>
          <img
            className="h-2.5 w-0 relative hidden z-[1]"
            alt=""
            src={divider}
          />
          <div className="rounded-9xl flex flex-row items-center justify-center py-2 px-[22.5px]">
            <b
              className="w-[11px] relative inline-block min-w-[11px]"
              style={section1Style}
            >
              {section1}
            </b>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-sm bg-neutral-1 shadow-[0px_0px_0px_2px_rgba(24,_144,_255,_0.2)] box-border overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-character-disabled-placeholder-25 font-components-helper-text border-[1px] border-solid border-primary-6 mq750:overflow-x-auto">
        <div className="flex-1 flex flex-row items-start justify-start py-2 px-3 box-border min-w-[520px] max-w-full">
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="w-px h-[18px] relative bg-m3-black" />
            </div>
            <div className="relative leading-[24px] inline-block min-w-[9px]">
              3
            </div>
          </div>
        </div>
        <div className="bg-neutral-1 flex flex-row items-start justify-start">
          <div className="bg-conditional-divider flex flex-row items-center justify-start py-0 px-0">
            <img
              className="h-10 w-px relative"
              loading="lazy"
              alt=""
              src="/line.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
              <img
                className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/up.svg"
              />
            </div>
            <div className="h-0 flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border">
              <img
                className="w-[22px] h-px relative"
                alt=""
                src="/line-1.svg"
              />
            </div>
            <div className="flex flex-row items-center justify-center py-[6.5px] px-[7.5px]">
              <img
                className="h-[7px] w-[7px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/down.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
