import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PreferencesTile2 from "./preferences-tile2";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] min-w-[180px] text-center text-lg text-neutral-1 font-web-primary-h3-primary-dm-sans mq750:flex-1">
      <div className="self-stretch rounded-2xl bg-consumer-colors-complemantary flex flex-col items-start justify-start pt-2.5 pb-[34px] pr-2.5 pl-[57px] gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
          <div className="flex-1 flex flex-col items-end justify-start gap-[10px]">
            <div className="w-3.5 h-3.5 relative rounded-[50%] bg-neutral-1" />
            <div className="self-stretch flex flex-row items-start justify-start">
              <img
                className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/preferences-icons1.svg"
              />
            </div>
          </div>
        </div>
        <b className="w-[66px] relative leading-[28px] inline-block min-w-[66px]">
          Gender
        </b>
      </div>
      <PreferencesTile2
        preferencesIcons="/preferences-icons-12.svg"
        title="Date of Birth"
        onPreferencesTileContainer1Click={onPreferencesTileContainer1Click}
      />
      <PreferencesTile2
        preferencesIcons="/preferences-icons-22.svg"
        title="Physical Profile"
        propMinWidth="unset"
        onPreferencesTileContainer1Click={onPreferencesTileContainer2Click}
      />
      <PreferencesTile2
        preferencesIcons="/preferences-icons-32.svg"
        title="Wellness Goals"
        propMinWidth="unset"
        onPreferencesTileContainer1Click={onPreferencesTileContainer3Click}
      />
    </div>
  );
};

export default FrameComponent5;
