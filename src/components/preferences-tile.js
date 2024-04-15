import { useMemo } from "react";

const PreferencesTile = ({
  preferencesIcons,
  title,
  propWidth,
  propMinWidth,
  onPreferencesTileContainer2Click,
}) => {
  const title1Style = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div
      className="rounded-2xl bg-consumer-colors-complemantary flex flex-col items-end justify-start pt-2.5 px-2.5 pb-[34px] gap-[16px] text-center text-lg text-neutral-1 font-web-primary-h3-primary-dm-sans"
      onClick={onPreferencesTileContainer2Click}
    >
      <div className="w-[110px] flex flex-col items-end justify-start gap-[10px]">
        <div className="w-3.5 h-3.5 relative rounded-[50%] bg-neutral-1" />
        <div className="self-stretch flex flex-row items-start justify-start">
          <img
            className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
            alt=""
            src={preferencesIcons}
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 pr-[24.5px] pl-6">
        <b
          className="w-[111px] relative leading-[28px] inline-block min-w-[111px]"
          style={title1Style}
        >
          {title}
        </b>
      </div>
    </div>
  );
};

export default PreferencesTile;
