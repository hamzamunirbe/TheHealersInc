const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-14 box-border max-w-full text-left text-smi text-vendor-colors-triadic font-web-primary-h2-primary-dm-sans mq750:pb-9 mq750:box-border">
      <div className="flex-1 bg-ghostwhite-100 flex flex-col items-center justify-start py-14 px-5 box-border max-w-full mq750:pt-9 mq750:pb-9 mq750:box-border">
        <div className="w-[1240px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
          <div className="w-[664px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-[72.5px] px-0 box-border gap-[24px] min-w-[664px] max-w-full mq750:pt-[47px] mq750:pb-[47px] mq750:box-border mq750:min-w-full mq1225:flex-1">
            <div className="self-stretch flex flex-col items-start justify-center gap-[8px]">
              <b className="relative tracking-[1.63px] uppercase">
                Let’s shift your business
              </b>
              <h1 className="m-0 self-stretch relative text-41xl tracking-[-2px] leading-[65px] font-bold font-inherit text-gray-300 mq450:text-17xl mq450:leading-[39px] mq750:text-29xl mq750:leading-[52px]">
                Empower your business with The Healers.
              </h1>
            </div>
            <div className="w-[566px] relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-900 inline-block mix-blend-normal max-w-full">
              Unlock Your Healing Potential, Connect with Clients, and Flourish
              in Your Practice with The Healers App – Your Trusted Partner in
              Holistic Health and Wellness.
            </div>
            <button className="cursor-pointer py-[17px] px-[30px] bg-vendor-colors-monochromatic rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-vendor-colors-monochromatic">
              <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                />
              </div>
              <b className="w-[171px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center">
                Join as Practitioner
              </b>
            </button>
          </div>
          <img
            className="w-[463px] relative max-h-full object-cover max-w-full mq1225:flex-1"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
