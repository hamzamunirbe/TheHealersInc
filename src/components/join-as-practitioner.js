import { useMemo } from "react";

const JoinAsPractitioner = ({
  paragraph,
  text,
  propLeft,
  propBackgroundImage,
  propPadding,
  propWidth,
  icon,
}) => {
  const joinAsPractitionerStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundImage: propBackgroundImage,
    };
  }, [propLeft, propBackgroundImage]);

  const innerDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const text1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[720px] overflow-hidden flex flex-col items-start justify-start pt-14 px-[100px] pb-[287px] box-border bg-[url('/public/join-as-practitioner@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] max-w-full text-left text-5xl text-neutral-1 font-web-primary-h2-primary-dm-sans"
      style={joinAsPractitionerStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[24px]"
        style={innerDivStyle}
      >
        <h3 className="m-0 self-stretch relative text-inherit tracking-[0.5px] font-bold font-inherit mq450:text-lgi">
          {paragraph}
        </h3>
        <button className="cursor-pointer py-[7px] px-4 bg-consumer-colors-primary-6 rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-center justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-primary-6">
          <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
              alt=""
              src="/wrapper@2x.png"
            />
          </div>
          <b
            className="w-[172px] relative text-lg leading-[26px] inline-block font-web-primary-h2-primary-dm-sans text-neutral-1 text-center"
            style={text1Style}
          >
            {text}
          </b>
        </button>
      </div>
    </div>
  );
};

export default JoinAsPractitioner;
