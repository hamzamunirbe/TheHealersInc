import Button1 from "./button1";

const FrameComponent3 = () => {
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
      <div className="relative text-base leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block max-w-full">
        Enter your credentials to create an account
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[60px]">
              First Name
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[250px]"
              placeholder="John"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-m3-ref-neutral-neutral20" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
              Helper text
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[59px]">
              Last Name
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[250px]"
              placeholder="Adams"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-m3-ref-neutral-neutral20" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
              Helper text
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[30px]">
              Email
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h3-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[250px]"
              placeholder="user@email.com"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
              Helper text
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full mq450:h-auto">
            <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-text-secondary text-left inline-block min-w-[53px]">
              Password
            </div>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq450:flex-wrap">
              <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                <div className="hidden flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/starsharp.svg"
                  />
                </div>
              </div>
              <div className="h-6 w-0 relative hidden" />
              <div className="self-stretch w-[220px] relative text-base tracking-[0.15px] leading-[24px] font-h5-medium text-text-primary text-left hidden" />
              <input
                className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-web-primary-h3-primary-dm-sans text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-m3-ref-neutral-neutral20 text-left inline-block min-w-[265px] max-w-full p-0"
                placeholder="************"
                type="text"
              />
              <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                <div className="w-6 h-px flex flex-row items-start justify-start relative">
                  <img
                    className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] max-w-full overflow-hidden"
                    alt=""
                    src="/removeredeyefilled1.svg"
                  />
                </div>
              </div>
              <div className="h-0 w-6 relative hidden" />
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-text-secondary text-left">
              Helper text
            </div>
          </div>
        </div>
      </div>
      <Button1 />
      <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[129px]">
          <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-neutral-3" />
        </div>
        <div className="relative text-xs leading-[18px] font-web-primary-h3-primary-dm-sans text-neutral-10 text-left inline-block min-w-[14px] mq450:w-full mq450:h-3.5">
          Or
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[129px]">
          <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-neutral-3" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[16px] mq450:flex-wrap">
        <button className="cursor-pointer py-2 px-[19px] bg-[transparent] flex-[0.9032] rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center min-w-[135px] border-[1px] border-solid border-neutral-5 mq450:flex-1">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src="/icons8google-11.svg"
            />
            <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-neutral-10 text-left">
              Sign up with Google
            </div>
          </div>
        </button>
        <div className="flex-1 rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center py-2 px-2.5 min-w-[135px] border-[1px] border-solid border-neutral-5">
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/facebook1.svg"
            />
            <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-neutral-10 text-left">
              Sign up with Facebook
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-gray-300 text-left whitespace-nowrap">
            Don’t have an account?
          </div>
          <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-material-theme-source-primary text-left inline-block min-w-[45px] whitespace-nowrap">
            Sign In
          </div>
        </div>
        <button className="cursor-pointer py-[9px] px-4 bg-neutral-1 rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-neutral-5">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper-111@2x.png"
              />
            </div>
          </div>
          <b className="w-[94px] relative text-sm leading-[24px] inline-block font-web-primary-h3-primary-dm-sans text-neutral-9 text-center min-w-[94px] whitespace-nowrap">
            Back to home
          </b>
        </button>
      </div>
    </form>
  );
};

export default FrameComponent3;
