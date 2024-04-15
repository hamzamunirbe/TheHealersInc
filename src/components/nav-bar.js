const NavBar = () => {
  return (
    <header className="self-stretch bg-neutral-1 shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-start justify-center py-6 px-5 gap-[704px] top-[0] z-[99] sticky text-left text-base text-m3-black font-web-primary-h2-primary-dm-sans border-[1px] border-solid border-gainsboro-100 lg:gap-[352px] mq450:gap-[88px] mq750:gap-[176px]">
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
  );
};

export default NavBar;
