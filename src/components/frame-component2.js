import { useState } from "react";
import Button from "./button";

const FrameComponent2 = () => {
  const [checkBoxFilledIconChecked, setCheckBoxFilledIconChecked] =
    useState(true);
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <h1 className="m-0 relative text-13xl leading-[48px] font-bold font-web-primary-h2-primary-dm-sans text-m3-black text-left mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Continue your healing journey
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full">
            <div className="relative text-xs leading-[18px] font-web-primary-h2-primary-dm-sans text-text-secondary text-left inline-block min-w-[30px]">
              Email
            </div>
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start font-web-primary-h2-primary-dm-sans text-base text-m3-ref-neutral-neutral20 min-w-[250px]"
              placeholder="user@email.com"
              type="text"
            />
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
          </div>
          <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
              Helper text
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px] max-w-full mq750:h-auto">
          <div className="relative text-xs leading-[18px] font-web-primary-h2-primary-dm-sans text-text-secondary text-left inline-block min-w-[53px]">
            Password
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq750:flex-wrap">
            <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
              <div className="hidden flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
            <div className="h-6 w-0 relative hidden" />
            <div className="self-stretch w-[220px] relative text-base tracking-[0.15px] leading-[24px] font-components-helper-text text-text-primary text-left hidden" />
            <input
              className="w-[calc(100%_-_24px)] [border:none] [outline:none] font-web-primary-h2-primary-dm-sans text-base bg-[transparent] h-6 flex-1 relative leading-[24px] text-m3-ref-neutral-neutral20 text-left inline-block min-w-[290px] max-w-full p-0"
              placeholder="************"
              type="text"
            />
            <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
              <div className="w-6 h-px flex flex-row items-start justify-start relative">
                <img
                  className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] max-w-full overflow-hidden"
                  alt=""
                  src="/removeredeyefilled.svg"
                />
              </div>
            </div>
            <div className="h-0 w-6 relative hidden" />
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
        </div>
        <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch relative text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-text-secondary text-left">
            Helper text
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <div className="overflow-hidden flex flex-row items-start justify-start">
          <div className="h-[46px] w-[46px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
            <input
              className="accent-cornflowerblue m-0 h-7 w-7 relative overflow-hidden shrink-0"
              checked={checkBoxFilledIconChecked}
              type="checkbox"
              onChange={(event) =>
                setCheckBoxFilledIconChecked(event.target.checked)
              }
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h2-primary-dm-sans text-text-primary text-left inline-block min-w-[126px]">
              Keep me signed in.
            </div>
          </div>
        </div>
        <Button
          wrapper="pending_I6335:23192;1304:10666;96528:163581"
          button="Sign In"
        />
        <div className="self-stretch rounded overflow-hidden flex flex-row items-start justify-center py-1 px-5 gap-[10px]">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
              alt=""
            />
          </div>
          <div className="w-[119px] relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-primary-h2-primary-dm-sans text-consumer-colors-complemantary text-center inline-block min-w-[119px]">
            Forgot Password?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[11px] mq750:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[141px]">
            <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-neutral-3" />
          </div>
          <div className="relative text-xs leading-[18px] font-web-primary-h2-primary-dm-sans text-neutral-10 text-left inline-block min-w-[14px] mq750:w-full mq750:h-3.5">
            Or
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[141px]">
            <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-neutral-3" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[16px] mq750:flex-wrap">
          <button className="cursor-pointer py-2 px-7 bg-[transparent] flex-[0.9037] rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center min-w-[148px] border-[1px] border-solid border-neutral-5 mq450:flex-1">
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/icons8google-1.svg"
              />
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h2-primary-dm-sans text-neutral-10 text-left">
                Sign up with Google
              </div>
            </div>
          </button>
          <button className="cursor-pointer py-2 px-[19px] bg-[transparent] flex-1 rounded-31xl box-border overflow-hidden flex flex-col items-center justify-center min-w-[148px] border-[1px] border-solid border-neutral-5">
            <div className="flex flex-row items-center justify-center gap-[10px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src="/facebook.svg"
              />
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h2-primary-dm-sans text-neutral-10 text-left">
                Sign up with Facebook
              </div>
            </div>
          </button>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="relative text-sm leading-[22px] font-web-primary-h2-primary-dm-sans text-gray-300 text-left">
            Don’t have an account?
          </div>
          <div className="relative text-sm [text-decoration:underline] leading-[22px] font-semibold font-web-primary-h2-primary-dm-sans text-consumer-colors-complemantary text-left inline-block min-w-[51px] whitespace-nowrap">
            Sign Up
          </div>
        </div>
        <button className="cursor-pointer py-[9px] px-4 bg-neutral-1 rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-neutral-5">
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-4 h-4 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper-1@2x.png"
              />
            </div>
          </div>
          <b className="w-[94px] relative text-sm leading-[24px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-9 text-center min-w-[94px]">
            Back to home
          </b>
        </button>
      </div>
    </form>
  );
};

export default FrameComponent2;
