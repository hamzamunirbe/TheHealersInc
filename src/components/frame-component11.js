import ServiceCard2 from "./service-card2";

const FrameComponent111 = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[426px] max-w-full text-left text-lg text-m3-black font-web-primary-h3-primary-dm-sans mq750:gap-[20px] mq750:min-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl">
        <div className="self-stretch flex flex-row items-start justify-start gap-[7px] max-w-full mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start py-0 pr-[17px] pl-0">
            <img
              className="w-20 h-20 relative rounded-[50%] object-cover"
              loading="lazy"
              alt=""
              src="/ellipse-2001@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <h1 className="m-0 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px]">
                The Star Studio
              </h1>
              <div className="h-[26px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <div className="w-px h-[17px] relative box-border border-r-[1px] border-solid border-m3-black" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[231px] max-w-full text-base">
            <div className="self-stretch relative leading-[24px]">
              888 Burrard St, Vancouver, BC, V6Z 1X9
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xl overflow-hidden flex flex-row items-start justify-start max-w-full">
          <div className="h-[447px] flex-1 relative max-w-full">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/string-processor@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_19.5px)] right-[32px] rounded-lg w-10 h-10 object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/button@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
          <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit">
            About the Service:
          </h3>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
            <div className="flex-1 relative leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-w-full">
              <span>{`At [Vendor Name], we're committed to providing exceptional wellness experiences that cater to your unique needs. Our team of dedicated practitioners brings a wealth of knowledge and expertise to every session, ensuring that you receive personalized care and support on your journey to optimal health and vitality. Whether you're seeking relaxation, `}</span>
              <span className="[text-decoration:underline] text-consumer-colors-complemantary">
                Read more
              </span>
              <span className="whitespace-pre-wrap">
                {" "}
                Real guidance, we offer a diverse range of modalities and
                services to address your wellness goals. From rejuvenating
                massage therapies to transformative energy work, we invite you
                to explore our offerings and discover the healing power within
                you. Join us as we cultivate a nurturing space for growth,
                connection, and transformation.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] max-w-full">
        <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit inline-block min-w-[82px]">
          Location:
        </h3>
        <img
          className="self-stretch h-[284px] relative max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src="/basemap-image1@2x.png"
        />
        <img
          className="w-[52px] h-[52px] absolute !m-[0] top-[calc(50%_-_26.1px)] left-[calc(50%_-_26px)] overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/location-marker.svg"
        />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-base">
          <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[16px] max-w-full mq750:flex-wrap">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/directions.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px] inline-block min-w-[228px] max-w-full">
              888 Burrard St, Vancouver, BC, V6Z 1X9
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[16px] max-w-full mq750:flex-wrap">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/phone.svg"
              />
            </div>
            <div className="flex-1 relative leading-[24px] inline-block min-w-[81px] whitespace-nowrap max-w-full">
              +1 123 456789
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h3 className="m-0 relative text-inherit leading-[28px] font-bold font-inherit">
          Similar Services:
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl text-neutral-11">
          <ServiceCard2 />
          <ServiceCard2 />
          <ServiceCard2 />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent111;
