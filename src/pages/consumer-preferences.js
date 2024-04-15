import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PreferencesTile2 from "../components/preferences-tile2";
import PreferencesTile from "../components/preferences-tile";

const ConsumerPreferences = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <header className="self-stretch bg-neutral-1 shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-center py-6 px-5 gap-[704px] top-[0] z-[99] sticky text-left text-base text-m3-black font-web-primary-h2-primary-dm-sans border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq750:gap-[176px] mq450:gap-[88px]">
        <div className="w-[236px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-end justify-start gap-[12.4px]">
            <img
              className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers-logo.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers.svg"
              />
            </div>
          </div>
        </div>
        <div className="rounded-13xl bg-neutral-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-4 gap-[20px]">
          <div className="flex flex-row items-center justify-start">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/notifications-none.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-center">
              <img
                className="h-[41px] w-[41px] relative object-cover"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
            <div className="relative leading-[24px] font-semibold inline-block min-w-[95px] whitespace-nowrap">
              John Adams
            </div>
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/keyboard-arrow-down.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="w-[996px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-gray-400 font-web-primary-h2-primary-dm-sans">
        <div className="w-[756px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] mq750:hidden">
              <PreferencesTile2
                preferencesIcons="/preferences-icons.svg"
                title="Gender"
                propMinWidth="66px"
                onPreferencesTileContainer1Click={
                  onPreferencesTileContainerClick
                }
              />
              <PreferencesTile2
                preferencesIcons="/preferences-icons-1.svg"
                title="Date of Birth"
                propMinWidth="111px"
                onPreferencesTileContainer1Click={
                  onPreferencesTileContainer1Click
                }
              />
              <PreferencesTile2
                preferencesIcons="/preferences-icons-2.svg"
                title="Physical Profile"
                propMinWidth="unset"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_236px)] mq750:gap-[16px] mq750:max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                  What would you like to focus on ?
                </h1>
                <div className="relative text-base leading-[24px] inline-block max-w-full">
                  This will help us create your personalized experience.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[59px] pl-0 box-border gap-[8px] min-h-[232px] text-base mq1050:pr-[29px] mq1050:box-border">
                <button className="cursor-pointer [border:none] py-6 pr-5 pl-10 bg-ghostwhite-200 w-[183px] rounded-lg overflow-hidden shrink-0 flex flex-col items-center justify-start box-border gap-[16px] hover:bg-gainsboro-300">
                  <img
                    className="w-6 h-6 relative object-cover"
                    alt=""
                    src="/image-98@2x.png"
                  />
                  <div className="relative text-base leading-[24px] font-web-primary-h2-primary-dm-sans text-gray-400 text-left inline-block min-w-[103px]">
                    Mental Health
                  </div>
                </button>
                <div className="w-[207px] rounded-lg bg-ghostwhite-200 overflow-hidden shrink-0 flex flex-col items-center justify-start py-6 pr-5 pl-10 box-border gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-cover"
                    alt=""
                    src="/image-98-1@2x.png"
                  />
                  <div className="relative leading-[24px] inline-block min-w-[127px]">
                    Holistic Medicine
                  </div>
                </div>
                <div className="w-[210px] rounded-lg bg-ghostwhite-200 overflow-hidden shrink-0 flex flex-col items-center justify-start py-6 pr-5 pl-10 box-border gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-cover"
                    alt=""
                    src="/image-98-2@2x.png"
                  />
                  <div className="relative leading-[24px]">
                    Physical Wellness
                  </div>
                </div>
                <div className="w-[243px] rounded-lg bg-ghostwhite-200 overflow-hidden shrink-0 flex flex-col items-center justify-start py-6 pr-5 pl-10 box-border gap-[16px] whitespace-nowrap">
                  <img
                    className="w-6 h-6 relative object-cover"
                    alt=""
                    src="/image-98-3@2x.png"
                  />
                  <div className="relative leading-[24px]">{`Therapy & Counseling`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
            <PreferencesTile
              preferencesIcons="/preferences-icons-3.svg"
              title="Wellness Goals"
              propWidth="134px"
              propMinWidth="unset"
              onPreferencesTileContainer2Click={
                onPreferencesTileContainer2Click
              }
            />
            <button className="cursor-pointer py-[13px] px-[30px] bg-consumer-colors-primary rounded-25xl shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-consumer-colors-primary">
              <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                />
              </div>
              <b className="w-[147px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center">
                Explore Services
              </b>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerPreferences;
