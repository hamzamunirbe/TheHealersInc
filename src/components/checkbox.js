import { useMemo } from "react";

const Checkbox = ({ title, propLineHeight }) => {
  const title3Style = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 text-left text-sm text-m3-black font-web-primary-h2-primary-dm-sans border-b-[2px] border-solid border-whitesmoke-200">
      <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <input
            className="m-0 w-6 h-6 relative rounded overflow-hidden shrink-0"
            type="checkbox"
          />
        </div>
        <div className="flex-1 relative leading-[22px]" style={title3Style}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
