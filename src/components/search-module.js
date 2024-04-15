const SearchModule = ({ icon }) => {
  return (
    <div className="self-stretch rounded-xl bg-neutral-1 overflow-hidden flex flex-col items-center justify-start py-6 px-5 box-border max-w-full">
      <form className="m-0 w-[1200px] overflow-hidden flex flex-row flex-wrap items-center justify-center gap-[24px] max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start gap-[16px] min-w-[686px] max-w-full mq750:min-w-full mq1050:flex-wrap">
          <div className="w-[642px] rounded-xl bg-input-field-background overflow-hidden shrink-0 flex flex-row items-start justify-start pt-6 px-6 pb-[23px] box-border gap-[10px] max-w-full">
            <img
              className="h-[25px] w-6 relative object-contain min-h-[25px]"
              alt=""
              src="/search-icon@2x.png"
            />
            <div className="flex-1 relative text-base leading-[24px] font-web-primary-h2-primary-dm-sans text-m3-black text-left inline-block max-w-[calc(100%_-_34px)]">
              Article name or keywords...
            </div>
          </div>
          <div className="flex-1 rounded-xl box-border overflow-hidden flex flex-row items-center justify-between p-6 min-w-[246px] max-w-full gap-[20px] border-[2px] border-solid border-whitesmoke-200">
            <div className="w-[228px] relative text-base leading-[24px] font-web-primary-h2-primary-dm-sans text-m3-black text-left inline-block shrink-0">
              Vancouver, Canada
            </div>
            <img className="h-1.5 w-[18px] relative" alt="" src="/caret.svg" />
          </div>
        </div>
        <button className="cursor-pointer py-3 px-[30px] bg-consumer-colors-complemantary rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-complemantary">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
              alt=""
              src="/wrapper@2x.png"
            />
          </div>
          <div className="w-[59px] relative text-lg leading-[26px] font-gilroy-bold text-neutral-1 text-center inline-block min-w-[59px]">
            Search
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchModule;
