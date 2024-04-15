import { useCallback } from "react";
import NavBar3 from "../components/nav-bar3";
import ServiceCard1 from "../components/service-card1";
import ButtonBusinessCard2 from "../components/button-business-card2";
import SplitConnectors from "../components/split-connectors";

const PractitionerDetails = () => {
  const onTabContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='infoContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTabContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-neutral-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[80px] leading-[normal] tracking-[normal] mq450:gap-[20px] mq750:gap-[40px]">
      <NavBar3 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <section className="w-[1200px] flex flex-col items-start justify-start gap-[120px] max-w-full text-left text-base text-m3-black font-web-primary-h2-primary-dm-sans lg:gap-[60px] mq750:gap-[30px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq750:gap-[28px]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq1050:flex-wrap mq750:gap-[20px]">
              <div className="flex-1 rounded-3xl overflow-hidden flex flex-row items-start justify-start min-w-[469px] max-w-full mq750:min-w-full">
                <div className="h-[520.1px] flex-1 relative max-w-full">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/01@2x.png"
                  />
                  <img
                    className="absolute top-[calc(50%_-_20.05px)] right-[32px] rounded-lg w-10 h-10 object-contain z-[1]"
                    loading="lazy"
                    alt=""
                    src="/button@2x.png"
                  />
                </div>
              </div>
              <div className="w-[398px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[16px] min-w-[398px] max-w-full mq1050:flex-1 mq750:min-w-full">
                <img
                  className="self-stretch h-[284.1px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/basemap-image@2x.png"
                />
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/directions.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[223px] max-w-full">
                    888 Burrard St, Vancouver, BC, V6Z 1X9
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
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
                <div className="self-stretch hidden flex-row items-start justify-start p-2 box-border gap-[15px] max-w-full mq450:flex-wrap">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/star-border.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 relative leading-[24px] inline-block min-w-[223px] max-w-full">
                    4.9 - 500+ ratings
                  </div>
                </div>
                <button className="cursor-pointer py-[13px] px-5 bg-consumer-colors-primary self-stretch rounded-13xl shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-primary">
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/wrapper@2x.png"
                    />
                  </div>
                  <div className="w-[83px] relative text-lg leading-[26px] font-gilroy-bold text-neutral-1 text-center inline-block min-w-[83px]">
                    Chat Now
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start text-sm text-consumer-colors-complemantary font-components-helper-text">
              <div
                className="h-[42px] w-[97px] flex flex-col items-center justify-center relative cursor-pointer"
                onClick={onTabContainerClick}
              >
                <div className="!m-[0] absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-[9px] px-4 box-border gap-[8px] w-full h-full">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/info1.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block min-w-[33px]">
                    Info
                  </div>
                </div>
                <div className="w-[calc(100%_+_2px)] h-0.5 absolute !m-[0] right-[-2px] bottom-[-2px] left-[0px] box-border border-t-[2px] border-solid border-consumer-colors-complemantary" />
              </div>
              <div
                className="flex flex-col items-center justify-center cursor-pointer text-neutral-10"
                onClick={onTabContainer1Click}
              >
                <div className="flex flex-row items-center justify-center py-[9px] px-4 gap-[8px]">
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/design-services.svg"
                    />
                  </div>
                  <div className="relative tracking-[0.4px] leading-[24px] uppercase font-medium inline-block min-w-[67px]">
                    Services
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[722px] flex flex-col items-start justify-start gap-[40px] max-w-full text-lg mq750:gap-[20px]">
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full"
                data-scroll-to="infoContainer"
              >
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[24px] max-w-full">
                  <img
                    className="h-20 w-20 relative rounded-[50%] object-cover min-h-[80px]"
                    loading="lazy"
                    alt=""
                    src="/ellipse-200@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[402px] max-w-full mq750:min-w-full">
                    <b className="relative leading-[28px]">The Star Studio</b>
                    <div className="self-stretch relative text-sm leading-[22px]">
                      GYM CLASSES | INTERVAL TRAINING | OTHER | PERSONAL
                      TRAINING | PHYSICAL THERAPY | WEIGHT TRAINING | YOGA
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <b className="relative leading-[28px]">
                    About the practitioner:
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
                    <div className="flex-1 relative leading-[24px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] max-w-full">
                      <span>{`At [Vendor Name], we're committed to providing exceptional wellness experiences that cater to your unique needs. Our team of dedicated practitioners brings a wealth of knowledge and expertise to every session, ensuring that you receive personalized care and support on your journey to optimal health and vitality. Whether you're seeking relaxation, `}</span>
                      <span className="[text-decoration:underline] text-consumer-colors-complemantary">
                        Read more
                      </span>
                      <span className="whitespace-pre-wrap">
                        {" "}
                        Real guidance, we offer a diverse range of modalities
                        and services to address your wellness goals. From
                        rejuvenating massage therapies to transformative energy
                        work, we invite you to explore our offerings and
                        discover the healing power within you. Join us as we
                        cultivate a nurturing space for growth, connection, and
                        transformation.
                      </span>
                    </div>
                  </div>
                </div>
                <b className="relative leading-[28px]">General Availability:</b>
                <div className="flex flex-row flex-wrap items-start justify-start py-0 pr-[392px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq750:pr-[196px] mq750:box-border">
                  <button className="cursor-pointer py-1 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
                    <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                      <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-neutral-1 hidden z-[0]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 w-2 relative rounded-81xl" />
                        </div>
                      </div>
                      <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-neutral-1 text-center inline-block z-[1]">
                        OP
                      </div>
                      <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                    </div>
                    <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                      <b className="relative text-xs leading-[18px] uppercase font-web-primary-h2-primary-dm-sans text-neutral-10 text-left whitespace-nowrap">
                        09:00 AM to 05:00 PM
                      </b>
                    </div>
                    <img
                      className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                      alt=""
                      src="/cancelfilled.svg"
                    />
                  </button>
                  <button className="cursor-pointer py-1 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-neutral-7">
                    <div className="rounded-81xl bg-components-avatar-fill hidden flex-col items-center justify-center relative">
                      <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-neutral-1 hidden z-[0]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                          <div className="h-2 w-2 relative rounded-81xl" />
                        </div>
                      </div>
                      <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-components-helper-text text-neutral-1 text-center inline-block z-[1]">
                        OP
                      </div>
                      <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                    </div>
                    <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                      <b className="relative text-xs leading-[18px] uppercase font-web-primary-h2-primary-dm-sans text-neutral-10 text-left whitespace-nowrap">
                        09:00 AM to 05:00 PM
                      </b>
                    </div>
                    <img
                      className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                      alt=""
                      src="/cancelfilled.svg"
                    />
                  </button>
                </div>
              </div>
              <div
                className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base"
                data-scroll-to="servicesContainer"
              >
                <div className="relative leading-[24px] font-semibold inline-block min-w-[70px]">
                  Services:
                </div>
                <ServiceCard1
                  featuredImage="/featured-image1@2x.png"
                  yoga="Yoga"
                  prop="$30"
                />
                <ServiceCard1
                  featuredImage="/featured-image-11@2x.png"
                  yoga="Meditation"
                  prop="$60"
                  propMinWidth="97px"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <b className="relative leading-[28px]">
                  Similar Practitioners:
                </b>
                <div className="self-stretch grid flex-row items-start justify-start py-0 px-0 gap-[40px] grid-cols-[repeat(3,_minmax(223px,_1fr))] mq450:grid-cols-[minmax(223px,_1fr)] mq750:gap-[20px] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(223px,_387px))]">
                  <ButtonBusinessCard2
                    monogram="/monogram1@2x.png"
                    header="The Star Studio"
                    subhead="Yoga, Meditation"
                  />
                  <ButtonBusinessCard2
                    monogram="/monogram-11@2x.png"
                    header="The Star Studio"
                    subhead="Life counseling, Meditation, Hypnotherapy "
                  />
                  <ButtonBusinessCard2
                    monogram="/monogram-21@2x.png"
                    header="Shapes"
                    subhead="Massage, Yoga, Acupuncture, Trauma release exercises"
                  />
                </div>
              </div>
            </div>
          </div>
          <SplitConnectors />
        </section>
      </main>
    </div>
  );
};

export default PractitionerDetails;
