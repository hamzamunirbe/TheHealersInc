import DataRouter from "./data-router";
import Checkbox from "./checkbox";
import DropDownMenu from "./drop-down-menu";

const InputProcessor = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-left text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans mq750:gap-[20px]">
      <div className="h-[1063px] w-[216px] bg-neutral-1 overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[877px] box-border gap-[8px] lg:pb-[570px] lg:box-border mq750:hidden mq750:pb-60 mq750:box-border mq1050:pb-[370px] mq1050:box-border">
        <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] flex flex-row items-start justify-start pt-0 px-0 pb-2 shrink-0 [debug_commit:f6aba90]">
          <b className="relative leading-[28px] inline-block min-w-[56px]">
            Filters
          </b>
        </div>
        <DataRouter />
        <div className="self-stretch h-[1282px] bg-neutral-1 shadow-[-2px_0px_0px_#1890ff_inset] overflow-y-auto shrink-0 flex flex-col items-start justify-start [debug_commit:f6aba90] text-sm text-m3-black">
          <div className="self-stretch h-[1234px] shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-start justify-start py-3 px-6 gap-[17px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative leading-[22px] font-semibold inline-block min-w-[127px]">
                  Service Categories
                </div>
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/keyboard-arrow-up.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <input
                        className="m-0 w-6 h-6 relative rounded overflow-hidden shrink-0"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex-1 relative leading-[22px]">
                      Psychologists and Counselors
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          alt=""
                          src="/keyboard-arrow-up.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative leading-[22px]">
                          Trauma
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative leading-[22px]">
                          Pediatric
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative leading-[22px]">
                          Psychoanalysis
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative leading-[22px]">
                          DBT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                      <input
                        className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                        type="checkbox"
                      />
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="relative leading-[22px] inline-block min-w-[112px]">
                          Psychodynamics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                    <input
                      className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                      type="checkbox"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="self-stretch relative leading-[22px]">
                        Mind
                      </div>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard-arrow-up.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Life Counseling
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Hypnotherapy
                        </div>
                      </div>
                    </div>
                  </button>
                  <Checkbox title="Spiritual help and guidance" />
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Meditation
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="self-stretch hidden flex-col items-end justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="h-[22px] flex-1 relative leading-[22px] inline-block shrink-0">
                        Title
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-neutral-1 flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                    <input
                      className="m-0 h-6 w-6 relative rounded overflow-hidden shrink-0"
                      type="checkbox"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <div className="self-stretch relative leading-[22px]">
                        Body
                      </div>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard-arrow-up.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                        <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      </div>
                      <div className="flex-1 relative leading-[22px]">
                        Acupuncture and Acupressure
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Massage
                        </div>
                      </div>
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="self-stretch relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                          Yoga
                        </div>
                      </div>
                    </div>
                  </button>
                  <Checkbox
                    title="Trauma release exercises"
                    propLineHeight="44px"
                  />
                  <div className="self-stretch hidden flex-col items-end justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="h-[22px] flex-1 relative leading-[22px] inline-block shrink-0">
                        Title
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                <button className="cursor-pointer [border:none] py-3 px-4 bg-neutral-1 self-stretch flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-200">
                  <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                    <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                    <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                        Medicine
                      </div>
                    </div>
                    <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/keyboard-arrow-up.svg"
                      />
                    </div>
                  </div>
                </button>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                        <div className="self-stretch h-[22px] relative leading-[22px] flex items-center">
                          Naturopath
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="self-stretch w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
                        <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      </div>
                      <div className="self-stretch flex-1 relative leading-[22px] flex items-center">
                        Traditional chinese medicine
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-end border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                        <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                          Ayurvedic
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                        <div className="self-stretch h-[22px] relative leading-[22px] flex items-center">
                          Homeopathy
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-end py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                    <div className="w-[152px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[16px]">
                      <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                      <input
                        className="w-full [border:none] [outline:none] bg-[transparent] h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-web-primary-h3-primary-dm-sans text-sm text-m3-black min-w-[67px]"
                        placeholder="Title"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px] text-neutral-11">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
              <div className="h-[22px] w-[60px] relative leading-[22px] font-semibold inline-block">
                Distance
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-down1.svg"
                />
              </div>
            </div>
            <DropDownMenu />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-row flex-wrap items-start justify-end gap-[24px_23px] min-h-[1196px] max-w-[calc(100%_-_256px)] text-xl text-neutral-10 mq750:max-w-full">
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
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
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    The Star Studio
                  </h3>
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
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-1@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    The Star Studio
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">{`Life counseling, Meditation, Hypnotherapy `}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[298px] rounded-xl bg-neutral-1 shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15)] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="h-10 w-10 relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/monogram-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-inherit mq450:text-base mq450:leading-[24px]">
                    Shapes
                  </h3>
                  <div className="self-stretch relative text-sm leading-[22px] text-neutral-7 overflow-hidden text-ellipsis whitespace-nowrap">
                    Massage, Yoga, Acupuncture, Trauma release exercises
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[200px] flex flex-col items-center justify-start">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/media1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-6 px-4 gap-[16px] text-sm text-neutral-8 font-h5-medium">
              <div className="flex-1 relative leading-[22px] font-web-primary-h3-primary-dm-sans overflow-hidden text-ellipsis whitespace-nowrap">
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
                    alt=""
                    src="/near-me1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between min-w-[378px] max-w-full gap-[20px] text-center text-sm text-m3-black mq750:flex-wrap">
          <div className="w-[195px] relative leading-[22px] font-semibold flex items-center justify-center">
            Showing 12 Results out of 120
          </div>
          <div className="w-[408px] flex flex-row items-center justify-center py-4 pr-0 pl-8 box-border gap-[32px] max-w-full text-neutral-7 mq450:flex-wrap mq450:gap-[16px]">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/navigate-before.svg"
              />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[259px]">
              <div className="flex-[0.3333] rounded-3xl bg-consumer-colors-primary-1 flex flex-col items-center justify-center py-px px-[9.5px] text-consumer-colors-primary">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[5px]">
                  1
                </div>
              </div>
              <div className="flex-[0.6] rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[9px]">
                  2
                </div>
              </div>
              <div className="flex-[0.6] rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[9px]">
                  3
                </div>
              </div>
              <div className="flex-[0.6] rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[9px]">
                  4
                </div>
              </div>
              <div className="flex-[0.6] rounded-3xl flex flex-col items-center justify-center py-px px-[7.5px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[9px]">
                  5
                </div>
              </div>
              <div className="flex-[0.6667] rounded-3xl flex flex-col items-center justify-center py-px px-[7px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[10px]">
                  ...
                </div>
              </div>
              <div className="flex-1 rounded-3xl flex flex-col items-center justify-center py-px px-[4.5px]">
                <div className="self-stretch relative leading-[22px] font-semibold inline-block min-w-[15px]">
                  10
                </div>
              </div>
            </div>
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/navigate-next.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputProcessor;
