import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();

  const onServicesTextClick = useCallback(() => {
    navigate("/search-results-services");
  }, [navigate]);

  const onPractitionersTextClick = useCallback(() => {
    navigate("/search-results-practitioners");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full text-left text-base text-text-primary font-web-primary-h2-primary-dm-sans">
      <div className="flex-1 flex flex-row items-start justify-center py-0 px-5 box-border [row-gap:20px] max-w-full lg:flex-wrap lg:justify-start">
        <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
          <div className="w-4 h-2 flex flex-col items-start justify-start">
            <div className="w-px h-2 relative hidden" />
          </div>
        </div>
        <div className="w-[868px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full text-13xl">
          <h1 className="m-0 self-stretch relative text-inherit leading-[48px] font-bold font-inherit mq1050:text-7xl mq1050:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            Showing Best Services in Vancouver, Canada
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start pt-7 px-0 pb-0">
          <div className="w-4 h-2 flex flex-col items-start justify-start">
            <div className="w-px h-2 relative hidden" />
          </div>
        </div>
        <div className="w-[857px] hidden flex-row items-start justify-start max-w-full text-text-secondary font-components-helper-text">
          <div className="h-7 flex-1 relative tracking-[0.15px] leading-[175%] flex items-center max-w-full">
            Description
          </div>
        </div>
        <div className="w-[300px] flex flex-row items-start justify-between pt-5 pb-[19px] pr-6 pl-[42px] box-border relative gap-[20px] text-center text-neutral-1 mq450:pl-5 mq450:box-border">
          <div className="h-[50px] w-full absolute !m-[0] top-[calc(50%_-_25px)] right-[0px] left-[0px] rounded-13xl bg-neutral-1 box-border border-[1px] border-solid border-whitesmoke-200" />
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[50px] w-[150px] absolute !m-[0] top-[calc(50%_-_25px)] left-[calc(50%_-_75px)] rounded-tl-13xl rounded-tr-none rounded-br-none rounded-bl-13xl bg-consumer-colors-primary z-[1]" />
            <div
              className="w-[66px] relative leading-[24px] font-semibold inline-block min-w-[66px] cursor-pointer z-[2]"
              onClick={onServicesTextClick}
            >
              Services
            </div>
          </div>
          <div className="w-[101px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border text-neutral-8">
            <div
              className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[101px] cursor-pointer z-[1]"
              onClick={onPractitionersTextClick}
            >
              Practitioners
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;