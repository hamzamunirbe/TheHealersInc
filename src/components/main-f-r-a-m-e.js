import Button from "./button";

const MainFRAME = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xl text-neutral-10 font-web-primary-h2-primary-dm-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <b className="relative leading-[30px] mq450:text-base mq450:leading-[24px]">
          Forgot Password?
        </b>
        <div className="self-stretch relative text-base leading-[24px]">
          Don’ Worry ! It happens. Please enter your registered email below to
          reset your password.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full text-xs text-text-secondary">
        <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
          <div className="relative leading-[18px] inline-block min-w-[30px]">
            Email
          </div>
          <input
            className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h2-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[242px]"
            placeholder="user@email.com"
            type="text"
          />
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
        </div>
        <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-components-helper-text">
          <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
            Helper text
          </div>
        </div>
      </div>
      <Button
        wrapper="pending_I6336:23288;1304:10666;96528:163581"
        button="Submit"
        propWidth="64px"
        propMinWidth="64px"
      />
      <div className="rounded bg-neutral-1 shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-start py-[9px] px-4 gap-[10px] text-center text-sm text-neutral-9 border-[1px] border-solid border-neutral-5">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 object-cover"
              alt=""
              src="/wrapper-1@2x.png"
            />
          </div>
        </div>
        <b className="w-[100px] relative leading-[24px] inline-block min-w-[100px]">
          Back to Sign In
        </b>
      </div>
    </div>
  );
};

export default MainFRAME;
