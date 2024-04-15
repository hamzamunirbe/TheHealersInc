import ButtonBusinessCard from "../components/button-business-card";
import Footer1 from "../components/footer1";

const ConsumerLandingPage = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[222px] box-border relative gap-[148px] max-w-full text-center text-41xl text-neutral-1 font-web-primary-h2-primary-dm-sans mq750:gap-[74px] mq1050:pb-36 mq1050:box-border mq450:gap-[37px] mq450:pb-[94px] mq450:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/images@2x.png"
          />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-700 z-[1]" />
        </div>
        <header className="self-stretch flex flex-row items-start justify-center py-6 px-5 gap-[732.2px] z-[2] mq750:gap-[183px] mq450:gap-[92px] mq1225:gap-[366px]">
          <div className="w-[251.8px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[13.2px]">
              <img
                className="h-[50px] w-[50.6px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/the-healers-logo2.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[13px]">
                <img
                  className="self-stretch h-[23.9px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/the-healers2.svg"
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
                <b className="w-[47px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center min-w-[47px]">
                  Login
                </b>
              </button>
            </div>
            <button className="cursor-pointer py-[17px] px-6 bg-[transparent] flex-1 rounded-lg shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-start gap-[10px] border-[2px] border-solid border-neutral-1">
              <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                />
              </div>
              <b className="w-[109px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center min-w-[109px] whitespace-nowrap">
                Sign Up Now
              </b>
            </button>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full">
          <div className="w-[612px] flex flex-col items-center justify-start gap-[40px] max-w-full z-[2] mq750:gap-[20px]">
            <div className="w-[599px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[65px] font-bold font-inherit mq750:text-29xl mq750:leading-[52px] mq450:text-17xl mq450:leading-[39px]">
                Find an ideal healing experience.
              </h1>
              <div className="w-[465.9px] relative text-lgi tracking-[-0.2px] leading-[32px] text-gray-800 inline-block mix-blend-normal max-w-full">
                Explore a world of wellness options and embark on your journey
                to healing.
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px] text-left text-mini text-gray-900">
              <div className="self-stretch rounded-3xs bg-consumer-colors-primary overflow-x-auto flex flex-row items-center justify-start py-6 px-8 gap-[16px]">
                <div className="w-[196px] rounded-md bg-neutral-1 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-4 px-[15px] whitespace-nowrap border-[1px] border-solid border-whitesmoke-300">
                  <div className="self-stretch relative tracking-[-0.18px] leading-[16px] mix-blend-normal">
                    Search for anything
                  </div>
                </div>
                <button className="cursor-pointer py-4 px-[15px] bg-neutral-1 rounded-md flex flex-row items-center justify-start border-[1px] border-solid border-whitesmoke-300">
                  <div className="flex flex-row items-center justify-start gap-[8px]">
                    <div className="relative text-mini leading-[16px] font-web-primary-h2-primary-dm-sans text-gray-900 text-left">
                      Vancouver, Canada
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                      alt=""
                      src="/iconoutlinelocationmarker.svg"
                    />
                  </div>
                </button>
                <button className="cursor-pointer py-3 px-[30px] bg-consumer-colors-complemantary rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-complemantary">
                  <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                    />
                  </div>
                  <b className="w-[62px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center min-w-[62px]">
                    Search
                  </b>
                </button>
              </div>
              <div className="w-[167px] overflow-hidden flex flex-row items-start justify-start text-gray-800 font-gilroy-regular">
                <div className="flex-1 relative tracking-[-0.1px] leading-[26px] mix-blend-normal">
                  Try Yoga, Meditation etc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-whitesmoke-100 flex flex-row items-center justify-start py-0 px-[100px] box-border gap-[56px] max-w-full text-left text-29xl text-gray-300 font-gilroy-bold mq750:pl-[25px] mq750:pr-[25px] mq750:box-border mq1225:flex-wrap mq1225:gap-[28px] mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border">
        <img
          className="h-[796px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[385px] min-h-[796px] mq750:min-w-full mq1225:flex-1"
          loading="lazy"
          alt=""
          src="/image1@2x.png"
        />
        <div className="flex-[0.8649] overflow-hidden flex flex-col items-start justify-center py-16 px-10 box-border gap-[40px] min-w-[385px] max-w-full mq750:gap-[20px] mq750:min-w-full mq1050:pt-[42px] mq1050:pb-[42px] mq1050:box-border mq450:pt-[27px] mq450:pb-[27px] mq450:box-border mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-1.8px] leading-[58px] font-normal font-inherit mq750:text-19xl mq750:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
              Your Path to Holistic Wellness
            </h1>
            <div className="self-stretch relative text-lgi tracking-[-0.2px] leading-[32px] font-gilroy-regular text-gray-900 mix-blend-normal">
              People choose us because we serve the best for everyone.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[82px] pl-0 gap-[32px] text-2xl font-web-primary-h2-primary-dm-sans mq750:gap-[16px] mq750:pr-[41px] mq750:box-border">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Diverse Healing Modalities
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
                  Explore varied healing options for your holistic well-being.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Instant Notifications
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
                  Receive instant notifications for appointment reminders.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Expert Practitioners
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
                  Connect with skilled practitioners for personalized wellness
                  guidance.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border gap-[32px] min-w-[430px] mq750:flex-wrap mq450:gap-[16px]">
              <img
                className="h-20 w-20 relative"
                loading="lazy"
                alt=""
                src="/icon1.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[195px]">
                <b className="relative tracking-[-0.5px] leading-[32px] mq450:text-mid mq450:leading-[26px]">
                  Personalized Experiences
                </b>
                <div className="self-stretch relative text-mid tracking-[-0.2px] leading-[29px] text-gray-900 mix-blend-normal">
                  Tailored services to meet your unique wellness needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[29px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h2-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Explore Best Practitioners
        </h2>
        <div className="w-[1240px] overflow-x-auto flex flex-row items-start justify-start py-0 px-0 box-border gap-[32px] max-w-full text-xl text-neutral-10 mq750:gap-[16px]">
          <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] shrink-0 flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/monogram@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <b className="self-stretch relative leading-[30px] mq450:text-base mq450:leading-[24px]">
                      The Star Studio
                    </b>
                    <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                      Yoga, Meditation
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  loading="lazy"
                  alt=""
                  src="/media@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-components-helper-text">
                <div className="flex-1 relative leading-[22px] font-web-primary-h2-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
                  Howe Street, Vancouver
                </div>
                <div className="w-[328px] hidden flex-row items-start justify-end gap-[8px] max-w-full text-center text-m3-sys-light-primary mq450:flex-wrap">
                  <div className="h-10 rounded-81xl box-border overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                  <div className="h-10 rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-col items-center justify-center text-neutral-1">
                    <div className="w-[99px] flex-1 flex flex-row items-center justify-center py-2.5 px-6 box-border">
                      <div className="self-stretch flex-1 relative tracking-[0.1px] leading-[20px] font-medium flex items-center justify-center">
                        Enabled
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-base text-neutral-10">
                  <div className="relative leading-[24px] font-medium inline-block min-w-[44px]">
                    1 mile
                  </div>
                  <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/near-me.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonBusinessCard monogram="/monogram@2x.png" />
          <ButtonBusinessCard monogram="/monogram@2x.png" propMinWidth="44px" />
          <ButtonBusinessCard monogram="/monogram@2x.png" propMinWidth="44px" />
          <ButtonBusinessCard
            monogram="/monogram-4@2x.png"
            propMinWidth="unset"
          />
          <ButtonBusinessCard
            monogram="/monogram-5@2x.png"
            propMinWidth="unset"
          />
          <ButtonBusinessCard
            monogram="/monogram-5@2x.png"
            propMinWidth="unset"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start py-14 px-[100px] box-border gap-[24px] max-w-full text-left text-13xl text-character-title-85 font-web-primary-h2-primary-dm-sans mq750:py-9 mq750:px-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h2 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
          Explore Categories
        </h2>
        <div className="self-stretch overflow-x-auto flex flex-row flex-wrap items-start justify-start gap-[32px_30px] min-h-[332px] max-w-full text-center text-neutral-1">
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[27px] px-[7px] box-border bg-[url('/public/data-filter@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Psychologists and Counselors
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/data-filter1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Mind
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/data-filter2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Body
            </h2>
          </div>
          <div className="w-[392px] rounded-3xs shrink-0 flex flex-row items-center justify-center py-[51px] px-[7px] box-border bg-[url('/public/data-filter3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
            <h2 className="m-0 flex-1 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
              Medicine
            </h2>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-consumer-colors-primary-1 flex flex-row items-start justify-start py-[140.5px] px-[100px] box-border gap-[56px] max-w-full text-left text-smi text-consumer-colors-monochromatic font-web-primary-h2-primary-dm-sans mq750:gap-[28px] mq750:py-[91px] mq750:px-[25px] mq750:box-border mq1225:flex-wrap mq1225:pl-[50px] mq1225:pr-[50px] mq1225:box-border">
        <div className="w-[690px] flex flex-col items-start justify-start gap-[32px] min-w-[690px] max-w-full mq750:gap-[16px] mq1050:min-w-full mq1225:flex-1">
          <div className="w-[589px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <b className="self-stretch relative tracking-[1.63px] uppercase">
              The Healers app
            </b>
            <h1 className="m-0 w-[568px] relative text-37xl tracking-[-1.8px] leading-[110%] font-bold font-inherit text-gray-300 inline-block max-w-full mq750:text-26xl mq750:leading-[49px] mq450:text-15xl mq450:leading-[37px]">
              Experience Wellness On the Go
            </h1>
          </div>
          <div className="self-stretch relative text-xl tracking-[-0.2px] leading-[180%] text-gray-900 mix-blend-normal mq450:text-base mq450:leading-[29px]">
            Take your wellness journey with you wherever you go with our mobile
            app. Seamlessly access our services, schedule appointments, and stay
            connected with your practitioner—all from the palm of your hand.
            With user-friendly navigation and convenient features, our app makes
            it easy to prioritize your well-being, no matter how busy life gets.
          </div>
        </div>
        <div className="w-[243px] flex flex-col items-start justify-start pt-[39.5px] px-0 pb-0 box-border min-w-[243px] text-lgi text-m3-black font-gilroy-bold mq1225:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
            <div className="rounded-2xl bg-neutral-1 flex flex-row items-start justify-start p-4 gap-[16px]">
              <div className="flex flex-row items-start justify-start py-1 px-0">
                <div className="h-4 w-4 relative rounded-[50%] bg-lightcoral" />
              </div>
              <div className="relative tracking-[-0.2px] leading-[21.6px] inline-block min-h-[48px]">
                <p className="m-0">{`Booking Made `}</p>
                <p className="m-0">Simple</p>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-center text-neutral-1">
              <div className="w-[200px] flex flex-row items-start justify-start relative">
                <div className="h-[530px] w-[409.1px] absolute !m-[0] top-[-242px] right-[-251px]">
                  <div className="absolute top-[0px] left-[234.1px] rounded-3xs bg-orange w-[175px] h-[216px] mix-blend-normal" />
                  <img
                    className="absolute top-[393.2px] left-[0px] w-[170px] h-[79px] object-contain"
                    alt=""
                    src="/group-101@2x.png"
                  />
                  <div className="absolute top-[28px] left-[118.1px] w-[227px] h-[502px] z-[1] flex items-center justify-center">
                    <img
                      className="w-full h-full z-[1] object-contain absolute left-[0px] top-[42px] [transform:scale(1.476)]"
                      loading="lazy"
                      alt=""
                      src="/group-5@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-tomato flex flex-col items-start justify-start py-8 px-6 gap-[24px] z-[2]">
                  <div className="flex flex-row items-start justify-start py-0 pr-[21px] pl-[21.5px]">
                    <img
                      className="h-[46px] w-[109px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-2.svg"
                    />
                  </div>
                  <div className="self-stretch relative tracking-[-0.2px]">
                    Best Practitioners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default ConsumerLandingPage;
