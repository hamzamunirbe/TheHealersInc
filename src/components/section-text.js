const SectionText = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-xl text-blue-gray-900 font-h5-medium mq750:gap-[16px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <b className="self-stretch h-5 relative tracking-[3px] leading-[100%] uppercase hidden mq450:text-base mq450:leading-[16px]">
          Testimonials
        </b>
        <div className="self-stretch h-[158px] relative text-53xl leading-[110%] font-extrabold hidden mq450:text-24xl mq450:leading-[48px] mq750:text-39xl mq750:leading-[63px]">
          Unlimited ideas for your projects
        </div>
        <h1 className="m-0 self-stretch relative text-37xl leading-[110%] font-bold font-web-primary-h3-primary-dm-sans mq450:text-15xl mq450:leading-[37px] mq750:text-26xl mq750:leading-[49px]">
          Optimize Your Healing Practices
        </h1>
      </div>
      <div className="self-stretch relative leading-[180%] font-web-primary-h3-primary-dm-sans mq450:text-base mq450:leading-[29px]">
        Maximize your potential as a practitioner with our dedicated mobile app.
        Streamline your operations, manage your products, and connect with
        customers—all from the convenience of your smartphone or tablet. Whether
        you're on the go or in your studio, our app empowers you to stay
        organized, responsive, and in control of your business.
      </div>
      <div className="w-[528px] hidden flex-row items-center justify-start gap-[16px] max-w-full text-base text-blue-600">
        <div className="h-12 rounded-lg bg-blue-600 box-border flex flex-row items-center justify-center py-3 px-2.5 text-neutral-1 border-[2px] border-solid border-blue-600">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className="h-12 rounded-lg box-border hidden flex-row items-center justify-center py-3 px-2.5 border-[2px] border-solid border-blue-600">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-1.svg"
          />
        </div>
        <div className="h-12 rounded-lg hidden flex-row items-center justify-center py-3 px-2 box-border relative">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px] z-[0]"
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-4 z-[1]">
            <div className="self-stretch relative tracking-[0.5px] leading-[24px] font-medium">
              Button Text
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[2]"
            alt=""
            src="/icon--jamicons--outline--logos--arrowright-1.svg"
          />
          <div className="!m-[0] absolute top-[8px] left-[24px] rounded-xl bg-default-alert hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] z-[3] text-center text-xs text-neutral-1">
            <div className="relative leading-[140%]">9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionText;
