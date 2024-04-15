import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import WhyChooseUs1 from "../components/why-choose-us";
import SectionText from "../components/section-text";
import Footer1 from "../components/footer";

const PractitionerLandingPage = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-smi text-vendor-colors-triadic font-web-primary-h3-primary-dm-sans">
      <Header />
      <FrameComponent />
      <div className="w-[845px] flex flex-row items-start justify-center pt-0 px-5 pb-[21px] box-border max-w-full">
        <div className="w-[515px] flex flex-col items-start justify-start gap-[24px] max-w-full">
          <b className="relative tracking-[1.63px] uppercase">
            KNow more about us
          </b>
          <h1 className="m-0 self-stretch relative text-17xl tracking-[-1.2px] leading-[48px] font-bold font-inherit text-gray-300 mq450:text-3xl mq450:leading-[29px] mq750:text-10xl mq750:leading-[38px]">
            We're Here to Help You Grow Your Healing Practice: Explore The
            Healers Marketplace
          </h1>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-14 box-border max-w-full text-left text-lg text-gray-900 font-web-primary-h3-primary-dm-sans mq750:pb-9 mq750:box-border">
        <div className="w-[1110px] flex flex-row items-end justify-center gap-[95px] max-w-full mq1050:flex-wrap mq750:gap-[24px] mq1225:gap-[47px]">
          <img
            className="w-[445px] relative rounded-3xs max-h-full object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/img@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[26px] box-border min-w-[370px] max-w-full mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq750:gap-[50px]">
              <img
                className="self-stretch h-[377px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/images@2x.png"
              />
              <div className="w-[490px] relative tracking-[-0.2px] leading-[29px] inline-block mix-blend-normal max-w-full">
                Welcome to The Healers Marketplace, where healing meets
                innovation. Our platform is a vibrant ecosystem connecting
                healers, practitioners, and seekers from around the globe.
                Whether you're a seasoned healer or just beginning your journey,
                our marketplace offers a diverse range of services and
                modalities to support your holistic well-being.
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs1 />
      <section className="self-stretch bg-vendor-colors-primary-1 flex flex-row items-center justify-start py-14 px-[100px] box-border gap-[80px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-primary-h3-primary-dm-sans mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[40px] mq750:py-9 mq750:px-[50px] mq750:box-border mq1225:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-center gap-[8px] min-w-[461px] max-w-full mq750:min-w-full">
          <b className="w-[589px] relative tracking-[1.63px] uppercase inline-block max-w-full">
            The Healers app
          </b>
          <SectionText />
        </div>
        <div className="h-[575px] w-[451.1px] relative max-w-full flex items-center justify-center">
          <img
            className="h-full w-full object-contain absolute left-[0px] top-[24px] [transform:scale(1.168)] mq1225:flex-1"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default PractitionerLandingPage;
