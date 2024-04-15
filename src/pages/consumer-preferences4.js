import NavBar1 from "../components/nav-bar1";

const ConsumerPreferences4 = () => {
  return (
    <div className="w-full relative bg-neutral-1 h-[1024px] overflow-hidden text-center text-29xl text-gray-400 font-web-primary-h2-primary-dm-sans">
      <NavBar1 />
      <div className="absolute top-[calc(50%_+_117px)] left-[calc(50%_-_423px)] flex flex-col items-center justify-start gap-[24px]">
        <h2 className="m-0 relative text-inherit leading-[64px] font-bold font-inherit">
          Let’s design your unique Experience
        </h2>
        <p className="m-0 w-[588px] relative text-base leading-[24px] flex items-center justify-center">
          The more we get to know you, the more we can serve up classes you
          love. Help us personalize your practice by answering three quick
          questions.
        </p>
        <div className="flex flex-col items-center justify-start gap-[16px] text-lg text-neutral-1">
          <div className="self-stretch rounded-25xl bg-consumer-colors-primary shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] box-border h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[30px] gap-[10px] border-[1px] border-solid border-consumer-colors-primary">
            <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper@2x.png"
              />
            </div>
            <b className="relative leading-[26px]">Sounds Good</b>
          </div>
          <div className="self-stretch rounded h-[38px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-[30px] box-border gap-[10px] text-character-title-85">
            <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 relative h-3.5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/wrapper@2x.png"
              />
            </div>
            <b className="relative leading-[26px]">No Thanks</b>
          </div>
        </div>
      </div>
      <div className="absolute top-[165px] left-[120px] w-[1200px] h-[424px]">
        <img
          className="absolute top-[0px] left-[calc(50%_-_600px)] rounded-2xl w-[1200px] h-[424px] object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
    </div>
  );
};

export default ConsumerPreferences4;
