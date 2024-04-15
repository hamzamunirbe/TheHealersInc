const FrameComponent = ({ h5, paragraph }) => {
  return (
    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] text-left text-2xl text-gray-300 font-web-primary-h3-primary-dm-sans mq750:flex-wrap mq450:gap-[16px]">
      <img
        className="h-20 w-20 relative"
        loading="lazy"
        alt=""
        src="/icon1.svg"
      />
      <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
        <h5 className="m-0 relative text-inherit tracking-[-0.5px] leading-[32px] font-bold font-inherit mq450:text-mid mq450:leading-[26px]">
          {h5}
        </h5>
        <p className="m-0 self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default FrameComponent;
