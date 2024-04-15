import { useCallback } from "react";

const Footer = () => {
  const onAboutUsContactClick = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact1Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact2Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact3Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact4Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact5Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact6Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact7Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact8Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact9Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact10Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onAboutUsContact11Click = useCallback(() => {
    window.location.href = "https://dev.thehealersinc.com/";
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open("https://www.apple.com/app-store/");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open("https://www.apple.com/app-store/");
  }, []);

  const onLogoTwitterIconClick = useCallback(() => {
    window.open("https://twitter.com/");
  }, []);

  const onLogoFacebookIconClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onLogoInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onLogoLinkedinIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/");
  }, []);

  return (
    <footer className="self-stretch bg-neutral-1 flex flex-col items-center justify-start py-10 px-5 box-border gap-[32px] max-w-full text-left text-mid text-gray-300 font-web-primary-h3-primary-dm-sans mq450:pt-[26px] mq450:pb-[26px] mq450:box-border mq750:gap-[16px]">
      <div className="flex flex-row items-start justify-start gap-[61.6px] max-w-full mq450:gap-[15px] mq750:gap-[31px] mq1225:flex-wrap">
        <div className="w-64 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[32px] text-mini text-gray-900 mq450:gap-[16px]">
          <div className="w-60 flex flex-row items-end justify-start gap-[12.6px]">
            <img
              className="h-12 w-[48.2px] relative overflow-hidden shrink-0"
              alt=""
              src="/the-healers-logo6.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.5px]">
              <img
                className="self-stretch h-[22.9px] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/the-healers6.svg"
              />
            </div>
          </div>
          <div className="self-stretch relative tracking-[-0.1px] leading-[26px] mix-blend-normal">
            Your all-in-one platform for effortless wellness, connecting you
            with curated fitness, wellness services and personalized
            recommendations.
          </div>
        </div>
        <div className="w-[186.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
            Company
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContactClick}
          >
            About us
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact1Click}
          >
            Contact us
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact2Click}
          >
            Privacy Policy
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact3Click}
          >
            Terms and Conditions
          </div>
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
            Services
          </div>
          <div
            className="w-[186.8px] relative tracking-[-0.2px] inline-block cursor-pointer"
            onClick={onAboutUsContact4Click}
          >
            Mind
          </div>
          <div
            className="w-[186.8px] relative tracking-[-0.2px] inline-block cursor-pointer"
            onClick={onAboutUsContact5Click}
          >
            Body
          </div>
          <div
            className="w-[186.8px] relative tracking-[-0.2px] inline-block cursor-pointer"
            onClick={onAboutUsContact6Click}
          >
            Medicine
          </div>
          <div
            className="relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact7Click}
          >
            Psychologists and Counselors
          </div>
        </div>
        <div className="w-[186.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
            Links
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact8Click}
          >
            Sitemap
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact9Click}
          >
            Security
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact10Click}
          >
            Support Center
          </div>
          <div
            className="self-stretch relative tracking-[-0.2px] cursor-pointer"
            onClick={onAboutUsContact11Click}
          >
            Cookie Preferences
          </div>
        </div>
        <div className="w-[135px] flex flex-col items-start justify-start gap-[16px] text-4xs-4 text-neutral-1 font-open-sans">
          <div
            className="self-stretch flex flex-col items-start justify-center cursor-pointer"
            onClick={onButtonContainerClick}
          >
            <img
              className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/app-store--filled3.svg"
            />
          </div>
          <div
            className="self-stretch flex flex-row items-start justify-start cursor-pointer"
            onClick={onButtonContainer1Click}
          >
            <div className="flex-1 flex flex-row items-end justify-start pt-[4.6px] pb-1.5 pr-[9.2px] pl-2.5 relative gap-[19.8px]">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector1.svg"
              />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                alt=""
                src="/vector-11.svg"
              />
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.2px]">
                <img
                  className="w-[11.1px] h-[21.5px] relative z-[4]"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
              <img
                className="h-[13.4px] w-[16.2px] absolute !m-[0] bottom-[7.2px] left-[10.1px] z-[2]"
                alt=""
                src="/vector-2.svg"
              />
              <img
                className="h-[11px] w-[12.5px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[20.5px] z-[3]"
                alt=""
                src="/vector-4.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[1.4px]">
                <div className="relative inline-block [-webkit-text-stroke:0.2px_#fff] min-w-[40px] z-[2]">
                  GET IT ON
                </div>
                <img
                  className="self-stretch h-[17px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
              <img
                className="h-[12.9px] w-[16.3px] absolute !m-[0] top-[7.1px] left-[10px] z-[5]"
                alt=""
                src="/vector-6.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[1240px] relative max-h-full max-w-full"
        loading="lazy"
        alt=""
        src="/line-copy2.svg"
      />
      <div className="w-[1240px] overflow-hidden flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px] text-mini">
        <div className="flex-1 relative tracking-[-0.1px] leading-[26px] inline-block min-w-[203px] max-w-full">
          © 2024 Copyright, All Right Reserved.
        </div>
        <div className="w-48 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-6 w-6 relative min-h-[24px] cursor-pointer"
              loading="lazy"
              alt=""
              src="/logotwitter2.svg"
              onClick={onLogoTwitterIconClick}
            />
            <img
              className="h-6 w-6 relative min-h-[24px] cursor-pointer"
              loading="lazy"
              alt=""
              src="/logofacebook2.svg"
              onClick={onLogoFacebookIconClick}
            />
            <img
              className="h-6 w-6 relative object-cover min-h-[24px] cursor-pointer"
              loading="lazy"
              alt=""
              src="/logoinstagram1@2x.png"
              onClick={onLogoInstagramIconClick}
            />
            <img
              className="h-6 w-6 relative object-cover min-h-[24px] cursor-pointer"
              loading="lazy"
              alt=""
              src="/logolinkedin3@2x.png"
              onClick={onLogoLinkedinIconClick}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
