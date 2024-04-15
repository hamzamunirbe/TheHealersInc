import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/nav-bar";
import PreferencesTile1 from "../components/preferences-tile1";
import PreferencesTile from "../components/preferences-tile";
import FrameComponent4 from "../components/frame-component4";

const ConsumerPreferences3 = () => {
  const navigate = useNavigate();

  const onPreferencesTileContainerClick = useCallback(() => {
    navigate("/consumer-preferences-02");
  }, [navigate]);

  const onPreferencesTileContainer1Click = useCallback(() => {
    navigate("/consumer-preferences-03");
  }, [navigate]);

  const onPreferencesTileContainer3Click = useCallback(() => {
    navigate("/consumer-preferences-04");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[75px] box-border gap-[80px] leading-[normal] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <NavBar />
      <section className="w-[1029px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-13xl text-gray-400 font-web-primary-h3-primary-dm-sans">
        <div className="w-[789px] flex flex-row items-start justify-start gap-[56px] max-w-full mq450:gap-[28px]">
          <div className="w-[180px] flex flex-col items-start justify-start gap-[24px] mq750:hidden">
            <PreferencesTile1
              preferencesIcons="/preferences-icons.svg"
              title="Gender"
              propMinWidth="66px"
              onPreferencesTileContainerClick={onPreferencesTileContainerClick}
            />
            <PreferencesTile1
              preferencesIcons="/preferences-icons-1.svg"
              title="Date of Birth"
              propMinWidth="111px"
              onPreferencesTileContainerClick={onPreferencesTileContainer1Click}
            />
            <PreferencesTile
              preferencesIcons="/preferences-icons-21.svg"
              title="Physical Profile"
              propWidth="134px"
              propMinWidth="unset"
            />
            <PreferencesTile1
              preferencesIcons="/preferences-icons-31.svg"
              title="Wellness Goals"
              propMinWidth="unset"
              onPreferencesTileContainerClick={onPreferencesTileContainer3Click}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_236px)] mq750:gap-[16px] mq750:max-w-full">
            <div className="flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                Let us know your weight and height
              </h1>
              <div className="relative text-base leading-[24px] inline-block max-w-full">
                This will help us create your personalized experience.
              </div>
            </div>
            <FrameComponent4
              subtitle1="Weight"
              section="kg"
              divider="pending_I6366:29635;109:1340"
              section1="lb"
            />
            <FrameComponent4
              subtitle1="Height"
              section="in"
              divider="pending_I6366:29640;109:1340"
              section1="cm"
              propMinWidth="51px"
              propWidth="11px"
              propMinWidth1="11px"
              propWidth1="unset"
              propMinWidth2="18px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerPreferences3;
