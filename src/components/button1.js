const Button1 = () => {
  return (
    <button className="cursor-pointer py-[17px] px-5 bg-consumer-colors-primary self-stretch rounded shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-center gap-[10px] border-[1px] border-solid border-consumer-colors-primary">
      <div className="bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
        <img
          className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
          alt=""
          src="/wrapper@2x.png"
        />
      </div>
      <b className="w-[67px] relative text-lg leading-[26px] inline-block font-web-primary-h3-primary-dm-sans text-neutral-1 text-center min-w-[67px] whitespace-nowrap">
        Sign Up
      </b>
    </button>
  );
};

export default Button1;
