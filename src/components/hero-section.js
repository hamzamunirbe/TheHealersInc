const HeroSection = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[8px] max-w-full text-center text-xl text-blue-gray-600 font-components-helper-text">
      <video
        className="h-[700px] flex-1 bg-gray-500 flex flex-col items-start justify-start pt-0 px-0 pb-[205px] box-border max-w-full z-[1]"
        autoPlay
        muted
        loop
        controls
      >
        <source src="56c10b94-4a2e-42e2-9798-6df2ae284816_1713190244346764656" />
      </video>
      <b className="h-5 w-[708px] relative tracking-[3px] leading-[100%] uppercase hidden max-w-full mq450:text-base mq450:leading-[16px]">
        Caption
      </b>
      <div className="h-[62px] w-[708px] relative text-37xl leading-[110%] font-extrabold text-blue-gray-900 hidden max-w-full mq450:text-15xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[49px]">
        Headline Two
      </div>
    </div>
  );
};

export default HeroSection;
