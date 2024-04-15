const ParallelProcessor = () => {
  return (
    <div className="w-[248px] flex flex-col items-start justify-start gap-[32px] text-left text-mini text-gray-900 font-web-primary-h3-primary-dm-sans">
      <div className="w-[236px] flex flex-row items-end justify-start gap-[12.4px]">
        <img
          className="h-[47px] w-[47.4px] relative overflow-hidden shrink-0"
          alt=""
          src="/the-healers-logo4.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
          <img
            className="self-stretch h-[22.5px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/the-healers4.svg"
          />
        </div>
      </div>
      <div className="self-stretch h-[104px] relative tracking-[-0.1px] leading-[26px] inline-block mix-blend-normal">
        Your all-in-one platform for effortless wellness, connecting you with
        curated fitness, wellness services and personalized recommendations.
      </div>
    </div>
  );
};

export default ParallelProcessor;
