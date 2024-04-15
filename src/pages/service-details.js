import NavBar3 from "../components/nav-bar3";
import FrameComponent111 from "../components/frame-component11";
import FrameComponent10 from "../components/frame-component10";

const ServiceDetails = () => {
  return (
    <div className="w-full relative bg-neutral-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border gap-[80px] leading-[normal] tracking-[normal] mq750:gap-[40px] mq450:gap-[20px]">
      <NavBar3 />
      <main className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full">
        <section className="w-[1200px] flex flex-row items-start justify-center gap-[56px] max-w-full text-left text-base text-gray-200 font-web-primary-h3-primary-dm-sans mq750:gap-[28px] mq1050:flex-wrap">
          <FrameComponent111 />
          <div className="w-[488px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[488px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-primary-6">
                <div className="relative [text-decoration:underline] leading-[24px] font-semibold">
                  Psychologists and Counselors
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-13xl text-m3-black mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[4px]">
                    <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit mq450:text-lgi mq450:leading-[29px] mq1050:text-7xl mq1050:leading-[38px]">
                      Service Name
                    </h1>
                    <div className="relative text-sm leading-[22px] font-semibold inline-block min-w-[44px]">
                      Online
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0 text-5xl text-neutral-11">
                    <b className="relative leading-[36px] inline-block min-w-[46px] whitespace-nowrap mq450:text-lgi mq450:leading-[29px]">
                      $30
                    </b>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-gray-200">
                  <div className="self-stretch flex flex-row items-center justify-between py-1 px-0 gap-[20px] mq450:flex-wrap">
                    <div className="w-32 relative leading-[12px] font-semibold flex items-center shrink-0">
                      Date
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[7px]">
                      <img
                        className="self-stretch w-[35.2px] rounded-81xl max-h-full overflow-hidden shrink-0 object-contain min-h-[20px]"
                        alt=""
                        src="/button-1@2x.png"
                      />
                      <img
                        className="self-stretch w-[35.2px] rounded-81xl max-h-full overflow-hidden shrink-0 object-contain min-h-[20px]"
                        alt=""
                        src="/button-2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[62px] pl-0 gap-[8px] text-center text-xs text-darkslategray mq750:pr-[31px] mq750:box-border mq450:flex-wrap">
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start py-2 px-[7px] box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="w-[39px] relative leading-[18px] uppercase flex items-center justify-center min-w-[39px]">
                        22 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Fri
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-consumer-colors-primary flex flex-col items-center justify-start py-2 px-[7.5px] box-border gap-[2px] min-w-[53px] max-w-[54px] text-neutral-1">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[39px]">
                        23 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Sat
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start py-2 px-[7.5px] box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[39px]">
                        24 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Sun
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start py-2 px-[7.5px] box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[39px]">
                        25 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Mon
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start py-2 px-[7.5px] box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[39px]">
                        26 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Tue
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start p-2 box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[38px]">
                        27 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Wed
                      </div>
                    </div>
                    <div className="flex-1 rounded bg-aliceblue flex flex-col items-center justify-start py-2 px-[7.5px] box-border gap-[2px] min-w-[53px] max-w-[54px]">
                      <b className="self-stretch relative leading-[18px] uppercase inline-block min-w-[39px]">
                        28 Feb
                      </b>
                      <div className="self-stretch h-3.5 relative leading-[18px] flex items-center justify-center shrink-0">
                        Thu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <div className="w-[342px] flex flex-row items-center justify-start py-1 px-0 box-border max-w-full">
                    <div className="w-32 relative leading-[12px] font-semibold flex items-center shrink-0">
                      Availability
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start">
                    <button className="cursor-pointer py-1 px-[3px] bg-[transparent] rounded overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-consumer-colors-primary">
                      <div className="rounded-81xl bg-primary-dark hidden flex-col items-center justify-center relative">
                        <div className="w-2 h-2 absolute !m-[0] right-[-2px] bottom-[-2px] rounded-45xl bg-neutral-1 hidden z-[0]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-success-main overflow-hidden flex flex-row items-start justify-start">
                            <div className="h-2 w-2 relative rounded-81xl" />
                          </div>
                        </div>
                        <div className="w-[17px] absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_8.5px)] text-xs tracking-[0.4px] leading-[166%] font-h5-medium text-neutral-1 text-center inline-block z-[1]">
                          OP
                        </div>
                        <div className="w-6 h-6 relative [transform:_rotate(-90deg)] z-[2]" />
                      </div>
                      <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                        <b className="relative text-xs leading-[18px] uppercase font-web-primary-h3-primary-dm-sans text-consumer-colors-primary text-left whitespace-nowrap">
                          09:00 AM to 05:00 PM
                        </b>
                      </div>
                      <img
                        className="h-6 w-6 relative rounded-81xl overflow-hidden shrink-0 hidden min-h-[24px]"
                        alt=""
                        src="/cancelfilled1.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="w-32 h-3 relative leading-[24px] font-semibold flex items-center shrink-0">
                  Timings
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0.5 pl-0 gap-[24px_22px] text-xs text-text-secondary">
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[93px]">
                    <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                      <div className="relative leading-[18px] inline-block min-w-[58px]">
                        Start Time
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start text-base text-text-primary font-h5-medium">
                        <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                          <div className="hidden flex-row items-start justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/starsharp.svg"
                            />
                          </div>
                        </div>
                        <div className="h-6 w-0 relative hidden" />
                        <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden" />
                        <div className="flex-1 relative leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-ref-neutral-neutral20 whitespace-nowrap">
                          09:00 AM
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                          <div className="w-6 h-px flex flex-row items-start justify-start relative">
                            <img
                              className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] max-w-full overflow-hidden"
                              alt=""
                              src="/arrow-drop-down.svg"
                            />
                          </div>
                        </div>
                        <div className="h-0 w-6 relative hidden" />
                      </div>
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
                    </div>
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-h5-medium">
                      <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                        Helper text
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[93px]">
                    <div className="h-[53px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[5.5px] box-border gap-[5.5px]">
                      <div className="relative leading-[18px] inline-block min-w-[52px]">
                        End Time
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start text-base text-text-primary font-h5-medium">
                        <div className="h-px w-8 hidden flex-row items-center justify-start py-0 pr-2 pl-0 box-border">
                          <div className="hidden flex-row items-start justify-start">
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0"
                              alt=""
                              src="/starsharp.svg"
                            />
                          </div>
                        </div>
                        <div className="h-6 w-0 relative hidden" />
                        <div className="self-stretch w-[220px] relative tracking-[0.15px] leading-[24px] hidden" />
                        <div className="flex-1 relative leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-ref-neutral-neutral20 whitespace-nowrap">
                          10:00 AM
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0">
                          <div className="w-6 h-px flex flex-row items-start justify-start relative">
                            <img
                              className="h-6 w-full absolute !m-[0] top-[calc(50%_-_12px)] right-[0px] left-[0px] max-w-full overflow-hidden"
                              alt=""
                              src="/arrow-drop-down.svg"
                            />
                          </div>
                        </div>
                        <div className="h-0 w-6 relative hidden" />
                      </div>
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-input-standard-enabledborder" />
                    </div>
                    <div className="h-5 w-[220px] hidden flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-h5-medium">
                      <div className="self-stretch relative tracking-[0.4px] leading-[166%]">
                        Helper text
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer py-[13px] px-5 bg-consumer-colors-primary self-stretch rounded-13xl shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-primary">
                <div className="h-3.5 w-3.5 bg-hitbox overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                  <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/wrapper4@2x.png"
                  />
                </div>
                <div className="w-[188px] relative text-lg leading-[26px] font-gilroy-bold text-neutral-1 text-center inline-block">
                  Send Booking Request
                </div>
              </button>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-center text-xs text-m3-black">
                <button className="cursor-pointer py-[13px] px-5 bg-neutral-1 self-stretch rounded-13xl shadow-[0px_2px_0px_rgba(0,_0,_0,_0.02)] flex flex-row items-start justify-center gap-[10px] border-[1px] border-solid border-neutral-8">
                  <div className="h-3.5 w-3.5 bg-hitbox overflow-hidden shrink-0 hidden flex-col items-center justify-center">
                    <img
                      className="w-6 h-6 relative overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/wrapper-14@2x.png"
                    />
                  </div>
                  <div className="w-[177px] relative text-lg leading-[26px] font-gilroy-bold text-neutral-10 text-center inline-block">
                    Chat With Practioner
                  </div>
                </button>
                <div className="w-[367px] relative leading-[18px] flex items-center justify-center max-w-full">
                  If you can’t find your desired slot feel free to reach out us
                  via chat.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent10 />
    </div>
  );
};

export default ServiceDetails;
