const NavBar1 = () => {
  return (
    <header className="absolute top-[0px] left-[0px] bg-neutral-1 shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-[1440px] flex flex-row items-center justify-between py-6 px-[120px] text-left text-base text-m3-black font-web-primary-h2-primary-dm-sans border-[1px] border-solid border-gainsboro-100">
      <div className="w-[236px] relative h-[47px]">
        <img
          className="absolute h-full w-[20.08%] top-[0%] right-[79.92%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/the-healers-logo4.svg"
        />
        <img
          className="absolute h-[47.87%] w-[74.66%] top-[26.17%] right-[0%] bottom-[25.96%] left-[25.34%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/the-healers4.svg"
        />
      </div>
      <div className="rounded-13xl bg-neutral-1 shadow-[0px_2px_8px_rgba(0,_0,_0,_0.15)] overflow-hidden flex flex-row items-center justify-between py-2.5 px-4">
        <div className="flex flex-row items-center justify-start">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/notifications-none1.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <div className="w-[41px] h-[41px] flex flex-row items-center justify-center">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/avatar@2x.png"
            />
          </div>
          <div className="relative leading-[24px] font-semibold">
            John Adams
          </div>
          <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/keyboard-arrow-down1.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar1;
