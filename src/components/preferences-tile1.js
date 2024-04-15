import { useMemo } from "react";

const PreferencesTile1 = ({
  preferencesIcons,
  title,
  propMinWidth,
  onPreferencesTileContainerClick,
}) => {
  const titleStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch rounded-2xl bg-neutral-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] flex flex-col items-start justify-start py-[34px] px-[57px] gap-[16px] cursor-pointer text-center text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans"
      onClick={onPreferencesTileContainerClick}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <img
          className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={preferencesIcons}
        />
      </div>
      <b
        className="self-stretch relative leading-[28px] inline-block min-w-[66px]"
        style={titleStyle}
      >
        {title}
      </b>
    </div>
  );
};

export default PreferencesTile1;
