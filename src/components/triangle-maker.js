import ParallelProcessor from "./parallel-processor";
import FrameComponent7 from "./frame-component7";

const TriangleMaker = () => {
  return (
    <footer className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-mid text-gray-300 font-gilroy-regular mq750:gap-[16px]">
      <div className="flex flex-row items-start justify-start gap-[54.9px] max-w-full lg:flex-wrap mq750:gap-[27px]">
        <ParallelProcessor />
        <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px]">
          <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
            Company
          </div>
          <div className="self-stretch relative tracking-[-0.2px]">
            About us
          </div>
          <div className="self-stretch relative tracking-[-0.2px]">
            Contact us
          </div>
          <div className="self-stretch relative tracking-[-0.2px]">
            Privacy Policy
          </div>
          <div className="self-stretch relative tracking-[-0.2px]">
            Terms and Conditions
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[54.8px] max-w-full mq750:flex-wrap mq750:gap-[27px]">
          <div className="flex flex-col items-start justify-start gap-[16px] min-w-[224px] mq750:flex-1">
            <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
              Services
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Mind
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Body
            </div>
            <div className="w-[186.8px] relative tracking-[-0.2px] inline-block">
              Medicine
            </div>
            <div className="relative tracking-[-0.2px]">
              Psychologists and Counselors
            </div>
          </div>
          <div className="w-[186.8px] flex flex-col items-start justify-start gap-[16px] min-w-[186.79999999999927px] mq750:flex-1">
            <div className="w-[88.2px] relative text-mini tracking-[-0.1px] leading-[26px] text-gray-900 inline-block mix-blend-normal">
              Links
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Sitemap
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Security
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Support Center
            </div>
            <div className="self-stretch relative tracking-[-0.2px]">
              Cookie Preferences
            </div>
          </div>
        </div>
        <FrameComponent7 />
      </div>
      <div className="self-stretch h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0.5px] px-0 pb-[55.5px] box-border gap-[29.5px] text-mini mq750:h-auto">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full shrink-0 [debug_commit:f6aba90]"
          loading="lazy"
          alt=""
          src="/line-copy1.svg"
        />
        <img
          className="w-[15.1px] h-[13px] relative hidden"
          alt=""
          src="/heart2.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] gap-[20px] mq750:flex-wrap">
          <div className="w-[235.3px] relative tracking-[-0.1px] leading-[52px] inline-block shrink-0 [debug_commit:f6aba90]">
            © 2024 Copyright, All Right Reserved.
          </div>
          <div className="w-48 flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between shrink-0 [debug_commit:f6aba90] gap-[20px]">
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/logotwitter1.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                loading="lazy"
                alt=""
                src="/logofacebook1.svg"
              />
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                loading="lazy"
                alt=""
                src="/logoinstagram@2x.png"
              />
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                alt=""
                src="/logolinkedin@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TriangleMaker;
