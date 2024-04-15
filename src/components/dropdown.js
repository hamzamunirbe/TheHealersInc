import DataRouter from "./data-router";
import DropDownMenu from "./drop-down-menu";
import ServiceCard from "./service-card";

const Dropdown = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full text-left text-lg text-neutral-8 font-web-primary-h3-primary-dm-sans mq750:gap-[20px]">
      <div className="w-[216px] flex flex-col items-start justify-start gap-[8px] mq750:hidden">
        <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] flex flex-row items-start justify-start pt-0 px-0 pb-2">
          <b className="relative leading-[28px] inline-block min-w-[56px]">
            Filters
          </b>
        </div>
        <DataRouter propDebugCommit="unset" />
        <form className="m-0 self-stretch bg-neutral-1 shadow-[-2px_0px_0px_#1890ff_inset] overflow-hidden flex flex-col items-start justify-start">
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-start justify-start py-3 px-6 gap-[17px] shrink-0 [debug_commit:f6aba90]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[127px]">
                  Service Categories
                </div>
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-down1.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[896px] overflow-hidden shrink-0 flex flex-col items-start justify-start [debug_commit:f6aba90]">
              <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      All
                    </div>
                  </div>
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Trauma
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-3 px-4 bg-[transparent] self-stretch flex flex-row items-start justify-start border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Pediatric
                    </div>
                  </div>
                </div>
              </button>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Psychoanalysis
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      DBT
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Psychodynamic
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Life Counseling
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Hypnotherapy
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    Spiritual Help and Guidance
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">{`Acupuncture & Acupressure`}</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Massage
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 z-[1] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Yoga
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-start py-3 px-4 z-[2] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    Trauma release exercises
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 z-[3] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Naturopath
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[68px] box-border flex flex-row items-start justify-start py-3 px-4 z-[4] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <div className="w-6 h-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    Traditional Chinese Medicine
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 z-[5] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Ayurvedic
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-3 px-4 z-[6] border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[23px] flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch h-[22px] relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                      Homeopathy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[60px]">
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
            <DropDownMenu
              propWidth="unset"
              propAlignSelf="stretch"
              propColor="#000"
              propWidth1="unset"
              propAlignSelf1="stretch"
              propColor1="#000"
              propWidth2="unset"
              propAlignSelf2="stretch"
              propColor2="#000"
              propWidth3="unset"
              propAlignSelf3="stretch"
              propColor3="#000"
              propWidth4="unset"
              propAlignSelf4="stretch"
              propColor4="#000"
              propWidth5="unset"
              propAlignSelf5="stretch"
              propColor5="#000"
              propWidth6="unset"
              propAlignSelf6="stretch"
              propHeight="unset"
              propDisplay="unset"
              propWidth7="unset"
              propAlignSelf7="stretch"
              propHeight1="unset"
              propDisplay1="unset"
              propWidth8="unset"
              propAlignSelf8="stretch"
              propHeight2="unset"
              propDisplay2="unset"
              propWidth9="unset"
              propAlignSelf9="stretch"
              propHeight3="unset"
              propDisplay3="unset"
              propWidth10="unset"
              propAlignSelf10="stretch"
              propHeight4="unset"
              propDisplay4="unset"
              propWidth11="unset"
              propAlignSelf11="stretch"
              propHeight5="unset"
              propDisplay5="unset"
              propWidth12="unset"
              propAlignSelf12="stretch"
              propHeight6="unset"
              propDisplay6="unset"
              propWidth13="unset"
              propAlignSelf13="stretch"
              propHeight7="unset"
              propDisplay7="unset"
              propWidth14="unset"
              propAlignSelf14="stretch"
              propWidth15="unset"
              propAlignSelf15="stretch"
              propHeight8="unset"
              propDisplay8="unset"
              propWidth16="unset"
              propAlignSelf16="stretch"
              propHeight9="unset"
              propDisplay9="unset"
            />
          </div>
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[35px]">
                Price
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-down1.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-48 overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    $0 - $30
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    $30 - $60
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    $60 - $100
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    $100+
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    25 Miles
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    50+ Miles
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Life Counseling
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Hypnotherapy
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Spiritual Help and Guidance
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">{`Acupuncture & Acupressure`}</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Massage
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Yoga
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Trauma release exercises
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Naturopath
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[12px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-11 flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Traditional Chinese Medicine
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Ayurvedic
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Homeopathy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-start justify-between py-3 px-6 shrink-0 [debug_commit:f6aba90]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[103px]">
                  Session Length
                </div>
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-down1.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90]">
              <div className="flex-1 flex flex-row items-start justify-start py-0 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start py-[21px] px-0 relative">
                    <div className="w-full h-1 absolute !m-[0] top-[calc(50%_-_2px)] right-[0px] left-[0px] rounded-81xl bg-cornflowerblue" />
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <div className="h-1.5 w-[42px] absolute !m-[0] top-[calc(50%_-_3px)] left-[0px] rounded-81xl bg-primary-main z-[1]" />
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] z-[2]">
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-gray-600 w-full h-full z-[1]" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-gray-600 w-full h-full z-[1]" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                        </div>
                        <div className="h-0.5 w-0.5 relative rounded-81xl overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-81xl bg-primary-main w-full h-full" />
                        </div>
                      </div>
                      <img
                        className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[38px] rounded-81xl z-[3]"
                        alt=""
                        src="/-sliderthumb.svg"
                      />
                    </div>
                    <div className="w-[41px] hidden flex-col items-center justify-start z-[2]">
                      <div className="self-stretch rounded bg-grey-600 overflow-hidden flex flex-row items-center justify-center py-1 px-3">
                        <div className="h-[22px] flex-1 relative text-sm tracking-[0.1px] leading-[157%] font-medium font-h5-medium text-neutral-1 text-left inline-block">
                          20
                        </div>
                      </div>
                      <img
                        className="w-3 h-1.5 relative object-contain"
                        alt=""
                        src="/arrow.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-5 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch w-4 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                        30
                      </div>
                    </div>
                    <div className="self-stretch flex-1 rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                      <div className="self-stretch w-4 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                        60
                      </div>
                    </div>
                    <div className="self-stretch w-4 rounded-81xl overflow-hidden shrink-0 flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 relative text-sm tracking-[0.17px] leading-[143%] font-h5-medium text-text-secondary text-center flex items-center justify-center">
                        12
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-[264px] flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    1 Mile
                  </div>
                </div>
              </div>
              <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    5 Miles
                  </div>
                </div>
              </div>
              <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    10 Miles
                  </div>
                </div>
              </div>
              <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    25 Miles
                  </div>
                </div>
              </div>
              <div className="h-12 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    50+ Miles
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Life Counseling
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Hypnotherapy
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Spiritual Help and Guidance
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">{`Acupuncture & Acupressure`}</div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Massage
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Yoga
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Trauma release exercises
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Naturopath
                  </div>
                </div>
              </div>
              <div className="h-[68px] box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 flex-1 overflow-hidden flex flex-row items-center justify-start gap-[12px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    Traditional Chinese Medicine
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-[264px] overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Ayurvedic
                  </div>
                </div>
              </div>
              <div className="hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="w-56 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Homeopathy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[34px]">
                Time
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-up.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                    Before 08:00 AM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                    08:00 AM - 12:00 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                    12:00 PM - 04:00 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                    04:00 PM - 07:00 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="relative text-sm leading-[24px] font-web-primary-h3-primary-dm-sans text-m3-black text-left whitespace-nowrap">
                    After 07:00 PM
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    50+ Miles
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Life Counseling
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Hypnotherapy
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Spiritual Help and Guidance
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">{`Acupuncture & Acupressure`}</div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Massage
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Yoga
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Trauma release exercises
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Naturopath
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Traditional Chinese Medicine
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Ayurvedic
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left">
                    Homeopathy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch bg-neutral-1 shadow-[0px_-1px_0px_#f0f0f0_inset] overflow-hidden flex flex-row items-center justify-between py-3 px-6 gap-[20px]">
              <div className="relative text-sm leading-[22px] font-semibold font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block min-w-[89px]">
                Session Type
              </div>
              <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/keyboard-arrow-down1.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-36 overflow-hidden shrink-0 flex flex-col items-center justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    All
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    Online
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    On-Site
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    10 Miles
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    25 Miles
                  </div>
                </div>
              </div>
              <div className="self-stretch hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="overflow-hidden flex flex-row items-center justify-start">
                    <div className="h-6 w-6 rounded-81xl flex flex-row items-center justify-start">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/-hidden.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left flex items-center">
                    50+ Miles
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Life Counseling
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Hypnotherapy
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Spiritual Help and Guidance
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">{`Acupuncture & Acupressure`}</div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Massage
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Yoga
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Trauma release exercises
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Naturopath
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[12px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-11 flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Traditional Chinese Medicine
                  </div>
                </div>
              </div>
              <div className="w-[296px] box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Ayurvedic
                  </div>
                </div>
              </div>
              <div className="w-64 box-border hidden flex-col items-start justify-center py-3 px-4 border-b-[2px] border-solid border-whitesmoke-200">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[16px]">
                  <div className="h-6 w-6 relative rounded bg-input-field-background overflow-hidden shrink-0" />
                  <div className="h-[22px] flex-1 relative text-sm leading-[22px] font-web-primary-h3-primary-dm-sans text-m3-black text-left inline-block">
                    Homeopathy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_256px)] text-5xl text-neutral-11 mq750:max-w-full">
        <ServiceCard
          featuredImage="/featured-image@2x.png"
          yoga="Yoga"
          theStarStudio="The Star Studio"
          unwindAndRejuvenateWithOu={`Unwind and rejuvenate with our calming yoga class, designed to cultivate strength, flexibility, and inner peace. Led by experienced instructors, this class offers a harmonious blend of gentle movements, mindful breathing, and relaxation techniques to leave you feeling refreshed and centered."`}
        />
        <ServiceCard
          featuredImage="/featured-image-1@2x.png"
          yoga="Meditation"
          theStarStudio="Oxygen Yoga and Fitness"
          unwindAndRejuvenateWithOu="Immerse yourself in tranquility and self-discovery with our meditation class. Guided by seasoned instructors, this session offers a serene sanctuary to cultivate mindfulness, reduce stress, and find inner clarity through breath awareness and guided visualization."
          propMinWidth="129px"
          propMinWidth1="unset"
        />
        <ServiceCard
          featuredImage="/featured-image-2@2x.png"
          yoga="Pilates"
          theStarStudio="Young and Fit"
          unwindAndRejuvenateWithOu="Elevate your fitness routine with our dynamic Pilates class. Led by certified instructors, this energizing session focuses on strengthening your core, improving flexibility, and enhancing overall body alignment through controlled movements and precise breathing techniques."
          propMinWidth="79px"
          propMinWidth1="104px"
        />
        <ServiceCard
          featuredImage="/featured-image-2@2x.png"
          yoga="Pilates"
          theStarStudio="Young and Fit"
          unwindAndRejuvenateWithOu="Elevate your fitness routine with our dynamic Pilates class. Led by certified instructors, this energizing session focuses on strengthening your core, improving flexibility, and enhancing overall body alignment through controlled movements and precise breathing techniques."
          propMinWidth="79px"
          propMinWidth1="104px"
        />
        <ServiceCard
          featuredImage="/featured-image-2@2x.png"
          yoga="Pilates"
          theStarStudio="Young and Fit"
          unwindAndRejuvenateWithOu="Elevate your fitness routine with our dynamic Pilates class. Led by certified instructors, this energizing session focuses on strengthening your core, improving flexibility, and enhancing overall body alignment through controlled movements and precise breathing techniques."
          propMinWidth="79px"
          propMinWidth1="104px"
        />
        <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-center text-sm text-m3-black mq750:flex-wrap">
          <div className="w-[195px] relative leading-[22px] font-semibold flex items-center justify-center">
            Showing 12 Results out of 120
          </div>
          <div className="w-[408px] flex flex-row items-center justify-center py-4 pr-0 pl-8 box-border gap-[32px] max-w-full text-neutral-7 mq450:flex-wrap mq450:gap-[16px]">
            <div className="bg-hitbox overflow-hidden flex flex-col items-center justify-center">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                loading="lazy"
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
                loading="lazy"
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

export default Dropdown;
