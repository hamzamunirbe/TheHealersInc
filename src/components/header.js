const Header = () => {
  return (
    <header className="self-stretch bg-ghostwhite-100 flex flex-row items-start justify-center py-6 px-5 gap-[732.2px] top-[0] z-[99] sticky mq450:gap-[92px] mq750:gap-[183px] mq1225:gap-[366px]">
      <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
          <img
            className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/the-healers-logo1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
            <img
              className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/the-healers1.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-64 flex flex-row items-start justify-start gap-[16px]">
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <button className="cursor-pointer [border:none] py-1.5 px-4 bg-[transparent] rounded overflow-hidden flex flex-row items-start justify-start gap-[10px]">
            <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                alt=""
              />
            </div>
            <b className="w-[47px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-vendor-colors-monochromatic text-center min-w-[47px]">
              Login
            </b>
          </button>
        </div>
        <button className="cursor-pointer py-[17px] px-6 bg-[transparent] flex-1 rounded-lg shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-start gap-[10px] border-[2px] border-solid border-vendor-colors-monochromatic">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
              alt=""
            />
          </div>
          <b className="w-[109px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-vendor-colors-monochromatic text-center min-w-[109px] whitespace-nowrap">
            Sign Up Now
          </b>
        </button>
      </div>
    </header>
  );
};

export default Header;
