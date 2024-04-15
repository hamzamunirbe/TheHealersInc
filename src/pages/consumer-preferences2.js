import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar";
import PreferencesTile1 from "../components/preferences-tile1";
import PreferencesTile from "../components/preferences-tile";

const ConsumerPreferences2 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer2Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] text-left text-13xl text-gray-400 font-web-primary-h2-primary-dm-sans mq450:gap-[20px] mq750:gap-[40px]">
      <NavBar />
      <div className="w-[868px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[628px] flex flex-row items-start justify-center gap-[56px] max-w-full mq750:flex-wrap mq750:gap-[28px]">
          <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] min-w-[180px] mq750:flex-1">
            <PreferencesTile1
              preferencesIcons="/preferences-icons.svg"
              title="Gender"
              onPreferencesTileContainerClick={onPreferencesTileContainerClick}
            />
            <PreferencesTile
              preferencesIcons="/preferences-icons-11.svg"
              title="Date of Birth"
            />
            <PreferencesTile1
              preferencesIcons="/preferences-icons-2.svg"
              title="Physical Profile"
              propMinWidth="unset"
              onPreferencesTileContainerClick={onPreferencesTileContainer2Click}
            />
            <PreferencesTile1
              preferencesIcons="/preferences-icons-31.svg"
              title="Wellness Goals"
              propMinWidth="unset"
              onPreferencesTileContainerClick={onPreferencesTileContainer3Click}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[255px] max-w-full mq450:gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                How old are you?
              </h2>
              <div className="relative text-base leading-[24px]">
                This will help us create your personalized experience.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-3 pb-0 box-border relative max-w-full text-xs text-text-secondary font-components-helper-text">
              <div className="self-stretch rounded-borderradius box-border flex flex-col items-start justify-start max-w-full text-base text-text-primary border-[1px] border-solid border-components-input-outlined-enabledborder">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 box-border relative min-w-[24px] min-h-[24px] max-w-full">
                  <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border z-[0]">
                    <div className="hidden flex-row items-start justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 relative tracking-[0.15px] leading-[24px] inline-block max-w-full">
                    March 24, 2000
                  </div>
                  <div className="w-[98px] relative tracking-[0.15px] leading-[24px] text-text-disabled hidden z-[2]">
                    Placeholder
                  </div>
                  <div className="h-px !m-[0] absolute top-[calc(50%_-_0.5px)] right-[0px] flex flex-row items-center justify-start py-0 px-0 box-border">
                    <div className="h-12 w-12 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-3 box-border">
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/calendartodayfilled.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="!m-[0] absolute top-[-5px] left-[16px] bg-neutral-1 flex flex-row items-center justify-start z-[1]">
                <div className="relative tracking-[0.15px] leading-[12px] inline-block min-w-[26px]">
                  Date
                </div>
              </div>
              <div className="w-[220px] hidden flex-col items-start justify-start pt-[3px] px-3.5 pb-0 box-border z-[2]">
                <div className="self-stretch h-5 relative tracking-[0.4px] leading-[166%] flex items-center">
                  Helper text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerPreferences2;
